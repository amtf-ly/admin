(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-error-js-detail"],{"00165":function(e,t,n){var i=n("f28a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("967d").default;a("5b1b2fea",i,!0,{sourceMap:!1,shadowMode:!1})},"083e":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},"0a37":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniStatTable:n("50db").default,uniPagination:n("8e64").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-container"},[n("uni-stat-table",{attrs:{data:e.tableData,filedsMap:e.popupFieldsMap,loading:e.loading}}),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":e.options.pageSize,current:e.options.pageCurrent,total:e.options.total},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageSize.apply(void 0,arguments)}}})],1)],1)],1)},r=[]},"12f0":function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.popupFieldsMap=t.fieldsMap=void 0;t.fieldsMap=[{title:"最近发生时间",field:"last_time",tooltip:"",formatter:""},{title:"错误次数",field:"count",tooltip:"相同错误在某时间段内发生的次数"},{title:"错误占比",computed:"count/total_count",field:"count/total_count",formatter:"%",tooltip:"某个错误发生的次数/总错误数"},{title:"平台",field:"platform",formatter:""},{title:"平台版本号",field:"version",tooltip:"原生平台为客户端 SDK 版本号；小程序平台为微信、支付宝、百度等应用的版本号",formatter:""},{title:"错误信息",field:"msg",formatter:""}];t.popupFieldsMap=[{title:"创建时间",field:"create_time",formatter:""},{title:"客户端操作系统",field:"os",formatter:""},{title:"客户端 user-agent 信息",field:"ua",formatter:""}]},"15a5":function(e,t,n){"use strict";n.r(t);var i=n("a464"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"20ff":function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,".uni-stat-panel[data-v-5ed0f8ec]{box-shadow:unset;border-bottom:1px solid #eee;padding:0;margin:0 15px}",""]),e.exports=t},"2a29":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},"2fbe":function(e,t,n){var i=n("20ff");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("967d").default;a("b264d45e",i,!0,{sourceMap:!1,shadowMode:!1})},3570:function(e,t,n){"use strict";n.r(t);var i=n("8b63"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"3caa":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},"43ba":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},"50db":function(e,t,n){"use strict";n.r(t);var i=n("5cee"),a=n("f9d0");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("68df");var o=n("828b"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"67b9b6bd",null,!1,i["a"],void 0);t["default"]=u.exports},5371:function(e,t,n){"use strict";n.r(t);var i=n("0a37"),a=n("3570");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("74b6");var o=n("828b"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"5ed0f8ec",null,!1,i["a"],void 0);t["default"]=u.exports},"5cee":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniTable:n("2565").default,uniTr:n("0f7c").default,uniTh:n("0fc6").default,uniTooltip:n("f3dd").default,uniIcons:n("7a23").default,uniTd:n("36a1").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("uni-table",{attrs:{loading:e.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[n("uni-tr",[e._l(e.filedsMap,(function(t,i){return[t.title?n("uni-th",{key:i+"_"+i+"_0",attrs:{align:"center"}},[n("uni-tooltip",{scopedSlots:e._u([e.tooltip&&t.tooltip?{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[e._v(e._s(t.tooltip))])]},proxy:!0}:null],null,!0)},[e._v(e._s(t.title)),e.tooltip&&t.tooltip?n("uni-icons",{attrs:{type:"help",color:"#666"}}):e._e()],1)],1):e._e()]}))],2),e._l(e.data,(function(t,i){return n("uni-tr",{key:i},[e._l(e.filedsMap,(function(i,a){return[i.title?n("uni-td",{key:a+"_"+a+"_0",attrs:{align:"center"}},[e._v(e._s(void 0!==t[i.field]?t[i.field]:"-"))]):e._e()]}))],2)}))],2)},r=[]},"68df":function(e,t,n){"use strict";var i=n("00165"),a=n.n(i);a.a},"6e8f":function(e,t,n){var i=n("c292");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("967d").default;a("64a26412",i,!0,{sourceMap:!1,shadowMode:!1})},"74b6":function(e,t,n){"use strict";var i=n("2fbe"),a=n.n(i);a.a},"8b63":function(e,t,n){"use strict";(function(e){n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("3471"));n("64aa"),n("bf0f");var r=n("777c"),o=n("12f0"),u={data:function(){return{popupFieldsMap:o.popupFieldsMap,options:{pageSize:20,pageCurrent:1,total:0},query:{error_hash:"",create_time:[]},loading:!1,tableData:[]}},onLoad:function(e){var t=e.error_hash,n=e.create_time;t&&(n=Number(n),this.query.error_hash=t,this.query.create_time=[n,n+864e5],this.getTableData((0,r.stringifyQuery)(this.query)))},methods:{changePageCurrent:function(e){this.options.pageCurrent=e.current,this.getTableData((0,r.stringifyQuery)(this.query))},changePageSize:function(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTableData((0,r.stringifyQuery)(this.query))},getTableData:function(t){var n=this,i=this.options.pageCurrent;this.loading=!0;var o=e.database();o.collection("uni-stat-error-logs").where(t).orderBy("create_time","desc").skip((i-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(e){var t=e.result,i=t.count,o=t.data;n.options.total=i;var u,c=(0,a.default)(o);try{for(c.s();!(u=c.n()).done;){var s=u.value;s.create_time=(0,r.parseDateTime)(s.create_time,"dateTime")}}catch(l){c.e(l)}finally{c.f()}n.tableData=o})).finally((function(){n.loading=!1}))}}};t.default=u}).call(this,n("861b")["default"])},"8e64":function(e,t,n){"use strict";n.r(t);var i=n("d3d1"),a=n("15a5");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("fdcd");var o=n("828b"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"28de2840",null,!1,i["a"],void 0);t["default"]=u.exports},a464:function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("64aa"),n("aa9c"),n("bf0f"),n("e966");var a=n("d3b4"),r=i(n("c022")),o=(0,a.initVueI18n)(r.default),u=o.t,c={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||u("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||u("uni-pagination.prevText")},nextPageText:function(){return this.nextText||u("uni-pagination.nextText")},maxPage:function(){var e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e},paper:function(){for(var e=this.currentIndex,t=this.pagerCount,n=this.total,i=this.pageSize,a=[],r=[],o=Math.ceil(n/i),u=0;u<o;u++)a.push(u+1);r.push(1);var c=a[a.length-(t+1)/2];return a.forEach((function(n,i){(t+1)/2>=e?n<t+1&&n>1&&r.push(n):e+2<=c?n>e-(t+1)/2&&n<e+(t+1)/2&&r.push(n):(n>e-(t+1)/2||o-t<n)&&n<a[a.length-1]&&r.push(n)})),o>t?((t+1)/2>=e?r[r.length-1]="...":e+2<=c?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(a[a.length-1])):(t+1)/2>=e||e+2<=c||(r.shift(),r.push(a[a.length-1])),r}},watch:{current:{immediate:!0,handler:function(e,t){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler:function(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}},pageSizeIndex:function(e){this.$emit("pageSizeChange",this.pageSizeRange[e])}},methods:{pickerChange:function(e){this.pageSizeIndex=e.detail.value,this.pickerClick()},pickerClick:function(){var e=document.querySelector("body");if(e){this.pickerShow=!this.pickerShow,this.pickerShow?e.classList.add("uni-pagination-picker-show"):setTimeout((function(){return e.classList.remove("uni-pagination-picker-show")}),300)}},selectPage:function(e,t){if(parseInt(e))this.currentIndex=e,this.change("current");else{var n=Math.ceil(this.total/this.pageSize);if(t<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(t>=6)return void(this.currentIndex+5>n?this.currentIndex=n:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}};t.default=c},c022:function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("083e")),r=i(n("2a29")),o=i(n("3caa")),u=i(n("43ba")),c=i(n("dde8")),s={en:a.default,es:r.default,fr:o.default,"zh-Hans":u.default,"zh-Hant":c.default};t.default=s},c292:function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),e.exports=t},d3d1:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("7a23").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-pagination"},[!0===e.showPageSize||"true"===e.showPageSize?n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeRange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[e._v(e._s(e.pageSizeRange[e.pageSizeIndex])+" "+e._s(e.piecePerPage))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):e._e(),n("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[e._v("共 "+e._s(e.total)+" 条")]),n("v-uni-view",{staticClass:"uni-pagination__btn",class:1===e.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickLeft.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.prevPageText))])]],2),n("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[n("v-uni-view",{staticClass:"uni-pagination__num-current"},[n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[e._v(e._s(e.currentIndex))]),n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[e._v("/"+e._s(e.maxPage||0))]),e._l(e.paper,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":t===e.currentIndex},on:{click:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"top",void 0,n.key,void 0))return null;arguments[0]=n=e.$handleEvent(n),e.selectPage(t,i)}}},[n("v-uni-text",[e._v(e._s(t))])],1)}))],2)],1),n("v-uni-view",{staticClass:"uni-pagination__btn",class:e.currentIndex>=e.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickRight.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.nextPageText))])]],2)],1)},r=[]},dde8:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},f13b:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uni-stat-table",data:function(){return{}},props:{data:{type:Array,default:function(){return[]}},filedsMap:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1}}};t.default=i},f28a:function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,".uni-stat-tooltip-s[data-v-67b9b6bd]{width:160px;white-space:normal}",""]),e.exports=t},f9d0:function(e,t,n){"use strict";n.r(t);var i=n("f13b"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},fdcd:function(e,t,n){"use strict";var i=n("6e8f"),a=n.n(i);a.a}}]);