(window.webpackJsonp=window.webpackJsonp||[]).push([[2,20],{1001:function(t,e,n){"use strict";n.r(e);var r=n(14),c=(n(64),n(76),n(48),n(21),n(0)),o=n(94),l=n(573),f=n(558),d=n(560),m=Object(c.defineComponent)({setup:function(){var t=Object(l.a)(),e=Object(f.a)(),n=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){var c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Sending command"),console.log(t.currentDrawingSegments),n.prev=2,n.next=5,e.launchCps(r);case 5:c=n.sent,o=r?"xrt":"ticket",c&&e.sendDrawing(t.currentDrawingSegments,o,"".concat(c.txInfo.blockNumber,"-").concat(c.txInfo.txIndex)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}(),c=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(1*Math.pow(10,9));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=Object(d.a)();return{sendCommandXrt:c,sendCommandTicket:m,hasEnoughXrt:Object(o.a)((function(){return h.selectedAccount.balanceRaw*Math.pow(10,-9)>1})),hasTicket:Object(o.a)((function(){return h.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length>=1})),wallet:h}}}),h=m,v=n(25),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PayWithToggle",{scopedSlots:t._u([{key:"ticket",fn:function(){return[n("div",{staticClass:"w-full px-2 bg-gray-600 relative"},[n("p",{staticClass:"text-md my-4 mb-16 text-white text-center"},[t._v("\n        You have "+t._s(t.wallet.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length)+"\n        tickets\n      ")]),t._v(" "),n("button",{staticClass:"\n            absolute bottom-0 inset-x-0 uppercase py-2 mx-4 my-2 px-4 md:mt-16\n            text-md text-center\n            text-gray-800 bg-gray-200 border-2\n            hover:bg-gray-100 hover:bg-gray-800 hover:text-white\n          ",attrs:{type:"button",disabled:!t.hasTicket},on:{click:t.sendCommandTicket}},[t._v("\n        Launch for 1 ticket\n      ")])])]},proxy:!0},{key:"XRT",fn:function(){return[n("div",{staticClass:"w-full px-2 bg-gray-600 relative"},[n("p",{staticClass:"text-md my-4 mb-16 text-white text-center"},[t._v("\n        You have "+t._s(t.wallet.selectedAccount.balanceFormatted)+"\n      ")]),t._v(" "),n("button",{staticClass:"\n            absolute bottom-0 inset-x-0 uppercase py-2 mx-4 my-2 px-4 md:mt-16\n            text-md text-center\n            text-gray-800 bg-gray-200 border-2\n            hover:bg-gray-100 hover:bg-gray-800 hover:text-white\n          ",attrs:{type:"button",disabled:!t.hasEnoughXrt},on:{click:t.sendCommandXrt}},[t._v("\n        Launch for 1 XRT\n      ")])])]},proxy:!0}])})}),[],!1,null,"41acae3c",null);e.default=component.exports;installComponents(component,{PayWithToggle:n(641).default})},554:function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"f",(function(){return k})),n.d(e,"j",(function(){return O})),n.d(e,"c",(function(){return R})),n.d(e,"e",(function(){return j})),n.d(e,"i",(function(){return _})),n.d(e,"g",(function(){return S})),n.d(e,"h",(function(){return C})),n.d(e,"d",(function(){return A})),n.d(e,"a",(function(){return P}));var r,c,o=n(14),l=(n(56),n(76),n(47),n(64),n(574)),f=n(578),d=n.n(f),m=n(580),h=n(587),v=n(871),x=n(837),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new l.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new d.a(m.a)),t.next=6,r.run();case 6:return t.next=8,d.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,w();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,c=r.launch.send(e,Object(h.a)(n)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,c=r.api.tx.balances.transfer(e,n),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,t.next=5,Object(v.i)(r.accountManager.account.meta.source);case 5:if(c=t.sent,!(o=null==c||null===(n=c.signer)||void 0===n?void 0:n.signRaw)){t.next=13;break}return t.next=10,o({address:r.accountManager.account.address,data:Object(x.a)(e),type:"bytes"});case 10:return l=t.sent,f=l.signature,t.abrupt("return",f);case 13:return t.abrupt("return",null);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(t,e){return"https://".concat(t,".subscan.io/extrinsic/").concat(e)},P=function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}},558:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(14),c=(n(21),n(64),n(95)),o=n(554),l=Object(c.c)("robot",{state:function(){return{robotToken:null,signedRobotToken:null,queueSize:null,robotState:null,lastSessionId:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:{tx:null},txStatus:null,recordData:null}}}},actions:{launchCps:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.cps.launch.txInfo={tx:null},e.cps.launch.txStatus=null,n.next=4,Object(o.c)(e.cps.address,!0);case 4:if(r=n.sent,e.cps.status="wait_tx",!t){n.next=15;break}return n.next=9,Object(o.e)(e.cps.address,t);case 9:return c=n.sent,n.next=12,Object(o.h)([r,c]);case 12:e.cps.launch.txInfo=n.sent,n.next=18;break;case 15:return n.next=17,Object(o.g)(r);case 17:e.cps.launch.txInfo=n.sent;case 18:return e.cps.launch.txStatus="accepted",e.cps.status="activated",n.abrupt("return",e.cps.launch);case 21:case"end":return n.stop()}}),n)})))()},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,t.lastSessionId=r.last_session_id,e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(0),t.robotState=null,t.queueSize=null,t.lastSessionId=null,e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},sendDrawing:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segments:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))}}})},559:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return d}));var r=n(14),c=(n(64),n(78)),o=n.n(c).a.create({baseURL:"https://api.merklebot.com"}),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l,f,d,m,h,v,x,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sender,r=void 0===n?null:n,c=e.nonce,l=void 0===c?null:c,f=e.launchTxId,d=void 0===f?null:f,m=e.skip,h=void 0===m?null:m,v=e.limit,x=void 0===v?null:v,t.next=3,o.get("robonomics-launch-traces",{params:{sender:r,nonce:l,skip:h,limit:x,launch_tx_id:d}});case 3:return w=t.sent,t.abrupt("return",w.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("spot-demo-ticket/checkout",{quantity:"1",account:e});case 2:return n=t.sent,t.abrupt("return",n.data.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("spot-demo/tickets",{params:{customer:e,spent:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},560:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(14),c=(n(64),n(567),n(21),n(568),n(571),n(95)),o=n(559),l=n(554),f=Object(c.c)("wallet",{state:function(){return{accounts:[],walletConnectionStatus:"wait",selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null,tickets:[]}}},actions:{connectWallet:function(){var t=this;Object(l.b)().then((function(e){console.log("accounts",e),t.accounts=e;var n=localStorage.getItem("selectedAccountAddress"),r=e.find((function(a){return a.address===n}));t.setActiveAccount(null!=r?r:e[0]),t.walletConnectionStatus="connected"})).catch((function(e){t.walletConnectionStatus="error"}))},updateTicketsList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.selectedAccount.account){e.next=4;break}return e.next=3,Object(o.c)(t.selectedAccount.account.address);case 3:t.selectedAccount.tickets=e.sent;case 4:case"end":return e.stop()}}),e)})))()},setActiveAccount:function(t){var e=this;this.selectedAccount.account=t,Object(l.f)(t.address),localStorage.setItem("selectedAccountAddress",t.address),Object(l.j)(this.selectedAccount.account.address,(function(t){var n=t.free,r=t.feeFrozen,c=n.sub(r);e.selectedAccount.balanceRaw=c,e.selectedAccount.balanceFormatted=(c*Math.pow(10,-9)).toFixed(4)+" XRT"}))}}})},567:function(t,e,n){"use strict";var r=n(1),c=n(77).find,o=n(160),l="find",f=!0;l in[]&&Array(1).find((function(){f=!1})),r({target:"Array",proto:!0,forced:f},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},568:function(t,e,n){"use strict";var r=n(1),c=n(569);r({target:"String",proto:!0,forced:n(570)("sub")},{sub:function(){return c(this,"sub","","")}})},569:function(t,e,n){var r=n(8),c=n(33),o=n(20),l=/"/g,f=r("".replace);t.exports=function(t,e,n,r){var d=o(c(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+f(o(r),l,"&quot;")+'"'),m+">"+d+"</"+e+">"}},570:function(t,e,n){var r=n(9);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},571:function(t,e,n){"use strict";var r=n(1),c=n(3),o=n(8),l=n(65),f=n(572),d=n(223),m=n(9),h=c.RangeError,v=c.String,x=Math.floor,w=o(d),y=o("".slice),k=o(1..toFixed),O=function(t,e,n){return 0===e?n:e%2==1?O(t,e-1,n*t):O(t*t,e/2,n)},R=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=x(r/1e7)},j=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=x(n/t),n=n%t*1e7},_=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+w("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:m((function(){return"0.000"!==k(8e-5,3)||"1"!==k(.9,0)||"1.25"!==k(1.255,2)||"1000000000000000128"!==k(0xde0b6b3a7640080,0)}))||!m((function(){k({})}))},{toFixed:function(t){var e,n,r,c,o=f(this),d=l(t),data=[0,0,0,0,0,0],m="",x="0";if(d<0||d>20)throw h("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return v(o);if(o<0&&(m="-",o=-o),o>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(o*O(2,69,1))-69)<0?o*O(2,-e,1):o/O(2,e,1),n*=4503599627370496,(e=52-e)>0){for(R(data,0,n),r=d;r>=7;)R(data,1e7,0),r-=7;for(R(data,O(10,r,1),0),r=e-1;r>=23;)j(data,1<<23),r-=23;j(data,1<<r),R(data,1,1),j(data,2),x=_(data)}else R(data,0,n),R(data,1<<-e,0),x=_(data)+w("0",d);return x=d>0?m+((c=x.length)<=d?"0."+w("0",d-c)+x:y(x,0,c-d)+"."+y(x,c-d)):m+x}})},572:function(t,e,n){var r=n(8);t.exports=r(1..valueOf)},573:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o}));var r=n(95),c=Object(r.c)("dashboardParameters",{state:function(){return{codeSampleParameter:!1}},actions:{setCodeSampleParameter:function(t){this.codeSampleParameter=t}}}),o=Object(r.c)("dAppParameters",{state:function(){return{payWithOption:"ticket",currentDrawingSegments:[]}}})},575:function(t,e){},576:function(t,e){},577:function(t,e){},641:function(t,e,n){"use strict";n.r(e);var r=n(94),c=n(573),o=Object(r.b)({setup:function(){return{dappParameters:Object(c.a)()}}}),l=n(25),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full py-4"},[n("div",{staticClass:"flex flex-row"},[n("button",{staticClass:"basis-1/2 uppercase py-2 px-4 text-gray-800 text-md",class:{"bg-orange-600 text-white border-b-0":"ticket"===t.dappParameters.payWithOption,"bg-gray-200 text-gray-800  hover:bg-gray-800 hover:bg-gray-100 hover:text-white":"XRT"===t.dappParameters.payWithOption},attrs:{type:"button",disabled:"ticket"===t.dappParameters.payWithOption},on:{click:function(e){t.dappParameters.payWithOption="ticket"}}},[t._v("\n      Credit Card\n    ")]),t._v(" "),n("button",{staticClass:"basis-1/2 uppercase py-2 px-4 text-gray-800 text-md",class:{"bg-orange-600 text-white border-b-0":"XRT"===t.dappParameters.payWithOption,"bg-gray-200 text-gray-800 hover:bg-gray-800 hover:bg-gray-100 hover:text-white":"ticket"===t.dappParameters.payWithOption},attrs:{type:"button",disabled:"XRT"===t.dappParameters.payWithOption},on:{click:function(e){t.dappParameters.payWithOption="XRT"}}},[t._v("\n      Crypto\n    ")])]),t._v(" "),n("div",[n("div",{staticClass:"flex flex-row "},["XRT"===t.dappParameters.payWithOption?t._t("XRT"):t._e(),t._v(" "),"ticket"===t.dappParameters.payWithOption?t._t("ticket"):t._e()],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);