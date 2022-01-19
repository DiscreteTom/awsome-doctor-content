(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{544:function(t,e,n){var content=n(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("685c3280",content,!0,{sourceMap:!1})},545:function(t,e,n){"use strict";n.r(e);n(15),n(14),n(6),n(19),n(12),n(20);var o=n(5),r=n(23),l=(n(73),n(53),n(54),n(41),n(74),n(50),n(16),n(70),n(243));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={props:{workflow:Object},data:function(){return{workflowData:{},started:!1,results:[]}},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.started=!0,t.results=[],n=regeneratorRuntime.mark((function e(i){var n,output,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(output,t,e,n){var r=output[e];return"string"==typeof r&&r.startsWith(o)&&(t[e]=n.parse(r.slice(o.length)),t.markdown=!0),t.markdown},n=t.workflow.steps[i],t.results.push({pending:!0,name:n.name}),e.next=5,l.a.run(n.js,t.workflowData);case 5:if(output=e.sent,t.results[i].pending=!1,t.results[i].markdown=!1,t.results[i].err=output.err,t.results[i].info=output.info,t.results[i].ok=output.ok,o="/md\n",r(output,t.results[i],"err",t.$md)||r(output,t.results[i],"info",t.$md)||r(output,t.results[i],"ok",t.$md),!output.err){e.next=15;break}return e.abrupt("return","break");case 15:if(!output.stop){e.next=17;break}return e.abrupt("return","break");case 17:case"end":return e.stop()}}),e)})),i=0;case 4:if(!(i<t.workflow.steps.length)){e.next=12;break}return e.delegateYield(n(i),"t0",6);case 6:if("break"!==e.t0){e.next=9;break}return e.abrupt("break",12);case 9:++i,e.next=4;break;case 12:case"end":return e.stop()}}),e)})))()},reset:function(){this.workflowData=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.workflow.data),this.started=!1,this.results=[]},renderDescription:function(){return this.$md.parse(this.workflow.description)}},mounted:function(){var t=this;this.$nextTick((function(){t.reset()}))}},v=d,f=(n(546),n(88)),m=n(111),h=n.n(m),k=n(251),w=n(582),x=n(583),_=n(584),y=n(585),S=n(224),D=n(640),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Diagnosing: "+t._s(t.workflow.title))]),t._v(" "),t.workflow.description?n("v-expansion-panels",{staticClass:"my-3"},[n("v-expansion-panel",[n("v-expansion-panel-header",[t._v(" Description ")]),t._v(" "),n("v-expansion-panel-content",[n("div",{staticClass:"markdown-body",staticStyle:{padding:"10px"},domProps:{innerHTML:t._s(t.renderDescription())}})])],1)],1):t._e(),t._v(" "),t._l(t.workflow.input,(function(input){return n("v-text-field",{key:input.label,attrs:{label:input.label,placeholder:input.placeholder},model:{value:t.workflowData[input.store],callback:function(e){t.$set(t.workflowData,input.store,e)},expression:"workflowData[input.store]"}})})),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v(" Submit ")]),t._v(" "),n("v-btn",{staticClass:"mx-3",on:{click:t.reset}},[t._v(" Reset ")]),t._v(" "),t.started?n("v-expansion-panels",{staticClass:"my-3"},t._l(t.results,(function(e){return n("v-expansion-panel",{key:e.name},[n("v-expansion-panel-header",{attrs:{color:e.pending?void 0:e.err?"red":e.info?"blue":"green","expand-icon":e.pending?void 0:e.err?"mdi-alert-circle-outline":e.info?"mdi-information-outline":"mdi-check","disable-icon-rotate":!e.pending}},[t._v("\n        "+t._s(e.name)+"\n        "),e.pending?n("v-progress-circular",{attrs:{indeterminate:"",size:15}}):t._e()],1),t._v(" "),n("v-expansion-panel-content",{attrs:{color:e.markdown?"#181818":e.pending?void 0:e.err?"red":e.info?"blue":"green"}},[e.pending?n("v-progress-circular",{attrs:{indeterminate:""}}):n("div",[e.markdown?n("div",{staticClass:"markdown-body",staticStyle:{background:"white",padding:"10px"},domProps:{innerHTML:t._s(e.err||e.info||e.ok)}}):n("div",[t._v(t._s(e.err||e.info||e.ok))])])],1)],1)})),1):t._e()],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:k.a,VExpansionPanel:w.a,VExpansionPanelContent:x.a,VExpansionPanelHeader:_.a,VExpansionPanels:y.a,VProgressCircular:S.a,VTextField:D.a})},546:function(t,e,n){"use strict";n(544)},547:function(t,e,n){var o=n(21)(!1);o.push([t.i,"code[class^=language-]{background-color:transparent!important}",""]),t.exports=o},572:function(t,e,n){"use strict";n.r(e);n(27);var o={props:{width:String,height:String,dark:Boolean,value:String,scrollPastEnd:Number,showInvisibles:Boolean,lang:{type:String,default:"javascript"}},components:{"ace-editor":n(574)},methods:{editorInit:function(t){n(575),n(576),n(578),n(579),n(580),n(581),this.scrollPastEnd&&t.setOption("scrollPastEnd",this.scrollPastEnd),t.setOptions({showInvisibles:this.showInvisibles}),t.session.setOptions({mode:"ace/mode/javascript",tabSize:2,useSoftTabs:!0})},setFontSize:function(t){this.$refs.aceEditor.editor.setOptions({fontSize:"".concat(t,"pt")})}},computed:{theme:function(){return this.dark?"twilight":"chrome"}},watch:{showInvisibles:function(t){this.$refs.aceEditor.editor.setOptions({showInvisibles:t})}}},r=n(88),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ace-editor",{ref:"aceEditor",attrs:{lang:t.lang,theme:t.theme,width:t.width,height:t.height,value:t.value},on:{init:t.editorInit,input:function(e){t.$emit("input",e.replace("\r",""))}}})],1)}),[],!1,null,null,null);e.default=component.exports},573:function(t,e,n){"use strict";n.r(e);var o={props:{icon:String,tt:String,btnText:String,top:Boolean,bottom:Boolean,left:Boolean,right:Boolean,to:String,badge:Boolean,disabled:Boolean}},r=n(88),l=n(111),c=n.n(l),d=n(601),v=n(251),f=n(206),m=n(534),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{top:t.top,bottom:t.bottom,left:t.left,right:t.right},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("span",t._g({},o),[n("v-btn",{attrs:{icon:0!=t.icon.length,to:t.to,disabled:t.disabled},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.$emit("click")}}},[n("v-badge",{attrs:{dot:"",value:t.badge}},[n("v-icon",[t._v(t._s(t.icon))])],1),t._v("\n        "+t._s(t.btnText)+"\n      ")],1)],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.tt))])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBadge:d.a,VBtn:v.a,VIcon:f.a,VTooltip:m.a})},651:function(t,e,n){"use strict";n.r(e);var o=n(24),r=n(23),l=(n(73),n(6),n(53),n(54),n(594),n(343),n(60),n(16),n(70),n(12),n(572)),c=n(573),d=n(545),v=n(309),f=n(613),m=n.n(f),h=n(614),k=n.n(h),w={title:"",description:"### Markdown Here",workflowData:[],inputs:[],steps:[],fullscreenEdit:!1,editingIndex:0,editorDark:!0,editorShowInvisible:!0,openUrlDialog:!1,externalUrl:"",openUrlDialogErr:null,openingExternalUrl:!1,editorAutoFormat:!0,testAtBottom:!1,fileHandle:null};function x(data,t,e){var n=new Blob([data],{type:e});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(n,t);else{var a=document.createElement("a"),o=URL.createObjectURL(n);a.href=o,a.download=t,document.body.appendChild(a),a.click(),setTimeout((function(){document.body.removeChild(a),window.URL.revokeObjectURL(o)}),0)}}function _(t,e){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.createWritable();case 2:return o=t.sent,t.next=5,o.write(n);case 5:return t.next=7,o.close();case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var S={components:{TtBtn:c.default,CodeEditor:l.default,WorkflowExecutor:d.default},data:function(){return JSON.parse(JSON.stringify(w))},methods:{reset:function(){var data=JSON.parse(JSON.stringify(w));for(var t in data)this[t]=data[t]},openExternalUrl:function(){var t=this;this.openUrlDialogErr=null,this.openingExternalUrl=!0,this.$axios.get(this.externalUrl).then((function(e){t.applyYaml(e.data),t.openUrlDialog=!1,t.externalUrl="",t.openingExternalUrl=!1})).catch((function(e){t.openUrlDialogErr=e,t.openingExternalUrl=!1}))},changeEditorFontSize:function(t){this.$store.commit("updateConfig",{editorFontSize:this.$store.state.editorFontSize+t}),this.$refs.fullScreenCodeEditor.setFontSize(this.$store.state.editorFontSize)},addData:function(){this.workflowData.push({key:"",value:"''"})},addInput:function(){this.inputs.push({label:"",placeholder:"",store:""})},addStep:function(){this.steps.push({name:"",js:""})},removeData:function(t){for(var e=[],i=0;i<this.workflowData.length;++i)i!=t&&e.push(this.workflowData[i]);this.workflowData=e},removeInput:function(t){for(var e=[],i=0;i<this.inputs.length;++i)i!=t&&e.push(this.inputs[i]);this.inputs=e},removeStep:function(t){for(var e=[],i=0;i<this.steps.length;++i)i!=t&&e.push(this.steps[i]);this.steps=e},saveFile:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.editorAutoFormat&&t.formatAllCode(),null!==t.fileHandle||void 0===window.showSaveFilePicker){e.next=12;break}return e.prev=2,e.next=5,window.showSaveFilePicker({suggestedName:"".concat(t.title||"workflow",".yml"),types:[{description:"YAML Workflow",accept:{"text/yaml":[".yml",".yaml"]}}]});case 5:(n=e.sent)&&(t.fileHandle=n),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return");case 12:if(!t.fileHandle){e.next=19;break}return t.$bus.$emit("append-msg-bottom","Saving workflow..."),e.next=16,_(t.fileHandle,v.default.dump(t.computedWorkflow));case 16:t.$bus.$emit("append-msg-bottom","Saved"),e.next=20;break;case 19:x(v.default.dump(t.computedWorkflow),"workflow.yml","yml");case 20:case"end":return e.stop()}}),e,null,[[2,9]])})))()},formatAllCode:function(){for(var i=0;i<this.steps.length;++i)this.formatCode(i)},expand:function(i){var t=this;this.editingIndex=i,this.fullscreenEdit=!0,this.$nextTick((function(){t.$refs.fullScreenCodeEditor.setFontSize(t.$store.state.editorFontSize)}))},formatCode:function(t){this.steps[t].js=m.a.format(this.steps[t].js,{parser:"babel",plugins:[k.a]})},openFile:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===window.showOpenFilePicker){e.next=23;break}return e.prev=1,e.next=4,window.showOpenFilePicker();case 4:r=e.sent,l=Object(o.a)(r,1),n=l[0],e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return");case 12:if(!n){e.next=21;break}return t.fileHandle=n,e.next=16,n.getFile();case 16:return c=e.sent,e.next=19,c.text();case 19:d=e.sent,t.applyYaml(d);case 21:e.next=24;break;case 23:t.$refs.fileInput.click();case 24:case"end":return e.stop()}}),e,null,[[1,9]])})))()},fileChosen:function(t){var e=this,n=t.target.files[0];if(n){var o=new FileReader;o.readAsText(n,"UTF-8"),o.onload=function(t){e.applyYaml(t.target.result)}}this.$refs.fileInput.value=null},renderYaml:function(t,e){try{var n={};return n[t]=v.default.load(e),v.default.dump(n,{flowLevel:1})}catch(t){return t}},handleKeyDown:function(t){83===t.keyCode&&t.ctrlKey&&(t.preventDefault(),this.saveFile())},applyYaml:function(t){var content=v.default.load(t);for(var e in this.title=content.title,this.workflowData=[],content.data)this.workflowData.push({key:e,value:v.default.dump(content.data[e])});this.inputs=content.input,this.steps=content.steps}},computed:{computedWorkflow:function(){var t={title:this.title,description:this.description,data:{},input:this.inputs,steps:this.steps};return this.workflowData.forEach((function(e){try{t.data[e.key]=v.default.load(e.value)}catch(n){t.data[e.key]=n}})),t}},mounted:function(){document.addEventListener("keydown",this.handleKeyDown),this.editorDark=this.$store.state.editorDarkMode,this.editorShowInvisible=this.$store.state.editorShowInvisibles,this.editorAutoFormat=this.$store.state.editorAutoFormat},beforeDestroy:function(){document.removeEventListener("keydown",this.handleKeyDown)},watch:{editorDark:function(t){this.$store.commit("updateConfig",{editorDarkMode:t})},editorShowInvisible:function(t){this.$store.commit("updateConfig",{editorShowInvisibles:t})},editorAutoFormat:function(t){this.$store.commit("updateConfig",{editorAutoFormat:t})}}},D=n(88),C=n(111),E=n.n(C),O=n(645),F=n(251),I=n(588),$=n(553),j=n(646),U=n(647),V=n(517),P=n(582),A=n(583),R=n(584),T=n(585),B=n(649),L=n(650),z=n(533),M=n(655),W=n(640),Y=n(59),H=n(255),N=n(534),component=Object(D.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex align-center"},[n("h2",[t._v("Editing workflow:")]),t._v(" "),n("v-text-field",{staticClass:"ml-3",attrs:{label:"Workflow Title",placeholder:"Ping is not working.","hide-details":"",outlined:"",dense:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("div",{staticClass:"d-flex align-center ml-3"},[n("tt-btn",{staticClass:"ml-3",attrs:{bottom:"",tt:"Export New YAML File",icon:"mdi-content-save-outline"},on:{click:t.saveFile}}),t._v(" "),n("tt-btn",{staticClass:"ml-3",attrs:{bottom:"",tt:"Load From YAML File",icon:"mdi-folder-open-outline"},on:{click:t.openFile}}),t._v(" "),n("tt-btn",{staticClass:"ml-3",attrs:{bottom:"",tt:"Open From URL",icon:"mdi-file-import-outline"},on:{click:function(e){t.openUrlDialog=!0}}}),t._v(" "),n("tt-btn",{staticClass:"ml-3",attrs:{bottom:"",tt:"Reset Editor",icon:"mdi-delete-outline"},on:{click:t.reset}})],1)],1),t._v(" "),n("v-divider",{staticClass:"my-2"}),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:t.testAtBottom?12:6}},[n("v-expansion-panels",{attrs:{multiple:"",accordion:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",[t._v(" Description ")]),t._v(" "),n("v-expansion-panel-content",[n("code-editor",{attrs:{dark:t.editorDark,height:"200",lang:"markdown",showInvisibles:t.editorShowInvisible},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v(" Data ")]),t._v(" "),n("v-expansion-panel-content",[t._l(t.workflowData,(function(data,i){return n("v-row",{key:i,staticClass:"align-center",attrs:{dense:""}},[n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{label:"Key","hide-details":""},model:{value:data.key,callback:function(e){t.$set(data,"key",e)},expression:"data.key"}})],1),t._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Initial Value (YAML)","hide-details":""},model:{value:data.value,callback:function(e){t.$set(data,"value",e)},expression:"data.value"}})],1),t._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Rendered (YAML)",value:t.renderYaml(data.key,data.value),"hide-details":"",disabled:""}})],1),t._v(" "),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"1"}},[n("tt-btn",{attrs:{tt:"Remove Data",icon:"mdi-close",top:""},on:{click:function(e){return t.removeData(i)}}})],1)],1)})),t._v(" "),n("v-btn",{staticClass:"mt-3",on:{click:t.addData}},[t._v("Add Data")])],2)],1),t._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v(" Inputs ")]),t._v(" "),n("v-expansion-panel-content",[t._l(t.inputs,(function(input,i){return n("v-row",{key:i,staticClass:"align-center",attrs:{dense:""}},[n("v-col",[n("v-text-field",{attrs:{label:"Label","hide-details":""},model:{value:input.label,callback:function(e){t.$set(input,"label",e)},expression:"input.label"}})],1),t._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Placeholder","hide-details":""},model:{value:input.placeholder,callback:function(e){t.$set(input,"placeholder",e)},expression:"input.placeholder"}})],1),t._v(" "),n("v-col",[n("v-select",{attrs:{label:"Store",items:t.workflowData.map((function(t){return t.key})),"hide-details":""},model:{value:input.store,callback:function(e){t.$set(input,"store",e)},expression:"input.store"}})],1),t._v(" "),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"1"}},[n("tt-btn",{attrs:{tt:"Remove Input",icon:"mdi-close",top:""},on:{click:function(e){return t.removeInput(i)}}})],1)],1)})),t._v(" "),n("v-btn",{staticClass:"mt-3",on:{click:t.addInput}},[t._v("Add Input")])],2)],1),t._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v(" Steps ")]),t._v(" "),n("v-expansion-panel-content",[t._l(t.steps,(function(e,i){return n("v-row",{key:i,staticClass:"align-center",attrs:{dense:""}},[n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{label:"Name","hide-details":""},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"step.name"}})],1),t._v(" "),n("v-col",[n("code-editor",{attrs:{dark:t.editorDark,height:"200",showInvisibles:t.editorShowInvisible},model:{value:e.js,callback:function(n){t.$set(e,"js",n)},expression:"step.js"}})],1),t._v(" "),n("v-col",{staticClass:"d-flex flex-column align-center",attrs:{cols:"1"}},[n("tt-btn",{attrs:{tt:"Remove Step",icon:"mdi-close",top:""},on:{click:function(e){return t.removeStep(i)}}}),t._v(" "),n("tt-btn",{attrs:{tt:"Expand",icon:"mdi-arrow-expand",top:""},on:{click:function(e){return t.expand(i)}}}),t._v(" "),n("tt-btn",{attrs:{tt:"Format Code",icon:"mdi-code-json",top:""},on:{click:function(e){return t.formatCode(i)}}})],1)],1)})),t._v(" "),n("div",{staticClass:"d-flex"},[n("v-btn",{staticClass:"mt-3",on:{click:t.addStep}},[t._v("Add Step")]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("span",t._g({},o),[n("v-switch",{staticClass:"ml-3",attrs:{inset:"","hide-details":"",color:"black"},model:{value:t.editorDark,callback:function(e){t.editorDark=e},expression:"editorDark"}})],1)]}}])},[t._v(" "),n("span",[t._v("Dark Mode")])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("span",t._g({},o),[n("v-switch",{staticClass:"ml-3",attrs:{inset:"","hide-details":"",color:"white"},model:{value:t.editorShowInvisible,callback:function(e){t.editorShowInvisible=e},expression:"editorShowInvisible"}})],1)]}}])},[t._v(" "),n("span",[t._v("Show Invisibles")])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("span",t._g({},o),[n("v-switch",{staticClass:"ml-3",attrs:{inset:"","hide-details":"",color:"yellow"},model:{value:t.editorAutoFormat,callback:function(e){t.editorAutoFormat=e},expression:"editorAutoFormat"}})],1)]}}])},[t._v(" "),n("span",[t._v("Format on Save")])])],1)],2)],1)],1),t._v(" "),t.testAtBottom?n("v-card",{staticClass:"mt-3"},[n("v-card-title",[n("span",{staticClass:"mr-3"},[t._v(" Test ")]),t._v(" "),n("tt-btn",{attrs:{tt:"Move To Right",icon:"mdi-dock-right",top:""},on:{click:function(e){t.testAtBottom=!1}}})],1),t._v(" "),n("v-card-text",[n("workflow-executor",{attrs:{workflow:t.computedWorkflow}})],1)],1):t._e()],1),t._v(" "),t.testAtBottom?t._e():n("v-col",{attrs:{cols:"6"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"mr-3"},[t._v(" Test ")]),t._v(" "),n("tt-btn",{attrs:{tt:"Move To Bottom",icon:"mdi-dock-bottom",top:""},on:{click:function(e){t.testAtBottom=!0}}})],1),t._v(" "),n("v-card-text",[n("workflow-executor",{attrs:{workflow:t.computedWorkflow}})],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition"},model:{value:t.fullscreenEdit,callback:function(e){t.fullscreenEdit=e},expression:"fullscreenEdit"}},[t.fullscreenEdit?n("v-card",{staticClass:"d-flex flex-column",staticStyle:{height:"100vh"}},[n("v-toolbar",{staticClass:"flex-grow-0",attrs:{dark:""}},[n("tt-btn",{attrs:{tt:"Exit Fullscreen",icon:"mdi-close",bottom:""},on:{click:function(e){t.fullscreenEdit=!1}}}),t._v(" "),n("v-toolbar-title",{staticClass:"ml-3"},[t._v("\n          Editing Workflow:\n          "),n("span",{staticClass:"text-decoration-underline"},[t._v("\n            "+t._s(t.title||"Untitled workflow")+"\n          ")]),t._v("\n          Step:\n          "),n("span",{staticClass:"text-decoration-underline"},[t._v("\n            "+t._s(t.steps[t.editingIndex].name||"Untitled step")+"\n          ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("span",t._g({},o),[n("v-switch",{attrs:{inset:"","hide-details":"",color:"black"},model:{value:t.editorDark,callback:function(e){t.editorDark=e},expression:"editorDark"}})],1)]}}],null,!1,2010082686)},[t._v(" "),n("span",[t._v("Dark Mode")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("span",t._g({},o),[n("v-switch",{attrs:{inset:"","hide-details":"",color:"white"},model:{value:t.editorShowInvisible,callback:function(e){t.editorShowInvisible=e},expression:"editorShowInvisible"}})],1)]}}],null,!1,1357311944)},[t._v(" "),n("span",[t._v("Show Invisibles")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("span",t._g({},o),[n("v-switch",{attrs:{inset:"","hide-details":"",color:"yellow"},model:{value:t.editorAutoFormat,callback:function(e){t.editorAutoFormat=e},expression:"editorAutoFormat"}})],1)]}}],null,!1,2909704045)},[t._v(" "),n("span",[t._v("Format on Save")])]),t._v(" "),n("tt-btn",{attrs:{tt:"Decrease Font Size",icon:"mdi-format-font-size-decrease",bottom:""},on:{click:function(e){return t.changeEditorFontSize(-1)}}}),t._v(" "),n("tt-btn",{attrs:{tt:"Increase Font Size",icon:"mdi-format-font-size-increase",bottom:""},on:{click:function(e){return t.changeEditorFontSize(1)}}}),t._v(" "),n("tt-btn",{attrs:{tt:"Format Code",icon:"mdi-code-json",bottom:""},on:{click:function(e){return t.formatCode(t.editingIndex)}}})],1),t._v(" "),n("code-editor",{ref:"fullScreenCodeEditor",staticClass:"flex-grow-1",attrs:{scrollPastEnd:1,dark:t.editorDark,value:t.steps[t.editingIndex].js,showInvisibles:t.editorShowInvisible},on:{input:function(e){t.steps[t.editingIndex].js=e}}})],1):t._e()],1),t._v(" "),n("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{input:t.fileChosen}}),t._v(" "),n("v-dialog",{model:{value:t.openUrlDialog,callback:function(e){t.openUrlDialog=e},expression:"openUrlDialog"}},[n("v-card",[n("v-card-title",[t._v("Open from URL")]),t._v(" "),n("v-card-subtitle",{staticStyle:{color:"red"}},[t._v("External workflows might be dangerous.")]),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{label:"URL",placeholder:"https://example.com"},model:{value:t.externalUrl,callback:function(e){t.externalUrl=e},expression:"externalUrl"}}),t._v(" "),null!==t.openUrlDialogErr?n("v-alert",{attrs:{type:"error"}},[t._v("\n          "+t._s(t.openUrlDialogErr)+"\n        ")]):t._e(),t._v(" "),n("v-btn",{attrs:{color:"primary",loading:t.openingExternalUrl},on:{click:t.openExternalUrl}},[t._v("\n          Open\n        ")]),t._v(" "),n("v-btn",{staticClass:"mx-3",on:{click:function(e){t.openUrlDialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;E()(component,{TtBtn:n(573).default,CodeEditor:n(572).default,WorkflowExecutor:n(545).default}),E()(component,{VAlert:O.a,VBtn:F.a,VCard:I.a,VCardSubtitle:$.a,VCardText:$.b,VCardTitle:$.c,VCol:j.a,VDialog:U.a,VDivider:V.a,VExpansionPanel:P.a,VExpansionPanelContent:A.a,VExpansionPanelHeader:R.a,VExpansionPanels:T.a,VRow:B.a,VSelect:L.a,VSpacer:z.a,VSwitch:M.a,VTextField:W.a,VToolbar:Y.a,VToolbarTitle:H.a,VTooltip:N.a})}}]);