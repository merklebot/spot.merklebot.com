(window.webpackJsonp=window.webpackJsonp||[]).push([[54,15,16,20,23,27,30,41],{1055:function(t,e,n){"use strict";n(902)},1056:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,".screen[data-v-53b65669]{min-height:80vh}",""]),r.locals={},t.exports=r},1099:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(64),n(79),n(94)),c=n(554),l=n(557),d=n(644),m=Object(o.b)({setup:function(){var t=Object(c.a)(),e=Object(l.a)(),n=Object(d.a)(),m=Object(o.f)(!1),f=Object(o.f)("wss://api.merklebot.com/oz/spot/spot/state/ws"),v=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.updateTicketsList();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("Can't update tickets list, retrying");case 8:setTimeout(v,1e3);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.updateRobotState();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Spot state unavailable, retrying");case 8:setTimeout(h,1e3);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(o.d)((function(){h(),v()})),{spotUrl:f,spotConnected:m,connectToSpot:function t(){try{var e=new WebSocket(f.value);m.value=!0,e.onmessage=function(t){n.setSpotAnswer(JSON.parse(t.data))},e.onopen=function(){return n.setStatus("connected")},e.onclose=function(){n.setSpotAnswer(),setTimeout(t,1e3)},e.onerror=function(){return e.close()}}catch(e){setTimeout(t,1e3)}}}}}),f=m,v=(n(1055),n(25)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",{staticClass:"bg-gray-800 font-mono"},[n("div",{staticClass:"z-20 container mx-auto flex flex-row flex-wrap justify-center"},[n("div",{staticClass:"basis-5/12"},[!1===t.spotConnected?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.spotUrl,expression:"spotUrl"}],domProps:{value:t.spotUrl},on:{input:function(e){e.target.composing||(t.spotUrl=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.connectToSpot}},[t._v("\n            Set url\n          ")])]):t._e(),t._v(" "),n("InspectionRobotStatePanel")],1),t._v(" "),n("div",{staticClass:"basis-7/12"},[n("InspectionControlsBlock")],1)])])])}),[],!1,null,"53b65669",null);e.default=component.exports;installComponents(component,{InspectionRobotStatePanel:n(909).default,InspectionControlsBlock:n(910).default})},560:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var r=n(95),o=Object(r.c)("dashboardParameters",{state:function(){return{codeSampleParameter:!1}},actions:{setCodeSampleParameter:function(t){this.codeSampleParameter=t}}}),c=Object(r.c)("dAppParameters",{state:function(){return{payWithOption:"ticket",currentDrawingSegments:[]}}})},569:function(t,e,n){var content=n(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("06c608b5",content,!0,{sourceMap:!1})},580:function(t,e,n){"use strict";n.r(e);var r=n(25),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"w-8 h-8 mr-2 animate-spin text-gray-600 fill-orange-600 inline",attrs:{role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),n("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})])}),[],!1,null,null,null);e.default=component.exports},582:function(t,e,n){var content=n(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("db0f9a46",content,!0,{sourceMap:!1})},583:function(t,e,n){"use strict";n.r(e);var r=n(94),o=n(560),c=Object(r.b)({setup:function(){return{dappParameters:Object(o.a)()}}}),l=n(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full py-4"},[n("div",{staticClass:"flex flex-row"},[n("button",{staticClass:"basis-1/2 uppercase py-2 px-4 text-gray-800 text-md",class:{"bg-orange-600 text-white border-b-0":"ticket"===t.dappParameters.payWithOption,"bg-gray-200 text-gray-800  hover:bg-gray-800 hover:bg-gray-100 hover:text-white":"XRT"===t.dappParameters.payWithOption},attrs:{type:"button",disabled:"ticket"===t.dappParameters.payWithOption},on:{click:function(e){t.dappParameters.payWithOption="ticket"}}},[t._v("\n      Credit Card\n    ")]),t._v(" "),n("button",{staticClass:"basis-1/2 uppercase py-2 px-4 text-gray-800 text-md",class:{"bg-orange-600 text-white border-b-0":"XRT"===t.dappParameters.payWithOption,"bg-gray-200 text-gray-800 hover:bg-gray-800 hover:bg-gray-100 hover:text-white":"ticket"===t.dappParameters.payWithOption},attrs:{type:"button",disabled:"XRT"===t.dappParameters.payWithOption},on:{click:function(e){t.dappParameters.payWithOption="XRT"}}},[t._v("\n      Crypto\n    ")])]),t._v(" "),n("div",[n("div",{staticClass:"flex flex-row "},["XRT"===t.dappParameters.payWithOption?t._t("XRT"):t._e(),t._v(" "),"ticket"===t.dappParameters.payWithOption?t._t("ticket"):t._e()],2)])])}),[],!1,null,null,null);e.default=component.exports},585:function(t,e,n){"use strict";n(569)},586:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"div.clickEffect{position:fixed;box-sizing:border-box;border-style:solid;border-color:#8ed080;border-radius:50%;-webkit-animation:clickEffect .4s ease-out;animation:clickEffect .4s ease-out;z-index:99999}@-webkit-keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}@keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}",""]),r.locals={},t.exports=r},592:function(t,e,n){"use strict";n.r(e);n(21);var r={name:"CameraFrame",props:["interactionMode"],data:function(){return{pointers:[],calibrationNodes:[],calibrationProcess:!1,curCalibrationNodeIndex:0,imageLoaded:!0}},methods:{startCalibration:function(){alert("Start calibration"),this.calibrationProcess=!0,this.calibrationNodes=[],this.curCalibrationNodeIndex=0},onClickImage:function(t){if("movement"===this.interactionMode){var e=Math.floor(t.offsetX*(1280/this.$refs.image.width)),n=Math.floor(t.offsetY*(720/this.$refs.image.height));if(console.log(e,n),this.pointers.push([t.clientX,t.clientY]),this.calibrationProcess){var r={robot_x:0,robot_y:0,camera_x:0,camera_y:0};fetch("https://api.merklebot.com/strelka/odom",{method:"GET"}).then((function(t){return t.json()})).then((function(data){r.robot_x=data.position.x,r.robot_y=data.position.y})),r.camera_x=e,r.camera_y=n,this.calibrationNodes.push(r),this.curCalibrationNodeIndex+=1,this.curCalibrationNodeIndex>=16&&(this.calibrationProcess=!1,fetch("https://api.merklebot.com/strelka/set_movement_calibration_nodes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){})),alert("Calibration finished"))}else fetch("https://api.merklebot.com/strelka/go_to_point",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_point_coords:[e,n],calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){}))}},onImageError:function(){this.imageLoaded=!1,console.log("camera image error")}}},o=(n(585),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[t.imageLoaded?n("img",{ref:"image",staticClass:"w-full",staticStyle:{display:"block","-webkit-user-select":"none",margin:"auto","background-color":"hsl(0, 0%, 25%)"},style:"drawing"===t.interactionMode?{"aspect-ratio":"4/3","object-fit":"cover"}:{},attrs:{src:"https://api.merklebot.com/videoserver/video"},on:{click:t.onClickImage,error:t.onImageError}}):t._e(),t._v(" "),t.imageLoaded?t._e():n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n    Camera isn't loaded\n  ")]),t._v(" "),t._l(t.pointers,(function(t,e){return n("div",{key:e,staticClass:"clickEffect",style:{left:t[0]+"px",top:t[1]+"px"}})})),t._v(" "),"movement"===t.interactionMode?n("div",{on:{click:t.startCalibration}},[t._v("\n    Calibrate\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},593:function(t,e,n){"use strict";n.r(e);var r=n(25),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-4 min-h-200 p-2"},[n("div",{staticClass:"grid grid-cols-2 gap-4"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},607:function(t,e,n){"use strict";n(582)},608:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"@-webkit-keyframes SpotBody-data-v-04b63336{0%{transform:translateY(0)}to{transform:translateY(-50px)}}@keyframes SpotBody-data-v-04b63336{0%{transform:translateY(0)}to{transform:translateY(-50px)}}@-webkit-keyframes SpotLeg1Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@keyframes SpotLeg1Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@-webkit-keyframes SpotLeg1Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(6deg)}to{transform:translateY(-40px) rotate(30deg)}}@keyframes SpotLeg1Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(6deg)}to{transform:translateY(-40px) rotate(30deg)}}@-webkit-keyframes SpotLeg2Top-data-v-04b63336{0%{transform:translateY(0) rotate(-14deg)}to{transform:translateY(-40px) rotate(-20deg)}}@keyframes SpotLeg2Top-data-v-04b63336{0%{transform:translateY(0) rotate(-14deg)}to{transform:translateY(-40px) rotate(-20deg)}}@-webkit-keyframes SpotLeg2Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-30px) rotate(28deg)}}@keyframes SpotLeg2Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-30px) rotate(28deg)}}@-webkit-keyframes SpotLeg3Top-data-v-04b63336{0%{transform:translateY(0) rotate(-17deg)}to{transform:translateY(-35px) rotate(-12deg)}}@keyframes SpotLeg3Top-data-v-04b63336{0%{transform:translateY(0) rotate(-17deg)}to{transform:translateY(-35px) rotate(-12deg)}}@-webkit-keyframes SpotLeg3Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-50px) rotate(40deg)}}@keyframes SpotLeg3Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-50px) rotate(40deg)}}@-webkit-keyframes SpotLeg4Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@keyframes SpotLeg4Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@-webkit-keyframes SpotLeg4Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(11deg)}to{transform:translateY(-45px) rotate(35deg)}}@keyframes SpotLeg4Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(11deg)}to{transform:translateY(-45px) rotate(35deg)}}.spot[data-v-04b63336]{position:relative;width:395px;height:223px;transform:scale(.6) translateX(-80px)}.spot>img[data-v-04b63336]{display:block;position:absolute;-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.spot-body[data-v-04b63336]{width:320px;bottom:67px;left:calc(50% - 160px);z-index:2}.animated .spot-body[data-v-04b63336]{-webkit-animation-name:SpotBody-data-v-04b63336;animation-name:SpotBody-data-v-04b63336}.spot-leg1-top[data-v-04b63336]{width:162.5px;bottom:78px;left:-55px;transform-origin:100% 100%;transform:rotate(-20deg);z-index:4}.animated .spot-leg1-top[data-v-04b63336]{-webkit-animation-name:SpotLeg1Top-data-v-04b63336;animation-name:SpotLeg1Top-data-v-04b63336}.spot-leg1-bottom[data-v-04b63336]{width:151px;bottom:28px;left:-35px;transform-origin:0 0;transform:rotate(6deg);z-index:3}.animated .spot-leg1-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg1Bottom-data-v-04b63336;animation-name:SpotLeg1Bottom-data-v-04b63336}.spot-leg2-top[data-v-04b63336]{width:118.5px;bottom:80px;left:-45px;transform-origin:100% 100%;transform:rotate(-14deg);z-index:1}.animated .spot-leg2-top[data-v-04b63336]{-webkit-animation-name:SpotLeg2Top-data-v-04b63336;animation-name:SpotLeg2Top-data-v-04b63336}.spot-leg2-bottom[data-v-04b63336]{width:142.5px;bottom:46px;left:-37px;transform-origin:0 0;transform:rotate(9deg);z-index:0}.animated .spot-leg2-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg2Bottom-data-v-04b63336;animation-name:SpotLeg2Bottom-data-v-04b63336}.spot-leg3-top[data-v-04b63336]{width:143px;bottom:80px;left:186px;transform-origin:100% 100%;transform:rotate(-17deg);z-index:0}.animated .spot-leg3-top[data-v-04b63336]{-webkit-animation-name:SpotLeg3Top-data-v-04b63336;animation-name:SpotLeg3Top-data-v-04b63336}.spot-leg3-bottom[data-v-04b63336]{width:142.5px;bottom:35px;left:188px;transform-origin:0 0;transform:rotate(9deg);z-index:1}.animated .spot-leg3-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg3Bottom-data-v-04b63336;animation-name:SpotLeg3Bottom-data-v-04b63336}.spot-leg4-top[data-v-04b63336]{width:158px;bottom:80px;left:166px;transform-origin:100% 100%;transform:rotate(-20deg);z-index:4}.animated .spot-leg4-top[data-v-04b63336]{-webkit-animation-name:SpotLeg4Top-data-v-04b63336;animation-name:SpotLeg4Top-data-v-04b63336}.spot-leg4-bottom[data-v-04b63336]{width:153.5px;bottom:28px;left:188px;transform-origin:0 0;transform:rotate(11deg);z-index:1}.animated .spot-leg4-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg4Bottom-data-v-04b63336;animation-name:SpotLeg4Bottom-data-v-04b63336}",""]),r.locals={},t.exports=r},618:function(t,e,n){"use strict";n.r(e);var r=n(94),o=Object(r.b)({emits:["showModal"],setup:function(t){t.emit;var e=Object(r.f)(!1);return{show:e,closeModal:function(){e.value=!1},openModal:function(){e.value=!0}}}}),c=n(25),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show?n("div",{staticClass:"fixed z-10 overflow-y-auto top-0 w-full left-0 "},[n("div",{staticClass:"flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"},[t._m(0),t._v(" "),n("div",{staticClass:"inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[n("div",{staticClass:"shadow-lg px-4 py-2 w-full bg-gray-600 relative"},[n("p",{staticClass:"text-lg w-max text-white font-semibold border-b border-gray-200"},[t._v("\n            Success\n          ")]),t._v(" "),n("p",{staticClass:"text-white mt-4"},[t._v("\n            Ticket successfully got. XRT for launch will be sent to your account during the next one minute in one of the next few blocks.\n          ")]),t._v(" "),n("div",{staticClass:"px-4 py-3 text-right"},[n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("\n              Got it!\n            ")])])])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fixed inset-0 transition-opacity"},[e("div",{staticClass:"absolute inset-0 bg-gray-900 opacity-75"})])}],!1,null,null,null);e.default=component.exports},619:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(48),n(21),n(64),n(0)),c=n(94),l=n(560),d=n(554),m=n(557),f=Object(o.defineComponent)({setup:function(){var t=Object(l.a)(),e=Object(d.a)(),n=Object(m.a)(),o=function(){var o=Object(r.a)(regeneratorRuntime.mark((function r(o){var c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Sending command"),"drawing"===(c={account:n.selectedAccount.account.address,payment_mode:o?"xrt":"ticket",task_type:t.currentDrawingSegments.length>0?"drawing":"inspection"}).task_type&&(c.segments=t.currentDrawingSegments),r.prev=3,r.next=6,e.launchCps(o,c);case 6:l=r.sent,console.log(l),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[3,10]])})));return function(t){return o.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(1*Math.pow(10,9));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=Object(c.a)((function(){return n.selectedAccount.balanceRaw*Math.pow(10,-9)>1&&e.robotState})),x=Object(c.a)((function(){return n.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length>=1&&e.robotState}));return{sendCommandXrt:f,sendCommandTicket:v,wallet:n,canLaunchForXrt:h,canLaunchForTicket:x}}}),v=f,h=n(25),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PayWithToggle",{scopedSlots:t._u([{key:"ticket",fn:function(){return[n("div",{staticClass:"w-full px-2 bg-gray-600 relative"},[n("p",{staticClass:"text-md my-4 mb-16 text-white text-center"},[t._v("\n        You have "+t._s(t.wallet.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length)+"\n        tickets\n      ")]),t._v(" "),n("button",{staticClass:"\n            absolute bottom-0 inset-x-0 uppercase py-2 mx-4 my-2 px-4 md:mt-16\n            text-md text-center\n            text-gray-800 bg-gray-200 border-2\n            hover:bg-gray-100 hover:bg-gray-800 hover:text-white\n          ",class:{"opacity-30 pointer-events-none":!t.canLaunchForTicket},attrs:{type:"button",disabled:!t.canLaunchForTicket},on:{click:t.sendCommandTicket}},[t._v("\n        Launch for 1 ticket\n      ")])])]},proxy:!0},{key:"XRT",fn:function(){return[n("div",{staticClass:"w-full px-2 bg-gray-600 relative"},[n("p",{staticClass:"text-md my-4 mb-16 text-white text-center"},[t._v("\n        You have "+t._s(t.wallet.selectedAccount.balanceFormatted)+"\n      ")]),t._v(" "),n("button",{staticClass:"\n            absolute bottom-0 inset-x-0 uppercase py-2 mx-4 my-2 px-4 md:mt-16\n            text-md text-center\n            text-gray-800 bg-gray-200 border-2\n            hover:bg-gray-100 hover:bg-gray-800 hover:text-white\n          ",class:{"opacity-30 pointer-events-none":!t.canLaunchForXrt},attrs:{type:"button",disabled:!t.canLaunchForXrt},on:{click:t.sendCommandXrt}},[t._v("\n        Launch for 1 XRT\n      ")])])]},proxy:!0}])})}),[],!1,null,"09e54c70",null);e.default=component.exports;installComponents(component,{PayWithToggle:n(583).default})},620:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(554),c=n(555),l=Object(r.defineComponent)({setup:function(){return{robot:Object(o.a)(),makeSubscanLink:c.d,addressShort:c.a}}}),d=n(25),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CardContainer",{attrs:{title:"Launch info"}},[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    launch status: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.cps.status))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Tx status: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.cps.launch.txStatus))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Transaction: "),n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("robonomics",t.robot.cps.launch.txInfo.tx),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.robot.cps.launch.txInfo.tx)))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardContainer:n(561).default})},621:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(554),c=Object(r.defineComponent)({setup:function(){return{robot:Object(o.a)()}}}),l=(n(607),n(25)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spot",class:{animated:"idle"!==t.robot.robotState}},[n("img",{staticClass:"spot-body",attrs:{src:"/spot/animated-pose-1/spot-body.png"}}),t._v(" "),n("img",{staticClass:"spot-leg1-top",attrs:{src:"/spot/animated-pose-1/spot-leg1-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg1-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg1-bottom.png"}}),t._v(" "),n("img",{staticClass:"spot-leg2-top",attrs:{src:"/spot/animated-pose-1/spot-leg2-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg2-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg2-bottom.png"}}),t._v(" "),n("img",{staticClass:"spot-leg3-top",attrs:{src:"/spot/animated-pose-1/spot-leg3-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg3-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg3-bottom.png"}}),t._v(" "),n("img",{staticClass:"spot-leg4-top",attrs:{src:"/spot/animated-pose-1/spot-leg4-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg4-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg4-bottom.png"}})])}),[],!1,null,"04b63336",null);e.default=component.exports},622:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(64),n(47),n(76),n(79),n(94)),c=n(554),l=n(556),d=n(555),m=n(580),f=Object(o.b)({components:{Spinner:m.default},setup:function(){var t=Object(c.a)(),e=Object(o.f)(null),n=Object(o.f)(null),m=Object(o.f)(null),f=Object(o.f)(null),v=Object(o.f)(null),h=function(){var o=Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.cps.launch.txStatus){r.next=11;break}return r.prev=1,r.next=4,Object(l.d)({launchTxId:"".concat(t.cps.launch.txInfo.blockNumber,"-").concat(t.cps.launch.txInfo.txIndex)});case 4:o=r.sent,console.log(o),o&&(t.cps.launch.recordData=o,e.value=o,n.value={ipfsCid:o.ipfs_cid,sender:o.sender,nonce:o.nonce,createdAt:o.created_at},m.value=o.launch_tx_id,f.value=o.datalog_tx_id,v.value=o.crust_tx_id),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(1);case 11:setTimeout(h,1e3);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(){return o.apply(this,arguments)}}();return Object(o.d)((function(){h()})),{robot:t,launchData:e,traceInfo:n,launchTxId:m,datalogTxId:f,crustTxId:v,addressShort:function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""},makeSubscanLink:d.d,makeIpfsFolderLink:l.c}}}),v=f,h=n(25),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-4 min-h-200 p-2"},[n("div"),t._v(" "),n("div",{staticClass:"mt-4"},[n("CardContainer",{attrs:{title:"Saved data"}},[null!==t.launchData?n("div",[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Robonomics Launch Tx: "),n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("robonomics",t.launchTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.launchTxId)))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Record data on IPFS: "),t.traceInfo.ipfsCid?n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeIpfsFolderLink(t.traceInfo),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.traceInfo.ipfsCid)))]):n("Spinner")],1),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Robonomics Datalog Tx: "),t.datalogTxId?n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("robonomics",t.datalogTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.datalogTxId)))]):n("Spinner")],1),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Crust Storage Order Tx: "),t.crustTxId?n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("crust",t.crustTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.crustTxId)))]):n("Spinner")],1),t._v(" "),n("div",{staticClass:"flex items-left justify-left m-4"},[n("video",{attrs:{src:t.makeIpfsFolderLink(t.traceInfo)+"/h264_camera.mp4",type:"video/mp4",controls:""}})])]):n("div",[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Your launch data will appear here after processing drawing and saving all data\n        ")])])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:n(580).default,CardContainer:n(561).default})},644:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(95),o=Object(r.c)("spotData",{state:function(){return{status:"unknown",cameraImages:{},battery:null,location:"start",gauges:0}},actions:{setSpotAnswer:function(data){if(!data)return this.battery=null,this.cameraImages={},void(this.status="unknown");this.battery=data.battery,this.cameraImages=data.camera_images},setStatus:function(t){this.status=t}}})},646:function(t,e,n){"use strict";n.r(e);var r=n(94),o=n(644),c=Object(r.b)({props:["title","cameraName"],setup:function(t){var e=Object(o.a)();return{cameraTitle:t.title,camera:t.cameraName,spot:e}}}),l=n(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-700"},[t.spot.cameraImages[t.camera]?n("figure",[n("img",{attrs:{src:"data:image/jpeg;base64, "+t.spot.cameraImages[t.camera],alt:"Video stream"}})]):n("div",{staticClass:"mx-16 my-8"},[t._v("\n    Waiting for image\n  ")]),t._v(" "),n("div",{staticClass:"p-2"},[n("p",{staticClass:"font-mono text-white"},[t._v("\n      "+t._s(t.cameraTitle)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},715:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(64),n(0)),c=n(602),l=n(554),d=n(557),m=Object(o.defineComponent)({setup:function(){var t=Object(d.a)(),e=Object(l.a)(),n=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.b)(t.selectedAccount.account.address,e.signedRobotToken,r);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(o.onMounted)((function(){document.addEventListener("keydown",(function(t){var e=t.key;"w"===e?n({x:.45,y:0,r:0}):"a"===e?n({x:0,y:.4,r:0}):"s"===e?n({x:-.4,y:0,r:0}):"d"===e?n({x:0,y:-.4,r:0}):"q"===e?n({x:0,y:0,r:.4}):"e"===e&&n({x:0,y:0,r:-.4})}),!1)})),{moveCommand:n}}}),f=m,v=n(25),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-3 gap-x-4"},[n("div"),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:1,y:0})}}},[t._v("\n    Up\n  ")]),t._v(" "),n("div"),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:0,y:-1})}}},[t._v("\n    Left\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:-1,y:0})}}},[t._v("\n    Down\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:0,y:1})}}},[t._v("\n    Right\n  ")])])}),[],!1,null,null,null);e.default=component.exports},716:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(64),n(0)),c=n(602),l=n(554),d=n(557),m=Object(o.defineComponent)({setup:function(){var t=Object(d.a)(),e=Object(l.a)(),n=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.c)(t.selectedAccount.account.address,e.signedRobotToken,r);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return{poseCommand:n}}}),f=m,v=n(25),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-2 gap-x-4"},[n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("stance")}}},[t._v("\n    Stance sides\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("stance_0")}}},[t._v("\n    Stance default\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("seat")}}},[t._v("\n    Seat\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("stand")}}},[t._v("\n    Stand\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("bow")}}},[t._v("\n    Bow\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("bow_b")}}},[t._v("\n    Look up\n  ")])])}),[],!1,null,null,null);e.default=component.exports},902:function(t,e,n){var content=n(1056);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("1be86702",content,!0,{sourceMap:!1})},909:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(554),c=n(646),l=Object(r.defineComponent)({components:{CameraStream:c.default},setup:function(){return{robot:Object(o.a)()}}}),d=n(25),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-6 py-4 sticky top-0"},[t.robot.robotState?n("div",[n("p",{staticClass:"text-3xl my-6 text-center text-white"},[t._v("\n      Hi, I’m Spot 🦾🐶\n    ")]),t._v(" "),n("div",[n("CameraStream",{attrs:{title:"front","camera-name":"front_image"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.robot.robotState?t._e():n("div",[n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n      Spot is currently unavailable\n    ")]),t._v(" "),n("div",{staticClass:"h-1/3"},[n("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-2xl my-6 text-center text-white"},[t._v("\n      And we are a team of builders who share the vision of\n      "),n("br"),t._v(" "),n("span",{staticClass:"text-orange-600 font-bold"},[t._v("machine economy with no single point of failure.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-2xl mt-2 text-center text-white"},[t._v("\n      With this demo we aim to demonstrate the benefits of using Web3 software\n      stack in robotics deployments.\n      "),n("br")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CameraStream:n(646).default,CameraFrame:n(592).default})},910:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(21),n(43),n(49),n(64),n(94)),c=n(557),l=n(554),d=n(587),m=n(588),f=n(593),v=n(708),h=n(555),x=Object(o.b)({components:{DashboardLikeContainer:f.default,RobotStateCard:m.default,ProgressContainerElement:d.default},setup:function(){var t=Object(c.a)(),e=Object(l.a)(),n=Object(o.f)(),d=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t.selectedAccount.account.address),n.next=3,Object(v.a)(t.selectedAccount.account.address);case 3:return r=n.sent,n.next=6,Object(h.i)(r);case 6:o=n.sent,console.log(r),console.log(o),e.robotToken=r,e.signedRobotToken=o;case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=Object(o.a)((function(){var n={connectWallet:"connected"===t.walletConnectionStatus,sendLaunchCommand:"unknown"!==e.cps.status,waitTx:"accepted"===e.cps.launch.txStatus,robotExecution:null!==e.cps.launch.recordData,recordedData:null!==e.cps.launch.recordData},r={},o="success";return Object.keys(n).forEach((function(t){if("success"===o){var e=n[t]?"success":"wait";o=e,r[t]=e}else"wait"===o?(o="disabled",r[t]="disabled"):"disabled"===o&&(r[t]="disabled");r[t]="success"})),r}));return{wallet:t,robot:e,progressElementStatuses:m,modal:n,openModal:function(){n.value.openModal()},signToken:d}}}),y=x,_=n(25),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"overflow-x-hidden overflow-y-auto snap-y snap-mandatory"},[n("Modal",{ref:"modal"}),t._v(" "),n("ProgressContainer",[n("ProgressContainerElement",{attrs:{title:"Connect your wallet",status:t.progressElementStatuses.connectWallet}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-1","href-id":"#1",title:""}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            Identity and access rights are managed using the cryptographic key\n            from your Web3 wallet.\n          ")]),t._v(" "),n("img",{attrs:{src:"/pictures/Frame2.png"}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("AccountChooser"),t._v(" "),"error"===t.wallet.walletConnectionStatus?n("div",[n("p",{staticClass:"text-xl my-6 text-center text-white font-bold"},[t._v("\n                ❗ Please install\n                "),t._v(" "),n("a",{staticClass:"text-orange-600",attrs:{href:"https://talisman.xyz/",target:"_blank"}},[t._v("Talisman web3 wallet")]),t._v(" and create an account. Then reload this page.\n              ")])]):t._e()],1),t._v(" "),n("div",[n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n              You need to get your control token by signing robot's token\n            ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:t.signToken}},[t._v("\n              Sign token\n            ")]),t._v(" "),n("div",[t._v("status: "+t._s(t.robot.signedRobotToken?"authed":"not authed"))])])],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Send launch transaction",status:t.progressElementStatuses.sendLaunchCommand}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-4","href-id":"#4",title:""}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            Teleoperation is authorized by sending transactions directly to the robot’s address using your wallet.\n          ")]),t._v(" "),n("img",{attrs:{src:"/pictures/Frame4.png"}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center mt-4"},[n("SendDrawingCommand")],1)],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Wait for your transaction to process",status:t.progressElementStatuses.waitTx}},[n("Anchor",{attrs:{"anchor-id":"anchor-to-5","href-id":"#5",title:""}}),t._v(" "),n("StepContentContainer",[n("DashboardLikeContainer",[n("LaunchTransactionInfoCard")],1)],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Control spot",status:t.progressElementStatuses.robotExecution}},[n("Anchor",{attrs:{"anchor-id":"anchor-to-4","href-id":"#6",title:""}}),t._v(" "),n("StepContentContainer",[n("DashboardLikeContainer",[n("RobotStateCard"),t._v(" "),n("SpotAnimation")],1),t._v(" "),n("div",{staticClass:"border-2 border-gray-500 p-4"},[n("p",{staticClass:"text-md my-2 text-white"},[t._v("\n              Control spot movement\n            ")]),t._v(" "),n("WASDController")],1),t._v(" "),n("div",{staticClass:"border-2 border-gray-500 p-4 mt-4"},[n("p",{staticClass:"text-md my-2 text-white"},[t._v("\n              Control spot poses\n            ")]),t._v(" "),n("PoseController")],1)],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Review recorded data",status:t.progressElementStatuses.recordedData}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-7","href-id":"#7",title:""}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            The data is recorded using IPFS and stored with multiple replicas using decentralized Crust Network to guarantee availability and resiliency.\n          ")]),t._v(" "),n("img",{attrs:{src:"/pictures/Frame5.png"}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            Here is the report from your interaction with Spot:\n          ")]),t._v(" "),n("ResultingRecordCard")],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:n(618).default,Anchor:n(609).default,AccountChooser:n(596).default,StepContentContainer:n(612).default,ProgressContainerElement:n(587).default,SendDrawingCommand:n(619).default,LaunchTransactionInfoCard:n(620).default,DashboardLikeContainer:n(593).default,RobotStateCard:n(588).default,SpotAnimation:n(621).default,WASDController:n(715).default,PoseController:n(716).default,ResultingRecordCard:n(622).default,ProgressContainer:n(610).default})}}]);