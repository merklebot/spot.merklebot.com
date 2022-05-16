from spot_controller import SpotController

import multiprocessing
import os
import requests
import time

from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin

import robonomicsinterface as RI

PROCESSES = []

# Constants to access spot robot
SPOT_USERNAME = os.environ.get("SPOT_USERNAME", "admin")
SPOT_PASSWORD = os.environ.get("SPOT_PASSWORD", "2zqa8dgw7lor")
SPOT_IP = os.environ.get("SPOT_IP", "192.168.50.3")

# Videoserver url
VIDEOSERVER_URL = os.environ.get("VIDEOSERVER_IP", "http://10.200.0.8:8000/")

# Security token to execute video server commands
VIDEOSERVER_TOKEN = os.environ.get("VIDEOSERVER_TOKEN", "")

USE_ROBONOMICS = os.environ.get("USE_ROBONOMICS", 1)
ROBONOMICS_LISTEN_ROBOT_ACCOUNT = os.environ.get("ROBONOMICS_LISTEN_ROBOT_ACCOUNT",
                                                 "4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j")

max_width = 400
max_height = 300


def send_command_to_videoserver(command_name):
    requests.post(VIDEOSERVER_URL + command_name, json={"token": VIDEOSERVER_TOKEN})


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


def empty_handler():
    pass


def server(drawing_queue, robot_state):
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}})

    @app.route("/current_state", methods=["GET"])
    def current_state():
        return {
            'queue_size': drawing_queue.qsize(),
            'robot_state': robot_state['state']
        }

    @app.route('/draw_figure', methods=['POST'])
    def draw_figure():
        print("GOT DRWAWING REQUEST")
        data = request.get_json()
        if 'segments' in data:
            segments = data['segments']
            drawing_queue.put(segments)
        return {'status': 'started'}

    app.run(host='0.0.0.0', port=1234)


def spot_controller(drawing_queue, robot_state):
    def execute_drawing_command():
        segments_task = drawing_queue.get()
        print("Got task", segments_task)
        if not segments_task:
            time.sleep(1)
            return

        # notify videoserver to clear canvas
        send_command_to_videoserver("clear_canvas")

        all_segments = []
        for segment in segments_task:
            all_segments += segment
        print("Got segments", all_segments)

        robot_state['state'] = "executing"

        print("Starting spot controller")
        sc = SpotController(SPOT_USERNAME, SPOT_PASSWORD, SPOT_IP)
        print("Spot controller started")
        sc.lease_control()
        print("Lease control got")
        sc.power_on_stand_up()
        print("Robot powered and stand up")

        print("Starting movement...")
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
        robot_state['state'] = "idle"
        print("Robot powered off and sit down")
        time.sleep(1)

    def robonomics_transaction_callback(data):
        execute_drawing_command()

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
    robot_state = manager.dict()
    robot_state['state'] = "idle"

    spot_controller_process = ctx.Process(target=spot_controller, args=(drawing_queue,robot_state))
    server_process = ctx.Process(target=server, args=(drawing_queue,robot_state))

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