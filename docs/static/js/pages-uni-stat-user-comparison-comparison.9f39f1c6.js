(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-user-comparison-comparison"],{"4a7a":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uniStatBreadcrumb:a("ce4e").default,uniDataSelect:a("9c5f").default,uniDatetimePicker:a("2e94").default,qiunDataCharts:a("bbf1").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group hide-on-phone"},[a("v-uni-view",{staticClass:"uni-sub-title"},[t._v("多个指标在不同平台数据的占比，可以直观看出各个平台引流的效果")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex mb-m",staticStyle:{padding:"0 15px"}},[a("v-uni-view",{staticClass:"uni-stat--app-select"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}})],1),a("v-uni-view",{staticClass:"flex",staticStyle:{flex:"1"}},[a("v-uni-view",{staticClass:"ml-m label-text hide-on-phone"},[t._v("日期选择:")]),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":!!t.query.start_time},attrs:{type:"date",returnType:"timestamp",clearIcon:!1},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1)],1),a("v-uni-view",{staticClass:"dispaly-grid"},t._l(t.chartsData,(function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-stat--x uni-charts-box1"},[a("v-uni-view",{staticClass:"label-text",staticStyle:{margin:"5px 0 20px 0"}},[t._v(t._s(t.chartsData[n].title))]),a("qiun-data-charts",{attrs:{type:"ring",chartData:t.chartsData[n],echartsH5:!0,echartsApp:!0}})],1)})),1)],1)],1)},i=[]},6123:function(t,e,a){var n=a("aba8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("967d").default;r("65c82a10",n,!0,{sourceMap:!1,shadowMode:!1})},"6fca":function(t,e,a){"use strict";(function(t){a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c223"),a("d4b5"),a("3efd"),a("bf0f"),a("2797"),a("aa9c");var r=n(a("3471")),i=n(a("b7c7")),u=a("777c"),o={data:function(){return{query:{dimension:"day",appid:"",version_id:"",start_time:(0,u.getTimeOfSomeDayAgo)(0)},platforms:[],dayChartsData:[],monChartsData:[]}},created:function(){var t=this;this.debounceGet=(0,u.debounce)((function(){t.getChartData(t.query),t.getRangeCountData(t.query,"month")}),300)},watch:{query:{deep:!0,handler:function(t){this.debounceGet()}}},computed:{chartsData:function(){return[].concat((0,i.default)(this.dayChartsData),(0,i.default)(this.monChartsData))},versionQuery:function(){var t=this.query.appid,e=(0,u.stringifyQuery)({appid:t});return e}},methods:{getChartData:function(e){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day";e=JSON.parse(JSON.stringify(e));var r=(0,u.getTimeOfSomeDayAgo)(0);if(e.start_time>=r){var i=(new Date).getTime();e.start_time=[r,i],e=(0,u.stringifyQuery)(e,!0)}else e=(0,u.stringifyQuery)(e);var o=t.database();o.collection("uni-stat-result").where(e).field("active_user_count,new_user_count,total_users,platform_id").groupBy("platform_id").groupField("sum(active_user_count) as ".concat(n,"_active_user_count, sum(new_user_count) as ").concat(n,"_new_user_count, max(total_users) as ").concat(n,"_total_users")).get().then((function(t){var e=t.result.data;a.initChartOption(e,"dayChartsData")}))},getRangeCountData:function(e,a){var n=this;e=(0,u.stringifyQuery)(e);var r=t.database();r.collection("uni-stat-result").where(e).field("active_user_count, new_user_count, platform_id, ".concat(a,'(add(new Date(0),start_time), "Asia/Shanghai") as ').concat(a,',year(add(new Date(0),start_time), "Asia/Shanghai") as year')).groupBy("year, ".concat(a?a+",":"","platform_id")).groupField("sum(active_user_count) as ".concat(a,"_active_user_count, sum(new_user_count) as ").concat(a,"_new_user_count")).orderBy("year asc, ".concat(a," asc")).get().then((function(t){var e=t.result.data;n.initChartOption(e,"monChartsData","month")}))},initChartOption:function(e,a){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"day",u=t.database();u.collection("uni-stat-app-platforms").get().then((function(t){var u=[{field:"".concat(i,"_new_user_count"),title:"".concat("day"===i?"日":"月","新增用户对比"),series:[{data:[]}]},{field:"".concat(i,"_active_user_count"),title:"".concat("day"===i?"日":"月","活跃用户对比"),series:[{data:[]}]}];"day"===i&&u.unshift({field:"day_total_users",title:"总用户数对比",series:[{data:[]}]}),n[a]=u;var o=t.result.data,s={};o.forEach((function(t){s[t._id]=t.name}));var c,l=(0,r.default)(n[a]);try{for(l.s();!(c=l.n()).done;){var f,d=c.value,v=d.series[0].data,p=JSON.parse(JSON.stringify(s)),h=(0,r.default)(e);try{for(h.s();!(f=h.n()).done;){var m=f.value;for(var g in m)if(d.field===g){var y=m.platform_id,_={name:p[y],value:m[g]};v.push(_),delete p[y]}}}catch(D){h.e(D)}finally{h.f()}for(var b in p){var w={name:p[b],value:0};v.push(w)}}}catch(D){l.e(D)}finally{l.f()}}))}}};e.default=o}).call(this,a("861b")["default"])},"777c":function(t,e,a){"use strict";(function(t){a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.createUniStatQuery=function(t){return Object.assign({},t,{type:"native_app",create_env:"uni-stat"})},e.debounce=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var n=this,r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];a&&clearTimeout(a),a=setTimeout((function(){t.apply(n,i)}),e)}},e.division=s,e.fileToUrl=function(t){for(var e in p)if(p.hasOwnProperty(e)){var a=p[e];if(a===t)return e}var n=(window.URL||window.webkitURL).createObjectURL(t);return p[n]=t,n},e.fillTrendChartData=function(t,e,a){var n=e.start_time,r=e.dimension;if(["hour","day"].indexOf(r)>-1){var i,u=[];"hour"===r?i=36e5:"day"===r&&(i=864e5);var o=n[0],s=n[1],c=o;u=[o];while(c+i<=s)c+=i,u.push(c);for(var l=[],f=function(e){var n=u[e],r=t.find((function(t,e){return t.start_time===n}));if(r)l.push(r);else{var i={start_time:n};a.map((function(t,e){i[t.field]=0})),l.push(i)}},d=0;d<u.length;d++)f(d);return l}return t},e.format=c,e.formatDate=l,e.formatterData=function(t){var e=t.fieldsMap,a=t.data,n=t.formatter,r=void 0===n||n,i=JSON.parse(JSON.stringify(a));return i.map((function(t){var a=function(a){var n=e.find((function(t){return t.field==a}));if("object"===(0,u.default)(n)){var i=n.fix,o=void 0===i?0:i;"number"===typeof n.multiple&&"number"===typeof t[a]&&(t[a]=Number((t[a]*n.multiple).toFixed(o))),r&&n.formatter&&"number"===typeof t[a]&&(","===n.formatter?t[a]=function(t){return String(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}(t[a]):"%"===n.formatter?t[a]="".concat((100*t[a]).toFixed(o),"%"):"-"===n.formatter&&(t[a]=f(t[a])))}};for(var n in t)a(n)})),i},e.getAllDateCN=function(t,e){var a=[],n=0;while(e.getTime()-t.getTime()>=0)a[n]=t.getTime(),t.setDate(t.getDate()+1),n+=1;return a},e.getFieldTotal=function(){var e,a=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"total_devices";"object"===(0,u.default)(n)&&(n=o(n,!1,["uni_platform"]));var i=t.database();return i.collection("uni-stat-result").where(n).field("".concat(r," as temp_").concat(r,", start_time")).groupBy("start_time").groupField("sum(temp_".concat(r,") as ").concat(r)).orderBy("start_time","desc").get().then((function(t){var n=t.result.data;return e=n.length&&n[0][r],e=c(e),a.panelData&&a.panelData.forEach((function(t){t.field===r&&(t.value=e)})),Promise.resolve(e)}))},e.getTimeOfSomeDayAgo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),a=new Date(e),n=864e5,r=[a.getFullYear(),a.getMonth()+1,a.getDate()].join("/");r+=" 00:00:00";var i=new Date(r).getTime()-n*t;return i},e.mapfields=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"value",o=[],l=a;t=JSON.parse(JSON.stringify(t));var f,d=JSON.parse(JSON.stringify(e)),v=(0,i.default)(t);try{for(v.s();!(f=v.n()).done;){var p=f.value,h=p.field,m=p.computed,g=p.formatter,y=p.disable,_=p.fix;if(!y){a=l||p;var b=a.hasOwnProperty(u),w=n+h;if(e){var D=e[w];if(m){var x=m.split("/"),O=(0,r.default)(x,2),C=O[0],S=O[1];C=Number(d[n+C]),S=Number(d[n+S]);var j=c(s(C,S),g,_);b&&h===a.field?a[u]=j:a[h]=j}else if(D){var q=c(D,g,_);b?a.field===h&&(a[u]=q):a[h]=q}}b&&o.push(a)}}}catch(F){v.e(F)}finally{v.f()}return o},e.maxDeltaDay=v,e.parseDateTime=f,e.stringifyField=function(t,e,a){e&&(t=t.filter((function(t){return t.field===e})));a&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(a)})));var n=t.map((function(t){var e=[];return t.computed?e=t.computed.split("/"):e.push(t.field),e=e.map((function(e){return-1===t.stat?e:"".concat(e," as ").concat("temp_"+e)})),e.join()}));return n.join()},e.stringifyGroupField=function(t,e,a){e&&(t=t.filter((function(t){return t.field===e})));a&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(a)})));var n=t.map((function(t){var e=t.stat,a=[];return t.computed?a=t.computed.split("/"):a.push(t.field),a=a.map((function(t){if(-1!==e)return"".concat(e||"sum","(").concat("temp_"+t,") as ").concat(t)})),a.filter(Boolean).join()})).filter(Boolean).join();return n},e.stringifyQuery=o;var r=n(a("5de6")),i=n(a("3471")),u=n(a("fcf3"));function o(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=[],r=Object.keys(t),i=t.start_time;r.forEach((function(r){if("time_range"!==r&&-1===a.indexOf(r)){var u=t[r];if(u)if("string"===typeof u&&u.indexOf(r)>-1)n.push(u);else if("string"===typeof u&&(u='"'.concat(u,'"')),Array.isArray(u))2===u.length&&r.indexOf("time")>-1?n.push("".concat(r," >= ").concat(u[0]," && ").concat(r," <= ").concat(u[1])):(u=u.map((function(t){return"".concat(r,' == "').concat(t,'"')})).join(" || "),u&&n.push("(".concat(u,")")));else if(e&&"dimension"===r)if(v(i))n.push('dimension == "hour"');else{var o=getCurrentPages(),s=o[o.length-1];["pages/uni-stat/device/trend/trend","pages/uni-stat/user/trend/trend"].indexOf(s.route)>-1||u&&'"hour"'!==u?n.push("".concat(r," == ").concat(u)):n.push('dimension == "day"')}else n.push("".concat(r," == ").concat(u))}}));var u=n.join(" && ");return u||{}}function s(t,e){return e?t/e:0}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=arguments.length>2?arguments[2]:void 0;if("number"!==typeof t)return t;if("%"===e)return t*=100,String(t).indexOf(".")>-1&&(t=t.toFixed(2)),t=t?t+e:t,t;if("%%"===e)return t=Number(t),t.toFixed(2)+"%";if("-"===e)return l(t,"day");if(":"===e){var n,r,i;t=Math.ceil(t),n=r=i=0;var u=3600,o=60;if(t>=u){n=Math.floor(t/u);var s=t%u;s>=o?(r=Math.floor(s/o),i=s%o):i=s}else u>=t&&t>=o?(r=Math.floor(t/o),i=t%o):i=t;var c=[n,r,i].map((function(t){return t<10?"0"+t:t}));return c.join(e)}return","===e?t.toLocaleString():(String(t).indexOf(".")>-1&&(t=Math.abs(t)>1?t.toFixed(a||0):t.toFixed(a||2)),t)}function l(t,e){var a=new Date(t);if("hour"===e){var n=a.getHours();n=n<10?"0"+n:n;var r="".concat(n,":00 ~ ").concat(n,":59");if("00"===n){var i=f(a);r=i+"（00:00 ~ 00:59）"}return r}if("week"===e){var u=a.getDate()-a.getDay()+1,o=u+6,s=new Date(a.setDate(u));s=f(s);var c=new Date(a.setDate(o));return c=f(c),"".concat(s," ~ ").concat(c)}if("month"===e){var l=new Date(a.getFullYear(),a.getMonth(),1);l=f(l);var d=new Date(a.getFullYear(),a.getMonth()+1,0);return d=f(d),"".concat(l," ~ ").concat(d)}return f(a)}function f(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",n=t;"object"!==(0,u.default)(n)&&(n=new Date(n));var r=n.getFullYear(),i=n.getMonth()+1,o=n.getDate(),s=n.getHours(),c=n.getMinutes(),l=n.getSeconds(),f=[r,d(i),d(o)].join(a),v=[d(s),d(c),d(l)].join(":");return"dateTime"===e?f+" "+v:f}function d(t){return t<10?"0"+t:t}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!t.length)return!0;var a=864e5,n=(0,r.default)(t,2),i=n[0],u=n[1],o=u-i<a*e;return o}a("5c47"),a("a1c1"),a("d4b5"),a("fd3c"),a("aa77"),a("bf0f"),a("64aa"),a("5ef2"),a("aa9c"),a("dc8a"),a("2797"),a("c223"),a("8f71"),a("18f7"),a("de6c"),a("dc89"),a("2425");var p={}}).call(this,a("861b")["default"])},a53c:function(t,e,a){"use strict";a.r(e);var n=a("6fca"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},aba8:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-charts-box1[data-v-0e604917]{padding:10px;height:420px}',""]),t.exports=e},b4ee:function(t,e,a){"use strict";var n=a("6123"),r=a.n(n);r.a},e916:function(t,e,a){"use strict";a.r(e);var n=a("4a7a"),r=a("a53c");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("b4ee");var u=a("828b"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"0e604917",null,!1,n["a"],void 0);e["default"]=o.exports}}]);