(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{552:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return x})),n.d(t,"e",(function(){return w})),n.d(t,"h",(function(){return y})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return O})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return R}));var r,o,c=n(14),f=(n(55),n(63),n(565)),d=n(574),l=n.n(d),m=n(575),h=n(571),v=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=2;break}return e.abrupt("return",r);case 2:return(r=new f.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new l.a(m.a)),e.next=6,r.run();case 6:return e.next=8,l.a.initPlugin(r.accountManager.keyring);case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,e.next=5,t.accountManager.getAccounts();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(address){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,e.next=5,t.accountManager.selectAccountByAddress(address);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(address,t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o&&o(),e.next=3,v();case 3:return n=e.sent,e.next=6,n.account.getBalance(address,t);case 6:o=e.sent;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return r=e.sent,o=r.launch.send(t,Object(h.a)(n)),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return r=e.sent,o=r.api.balances.transfer(t,n),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return n=e.sent,e.next=5,n.accountManager.signAndSend(t);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return n=e.sent,e.next=5,n.api.tx.utility.batch(t);case 5:return r=e.sent,e.next=8,n.accountManager.signAndSend(r);case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},567:function(e,t){},570:function(e,t){},572:function(e,t){},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(14),o=(n(21),n(63),n(94)),c=n(552),f=Object(o.c)("robot",{state:function(){return{queueSize:null,robotState:null,lastSessionId:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:{tx:null},txStatus:null}}}},actions:{launchCps:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.cps.launch.txInfo={tx:null},t.cps.launch.txStatus=null,n.next=4,Object(c.c)(t.cps.address,!0);case 4:if(r=n.sent,t.cps.status="wait_tx",!e){n.next=15;break}return n.next=9,Object(c.d)(t.cps.address,e);case 9:return o=n.sent,n.next=12,Object(c.g)([r,o]);case 12:t.cps.launch.txInfo=n.sent,n.next=18;break;case 15:return n.next=17,Object(c.f)(r);case 17:t.cps.launch.txInfo=n.sent;case 18:return t.cps.launch.txStatus="accepted",t.cps.status="activated",n.abrupt("return",!0);case 21:case"end":return n.stop()}}),n)})))()},updateRobotState:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,e.robotState=r.robot_state,e.queueSize=r.queue_size,e.lastSessionId=r.last_session_id,t.abrupt("return",!0);case 13:return t.prev=13,t.t0=t.catch(0),e.robotState=null,e.queueSize=null,e.lastSessionId=null,t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t,null,[[0,13]])})))()},sendDrawing:function(e){fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segments:e})}).then((function(e){return e.json()})).then((function(data){console.log(data)}))}}})},587:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(94),o=Object(r.c)("dashboardParameters",{state:function(){return{codeSampleParameter:!1}},actions:{setCodeSampleParameter:function(e){this.codeSampleParameter=e}}})},588:function(e,t,n){var content=n(622);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("210d2ce1",content,!0,{sourceMap:!1})},621:function(e,t,n){"use strict";n(588)},622:function(e,t,n){var r=n(56)((function(i){return i[1]}));r.push([e.i,".canvas-style[data-v-72a6b054]{cursor:crosshair;width:100%!important;height:300px!important;border:2px solid #000;border-radius:0;display:block;margin:auto}",""]),r.locals={},e.exports=r},659:function(e,t,n){"use strict";n.r(t);var r=n(30),o=n(14),c=(n(63),n(21),n(42),n(48),n(36),n(47),n(64),n(65),n(93)),f=n(587),d=n(576);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m=n(728),h=Object(c.b)({props:["canvasId"],emits:["drawing_sent"],setup:function(e,t){t.emit;var n=Object(d.a)(),path=null,h=null,v=[],x=Object(f.a)();Object(c.d)((function(){(h=new m.PaperScope).setup(e.canvasId)}));var w=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],console.log("Sending command"),console.log(v),v.forEach((function(path){var e=[];console.log(path._segments),path._segments.forEach((function(t){e.push([t.point.x,t.point.y])})),r.push(e)})),console.log(r),x.setCodeSampleParameter(!0),e.next=8,n.launchCps(t);case 8:e.sent&&n.sendDrawing(r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(1*Math.pow(10,9));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{mouseDown:function(e){console.log("mouse down");var t=function(e){return console.log("createTool"),e.activate(),new m.Tool}(h);t.onMouseDown=function(e){path=function(e){return e.activate(),new m.Path({strokeColor:"#000000",strokeJoin:"round",strokeWidth:1.5})}(h),path.add(e.point)},t.onMouseDrag=function(e){console.log("mouse drag"),path.add(e)},t.onMouseUp=function(e){console.log("mouse up"),path.add(e.point),path.simplify(10),path.flatten(3),v.push(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},path)),console.log(v)}},resetCanvas:function(){x.setCodeSampleParameter(!1),h.project.activeLayer.removeChildren(),v=[]},sendCommandXrt:y,sendCommandTicket:k}}}),v=h,x=(n(621),n(27)),component=Object(x.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"w-full mb-8"},[n("canvas",{staticClass:"canvas-style",attrs:{id:e.canvasId},on:{mousedown:e.mouseDown}})]),e._v(" "),n("div",{},[n("button",{staticClass:" uppercase py-2 my-2 px-4  bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md",attrs:{type:"button"},on:{click:e.resetCanvas}},[e._v("\n      Clear canvas\n    ")]),e._v(" "),n("button",{staticClass:" uppercase py-2 my-2 px-4  bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md",attrs:{type:"button"},on:{click:e.sendCommandXrt}},[e._v("\n      Send command spending 1 XRT\n    ")]),e._v(" "),n("button",{staticClass:" uppercase py-2 my-2 px-4  bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md",attrs:{type:"button"},on:{click:e.sendCommandTicket}},[e._v("\n      Send command spending 1 ticket\n    ")])])])}),[],!1,null,"72a6b054",null);t.default=component.exports},729:function(e,t){},730:function(e,t){}}]);