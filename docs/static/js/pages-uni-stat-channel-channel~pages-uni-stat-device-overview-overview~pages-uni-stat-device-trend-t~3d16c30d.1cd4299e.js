(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-channel-channel~pages-uni-stat-device-overview-overview~pages-uni-stat-device-trend-t~3d16c30d"],{"199a5":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniTooltip:n("f3dd").default,uniIcons:n("7a23").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-stat--tab-x"},[t.label?n("v-uni-view",{staticClass:"uni-label-text hide-on-phone"},[t._v(t._s(t.label+"："))]):t._e(),n("v-uni-view",{staticClass:"uni-stat--tab"},[t.renderTabs.length?t._l(t.renderTabs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"uni-stat--tab-item",class:[a===t.currentTab?"uni-stat--tab-item-"+t.type+"-active":"","uni-stat--tab-item-"+t.type,e.disabled?"uni-stat--tab-item-disabled":""],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.change(e,a)}}},[n("uni-tooltip",{scopedSlots:t._u([e.tooltip?{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[t._v(t._s(e.name)),e.tooltip?n("uni-icons",{attrs:{type:"help",color:"#666"}}):t._e()],1)],1)})):n("v-uni-view",{staticClass:"uni-stat--tab-item uni-stat--tab-item-disabled",class:["uni-stat--tab-item-"+t.type]},[t._v(t._s(t.placeholder))])],2)],1)},r=[]},"2e1f":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniTooltip:n("f3dd").default,uniIcons:n("7a23").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-stat--sum-x mb-m"},t._l(t.items,(function(e,a){return n("v-uni-view",{key:a,staticClass:"uni-stat--sum-item",class:["今天"===e.value?"uni-stat--sum-item-width":""]},[n("uni-tooltip",{scopedSlots:t._u([e.tooltip?{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[n("v-uni-view",{staticClass:"uni-stat--sum-item-title"},[t._v(t._s(e.title?e.title:"")),e.title?n("uni-icons",{staticClass:"ml-s",attrs:{type:"help",color:"#666"}}):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-stat--sum-item-value"},[t._v(t._s(e.value?e.value:0))]),t.contrast?n("v-uni-view",{staticClass:"uni-stat--sum-item-contrast"},[t._v(t._s(e.contrast?e.contrast:0))]):t._e()],1)})),1)},r=[]},"47f6":function(t,e,n){"use strict";n.r(e);var a=n("2e1f"),i=n("5115");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("5f44");var s=n("828b"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1cbb1150",null,!1,a["a"],void 0);e["default"]=o.exports},5115:function(t,e,n){"use strict";n.r(e);var a=n("fcd0"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"5f44":function(t,e,n){"use strict";var a=n("cf3b"),i=n.n(a);i.a},"66bd":function(t,e,n){"use strict";var a=n("ab19"),i=n.n(a);i.a},"6cbd":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-7bab379c]{width:160px;white-space:normal}.uni-label-text[data-v-7bab379c]{font-size:14px;font-weight:700;color:#555;margin-top:17px;margin-bottom:17px;margin-right:5px}.uni-stat--tab-x[data-v-7bab379c]{display:flex;margin:0 15px;white-space:nowrap}.uni-stat--tab[data-v-7bab379c]{display:flex;flex-wrap:wrap}.uni-stat--tab-item[data-v-7bab379c]{white-space:nowrap;font-size:14px;color:#666;text-align:center;cursor:pointer;box-sizing:border-box;margin:15px 0}.uni-stat--tab-item-disabled[data-v-7bab379c]{cursor:unset;opacity:.4}.uni-stat--tab-item-line[data-v-7bab379c]{margin-right:30px;padding:2px 0;border-bottom:1px solid transparent}.uni-stat--tab-item-line[data-v-7bab379c]:last-child{margin-right:0}.uni-stat--tab-item-line-active[data-v-7bab379c]{color:#2979ff;border-bottom:1px solid #2979ff}.uni-stat--tab-item-boldLine[data-v-7bab379c]{box-sizing:border-box;margin-right:30px;padding:2px 0;border-bottom:2px solid transparent}.uni-stat--tab-item-boldLine[data-v-7bab379c]:last-child{margin-right:0}.uni-stat--tab-item-boldLine-active[data-v-7bab379c]{box-sizing:border-box;color:#2979ff;border-bottom:2px solid #2979ff}.uni-stat--tab-item-box[data-v-7bab379c]{padding:5px 15px;border:1px solid #dcdfe6}.uni-stat--tab-item-box[data-v-7bab379c]:not(:last-child){border-right-color:transparent}.uni-stat--tab-item-box-active[data-v-7bab379c]{box-sizing:border-box;border:1px solid #2979ff!important}@media screen and (max-width:500px){.hide-on-phone[data-v-7bab379c]{display:none}.uni-stat--tab[data-v-7bab379c]{flex-wrap:unset;overflow-x:auto!important}[data-v-7bab379c]::-webkit-scrollbar{display:none}}',""]),t.exports=e},ab19:function(t,e,n){var a=n("6cbd");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("256c0852",a,!0,{sourceMap:!1,shadowMode:!1})},b162:function(t,e,n){"use strict";(function(t){n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa"),n("5c47"),n("a1c1"),n("5ef2"),n("3efd"),n("8f71"),n("bf0f"),n("4100"),n("0506"),n("fd3c");var a={name:"uni-stat-tabs",data:function(){return{currentTab:0,renderTabs:[],cacheKey:"uni-admin-statTabsData"}},props:{type:{type:String,default:"line"},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},current:{type:[String,Number],default:0},mode:{type:String,default:""},today:{type:Boolean,default:!1},yesterday:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1},all:{type:Boolean,default:!0},label:{type:String,default:""},placeholder:{type:String,default:"暂无选项"},tabs:{type:Array,default:function(){return[]}}},created:function(){this.last="".concat(this.mode.replace("-","_"),"_last_data")},mounted:function(){this.init()},computed:{},watch:{current:{immediate:!0,handler:function(t){this.currentTab=t}},tabs:{immediate:!1,handler:function(t){this.init()}},renderTabs:function(t){var e=this.current;this.mode&&t.length&&e>=0&&this.$nextTick((function(){var t=this.renderTabs[e];this.change(t,e)}))}},methods:{init:function(){if(this.mode.indexOf("platform")>-1)this.renderTabs=this.getCache()||[],this.getPlatform();else if("date"===this.mode){var t=[{_id:7,name:"最近七天"},{_id:30,name:"最近30天"},{_id:90,name:"最近90天"}];this.yesterday&&t.unshift({_id:1,name:"昨天"}),this.today&&t.unshift({_id:0,name:"今天"}),this.renderTabs=t}else this.renderTabs=this.tabs},change:function(t,e){if(!t.disabled){var n=t._id,a=t.name;this.currentTab=e,this.emit(n,e,a,t)}},emit:function(t,e,n,a){this.$emit("change",t,e,n,a),this.$emit("input",t,e,n),this.$emit("update:modelValue",t,e,n)},getPlatform:function(){var e=this,n=t.database();n.collection("uni-stat-app-platforms").get().then((function(t){var n=t.result.data;if(n=n.filter((function(t){return!t.hasOwnProperty("enable")||t.enable})),n.sort((function(t,e){return t.order-e.order})),"platform-channel"===e.mode){n=n.filter((function(t){return/^android|ios$/.test(t.code)}));var a=n.map((function(t){return'platform_id == "'.concat(t._id,'"')})).join(" || ");a="(".concat(a,")"),e.setAllItem(n,a)}else if("platform-scene"===e.mode){n=n.filter((function(t){return/mp-/.test(t.code)}));var i=n.map((function(t){return'platform_id == "'.concat(t._id,'"')})).join(" || ");i="(".concat(i,")"),e.setAllItem(n,i)}else e.setAllItem(n);e.setCache(n),e.renderTabs=n}))},setAllItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"全部";this.all&&t.unshift({name:n,_id:e})},getCurrentCacheKey:function(){return this.mode},getCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};return e[t]},setCache:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentCacheKey(),n=uni.getStorageSync(this.cacheKey)||{};n[e]=t,uni.setStorageSync(this.cacheKey,n)},removeCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};delete e[t],uni.setStorageSync(this.cacheKey,e)}}};e.default=a}).call(this,n("861b")["default"])},c541:function(t,e,n){"use strict";n.r(e);var a=n("199a5"),i=n("fbfc");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("66bd");var s=n("828b"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"7bab379c",null,!1,a["a"],void 0);e["default"]=o.exports},cf3b:function(t,e,n){var a=n("df42");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("7c9d3398",a,!0,{sourceMap:!1,shadowMode:!1})},df42:function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-1cbb1150]{width:160px;white-space:normal}.uni-stat--sum-x[data-v-1cbb1150]{display:flex;justify-content:space-evenly;flex-wrap:wrap;border-radius:4px;padding:15px;box-shadow:-1px -1px 5px 0 rgba(0,0,0,.1)}.uni-stat--sum-item[data-v-1cbb1150]{white-space:nowrap;text-align:center;margin:10px 18px}.uni-stat--sum-item-width[data-v-1cbb1150]{width:100px}.uni-stat--sum-item-title[data-v-1cbb1150]{display:flex;align-items:center;justify-content:center;min-height:17px;font-size:12px;color:#666}.uni-stat--sum-item-value[data-v-1cbb1150]{font-size:24px;line-height:48px;font-weight:700;color:#333}.uni-stat--sum-item-contrast[data-v-1cbb1150]{font-size:14px;color:#666}@media screen and (max-width:500px){.uni-stat--sum-x[data-v-1cbb1150]{padding:15px 0;justify-content:space-between;flex-wrap:unset;overflow-x:auto!important}[data-v-1cbb1150]::-webkit-scrollbar{display:none}}',""]),t.exports=e},fbfc:function(t,e,n){"use strict";n.r(e);var a=n("b162"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},fcd0:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-stat-panel",data:function(){return{}},props:{items:{type:Array,default:function(){return[]}},contrast:{type:Boolean,default:!1}}};e.default=a}}]);