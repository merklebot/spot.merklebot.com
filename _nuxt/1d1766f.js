(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{405:function(t,o,n){var content=n(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(127).default)("3aab589e",content,!0,{sourceMap:!1})},509:function(t,o,n){"use strict";n(405)},510:function(t,o,n){var e=n(126)((function(i){return i[1]}));e.push([t.i,"/*purgecss start ignore*/\n.canvas-style[data-v-1e83c792]{\n  cursor:crosshair;\n  width:100%!important;\n  height:300px!important;\n  border:5px solid #000;\n  border-radius:10px;\n  display:block;\n  margin:auto;\n  box-shadow:0 10px 8px -8px #000\n}\n\n/*purgecss end ignore*/",""]),e.locals={},t.exports=e},609:function(t,o){},610:function(t,o){},615:function(t,o,n){"use strict";n.r(o);var e=n(29);n(22),n(38),n(45),n(39),n(44),n(62),n(63);function r(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,n)}return o}var c=n(608),l={name:"DrawingPanel",props:["canvasId"],data:function(){return{path:null,scope:null,paths:[]}},mounted:function(){this.scope=new c.PaperScope,this.scope.setup(this.canvasId)},methods:{resetCanvas:function(){this.scope.project.activeLayer.removeChildren(),this.paths=[]},sendCommand:function(){var t=this,o=[];console.log("Sending command"),console.log(this.paths),this.paths.forEach((function(path){var t=[];console.log(path._segments),path._segments.forEach((function(o){t.push([o.point.x,o.point.y])})),o.push(t)})),console.log(o),fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segments:o})}).then((function(t){return t.json()})).then((function(data){alert("Sent SHEDEVR to spot"),t.$emit("drawing_sent"),console.log(data)}))},pathCreate:function(t){return t.activate(),new c.Path({strokeColor:"#000000",strokeJoin:"round",strokeWidth:1.5})},createTool:function(t){return console.log("createTool"),t.activate(),new c.Tool},mouseDown:function(t){console.log("mouse down");var o=this;this.tool=this.createTool(this.scope),this.tool.onMouseDown=function(t){o.path=o.pathCreate(o.scope),o.path.add(t.point)},this.tool.onMouseDrag=function(t){console.log("mouse drag"),o.path.add(t)},this.tool.onMouseUp=function(t){console.log("mouse up"),o.path.add(t.point),o.path.simplify(10),o.path.flatten(10),o.paths.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(o){Object(e.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}({},o.path)),console.log(o.paths)}}}},d=l,f=(n(509),n(60)),component=Object(f.a)(d,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("div",{staticClass:"w-2/3 "},[n("canvas",{staticClass:"canvas-style",attrs:{id:t.canvasId},on:{mousedown:t.mouseDown}})]),t._v(" "),n("button",{staticClass:"py-2 px-4 mt-2 bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-indigo-200 text-white w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"button"},on:{click:t.resetCanvas}},[t._v("\n    Reset\n  ")]),t._v(" "),n("button",{staticClass:"py-2 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"button"},on:{click:t.sendCommand}},[t._v("\n    Send Command\n  ")])])}),[],!1,null,"1e83c792",null);o.default=component.exports}}]);