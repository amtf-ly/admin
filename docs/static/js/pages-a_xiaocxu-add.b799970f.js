(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-a_xiaocxu-add"],{"0962":function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("64aa");var n={name:"UniNumberBox",emits:["change","input","update:modelValue","blur","focus"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},background:{type:String,default:"#f5f5f5"},color:{type:String,default:"#333"},disabled:{type:Boolean,default:!1},width:{type:Number,default:40}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},modelValue:function(t){this.inputValue=+t}},computed:{widthWithPx:function(){return this.width+"px"}},created:function(){1===this.value&&(this.inputValue=+this.modelValue),1===this.modelValue&&(this.inputValue=+this.value)},methods:{_calcValue:function(t){if(!this.disabled){var e=this._getDecimalScale(),a=this.inputValue*e,n=this.step*e;if("minus"===t){if(a-=n,a<this.min*e)return;a>this.max*e&&(a=this.max*e)}if("plus"===t){if(a+=n,a>this.max*e)return;a<this.min*e&&(a=this.min*e)}this.inputValue=(a/e).toFixed(String(e).length-1),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue),this.$emit("change",+this.inputValue)}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,String(this.step).split(".")[1].length)),t},_onBlur:function(t){this.$emit("blur",t);var e=t.detail.value;if(isNaN(e))this.inputValue=this.value;else{e=+e,e>this.max?e=this.max:e<this.min&&(e=this.min);var a=this._getDecimalScale();this.inputValue=e.toFixed(String(a).length-1),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue),this.$emit("change",+this.inputValue)}},_onFocus:function(t){this.$emit("focus",t)}}};e.default=n},"0b9e":function(t,e,a){"use strict";a.r(e);var n=a("d2bb"),i=a("7ba1");for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);var l=a("828b"),o=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=o.exports},"266d":function(t,e,a){"use strict";var n=a("4c4a"),i=a.n(n);i.a},"4c4a":function(t,e,a){var n=a("b32d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("dda1178a",n,!0,{sourceMap:!1,shadowMode:!1})},"5be9":function(t,e,a){"use strict";(function(t){a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("9b1b"));a("4626"),a("5ac7"),a("dc8a"),a("bf0f");var u=a("fcfb"),l=t.database();l.command;function o(t){var e={};for(var a in u.validator)t.includes(a)&&(e[a]=u.validator[a]);return e}var r={data:function(){var t={biaoti:"",link:"",type:"link",lanmu:"置顶",xuhao:9};return{formData:t,formOptions:{type_localdata:[{value:"link",text:"link"},{value:"button",text:"button"},{value:"其他",text:"其他"}],lanmu_localdata:[{value:"置顶",text:"置顶"},{value:"最新消息",text:"最新消息"},{value:"广告",text:"广告"},{value:"其他",text:"其他"}]},rules:(0,i.default)({},o(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return l.collection("a_xiaocxu").add(t).then((function(t){uni.showToast({title:"新增成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))}}};e.default=r}).call(this,a("861b")["default"])},"686f":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-numbox"},[a("v-uni-view",{staticClass:"uni-numbox__minus uni-numbox-btns",style:{background:t.background},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calcValue("minus")}}},[a("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue<=t.min||t.disabled},style:{color:t.color}},[t._v("-")])],1),"checkbox"===(t.step<1?"digit":"number")?a("v-uni-input",{staticClass:"uni-numbox__value",style:{background:t.background,color:t.color,width:t.widthWithPx},attrs:{disabled:t.disabled,type:"checkbox"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._onBlur.apply(void 0,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):"radio"===(t.step<1?"digit":"number")?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"uni-numbox__value",style:{background:t.background,color:t.color,width:t.widthWithPx},attrs:{disabled:t.disabled,type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{focus:t._onFocus,blur:t._onBlur,change:function(e){t.inputValue=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"uni-numbox__value",style:{background:t.background,color:t.color,width:t.widthWithPx},attrs:{disabled:t.disabled,type:t.step<1?"digit":"number"},domProps:{value:t.inputValue},on:{focus:t._onFocus,blur:t._onBlur,input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),a("v-uni-view",{staticClass:"uni-numbox__plus uni-numbox-btns",style:{background:t.background},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calcValue("plus")}}},[a("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue>=t.max||t.disabled},style:{color:t.color}},[t._v("+")])],1)],1)},i=[]},"7ba1":function(t,e,a){"use strict";a.r(e);var n=a("5be9"),i=a.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},a530:function(t,e,a){"use strict";a.r(e);var n=a("686f"),i=a("db7d");for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);a("266d");var l=a("828b"),o=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"0c5d406d",null,!1,n["a"],void 0);e["default"]=o.exports},b32d:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-numbox[data-v-0c5d406d]{display:flex;flex-direction:row}.uni-numbox-btns[data-v-0c5d406d]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 8px;background-color:#f5f5f5;cursor:pointer}.uni-numbox__value[data-v-0c5d406d]{margin:0 2px;background-color:#f5f5f5;width:40px;height:26px;text-align:center;font-size:14px;border-width:0;color:#333}.uni-numbox__minus[data-v-0c5d406d]{border-top-left-radius:2px;border-bottom-left-radius:2px}.uni-numbox__plus[data-v-0c5d406d]{border-top-right-radius:2px;border-bottom-right-radius:2px}.uni-numbox--text[data-v-0c5d406d]{line-height:20px;margin-bottom:2px;font-size:20px;font-weight:300;color:#333}.uni-numbox .uni-numbox--disabled[data-v-0c5d406d]{color:silver!important;cursor:not-allowed}',""]),t.exports=e},d2bb:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var n={uniForms:a("8374").default,uniFormsItem:a("6de0").default,uniEasyinput:a("6a65").default,uniDataCheckbox:a("9a97").default,uniNumberBox:a("a530").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{model:t.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"biaoti",label:"标题"}},[a("uni-easyinput",{attrs:{trim:"both"},model:{value:t.formData.biaoti,callback:function(e){t.$set(t.formData,"biaoti",e)},expression:"formData.biaoti"}})],1),a("uni-forms-item",{attrs:{name:"link",label:"link"}},[a("uni-easyinput",{attrs:{trim:"both"},model:{value:t.formData.link,callback:function(e){t.$set(t.formData,"link",e)},expression:"formData.link"}})],1),a("uni-forms-item",{attrs:{name:"type",label:"type"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.type_localdata,trim:"both"},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}})],1),a("uni-forms-item",{attrs:{name:"lanmu",label:"栏目"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.lanmu_localdata,trim:"both"},model:{value:t.formData.lanmu,callback:function(e){t.$set(t.formData,"lanmu",e)},expression:"formData.lanmu"}})],1),a("uni-forms-item",{attrs:{name:"xuhao",label:"序号"}},[a("uni-number-box",{attrs:{type:"number"},model:{value:t.formData.xuhao,callback:function(e){t.$set(t.formData,"xuhao",e)},expression:"formData.xuhao"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},u=[]},db7d:function(t,e,a){"use strict";a.r(e);var n=a("0962"),i=a.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},fcfb:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.enumConverter=void 0,e.filterToWhere=function(t,e){var a={};for(var n in t){var l=t[n],o=l.type,r=l.value;switch(o){case"search":"string"===typeof r&&r.length&&(a[n]=new RegExp(r));break;case"select":if(r.length){var s,d=[],c=(0,u.default)(r);try{for(c.s();!(s=c.n()).done;){var f=s.value;d.push(e.eq(f))}}catch(w){c.e(w)}finally{c.f()}a[n]=e.or(d)}break;case"range":if(r.length){var m=r[0],b=r[1];a[n]=e.and([e.gte(m),e.lte(b)])}break;case"date":if(r.length){var p=(0,i.default)(r,2),v=p[0],h=p[1],x=new Date(v),g=new Date(h);a[n]=e.and([e.gte(x),e.lte(g)])}break;case"timestamp":if(r.length){var y=(0,i.default)(r,2),k=y[0],_=y[1];a[n]=e.and([e.gte(k),e.lte(_)])}break}}return a},e.validator=void 0;var i=n(a("5de6")),u=n(a("3471"));a("23f4"),a("7d2f"),a("5c47"),a("9c4e"),a("ab80"),a("aa9c");e.validator={biaoti:{rules:[{format:"string"}],title:"标题",label:"标题"},link:{rules:[{format:"string"}],title:"link",label:"link"},type:{rules:[{format:"string"},{range:[{value:"link",text:"link"},{value:"button",text:"button"},{value:"其他",text:"其他"}]}],title:"type",defaultValue:"link",label:"type"},lanmu:{rules:[{format:"string"},{range:[{value:"置顶",text:"置顶"},{value:"最新消息",text:"最新消息"},{value:"广告",text:"广告"},{value:"其他",text:"其他"}]}],title:"栏目",defaultValue:"置顶",label:"栏目"},xuhao:{rules:[{format:"int"}],title:"序号",defaultValue:9,label:"序号"}};e.enumConverter={type_valuetotext:{link:"link",button:"button","其他":"其他"},lanmu_valuetotext:{"置顶":"置顶","最新消息":"最新消息","广告":"广告","其他":"其他"}}}}]);