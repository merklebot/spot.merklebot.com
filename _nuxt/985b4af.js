(window.webpackJsonp=window.webpackJsonp||[]).push([[52,12,15],{1059:function(t,e,n){"use strict";n(905)},1060:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,".screen[data-v-234b97a7]{min-height:80vh}",""]),r.locals={},t.exports=r},1102:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(64),n(79),n(94)),c=n(554),l=Object(o.b)({setup:function(){var t=Object(c.a)(),e=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.updateRobotState();case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log("Spot state unavailable, retrying");case 8:setTimeout(e,1e3);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();return Object(o.d)((function(){e()})),{}}}),d=l,m=(n(1059),n(25)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"bg-gray-800 font-mono overflow-hidden"},[n("div",{staticClass:"z-20 container mx-auto flex flex-row flex-wrap justify-center place-items-center"},[n("div",{staticClass:"basis-5/12"},[n("AlwaysVisibleBlock")],1),t._v(" "),n("div",{staticClass:"basis-7/12 flex"},[n("AdminControlsBlock")],1)])])}),[],!1,null,"234b97a7",null);e.default=component.exports;installComponents(component,{AlwaysVisibleBlock:n(718).default,AdminControlsBlock:n(914).default})},570:function(t,e,n){var content=n(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("06c608b5",content,!0,{sourceMap:!1})},585:function(t,e,n){"use strict";n(570)},586:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"div.clickEffect{position:fixed;box-sizing:border-box;border-style:solid;border-color:#8ed080;border-radius:50%;-webkit-animation:clickEffect .4s ease-out;animation:clickEffect .4s ease-out;z-index:99999}@-webkit-keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}@keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}",""]),r.locals={},t.exports=r},592:function(t,e,n){"use strict";n.r(e);n(21);var r={name:"CameraFrame",props:["interactionMode"],data:function(){return{pointers:[],calibrationNodes:[],calibrationProcess:!1,curCalibrationNodeIndex:0,imageLoaded:!0}},methods:{startCalibration:function(){alert("Start calibration"),this.calibrationProcess=!0,this.calibrationNodes=[],this.curCalibrationNodeIndex=0},onClickImage:function(t){if("movement"===this.interactionMode){var e=Math.floor(t.offsetX*(1280/this.$refs.image.width)),n=Math.floor(t.offsetY*(720/this.$refs.image.height));if(console.log(e,n),this.pointers.push([t.clientX,t.clientY]),this.calibrationProcess){var r={robot_x:0,robot_y:0,camera_x:0,camera_y:0};fetch("https://api.merklebot.com/strelka/odom",{method:"GET"}).then((function(t){return t.json()})).then((function(data){r.robot_x=data.position.x,r.robot_y=data.position.y})),r.camera_x=e,r.camera_y=n,this.calibrationNodes.push(r),this.curCalibrationNodeIndex+=1,this.curCalibrationNodeIndex>=16&&(this.calibrationProcess=!1,fetch("https://api.merklebot.com/strelka/set_movement_calibration_nodes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){})),alert("Calibration finished"))}else fetch("https://api.merklebot.com/strelka/go_to_point",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_point_coords:[e,n],calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){}))}},onImageError:function(){this.imageLoaded=!1,console.log("camera image error")}}},o=(n(585),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[t._m(0),t._v(" "),t.imageLoaded?t._e():n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n    Camera isn't loaded\n  ")]),t._v(" "),t._l(t.pointers,(function(t,e){return n("div",{key:e,staticClass:"clickEffect",style:{left:t[0]+"px",top:t[1]+"px"}})})),t._v(" "),"movement"===t.interactionMode?n("div",{on:{click:t.startCalibration}},[t._v("\n    Calibrate\n  ")]):t._e()],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("iframe",{staticClass:"w-full",staticStyle:{display:"block","-webkit-user-select":"none",margin:"auto","background-color":"hsl(0, 0%, 25%)"},attrs:{src:"https://player.twitch.tv/?channel=merklebotStreamer&parent=spot.merklebot.com",frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"350"}})])}],!1,null,null,null);e.default=component.exports},718:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(554),c=Object(r.defineComponent)({setup:function(){return{robot:Object(o.a)()}}}),l=n(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.robot.robotState?n("div",[n("p",{staticClass:"text-3xl my-6 text-center text-white"},[t._v("\n      Hi, I’m Spot 🦾🐶\n    ")]),t._v(" "),n("div",[n("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.robot.robotState?t._e():n("div",[n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n      Spot is currently unavailable\n    ")]),t._v(" "),n("div",{staticClass:"h-1/3"},[n("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-2xl my-6 text-center text-white"},[t._v("\n      And we are a team of builders who share the vision of\n      "),n("br"),t._v(" "),n("span",{staticClass:"text-orange-600 font-bold"},[t._v("machine economy with no single point of failure.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-2xl mt-2 text-center text-white"},[t._v("\n      With this demo we aim to demonstrate the benefits of using Web3 software\n      stack in robotics deployments.\n      "),n("br")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CameraFrame:n(592).default})},905:function(t,e,n){var content=n(1060);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("e667284a",content,!0,{sourceMap:!1})},914:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(64),n(21),n(43),n(49),n(0)),c=n(94),l=n(555),d=n(557),m=n(554),f=n(712),h=n(605),v=Object(o.defineComponent)({setup:function(){var t=Object(d.a)(),e=Object(m.a)(),n=Object(c.f)("173"),o=Object(c.a)((function(){var e={connectWallet:"connected"===t.walletConnectionStatus,cameraControl:!0},n={},r="success";return Object.keys(e).forEach((function(t){if("success"===r){var o=e[t]?"success":"wait";r=o,n[t]=o}else"wait"===r?(r="disabled",n[t]="disabled"):"disabled"===r&&(n[t]="disabled")})),n})),v=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t.selectedAccount.account.address),n.next=3,Object(f.a)(t.selectedAccount.account.address);case 3:return r=n.sent,n.next=6,Object(l.i)(r);case 6:o=n.sent,console.log(r),console.log(o),e.robotToken=r,e.signedRobotToken=o;case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(f.b)(t.selectedAccount.account.address,e.signedRobotToken,r);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(h.a)(t.selectedAccount.account.address,e.signedRobotToken);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),_=function(){var o=Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("zoom command"),r.next=3,Object(f.c)(t.selectedAccount.account.address,e.signedRobotToken,parseInt(n.value));case 3:case"end":return r.stop()}}),r)})));return function(){return o.apply(this,arguments)}}();return{wallet:t,robot:e,progressElementStatuses:o,zoomAbsolute:n,signToken:v,moveCommand:y,zoomCommand:_,startCalibration:x}}}),y=v,x=n(25),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"overflow-x-hidden overflow-y-auto h-screen snap-y snap-mandatory"},[n("ProgressContainer",[n("ProgressContainerElement",{attrs:{title:"Connect your wallet",status:t.progressElementStatuses.connectWallet}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-1","href-id":"#1",title:""}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            Identity and access rights are managed using the cryptographic key\n            from your Web3 wallet.\n          ")]),t._v(" "),n("img",{attrs:{src:"/pictures/Frame2.png"}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("AccountChooser"),t._v(" "),"error"===t.wallet.walletConnectionStatus?n("div",[n("p",{staticClass:"text-xl my-6 text-center text-white font-bold"},[t._v("\n                ❗ Please install\n                "),t._v(" "),n("a",{staticClass:"text-orange-600",attrs:{href:"https://talisman.xyz/",target:"_blank"}},[t._v("Talisman web3 wallet")]),t._v(" and create an account. Then reload this page.\n              ")])]):t._e()],1)],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Auth",status:"wait"}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-2","href-id":"#2",title:""}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            You need to get your control token by signing robot's token\n          ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:t.signToken}},[t._v("\n            Sign token\n          ")]),t._v(" "),n("div",[t._v("status: "+t._s(t.robot.signedRobotToken?"authed":"not authed"))])],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Control camera",status:"wait"}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-2","href-id":"#2",title:""}}),t._v(" "),n("div",{staticClass:"border-2 border-gray-500 p-4"},[n("p",{staticClass:"text-md my-2 text-white"},[t._v("\n              Move camera\n            ")]),t._v(" "),n("div",{staticClass:"grid grid-cols-3 gap-x-4"},[n("div"),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:0,y:1})}}},[t._v("\n                Up\n              ")]),t._v(" "),n("div"),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:-1,y:0})}}},[t._v("\n                Left\n              ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:0,y:-1})}}},[t._v("\n                Down\n              ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:1,y:0})}}},[t._v("\n                Right\n              ")])])]),t._v(" "),n("div",{staticClass:"border-2 border-gray-500 p-4 mt-4"},[n("p",{staticClass:"text-md my-2 text-white"},[t._v("\n              Set camera zoom\n            ")]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.zoomAbsolute,expression:"zoomAbsolute"}],staticClass:"border-b-2 border-orange-600 py-2 my-2 px-4 bg-gray-600",domProps:{value:t.zoomAbsolute},on:{input:function(e){e.target.composing||(t.zoomAbsolute=e.target.value)}}}),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.zoomCommand()}}},[t._v("\n                Set zoom\n              ")])])]),t._v(" "),n("div",{staticClass:"border-2 border-gray-500 p-4 mt-4"},[n("p",{staticClass:"text-md my-2 text-white"},[t._v("\n              Start Spot calibration\n            ")]),t._v(" "),n("RobotStateCard"),t._v(" "),n("div",[n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.startCalibration()}}},[t._v("\n                Start Calibration\n              ")])])],1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Anchor:n(613).default,AccountChooser:n(599).default,StepContentContainer:n(616).default,ProgressContainerElement:n(587).default,RobotStateCard:n(588).default,ProgressContainer:n(614).default})}}]);