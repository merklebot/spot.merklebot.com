(window.webpackJsonp=window.webpackJsonp||[]).push([[28,41],{1075:function(t,n,e){"use strict";var r=e(1),c=e(1076).start;r({target:"String",proto:!0,forced:e(1077)},{padStart:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},1076:function(t,n,e){var r=e(8),c=e(68),o=e(20),l=e(223),f=e(33),d=r(l),h=r("".slice),m=Math.ceil,x=function(t){return function(n,e,r){var l,x,v=o(f(n)),w=c(e),k=v.length,C=void 0===r?" ":o(r);return w<=k||""==C?v:((x=d(C,m((l=w-k)/C.length))).length>l&&(x=h(x,0,l)),t?v+x:x+v)}};t.exports={start:x(!1),end:x(!0)}},1077:function(t,n,e){var r=e(80);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},1104:function(t,n,e){"use strict";e.r(n);e(1075),e(76);var r=e(0),c=e(554),o=Object(r.defineComponent)({props:{info:{type:Object,default:null}},setup:function(t){var n=t.info,e=Object(c.a)();return console.log("Nft Order info"),console.log(n),{nftOrderInfo:n,makeNftUrl:function(t,symbol,n,e){var r="".concat(e).padStart(8,"0");return"https://singular.app/collectibles/kusama/".concat(t,"-").concat(symbol,"/").concat(n,"-").concat(t,"-").concat(symbol,"-").concat(symbol,"-").concat(r)},robot:e}}}),l=e(25),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Status: "),e("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.nftData.status))])]),t._v(" "),e("img",{staticClass:"mt-2",attrs:{src:t.nftOrderInfo.image_url}}),t._v(" "),e("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    NFT Link: "),["minted","delivered"].includes(t.robot.nftData.status)?e("a",{staticClass:"text-yellow-500",attrs:{href:t.makeNftUrl("b437f70371c8622e02","MKBHW",t.robot.nftData.nft_mint_block_number,t.robot.nftData.nft_serial_num),target:"_blank",rel:"noopener noreferrer"}},[t._v("View in Singular")]):e("Spinner")],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Spinner:e(580).default})},554:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var r=e(14),c=(e(21),e(64),e(95)),o=e(584),l=e.n(o),f=e(555),d=Object(c.c)("robot",{state:function(){return{robotToken:null,signedRobotToken:null,queueSize:null,robotState:null,lastSessionId:null,nftData:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:{tx:null},txStatus:null,recordData:null}}}},actions:{launchCps:function(t,n){var e=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c,o,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.cps.launch.txInfo={tx:null},e.cps.launch.txStatus=null,r.next=4,l.a.of(JSON.stringify(n));case 4:return c=r.sent,r.next=7,Object(f.c)(e.cps.address,c);case 7:if(o=r.sent,e.cps.status="wait_tx",!t){r.next=18;break}return r.next=12,Object(f.e)(e.cps.address,t);case 12:return d=r.sent,r.next=15,Object(f.h)([o,d]);case 15:e.cps.launch.txInfo=r.sent,r.next=21;break;case 18:return r.next=20,Object(f.g)(o);case 20:e.cps.launch.txInfo=r.sent;case 21:return e.cps.launch.txStatus="accepted",e.cps.status="activated",r.abrupt("return",e.cps.launch);case 24:case"end":return r.stop()}}),r)})))()},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,t.lastSessionId=r.last_session_id,n.abrupt("return",!0);case 13:return n.prev=13,n.t0=n.catch(0),t.robotState=null,t.queueSize=null,t.lastSessionId=null,n.abrupt("return",!1);case 19:case"end":return n.stop()}}),n,null,[[0,13]])})))()},setNftData:function(data){this.nftData=data},sendDrawing:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ticket",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({account:t,segments:n,payment_mode:e,tx_id:r})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))},startInspection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/start_inspection",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({account:t,payment_mode:n,tx_id:e})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))}}})},555:function(t,n,e){"use strict";e.d(n,"b",(function(){return w})),e.d(n,"f",(function(){return k})),e.d(n,"j",(function(){return C})),e.d(n,"c",(function(){return O})),e.d(n,"e",(function(){return _})),e.d(n,"i",(function(){return j})),e.d(n,"g",(function(){return S})),e.d(n,"h",(function(){return y})),e.d(n,"d",(function(){return R})),e.d(n,"a",(function(){return M}));var r,c,o=e(14),l=(e(58),e(76),e(47),e(64),e(579)),f=e(576),d=e.n(f),h=e(578),m=e(917),x=e(862),v=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new l.a({endpoint:"wss://robonomics.leemo.me"})).setAccountManager(new d.a(h.a)),t.next=6,r.run();case 6:return t.next=8,d.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return n=t.sent,t.next=5,n.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return n=t.sent,t.next=5,n.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,v();case 3:return e=t.sent,t.next=6,e.account.getBalance(address,n);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n,e){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return r=t.sent,c=r.launch.send(n,l.b.cidToHex(e)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n,e){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return r=t.sent,c=r.api.tx.balances.transfer(n,e),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n){var e,r,c,o,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return r=t.sent,t.next=5,Object(m.i)(r.accountManager.account.meta.source);case 5:if(c=t.sent,!(o=null==c||null===(e=c.signer)||void 0===e?void 0:e.signRaw)){t.next=13;break}return t.next=10,o({address:r.accountManager.account.address,data:Object(x.a)(n),type:"bytes"});case 10:return l=t.sent,f=l.signature,t.abrupt("return",f);case 13:return t.abrupt("return",null);case 14:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),S=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.next=5,e.accountManager.signAndSend(n);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n){var e,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.next=5,e.api.tx.utility.batch(n);case 5:return r=t.sent,t.next=8,e.accountManager.signAndSend(r);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),R=function(t,n){return"https://".concat(t,".subscan.io/extrinsic/").concat(n)},M=function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}},573:function(t,n){},575:function(t,n){},577:function(t,n){},580:function(t,n,e){"use strict";e.r(n);var r=e(25),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"w-8 h-8 mr-2 animate-spin text-gray-600 fill-orange-600 inline",attrs:{role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})])}),[],!1,null,null,null);n.default=component.exports}}]);