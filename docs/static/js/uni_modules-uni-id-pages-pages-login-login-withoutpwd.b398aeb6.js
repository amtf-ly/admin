(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-login-login-withoutpwd"],{"0187":function(n,e,t){"use strict";t.r(e);var i=t("880f"),o=t.n(i);for(var a in i)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=o.a},"067d":function(n,e,t){var i=t("4530");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=t("967d").default;o("067f4ea0",i,!0,{sourceMap:!1,shadowMode:!1})},4530:function(n,e,t){var i=t("c86c");e=i(!1),e.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-2664b80e]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-2664b80e]{padding:0 %?60?%}.login-logo[data-v-2664b80e]{display:none}@media screen and (min-width:690px){.uni-content[data-v-2664b80e]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-2664b80e]{display:flex;justify-content:center}.login-logo uni-image[data-v-2664b80e]{width:60px;height:60px}.register-back[data-v-2664b80e]{display:none}uni-button[data-v-2664b80e]{padding-bottom:1px}}.uni-content uni-view[data-v-2664b80e]{box-sizing:border-box}.title[data-v-2664b80e]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-2664b80e]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-2664b80e]  .uni-easyinput__content,\r\n.input-box[data-v-2664b80e]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-2664b80e]{color:#04498c;cursor:pointer}.uni-content[data-v-2664b80e]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-2664b80e]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-2664b80e]{height:auto!important}@media screen and (min-width:690px){.uni-content[data-v-2664b80e]{height:350px}}.uni-content[data-v-2664b80e],\r\n.quickLogin[data-v-2664b80e]{display:flex;flex-direction:column}.phone-box[data-v-2664b80e]{position:relative;display:flex}.area[data-v-2664b80e]{position:absolute;left:10px;z-index:9;top:12px;font-size:14px}.area[data-v-2664b80e]::after{content:"";border:3px solid transparent;border-top-color:#000;top:12px;left:3px;position:relative}.input-box[data-v-2664b80e]{box-sizing:border-box;flex:1;padding-left:45px;margin-bottom:10px;border-radius:0}.quickLogin[data-v-2664b80e]{height:350px;align-items:center;justify-content:center}.quickLoginBtn[data-v-2664b80e]{margin:20px 0;width:%?450?%;max-width:230px;height:%?82?%}.tip[data-v-2664b80e]{margin-top:-15px;margin-bottom:20px}@media screen and (min-width:690px){.quickLogin[data-v-2664b80e]{height:auto}}',""]),n.exports=e},"4e37":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}));var i={uniIdPagesAgreements:t("906f").default,uniEasyinput:t("6a65").default,uniIdPagesFabLogin:t("fd02").default},o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{staticClass:"uni-content"},[t("v-uni-view",{staticClass:"login-logo"},[t("v-uni-image",{attrs:{src:n.logo}})],1),t("v-uni-text",{staticClass:"title"},[n._v("请选择登录方式")]),["apple","weixin","weixinMobile"].includes(n.type)?[t("v-uni-text",{staticClass:"tip"},[n._v("将根据第三方账号服务平台的授权范围获取你的信息")]),t("v-uni-view",{staticClass:"quickLogin"},["weixinMobile"!==n.type?t("v-uni-image",{staticClass:"quickLoginBtn",attrs:{src:n.imgSrc,mode:"widthFix"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.quickLogin.apply(void 0,arguments)}}}):t("v-uni-button",{staticClass:"uni-btn",attrs:{type:"primary","open-type":"getPhoneNumber"},on:{getphonenumber:function(e){arguments[0]=e=n.$handleEvent(e),n.quickLogin.apply(void 0,arguments)}}},[n._v("微信授权手机号登录")]),t("uni-id-pages-agreements",{ref:"agreements",attrs:{scope:"register"}})],1)]:[t("v-uni-text",{staticClass:"tip"},[n._v("未注册的账号验证通过后将自动注册")]),t("v-uni-view",{staticClass:"phone-box"},[t("v-uni-view",{staticClass:"area",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.chooseArea.apply(void 0,arguments)}}},[n._v("+86")]),t("uni-easyinput",{staticClass:"input-box",attrs:{focus:n.focusPhone,type:"number",inputBorder:!1,maxlength:"11",placeholder:"请输入手机号"},on:{blur:function(e){arguments[0]=e=n.$handleEvent(e),n.focusPhone=!1}},model:{value:n.phone,callback:function(e){n.phone=e},expression:"phone"}})],1),t("uni-id-pages-agreements",{ref:"agreements",attrs:{scope:"register"}}),t("v-uni-button",{staticClass:"uni-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.toSmsPage.apply(void 0,arguments)}}},[n._v("获取验证码")])],t("uni-id-pages-fab-login",{ref:"uniFabLogin"})],2)},a=[]},"880f":function(n,e,t){"use strict";t("6a54");var i=t("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("5c47"),t("0506"),t("4626"),t("8f71"),t("bf0f");var o=i(t("26347")),a=i(t("2fdc")),r=i(t("53cf")),u=i(t("a681")),s={mixins:[u.default],data:function(){return{type:"",phone:"",focusPhone:!1,logo:"/static/logo.png"}},computed:{loginTypes:function(){return(0,a.default)((0,o.default)().mark((function n(){return(0,o.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",r.default.loginTypes);case 1:case"end":return n.stop()}}),n)})))()},isPhone:function(){return/^1\d{10}$/.test(this.phone)},imgSrc:function(){return"weixin"==this.type?"/uni_modules/uni-id-pages/static/login/weixin.png":"/uni_modules/uni-id-pages/static/app-plus/apple.png"}},onLoad:function(n){var e=this;return(0,a.default)((0,o.default)().mark((function t(){var i;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=n.type||r.default.loginTypes[0],e.type=i,"univerify"!=i&&(e.focusPhone=!0),e.$nextTick((function(){["weixin","apple"].includes(i)&&(e.$refs.uniFabLogin.servicesList=e.$refs.uniFabLogin.servicesList.filter((function(n){return n.id!=i})))})),uni.$on("uni-id-pages-setLoginType",(function(n){e.type=n}));case 5:case"end":return t.stop()}}),t)})))()},onShow:function(){var n=this;document.onkeydown=function(e){var t=e||window.event;t&&13==t.keyCode&&n.toSmsPage()}},onUnload:function(){uni.$off("uni-id-pages-setLoginType")},onReady:function(){},methods:{showCurrentWebview:function(){(void 0).setStyle({top:0})},quickLogin:function(n){var e,t,i={};null!==(e=n.detail)&&void 0!==e&&e.code&&(i.phoneNumberCode=n.detail.code),("weixinMobile"!==this.type||null!==(t=n.detail)&&void 0!==t&&t.code)&&this.$refs.uniFabLogin.login_before(this.type,!0,i)},toSmsPage:function(){return this.isPhone?this.needAgreements&&!this.agree?this.$refs.agreements.popup(this.toSmsPage):void uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-smscode?phoneNumber="+this.phone}):(this.focusPhone=!0,uni.showToast({title:"手机号码格式不正确",icon:"none",duration:3e3}))},toPwdLogin:function(){uni.navigateTo({url:"../login/password"})},chooseArea:function(){uni.showToast({title:"暂不支持其他国家",icon:"none",duration:3e3})}}};e.default=s},a143:function(n,e,t){"use strict";var i=t("067d"),o=t.n(i);o.a},f02a:function(n,e,t){"use strict";t.r(e);var i=t("4e37"),o=t("0187");for(var a in o)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(a);t("a143");var r=t("828b"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"2664b80e",null,!1,i["a"],void 0);e["default"]=u.exports}}]);