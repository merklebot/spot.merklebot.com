(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1042:function(e,t,n){"use strict";n.r(t);var o=n(14),r=(n(64),n(79),n(44),n(21),n(43),n(609)),l=n(1015),c=n(1044),d=n(1019),v=n(94),f=n(77),m=n.n(f),h=n(1016),w=Object(v.b)({props:["rosbagUrl"],setup:function(e){var t=e.rosbagUrl,n=Object(v.f)(null),f=Object(v.f)(.01),w=Object(v.f)(null),x=Object(v.f)([]),y=Object(v.f)(!1),j="/urdf/spot.urdf.xacro",O=new c.a,B=new r.Scene,z=new r.PlaneGeometry(8,8),M=new r.MeshBasicMaterial({color:"#BBBBBB",side:r.DoubleSide}),P=new r.Mesh(z,M),S=new r.PerspectiveCamera(75,4/3,.1,1e3),_=new r.WebGLRenderer({antialias:!0}),k=new r.DirectionalLight("hsl(0, 100%, 100%)"),R=new r.AxesHelper(5),E=null;S.position.z=0,S.position.y=.8,S.position.x=1,P.rotation.x=Math.PI/2,P.position.y=0,B.add(S),B.add(k),B.add(R),B.add(P),O.load(j,(function(e){var t=new d.a;t.workingPath=r.LoaderUtils.extractUrlBase(j),E=t.parse(e),console.log("Robot parsed"),console.log(E.joints),E.rotation.x=-Math.PI/2,B.add(E)})),_.setSize(400,300),k.position.set(5,5,0),B.background=new r.Color("hsl(0, 100%, 100%)");var C=new l.a(S,_.domElement);C.rotateSpeed=1,C.zoomSpeed=5,C.panSpeed=.8,C.noZoom=!1,C.noPan=!1,C.staticMoving=!0,C.dynamicDampingFactor=.3;var G=Object(v.f)(0),animate=function animate(){if(setTimeout((function(){requestAnimationFrame(animate)}),1e3/30),_.render(B,S),y.value){G.value>x.value.length-1&&(G.value=0,y.value=!1);var e=x.value[G.value][0],t=x.value[G.value][1];w.value||(w.value={y:t.translation.z,x:t.translation.x,z:-t.translation.y}),E.position.y=t.translation.z-w.value.y+.1,E.position.x=t.translation.x-w.value.x,E.position.z=-t.translation.y-w.value.z;var n=new r.Euler;n.setFromQuaternion(new r.Quaternion(t.rotation.x,t.rotation.y,t.rotation.z,t.rotation.w)),console.log(t.rotation),console.log(n),E.rotation.x=-Math.PI/2,E.rotation.y=-n.x,E.rotation.z=n.y,console.log(E.rotation.x);for(var o=0;o<e.position.length;o++)E.joints[e.name[o]].setJointValue(e.position[o]);G.value+=1}C.update()};Object(v.d)((function(){n.value.appendChild(_.domElement),animate(),console.log("ROSBAG LINK"),console.log(t)}));var I=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()({url:t,method:"GET",responseType:"blob"});case 2:return n=e.sent,console.log(n),o=new Blob([n.data]),console.log(o),e.next=8,Object(h.open)(o);case 8:return r=e.sent,console.log(r),l=null,e.next=13,r.readMessages({topics:["/tf","/joint_states"]},(function(e){console.log(e.message),"/tf"===e.topic&&4===e.message.transforms.length?e.message.transforms.forEach((function(e){"body"===e.child_frame_id&&(l=e.transform)})):"/joint_states"===e.topic&&l&&x.value.push([e.message,l])}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Start playing rosbag"),console.log(t.value),e.next=4,I(t);case 4:console.log(x.value),y.value=!0;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{scene:B,camera:S,controls:[],renderer:_,light:k,axes:R,speed:f,stage:n,playBag:L}}}),x=w,y=n(25),component=Object(y.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"stage",staticClass:"stage"}),e._v(" "),n("button",{staticClass:"uppercase py-2 my-2 px-4  bg-transparent text-gray-800 bg-gray-200 hover:bg-gray-100 border-2 border-gray-800 text-gray-800 text-white hover:bg-gray-800 hover:text-white text-md",attrs:{type:"button"},on:{click:e.playBag}},[e._v("\n    Play bag\n  ")])])}),[],!1,null,"4e4b5f04",null);t.default=component.exports}}]);