(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-userinfo-cropImage-cropImage"],{"0829":function(t,i,e){"use strict";var a=e("8bdb"),n=e("ea07").entries;a({target:"Object",stat:!0},{entries:function(t){return n(t)}})},1173:function(t,i,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("e5cd")),o={components:{limeClipper:n.default},data:function(){return{path:"",options:{width:600,height:600}}},onLoad:function(t){var i=t.path,e=t.options;this.path=i,e&&(this.options=JSON.parse(e))},methods:{successFn:function(t){this.getOpenerEventChannel().emit("success",t.url),uni.navigateBack()},cancel:function(){uni.navigateBack()}}};i.default=o},1757:function(t,i,e){t.exports=e.p+"static/img/rotate.e0dadbe4.svg"},"24e3":function(t,i,e){"use strict";e.r(i);var a=e("d0ea"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"464a":function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.calcImageOffset=function(t,i){var e=t.imageLeft,a=t.imageTop;i=i||t.scale;var n=t.imageWidth,o=t.imageHeight;t.angle/90%2&&(n=t.imageHeight,o=t.imageWidth);var c=t.clipX,s=t.clipWidth,l=t.clipY,h=t.clipHeight,r=function(t){return t*i/2},p=r(n),u=r(o);return e=c+p>=e?e:c+p,e=c+s-p<=e?e:c+s-p,a=l+u>=a?a:l+u,a=l+h-u<=a?a:l+h-u,{left:e,top:a,scale:i}},i.calcImageScale=function(t,i){i=i||t.scale;var e=t.imageWidth,a=t.imageHeight,n=t.clipWidth,o=t.clipHeight,c=t.angle;c/90%2&&(e=a,a=e);e*i<n&&(i=n/e);a*i<o&&(i=Math.max(i,o/a));return i},i.calcImageSize=function(t,i,e){var a=t,n=i,o=e.clipWidth,c=e.clipHeight,s=e.sysinfo,l=e.width,h=e.height;if(a&&n)a/n>(o||l)/(o||h)?(n=c||h,a=t/i*n):(a=o||l,n=i/t*a);else{var r=s||uni.getSystemInfoSync();a=r.windowWidth,n=0}return{imageWidth:a,imageHeight:n}},i.calcPythagoreanTheorem=function(t,i){return Math.sqrt(Math.pow(t,2)+Math.pow(i,2))},i.clipTouchMoveOfCalculate=function(t,i){var e=i.touches[0].clientX,a=i.touches[0].clientY,n=t.clipWidth,o=t.clipHeight,c=t.clipY,s=t.clipX,l=t.clipStart,h=t.isLockRatio,r=t.maxWidth,p=t.minWidth,u=t.maxHeight,f=t.minHeight;r/=2,p/=2,f/=2,u/=2;var d=n,g=o,m=c,v=s,w=function(){return function(){d=d<=r?d>=p?d:p:r,g=g<=u?g>=f?g:f:u}(),!(d>r||d<p||g>u||g<f)||!h};switch(g=l.height+(l.corner>1&&l.corner<4?1:-1)*(l.y-a),l.corner){case 1:if(d=l.width-l.x+e,h&&(g=d/(n/o)),!w())return;break;case 2:if(d=l.width-l.x+e,h&&(g=d/(n/o)),!w())return;m=l.clipY-(g-l.height);break;case 3:if(d=l.width+l.x-e,h&&(g=d/(n/o)),!w())return;m=l.clipY-(g-l.height),v=l.clipX-(d-l.width);break;case 4:if(d=l.width+l.x-e,h&&(g=d/(n/o)),!w())return;v=l.clipX-(d-l.width);break;default:break}return{width:d,height:g,clipX:v,clipY:m}},i.determineDirection=function(t,i,e,a,n,o){var c,s=[t+e/2,i+a/2],l=[n,o];l[0]<=s[0]&&l[1]<=s[1]?c=3:l[0]>=s[0]&&l[1]<=s[1]?c=2:l[0]<=s[0]&&l[1]>=s[1]?c=4:l[0]>=s[0]&&l[1]>=s[1]&&(c=1);return c},i.imageTouchMoveOfCalcOffset=function(t,i,e){var a=i-t.touchRelative[0].x,n=e-t.touchRelative[0].y;return{left:a,top:n}}},"4af7":function(t,i,e){var a=e("c86c");i=a(!1),i.push([t.i,'.flex-auto[data-v-fa9bca3c]{flex:auto}.bg-transparent[data-v-fa9bca3c]{background-color:rgba(0,0,0,.9);transition-duration:.35s}.l-clipper[data-v-fa9bca3c]{width:100vw;height:calc(100vh - var(--window-top));background-color:rgba(0,0,0,.9);position:fixed;top:var(--window-top);left:0;z-index:1}.l-clipper-mask[data-v-fa9bca3c]{position:relative;z-index:2;pointer-events:none}.l-clipper__content[data-v-fa9bca3c]{pointer-events:none;position:absolute;border:%?1?% solid hsla(0,0%,100%,.3);box-sizing:border-box;box-shadow:rgba(0,0,0,.5) 0 0 0 80vh;background:transparent}.l-clipper__content[data-v-fa9bca3c]::before,\r\n.l-clipper__content[data-v-fa9bca3c]::after{content:"";position:absolute;border:%?1?% dashed hsla(0,0%,100%,.3)}.l-clipper__content[data-v-fa9bca3c]::before{width:100%;top:33.33%;height:33.33%;border-left:none;border-right:none}.l-clipper__content[data-v-fa9bca3c]::after{width:33.33%;left:33.33%;height:100%;border-top:none;border-bottom:none}.l-clipper__edge[data-v-fa9bca3c]{position:absolute;width:%?34?%;height:%?34?%;border:%?6?% solid #fff;pointer-events:auto}.l-clipper__edge[data-v-fa9bca3c]::before{content:"";position:absolute;width:%?40?%;height:%?40?%;background-color:initial}.l-clipper__edge[data-v-fa9bca3c]:nth-child(1){left:%?-6?%;top:%?-6?%;border-bottom-width:0!important;border-right-width:0!important}.l-clipper__edge[data-v-fa9bca3c]:nth-child(1):before{top:-50%;left:-50%}.l-clipper__edge[data-v-fa9bca3c]:nth-child(2){right:%?-6?%;top:%?-6?%;border-bottom-width:0!important;border-left-width:0!important}.l-clipper__edge[data-v-fa9bca3c]:nth-child(2):before{top:-50%;left:50%}.l-clipper__edge[data-v-fa9bca3c]:nth-child(3){left:%?-6?%;bottom:%?-6?%;border-top-width:0!important;border-right-width:0!important}.l-clipper__edge[data-v-fa9bca3c]:nth-child(3):before{bottom:-50%;left:-50%}.l-clipper__edge[data-v-fa9bca3c]:nth-child(4){right:%?-6?%;bottom:%?-6?%;border-top-width:0!important;border-left-width:0!important}.l-clipper__edge[data-v-fa9bca3c]:nth-child(4):before{bottom:-50%;left:50%}.l-clipper-image[data-v-fa9bca3c]{width:100%;border-style:none;position:absolute;top:0;left:0;z-index:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:center}.l-clipper-canvas[data-v-fa9bca3c]{position:fixed;z-index:10;left:-200vw;top:-200vw;pointer-events:none}.l-clipper-tools[data-v-fa9bca3c]{position:fixed;left:0;bottom:10px;width:100%;z-index:99;color:#fff}.l-clipper-tools__btns[data-v-fa9bca3c]{font-weight:700;display:flex;align-items:center;justify-content:space-between;width:100%;padding:%?20?% %?40?%;box-sizing:border-box}.l-clipper-tools__btns .cancel[data-v-fa9bca3c]{width:%?112?%;height:%?60?%;text-align:center;line-height:%?60?%}.l-clipper-tools__btns .confirm[data-v-fa9bca3c]{width:%?112?%;height:%?60?%;line-height:%?60?%;background-color:#07c160;border-radius:%?6?%;text-align:center}.l-clipper-tools__btns uni-image[data-v-fa9bca3c]{display:block;width:%?60?%;height:%?60?%}.l-clipper-tools__btns[data-v-fa9bca3c]{flex-direction:row}',""]),t.exports=i},"5fe6":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"l-clipper",class:{open:t.value},style:"z-index: "+t.zIndex+";"+t.customStyle,attrs:{"disable-scroll":!0}},[a("v-uni-view",{staticClass:"l-clipper-mask",on:{touchstart:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.clipTouchStart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.clipTouchMove.apply(void 0,arguments)},touchend:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.clipTouchEnd.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"l-clipper__content",style:t.clipStyle},t._l([0,0,0,0],(function(t,i){return a("v-uni-view",{key:i,staticClass:"l-clipper__edge"})})),1)],1),t.image?a("v-uni-image",{staticClass:"l-clipper-image",style:t.imageStyle,attrs:{src:t.image,mode:"auto"==t.imageWidth?"widthFix":""},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.imageLoad.apply(void 0,arguments)},load:function(i){arguments[0]=i=t.$handleEvent(i),t.imageLoad.apply(void 0,arguments)},touchstart:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.imageTouchStart.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.imageTouchMove.apply(void 0,arguments)},touchend:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.imageTouchEnd.apply(void 0,arguments)}}}):t._e(),a("v-uni-canvas",{staticClass:"l-clipper-canvas",style:"width: "+t.canvasWidth*t.scaleRatio+"px; height:"+t.canvasHeight*t.scaleRatio+"px;",attrs:{"canvas-id":t.canvasId,id:"l-clipper","disable-scroll":!0}}),a("v-uni-view",{staticClass:"l-clipper-tools"},[a("v-uni-view",{staticClass:"l-clipper-tools__btns"},[t.isShowCancelBtn?a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancel.apply(void 0,arguments)}}},[t.$slots.cancel?t._t("cancel"):a("v-uni-view",{staticClass:"cancel"},[t._v("取消")])],2):t._e(),t.isShowPhotoBtn?a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.uploadImage.apply(void 0,arguments)}}},[t.$slots.photo?t._t("photo"):a("v-uni-image",{attrs:{src:e("9083")}})],2):t._e(),t.isShowRotateBtn?a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rotate.apply(void 0,arguments)}}},[t.$slots.rotate?t._t("rotate"):a("v-uni-image",{attrs:{src:e("1757"),"data-type":"inverse"}})],2):t._e(),t.isShowConfirmBtn?a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.confirm.apply(void 0,arguments)}}},[t.$slots.confirm?t._t("confirm"):a("v-uni-view",{staticClass:"confirm"},[t._v("确定")])],2):t._e()],1),t._t("default")],2)],1)},n=[]},"6cd0":function(t,i,e){var a=e("9db5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("967d").default;n("0fe947af",a,!0,{sourceMap:!1,shadowMode:!1})},"804b":function(t,i,e){"use strict";var a=e("89c2"),n=e.n(a);n.a},"89c2":function(t,i,e){var a=e("4af7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("967d").default;n("6ec89d46",a,!0,{sourceMap:!1,shadowMode:!1})},9083:function(t,i,e){t.exports=e.p+"static/img/photo.bb72ed3e.svg"},"951e":function(t,i,e){"use strict";var a=e("6cd0"),n=e.n(a);n.a},"9db5":function(t,i,e){var a=e("c86c");i=a(!1),i.push([t.i,".box[data-v-3b44c846]{width:%?400?%}.mt[data-v-3b44c846]{margin-top:-10px}",""]),t.exports=i},c08f:function(t,i,e){"use strict";e.r(i);var a=e("1173"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},c391:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("limeClipper",{attrs:{width:t.options.width,"scale-ratio":2,"is-lock-width":!1,"is-lock-height":!1,height:t.options.height,"image-url":t.path},on:{success:function(i){arguments[0]=i=t.$handleEvent(i),t.successFn.apply(void 0,arguments)},cancel:function(i){arguments[0]=i=t.$handleEvent(i),t.cancel.apply(void 0,arguments)}}})],1)},n=[]},d0ea:function(t,i,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("26347")),o=a(e("2fdc"));e("64aa"),e("c223"),e("bf0f"),e("2797"),e("dc8a"),e("0829"),e("fd3c");var c=e("464a"),s={},l={name:"l-clipper",props:{value:{type:Boolean,default:!0},customStyle:{type:String},canvasId:{type:String,default:"l-clipper"},zIndex:{type:Number,default:99},imageUrl:{type:String},fileType:{type:String,default:"png"},quality:{type:Number,default:1},width:{type:Number,default:400},height:{type:Number,default:400},minWidth:{type:Number,default:200},maxWidth:{type:Number,default:600},minHeight:{type:Number,default:200},maxHeight:{type:Number,default:600},isLockWidth:{type:Boolean,default:!1},isLockHeight:{type:Boolean,default:!1},isLockRatio:{type:Boolean,default:!0},scaleRatio:{type:Number,default:1},minRatio:{type:Number,default:.5},maxRatio:{type:Number,default:2},isDisableScale:{type:Boolean,default:!1},isDisableRotate:{type:Boolean,default:!1},isLimitMove:{type:Boolean,default:!1},isShowPhotoBtn:{type:Boolean,default:!0},isShowRotateBtn:{type:Boolean,default:!0},isShowConfirmBtn:{type:Boolean,default:!0},isShowCancelBtn:{type:Boolean,default:!0},rotateAngle:{type:Number,default:90},source:{type:Object,default:function(){return{album:"从相册中选择",camera:"拍照"}}}},data:function(){return{canvasWidth:0,canvasHeight:0,clipX:0,clipY:0,clipWidth:0,clipHeight:0,animation:!1,imageWidth:0,imageHeight:0,imageTop:0,imageLeft:0,scale:1,angle:0,image:this.imageUrl,sysinfo:{},throttleTimer:null,throttleFlag:!0,timeClipCenter:null,flagClipTouch:!1,flagEndTouch:!1,clipStart:{},animationTimer:null,touchRelative:[{x:0,y:0}],hypotenuseLength:0,ctx:null}},computed:{clipStyle:function(){var t=this.clipWidth,i=this.clipHeight,e=this.clipY,a=this.clipX,n=this.animation;return"\n\t\t\twidth: ".concat(t,"px;\n\t\t\theight:").concat(i,"px;\n\t\t\ttransition-property: ").concat(n?"":"background",";\n\t\t\tleft: ").concat(a,"px;\n\t\t\ttop: ").concat(e,"px\n\t\t\t")},imageStyle:function(){var t=this.imageWidth,i=this.imageHeight,e=this.imageLeft,a=this.imageTop,n=this.animation,o=this.scale,c=this.angle;return"\n\t\t\t\twidth: ".concat(t?t+"px":"auto",";\n\t\t\t\theight: ").concat(i?i+"px":"auto",";\n\t\t\t\ttransform: translate3d(").concat(e-t/2,"px, ").concat(a-i/2,"px, 0) scale(").concat(o,") rotate(").concat(c,"deg);\n\t\t\t\ttransition-duration: ").concat(n?.35:0,"s\n\t\t\t")},clipSize:function(){var t=this.clipWidth,i=this.clipHeight;return{clipWidth:t,clipHeight:i}},clipPoint:function(){var t=this.clipY,i=this.clipX;return{clipY:t,clipX:i}}},watch:{value:function(t){if(t){if(this.imageUrl){var i=(null===s||void 0===s?void 0:s[this.imageUrl])||{},e=i.imageWidth,a=i.imageHeight,n=i.imageLeft,o=i.imageTop,c=i.scale,l=i.clipX,h=i.clipY,r=i.clipWidth,p=i.clipHeight,u=i.path;u!=this.image?this.image=this.imageUrl:this.setDiffData({imageWidth:e,imageHeight:a,imageLeft:n,imageTop:o,scale:c,clipX:l,clipY:h,clipWidth:r,clipHeight:p})}}else this.animation=0,this.angle=0},imageUrl:function(t){this.image=t},image:{handler:function(){var t=(0,o.default)((0,n.default)().mark((function t(i){return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getImageInfo(i);case 1:case"end":return t.stop()}}),t,this)})));return function(i){return t.apply(this,arguments)}}()},clipSize:function(t){var i=t.widthVal,e=t.heightVal,a=this.minWidth,n=this.minHeight;a/=2,n/=2,i<a&&this.setDiffData({clipWidth:a}),e<n&&this.setDiffData({clipHeight:n}),this.calcClipSize()},angle:function(t){this.animation=!0,this.moveStop();var i=this.isLimitMove;i&&t%90&&this.setDiffData({angle:90*Math.round(t/90)}),this.imgMarginDetectionScale()},animation:function(t){var i=this;if(clearTimeout(this.animationTimer),t){var e=setTimeout((function(){i.setDiffData({animation:!1})}),260);this.setDiffData({animationTimer:e}),this.animationTimer=e}},isLimitMove:function(t){t&&(this.angle%90&&this.setDiffData({angle:90*Math.round(this.angle/90)}),this.imgMarginDetectionScale())},clipPoint:function(){this.cutDetectionPosition()},width:function(t,i){t!==i&&this.setDiffData({clipWidth:t/2})},height:function(t,i){t!==i&&this.setDiffData({clipHeight:t/2})}},mounted:function(){var t=uni.getSystemInfoSync();this.sysinfo=t,this.setClipInfo(),this.image&&this.getImageInfo(this.image),this.setClipCenter(),this.calcClipSize(),this.cutDetectionPosition()},methods:{setDiffData:function(t){var i=this;Object.keys(t).forEach((function(e){i[e]!==t[e]&&(i[e]=t[e])}))},getImageInfo:function(t){var i=this;t&&(this.value&&uni.showLoading({title:"请稍候...",mask:!0}),uni.getImageInfo({src:t,success:function(e){i.imgComputeSize(e.width,e.height),i.image=e.path,i.isLimitMove&&(i.imgMarginDetectionScale(),i.$emit("ready",e));var a=i.imageWidth,n=i.imageHeight,o=i.imageLeft,c=i.imageTop,l=i.scale,h=i.clipX,r=i.clipY,p=i.clipWidth,u=i.clipHeight;s[t]=Object.assign(e,{imageWidth:a,imageHeight:n,imageLeft:o,imageTop:c,scale:l,clipX:h,clipY:r,clipWidth:p,clipHeight:u})},fail:function(t){i.imgComputeSize(),i.isLimitMove&&i.imgMarginDetectionScale()}}))},setClipInfo:function(){var t=this.width,i=this.height,e=this.sysinfo,a=this.canvasId,n=t/2,o=i/2,c=(e.windowHeight-o)/2,s=(e.windowWidth-n)/2,l=e.windowWidth/2,h=e.windowHeight/2;this.ctx=uni.createCanvasContext(a,this),this.clipWidth=n,this.clipHeight=o,this.clipX=s,this.clipY=c,this.canvasHeight=o,this.canvasWidth=n,this.imageLeft=l,this.imageTop=h},setClipCenter:function(){var t=this.sysInfo,i=this.clipHeight,e=this.clipWidth,a=this.imageTop,n=this.imageLeft,o=t||uni.getSystemInfoSync(),c=.5*(o.windowHeight-i),s=.5*(o.windowWidth-e);this.imageTop=a-this.clipY+c,this.imageLeft=n-this.clipX+s,this.clipY=c,this.clipX=s},calcClipSize:function(){var t=this.clipHeight,i=this.clipWidth,e=this.sysinfo,a=this.clipX,n=this.clipY;i>e.windowWidth?this.setDiffData({clipWidth:e.windowWidth}):i+a>e.windowWidth&&this.setDiffData({clipX:e.windowWidth-a}),t>e.windowHeight?this.setDiffData({clipHeight:e.windowHeight}):t+n>e.windowHeight&&(this.clipY=e.windowHeight-n,this.setDiffData({clipY:e.windowHeight-n}))},cutDetectionPosition:function(){var t=this,i=this.clipX,e=this.clipY,a=this.sysinfo,n=this.clipHeight,o=this.clipWidth,c=function(){e<0&&t.setDiffData({clipY:0}),e>a.windowHeight-n&&t.setDiffData({clipY:a.windowHeight-n})},s=function(){i<0&&t.setDiffData({clipX:0}),i>a.windowWidth-o&&t.setDiffData({clipX:a.windowWidth-o})};if(null===e&&null===i){var l=.5*(a.windowHeight-n),h=.5*(a.windowWidth-o);this.setDiffData({clipX:h,clipY:l})}else null!==e&&null!==i?(c(),s()):null!==e&&null===i?(c(),this.setDiffData({clipX:(a.windowWidth-o)/2})):null===e&&null!==i&&(s(),this.setDiffData({clipY:(a.windowHeight-n)/2}))},imgComputeSize:function(t,i){var e=(0,c.calcImageSize)(t,i,this),a=e.imageWidth,n=e.imageHeight;this.imageWidth=a,this.imageHeight=n},imgMarginDetectionScale:function(t){if(this.isLimitMove){var i=(0,c.calcImageScale)(this,t);this.imgMarginDetectionPosition(i)}},imgMarginDetectionPosition:function(t){if(this.isLimitMove){var i=(0,c.calcImageOffset)(this,t),e=i.scale,a=i.left,n=i.top;this.setDiffData({imageLeft:a,imageTop:n,scale:e})}},throttle:function(){this.setDiffData({throttleFlag:!0})},moveDuring:function(){clearTimeout(this.timeClipCenter)},moveStop:function(){var t=this;clearTimeout(this.timeClipCenter);var i=setTimeout((function(){t.animation||t.setDiffData({animation:!0}),t.setClipCenter()}),800);this.setDiffData({timeClipCenter:i})},clipTouchStart:function(t){if(t.preventDefault(),this.image){var i=t.touches[0].clientX,e=t.touches[0].clientY,a=this.clipX,n=this.clipY,o=this.clipWidth,s=this.clipHeight,l=(0,c.determineDirection)(a,n,o,s,i,e);this.moveDuring(),l&&(this.clipStart={width:o,height:s,x:i,y:e,clipY:n,clipX:a,corner:l},this.flagClipTouch=!0,this.flagEndTouch=!0)}else uni.showToast({title:"请选择图片",icon:"none",duration:3e3})},clipTouchMove:function(t){if(t.stopPropagation(),t.preventDefault(),this.image){if(1===t.touches.length){var i=this.flagClipTouch,e=this.throttleFlag;if(i&&e){var a=this.isLockRatio,n=this.isLockHeight,o=this.isLockWidth;if(a&&(o||n))return;this.setDiffData({throttleFlag:!1}),this.throttle();var s=(0,c.clipTouchMoveOfCalculate)(this,t);if(s){var l=s.width,h=s.height,r=s.clipX,p=s.clipY;o||n?o?n||this.setDiffData({clipHeight:h,clipY:p}):this.setDiffData({clipWidth:l,clipX:r}):this.setDiffData({clipWidth:l,clipHeight:h,clipX:r,clipY:p}),this.imgMarginDetectionScale()}}}}else uni.showToast({title:"请选择图片",icon:"none",duration:3e3})},clipTouchEnd:function(){this.moveStop(),this.flagClipTouch=!1},imageTouchStart:function(t){event.preventDefault(),this.flagEndTouch=!1;var i=this.imageLeft,e=this.imageTop,a=t.touches[0].clientX,n=t.touches[0].clientY,o=[];if(1===t.touches.length)o[0]={x:a-i,y:n-e},this.touchRelative=o;else{var s=t.touches[1].clientX,l=t.touches[1].clientY,h=Math.abs(a-s),r=Math.abs(n-l),p=(0,c.calcPythagoreanTheorem)(h,r);o=[{x:a-i,y:n-e},{x:s-i,y:l-e}],this.touchRelative=o,this.hypotenuseLength=p}},imageTouchMove:function(t){event.preventDefault();var i=this.flagEndTouch,e=this.throttleFlag;if(!i&&e){var a=t.touches[0].clientX,n=t.touches[0].clientY;if(this.setDiffData({throttleFlag:!1}),this.throttle(),this.moveDuring(),1===t.touches.length){var o=(0,c.imageTouchMoveOfCalcOffset)(this,a,n),s=o.left,l=o.top;this.setDiffData({imageLeft:s,imageTop:l}),this.imgMarginDetectionPosition()}else{var h=t.touches[1].clientX,r=t.touches[1].clientY,p=Math.abs(a-h),u=Math.abs(n-r),f=(0,c.calcPythagoreanTheorem)(p,u),d=this.scale*(f/this.hypotenuseLength);this.isDisableScale?d=1:(d=d<=this.minRatio?this.minRatio:d,d=d>=this.maxRatio?this.maxRatio:d,this.$emit("change",{width:this.imageWidth*d,height:this.imageHeight*d})),this.imgMarginDetectionScale(d),this.hypotenuseLength=Math.sqrt(Math.pow(p,2)+Math.pow(u,2)),this.scale=d}}},imageTouchEnd:function(){this.setDiffData({flagEndTouch:!0}),this.moveStop()},uploadImage:function(){var t=this,i=Object.entries(this.source),e=["original","compressed"],a=function(i){var e=i.tempFilePaths,a=i.tempFiles;t.image=e?e[0]:a[0].path},n=function(t){"message"!==t&&uni.chooseImage({count:1,sizeType:e,sourceType:[t],success:a})};i.length>1?uni.showActionSheet({itemList:i.map((function(t){return t[1]})),success:function(t){var e=t.tapIndex;n(i[e][0])}}):n(i[0][0])},imageReset:function(){var t=this.sysinfo||uni.getSystemInfoSync();this.scale=1,this.angle=0,this.imageTop=t.windowHeight/2,this.imageLeft=t.windowWidth/2},imageLoad:function(t){this.imageReset(),uni.hideLoading(),this.$emit("ready",t.detail)},rotate:function(t){if(!this.isDisableRotate)if(this.image){var i=this.rotateAngle,e=this.angle,a=t.currentTarget.dataset.type;this.angle="along"===a?e+i:e-i,this.$emit("rotate",this.angle)}else uni.showToast({title:"请选择图片",icon:"none",duration:3e3})},confirm:function(){var t=this;if(this.image){uni.showLoading({title:"加载中"});var i=this.canvasHeight,e=this.canvasWidth,a=this.clipHeight,n=this.clipWidth,o=this.ctx,c=this.scale,s=this.imageLeft,l=this.imageTop,h=this.clipX,r=this.clipY,p=this.angle,u=this.scaleRatio,f=this.image,d=this.quality,g=this.fileType,m=(this.type,this.canvasId),v=function(){var i=t.imageWidth*c*u,e=t.imageHeight*c*u,v=s-h,w=l-r;o.translate(v*u,w*u),o.rotate(p*Math.PI/180),o.drawImage(f,-i/2,-e/2,i,e),o.draw(!1,(function(){var i=n*u,e=a*u,o={x:0,y:0,width:i,height:e,destWidth:i,destHeight:e,canvasId:m,fileType:g,quality:d,success:function(i){c.url=i.tempFilePath,uni.hideLoading(),t.$emit("success",c),t.$emit("input",!1)},fail:function(i){t.$emit("fail",i),t.$emit("input",!1)}},c={url:"",width:i,height:e};uni.canvasToTempFilePath(o,t)}))};e!==n||i!==a?(this.canvasWidth=n,this.canvasHeight=a,o.draw(),this.$nextTick((function(){setTimeout((function(){v()}),100)}))):v()}else uni.showToast({title:"请选择图片",icon:"none",duration:3e3})},cancel:function(){this.$emit("cancel",!1),this.$emit("input",!1)}}};i.default=l},e5cd:function(t,i,e){"use strict";e.r(i);var a=e("5fe6"),n=e("24e3");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("804b");var c=e("828b"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"fa9bca3c",null,!1,a["a"],void 0);i["default"]=s.exports},faa7:function(t,i,e){"use strict";e.r(i);var a=e("c391"),n=e("c08f");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("951e");var c=e("828b"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"3b44c846",null,!1,a["a"],void 0);i["default"]=s.exports}}]);