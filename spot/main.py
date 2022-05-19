import signal

from spot_controller import SpotController

import multiprocessing
import os
import requests
import time
import subprocess
from datetime import datetime

from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
import json
import robonomicsinterface as RI
from substrateinterface import SubstrateInterface
from pinatapy import PinataPy
from scipy.interpolate import Rbf

PROCESSES = []

# Constants to access spot robot
SPOT_USERNAME = os.environ.get("SPOT_USERNAME", "admin")
SPOT_PASSWORD = os.environ.get("SPOT_PASSWORD", "2zqa8dgw7lor")
SPOT_IP = os.environ.get("SPOT_IP", "192.168.50.3")

INTERACTION_MODE = os.environ.get("INTERACTION_MODE", "movement")

# Videoserver url
VIDEOSERVER_URL = os.environ.get("VIDEOSERVER_IP", "http://10.200.0.8:8000/")

# Security token to execute video server commands
VIDEOSERVER_TOKEN = os.environ.get("VIDEOSERVER_TOKEN", "")

USE_ROBONOMICS = os.environ.get("USE_ROBONOMICS", 1)
ROBONOMICS_LISTEN_ROBOT_ACCOUNT = os.environ.get("ROBONOMICS_LISTEN_ROBOT_ACCOUNT",
                                                 "4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j")
PINATA_API_KEY = os.environ["PINATA_API_KEY"]
PINATA_SECRET_API_KEY = os.environ["PINATA_SECRET_API_KEY"]

MOVEMENT_SESSION_DURATION_TIME = 120

coord_nodes = json.load(open("calibration_data_final.json")) if os.path.exists("calibration_data_final.json") else {
    "x": [0, 0, 400, 400],
    "y": [0, 300, 0, 300],
    "yaw": [-0.4, -0.4, 0.4, 0.4],
    "pitch": [-0.4, 0.4, -0.4, 0.4],
    "max_width": 400,
    "max_height": 300
}

max_width = coord_nodes["max_width"]
max_height = coord_nodes["max_height"]


def send_command_to_videoserver(command_name):
    requests.post(VIDEOSERVER_URL + command_name, json={"token": VIDEOSERVER_TOKEN})


def get_spot_face_on_camera_coords():
    res = requests.get(VIDEOSERVER_URL + "get_spot_face_coords", json={"token": VIDEOSERVER_TOKEN})
    return res.json()['coords']


def notify_start_line():
    send_command_to_videoserver("start_line")


def notify_stop_line():
    send_command_to_videoserver("stop_line")


def centralize(xx, yy, all_segments):
    all_xx = [segment[0] for segment in all_segments]
    all_yy = [segment[1] for segment in all_segments]

    min_x = min(all_xx)
    min_y = min(all_yy)
    xx = [x - min_x for x in xx]
    yy = [y - min_y for y in yy]

    max_x = max(all_xx)
    max_y = max(all_yy)
    xx = [x * max_width / max_x for x in xx]
    yy = [y * max_height / max_y for y in yy]
    return xx, yy


def get_account_nonce(address) -> int:
    substrate = SubstrateInterface(
        url="wss://kusama.rpc.robonomics.network/",
        ss58_format=32,
        type_registry_preset="substrate-node-template",
        type_registry={
            "types": {
                "Record": "Vec<u8>",
                "<T as frame_system::Config>::AccountId": "AccountId",
                "RingBufferItem": {
                    "type": "struct",
                    "type_mapping": [
                        ["timestamp", "Compact<u64>"],
                        ["payload", "Vec<u8>"],
                    ],
                },
            }
        }
    )
    return substrate.get_account_nonce(address)


def empty_handler():
    pass


def calibration_movement(sc):
    global max_width, max_height, coord_nodes

    yaws = [(-1) ** (j % 2) * i / 10 for j in range(8) for i in range(-5, 6, 1)]
    pitches = [i / 10 for i in range(-5, 3, 1) for j in range(11)]
    rolls = [0] * len(yaws)

    calibration_result = {
        "x": [], "y": [], "yaw": [], "pitch": []
    }

    for i in range(len(yaws)):
        sc.move_head_in_points(yaws=yaws[i:i + 1], pitches=pitches[i:i + 1], rolls=rolls[i:i + 1])
        x, y = get_spot_face_on_camera_coords()
        calibration_result["x"].append(x)
        calibration_result["y"].append(y)
        calibration_result["yaw"].append(yaws[i])
        calibration_result["pitch"].append(pitches[i])
        time.sleep(0.3)

    print(calibration_result)

    with open('calibration_data_raw.json', 'w') as outfile:
        json_string = json.dumps(calibration_result)
        outfile.write(json_string)

    left_upper_x = max([calibration_result["x"][i] for i in range(len(calibration_result["x"]))
                        if calibration_result["yaw"][i] == min(yaws)])
    left_upper_y = max([calibration_result["y"][i] for i in range(len(calibration_result["y"]))
                        if calibration_result["pitch"][i] == min(pitches)])

    right_bottom_x = min([calibration_result["x"][i] for i in range(len(calibration_result["x"]))
                          if calibration_result["yaw"][i] == max(yaws)])
    right_bottom_y = min([calibration_result["y"][i] for i in range(len(calibration_result["y"]))
                          if calibration_result["pitch"][i] == max(pitches)])

    max_width = right_bottom_x - left_upper_x
    max_height = right_bottom_y - left_upper_y

    calibration_result["x"] = [calibration_result["x"][i] - left_upper_x for i in range(len(calibration_result["x"]))]
    calibration_result["y"] = [calibration_result["y"][i] - left_upper_y for i in range(len(calibration_result["y"]))]

    coord_nodes = calibration_result
    coord_nodes["max_width"] = max_width
    coord_nodes["max_height"] = max_height

    with open('calibration_data_final.json', 'w') as outfile:
        json_string = json.dumps(coord_nodes)
        outfile.write(json_string)

    sc.update_interpolator(coord_nodes)


