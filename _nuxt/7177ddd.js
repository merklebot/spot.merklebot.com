(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12],{554:function(t,e,r){"use strict";r.d(e,"b",(function(){return m})),r.d(e,"a",(function(){return x})),r.d(e,"e",(function(){return w})),r.d(e,"h",(function(){return k})),r.d(e,"c",(function(){return y})),r.d(e,"d",(function(){return _})),r.d(e,"f",(function(){return R})),r.d(e,"g",(function(){return O}));var n,c,o=r(14),d=(r(55),r(63),r(577)),l=r(584),f=r.n(l),h=r(586),v=r(568),m=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n);case 2:return(n=new d.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new f.a(h.a)),t.next=6,n.run();case 6:return t.next=8,f.a.initPlugin(n.accountManager.keyring);case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,m();case 3:return r=t.sent,t.next=6,r.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return n=t.sent,c=n.launch.send(e,Object(v.a)(r)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return n=t.sent,c=n.api.tx.balances.transfer(e,r),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return r=t.sent,t.next=5,r.accountManager.signAndSend(e);case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return r=t.sent,t.next=5,r.api.tx.utility.batch(e);case 5:return n=t.sent,t.next=8,r.accountManager.signAndSend(n);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},556:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));r(561);var n=r(94),c=r(793),o=r(557),d=r(554),l=Object(n.c)("wallet",{state:function(){return{accounts:[],walletConnectionStatus:"wait",selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null,tickets:[]}}},actions:{connectWallet:function(){var t=this;Object(d.a)().then((function(e){console.log("accounts",e),t.accounts=e,t.setActiveAccount(e[0]),t.walletConnectionStatus="connected"})).catch((function(e){t.walletConnectionStatus="error"}))},setActiveAccount:function(t){var e=this;this.selectedAccount.account=t,Object(d.e)(t.address),Object(d.h)(this.selectedAccount.account.address,(function(r){Object(d.b)().then((function(n){var d=r.free.sub(r.feeFrozen);e.selectedAccount.balanceRaw=d,0===d&&(e.selectedAccount.balanceFormatted="0 XRT"),e.selectedAccount.balanceFormatted=Object(c.a)(d,{decimals:n.api.registry.chainDecimals[0],withUnit:n.api.registry.chainTokens[0]}),Object(o.c)(t.address).then((function(t){e.selectedAccount.tickets=t}))}))}))}}})},557:function(t,e,r){"use strict";r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return l})),r.d(e,"c",(function(){return f}));var n=r(14),c=(r(63),r(77)),o=r.n(c).a.create({baseURL:"https://api.merklebot.com"}),d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,c,d,l,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.sender,n=void 0===r?null:r,c=e.nonce,d=void 0===c?null:c,l=e.launchTxId,f=void 0===l?null:l,t.next=3,o.get("robonomics-launch-traces",{params:{sender:n,nonce:d,launch_tx_id:f}});case 3:return h=t.sent,t.abrupt("return",h.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("spot-demo-ticket/checkout",{quantity:"1",account:e});case 2:return r=t.sent,t.abrupt("return",r.data.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("spot-demo/tickets",{params:{customer:e,spent:r}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},561:function(t,e,r){"use strict";var n=r(1),c=r(562);n({target:"String",proto:!0,forced:r(563)("sub")},{sub:function(){return c(this,"sub","","")}})},562:function(t,e,r){var n=r(9),c=r(32),o=r(20),d=/"/g,l=n("".replace);t.exports=function(t,e,r,n){var f=o(c(t)),h="<"+e;return""!==r&&(h+=" "+r+'="'+l(o(n),d,"&quot;")+'"'),h+">"+f+"</"+e+">"}},563:function(t,e,r){var n=r(8);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},575:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return o}));var n=r(94),c=Object(n.c)("dashboardParameters",{state:function(){return{codeSampleParameter:!1}},actions:{setCodeSampleParameter:function(t){this.codeSampleParameter=t}}}),o=Object(n.c)("dAppParameters",{state:function(){return{payWithOption:"XRT"}}})},578:function(t,e){},579:function(t,e){},581:function(t,e){},660:function(t,e,r){"use strict";r.r(e);var n=r(93),c=r(575),o=Object(n.b)({setup:function(){return{dappParameters:Object(c.a)()}}}),d=r(27),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full mx-8 py-4"},[r("div",{staticClass:"flex flex-row"},[r("button",{staticClass:" uppercase py-2 px-4  bg-transparent  border-0 border-gray-800 text-gray-800 dark:text-white text-md",class:{"dark:bg-gray-600 dark:text-white border-b-0":"ticket"===t.dappParameters.payWithOption,"dark:bg-white dark:text-gray-800  hover:bg-gray-800 hover:dark:bg-gray-100 hover:text-white":"XRT"===t.dappParameters.payWithOption},attrs:{type:"button"},on:{click:function(e){t.dappParameters.payWithOption="ticket"}}},[t._v("\n      Credit Card\n    ")]),t._v(" "),r("button",{staticClass:" uppercase py-2 px-4  bg-transparent  border-0 border-gray-800 text-gray-800 dark:text-white text-md",class:{"dark:bg-gray-600 dark:text-white border-b-0":"XRT"===t.dappParameters.payWithOption,"dark:bg-white dark:text-gray-800  hover:bg-gray-800 hover:dark:bg-gray-100 hover:text-white":"ticket"===t.dappParameters.payWithOption},attrs:{type:"button"},on:{click:function(e){t.dappParameters.payWithOption="XRT"}}},[t._v("\n      XRT\n    ")])]),t._v(" "),r("div",[r("div",{staticClass:"flex flex-row "},["XRT"===t.dappParameters.payWithOption?t._t("XRT"):t._e(),t._v(" "),"ticket"===t.dappParameters.payWithOption?t._t("ticket"):t._e()],2)])])}),[],!1,null,null,null);e.default=component.exports},825:function(t,e,r){"use strict";r.r(e);var n=r(14),c=(r(47),r(21),r(63),r(93)),o=r(556),d=r(557),l="https://js.stripe.com/v3",f=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,h="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",v=null,m=function(t){return null!==v||(v=new Promise((function(e,r){if("undefined"!=typeof window)if(window.Stripe&&t&&console.warn(h),window.Stripe)e(window.Stripe);else try{var script=function(){for(var t=document.querySelectorAll('script[src^="'.concat(l,'"]')),i=0;i<t.length;i++){var script=t[i];if(f.test(script.src))return script}return null}();script&&t?console.warn(h):script||(script=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",script=document.createElement("script");script.src="".concat(l).concat(e);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(script),script}(t)),script.addEventListener("load",(function(){window.Stripe?e(window.Stripe):r(new Error("Stripe.js not available"))})),script.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(t){return void r(t)}else e(null)}))),v},x=function(t,e,r){if(null===t)return null;var n=t.apply(void 0,e);return function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.31.0",startTime:e})}(n,r),n},w=Promise.resolve().then((function(){return m(null)})),k=!1;w.catch((function(t){k||console.warn(t)}));var y,_=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];k=!0;var n=Date.now();return w.then((function(t){return x(t,e,n)}))},R=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!y){t.next=2;break}return t.abrupt("return",y);case 2:return t.next=4,_("pk_live_51IvSZKJXrK78CsUSfSb5Jyjo3AkjZ2k6ZMr0c8miMMIcWcQiBKtCapD5ho2Bk45MjMh3QTlpLamkrOiG9gMJzMh100iGhW3ehO");case 4:return y=t.sent,t.abrupt("return",y);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=Object(c.b)({setup:function(){var t=Object(o.a)(),e=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(t.selectedAccount.account.address);case 2:return r=e.sent,e.next=5,R();case 5:return n=e.sent,e.next=8,n.redirectToCheckout({sessionId:r});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=Object(c.a)((function(){return t.selectedAccount.balanceRaw*Math.pow(10,-9)>1})),l=Object(c.a)((function(){return t.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length>=1}));return{wallet:t,checkout:e,hasEnoughXrt:r,hasTicket:l}}}),j=O,C=r(27),component=Object(C.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[t._m(0),t._v(" "),r("PayWithToggle",{scopedSlots:t._u([{key:"ticket",fn:function(){return[r("div",{staticClass:"basis-1/2 px-2 dark:bg-gray-600 relative"},[r("p",{staticClass:"text-md my-4 mb-16 dark:text-white text-center"},[t._v("\n          "+t._s(t.wallet.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length)+"\n          tickets\n        ")]),t._v(" "),r("button",{staticClass:"absolute bottom-0 inset-x-0 uppercase py-2 mx-4 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md text-center",attrs:{type:"button"},on:{click:t.checkout}},[r("span",[t._v("Get ticket")]),t._v(" "),r("img",{staticClass:"h-6 ml-2 inline-block bg-indigo-400 rounded-lg",attrs:{src:"stripe.svg"}})])])]},proxy:!0},{key:"XRT",fn:function(){return[r("div",{staticClass:"basis-1/2 px-2 dark:bg-gray-600 relative"},[r("p",{staticClass:"text-md my-4 mb-16 dark:text-white text-center"},[t._v("\n          "+t._s(t.wallet.selectedAccount.balanceFormatted)+" XRT\n        ")]),t._v(" "),r("a",{staticClass:"absolute bottom-0 inset-x-0 uppercase py-2 mx-4 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md text-center",attrs:{href:"https://www.kraken.com/prices/xrt-robonomics-price-chart/usd-us-dollar?interval=1m",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n          Get XRT\n        ")])])]},proxy:!0}])}),t._v(" "),t.hasTicket||t.hasEnoughXrt?r("span",{staticClass:"text-md my-2 dark:text-white"},[t._v("\n    It is enough to launch the robot by\n    "),t.hasTicket?r("span",[t._v(" ticket")]):t._e(),t._v(" "),t.hasTicket&&t.hasEnoughXrt?r("span",[t._v(" or")]):t._e(),t._v(" "),t.hasEnoughXrt?r("span",[t._v(" XRT")]):t._e(),t._v(".\n  ")]):r("span",{staticClass:"text-md my-2 dark:text-white"},[t._v("\n    It is not enough to launch the robot. Purchase a ticket "),r("em",[t._v("or")]),t._v(" get\n    XRT.\n  ")])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-md my-2 dark:text-white"},[t._v("\n    One launch requires 1 ticket "),r("em",[t._v("or")]),t._v(" 1 XRT. You have:\n  ")])}],!1,null,"9c534ea8",null);e.default=component.exports;installComponents(component,{PayWithToggle:r(660).default})}}]);