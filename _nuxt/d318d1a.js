(window.webpackJsonp=window.webpackJsonp||[]).push([[50,15],{1002:function(t,e,o){"use strict";o(878)},1003:function(t,e,o){var n=o(56)((function(i){return i[1]}));n.push([t.i,".screen[data-v-234b97a7]{min-height:80vh}",""]),n.locals={},t.exports=n},1046:function(t,e,o){"use strict";o.r(e);var n=o(14),r=(o(64),o(77),o(94)),c=o(554),l=Object(r.b)({setup:function(){var t=Object(c.a)(),e=function(){var o=Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,t.updateRobotState();case 3:o.next=8;break;case 5:o.prev=5,o.t0=o.catch(0),console.log("Spot state unavailable, retrying");case 8:setTimeout(e,1e3);case 9:case"end":return o.stop()}}),o,null,[[0,5]])})));return function(){return o.apply(this,arguments)}}();return Object(r.d)((function(){e()})),{}}}),d=l,m=(o(1002),o(25)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"bg-gray-800 font-mono overflow-hidden"},[o("div",{staticClass:"z-20 container mx-auto flex flex-row flex-wrap justify-center place-items-center"},[o("div",{staticClass:"basis-5/12"},[o("AlwaysVisibleBlock")],1),t._v(" "),o("div",{staticClass:"basis-7/12 flex"},[o("AdminControlsBlock")],1)])])}),[],!1,null,"234b97a7",null);e.default=component.exports;installComponents(component,{AlwaysVisibleBlock:o(705).default,AdminControlsBlock:o(1027).default})},563:function(t,e,o){var content=o(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("06c608b5",content,!0,{sourceMap:!1})},582:function(t,e,o){"use strict";o(563)},583:function(t,e,o){var n=o(56)((function(i){return i[1]}));n.push([t.i,"div.clickEffect{position:fixed;box-sizing:border-box;border-style:solid;border-color:#8ed080;border-radius:50%;-webkit-animation:clickEffect .4s ease-out;animation:clickEffect .4s ease-out;z-index:99999}@-webkit-keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}@keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}",""]),n.locals={},t.exports=n},587:function(t,e,o){"use strict";o.r(e);o(21);var n={name:"CameraFrame",props:["interactionMode"],data:function(){return{pointers:[],calibrationNodes:[],calibrationProcess:!1,curCalibrationNodeIndex:0,imageLoaded:!0}},methods:{startCalibration:function(){alert("Start calibration"),this.calibrationProcess=!0,this.calibrationNodes=[],this.curCalibrationNodeIndex=0},onClickImage:function(t){if("movement"===this.interactionMode){var e=Math.floor(t.offsetX*(1280/this.$refs.image.width)),o=Math.floor(t.offsetY*(720/this.$refs.image.height));if(console.log(e,o),this.pointers.push([t.clientX,t.clientY]),this.calibrationProcess){var n={robot_x:0,robot_y:0,camera_x:0,camera_y:0};fetch("https://api.merklebot.com/strelka/odom",{method:"GET"}).then((function(t){return t.json()})).then((function(data){n.robot_x=data.position.x,n.robot_y=data.position.y})),n.camera_x=e,n.camera_y=o,this.calibrationNodes.push(n),this.curCalibrationNodeIndex+=1,this.curCalibrationNodeIndex>=16&&(this.calibrationProcess=!1,fetch("https://api.merklebot.com/strelka/set_movement_calibration_nodes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){})),alert("Calibration finished"))}else fetch("https://api.merklebot.com/strelka/go_to_point",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_point_coords:[e,o],calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){}))}},onImageError:function(){this.imageLoaded=!1,console.log("camera image error")}}},r=(o(582),o(25)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{position:"relative"}},[t.imageLoaded?o("img",{ref:"image",staticClass:"w-full",staticStyle:{display:"block","-webkit-user-select":"none",margin:"auto","background-color":"hsl(0, 0%, 25%)"},style:"drawing"===t.interactionMode?{"aspect-ratio":"4/3","object-fit":"cover"}:{},attrs:{src:"https://api.merklebot.com/videoserver/video"},on:{click:t.onClickImage,error:t.onImageError}}):t._e(),t._v(" "),t.imageLoaded?t._e():o("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n    Camera isn't loaded\n  ")]),t._v(" "),t._l(t.pointers,(function(t,e){return o("div",{key:e,staticClass:"clickEffect",style:{left:t[0]+"px",top:t[1]+"px"}})})),t._v(" "),"movement"===t.interactionMode?o("div",{on:{click:t.startCalibration}},[t._v("\n    Calibrate\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},705:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(554),c=Object(n.defineComponent)({setup:function(){return{robot:Object(r.a)()}}}),l=o(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"px-6 py-4 sticky top-0"},[t.robot.robotState?o("div",[o("p",{staticClass:"text-3xl my-6 text-center text-white"},[t._v("\n      Hi, I’m Spot 🦾🐶\n    ")]),t._v(" "),o("div",[o("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.robot.robotState?t._e():o("div",[o("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n      Spot is currently unavailable\n    ")]),t._v(" "),o("div",{staticClass:"h-1/3"},[o("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text-2xl my-6 text-center text-white"},[t._v("\n      And we are a team of builders who share the vision of\n      "),o("br"),t._v(" "),o("span",{staticClass:"text-orange-600 font-bold"},[t._v("machine economy with no single point of failure.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text-2xl mt-2 text-center text-white"},[t._v("\n      With this demo we aim to demonstrate the benefits of using Web3 software\n      stack in robotics deployments.\n      "),o("br")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CameraFrame:o(587).default})},878:function(t,e,o){var content=o(1003);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("e667284a",content,!0,{sourceMap:!1})}}]);