def server(movement_queue, drawing_queue, robot_state):
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}})

    @app.route("/current_state", methods=["GET"])
    def current_state():
        return {
            'queue_size': drawing_queue.qsize(),
            'robot_state': robot_state['state'],
            'last_session_id': robot_state['last_session_id'],
        }

    @app.route('/draw_figure', methods=['POST'])
    def draw_figure():
        print("GOT DRWAWING REQUEST")
        data = request.get_json()
        if 'segments' in data:
            segments = data['segments']
            drawing_queue.put(segments)
        return {'status': 'started'}

    @app.route('/go_to_point', methods=["POST"])
    def go_to_point():
        print("GOT MOVEMENT REQUEST")
        data = request.get_json()
        nodes = data['calibration_nodes']
        coord_nodes = {k: [dic[k] for dic in nodes] for k in nodes[0]}
        robot_x_interpolate = Rbf(coord_nodes["camera_x"], coord_nodes["camera_y"], coord_nodes["robot_x"],
                                  function="linear")
        robot_y_interpolate = Rbf(coord_nodes["camera_x"], coord_nodes["camera_y"], coord_nodes["robot_y"],
                                  function="linear")

        camera_point_coords = data['camera_point_coords']
        robot_x_aim = float(robot_x_interpolate(camera_point_coords[0], camera_point_coords[1]))
        robot_y_aim = float(robot_y_interpolate(camera_point_coords[0], camera_point_coords[1]))
        movement_queue.put([robot_x_aim, robot_y_aim])
        return {'status': 'ok'}
    app.run(host='0.0.0.0', port=1234)


