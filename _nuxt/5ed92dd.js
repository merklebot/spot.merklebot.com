(window.webpackJsonp=window.webpackJsonp||[]).push([[4,20],{557:function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"d",(function(){return w})),n.d(e,"g",(function(){return k})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return j})),n.d(e,"e",(function(){return R})),n.d(e,"f",(function(){return O}));var r,c,o=n(14),l=(n(56),n(64),n(584)),f=n(591),d=n.n(f),v=n(593),h=n(569),m=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new l.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new d.a(v.a)),t.next=6,r.run();case 6:return t.next=8,d.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,m();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return r=t.sent,c=r.launch.send(e,Object(h.a)(n)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return r=t.sent,c=r.api.tx.balances.transfer(e,n),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},559:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(14),c=(n(64),n(571),n(21),n(572),n(575),n(95)),o=n(561),l=n(557),f=Object(c.c)("wallet",{state:function(){return{accounts:[],walletConnectionStatus:"wait",selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null,tickets:[]}}},actions:{connectWallet:function(){var t=this;Object(l.a)().then((function(e){console.log("accounts",e),t.accounts=e;var n=localStorage.getItem("selectedAccountAddress"),r=e.find((function(a){return a.address===n}));t.setActiveAccount(null!=r?r:e[0]),t.walletConnectionStatus="connected"})).catch((function(e){t.walletConnectionStatus="error"}))},updateTicketsList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.selectedAccount.account){e.next=4;break}return e.next=3,Object(o.c)(t.selectedAccount.account.address);case 3:t.selectedAccount.tickets=e.sent;case 4:case"end":return e.stop()}}),e)})))()},setActiveAccount:function(t){var e=this;this.selectedAccount.account=t,Object(l.d)(t.address),localStorage.setItem("selectedAccountAddress",t.address),Object(l.g)(this.selectedAccount.account.address,(function(t){var n=t.free,r=t.feeFrozen,c=n.sub(r);e.selectedAccount.balanceRaw=c,e.selectedAccount.balanceFormatted=(c*Math.pow(10,-9)).toFixed(4)+" XRT"}))}}})},561:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return d}));var r=n(14),c=(n(64),n(79)),o=n.n(c).a.create({baseURL:"https://api.merklebot.com"}),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l,f,d,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sender,r=void 0===n?null:n,c=e.nonce,l=void 0===c?null:c,f=e.launchTxId,d=void 0===f?null:f,t.next=3,o.get("robonomics-launch-traces",{params:{sender:r,nonce:l,launch_tx_id:d}});case 3:return v=t.sent,t.abrupt("return",v.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("spot-demo-ticket/checkout",{quantity:"1",account:e});case 2:return n=t.sent,t.abrupt("return",n.data.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("spot-demo/tickets",{params:{customer:e,spent:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},571:function(t,e,n){"use strict";var r=n(1),c=n(76).find,o=n(159),l="find",f=!0;l in[]&&Array(1).find((function(){f=!1})),r({target:"Array",proto:!0,forced:f},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},572:function(t,e,n){"use strict";var r=n(1),c=n(573);r({target:"String",proto:!0,forced:n(574)("sub")},{sub:function(){return c(this,"sub","","")}})},573:function(t,e,n){var r=n(8),c=n(33),o=n(20),l=/"/g,f=r("".replace);t.exports=function(t,e,n,r){var d=o(c(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+f(o(r),l,"&quot;")+'"'),v+">"+d+"</"+e+">"}},574:function(t,e,n){var r=n(9);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},575:function(t,e,n){"use strict";var r=n(1),c=n(3),o=n(8),l=n(65),f=n(576),d=n(222),v=n(9),h=c.RangeError,m=c.String,x=Math.floor,w=o(d),k=o("".slice),y=o(1..toFixed),j=function(t,e,n){return 0===e?n:e%2==1?j(t,e-1,n*t):j(t*t,e/2,n)},R=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=x(r/1e7)},O=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=x(n/t),n=n%t*1e7},C=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+w("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!v((function(){y({})}))},{toFixed:function(t){var e,n,r,c,o=f(this),d=l(t),data=[0,0,0,0,0,0],v="",x="0";if(d<0||d>20)throw h("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return m(o);if(o<0&&(v="-",o=-o),o>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(o*j(2,69,1))-69)<0?o*j(2,-e,1):o/j(2,e,1),n*=4503599627370496,(e=52-e)>0){for(R(data,0,n),r=d;r>=7;)R(data,1e7,0),r-=7;for(R(data,j(10,r,1),0),r=e-1;r>=23;)O(data,1<<23),r-=23;O(data,1<<r),R(data,1,1),O(data,2),x=C(data)}else R(data,0,n),R(data,1<<-e,0),x=C(data)+w("0",d);return x=d>0?v+((c=x.length)<=d?"0."+w("0",d-c)+x:k(x,0,c-d)+"."+k(x,c-d)):v+x}})},576:function(t,e,n){var r=n(8);t.exports=r(1..valueOf)},585:function(t,e){},586:function(t,e){},588:function(t,e){},834:function(t,e,n){"use strict";n.r(e);var r=n(14),c=(n(64),n(48),n(21),n(43),n(77),n(94)),o=n(559),l=Object(c.b)({setup:function(){var t=Object(o.a)(),e=Object(c.f)([]),n=Object(c.e)({showOnlyMySessions:!1}),l=Object(c.a)((function(){return e.value.filter((function(e){var r=!0;return n.showOnlyMySessions&&e.sender!==t.selectedAccount.account.address&&(r=!1),r}))}));return console.log(l.value),Object(c.h)(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.merklebot.com/robonomics-launch-traces",{method:"GET"});case 2:return t.next=4,t.sent.json();case 4:t.sent.forEach((function(t){t.traceFolderLink="https://merklebot.mypinata.cloud/ipfs/".concat(t.ipfs_cid,"/spot/spot.merklebot.com/spot/traces/user-").concat(t.sender,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(t.nonce,"-").concat(t.created_at),e.value.push(t)})),console.log(l.value);case 7:case"end":return t.stop()}}),t)})))),{sessions:l,wallet:t,filters:n}}}),f=n(28),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container flex flex-col mx-auto w-full items-center justify-center"},[n("div",{staticClass:"px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md"},[n("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900 dark:text-white"},[t._v("\n      Recorded sessions\n    ")]),t._v(" "),n("div",{staticClass:"mt-1 max-w-2xl"},[n("Toggle",{attrs:{label:"Show only my sessions"},on:{toggled:function(e){t.filters.showOnlyMySessions=e.checked}}})],1)]),t._v(" "),n("ul",{staticClass:"flex flex-col"},t._l(t.sessions,(function(e,r){return n("li",{key:r,staticClass:"border-gray-400 flex flex-row mb-2"},[n("NuxtLink",{attrs:{to:"/records/"+e.id}},[n("div",{staticClass:"transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4"},[n("div",{staticClass:"flex flex-col w-100 h-100 justify-center items-center mr-4"},[n("img",{staticClass:"mx-auto object-cover  h-100 w-100 ",attrs:{alt:"result",src:e.traceFolderLink+"/result.jpg"}})]),t._v(" "),n("div",{staticClass:"flex-1 pl-1 md:mr-16"},[n("div",{staticClass:"font-medium dark:text-white"},[t._v("\n              Session "+t._s(e.id)+"\n            ")]),t._v(" "),n("div",{staticClass:"text-gray-600 dark:text-gray-200 text-sm"},[t._v("\n              From "+t._s(e.sender)+"\n            ")])]),t._v(" "),n("div",{staticClass:"text-gray-600 dark:text-gray-200 text-xs"},[t._v("\n            "+t._s(e.created_at)+"\n          ")]),t._v(" "),n("button",{staticClass:"w-24 text-right flex justify-end"},[n("svg",{staticClass:"hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500",attrs:{width:"12",fill:"currentColor",height:"12",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"}})])])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Toggle:n(835).default})},835:function(t,e,n){"use strict";n.r(e);var r={name:"Toggle",props:["checked","label"],data:function(){return{active:!1}},methods:{toggled:function(){console.log("toggled"),this.active=!this.active,this.$emit("toggled",{checked:this.active})}}},c=n(28),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"relative inline-block w-10 mr-2 align-middle select-none",on:{click:t.toggled}},[n("input",{staticClass:" outline-none focus:outline-none  duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer",class:{"bg-blue-500 right-0":t.active,"right-4":!t.active},attrs:{type:"checkbox",name:"toggle"}}),t._v(" "),n("label",{staticClass:"block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"})]),t._v(" "),n("span",{staticClass:" text-sm text-gray-500 dark:text-gray-200"},[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[],!1,null,"1097acff",null);e.default=component.exports}}]);