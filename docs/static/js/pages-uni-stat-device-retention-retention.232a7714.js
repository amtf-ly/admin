(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-device-retention-retention"],{"083e":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},"11e7":function(t,e,n){"use strict";n.r(e);var a=n("bc5e"),i=n("e73c");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("3bae");var o=n("828b"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"ada60ae4",null,!1,a["a"],void 0);e["default"]=s.exports},"15a5":function(t,e,n){"use strict";n.r(e);var a=n("a464"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"199a":function(t,e,n){var a=n("b299");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("7b8e8206",a,!0,{sourceMap:!1,shadowMode:!1})},"199a5":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniTooltip:n("f3dd").default,uniIcons:n("7a23").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-stat--tab-x"},[t.label?n("v-uni-view",{staticClass:"uni-label-text hide-on-phone"},[t._v(t._s(t.label+"："))]):t._e(),n("v-uni-view",{staticClass:"uni-stat--tab"},[t.renderTabs.length?t._l(t.renderTabs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"uni-stat--tab-item",class:[a===t.currentTab?"uni-stat--tab-item-"+t.type+"-active":"","uni-stat--tab-item-"+t.type,e.disabled?"uni-stat--tab-item-disabled":""],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.change(e,a)}}},[n("uni-tooltip",{scopedSlots:t._u([e.tooltip?{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[t._v(t._s(e.name)),e.tooltip?n("uni-icons",{attrs:{type:"help",color:"#666"}}):t._e()],1)],1)})):n("v-uni-view",{staticClass:"uni-stat--tab-item uni-stat--tab-item-disabled",class:["uni-stat--tab-item-"+t.type]},[t._v(t._s(t.placeholder))])],2)],1)},r=[]},"2a29":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},"2d18":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("aa9c"),n("fd3c"),n("c223");var i=a(n("b7c7"));var r=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{title:"新增设备",field:"new_device_count",stat:0}],n=[{title:"日期",field:"start_time",tooltip:"",formatter:"-",stat:-1}];e&&(t=n).push.apply(t,(0,i.default)(e));var a=[1,2,3,4,5,6,7,14,30],r=a.map((function(t){return{title:"".concat(t,"天后"),field:"d_".concat(t),computed:"d_".concat(t,"/").concat(e[0].field),formatter:"%",tooltip:""}}));return n=n.concat(r),n};e.default=r},"394c":function(t,e,n){"use strict";(function(t){n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("3471"));n("bf0f"),n("2797"),n("de6c"),n("fd3c"),n("8f71"),n("c223"),n("aa9c");var r=n("777c"),o=a(n("2d18")),s={data:function(){return{query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:0,tableData:[],chartData:{},field:"new_device",fields:[{_id:"new_device",name:"新增留存",tooltip:"指定时间新增（即首次访问应用）用户，在之后的第N天，再次访问应用的用户数占比"},{_id:"active_device",name:"活跃留存",tooltip:"指定时间活跃（即访问应用）用户，在之后的第N天，再次访问应用的用户数占比"}],key:1,channelData:[],errorMessage:""}},computed:{fieldsMap:function(){var t="active_device"===this.field?"活跃用户":"新增用户",e=[{title:t,field:"".concat(this.field,"_count"),stat:0}];return(0,o.default)(e)},fieldName:function(){var t=this,e="";return this.fields.forEach((function(n){n._id===t.field&&(e=n.name)})),e},keyName:function(){var t=this;return this.keys.forEach((function(e){if(e._id===t.key)return e.name}))},keys:function(){return[1,2,3,4,5,6,7,14,30].map((function(t){return{_id:t,name:"".concat(t,"天后")}}))},channelQuery:function(){var t=this.query.platform_id;return(0,r.stringifyQuery)({platform_id:t})},versionQuery:function(){var t=this.query,e=t.appid,n=t.uni_platform,a=(0,r.stringifyQuery)({appid:e,uni_platform:n});return a}},created:function(){var t=this;this.debounceGet=(0,r.debounce)((function(){t.getAllData(t.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler:function(t){this.options.pageCurrent=1,this.debounceGet()}},key:function(){this.debounceGet()},field:function(){this.debounceGet()}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(t){this.getChannelData(t,!1)},changePlatform:function(t,e,n,a){this.getChannelData(null,t),this.query.version_id=0,this.query.uni_platform=a.code},changeTimeRange:function(t,e){this.currentDateTab=e;var n=(0,r.getTimeOfSomeDayAgo)(t),a=(0,r.getTimeOfSomeDayAgo)(0)-1;this.query.start_time=[n,a]},changePageCurrent:function(t){this.options.pageCurrent=t.current,this.getTabelData(this.query)},changePageSize:function(t){this.options.pageSize=t,this.options.pageCurrent=1,this.getTabelData(this.query)},stringifyField:function(t,e,n){var a=this;e&&(t=t.filter((function(t){return t.field===e}))),n&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(n)})));var i=t.map((function(t){return-1===t.stat?t.field:0===t.stat?"".concat(t.field," as ").concat("temp_"+t.field):"retention.".concat(a.field,".").concat(t.field,".device_count as ").concat("temp_"+t.field)})).join();return i},createStr:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"device_count",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,i=e||[1,2,3,4,5,6,7,14,30],r="d",o=this.fields.map((function(t){return t._id}));n=n||o;var s=i.map((function(e){return n.map((function(n){return"retention.".concat(n,".").concat(r+"_"+e,".").concat(t," as ").concat(r+"_"+e)}))}));a&&s.push(a);var c=s.join();return c},getAllData:function(t){this.query.appid?(this.errorMessage="",this.getChartData(t,this.key,this.keyName),this.getTabelData(t)):this.errorMessage="请先选择应用"},getChartData:function(e){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.key;this.options.pageCurrent;e=(0,r.stringifyQuery)(e,null,["uni_platform"]);this.createStr("device_count",[a],[this.field]);var o=t.database();o.collection("uni-stat-result").where(e).field("".concat(this.stringifyField(this.fieldsMap,"d_".concat(a)),", start_time")).groupBy("start_time").groupField((0,r.stringifyGroupField)(this.fieldsMap,"d_".concat(a))).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e,o=t.result,s=(o.count,o.data),c={categories:[],series:[{name:"".concat(a,"天后").concat(n.fieldName),data:[]}]},u=(0,i.default)(s);try{for(u.s();!(e=u.n()).done;){var l=e.value,d=(0,r.formatDate)(l.start_time,"day"),p=l["d_".concat(a)];c.series[0].data.push(p),c.categories.push(d)}}catch(f){u.e(f)}finally{u.f()}n.chartData=c})).catch((function(t){})).finally((function(){n.loading=!1}))},getTabelData:function(e){var n=this,a=this.options.pageCurrent;e=(0,r.stringifyQuery)(e,null,["uni_platform"]);var o=this.field+"_count";this.createStr("user_rate","",[this.field],o);this.loading=!0;var s=t.database();s.collection("uni-stat-result").where(e).field(this.stringifyField(this.fieldsMap)).groupBy("start_time").groupField((0,r.stringifyGroupField)(this.fieldsMap)).orderBy("start_time","desc").skip((a-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(t){var e,a=t.result,o=a.count,s=a.data,c=(0,i.default)(s);try{for(c.s();!(e=c.n()).done;){var u=e.value;(0,r.mapfields)(n.fieldsMap,u,u)}}catch(l){c.e(l)}finally{c.f()}n.options.total=o,n.tableData=[],n.tableData=s})).catch((function(t){})).finally((function(){n.loading=!1}))},getChannelData:function(e,n){var a=this;this.query.channel_id="";var i=t.database(),r={};e=e||this.query.appid,e&&(r.appid=e),n=n||this.query.platform_id,n&&(r.platform_id=n);var o=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),s=i.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(s,o).orderBy("platform_id","asc").get().then((function(t){var e,n=t.result.data,i=[];if(n.length>0)for(var r in n)e=n[r].channel_name?n[r].channel_name:"默认",n[r].platform_id.length>0&&(e=n[r].platform_id[0].name+"-"+e),i.push({value:n[r]._id,text:e});a.channelData=i})).catch((function(t){})).finally((function(){}))}}};e.default=s}).call(this,n("861b")["default"])},"3bae":function(t,e,n){"use strict";var a=n("199a"),i=n.n(a);i.a},"3caa":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},"43ba":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},"66bd":function(t,e,n){"use strict";var a=n("ab19"),i=n.n(a);i.a},"6cbd":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-7bab379c]{width:160px;white-space:normal}.uni-label-text[data-v-7bab379c]{font-size:14px;font-weight:700;color:#555;margin-top:17px;margin-bottom:17px;margin-right:5px}.uni-stat--tab-x[data-v-7bab379c]{display:flex;margin:0 15px;white-space:nowrap}.uni-stat--tab[data-v-7bab379c]{display:flex;flex-wrap:wrap}.uni-stat--tab-item[data-v-7bab379c]{white-space:nowrap;font-size:14px;color:#666;text-align:center;cursor:pointer;box-sizing:border-box;margin:15px 0}.uni-stat--tab-item-disabled[data-v-7bab379c]{cursor:unset;opacity:.4}.uni-stat--tab-item-line[data-v-7bab379c]{margin-right:30px;padding:2px 0;border-bottom:1px solid transparent}.uni-stat--tab-item-line[data-v-7bab379c]:last-child{margin-right:0}.uni-stat--tab-item-line-active[data-v-7bab379c]{color:#2979ff;border-bottom:1px solid #2979ff}.uni-stat--tab-item-boldLine[data-v-7bab379c]{box-sizing:border-box;margin-right:30px;padding:2px 0;border-bottom:2px solid transparent}.uni-stat--tab-item-boldLine[data-v-7bab379c]:last-child{margin-right:0}.uni-stat--tab-item-boldLine-active[data-v-7bab379c]{box-sizing:border-box;color:#2979ff;border-bottom:2px solid #2979ff}.uni-stat--tab-item-box[data-v-7bab379c]{padding:5px 15px;border:1px solid #dcdfe6}.uni-stat--tab-item-box[data-v-7bab379c]:not(:last-child){border-right-color:transparent}.uni-stat--tab-item-box-active[data-v-7bab379c]{box-sizing:border-box;border:1px solid #2979ff!important}@media screen and (max-width:500px){.hide-on-phone[data-v-7bab379c]{display:none}.uni-stat--tab[data-v-7bab379c]{flex-wrap:unset;overflow-x:auto!important}[data-v-7bab379c]::-webkit-scrollbar{display:none}}',""]),t.exports=e},"6e8f":function(t,e,n){var a=n("c292");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("64a26412",a,!0,{sourceMap:!1,shadowMode:!1})},"8e64":function(t,e,n){"use strict";n.r(e);var a=n("d3d1"),i=n("15a5");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("fdcd");var o=n("828b"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"28de2840",null,!1,a["a"],void 0);e["default"]=s.exports},a464:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa"),n("aa9c"),n("bf0f"),n("e966");var i=n("d3b4"),r=a(n("c022")),o=(0,i.initVueI18n)(r.default),s=o.t,c={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||s("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||s("uni-pagination.prevText")},nextPageText:function(){return this.nextText||s("uni-pagination.nextText")},maxPage:function(){var t=1,e=Number(this.total),n=Number(this.pageSize);return e&&n&&(t=Math.ceil(e/n)),t},paper:function(){for(var t=this.currentIndex,e=this.pagerCount,n=this.total,a=this.pageSize,i=[],r=[],o=Math.ceil(n/a),s=0;s<o;s++)i.push(s+1);r.push(1);var c=i[i.length-(e+1)/2];return i.forEach((function(n,a){(e+1)/2>=t?n<e+1&&n>1&&r.push(n):t+2<=c?n>t-(e+1)/2&&n<t+(e+1)/2&&r.push(n):(n>t-(e+1)/2||o-e<n)&&n<i[i.length-1]&&r.push(n)})),o>e?((e+1)/2>=t?r[r.length-1]="...":t+2<=c?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(i[i.length-1])):(e+1)/2>=t||t+2<=c||(r.shift(),r.push(i[i.length-1])),r}},watch:{current:{immediate:!0,handler:function(t,e){this.currentIndex=t<1?1:t}},value:{immediate:!0,handler:function(t){1===Number(this.current)&&(this.currentIndex=t<1?1:t)}},pageSizeIndex:function(t){this.$emit("pageSizeChange",this.pageSizeRange[t])}},methods:{pickerChange:function(t){this.pageSizeIndex=t.detail.value,this.pickerClick()},pickerClick:function(){var t=document.querySelector("body");if(t){this.pickerShow=!this.pickerShow,this.pickerShow?t.classList.add("uni-pagination-picker-show"):setTimeout((function(){return t.classList.remove("uni-pagination-picker-show")}),300)}},selectPage:function(t,e){if(parseInt(t))this.currentIndex=t,this.change("current");else{var n=Math.ceil(this.total/this.pageSize);if(e<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(e>=6)return void(this.currentIndex+5>n?this.currentIndex=n:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(t){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:t,current:this.currentIndex})}}};e.default=c},ab19:function(t,e,n){var a=n("6cbd");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("256c0852",a,!0,{sourceMap:!1,shadowMode:!1})},b162:function(t,e,n){"use strict";(function(t){n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa"),n("5c47"),n("a1c1"),n("5ef2"),n("3efd"),n("8f71"),n("bf0f"),n("4100"),n("0506"),n("fd3c");var a={name:"uni-stat-tabs",data:function(){return{currentTab:0,renderTabs:[],cacheKey:"uni-admin-statTabsData"}},props:{type:{type:String,default:"line"},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},current:{type:[String,Number],default:0},mode:{type:String,default:""},today:{type:Boolean,default:!1},yesterday:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1},all:{type:Boolean,default:!0},label:{type:String,default:""},placeholder:{type:String,default:"暂无选项"},tabs:{type:Array,default:function(){return[]}}},created:function(){this.last="".concat(this.mode.replace("-","_"),"_last_data")},mounted:function(){this.init()},computed:{},watch:{current:{immediate:!0,handler:function(t){this.currentTab=t}},tabs:{immediate:!1,handler:function(t){this.init()}},renderTabs:function(t){var e=this.current;this.mode&&t.length&&e>=0&&this.$nextTick((function(){var t=this.renderTabs[e];this.change(t,e)}))}},methods:{init:function(){if(this.mode.indexOf("platform")>-1)this.renderTabs=this.getCache()||[],this.getPlatform();else if("date"===this.mode){var t=[{_id:7,name:"最近七天"},{_id:30,name:"最近30天"},{_id:90,name:"最近90天"}];this.yesterday&&t.unshift({_id:1,name:"昨天"}),this.today&&t.unshift({_id:0,name:"今天"}),this.renderTabs=t}else this.renderTabs=this.tabs},change:function(t,e){if(!t.disabled){var n=t._id,a=t.name;this.currentTab=e,this.emit(n,e,a,t)}},emit:function(t,e,n,a){this.$emit("change",t,e,n,a),this.$emit("input",t,e,n),this.$emit("update:modelValue",t,e,n)},getPlatform:function(){var e=this,n=t.database();n.collection("uni-stat-app-platforms").get().then((function(t){var n=t.result.data;if(n=n.filter((function(t){return!t.hasOwnProperty("enable")||t.enable})),n.sort((function(t,e){return t.order-e.order})),"platform-channel"===e.mode){n=n.filter((function(t){return/^android|ios$/.test(t.code)}));var a=n.map((function(t){return'platform_id == "'.concat(t._id,'"')})).join(" || ");a="(".concat(a,")"),e.setAllItem(n,a)}else if("platform-scene"===e.mode){n=n.filter((function(t){return/mp-/.test(t.code)}));var i=n.map((function(t){return'platform_id == "'.concat(t._id,'"')})).join(" || ");i="(".concat(i,")"),e.setAllItem(n,i)}else e.setAllItem(n);e.setCache(n),e.renderTabs=n}))},setAllItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"全部";this.all&&t.unshift({name:n,_id:e})},getCurrentCacheKey:function(){return this.mode},getCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};return e[t]},setCache:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentCacheKey(),n=uni.getStorageSync(this.cacheKey)||{};n[e]=t,uni.setStorageSync(this.cacheKey,n)},removeCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};delete e[t],uni.setStorageSync(this.cacheKey,e)}}};e.default=a}).call(this,n("861b")["default"])},b299:function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.flex[data-v-ada60ae4]{display:flex;flex-wrap:wrap;align-items:center}.label-text[data-v-ada60ae4]{font-size:14px;color:#666;margin:auto 0;margin-right:5px}.line-bottom[data-v-ada60ae4]{border-bottom:2px solid #eee}.uni-stat-table-bg[data-v-ada60ae4]{background-color:#4e82d9;color:#fff}',""]),t.exports=e},bc5e:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniStatBreadcrumb:n("ce4e").default,uniDataSelect:n("9c5f").default,uniStatTabs:n("c541").default,uniDatetimePicker:n("2e94").default,qiunDataCharts:n("bbf1").default,uniIcons:n("7a23").default,uniTable:n("2565").default,uniTr:n("0f7c").default,uniTh:n("0fc6").default,uniTd:n("36a1").default,uniPagination:n("8e64").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[t._v("设备留存趋势分析")])],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[n("v-uni-view",{staticClass:"uni-stat--app-select"},[n("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAppid.apply(void 0,arguments)}},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),n("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}})],1)],1),n("v-uni-view",{staticClass:"uni-stat--x flex"},[n("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date",yesterday:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),n("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.start_time.length},attrs:{type:"datetimerange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1),n("v-uni-view",{staticClass:"uni-stat--x"},[n("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}}),t.query.platform_id&&-1===t.query.platform_id.indexOf("==")?n("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:t.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:t.query.channel_id,callback:function(e){t.$set(t.query,"channel_id",e)},expression:"query.channel_id"}}):t._e()],1),n("v-uni-view",{staticClass:"uni-stat--x mb-m",staticStyle:{"padding-top":"0"}},[n("v-uni-view",{staticClass:"mb-m line-bottom"},[n("uni-stat-tabs",{staticStyle:{"line-height":"40px","margin-bottom":"-17px"},attrs:{type:"boldLine",tabs:t.fields,tooltip:!0},model:{value:t.field,callback:function(e){t.field=e},expression:"field"}})],1),n("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:t.keys},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}}),n("v-uni-view",{staticClass:"p-m"},[n("v-uni-view",{staticClass:"uni-charts-box"},[n("qiun-data-charts",{attrs:{type:"area",chartData:t.chartData,echartsH5:!0,echartsApp:!0,tooltipFormat:"tooltipCustom",errorMessage:t.errorMessage}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-stat--x p-m"},[n("v-uni-view",{staticClass:"uni-tips mb-s flex"},[n("uni-icons",{attrs:{type:"info"}}),t._v("表格中显示为空，表示留存为 0 或无数据")],1),n("uni-table",{attrs:{loading:t.loading,stripe:!0,emptyText:t.errorMessage||t.$t("common.empty")}},[n("uni-tr",{staticStyle:{"background-color":"#eee"}},[t._l(t.fieldsMap,(function(e,a){return[e.title?n("uni-th",{key:a+"_"+a+"_0",attrs:{align:"center"}},[t._v(t._s(e.title))]):t._e()]}))],2),t._l(t.tableData,(function(e,a){return n("uni-tr",{key:a},[t._l(t.fieldsMap,(function(a,i){return[a.title?n("uni-td",{key:i+"_"+i+"_0",class:/[d|w|m]_\d/.test(a.field)&&[e[a.field]?"uni-stat-table-bg":""],attrs:{align:"center"}},[t._v(t._s(e[a.field]?e[a.field]:""))]):t._e()]}))],2)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":t.options.pageSize,current:t.options.pageCurrent,total:t.options.total},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageSize.apply(void 0,arguments)}}})],1)],1)],1)],1)},r=[]},c022:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("083e")),r=a(n("2a29")),o=a(n("3caa")),s=a(n("43ba")),c=a(n("dde8")),u={en:i.default,es:r.default,fr:o.default,"zh-Hans":s.default,"zh-Hant":c.default};e.default=u},c292:function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),t.exports=e},c541:function(t,e,n){"use strict";n.r(e);var a=n("199a5"),i=n("fbfc");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("66bd");var o=n("828b"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"7bab379c",null,!1,a["a"],void 0);e["default"]=s.exports},d3d1:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniIcons:n("7a23").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-pagination"},[!0===t.showPageSize||"true"===t.showPageSize?n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:t.pageSizeIndex,range:t.pageSizeRange},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerChange.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[t._v(t._s(t.pageSizeRange[t.pageSizeIndex])+" "+t._s(t.piecePerPage))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):t._e(),n("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[t._v("共 "+t._s(t.total)+" 条")]),n("v-uni-view",{staticClass:"uni-pagination__btn",class:1===t.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===t.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.prevPageText))])]],2),n("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[n("v-uni-view",{staticClass:"uni-pagination__num-current"},[n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[t._v(t._s(t.currentIndex))]),n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[t._v("/"+t._s(t.maxPage||0))]),t._l(t.paper,(function(e,a){return n("v-uni-view",{key:a,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":e===t.currentIndex},on:{click:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"top",void 0,n.key,void 0))return null;arguments[0]=n=t.$handleEvent(n),t.selectPage(e,a)}}},[n("v-uni-text",[t._v(t._s(e))])],1)}))],2)],1),n("v-uni-view",{staticClass:"uni-pagination__btn",class:t.currentIndex>=t.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":t.currentIndex===t.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRight.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.nextPageText))])]],2)],1)},r=[]},dde8:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},e73c:function(t,e,n){"use strict";n.r(e);var a=n("394c"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},fbfc:function(t,e,n){"use strict";n.r(e);var a=n("b162"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},fdcd:function(t,e,n){"use strict";var a=n("6e8f"),i=n.n(a);i.a}}]);