(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-login-login-withoutpwd~uni_modules-uni-id-pages-pages-login-login-withpwd"],{"29e8":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"fab-login-box"},e._l(e.servicesList,(function(t,i){return n("v-uni-view",{key:i,staticClass:"item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),t.path?e.toPage(t.path):e.login_before(t.id,!1)}}},[n("v-uni-image",{staticClass:"logo",attrs:{src:t.logo,mode:"scaleToFill"}}),n("v-uni-text",{staticClass:"login-title"},[e._v(e._s(t.text))])],1)})),1)],1)},o=[]},4725:function(e,t,n){"use strict";n.r(t);var i=n("a731"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},9914:function(e,t,n){var i=n("c4f7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("967d").default;o("7a5ca03e",i,!0,{sourceMap:!1,shadowMode:!1})},a731:function(e,t,n){"use strict";(function(e){n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("8f71"),n("bf0f"),n("4626"),n("5ac7"),n("2797"),n("aa9c"),n("5c47"),n("a1c1"),n("2c10"),n("c223"),n("0c26"),n("d4b5");var o=i(n("9b1b")),a=i(n("26347")),r=i(n("2fdc")),u=i(n("53cf")),s=n("08ea"),c={computed:{agreements:function(){if(!u.default.agreements)return[];var e=u.default.agreements,t=e.serviceUrl,n=e.privacyUrl;return[{url:t,title:"用户服务协议"},{url:n,title:"隐私政策条款"}]},agree:{get:function(){return this.getParentComponent().agree},set:function(e){return this.getParentComponent().agree=e}}},data:function(){return{servicesList:[{id:"username",text:"账号登录",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/user.png",path:"/uni_modules/uni-id-pages/pages/login/login-withpwd"},{id:"smsCode",text:"短信验证码",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/sms.png",path:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=smsCode"},{id:"weixin",text:"微信登录",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/weixin.png"},{id:"apple",text:"苹果登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/apple.png"},{id:"univerify",text:"一键登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/univerify.png"},{id:"taobao",text:"淘宝登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/taobao.png"},{id:"facebook",text:"脸书登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/facebook.png"},{id:"alipay",text:"支付宝登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/alipay.png"},{id:"qq",text:"QQ登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/qq.png"},{id:"google",text:"谷歌登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/google.png"},{id:"douyin",text:"抖音登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/douyin.png"},{id:"sinaweibo",text:"新浪微博",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/sinaweibo.png"}],univerifyStyle:{fullScreen:!0,backgroundColor:"#ffffff",buttons:{iconWidth:"45px",list:[]},privacyTerms:{defaultCheckBoxState:!1,textColor:"#BBBBBB",termsColor:"#5496E3",prefix:"我已阅读并同意",suffix:"并使用本机号码登录",privacyItems:[]}}}},watch:{agree:function(e){this.univerifyStyle.privacyTerms.defaultCheckBoxState=e}},created:function(){var e=this;return(0,r.default)((0,a.default)().mark((function t(){var n,i;return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.servicesList,i=u.default.loginTypes,n=n.filter((function(e){return"apple"!=e.id&&i.includes(e.id)})),i.includes("univerify")&&(e.univerifyStyle.privacyTerms.privacyItems=e.agreements,n.forEach((function(t){var n=t.id,i=t.logo,o=t.path;"univerify"!=n&&e.univerifyStyle.buttons.list.push({iconPath:i,provider:n,path:o})}))),e.servicesList=n.filter((function(t){var n=t.path?t.path.split("?")[0]:"";return n!=e.getRoute(1)}));case 5:case"end":return t.stop()}}),t)})))()},methods:{getParentComponent:function(){return this.$parent.$parent},setUserInfo:function(e){},getRoute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=getCurrentPages();return e>t.length?"":"/"+t[t.length-e].route},toPage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.getRoute(1)==e.split("?")[0]&&"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"==this.getRoute(1)){var n=e.split("?")[1].split("=")[1];uni.$emit("uni-id-pages-setLoginType",n)}else this.getRoute(2)==e?uni.navigateBack():this.getRoute(1)!=e&&(0===t?uni.navigateTo({url:e,animationType:"slide-in-left",complete:function(e){}}):uni.redirectTo({url:e,animationType:"slide-in-left",complete:function(e){}}))},login_before:function(e){var t=arguments,n=this;return(0,r.default)((0,a.default)().mark((function i(){var o,s,c,l,d,p,f,g,h,v,m;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(s=!(t.length>1&&void 0!==t[1])||t[1],c=t.length>2&&void 0!==t[2]?t[2]:{},!["qq","xiaomi","sinaweibo","taobao","facebook","google","alipay","douyin"].includes(e)){i.next=5;break}return i.abrupt("return",uni.showToast({title:"该登录方式暂未实现，欢迎提交pr",icon:"none",duration:3e3}));case 5:if(!["univerify","apple"].includes(e)){i.next=7;break}return i.abrupt("return",uni.showToast({title:"当前设备不支持此登录，请选择其他登录方式",icon:"none",duration:3e3}));case 7:if(l=((null===u.default||void 0===u.default||null===(o=u.default.agreements)||void 0===o?void 0:o.scope)||[]).includes("register"),"univerify"==e||!l||n.agree){i.next=11;break}return d=n.getParentComponent().$refs.agreements,i.abrupt("return",d.popup((function(){n.login_before(e,s,c)})));case 11:if("weixin"!=e){i.next=20;break}if("/admin/",p=location.protocol+"//"+location.host+"/admin/".replace(/\/$/,"")+(window.location.href.includes("#")?"/#":"")+"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?is_weixin_redirect=true&type=weixin",f=window.navigator.userAgent.toLowerCase(),"micromessenger"!=f.match(/MicroMessenger/i)){i.next=19;break}return i.abrupt("return",window.open("https://open.weixin.qq.com/connect/oauth2/authorize?\n\t\t\t\t\t\t\t\t\t\tappid=".concat(u.default.appid.weixin.h5,"\n\t\t\t\t\t\t\t\t\t\t&redirect_uri=").concat(encodeURIComponent(p),"\n\t\t\t\t\t\t\t\t\t\t&response_type=code\n\t\t\t\t\t\t\t\t\t\t&scope=snsapi_userinfo\n\t\t\t\t\t\t\t\t\t\t&state=STATE&connect_redirect=1#wechat_redirect")));case 19:return i.abrupt("return",location.href="https://open.weixin.qq.com/connect/qrconnect?appid=".concat(u.default.appid.weixin.web,"\n\t\t\t\t\t\t\t\t\t\t\t&redirect_uri=").concat(encodeURIComponent(p),"\n\t\t\t\t\t\t\t\t\t\t\t&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect"));case 20:if(uni.showLoading({mask:!0}),"univerify"!=e){i.next=28;break}return g=function(){uni.hideLoading(),h.close(),h.offButtonsClick(m)},h=uni.getUniverifyManager(),v=!1,m=function(){var e=(0,r.default)((0,a.default)().mark((function e(t){var i,o;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return v=!0,e.next=4,uni.getCheckBoxState();case 4:i=e.sent,n.agree=i[1].state,o=n.univerifyStyle.buttons.list[t.index].path,o?(n.getRoute(1).includes("login-withoutpwd")&&o.includes("login-withoutpwd")&&n.getParentComponent().showCurrentWebview(),n.toPage(o,1),g()):n.agree?(g(),setTimeout((function(){n.login_before(t.provider)}),500)):uni.showToast({title:"你未同意隐私政策协议",icon:"none",duration:3e3});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h.onButtonsClick(m),i.abrupt("return",h.login({univerifyStyle:n.univerifyStyle,success:function(e){n.login(e.authResult,"univerify")},fail:function(e){v||uni.navigateBack()},complete:function(){var e=(0,r.default)((0,a.default)().mark((function e(t){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.hideLoading(),h.offButtonsClick(m);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}));case 28:if("weixinMobile"!==e){i.next=30;break}return i.abrupt("return",n.login({phoneCode:c.phoneNumberCode},e));case 30:uni.login({provider:e,onlyAuthorize:!0,success:function(){var t=(0,r.default)((0,a.default)().mark((function t(i){var o;return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("apple"!=e){t.next=6;break}return t.next=3,n.getUserInfo({provider:"apple"});case 3:o=t.sent,Object.assign(i.authResult,o.userInfo),uni.hideLoading();case 6:n.login("weixin"==e?{code:i.code}:i.authResult,e);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),fail:function(){var e=(0,r.default)((0,a.default)().mark((function e(t){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.hideLoading();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});case 31:case"end":return i.stop()}}),i)})))()},login:function(t,n){var i="loginBy"+n.trim().replace(n[0],n[0].toUpperCase()),o=e.importObject("uni-id-co",{customUI:!0});o[i](t).then((function(e){uni.showToast({title:"登录成功",icon:"none",duration:2e3}),e.loginType=n,s.mutations.loginSuccess(e)})).catch((function(e){uni.showModal({content:e.message,confirmText:"知道了",showCancel:!1})})).finally((function(e){"univerify"==n&&uni.closeAuthView(),uni.hideLoading()}))},getUserInfo:function(e){return(0,r.default)((0,a.default)().mark((function t(){return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){uni.getUserInfo((0,o.default)((0,o.default)({},e),{},{success:function(e){t(e)},fail:function(e){uni.showModal({content:JSON.stringify(e),showCancel:!1}),n(e)}}))})));case 1:case"end":return t.stop()}}),t)})))()}}};t.default=c}).call(this,n("861b")["default"])},c4f7:function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.fab-login-box[data-v-10c08e46],\r\n.item[data-v-10c08e46]{display:flex;box-sizing:border-box;flex-direction:column}.fab-login-box[data-v-10c08e46]{flex-direction:row;flex-wrap:wrap;width:%?750?%;justify-content:space-around;position:fixed;left:0}.item[data-v-10c08e46]{flex-direction:column;justify-content:center;align-items:center;height:%?200?%;cursor:pointer}@media screen and (min-width:690px){.fab-login-box[data-v-10c08e46]{max-width:500px;margin-left:calc(50% - 250px)}.item[data-v-10c08e46]{height:%?160?%}}@media screen and (max-width:690px){.fab-login-box[data-v-10c08e46]{bottom:%?10?%}}.logo[data-v-10c08e46]{width:%?60?%;height:%?60?%;max-width:40px;max-height:40px;border-radius:100%;border:solid 1px #f6f6f6}.login-title[data-v-10c08e46]{text-align:center;margin-top:6px;color:#999;font-size:10px;width:70px}',""]),e.exports=t},fd02:function(e,t,n){"use strict";n.r(t);var i=n("29e8"),o=n("4725");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("fd17");var r=n("828b"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"10c08e46",null,!1,i["a"],void 0);t["default"]=u.exports},fd17:function(e,t,n){"use strict";var i=n("9914"),o=n.n(i);o.a}}]);