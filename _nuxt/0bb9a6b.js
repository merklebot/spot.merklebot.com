(window.webpackJsonp=window.webpackJsonp||[]).push([[54,45],{1045:function(e,t,n){"use strict";n.r(t);var o=n(94),r=n(604),l=Object(o.b)({components:{UserInfoSurvey:r.default},setup:function(){}}),m=n(25),component=Object(m.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"bg-gray-800 font-mono text-white m-8"},[t("UserInfoSurvey")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UserInfoSurvey:n(604).default})},604:function(e,t,n){"use strict";n.r(t);n(659);var o=n(634),r=n(660);o.StylesManager.applyTheme("stone");var l={title:"",description:"",logoPosition:"right",pages:[{name:"page1",elements:[{type:"radiogroup",name:"role",title:"Are you representing a company or have personal interest in Web3 for robotics?",choices:[{value:"individual",text:"Individual"},{value:"company",text:"Company"}],isRequired:!0},{type:"text",name:"email",inputType:"email",title:"Your email?",isRequired:!0}]}]},m={name:"UserInfoSurvey",components:{Survey:r.Survey},emits:["submit"],data:function(){var e=new o.Model(l);return e.focusFirstQuestionAutomatic=!1,e.onComplete.add(this.onCompleteSurvey),{survey:e,surveyCompleted:!1}},methods:{onCompleteSurvey:function(e){this.$emit("submit",e.data),this.surveyCompleted=!0}}},v=n(25),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.surveyCompleted?e._e():n("div",[n("Survey",{attrs:{survey:e.survey}})],1),e._v(" "),e.surveyCompleted?n("div",[n("p",[e._v("\n      Thank you.\n    ")])]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);