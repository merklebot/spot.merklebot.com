(window.webpackJsonp=window.webpackJsonp||[]).push([[21,13,14],{554:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"f",(function(){return y})),n.d(e,"j",(function(){return k})),n.d(e,"c",(function(){return j})),n.d(e,"e",(function(){return C})),n.d(e,"i",(function(){return O})),n.d(e,"g",(function(){return S})),n.d(e,"h",(function(){return R})),n.d(e,"d",(function(){return I})),n.d(e,"a",(function(){return N}));var r,o,c=n(14),l=(n(58),n(76),n(47),n(64),n(574)),f=n(579),m=n.n(f),d=n(580),h=n(595),v=n(887),x=n(852),_=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new l.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new m.a(d.a)),t.next=6,r.run();case 6:return t.next=8,m.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o&&o(),t.next=3,_();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:o=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:return r=t.sent,o=r.launch.send(e,Object(h.a)(n)),t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:return r=t.sent,o=r.api.tx.balances.transfer(e,n),t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:return r=t.sent,t.next=5,Object(v.i)(r.accountManager.account.meta.source);case 5:if(o=t.sent,!(c=null==o||null===(n=o.signer)||void 0===n?void 0:n.signRaw)){t.next=13;break}return t.next=10,c({address:r.accountManager.account.address,data:Object(x.a)(e),type:"bytes"});case 10:return l=t.sent,f=l.signature,t.abrupt("return",f);case 13:return t.abrupt("return",null);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return o=t.sent,t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=function(t,e){return"https://".concat(t,".subscan.io/extrinsic/").concat(e)},N=function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}},555:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(14),o=(n(21),n(64),n(95)),c=n(554),l=Object(o.c)("robot",{state:function(){return{robotToken:null,signedRobotToken:null,queueSize:null,robotState:null,lastSessionId:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:{tx:null},txStatus:null,recordData:null}}}},actions:{launchCps:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.cps.launch.txInfo={tx:null},e.cps.launch.txStatus=null,n.next=4,Object(c.c)(e.cps.address,!0);case 4:if(r=n.sent,e.cps.status="wait_tx",!t){n.next=15;break}return n.next=9,Object(c.e)(e.cps.address,t);case 9:return o=n.sent,n.next=12,Object(c.h)([r,o]);case 12:e.cps.launch.txInfo=n.sent,n.next=18;break;case 15:return n.next=17,Object(c.g)(r);case 17:e.cps.launch.txInfo=n.sent;case 18:return e.cps.launch.txStatus="accepted",e.cps.status="activated",n.abrupt("return",e.cps.launch);case 21:case"end":return n.stop()}}),n)})))()},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,t.lastSessionId=r.last_session_id,e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(0),t.robotState=null,t.queueSize=null,t.lastSessionId=null,e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},sendDrawing:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segments:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))},startInspection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/start_inspection",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({account:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))}}})},562:function(t,e,n){var content=n(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("06c608b5",content,!0,{sourceMap:!1})},575:function(t,e){},576:function(t,e){},577:function(t,e){},581:function(t,e,n){"use strict";n(562)},582:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"div.clickEffect{position:fixed;box-sizing:border-box;border-style:solid;border-color:#8ed080;border-radius:50%;-webkit-animation:clickEffect .4s ease-out;animation:clickEffect .4s ease-out;z-index:99999}@-webkit-keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}@keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}",""]),r.locals={},t.exports=r},585:function(t,e,n){"use strict";n.r(e);n(21);var r={name:"CameraFrame",props:["interactionMode"],data:function(){return{pointers:[],calibrationNodes:[],calibrationProcess:!1,curCalibrationNodeIndex:0,imageLoaded:!0}},methods:{startCalibration:function(){alert("Start calibration"),this.calibrationProcess=!0,this.calibrationNodes=[],this.curCalibrationNodeIndex=0},onClickImage:function(t){if("movement"===this.interactionMode){var e=Math.floor(t.offsetX*(1280/this.$refs.image.width)),n=Math.floor(t.offsetY*(720/this.$refs.image.height));if(console.log(e,n),this.pointers.push([t.clientX,t.clientY]),this.calibrationProcess){var r={robot_x:0,robot_y:0,camera_x:0,camera_y:0};fetch("https://api.merklebot.com/strelka/odom",{method:"GET"}).then((function(t){return t.json()})).then((function(data){r.robot_x=data.position.x,r.robot_y=data.position.y})),r.camera_x=e,r.camera_y=n,this.calibrationNodes.push(r),this.curCalibrationNodeIndex+=1,this.curCalibrationNodeIndex>=16&&(this.calibrationProcess=!1,fetch("https://api.merklebot.com/strelka/set_movement_calibration_nodes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){})),alert("Calibration finished"))}else fetch("https://api.merklebot.com/strelka/go_to_point",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_point_coords:[e,n],calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){}))}},onImageError:function(){this.imageLoaded=!1,console.log("camera image error")}}},o=(n(581),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[t.imageLoaded?n("img",{ref:"image",staticClass:"w-full",staticStyle:{display:"block","-webkit-user-select":"none",margin:"auto","background-color":"hsl(0, 0%, 25%)"},style:"drawing"===t.interactionMode?{"aspect-ratio":"4/3","object-fit":"cover"}:{},attrs:{src:"https://api.merklebot.com/videoserver/video"},on:{click:t.onClickImage,error:t.onImageError}}):t._e(),t._v(" "),t.imageLoaded?t._e():n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n    Camera isn't loaded\n  ")]),t._v(" "),t._l(t.pointers,(function(t,e){return n("div",{key:e,staticClass:"clickEffect",style:{left:t[0]+"px",top:t[1]+"px"}})})),t._v(" "),"movement"===t.interactionMode?n("div",{on:{click:t.startCalibration}},[t._v("\n    Calibrate\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},633:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(95),o=Object(r.c)("spotData",{state:function(){return{status:"unknown",cameraImages:{},battery:null,location:"start",gauges:0}},actions:{setSpotAnswer:function(data){if(!data)return this.battery=null,this.cameraImages={},void(this.status="unknown");this.battery=data.battery,this.cameraImages=data.camera_images},setStatus:function(t){this.status=t}}})},636:function(t,e,n){"use strict";n.r(e);var r=n(94),o=n(633),c=Object(r.b)({props:["title","cameraName"],setup:function(t){var e=Object(o.a)();return{cameraTitle:t.title,camera:t.cameraName,spot:e}}}),l=n(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-700"},[t.spot.cameraImages[t.camera]?n("figure",[n("img",{attrs:{src:"data:image/jpeg;base64, "+t.spot.cameraImages[t.camera],alt:"Video stream"}})]):n("div",{staticClass:"mx-16 my-8"},[t._v("\n    Waiting for image\n  ")]),t._v(" "),n("div",{staticClass:"p-2"},[n("p",{staticClass:"font-mono text-white"},[t._v("\n      "+t._s(t.cameraTitle)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},878:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(555),c=n(636),l=Object(r.defineComponent)({components:{CameraStream:c.default},setup:function(){return{robot:Object(o.a)()}}}),f=n(25),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-6 py-4 sticky top-0"},[t.robot.robotState?n("div",[n("p",{staticClass:"text-3xl my-6 text-center text-white"},[t._v("\n      Hi, I’m Spot 🦾🐶\n    ")]),t._v(" "),n("div",[n("CameraStream",{attrs:{title:"front","camera-name":"front_image"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.robot.robotState?t._e():n("div",[n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n      Spot is currently unavailable\n    ")]),t._v(" "),n("div",{staticClass:"h-1/3"},[n("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-2xl my-6 text-center text-white"},[t._v("\n      And we are a team of builders who share the vision of\n      "),n("br"),t._v(" "),n("span",{staticClass:"text-orange-600 font-bold"},[t._v("machine economy with no single point of failure.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-2xl mt-2 text-center text-white"},[t._v("\n      With this demo we aim to demonstrate the benefits of using Web3 software\n      stack in robotics deployments.\n      "),n("br")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CameraStream:n(636).default,CameraFrame:n(585).default})}}]);