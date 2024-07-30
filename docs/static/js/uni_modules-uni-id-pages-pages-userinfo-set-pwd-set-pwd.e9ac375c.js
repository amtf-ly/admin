(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-userinfo-set-pwd-set-pwd"],{3324:function(t,n,a){var e=a("c86c");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-0911c8e7]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-0911c8e7]{padding:0 %?60?%}.login-logo[data-v-0911c8e7]{display:none}@media screen and (min-width:690px){.uni-content[data-v-0911c8e7]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-0911c8e7]{display:flex;justify-content:center}.login-logo uni-image[data-v-0911c8e7]{width:60px;height:60px}.register-back[data-v-0911c8e7]{display:none}uni-button[data-v-0911c8e7]{padding-bottom:1px}}.uni-content uni-view[data-v-0911c8e7]{box-sizing:border-box}.title[data-v-0911c8e7]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-0911c8e7]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-0911c8e7]  .uni-easyinput__content,\r\n.input-box[data-v-0911c8e7]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-0911c8e7]{color:#04498c;cursor:pointer}.uni-content[data-v-0911c8e7]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-0911c8e7]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-0911c8e7]{height:auto!important}.uni-btn[type="default"][data-v-0911c8e7]{color:inherit!important}.uni-content[data-v-0911c8e7]  .uni-forms-item{margin-bottom:10px}.popup-captcha[data-v-0911c8e7]{display:flex;padding:%?20?%;background-color:#fff;border-radius:2px;flex-direction:column;position:relative}.popup-captcha .title[data-v-0911c8e7]{font-weight:400;padding:0;padding-bottom:15px;color:#666}.popup-captcha .close[data-v-0911c8e7]{position:absolute;bottom:-40px;margin-left:-13px;left:50%}.popup-captcha .uni-btn[data-v-0911c8e7]{margin:0}',""]),t.exports=n},"5ec0":function(t,n,a){"use strict";(function(t){a("6a54");var e=a("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("5c47"),a("0506"),a("bf0f");var o=e(a("e2cb")),i=a("08ea"),s=e(a("53cf")),r=t.importObject("uni-id-co",{customUI:!0}),c={name:"set-pwd.vue",data:function(){return{uniIdRedirectUrl:"",loginType:"",logo:"/static/logo.png",focusNewPassword:!1,focusNewPassword2:!1,allowSkip:!1,formData:{code:"",captcha:"",newPassword:"",newPassword2:""},rules:o.default.getPwdRules("newPassword","newPassword2")}},computed:{userInfo:function(){return i.store.userInfo}},onReady:function(){this.$refs.form.setRules(this.rules)},onLoad:function(t){var n;this.uniIdRedirectUrl=t.uniIdRedirectUrl,this.loginType=t.loginType,s.default.setPasswordAfterLogin&&null!==(n=s.default.setPasswordAfterLogin)&&void 0!==n&&n.allowSkip&&(this.allowSkip=!0)},methods:{submit:function(){var t=this;if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsCode.focusSmsCodeInput=!0,uni.showToast({title:"验证码格式不正确",icon:"none"});this.$refs.form.validate().then((function(n){r.setPwd({password:t.formData.newPassword,code:t.formData.code,captcha:t.formData.captcha}).then((function(n){uni.showModal({content:"密码设置成功",showCancel:!1,success:function(){i.mutations.loginBack({uniIdRedirectUrl:t.uniIdRedirectUrl,loginType:t.loginType})}})})).catch((function(t){uni.showModal({content:t.message,showCancel:!1})}))})).catch((function(n){"uni-id-captcha-required"==n.errCode&&t.$refs.popup.open()})).finally((function(n){t.formData.captcha=""}))},skip:function(){i.mutations.loginBack({uniIdRedirectUrl:this.uniIdRedirectUrl})}}};n.default=c}).call(this,a("861b")["default"])},"6a6b":function(t,n,a){"use strict";a.r(n);var e=a("5ec0"),o=a.n(e);for(var i in e)["default"].indexOf(i)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},"835b":function(t,n,a){"use strict";var e=a("acd3"),o=a.n(e);o.a},"94c4":function(t,n,a){"use strict";a.r(n);var e=a("b862"),o=a("6a6b");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(n,t,(function(){return o[t]}))}(i);a("835b");var s=a("828b"),r=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"0911c8e7",null,!1,e["a"],void 0);n["default"]=r.exports},acd3:function(t,n,a){var e=a("3324");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("967d").default;o("7ac20116",e,!0,{sourceMap:!1,shadowMode:!1})},b862:function(t,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var e={uniMatchMedia:a("9897").default,uniForms:a("8374").default,uniFormsItem:a("6de0").default,uniEasyinput:a("6a65").default,uniIdPagesSmsForm:a("3ae5").default,uniPopupCaptcha:a("d533").default},o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"uni-content"},[a("uni-match-media",{attrs:{"min-width":690}},[a("v-uni-view",{staticClass:"login-logo"},[a("v-uni-image",{attrs:{src:t.logo}})],1),a("v-uni-text",{staticClass:"title title-box "},[t._v("设置密码")])],1),a("uni-forms",{ref:"form",staticClass:"set-password-form",attrs:{value:t.formData,"err-show-type":"toast"}},[a("v-uni-text",{staticClass:"tip"},[t._v("输入密码")]),a("uni-forms-item",{attrs:{name:"newPassword"}},[a("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusNewPassword,type:"password",inputBorder:!1,placeholder:"请输入密码"},on:{blur:function(n){arguments[0]=n=t.$handleEvent(n),t.focusNewPassword=!1}},model:{value:t.formData.newPassword,callback:function(n){t.$set(t.formData,"newPassword",n)},expression:"formData.newPassword"}})],1),a("v-uni-text",{staticClass:"tip"},[t._v("再次输入密码")]),a("uni-forms-item",{attrs:{name:"newPassword2"}},[a("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusNewPassword2,type:"password",inputBorder:!1,placeholder:"请再次输入新密码"},on:{blur:function(n){arguments[0]=n=t.$handleEvent(n),t.focusNewPassword2=!1}},model:{value:t.formData.newPassword2,callback:function(n){t.$set(t.formData,"newPassword2",n)},expression:"formData.newPassword2"}})],1),a("uni-id-pages-sms-form",{ref:"smsCode",attrs:{type:"set-pwd-by-sms",phone:t.userInfo.mobile},model:{value:t.formData.code,callback:function(n){t.$set(t.formData,"code",n)},expression:"formData.code"}}),a("v-uni-view",{staticClass:"link-box"},[a("v-uni-button",{staticClass:"uni-btn send-btn",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v("确认")]),t.allowSkip?a("v-uni-button",{staticClass:"uni-btn send-btn",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.skip.apply(void 0,arguments)}}},[t._v("跳过")]):t._e()],1)],1),a("uni-popup-captcha",{ref:"popup",attrs:{scene:"set-pwd-by-sms"},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}},model:{value:t.formData.captcha,callback:function(n){t.$set(t.formData,"captcha",n)},expression:"formData.captcha"}})],1)},i=[]}}]);