def spot_controller(movement_queue, drawing_queue, robot_state):
    def execute_drawing_command():
        segments_task = drawing_queue.get()
        calibrate = False
        if len(segments_task) == 0:
            # calibrate robot
            calibrate = True

        print("Got task", segments_task)

        # notify videoserver to clear canvas
        send_command_to_videoserver("clear_canvas")

        all_segments = []
        for segment in segments_task:
            all_segments += segment
        print("Got segments", all_segments)

        robot_state['state'] = "executing"

        print("Starting spot controller")
        sc = SpotController(SPOT_USERNAME, SPOT_PASSWORD, SPOT_IP, coord_nodes)

        print("Spot controller started")
        sc.lease_control()
        print("Lease control got")
        sc.power_on_stand_up()
        print("Robot powered and stand up")

        print("Starting movement...")

        if calibrate:
            calibration_movement(sc)
        else:
            for i, segments in enumerate(segments_task):
                print("Drawing segment")

                time.sleep(0.1)

                xx, yy = centralize([segment[0] for segment in segments], [segment[1] for segment in segments],
                                    all_segments)
                sc.move_to_draw(start_drawing_trigger_handler=notify_start_line,
                                end_drawing_trigger_handler=notify_stop_line,
                                xx=xx, yy=yy)
                time.sleep(0.1)

        print("Movement finished")
        print("Ready to turn off")
        sc.power_off_sit_down()
        robot_state['state'] = "saving_data"
        print("Robot powered off and sit down")
        time.sleep(1)

    def start_movement_sesstion():
        print("Starting movement session")

        print("Starting spot controller")
        sc = SpotController(SPOT_USERNAME, SPOT_PASSWORD, SPOT_IP, coord_nodes)

        print("Spot controller started")
        sc.lease_control()
        print("Lease control got")
        sc.power_on_stand_up()
        print("Robot powered and stand up")

        robot_state['state'] = 'waiting_movement_command (left: {}s)'.format(MOVEMENT_SESSION_DURATION_TIME)
        session_start_time = time.time()

        while True:
            current_time = time.time()
            current_duration = current_time - session_start_time
            robot_state['state'] = 'waiting_movement_command (left: {}s)'.format(MOVEMENT_SESSION_DURATION_TIME-current_duration)

            if current_duration < MOVEMENT_SESSION_DURATION_TIME:
                try:
                    aim_robot_point = movement_queue.get(block=False)
                except:
                    aim_robot_point = None
                if not aim_robot_point:
                    continue

                robot_state['state'] = 'executing_movement_command'
                sc.move_to_goal(aim_robot_point[0], aim_robot_point[1])

            else:
                # go to 0,0
                sc.move_to_goal(0, 0)
                sc.power_off_sit_down()
                robot_state['state'] = "saving_data"
                print("Robot powered off and sit down")
                time.sleep(1)
                break

    def robonomics_transaction_callback(data, event_id):
        """Execution sequence.

        1. Start robot state recording,
        2. Move the robot,
        3. Stop recording,
        4. Upload recording to Pinata,
        5. Create trace on the backend.
        """

        sender, recipient, _ = data
        session_id = get_account_nonce(sender)
        created_at_str = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%S")
        record_folder_name = "user-{}-cps-{}-session-{}-{}".format(
            sender,
            recipient,
            session_id,
            created_at_str
        )
        # bag_name = "user-{}-cps-{}-session-{}-{}.bag".format(
        #     sender,
        #     recipient,
        #     session_id,
        #     datetime.utcnow().strftime("%Y-%m-%d-%H-%M-%S"),
        # )
        # video_name = "user-{}-cps-{}-session-{}-{}.mp4".format(
        #     sender,
        #     recipient,
        #     session_id,
        #     datetime.utcnow().strftime("%Y-%m-%d-%H-%M-%S"),
        # )
        bag_name = "state.bag"
        video_name = "camera.mp4"
        print("New launch, sender={}, recipient={}, session_id={}, bag={}".format(
            sender, recipient, session_id, bag_name))
        try:
            os.makedirs("./traces/{}".format(record_folder_name), exist_ok=True)

            # duration=5m limits max recoding time and prevents orphan processes keep recording forever
            recorder = subprocess.Popen(
                ["rosbag", "record", "--duration=5m", "--output-name={}".format(bag_name), "/tf", "/tf_static",
                 "/joint_states"],
                cwd="./traces/{}/".format(record_folder_name),  # directory to put files
            )

            # start recording stream from videoserver
            video_url = VIDEOSERVER_URL + "video"
            result_image_name = "result.jpg"
            video_recorder = subprocess.Popen(["python3", "video_recorder.py", "--video_url={}".format(video_url),
                                               "--output_file=./traces/{}/{}".format(record_folder_name, video_name),
                                               "--last_im_file=./traces/{}/{}".format(record_folder_name,
                                                                                      result_image_name)])
            if INTERACTION_MODE == 'drawing':
                execute_drawing_command()
            elif INTERACTION_MODE == 'movement':
                start_movement_sesstion()
        finally:
            time.sleep(2)  # wait for the robot to finish its movement
            recorder.terminate()
            video_recorder.send_signal(signal.SIGINT)
        time.sleep(5)  # wait while recorder process closes the file
        video_path = "./traces/{}/{}".format(record_folder_name, video_name)
        h264_path = "./traces/{}/h264_{}".format(record_folder_name, video_name)
        os.system("ffmpeg -i {} -vcodec h264 {} ".format(video_path, h264_path))

        pinata = PinataPy(PINATA_API_KEY, PINATA_SECRET_API_KEY)
        pinata_resp = pinata.pin_file_to_ipfs(
            "/home/spot/davos.merklebot.com/spot/traces/{}".format(record_folder_name))
        print("Pinata response: {}".format(pinata_resp))
        ipfs_cid = pinata_resp["IpfsHash"]
        requests.post("https://api.merklebot.com/davos/traces", json={
            "user_account_address": sender,
            "session_id": session_id,
            "created_at": created_at_str,
            "ipfs_cid": ipfs_cid,
            "tx_hash": event_id,
        })
        robot_state['last_session_id'] = session_id
        robot_state['state'] = "idle"

        print("Session {} trace created with IPFS CID {}".format(session_id, ipfs_cid))

    if USE_ROBONOMICS:
        interface = RI.RobonomicsInterface()
        print("Robonomics subscriber starting...")
        subscriber = RI.Subscriber(interface, RI.SubEvent.NewLaunch, robonomics_transaction_callback,
                                   "4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j")

    while True:
        execute_drawing_command()


def main():
    manager = multiprocessing.Manager()

    ctx = multiprocessing.get_context('spawn')
    drawing_queue = ctx.Queue()
    movement_queue = ctx.Queue()

    robot_state = manager.dict()
    robot_state['state'] = "idle"
    robot_state['last_session_id'] = None
    spot_controller_process = ctx.Process(target=spot_controller, args=(movement_queue, drawing_queue, robot_state))
    server_process = ctx.Process(target=server, args=(movement_queue, drawing_queue, robot_state))

    PROCESSES.append(spot_controller_process)
    PROCESSES.append(server_process)

    for p in PROCESSES:
        p.start()

    for p in PROCESSES:
        p.join()


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        for p in PROCESSES:
            p.terminate()
