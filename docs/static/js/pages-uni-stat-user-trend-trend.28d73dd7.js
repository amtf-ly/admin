(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-user-trend-trend"],{"00165":function(t,e,a){var n=a("f28a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("5b1b2fea",n,!0,{sourceMap:!1,shadowMode:!1})},"083e":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},"15a5":function(t,e,a){"use strict";a.r(e);var n=a("a464"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"2a29":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},3522:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=[{title:"日期",field:"start_time",tooltip:"",formatter:"",stat:-1},{title:"新增用户",field:"new_user_count",tooltip:"首次访问应用的用户数（以设备为判断标准，去重）",value:0},{title:"活跃用户",field:"active_user_count",tooltip:"访问过应用内任意页面的总用户数（去重）",value:0},{title:"次均停留时长",field:"avg_user_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0,stat:"avg"},{title:"人均停留时长 ",field:"avg_user_time",formatter:":",tooltip:"平均每个用户停留在应用内的总时长，即应用停留总时长/活跃用户",value:0,stat:"avg"},{title:"总用户数",field:"total_users",tooltip:"从添加统计到当前选择时间的总用户数（去重）",value:0}]},"3caa":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},"43ba":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},"50db":function(t,e,a){"use strict";a.r(e);var n=a("5cee"),i=a("f9d0");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("68df");var u=a("828b"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"67b9b6bd",null,!1,n["a"],void 0);e["default"]=o.exports},"5cee":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniTable:a("2565").default,uniTr:a("0f7c").default,uniTh:a("0fc6").default,uniTooltip:a("f3dd").default,uniIcons:a("7a23").default,uniTd:a("36a1").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[a("uni-tr",[t._l(t.filedsMap,(function(e,n){return[e.title?a("uni-th",{key:n+"_"+n+"_0",attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:t._u([t.tooltip&&e.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[t._v(t._s(e.title)),t.tooltip&&e.tooltip?a("uni-icons",{attrs:{type:"help",color:"#666"}}):t._e()],1)],1):t._e()]}))],2),t._l(t.data,(function(e,n){return a("uni-tr",{key:n},[t._l(t.filedsMap,(function(n,i){return[n.title?a("uni-td",{key:i+"_"+i+"_0",attrs:{align:"center"}},[t._v(t._s(void 0!==e[n.field]?e[n.field]:"-"))]):t._e()]}))],2)}))],2)},r=[]},"613e":function(t,e,a){"use strict";(function(t){a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("3471")),r=n(a("5de6"));a("8f71"),a("bf0f"),a("2797"),a("aa9c"),a("d4b5");var u=a("777c"),o=n(a("3522")),s={data:function(){return{fieldsMap:o.default,query:{dimension:"hour",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,currentDimensionTab:0,tableData:[],panelData:o.default.filter((function(t){return t.hasOwnProperty("value")})),chartData:{},chartTab:"new_user_count",channelData:[],tabName:"新增用户",errorMessage:"",setOptions:{xAxis:{boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{color:"#999"}}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{left:40,right:50,bottom:50,top:60,containLabel:!0,show:!1}}}},computed:{chartTabs:function(){var t=[];return o.default.forEach((function(e){var a=e.field,n=e.title,i=e.hasOwnProperty("value");a&&n&&i&&t.push({_id:a,name:n})})),t},dimensionTabs:function(){var t=[{_id:"hour",name:"按时"},{_id:"day",name:"按日"},{_id:"week",name:"按周"},{_id:"month",name:"按月"}];return this.getDays()?t.forEach((function(t,e){t._id,t.disabled=!1})):(this.query.dimension="hour",t.forEach((function(t,e){"hour"===t._id?t.disabled=!1:t.disabled=!0})),this.currentDimensionTab=0),t},channelQuery:function(){var t=this.query.platform_id;return(0,u.stringifyQuery)({platform_id:t})},versionQuery:function(){var t=this.query,e=t.appid,a=t.uni_platform,n=(0,u.stringifyQuery)({appid:e,uni_platform:a});return n}},created:function(){var t=this;this.debounceGet=(0,u.debounce)((function(){t.getAllData(t.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler:function(t){this.debounceGet()}}},methods:{getDays:function(){if(!this.query.start_time.length)return!0;var t=(0,r.default)(this.query.start_time,2),e=t[0],a=t[1],n=a-e>=864e5;return n},useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(t){this.getChannelData(t,!1)},changePlatform:function(t,e,a,n){this.getChannelData(null,t),this.query.version_id=0,this.query.uni_platform=n.code},changeTimeRange:function(t,e){this.currentDateTab=e;var a,n;a=(0,u.getTimeOfSomeDayAgo)(t),n=t?(0,u.getTimeOfSomeDayAgo)(0)-1:(0,u.getTimeOfSomeDayAgo)(0)+864e5-1,this.query.start_time=[a,n]},changePageCurrent:function(t){this.options.pageCurrent=t.current,this.getTabelData(this.query)},changePageSize:function(t){this.options.pageSize=t,this.getTabelData(this.query)},changeChartTab:function(t,e,a){this.tabName=a,this.getChartData(this.query,t,a)},getAllData:function(t){t.appid?(this.errorMessage="",this.getPanelData(),this.getChartData(t,this.chartTab,this.tabName),this.getTabelData(t)):this.errorMessage="请先选择应用"},getChartData:function(e){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.chartTab,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"新增用户";e=(0,u.stringifyQuery)(e,!0,["uni_platform"]);var s=this.query.dimension,l=t.database();l.collection("uni-stat-result").where(e).field("".concat((0,u.stringifyField)(o.default,n),", start_time")).groupBy("start_time").groupField((0,u.stringifyGroupField)(o.default,n)).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e=t.result,l=(e.count,e.data),c={categories:[],series:[{name:r,data:[]}]},d=o.default.filter((function(t){return t.field===n}));d=JSON.parse(JSON.stringify(d)),delete d[0].value,d[0].formatter="";var p,f=(0,i.default)(l);try{for(f.s();!(p=f.n()).done;){var h=p.value;(0,u.mapfields)(d,h,h);var g=(0,u.formatDate)(h.start_time,s),v=h[n];c.series[0].data.push(v),c.categories.push(g)}}catch(m){f.e(m)}finally{f.f()}a.chartData=c})).catch((function(t){})).finally((function(){a.loading=!1}))},getTabelData:function(e){var a=this,n=this.options.pageCurrent;e=(0,u.stringifyQuery)(e,!0,["uni_platform"]),this.options.pageCurrent=1,this.loading=!0;var r=t.database();r.collection("uni-stat-result").where(e).field((0,u.stringifyField)(o.default)).groupBy("start_time").groupField((0,u.stringifyGroupField)(o.default)).orderBy("start_time","desc").skip((n-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(t){var e,n=t.result,r=n.count,s=n.data,l=(0,i.default)(s);try{for(l.s();!(e=l.n()).done;){var c=e.value,d=c.start_time;if(d){var p=a.query.dimension;c.start_time=(0,u.formatDate)(d,p)}(0,u.mapfields)(o.default,c,c)}}catch(f){l.e(f)}finally{l.f()}a.tableData=[],a.options.total=r,a.tableData=s})).catch((function(t){})).finally((function(){a.loading=!1}))},getPanelData:function(){var e=this,a=JSON.parse(JSON.stringify(this.query)),n=(0,u.stringifyQuery)(a,null,["uni_platform"]),i=t.database();i.collection("uni-stat-result").where(n).field("".concat((0,u.stringifyField)(o.default),",stat_date")).groupBy("appid").groupField((0,u.stringifyGroupField)(o.default)).orderBy("stat_date","desc").get().then((function(t){var a=t.result.data[0];a&&(a.total_users=0),e.panelData=[],e.panelData=(0,u.mapfields)(o.default,a),u.getFieldTotal.call(e,n,"total_users")}))},navTo:function(t){var e="/pages/uni-stat/overview/overview?id=".concat(t);uni.navigateTo({url:e})},getChannelData:function(e,a){var n=this;this.query.channel_id="";var i=t.database(),r={};e=e||this.query.appid,e&&(r.appid=e),a=a||this.query.platform_id,a&&(r.platform_id=a);var u=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),o=i.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(o,u).orderBy("platform_id","asc").get().then((function(t){var e,a=t.result.data,i=[];if(a.length>0)for(var r in a)e=a[r].channel_name?a[r].channel_name:"默认",a[r].platform_id.length>0&&(e=a[r].platform_id[0].name+"-"+e),i.push({value:a[r]._id,text:e});n.channelData=i})).catch((function(t){})).finally((function(){}))}}};e.default=s}).call(this,a("861b")["default"])},"646a":function(t,e,a){"use strict";a.r(e);var n=a("613e"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"656d":function(t,e,a){"use strict";a.r(e);var n=a("b209"),i=a("646a");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var u=a("828b"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"122ef332",null,!1,n["a"],void 0);e["default"]=o.exports},"68df":function(t,e,a){"use strict";var n=a("00165"),i=a.n(n);i.a},"6e8f":function(t,e,a){var n=a("c292");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("64a26412",n,!0,{sourceMap:!1,shadowMode:!1})},"8e64":function(t,e,a){"use strict";a.r(e);var n=a("d3d1"),i=a("15a5");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("fdcd");var u=a("828b"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"28de2840",null,!1,n["a"],void 0);e["default"]=o.exports},a464:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("64aa"),a("aa9c"),a("bf0f"),a("e966");var i=a("d3b4"),r=n(a("c022")),u=(0,i.initVueI18n)(r.default),o=u.t,s={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||o("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||o("uni-pagination.prevText")},nextPageText:function(){return this.nextText||o("uni-pagination.nextText")},maxPage:function(){var t=1,e=Number(this.total),a=Number(this.pageSize);return e&&a&&(t=Math.ceil(e/a)),t},paper:function(){for(var t=this.currentIndex,e=this.pagerCount,a=this.total,n=this.pageSize,i=[],r=[],u=Math.ceil(a/n),o=0;o<u;o++)i.push(o+1);r.push(1);var s=i[i.length-(e+1)/2];return i.forEach((function(a,n){(e+1)/2>=t?a<e+1&&a>1&&r.push(a):t+2<=s?a>t-(e+1)/2&&a<t+(e+1)/2&&r.push(a):(a>t-(e+1)/2||u-e<a)&&a<i[i.length-1]&&r.push(a)})),u>e?((e+1)/2>=t?r[r.length-1]="...":t+2<=s?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(i[i.length-1])):(e+1)/2>=t||t+2<=s||(r.shift(),r.push(i[i.length-1])),r}},watch:{current:{immediate:!0,handler:function(t,e){this.currentIndex=t<1?1:t}},value:{immediate:!0,handler:function(t){1===Number(this.current)&&(this.currentIndex=t<1?1:t)}},pageSizeIndex:function(t){this.$emit("pageSizeChange",this.pageSizeRange[t])}},methods:{pickerChange:function(t){this.pageSizeIndex=t.detail.value,this.pickerClick()},pickerClick:function(){var t=document.querySelector("body");if(t){this.pickerShow=!this.pickerShow,this.pickerShow?t.classList.add("uni-pagination-picker-show"):setTimeout((function(){return t.classList.remove("uni-pagination-picker-show")}),300)}},selectPage:function(t,e){if(parseInt(t))this.currentIndex=t,this.change("current");else{var a=Math.ceil(this.total/this.pageSize);if(e<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(e>=6)return void(this.currentIndex+5>a?this.currentIndex=a:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(t){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:t,current:this.currentIndex})}}};e.default=s},b209:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniStatBreadcrumb:a("ce4e").default,uniDataSelect:a("9c5f").default,uniStatTabs:a("c541").default,uniDatetimePicker:a("2e94").default,uniStatPanel:a("47f6").default,qiunDataCharts:a("bbf1").default,uniStatTable:a("50db").default,uniPagination:a("8e64").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[t._v("各指标趋势分析")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("v-uni-view",{staticClass:"uni-stat--app-select"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAppid.apply(void 0,arguments)}},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}})],1)],1),a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.start_time.length},attrs:{type:"datetimerange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}}),a("uni-stat-tabs",{attrs:{label:"维度选择",type:"box",current:t.currentDimensionTab,tabs:t.dimensionTabs},model:{value:t.query.dimension,callback:function(e){t.$set(t.query,"dimension",e)},expression:"query.dimension"}})],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}}),t.query.platform_id&&-1===t.query.platform_id.indexOf("==")?a("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:t.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:t.query.channel_id,callback:function(e){t.$set(t.query,"channel_id",e)},expression:"query.channel_id"}}):t._e()],1),a("uni-stat-panel",{attrs:{items:t.panelData}}),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"label-text mb-l"},[t._v("趋势图")]),a("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:t.chartTabs},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeChartTab.apply(void 0,arguments)}},model:{value:t.chartTab,callback:function(e){t.chartTab=e},expression:"chartTab"}}),a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"area",chartData:t.chartData,echartsH5:!0,echartsApp:!0,errorMessage:t.errorMessage,eopts:t.setOptions}})],1)],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("uni-stat-table",{attrs:{data:t.tableData,filedsMap:t.fieldsMap,loading:t.loading}}),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":t.options.pageSize,current:t.options.pageCurrent,total:t.options.total},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageSize.apply(void 0,arguments)}}})],1)],1)],1)],1)},r=[]},c022:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("083e")),r=n(a("2a29")),u=n(a("3caa")),o=n(a("43ba")),s=n(a("dde8")),l={en:i.default,es:r.default,fr:u.default,"zh-Hans":o.default,"zh-Hant":s.default};e.default=l},c292:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),t.exports=e},d3d1:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniIcons:a("7a23").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-pagination"},[!0===t.showPageSize||"true"===t.showPageSize?a("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:t.pageSizeIndex,range:t.pageSizeRange},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerChange.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}}},[a("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[a("v-uni-text",[t._v(t._s(t.pageSizeRange[t.pageSizeIndex])+" "+t._s(t.piecePerPage))]),a("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):t._e(),a("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[t._v("共 "+t._s(t.total)+" 条")]),a("v-uni-view",{staticClass:"uni-pagination__btn",class:1===t.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===t.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[a("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[a("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.prevPageText))])]],2),a("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[a("v-uni-view",{staticClass:"uni-pagination__num-current"},[a("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[t._v(t._s(t.currentIndex))]),a("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[t._v("/"+t._s(t.maxPage||0))]),t._l(t.paper,(function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":e===t.currentIndex},on:{click:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"top",void 0,a.key,void 0))return null;arguments[0]=a=t.$handleEvent(a),t.selectPage(e,n)}}},[a("v-uni-text",[t._v(t._s(e))])],1)}))],2)],1),a("v-uni-view",{staticClass:"uni-pagination__btn",class:t.currentIndex>=t.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":t.currentIndex===t.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRight.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[a("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[a("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.nextPageText))])]],2)],1)},r=[]},dde8:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},f13b:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-stat-table",data:function(){return{}},props:{data:{type:Array,default:function(){return[]}},filedsMap:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1}}};e.default=n},f28a:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,".uni-stat-tooltip-s[data-v-67b9b6bd]{width:160px;white-space:normal}",""]),t.exports=e},f9d0:function(t,e,a){"use strict";a.r(e);var n=a("f13b"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},fdcd:function(t,e,a){"use strict";var n=a("6e8f"),i=a.n(n);i.a}}]);