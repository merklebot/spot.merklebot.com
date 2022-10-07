(window.webpackJsonp=window.webpackJsonp||[]).push([[53,17,42],{1041:function(t,e,r){"use strict";r.r(e);var n=r(14),l=(r(47),r(64),r(94)),o=r(561),c=r(555),d=r(895),f=r(1056),v=r(1004),x=new d.a({provider:new f.a("wss://rpc.crust.network"),typesBundle:v.typesBundleForPolkadot}),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.isReady;case 2:return t.next=4,x.query.market.filesV2(e);case 4:return r=t.sent,t.abrupt("return",r.toHuman());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=Object(l.b)({setup:function(){var t=Object(l.i)().value.params.record,e=Object(l.f)(null),r=Object(l.f)(null),d=Object(l.f)(null),f=Object(l.f)(null),v=Object(l.f)(null),x=Object(l.f)(null);if(!t)return{txId:null};Object(l.d)(Object(n.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.c)({launchTxId:t});case 2:if(l=n.sent,console.log(l),e.value=l,r.value={ipfsCid:l.ipfs_cid,sender:l.sender,nonce:l.nonce,createdAt:l.created_at},d.value=l.launch_tx_id,f.value=l.datalog_tx_id,v.value=l.crust_tx_id,!l.crust_tx_id){n.next=13;break}return n.next=12,m(l.ipfs_cid);case 12:x.value=n.sent;case 13:case"end":return n.stop()}}),n)}))));return{txId:t,launchData:e,traceInfo:r,launchTxId:d,datalogTxId:f,crustTxId:v,crustFileInfo:x,addressShort:function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""},makeSubscanLink:c.d,makeIpfsFolderLink:o.b}}}),_=r(25),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"bg-gray-800 overflow-hidden relative"},[r("div",{staticClass:"flex items-start justify-between"},[r("div",{staticClass:"flex flex-col w-full md:space-y-4"},[r("HeaderPanel"),t._v(" "),r("div",{staticClass:"overflow-auto pb-24 px-4 md:px-6"},[t.txId?t._e():r("div",[r("div",{staticClass:"grid grid-cols-1 gap-4 my-4"},[r("RecordsList")],1)]),t._v(" "),t.txId?r("div",[r("h1",{staticClass:"text-4xl font-semibold text-white"},[t._v("\n            Session "+t._s(t.txId)+"\n          ")]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4"},[t.launchData?r("CardContainer",{attrs:{title:"Launch data"}},[r("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n                Robonomics Launch Tx: "),r("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("robonomics",t.launchTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.launchTxId)))])]),t._v(" "),r("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n                Record data on IPFS: "),r("a",{staticClass:"text-yellow-500",attrs:{href:t.makeIpfsFolderLink(t.traceInfo),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.launchData.ipfs_cid)))])]),t._v(" "),r("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n                Robonomics Datalog Tx: "),r("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("robonomics",t.datalogTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.datalogTxId)))])]),t._v(" "),r("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n                Crust Storage Order Tx: "),r("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("crust",t.crustTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.crustTxId)))])])]):t._e(),t._v(" "),t.launchData?r("CardContainer",{attrs:{title:"Video Record"}},[r("video",{attrs:{src:t.makeIpfsFolderLink(t.traceInfo)+"/h264_camera.mp4",type:"video/mp4",controls:""}})]):t._e()],1)]):t._e()])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderPanel:r(887).default,RecordsList:r(891).default,CardContainer:r(560).default})},560:function(t,e,r){"use strict";r.r(e);var n={name:"CardContainer",props:{title:{type:String,required:!1}}},l=r(25),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[r("div",{staticClass:"shadow-lg px-4 py-2 w-full bg-gray-600 relative"},[r("p",{staticClass:"text-lh w-max text-white font-semibold border-b border-gray-200"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._t("default")],2)])}),[],!1,null,"7302cd96",null);e.default=component.exports},702:function(t,e,r){"use strict";r.r(e);var n={name:"Toggle",props:["checked","label"],data:function(){return{active:!1}},methods:{toggled:function(){console.log("toggled"),this.active=!this.active,this.$emit("toggled",{checked:this.active})}}},l=r(25),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"relative inline-block w-10 mr-2 align-middle select-none",on:{click:t.toggled}},[r("input",{staticClass:"outline-none focus:outline-none  duration-200 ease-in absolute block w-6 h-6\n        rounded-full bg-gray-200 border-4 appearance-none cursor-pointer",class:{"bg-blue-500 right-0":t.active,"right-4":!t.active},attrs:{type:"checkbox",name:"toggle"}}),t._v(" "),r("label",{staticClass:"block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"})]),t._v(" "),r("span",{staticClass:" text-sm text-gray-200"},[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[],!1,null,"424d7e21",null);e.default=component.exports},891:function(t,e,r){"use strict";r.r(e);var n=r(14),l=(r(64),r(48),r(21),r(43),r(94)),o=r(557),c=r(561),d=Object(l.b)({setup:function(){var t=Object(o.a)(),e=Object(l.f)([]),r=Object(l.e)({showOnlyMySessions:!1}),d=Object(l.a)((function(){return e.value.filter((function(e){var n=!0;return r.showOnlyMySessions&&e.sender!==t.selectedAccount.account.address&&(n=!1),n}))}));return console.log(d.value),Object(l.h)(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.c)({skip:0});case 2:t.sent.reverse().forEach((function(t){t.traceFolderLink=Object(c.b)({ipfsCid:t.ipfs_cid,sender:t.sender,nonce:t.nonce,createdAt:t.created_at}),e.value.push(t)})),console.log(d.value);case 5:case"end":return t.stop()}}),t)})))),{sessions:d,wallet:t,filters:r}}}),f=r(25),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container flex flex-col mx-auto w-full items-center justify-center"},[r("div",{staticClass:"px-4 py-5 sm:px-6 w-full border bg-gray-800 shadow mb-2 rounded-md"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-white"},[t._v("\n      Recorded sessions\n    ")]),t._v(" "),r("div",{staticClass:"mt-1 max-w-2xl"},[r("Toggle",{attrs:{label:"Show only my sessions"},on:{toggled:function(e){t.filters.showOnlyMySessions=e.checked}}})],1)]),t._v(" "),r("ul",{staticClass:"flex flex-col"},t._l(t.sessions,(function(e,n){return r("li",{key:n,staticClass:"border-gray-400 flex flex-row mb-2"},[r("NuxtLink",{attrs:{to:"/records/"+e.launch_tx_id}},[r("div",{staticClass:"transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-gray-800 rounded-md flex flex-1 items-center p-4"},[r("div",{staticClass:"flex flex-col w-100 h-100 justify-center items-center mr-4"},[r("img",{staticClass:"mx-auto object-cover  h-100 w-100 ",attrs:{alt:"result",src:e.traceFolderLink+"/result.jpg"}})]),t._v(" "),r("div",{staticClass:"flex-1 pl-1 md:mr-16"},[r("div",{staticClass:"font-medium text-white"},[t._v("\n              Session "+t._s(e.id)+"\n            ")]),t._v(" "),r("div",{staticClass:"text-gray-600 text-gray-200 text-sm"},[t._v("\n              From "+t._s(e.sender)+"\n            ")])]),t._v(" "),r("div",{staticClass:"text-gray-200 text-xs"},[t._v("\n            "+t._s(e.created_at)+"\n          ")]),t._v(" "),r("button",{staticClass:"w-24 text-right flex justify-end"},[r("svg",{staticClass:"hover:text-white text-gray-200 text-gray-500",attrs:{width:"12",fill:"currentColor",height:"12",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"}})])])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Toggle:r(702).default})}}]);