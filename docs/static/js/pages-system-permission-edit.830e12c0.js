(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-permission-edit"],{"0877":function(t,e,i){"use strict";(function(t){i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("9b1b"));i("4626"),i("5ac7"),i("dc8a"),i("bf0f");var a=i("70fb"),o=t.database();o.command;function s(t){var e={};for(var i in a.validator)t.includes(i)&&(e[i]=a.validator[i]);return e}var l={data:function(){var t={permission_id:"",permission_name:"",comment:""};return{formData:t,formOptions:{},rules:(0,r.default)({},s(Object.keys(t)))}},onLoad:function(t){if(t.id){var e=t.id;this.formDataId=e,this.getDetail(e)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){t.submitForm(e)})).catch((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;o.collection("uni-id-permissions").doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),o.collection("uni-id-permissions").doc(t).field("permission_id,permission_name,comment").get().then((function(t){var i=t.result.data[0];i&&(e.formData=i)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=l}).call(this,i("861b")["default"])},"0f3a":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-forms-item[data-v-2c18b432]{position:relative;display:flex;margin-bottom:22px;flex-direction:row}.uni-forms-item__label[data-v-2c18b432]{display:flex;flex-direction:row;align-items:center;text-align:left;font-size:14px;color:#606266;height:36px;padding:0 12px 0 0;vertical-align:middle;flex-shrink:0;box-sizing:border-box}.uni-forms-item__label.no-label[data-v-2c18b432]{padding:0}.uni-forms-item__content[data-v-2c18b432]{position:relative;font-size:14px;flex:1;box-sizing:border-box;flex-direction:row}.uni-forms-item .uni-forms-item__nuve-content[data-v-2c18b432]{display:flex;flex-direction:column;flex:1}.uni-forms-item__error[data-v-2c18b432]{color:#f56c6c;font-size:12px;line-height:1;padding-top:4px;position:absolute;top:100%;left:0;transition:transform .3s;transform:translateY(-100%);opacity:0}.uni-forms-item__error .error-text[data-v-2c18b432]{color:#f56c6c;font-size:12px}.uni-forms-item__error.msg--active[data-v-2c18b432]{opacity:1;transform:translateY(0)}.uni-forms-item.is-direction-left[data-v-2c18b432]{flex-direction:row}.uni-forms-item.is-direction-top[data-v-2c18b432]{flex-direction:column}.uni-forms-item.is-direction-top .uni-forms-item__label[data-v-2c18b432]{padding:0 0 8px;line-height:1.5715;text-align:left;white-space:normal}.uni-forms-item .is-required[data-v-2c18b432]{color:#dd524d;font-weight:700}.uni-forms-item--border[data-v-2c18b432]{margin-bottom:0;padding:10px 0;border-top:1px #eee solid}.uni-forms-item--border .uni-forms-item__content[data-v-2c18b432]{flex-direction:column;justify-content:flex-start;align-items:flex-start}.uni-forms-item--border .uni-forms-item__content .uni-forms-item__error[data-v-2c18b432]{position:relative;top:5px;left:0;padding-top:0}.is-first-border[data-v-2c18b432]{border:none}',""]),t.exports=e},"2bf1":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-forms-item",class:["is-direction-"+t.localLabelPos,t.border?"uni-forms-item--border":"",t.border&&t.isFirstBorder?"is-first-border":""]},[t._t("label",[i("v-uni-view",{staticClass:"uni-forms-item__label",class:{"no-label":!t.label&&!t.required},style:{width:t.localLabelWidth,justifyContent:t.localLabelAlign}},[t.required?i("v-uni-text",{staticClass:"is-required"},[t._v("*")]):t._e(),i("v-uni-text",[t._v(t._s(t.label))])],1)]),i("v-uni-view",{staticClass:"uni-forms-item__content"},[t._t("default"),i("v-uni-view",{staticClass:"uni-forms-item__error",class:{"msg--active":t.msg}},[i("v-uni-text",[t._v(t._s(t.msg))])],1)],2)],2)},r=[]},"33d5":function(t,e,i){"use strict";i.r(e);var n=i("0877"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"48f0":function(t,e,i){"use strict";i.r(e);var n=i("bc54"),r=i("33d5");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("5b66");var o=i("828b"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"2214996a",null,!1,n["a"],void 0);e["default"]=s.exports},"548d":function(t,e,i){var n=i("0f3a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("967d").default;r("e7ed25d4",n,!0,{sourceMap:!1,shadowMode:!1})},"5b66":function(t,e,i){"use strict";var n=i("d7b6"),r=i.n(n);r.a},"6de0":function(t,e,i){"use strict";i.r(e);var n=i("2bf1"),r=i("ede2");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("ad31");var o=i("828b"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"2c18b432",null,!1,n["a"],void 0);e["default"]=s.exports},"70fb":function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.enumConverter=void 0,e.filterToWhere=function(t,e){var i={};for(var n in t){var o=t[n],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(i[n]=new RegExp(l));break;case"select":if(l.length){var u,f=[],d=(0,a.default)(l);try{for(d.s();!(u=d.n()).done;){var c=u.value;f.push(e.eq(c))}}catch(D){d.e(D)}finally{d.f()}i[n]=e.or(f)}break;case"range":if(l.length){var m=l[0],b=l[1];i[n]=e.and([e.gte(m),e.lte(b)])}break;case"date":if(l.length){var h=(0,r.default)(l,2),v=h[0],p=h[1],g=new Date(v),_=new Date(p);i[n]=e.and([e.gte(g),e.lte(_)])}break;case"timestamp":if(l.length){var x=(0,r.default)(l,2),y=x[0],w=x[1];i[n]=e.and([e.gte(y),e.lte(w)])}break}}return i},e.validator=void 0;var r=n(i("5de6")),a=n(i("3471"));i("23f4"),i("7d2f"),i("5c47"),i("9c4e"),i("ab80"),i("aa9c");e.validator={permission_id:{rules:[{required:!0},{format:"string"}],label:"权限标识"},permission_name:{rules:[{required:!0},{format:"string"}],label:"权限名称"},comment:{rules:[{format:"string"}],label:"备注"}};e.enumConverter={}},9487:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,"[data-v-2214996a] .uni-forms-item__label{width:90px!important}",""]),t.exports=e},ad31:function(t,e,i){"use strict";var n=i("548d"),r=i.n(n);r.a},b3a6:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("fcf3")),a=n(i("26347")),o=n(i("39d8")),s=n(i("2fdc"));i("64aa"),i("aa9c"),i("bf0f"),i("2797"),i("dd2b");var l={name:"uniFormsItem",options:{virtualHost:!0},provide:function(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:function(){return null}},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:function(){return{errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"70px",localLabelPos:"left",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg}},watch:{"form.formRules":function(t){this.init()},"form.labelWidth":function(t){this.localLabelWidth=this._labelWidthUnit(t)},"form.labelPosition":function(t){this.localLabelPos=this._labelPosition()},"form.labelAlign":function(t){}},created:function(){var t=this;this.init(!0),this.name&&this.form&&this.$watch((function(){var e=t.form._getDataValue(t.name,t.form.localData);return e}),(function(e,i){var n=t.form._isEqual(e,i);if(!n){var r=t.itemSetValue(e);t.onFieldChange(r,!1)}}),{immediate:!1})},destroyed:function(){this.__isUnmounted||this.unInit()},methods:{setRules:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userRules=t,this.init(!1)},setValue:function(){},onFieldChange:function(t){var e=arguments,i=this;return(0,s.default)((0,a.default)().mark((function n(){var r,s,l,u,f,d,c,m,b,h,v,p;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=!(e.length>1&&void 0!==e[1])||e[1],s=i.form,l=s.formData,s.localData,u=s.errShowType,f=s.validateCheck,d=s.validateTrigger,c=s._isRequiredField,m=s._realName,b=m(i.name),t||(t=i.form.formData[b]),h=i.itemRules.rules&&i.itemRules.rules.length,i.validator&&h&&0!==h){n.next=7;break}return n.abrupt("return");case 7:if(v=c(i.itemRules.rules||[]),p=null,"bind"!==d&&!r){n.next=18;break}return n.next=12,i.validator.validateUpdate((0,o.default)({},b,t),l);case 12:p=n.sent,v||void 0!==t&&""!==t||(p=null),p&&p.errorMessage?("undertext"===u&&(i.errMsg=p?p.errorMessage:""),"toast"===u&&uni.showToast({title:p.errorMessage||"校验错误",icon:"none"}),"modal"===u&&uni.showModal({title:"提示",content:p.errorMessage||"校验错误"})):i.errMsg="",f(p||null),n.next=19;break;case 18:i.errMsg="";case 19:return n.abrupt("return",p||null);case 20:case"end":return n.stop()}}),n)})))()},init:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.form||{},i=e.validator,n=e.formRules,a=e.childrens,o=(e.formData,e.localData),s=e._realName,l=e.labelWidth,u=e._getDataValue;e._setDataValue;if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(l),this.localLabelPos=this._labelPosition(),this.form&&t&&a.push(this),i&&n){this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;var f=s(this.name),d=this.userRules||this.rules;"object"===(0,r.default)(n)&&d&&(n[f]={rules:d},i.updateSchema(n));var c=n[f]||{};this.itemRules=c,this.validator=i,this.itemSetValue(u(this.name,o))}},unInit:function(){var t=this;if(this.form){var e=this.form,i=e.childrens,n=e.formData,r=e._realName;i.forEach((function(e,i){e===t&&(t.form.childrens.splice(i,1),delete n[r(e.name)])}))}},itemSetValue:function(t){var e=this.form._realName(this.name),i=this.itemRules.rules||[],n=this.form._getValue(e,t,i);return this.form._setDataValue(e,this.form.formData,n),n},clearValidate:function(){this.errMsg=""},_isRequired:function(){return this.required},_justifyContent:function(){if(this.form){var t=this.form.labelAlign,e=this.labelAlign?this.labelAlign:t;if("left"===e)return"flex-start";if("center"===e)return"center";if("right"===e)return"flex-end"}return"flex-start"},_labelWidthUnit:function(t){return this.num2px(this.labelWidth?this.labelWidth:t||(this.label?70:"auto"))},_labelPosition:function(){return this.form&&this.form.labelPosition||"left"},isTrigger:function(t,e,i){return"submit"!==t&&t?"bind":void 0===t?"bind"!==e?e?"submit":""===i?"bind":"submit":"bind":"submit"},num2px:function(t){return"number"===typeof t?"".concat(t,"px"):t}}};e.default=l},bc54:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniForms:i("8374").default,uniFormsItem:i("6de0").default,uniEasyinput:i("6a65").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-container"},[i("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[i("uni-forms-item",{attrs:{name:"permission_id",label:"权限ID",required:!0}},[i("uni-easyinput",{attrs:{placeholder:"权限唯一标识，不可修改，不允许重复",trim:"both",disabled:!0},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("permission_id",e.detail.value)}},model:{value:t.formData.permission_id,callback:function(e){t.$set(t.formData,"permission_id",e)},expression:"formData.permission_id"}})],1),i("uni-forms-item",{attrs:{name:"permission_name",label:"权限名称",required:!0}},[i("v-uni-input",{staticClass:"uni-input-border",attrs:{placeholder:"权限名称",trim:"both"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("permission_name",e.detail.value)}},model:{value:t.formData.permission_name,callback:function(e){t.$set(t.formData,"permission_name",e)},expression:"formData.permission_name"}})],1),i("uni-forms-item",{attrs:{name:"comment",label:"备注"}},[i("v-uni-textarea",{staticClass:"uni-textarea-border",attrs:{placeholder:"备注",trim:"both"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("comment",e.detail.value)}},model:{value:t.formData.comment,callback:function(e){t.$set(t.formData,"comment",e)},expression:"formData.comment"}})],1),i("v-uni-view",{staticClass:"uni-button-group"},[i("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.submit")))]),i("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[i("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v(t._s(t.$t("common.button.back")))])],1)],1)],1)],1)},a=[]},d7b6:function(t,e,i){var n=i("9487");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("967d").default;r("1e4f2172",n,!0,{sourceMap:!1,shadowMode:!1})},ede2:function(t,e,i){"use strict";i.r(e);var n=i("b3a6"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a}}]);