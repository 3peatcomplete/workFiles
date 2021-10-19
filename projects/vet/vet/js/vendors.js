/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if("#"===t){if(!A.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));
/**!
 * lightgallery.js | 1.1.3 | February 11th 2019
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Lightgallery=e()}}(function(){var e,t,s;return function(){function e(t,s,l){function i(r,d){if(!s[r]){if(!t[r]){var a="function"==typeof require&&require;if(!d&&a)return a(r,!0);if(o)return o(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var u=s[r]={exports:{}};t[r][0].call(u.exports,function(e){return i(t[r][1][e]||e)},u,u.exports,e,t,s,l)}return s[r].exports}for(var o="function"==typeof require&&require,r=0;r<l.length;r++)i(l[r]);return i}return e}()({1:[function(t,s,l){!function(t,s){if("function"==typeof e&&e.amd)e(["exports"],s);else if(void 0!==l)s(l);else{var i={exports:{}};s(i.exports),t.lgUtils=i.exports}}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={getAttribute:function e(t,s){return t[s]},setAttribute:function e(t,s,l){t[s]=l},wrap:function e(t,s){if(t){var l=document.createElement("div");l.className=s,t.parentNode.insertBefore(l,t),t.parentNode.removeChild(t),l.appendChild(t)}},addClass:function e(t,s){t&&(t.classList?t.classList.add(s):t.className+=" "+s)},removeClass:function e(t,s){t&&(t.classList?t.classList.remove(s):t.className=t.className.replace(new RegExp("(^|\\b)"+s.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function e(t,s){return t.classList?t.classList.contains(s):new RegExp("(^| )"+s+"( |$)","gi").test(t.className)},setVendor:function e(t,s,l){t&&(t.style[s.charAt(0).toLowerCase()+s.slice(1)]=l,t.style["webkit"+s]=l,t.style["moz"+s]=l,t.style["ms"+s]=l,t.style["o"+s]=l)},trigger:function e(t,s){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t){var i=new CustomEvent(s,{detail:l});t.dispatchEvent(i)}},Listener:{uid:0},on:function e(s,l,i){var o=this;s&&l.split(" ").forEach(function(e){var l=o.getAttribute(s,"lg-event-uid")||"";t.Listener.uid++,l+="&"+t.Listener.uid,o.setAttribute(s,"lg-event-uid",l),t.Listener[e+t.Listener.uid]=i,s.addEventListener(e.split(".")[0],i,!1)})},off:function e(s,l){if(s){var i=this.getAttribute(s,"lg-event-uid");if(i){i=i.split("&");for(var o=0;o<i.length;o++)if(i[o]){var r=l+i[o];if("."===r.substring(0,1))for(var d in t.Listener)t.Listener.hasOwnProperty(d)&&d.split(".").indexOf(r.split(".")[1])>-1&&(s.removeEventListener(d.split(".")[0],t.Listener[d]),this.setAttribute(s,"lg-event-uid",this.getAttribute(s,"lg-event-uid").replace("&"+i[o],"")),delete t.Listener[d]);else s.removeEventListener(r.split(".")[0],t.Listener[r]),this.setAttribute(s,"lg-event-uid",this.getAttribute(s,"lg-event-uid").replace("&"+i[o],"")),delete t.Listener[r]}}}},param:function e(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}};e.default=t})},{}],2:[function(t,s,l){!function(s,i){if("function"==typeof e&&e.amd)e(["./lg-utils"],i);else if(void 0!==l)i(t("./lg-utils"));else{var o={exports:{}};i(s.lgUtils),s.lightgallery=o.exports}}(this,function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(this.el=e,this.s=i({},o,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.items=[],this.s.dynamic?this.items=this.s.dynamicEl:"this"===this.s.selector?this.items.push(this.el):""!==this.s.selector?this.s.selectWithin?this.items=document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector):this.items=this.el.querySelectorAll(this.s.selector):this.items=this.el.children,this.___slide="",this.outer="",this.init(),this}var l=t(e),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e};!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e}(),window.utils=l.default,window.lgData={uid:0},window.lgModules={};var o={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};s.prototype.init=function(){var e=this;e.s.preload>e.items.length&&(e.s.preload=e.items.length);var t=window.location.hash;if(t.indexOf("lg="+this.s.galleryId)>0&&(e.index=parseInt(t.split("&slide=")[1],10),l.default.addClass(document.body,"lg-from-hash"),l.default.hasClass(document.body,"lg-on")||(l.default.addClass(document.body,"lg-on"),setTimeout(function(){e.build(e.index)}))),e.s.dynamic)l.default.trigger(this.el,"onBeforeOpen"),e.index=e.s.index||0,l.default.hasClass(document.body,"lg-on")||(l.default.addClass(document.body,"lg-on"),setTimeout(function(){e.build(e.index)}));else for(var s=0;s<e.items.length;s++)!function(t){l.default.on(e.items[t],"click.lgcustom",function(s){s.preventDefault(),l.default.trigger(e.el,"onBeforeOpen"),e.index=e.s.index||t,l.default.hasClass(document.body,"lg-on")||(e.build(e.index),l.default.addClass(document.body,"lg-on"))})}(s)},s.prototype.build=function(e){var t=this;t.structure();for(var s in window.lgModules)t.modules[s]=new window.lgModules[s](t.el);t.slide(e,!1,!1),t.s.keyPress&&t.keyPress(),t.items.length>1&&(t.arrow(),setTimeout(function(){t.enableDrag(),t.enableSwipe()},50),t.s.mousewheel&&t.mousewheel()),t.counter(),t.closeGallery(),l.default.trigger(t.el,"onAfterOpen"),l.default.on(t.outer,"mousemove.lg click.lg touchstart.lg",function(){l.default.removeClass(t.outer,"lg-hide-items"),clearTimeout(t.hideBartimeout),t.hideBartimeout=setTimeout(function(){l.default.addClass(t.outer,"lg-hide-items")},t.s.hideBarsDelay)})},s.prototype.structure=function(){var e="",t="",s=0,i="",o,r=this;for(document.body.insertAdjacentHTML("beforeend",'<div class="lg-backdrop"></div>'),l.default.setVendor(document.querySelector(".lg-backdrop"),"TransitionDuration",this.s.backdropDuration+"ms"),s=0;s<this.items.length;s++)e+='<div class="lg-item"></div>';if(this.s.controls&&this.items.length>1&&(t='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(i='<div class="lg-sub-html"></div>'),o='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+e+'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>'+t+i+"</div></div>",document.body.insertAdjacentHTML("beforeend",o),this.outer=document.querySelector(".lg-outer"),this.___slide=this.outer.querySelectorAll(".lg-item"),this.s.useLeft?(l.default.addClass(this.outer,"lg-use-left"),this.s.mode="lg-slide"):l.default.addClass(this.outer,"lg-use-css3"),r.setTop(),l.default.on(window,"resize.lg orientationchange.lg",function(){setTimeout(function(){r.setTop()},100)}),l.default.addClass(this.___slide[this.index],"lg-current"),this.doCss()?l.default.addClass(this.outer,"lg-css3"):(l.default.addClass(this.outer,"lg-css"),this.s.speed=0),l.default.addClass(this.outer,this.s.mode),this.s.enableDrag&&this.items.length>1&&l.default.addClass(this.outer,"lg-grab"),this.s.showAfterLoad&&l.default.addClass(this.outer,"lg-show-after-load"),this.doCss()){var d=this.outer.querySelector(".lg-inner");l.default.setVendor(d,"TransitionTimingFunction",this.s.cssEasing),l.default.setVendor(d,"TransitionDuration",this.s.speed+"ms")}setTimeout(function(){l.default.addClass(document.querySelector(".lg-backdrop"),"in")}),setTimeout(function(){l.default.addClass(r.outer,"lg-visible")},this.s.backdropDuration),this.s.download&&this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",'<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=document.documentElement.scrollTop||document.body.scrollTop},s.prototype.setTop=function(){if("100%"!==this.s.height){var e=window.innerHeight,t=(e-parseInt(this.s.height,10))/2,s=this.outer.querySelector(".lg");e>=parseInt(this.s.height,10)?s.style.top=t+"px":s.style.top="0px"}},s.prototype.doCss=function(){return!!function e(){var t=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],s=document.documentElement,l=0;for(l=0;l<t.length;l++)if(t[l]in s.style)return!0}()},s.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.items[t].getAttribute("data-html"),!e&&s)return{html5:!0};var l=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),i=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),r=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return l?{youtube:l}:i?{vimeo:i}:o?{dailymotion:o}:r?{vk:r}:void 0},s.prototype.counter=function(){this.s.counter&&this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend",'<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.items.length+"</span></div>")},s.prototype.addHtml=function(e){var t=null,s;if(this.s.dynamic?t=this.s.dynamicEl[e].subHtml:(s=this.items[e],t=s.getAttribute("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!t&&(t=s.getAttribute("title"))&&s.querySelector("img")&&(t=s.querySelector("img").getAttribute("alt"))),void 0!==t&&null!==t){var i=t.substring(0,1);"."!==i&&"#"!==i||(t=this.s.subHtmlSelectorRelative&&!this.s.dynamic?s.querySelector(t).innerHTML:document.querySelector(t).innerHTML)}else t="";".lg-sub-html"===this.s.appendSubHtmlTo?this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML=t:this.___slide[e].insertAdjacentHTML("beforeend",t),void 0!==t&&null!==t&&(""===t?l.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html"):l.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html")),l.default.trigger(this.el,"onAfterAppendSubHtml",{index:e})},s.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(e-s<0);s++)this.loadContent(e-s,!1,0)},s.prototype.loadContent=function(e,t,s){var i=this,o=!1,r,d,a,n,u,c,g=function e(t){for(var s=[],l=[],i=0;i<t.length;i++){var o=t[i].split(" ");""===o[0]&&o.splice(0,1),l.push(o[0]),s.push(o[1])}for(var r=window.innerWidth,a=0;a<s.length;a++)if(parseInt(s[a],10)>r){d=l[a];break}};if(i.s.dynamic){if(i.s.dynamicEl[e].poster&&(o=!0,a=i.s.dynamicEl[e].poster),c=i.s.dynamicEl[e].html,d=i.s.dynamicEl[e].src,i.s.dynamicEl[e].responsive){g(i.s.dynamicEl[e].responsive.split(","))}n=i.s.dynamicEl[e].srcset,u=i.s.dynamicEl[e].sizes}else{if(i.items[e].getAttribute("data-poster")&&(o=!0,a=i.items[e].getAttribute("data-poster")),c=i.items[e].getAttribute("data-html"),d=i.items[e].getAttribute("href")||i.items[e].getAttribute("data-src"),i.items[e].getAttribute("data-responsive")){g(i.items[e].getAttribute("data-responsive").split(","))}n=i.items[e].getAttribute("data-srcset"),u=i.items[e].getAttribute("data-sizes")}var f=!1;i.s.dynamic?i.s.dynamicEl[e].iframe&&(f=!0):"true"===i.items[e].getAttribute("data-iframe")&&(f=!0);var h=i.isVideo(d,e);if(!l.default.hasClass(i.___slide[e],"lg-loaded")){if(f)i.___slide[e].insertAdjacentHTML("afterbegin",'<div class="lg-video-cont" style="max-width:'+i.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+d+'"  allowfullscreen="true"></iframe></div></div>');else if(o){var m="";m=h&&h.youtube?"lg-has-youtube":h&&h.vimeo?"lg-has-vimeo":"lg-has-html5",i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont '+m+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+a+'" /></div></div>')}else h?(i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont "><div class="lg-video"></div></div>'),l.default.trigger(i.el,"hasVideo",{index:e,src:d,html:c})):i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+d+'" /></div>');if(l.default.trigger(i.el,"onAferAppendSlide",{index:e}),r=i.___slide[e].querySelector(".lg-object"),u&&r.setAttribute("sizes",u),n){r.setAttribute("srcset",n);try{picturefill({elements:[r[0]]})}catch(e){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&i.addHtml(e),l.default.addClass(i.___slide[e],"lg-loaded")}l.default.on(i.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){var t=0;s&&!l.default.hasClass(document.body,"lg-from-hash")&&(t=s),setTimeout(function(){l.default.addClass(i.___slide[e],"lg-complete"),l.default.trigger(i.el,"onSlideItemLoad",{index:e,delay:s||0})},t)}),h&&h.html5&&!o&&l.default.addClass(i.___slide[e],"lg-complete"),!0===t&&(l.default.hasClass(i.___slide[e],"lg-complete")?i.preload(e):l.default.on(i.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){i.preload(e)}))},s.prototype.slide=function(e,t,s){for(var i=0,o=0;o<this.___slide.length;o++)if(l.default.hasClass(this.___slide[o],"lg-current")){i=o;break}var r=this;if(!r.lGalleryOn||i!==e){var d=this.___slide.length,a=r.lGalleryOn?this.s.speed:0,n=!1,u=!1;if(!r.lgBusy){if(this.s.download){var c;c=r.s.dynamic?!1!==r.s.dynamicEl[e].downloadUrl&&(r.s.dynamicEl[e].downloadUrl||r.s.dynamicEl[e].src):"false"!==r.items[e].getAttribute("data-download-url")&&(r.items[e].getAttribute("data-download-url")||r.items[e].getAttribute("href")||r.items[e].getAttribute("data-src")),c?(document.getElementById("lg-download").setAttribute("href",c),l.default.removeClass(r.outer,"lg-hide-download")):l.default.addClass(r.outer,"lg-hide-download")}if(l.default.trigger(r.el,"onBeforeSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s}),r.lgBusy=!0,clearTimeout(r.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){r.addHtml(e)},a),this.arrowDisable(e),t){var g=e-1,f=e+1;0===e&&i===d-1?(f=0,g=d-1):e===d-1&&0===i&&(f=0,g=d-1),l.default.removeClass(r.outer.querySelector(".lg-prev-slide"),"lg-prev-slide"),l.default.removeClass(r.outer.querySelector(".lg-current"),"lg-current"),l.default.removeClass(r.outer.querySelector(".lg-next-slide"),"lg-next-slide"),l.default.addClass(r.___slide[g],"lg-prev-slide"),l.default.addClass(r.___slide[f],"lg-next-slide"),l.default.addClass(r.___slide[e],"lg-current")}else{l.default.addClass(r.outer,"lg-no-trans");for(var h=0;h<this.___slide.length;h++)l.default.removeClass(this.___slide[h],"lg-prev-slide"),l.default.removeClass(this.___slide[h],"lg-next-slide");e<i?(u=!0,0!==e||i!==d-1||s||(u=!1,n=!0)):e>i&&(n=!0,e!==d-1||0!==i||s||(u=!0,n=!1)),u?(l.default.addClass(this.___slide[e],"lg-prev-slide"),l.default.addClass(this.___slide[i],"lg-next-slide")):n&&(l.default.addClass(this.___slide[e],"lg-next-slide"),l.default.addClass(this.___slide[i],"lg-prev-slide")),setTimeout(function(){l.default.removeClass(r.outer.querySelector(".lg-current"),"lg-current"),l.default.addClass(r.___slide[e],"lg-current"),l.default.removeClass(r.outer,"lg-no-trans")},50)}r.lGalleryOn?(setTimeout(function(){r.loadContent(e,!0,0)},this.s.speed+50),setTimeout(function(){r.lgBusy=!1,l.default.trigger(r.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s})},this.s.speed)):(r.loadContent(e,!0,r.s.backdropDuration),r.lgBusy=!1,l.default.trigger(r.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s})),r.lGalleryOn=!0,this.s.counter&&document.getElementById("lg-counter-current")&&(document.getElementById("lg-counter-current").innerHTML=e+1)}}},s.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.___slide.length?(t.index++,l.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,l.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(l.default.addClass(t.outer,"lg-right-end"),setTimeout(function(){l.default.removeClass(t.outer,"lg-right-end")},400)))},s.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(t.index>0?(t.index--,l.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.items.length-1,l.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(l.default.addClass(t.outer,"lg-left-end"),setTimeout(function(){l.default.removeClass(t.outer,"lg-left-end")},400)))},s.prototype.keyPress=function(){var e=this;this.items.length>1&&l.default.on(window,"keyup.lg",function(t){e.items.length>1&&(37===t.keyCode&&(t.preventDefault(),e.goToPrevSlide()),39===t.keyCode&&(t.preventDefault(),e.goToNextSlide()))}),l.default.on(window,"keydown.lg",function(t){!0===e.s.escKey&&27===t.keyCode&&(t.preventDefault(),l.default.hasClass(e.outer,"lg-thumb-open")?l.default.removeClass(e.outer,"lg-thumb-open"):e.destroy())})},s.prototype.arrow=function(){var e=this;l.default.on(this.outer.querySelector(".lg-prev"),"click.lg",function(){e.goToPrevSlide()}),l.default.on(this.outer.querySelector(".lg-next"),"click.lg",function(){e.goToNextSlide()})},s.prototype.arrowDisable=function(e){if(!this.s.loop&&this.s.hideControlOnEnd){var t=this.outer.querySelector(".lg-next"),s=this.outer.querySelector(".lg-prev");e+1<this.___slide.length?(t.removeAttribute("disabled"),l.default.removeClass(t,"disabled")):(t.setAttribute("disabled","disabled"),l.default.addClass(t,"disabled")),e>0?(s.removeAttribute("disabled"),l.default.removeClass(s,"disabled")):(s.setAttribute("disabled","disabled"),l.default.addClass(s,"disabled"))}},s.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.style.left=t:l.default.setVendor(e,"Transform","translate3d("+t+"px, "+s+"px, 0px)")},s.prototype.touchMove=function(e,t){var s=t-e;Math.abs(s)>15&&(l.default.addClass(this.outer,"lg-dragging"),this.setTranslate(this.___slide[this.index],s,0),this.setTranslate(document.querySelector(".lg-prev-slide"),-this.___slide[this.index].clientWidth+s,0),this.setTranslate(document.querySelector(".lg-next-slide"),this.___slide[this.index].clientWidth+s,0))},s.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&l.default.addClass(t.outer,"lg-slide");for(var s=0;s<this.___slide.length;s++)l.default.hasClass(this.___slide[s],"lg-current")||l.default.hasClass(this.___slide[s],"lg-prev-slide")||l.default.hasClass(this.___slide[s],"lg-next-slide")||(this.___slide[s].style.opacity="0");setTimeout(function(){l.default.removeClass(t.outer,"lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&l.default.trigger(t.el,"onSlideClick");for(var s=0;s<t.___slide.length;s++)t.___slide[s].removeAttribute("style")}),setTimeout(function(){l.default.hasClass(t.outer,"lg-dragging")||"lg-slide"===t.s.mode||l.default.removeClass(t.outer,"lg-slide")},t.s.speed+100)},s.prototype.enableSwipe=function(){var e=this,t=0,s=0,i=!1;if(e.s.enableSwipe&&e.isTouch&&e.doCss()){for(var o=0;o<e.___slide.length;o++)l.default.on(e.___slide[o],"touchstart.lg",function(s){l.default.hasClass(e.outer,"lg-zoomed")||e.lgBusy||(s.preventDefault(),e.manageSwipeClass(),t=s.targetTouches[0].pageX)});for(var r=0;r<e.___slide.length;r++)l.default.on(e.___slide[r],"touchmove.lg",function(o){l.default.hasClass(e.outer,"lg-zoomed")||(o.preventDefault(),s=o.targetTouches[0].pageX,e.touchMove(t,s),i=!0)});for(var d=0;d<e.___slide.length;d++)l.default.on(e.___slide[d],"touchend.lg",function(){l.default.hasClass(e.outer,"lg-zoomed")||(i?(i=!1,e.touchEnd(s-t)):l.default.trigger(e.el,"onSlideClick"))})}},s.prototype.enableDrag=function(){var e=this,t=0,s=0,i=!1,o=!1;if(e.s.enableDrag&&!e.isTouch&&e.doCss()){for(var r=0;r<e.___slide.length;r++)l.default.on(e.___slide[r],"mousedown.lg",function(s){l.default.hasClass(e.outer,"lg-zoomed")||(l.default.hasClass(s.target,"lg-object")||l.default.hasClass(s.target,"lg-video-play"))&&(s.preventDefault(),e.lgBusy||(e.manageSwipeClass(),t=s.pageX,i=!0,e.outer.scrollLeft+=1,e.outer.scrollLeft-=1,l.default.removeClass(e.outer,"lg-grab"),l.default.addClass(e.outer,"lg-grabbing"),l.default.trigger(e.el,"onDragstart")))});l.default.on(window,"mousemove.lg",function(r){i&&(o=!0,s=r.pageX,e.touchMove(t,s),l.default.trigger(e.el,"onDragmove"))}),l.default.on(window,"mouseup.lg",function(r){o?(o=!1,e.touchEnd(s-t),l.default.trigger(e.el,"onDragend")):(l.default.hasClass(r.target,"lg-object")||l.default.hasClass(r.target,"lg-video-play"))&&l.default.trigger(e.el,"onSlideClick"),i&&(i=!1,l.default.removeClass(e.outer,"lg-grabbing"),l.default.addClass(e.outer,"lg-grab"))})}},s.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,s=this.___slide.length;this.s.loop&&(0===this.index?t=s-1:this.index===s-1&&(e=0));for(var i=0;i<this.___slide.length;i++)l.default.removeClass(this.___slide[i],"lg-next-slide"),l.default.removeClass(this.___slide[i],"lg-prev-slide");t>-1&&l.default.addClass(this.___slide[t],"lg-prev-slide"),l.default.addClass(this.___slide[e],"lg-next-slide")},s.prototype.mousewheel=function(){var e=this;l.default.on(e.outer,"mousewheel.lg",function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},s.prototype.closeGallery=function(){var e=this,t=!1;l.default.on(this.outer.querySelector(".lg-close"),"click.lg",function(){e.destroy()}),e.s.closable&&(l.default.on(e.outer,"mousedown.lg",function(e){t=!!(l.default.hasClass(e.target,"lg-outer")||l.default.hasClass(e.target,"lg-item")||l.default.hasClass(e.target,"lg-img-wrap"))}),l.default.on(e.outer,"mouseup.lg",function(s){(l.default.hasClass(s.target,"lg-outer")||l.default.hasClass(s.target,"lg-item")||l.default.hasClass(s.target,"lg-img-wrap")&&t)&&(l.default.hasClass(e.outer,"lg-dragging")||e.destroy())}))},s.prototype.destroy=function(e){var t=this;if(e||l.default.trigger(t.el,"onBeforeClose"),document.body.scrollTop=t.prevScrollTop,document.documentElement.scrollTop=t.prevScrollTop,e){if(!t.s.dynamic)for(var s=0;s<this.items.length;s++)l.default.off(this.items[s],".lg"),l.default.off(this.items[s],".lgcustom");var i=t.el.getAttribute("lg-uid");delete window.lgData[i],t.el.removeAttribute("lg-uid")}l.default.off(this.el,".lgtm");for(var o in window.lgModules)t.modules[o]&&t.modules[o].destroy(e);this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,l.default.off(window,".lg"),l.default.removeClass(document.body,"lg-on"),l.default.removeClass(document.body,"lg-from-hash"),t.outer&&l.default.removeClass(t.outer,"lg-visible"),l.default.removeClass(document.querySelector(".lg-backdrop"),"in"),setTimeout(function(){try{t.outer&&t.outer.parentNode.removeChild(t.outer),document.querySelector(".lg-backdrop")&&document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")),e||l.default.trigger(t.el,"onCloseAfter")}catch(e){}},t.s.backdropDuration+50)},window.lightGallery=function(e,t){if(e)try{if(e.getAttribute("lg-uid"))try{window.lgData[e.getAttribute("lg-uid")].init()}catch(e){console.error("lightGallery has not initiated properly")}else{var l="lg"+window.lgData.uid++;window.lgData[l]=new s(e,t),e.setAttribute("lg-uid",l)}}catch(e){console.error("lightGallery has not initiated properly")}}})},{"./lg-utils":1}]},{},[2])(2)});
(function(factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === "object") {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        window.noUiSlider = factory();
    }
})(function() {
    "use strict";

    var VERSION = "%%REPLACE_THIS_WITH_VERSION%%";

    //region Helper Methods

    function isValidFormatter(entry) {
        return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
    }

    function removeElement(el) {
        el.parentElement.removeChild(el);
    }

    function isSet(value) {
        return value !== null && value !== undefined;
    }

    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }

    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function(a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }

    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }

    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);

        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }

        return orientation
            ? rect.top + pageOffset.y - docElem.clientTop
            : rect.left + pageOffset.x - docElem.clientLeft;
    }

    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }

    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function() {
                removeClass(element, className);
            }, duration);
        }
    }

    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }

    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }

    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }

    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        } else {
            el.className += " " + className;
        }
    }

    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(
                new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
                " "
            );
        }
    }

    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList
            ? el.classList.contains(className)
            : new RegExp("\\b" + className + "\\b").test(el.className);
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;

        return {
            x: x,
            y: y
        };
    }

    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                  start: "pointerdown",
                  move: "pointermove",
                  end: "pointerup"
              }
            : window.navigator.msPointerEnabled
                ? {
                      start: "MSPointerDown",
                      move: "MSPointerMove",
                      end: "MSPointerUp"
                  }
                : {
                      start: "mousedown touchstart",
                      move: "mousemove touchmove",
                      end: "mouseup touchend"
                  };
    }

    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;

        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassive = true;
                }
            });

            window.addEventListener("test", null, opts);
        } catch (e) {}
        /* eslint-enable */

        return supportsPassive;
    }

    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }

    //endregion

    //region Range Calculation

    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }

    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }

    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }

    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }

    function getJ(value, arr) {
        var j = 1;

        while (value >= arr[j]) {
            j += 1;
        }

        return j;
    }

    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }

        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }

    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }

        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }

    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }

        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];

        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }

            return a;
        }

        if (!xSteps[j - 1]) {
            return value;
        }

        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }

    function handleEntryPoint(index, value, that) {
        var percentage;

        // Wrap numerical input in an array.
        if (typeof value === "number") {
            value = [value];
        }

        // Reject any invalid input, by testing whether value is an array.
        if (!Array.isArray(value)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
        }

        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        } else if (index === "max") {
            percentage = 100;
        } else {
            percentage = parseFloat(index);
        }

        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
        }

        // Store values.
        that.xPct.push(percentage);
        that.xVal.push(value[0]);

        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value[1])) {
                that.xSteps[0] = value[1];
            }
        } else {
            that.xSteps.push(isNaN(value[1]) ? false : value[1]);
        }

        that.xHighestCompleteStep.push(0);
    }

    function handleStepPoint(i, n, that) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }

        // Step over zero-length ranges (#948);
        if (that.xVal[i] === that.xVal[i + 1]) {
            that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];

            return;
        }

        // Factor to range ratio
        that.xSteps[i] =
            fromPercentage([that.xVal[i], that.xVal[i + 1]], n, 0) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);

        var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = that.xVal[i] + that.xNumSteps[i] * highestStep;

        that.xHighestCompleteStep[i] = step;
    }

    //endregion

    //region Spectrum

    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.xHighestCompleteStep = [];

        this.snap = snap;

        var index;
        var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']

        // Map the object keys to an array.
        for (index in entry) {
            if (entry.hasOwnProperty(index)) {
                ordered.push([entry[index], index]);
            }
        }

        // Sort all entries by value (numeric sort).
        if (ordered.length && typeof ordered[0][0] === "object") {
            ordered.sort(function(a, b) {
                return a[0][0] - b[0][0];
            });
        } else {
            ordered.sort(function(a, b) {
                return a[0] - b[0];
            });
        }

        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            handleEntryPoint(ordered[index][1], ordered[index][0], this);
        }

        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);

        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            handleStepPoint(index, this.xNumSteps[index], this);
        }
    }

    Spectrum.prototype.getDistance = function(value) {
        var index;
        var distances = [];

        for (index = 0; index < this.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            var step = this.xNumSteps[index];

            if (step && (value / step) % 1 !== 0) {
                throw new Error(
                    "noUiSlider (" +
                        VERSION +
                        "): 'limit', 'margin' and 'padding' of " +
                        this.xPct[index] +
                        "% range must be divisible by step."
                );
            }

            // Calculate percentual distance in current range of limit, margin or padding
            distances[index] = fromPercentage(this.xVal, value, index);
        }

        return distances;
    };

    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
        var xPct_index = 0;

        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        } else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }

        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }

        var start_factor;
        var rest_factor = 1;

        var rest_rel_distance = distances[xPct_index];

        var range_pct = 0;

        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;

        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        } else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }

        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];

            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            } else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }

            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            } else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }

            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }

        return value + abs_distance_counter;
    };

    Spectrum.prototype.toStepping = function(value) {
        value = toStepping(this.xVal, this.xPct, value);

        return value;
    };

    Spectrum.prototype.fromStepping = function(value) {
        return fromStepping(this.xVal, this.xPct, value);
    };

    Spectrum.prototype.getStep = function(value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);

        return value;
    };

    Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
        var j = getJ(value, this.xPct);

        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }

        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };

    Spectrum.prototype.getNearbySteps = function(value) {
        var j = getJ(value, this.xPct);

        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2]
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1]
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j]
            }
        };
    };

    Spectrum.prototype.countStepDecimals = function() {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };

    // Outside testing
    Spectrum.prototype.convert = function(value) {
        return this.getStep(this.toStepping(value));
    };

    //endregion

    //region Options

    /*	Every input option is tested and parsed. This'll prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */

    //region Defaults

    var defaultFormatter = {
        to: function(value) {
            return value !== undefined && value.toFixed(2);
        },
        from: Number
    };

    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };

    //endregion

    function validateFormat(entry) {
        // Any object with a to and from method is supported.
        if (isValidFormatter(entry)) {
            return true;
        }

        throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
    }

    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
        }

        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }

    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardPageMultiplier' is not numeric.");
        }

        parsed.keyboardPageMultiplier = entry;
    }

    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardDefaultStep' is not numeric.");
        }

        parsed.keyboardDefaultStep = entry;
    }

    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
        }

        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
        }

        // Catch equal start or end.
        if (entry.min === entry.max) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
        }

        parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
    }

    function testStart(parsed, entry) {
        entry = asArray(entry);

        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
        }

        // Store the number of handles.
        parsed.handles = entry.length;

        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }

    function testSnap(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
        }
    }

    function testAnimate(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
        }
    }

    function testAnimationDuration(parsed, entry) {
        parsed.animationDuration = entry;

        if (typeof entry !== "number") {
            throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
        }
    }

    function testConnect(parsed, entry) {
        var connect = [false];
        var i;

        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        } else if (entry === "upper") {
            entry = [false, true];
        }

        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }

            connect.push(false);
        }

        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
        } else {
            connect = entry;
        }

        parsed.connect = connect;
    }

    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
        }
    }

    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
        }

        // Issue #582
        if (entry === 0) {
            return;
        }

        parsed.margin = parsed.spectrum.getDistance(entry);
    }

    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
        }

        parsed.limit = parsed.spectrum.getDistance(entry);

        if (!parsed.limit || parsed.handles < 2) {
            throw new Error(
                "noUiSlider (" +
                    VERSION +
                    "): 'limit' option is only supported on linear sliders with 2 or more handles."
            );
        }
    }

    function testPadding(parsed, entry) {
        var index;

        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (entry === 0) {
            return;
        }

        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }

        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];

        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
            }
        }

        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];

        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
        }
    }

    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
        }
    }

    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
        }

        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;

        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
            }

            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }

        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit"
            );
        }

        parsed.events = {
            tap: tap || snap,
            drag: drag,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }

    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }

        if (entry === true) {
            parsed.tooltips = [];

            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(true);
            }
        } else {
            parsed.tooltips = asArray(entry);

            if (parsed.tooltips.length !== parsed.handles) {
                throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
            }

            parsed.tooltips.forEach(function(formatter) {
                if (
                    typeof formatter !== "boolean" &&
                    (typeof formatter !== "object" || typeof formatter.to !== "function")
                ) {
                    throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
                }
            });
        }
    }

    function testAriaFormat(parsed, entry) {
        parsed.ariaFormat = entry;
        validateFormat(entry);
    }

    function testFormat(parsed, entry) {
        parsed.format = entry;
        validateFormat(entry);
    }

    function testKeyboardSupport(parsed, entry) {
        parsed.keyboardSupport = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
        }
    }

    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }

    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
        }

        parsed.cssPrefix = entry;
    }

    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
        }

        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};

            for (var key in entry) {
                if (!entry.hasOwnProperty(key)) {
                    continue;
                }

                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            }
        } else {
            parsed.cssClasses = entry;
        }
    }

    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);

        var parsed = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };

        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses }
        };

        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardDefaultStep: 10
        };

        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }

        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function(name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
                }

                return true;
            }

            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });

        // Forward pips options
        parsed.pips = options.pips;

        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;

        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";

        // Pips don't move, so we can place them using left/top.
        var styles = [["left", "top"], ["right", "bottom"]];

        parsed.style = styles[parsed.dir][parsed.ort];

        return parsed;
    }

    //endregion

    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();

        // All variables local to 'scope' are prefixed with 'scope_'

        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;

        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};

        // Exposed API
        var scope_Self;

        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;

        // Pips constants
        var PIPS_NONE = -1;
        var PIPS_NO_VALUE = 0;
        var PIPS_LARGE_VALUE = 1;
        var PIPS_SMALL_VALUE = 2;

        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;

        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");

            if (className) {
                addClass(div, className);
            }

            addTarget.appendChild(div);

            return div;
        }

        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);

            addNodeTo(handle, options.cssClasses.touchArea);

            handle.setAttribute("data-handle", handleNumber);

            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function(event) {
                    return eventKeydown(event, handleNumber);
                });
            }

            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            } else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }

            return origin;
        }

        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }

            return addNodeTo(base, options.cssClasses.connect);
        }

        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);

            scope_Handles = [];
            scope_Connects = [];

            scope_Connects.push(addConnect(connectBase, connectOptions[0]));

            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]

            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }

        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);

            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            } else {
                addClass(addTarget, options.cssClasses.rtl);
            }

            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            } else {
                addClass(addTarget, options.cssClasses.vertical);
            }

            var textDirection = getComputedStyle(addTarget).direction;

            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            } else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }

            return addNodeTo(addTarget, options.cssClasses.base);
        }

        function addTooltip(handle, handleNumber) {
            if (!options.tooltips[handleNumber]) {
                return false;
            }

            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }

        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }

        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }

        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update.tooltips");
                scope_Tooltips.forEach(function(tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }

        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();

            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);

            bindEvent("update.tooltips", function(values, handleNumber, unencoded) {
                if (!scope_Tooltips[handleNumber]) {
                    return;
                }

                var formattedValue = values[handleNumber];

                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }

                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }

        function aria() {
            bindEvent("update", function(values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function(index) {
                    var handle = scope_Handles[index];

                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);

                    var now = positions[index];

                    // Formatted value for display
                    var text = options.ariaFormat.to(unencoded[index]);

                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);

                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }

        function getGroup(mode, values, stepped) {
            // Use the range.
            if (mode === "range" || mode === "steps") {
                return scope_Spectrum.xVal;
            }

            if (mode === "count") {
                if (values < 2) {
                    throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
                }

                // Divide 0 - 100 in 'count' parts.
                var interval = values - 1;
                var spread = 100 / interval;

                values = [];

                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }

                values.push(100);

                mode = "positions";
            }

            if (mode === "positions") {
                // Map all percentages to on-range values.
                return values.map(function(value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                });
            }

            if (mode === "values") {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (stepped) {
                    return values.map(function(value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }

                // Otherwise, we can simply use the values.
                return values;
            }
        }

        function generateSpread(density, mode, group) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return (value + increment).toFixed(7) / 1;
            }

            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;

            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(
                group.slice().sort(function(a, b) {
                    return a - b;
                })
            );

            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }

            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }

            group.forEach(function(current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = mode === "steps";

                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }

                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }

                // Low can be 0, so test for false. If high is undefined,
                // we are at the last subrange. Index 0 is already handled.
                if (low === false || high === undefined) {
                    return;
                }

                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);

                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;

                    steps = pctDifference / density;
                    realSteps = Math.round(steps);

                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;

                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }

                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE;

                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }

                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }

                    // Update the percentage count.
                    prevPct = newPct;
                }
            });

            return indexes;
        }

        function addMarking(spread, filterFunc, formatter) {
            var element = scope_Document.createElement("div");

            var valueSizeClasses = [];
            valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
            valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
            valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;

            var markerSizeClasses = [];
            markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
            markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
            markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;

            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];

            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }

            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;

                if (type === PIPS_NONE) {
                    return;
                }

                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";

                // Values are only appended for points marked '1' or '2'.
                if (type > PIPS_NO_VALUE) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", value);
                    node.style[options.style] = offset + "%";
                    node.innerHTML = formatter.to(value);
                }
            }

            // Append all points.
            Object.keys(spread).forEach(function(offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });

            return element;
        }

        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }

        function pips(grid) {
            // Fix #669
            removePips();

            var mode = grid.mode;
            var density = grid.density || 1;
            var filter = grid.filter || false;
            var values = grid.values || false;
            var stepped = grid.stepped || false;
            var group = getGroup(mode, values, stepped);
            var spread = generateSpread(density, mode, group);
            var format = grid.format || {
                to: Math.round
            };

            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));

            return scope_Pips;
        }

        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = "offset" + ["Width", "Height"][options.ort];
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }

        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList

            var method = function(e) {
                e = fixEvent(e, data.pageOffset, data.target || element);

                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }

                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }

                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }

                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }

                e.calcPoint = e.points[options.ort];

                // Call the event handler with the event [ and additional data ].
                callback(e, data);
            };

            var methods = [];

            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function(eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });

            return methods;
        }

        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;

            var x;
            var y;

            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }

            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function(checkTouch) {
                    return (
                        checkTouch.target === eventTarget ||
                        eventTarget.contains(checkTouch.target) ||
                        (checkTouch.target.shadowRoot && checkTouch.target.shadowRoot.contains(eventTarget))
                    );
                };

                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);

                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }

                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                } else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);

                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }

                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }

            pageOffset = pageOffset || getPageOffset(scope_Document);

            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }

            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435

            return e;
        }

        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();

            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);

            return options.dir ? 100 - proposal : proposal;
        }

        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;

            scope_Handles.forEach(function(handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }

                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);

                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;

                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;

                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });

            return handleNumber;
        }

        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }

        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }

            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;

            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
        }

        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }

            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function(c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });

            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();

                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }

            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }

        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return false;
            }

            var handle;

            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];

                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;

                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }

            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();

            // Record the event listeners.
            var listeners = [];

            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });

            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;

                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }

                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }

            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("start", handleNumber);
            });
        }

        // Move closest handle to tapped location.
        function eventTap(event) {
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore tap
            // events that have no touches or buttons associated with them.
            if (!event.buttons && !event.touches) {
                return false;
            }

            // The tap event shouldn't propagate up
            event.stopPropagation();

            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);

            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return false;
            }

            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            setHandle(handleNumber, proposal, true, true);

            setZindex();

            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);

            if (options.events.snap) {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }

        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);

            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);

            Object.keys(scope_Events).forEach(function(targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function(callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }

        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }

            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];

            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            } else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }

            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");

            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];

            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }

            event.preventDefault();

            var to;

            if (isUp || isDown) {
                var multiplier = options.keyboardPageMultiplier;
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];

                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }

                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(
                        scope_Locations[handleNumber],
                        isDown,
                        options.keyboardDefaultStep
                    );
                }

                if (isLargeUp || isLargeDown) {
                    step *= multiplier;
                }

                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);

                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;

                to = scope_Values[handleNumber] + step;
            } else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            } else {
                // Home key
                to = options.spectrum.xVal[0];
            }

            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);

            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);

            return false;
        }

        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function(handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }

            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }

            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }

            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function(connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }

                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];

                    addClass(connect, options.cssClasses.draggable);

                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }

                    eventHolders.forEach(function(eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: [handleBefore, handleAfter],
                            handleNumbers: [index - 1, index]
                        });
                    });
                });
            }
        }

        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);

            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function(a, index) {
                    fireEvent("update", index);
                });
            }
        }

        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event && namespacedEvent.substring(event.length);

            Object.keys(scope_Events).forEach(function(bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);

                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    delete scope_Events[bind];
                }
            });
        }

        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function(targetEvent) {
                var eventType = targetEvent.split(".")[0];

                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function(callback) {
                        callback.call(
                            // Use the slider public API as the scope ('this')
                            scope_Self,
                            // Return values as array, so arg_1[arg_2] is always valid.
                            scope_Values.map(options.format.to),
                            // Handle index, 0 or 1
                            handleNumber,
                            // Un-formatted slider values
                            scope_Values.slice(),
                            // Event is fired by tap, true or false
                            tap || false,
                            // Left offset of the handle, in relation to the slider
                            scope_Locations.slice(),
                            // add the slider public API to an accessible parameter when this is unavailable
                            scope_Self
                        );
                    });
                }
            });
        }

        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;

            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, 0);
                    to = Math.max(to, distance);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, 1);
                    to = Math.min(to, distance);
                }
            }

            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, 0);
                    to = Math.min(to, distance);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, 1);
                    to = Math.max(to, distance);
                }
            }

            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], 0);
                    to = Math.max(to, distance);
                }

                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], 1);
                    to = Math.min(to, distance);
                }
            }

            to = scope_Spectrum.getStep(to);

            // Limit percentage to the 0 - 100 range
            to = limit(to);

            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }

            return to;
        }

        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }

        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers) {
            var proposals = locations.slice();

            var b = [!upward, upward];
            var f = [upward, !upward];

            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();

            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }

            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function(handleNumber, o) {
                    var to = checkHandlePosition(
                        proposals,
                        handleNumber,
                        proposals[handleNumber] + proposal,
                        b[o],
                        f[o],
                        false
                    );

                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    } else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }

            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }

            var state = false;

            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function(handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });

            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function(handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
            }
        }

        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }

        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;

            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

            var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";

            scope_Handles[handleNumber].style[options.transformRule] = translateRule;

            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }

        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function(handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = zIndex;
            });
        }

        // Test suggested values and apply margin, step.
        function setHandle(handleNumber, to, lookBackward, lookForward) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

            if (to === false) {
                return false;
            }

            updateHandlePosition(handleNumber, to);

            return true;
        }

        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }

            var l = 0;
            var h = 100;

            if (index !== 0) {
                l = scope_Locations[index - 1];
            }

            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }

            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";

            scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
        }

        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }

            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }

            to = options.format.from(to);
            to = scope_Spectrum.toStepping(to);

            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }

            return to;
        }

        // Set the slider value.
        function valueSet(input, fireSetEvent) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;

            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent;

            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function(handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
            });

            var i = scope_HandleNumbers.length === 1 ? 0 : 1;

            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function(handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true);
                });
            }

            setZindex();

            scope_HandleNumbers.forEach(function(handleNumber) {
                fireEvent("update", handleNumber);

                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }

        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }

        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);

            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
            }

            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true);

            fireEvent("update", handleNumber);

            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }

        // Get the slider value.
        function valueGet() {
            var values = scope_Values.map(options.format.to);

            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }

            return values;
        }

        // Removes classes from the root and empties it.
        function destroy() {
            for (var key in options.cssClasses) {
                if (!options.cssClasses.hasOwnProperty(key)) {
                    continue;
                }
                removeClass(scope_Target, options.cssClasses[key]);
            }

            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }

            delete scope_Target.noUiSlider;
        }

        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;

            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }

            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }

            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            } else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }

            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }

            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            } else if (location === 0) {
                decrement = null;
            }

            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();

            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }

            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }

            return [decrement, increment];
        }

        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }

        // Updateable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();

            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];

            // Only change options that we're actually passed to update.
            updateAble.forEach(function(name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });

            var newOptions = testOptions(originalOptions);

            // Load new options into the slider state
            updateAble.forEach(function(name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });

            scope_Spectrum = newOptions.spectrum;

            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;

            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            } else {
                removePips();
            }

            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            } else {
                removeTooltips();
            }

            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(optionsToUpdate.start || v, fireSetEvent);
        }

        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);

            addElements(options.connect, scope_Base);

            // Attach user events.
            bindSliderEvents(options.events);

            // Use the public value method to set the start values.
            valueSet(options.start);

            if (options.pips) {
                pips(options.pips);
            }

            if (options.tooltips) {
                tooltips();
            }

            aria();
        }

        setupSlider();

        // noinspection JSUnusedGlobalSymbols
        scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function(a, b, c) {
                moveHandles(a, b, scope_Locations, c);
            },
            options: originalOptions, // Issue #600, #678
            updateOptions: updateOptions,
            target: scope_Target, // Issue #597
            removePips: removePips,
            removeTooltips: removeTooltips,
            getTooltips: function() {
                return scope_Tooltips;
            },
            getOrigins: function() {
                return scope_Handles;
            },
            pips: pips // Issue #594
        };

        return scope_Self;
    }

    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
        }

        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
        }

        // Test the options and create the slider environment;
        var options = testOptions(originalOptions, target);
        var api = scope(target, options, originalOptions);

        target.noUiSlider = api;

        return api;
    }

    // Use an object instead of a function for future expandability;
    return {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        version: VERSION,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize
    };
});

/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7-beta.16
 */
!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var i = t();
        for (var a in i) ("object" == typeof exports ? exports : e)[a] = i[a];
    }
}(this, (function() {
    return function() {
        "use strict";
        var e = {
            8741: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = i;
            },
            3976: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a, n = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                };
                var r = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "url", "password", "search" ],
                    ignorables: [ n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3
                };
                t.default = r;
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    9: {
                        validator: "[0-9\uff10-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                };
            },
            253: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i) {
                    if (void 0 === i) return e.__data ? e.__data[t] : null;
                    e.__data = e.__data || {}, e.__data[t] = i;
                };
            },
            3776: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.on = function(e, t) {
                    function i(e, i) {
                        n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), 
                        a[e] = a[e] || {}, a[e][i] = a[e][i] || [], a[e][i].push(t);
                    }
                    if (u(this[0])) for (var a = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
                        var s = r[o].split("."), l = s[0], c = s[1] || "global";
                        i(l, c);
                    }
                    return this;
                }, t.off = function(e, t) {
                    var i, a;
                    function n(e, t, n) {
                        if (e in i == !0) if (a.removeEventListener ? a.removeEventListener(e, n, !1) : a.detachEvent && a.detachEvent("on" + e, n), 
                        "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(n), 1); else i[e][t].splice(i[e][t].indexOf(n), 1);
                    }
                    function r(e, a) {
                        var n, r, o = [];
                        if (e.length > 0) if (void 0 === t) for (n = 0, r = i[e][a].length; n < r; n++) o.push({
                            ev: e,
                            namespace: a && a.length > 0 ? a : "global",
                            handler: i[e][a][n]
                        }); else o.push({
                            ev: e,
                            namespace: a && a.length > 0 ? a : "global",
                            handler: t
                        }); else if (a.length > 0) for (var s in i) for (var l in i[s]) if (l === a) if (void 0 === t) for (n = 0, 
                        r = i[s][l].length; n < r; n++) o.push({
                            ev: s,
                            namespace: l,
                            handler: i[s][l][n]
                        }); else o.push({
                            ev: s,
                            namespace: l,
                            handler: t
                        });
                        return o;
                    }
                    if (u(this[0]) && e) {
                        i = this[0].eventRegistry, a = this[0];
                        for (var o = e.split(" "), s = 0; s < o.length; s++) for (var l = o[s].split("."), c = r(l[0], l[1]), f = 0, d = c.length; f < d; f++) n(c[f].ev, c[f].namespace, c[f].handler);
                    }
                    return this;
                }, t.trigger = function(e) {
                    if (u(this[0])) for (var t = this[0].eventRegistry, i = this[0], a = "string" == typeof e ? e.split(" ") : [ e.type ], r = 0; r < a.length; r++) {
                        var s = a[r].split("."), l = s[0], c = s[1] || "global";
                        if (void 0 !== document && "global" === c) {
                            var f, d, p = {
                                bubbles: !0,
                                cancelable: !0,
                                detail: arguments[1]
                            };
                            if (document.createEvent) {
                                try {
                                    switch (l) {
                                      case "input":
                                        p.inputType = "insertText", f = new InputEvent(l, p);
                                        break;

                                      default:
                                        f = new CustomEvent(l, p);
                                    }
                                } catch (e) {
                                    (f = document.createEvent("CustomEvent")).initCustomEvent(l, p.bubbles, p.cancelable, p.detail);
                                }
                                e.type && (0, n.default)(f, e), i.dispatchEvent(f);
                            } else (f = document.createEventObject()).eventType = l, f.detail = arguments[1], 
                            e.type && (0, n.default)(f, e), i.fireEvent("on" + f.eventType, f);
                        } else if (void 0 !== t[l]) if (arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                        arguments[0].detail = arguments.slice(1), "global" === c) for (var h in t[l]) for (d = 0; d < t[l][h].length; d++) t[l][h][d].apply(i, arguments); else for (d = 0; d < t[l][c].length; d++) t[l][c][d].apply(i, arguments);
                    }
                    return this;
                }, t.Event = void 0;
                var a, n = l(i(600)), r = l(i(9380)), o = l(i(4963)), s = l(i(8741));
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                function u(e) {
                    return e instanceof Element;
                }
                t.Event = a, "function" == typeof r.default.CustomEvent ? t.Event = a = r.default.CustomEvent : s.default && (t.Event = a = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                }, a.prototype = r.default.Event.prototype);
            },
            600: function(e, t) {
                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e() {
                    var t, a, n, r, o, s, l = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
                    "boolean" == typeof l && (f = l, l = arguments[u] || {}, u++);
                    "object" !== i(l) && "function" != typeof l && (l = {});
                    for (;u < c; u++) if (null != (t = arguments[u])) for (a in t) n = l[a], r = t[a], 
                    l !== r && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                    s = n && Array.isArray(n) ? n : []) : s = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, 
                    l[a] = e(f, s, r)) : void 0 !== r && (l[a] = r));
                    return l;
                };
            },
            4963: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = s(i(600)), n = s(i(9380)), r = s(i(253)), o = i(3776);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = n.default.document;
                function u(e) {
                    return e instanceof u ? e : this instanceof u ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : l.querySelector(e), 
                    void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new u(e);
                }
                u.prototype = {
                    on: o.on,
                    off: o.off,
                    trigger: o.trigger
                }, u.extend = a.default, u.data = r.default, u.Event = o.Event;
                var c = u;
                t.default = c;
            },
            9845: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.iphone = t.iemobile = t.mobile = t.ie = t.ua = void 0;
                var a, n = (a = i(9380)) && a.__esModule ? a : {
                    default: a
                };
                var r = n.default.navigator && n.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, s = "ontouchstart" in n.default, l = /iemobile/i.test(r), u = /iphone/i.test(r) && !l;
                t.iphone = u, t.iemobile = l, t.mobile = s, t.ie = o, t.ua = r;
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(i, "\\$1");
                };
                var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var a, n = i(8711), r = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, o = i(9845), s = i(7215), l = i(7760), u = i(4713);
                var c = {
                    keydownEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = t.dependencyLib, c = t.maskset, f = this, d = a(f), p = e.keyCode, h = n.caret.call(t, f), v = i.onKeyDown.call(this, e, n.getBuffer.call(t), h, i);
                        if (void 0 !== v) return v;
                        if (p === r.default.BACKSPACE || p === r.default.DELETE || o.iphone && p === r.default.BACKSPACE_SAFARI || e.ctrlKey && p === r.default.X && !("oncut" in f)) e.preventDefault(), 
                        s.handleRemove.call(t, f, p, h), (0, l.writeBuffer)(f, n.getBuffer.call(t, !0), c.p, e, f.inputmask._valueGet() !== n.getBuffer.call(t).join("")); else if (p === r.default.END || p === r.default.PAGE_DOWN) {
                            e.preventDefault();
                            var m = n.seekNext.call(t, n.getLastValidPosition.call(t));
                            n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0);
                        } else p === r.default.HOME && !e.shiftKey || p === r.default.PAGE_UP ? (e.preventDefault(), 
                        n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0)) : i.undoOnEscape && p === r.default.ESCAPE && !0 !== e.altKey ? ((0, 
                        l.checkVal)(f, !0, !1, t.undoValue.split("")), d.trigger("click")) : !0 === i.tabThrough && p === r.default.TAB ? !0 === e.shiftKey ? (h.end = n.seekPrevious.call(t, h.end, !0), 
                        !0 === u.getTest.call(t, h.end - 1).match.static && h.end--, h.begin = n.seekPrevious.call(t, h.end, !0), 
                        h.begin >= 0 && h.end > 0 && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : (h.begin = n.seekNext.call(t, h.begin, !0), 
                        h.end = n.seekNext.call(t, h.begin, !0), h.end < c.maskLength && h.end--, h.begin <= c.maskLength && (e.preventDefault(), 
                        n.caret.call(t, f, h.begin, h.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (p === r.default.RIGHT ? setTimeout((function() {
                            var e = n.caret.call(t, f);
                            n.caret.call(t, f, e.begin);
                        }), 0) : p === r.default.LEFT && setTimeout((function() {
                            var e = n.translatePosition.call(t, f.inputmask.caretPos.begin);
                            n.translatePosition.call(t, f.inputmask.caretPos.end);
                            t.isRTL ? n.caret.call(t, f, e + (e === c.maskLength ? 0 : 1)) : n.caret.call(t, f, e - (0 === e ? 0 : 1));
                        }), 0));
                        t.ignorable = i.ignorables.includes(p);
                    },
                    keypressEvent: function(e, t, i, a, o) {
                        var u = this.inputmask || this, c = u.opts, f = u.dependencyLib, d = u.maskset, p = u.el, h = f(p), v = e.which || e.charCode || e.keyCode;
                        if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || u.ignorable)) return v === r.default.ENTER && u.undoValue !== u._valueGet(!0) && (u.undoValue = u._valueGet(!0), 
                        setTimeout((function() {
                            h.trigger("change");
                        }), 0)), u.skipInputEvent = !0, !0;
                        if (v) {
                            44 !== v && 46 !== v || 3 !== e.location || "" === c.radixPoint || (v = c.radixPoint.charCodeAt(0));
                            var m, g = t ? {
                                begin: o,
                                end: o
                            } : n.caret.call(u, p), k = String.fromCharCode(v);
                            d.writeOutBuffer = !0;
                            var y = s.isValid.call(u, g, k, a, void 0, void 0, void 0, t);
                            if (!1 !== y && (n.resetMaskSet.call(u, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(u, y.pos.begin ? y.pos.begin : y.pos), 
                            d.p = m), m = c.numericInput && void 0 === y.caret ? n.seekPrevious.call(u, m) : m, 
                            !1 !== i && (setTimeout((function() {
                                c.onKeyValidation.call(p, v, y);
                            }), 0), d.writeOutBuffer && !1 !== y)) {
                                var b = n.getBuffer.call(u);
                                (0, l.writeBuffer)(p, b, m, e, !0 !== t);
                            }
                            if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                        }
                    },
                    keyupEvent: function(e) {
                        var t = this.inputmask;
                        !t.isComposing || e.keyCode !== r.default.KEY_229 && e.keyCode !== r.default.ENTER || t.$el.trigger("input");
                    },
                    pasteEvent: function(e) {
                        var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                        i.isRTL && (t = o.end, o.end = o.begin, o.begin = t);
                        var s = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                        if (s == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (s = ""), 
                        u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                        window.clipboardData && window.clipboardData.getData) r = s + window.clipboardData.getData("Text") + u; else {
                            if (!e.clipboardData || !e.clipboardData.getData) return !0;
                            r = s + e.clipboardData.getData("text/plain") + u;
                        }
                        var c = r;
                        if ("function" == typeof a.onBeforePaste) {
                            if (!1 === (c = a.onBeforePaste.call(i, r, a))) return !1;
                            c || (c = r);
                        }
                        return (0, l.checkVal)(this, !0, !1, c.toString().split(""), e), i.$el.trigger("input"), 
                        !1;
                    },
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                        var s = this, f = s.inputmask._valueGet(!0), d = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), p = n.caret.call(t, s, void 0, void 0, !0);
                        if (d !== f) {
                            var h = function(e, a, r) {
                                for (var o, s, l, c = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = c.length >= d.length ? c.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], k = "~"; c.length < h; ) c.push(k);
                                for (;d.length < h; ) d.push(k);
                                for (;f.length < v; ) f.unshift(k);
                                for (;p.length < v; ) p.unshift(k);
                                var y = c.concat(f), b = d.concat(p);
                                for (s = 0, o = y.length; s < o; s++) switch (l = u.getPlaceholder.call(t, n.translatePosition.call(t, s)), 
                                m) {
                                  case "insertText":
                                    b[s - 1] === y[s] && r.begin == y.length - 1 && g.push(y[s]), s = o;
                                    break;

                                  case "insertReplacementText":
                                  case "deleteContentBackward":
                                    y[s] === k ? r.end++ : s = o;
                                    break;

                                  default:
                                    y[s] !== b[s] && (y[s + 1] !== k && y[s + 1] !== l && void 0 !== y[s + 1] || (b[s] !== l || b[s + 1] !== k) && b[s] !== k ? b[s + 1] === k && b[s] === y[s + 1] ? (m = "insertText", 
                                    g.push(y[s]), r.begin--, r.end--) : y[s] !== l && y[s] !== k && (y[s + 1] === k || b[s] !== y[s] && b[s + 1] === y[s + 1]) ? (m = "insertReplacementText", 
                                    g.push(y[s]), r.begin--) : y[s] === k ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, s), !0) || b[s] === i.radixPoint) && r.end++) : s = o : (m = "insertText", 
                                    g.push(y[s]), r.begin--, r.end--));
                                }
                                return {
                                    action: m,
                                    data: g,
                                    caret: r
                                };
                            }(f = function(e, i, a) {
                                if (o.iemobile) {
                                    var r = i.replace(n.getBuffer.call(t).join(""), "");
                                    if (1 === r.length) {
                                        var s = i.split("");
                                        s.splice(a.begin, 0, r), i = s.join("");
                                    }
                                }
                                return i;
                            }(0, f, p), d, p);
                            switch ((s.inputmask.shadowRoot || s.ownerDocument).activeElement !== s && s.focus(), 
                            (0, l.writeBuffer)(s, n.getBuffer.call(t)), n.caret.call(t, s, p.begin, p.end, !0), 
                            h.action) {
                              case "insertText":
                              case "insertReplacementText":
                                h.data.forEach((function(e, i) {
                                    var n = new a.Event("keypress");
                                    n.which = e.charCodeAt(0), t.ignorable = !1, c.keypressEvent.call(s, n);
                                })), setTimeout((function() {
                                    t.$el.trigger("keyup");
                                }), 0);
                                break;

                              case "deleteContentBackward":
                                var v = new a.Event("keydown");
                                v.keyCode = r.default.BACKSPACE, c.keydownEvent.call(s, v);
                                break;

                              default:
                                (0, l.applyInputValue)(s, f);
                            }
                            e.preventDefault();
                        }
                    },
                    compositionendEvent: function(e) {
                        var t = this.inputmask;
                        t.isComposing = !1, t.$el.trigger("input");
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === a && (a = i.inputmask._valueGet(!0)), (0, l.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = this, r = a.inputmask._valueGet();
                        i.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, l.writeBuffer)(a, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                        !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || s.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || c.clickEvent.apply(a, [ e, !0 ]), 
                        t.undoValue = t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                        l.HandleNativePlaceholder)(i, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var i = this.inputmask, a = this;
                        if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                            var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                            void 0 !== r && n.caret.call(i, a, r);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, i = t.maskset, a = this, o = n.caret.call(t, a), u = window.clipboardData || e.clipboardData, c = t.isRTL ? n.getBuffer.call(t).slice(o.end, o.begin) : n.getBuffer.call(t).slice(o.begin, o.end), f = t.isRTL ? c.reverse().join("") : c.join("");
                        u.setData("text", f), window.navigator.clipboard && window.navigator.clipboard.writeText(f), 
                        s.handleRemove.call(t, a, r.default.DELETE, o), (0, l.writeBuffer)(a, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = (0, t.dependencyLib)(this), r = this;
                        if (r.inputmask) {
                            (0, l.HandleNativePlaceholder)(r, t.originalPlaceholder);
                            var o = r.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                            "" !== o && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && o === n.getBufferTemplate.call(t).join("") ? u = [] : l.clearOptionalTail.call(t, u)), 
                            !1 === s.isComplete.call(t, u) && (setTimeout((function() {
                                a.trigger("incomplete");
                            }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                            (0, l.writeBuffer)(r, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                            a.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                            var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                            e.placeholder !== a && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), 
                            t.showMaskOnHover && (0, l.HandleNativePlaceholder)(i, a);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                        t.clearIncomplete && !1 === s.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                        t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                            (0, l.writeBuffer)(e.el, n.getBuffer.call(e));
                        }), 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout((function() {
                            (0, l.applyInputValue)(e.el, e._valueGet(!0));
                        }), 0);
                    }
                };
                t.EventHandlers = c;
            },
            9716: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var a = s(i(2394)), n = s(i(5581)), r = i(8711), o = i(7760);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = {
                    on: function(e, t, i) {
                        var s = e.inputmask.dependencyLib, l = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var l, u = this, c = u.inputmask, f = c ? c.opts : void 0;
                            if (void 0 === c && "FORM" !== this.nodeName) {
                                var d = s.data(u, "_inputmask_opts");
                                s(u).off(), d && new a.default(d).mask(u);
                            } else {
                                if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(u.disabled || u.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === n.default.TAB))) {
                                    switch (t.type) {
                                      case "input":
                                        if (!0 === c.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return c.skipInputEvent = !1, 
                                        t.preventDefault();
                                        break;

                                      case "keydown":
                                        c.skipKeyPressEvent = !1, c.skipInputEvent = c.isComposing = t.keyCode === n.default.KEY_229;
                                        break;

                                      case "keyup":
                                      case "compositionend":
                                        c.isComposing && (c.skipInputEvent = !1);
                                        break;

                                      case "keypress":
                                        if (!0 === c.skipKeyPressEvent) return t.preventDefault();
                                        c.skipKeyPressEvent = !0;
                                        break;

                                      case "click":
                                      case "focus":
                                        return c.validationEvent ? (c.validationEvent = !1, e.blur(), (0, o.HandleNativePlaceholder)(e, (c.isRTL ? r.getBufferTemplate.call(c).slice().reverse() : r.getBufferTemplate.call(c)).join("")), 
                                        setTimeout((function() {
                                            e.focus();
                                        }), f.validationEventTimeOut), !1) : (l = arguments, setTimeout((function() {
                                            e.inputmask && i.apply(u, l);
                                        }), 0), !1);
                                    }
                                    var p = i.apply(u, arguments);
                                    return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                }
                                t.preventDefault();
                            }
                        };
                        [ "submit", "reset" ].includes(t) ? (l = l.bind(e), null !== e.form && s(e.form).on(t, l)) : s(e).on(t, l), 
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var i = e.inputmask.dependencyLib, a = e.inputmask.events;
                            for (var n in t && ((a = [])[t] = e.inputmask.events[t]), a) {
                                for (var r = a[n]; r.length > 0; ) {
                                    var o = r.pop();
                                    [ "submit", "reset" ].includes(n) ? null !== e.form && i(e.form).off(n, o) : i(e).off(n, o);
                                }
                                delete e.inputmask.events[n];
                            }
                        }
                    }
                };
                t.EventRuler = l;
            },
            219: function(e, t, i) {
                var a = c(i(2394)), n = c(i(5581)), r = c(i(7184)), o = i(8711), s = i(4713);
                function l(e) {
                    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                function u(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                        Object.defineProperty(e, a.key, a);
                    }
                }
                function c(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var f = a.default.dependencyLib, d = function() {
                    function e(t, i, a) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.mask = t, this.format = i, this.opts = a, this._date = new Date(1, 0, 1), 
                        this.initDateObject(t, this.opts);
                    }
                    var t, i, a;
                    return t = e, (i = [ {
                        key: "date",
                        get: function() {
                            return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                            this._date;
                        }
                    }, {
                        key: "initDateObject",
                        value: function(e, t) {
                            var i;
                            for (b(t).lastIndex = 0; i = b(t).exec(this.format); ) {
                                var a = new RegExp("\\d+$").exec(i[0]), n = a ? i[0][0] + "x" : i[0], r = void 0;
                                if (void 0 !== e) {
                                    if (a) {
                                        var o = b(t).lastIndex, s = w(i.index, t);
                                        b(t).lastIndex = o, r = e.slice(0, e.indexOf(s.nextMatch[0]));
                                    } else r = e.slice(0, n.length);
                                    e = e.slice(r.length);
                                }
                                Object.prototype.hasOwnProperty.call(v, n) && this.setValue(this, r, n, v[n][2], v[n][1]);
                            }
                        }
                    }, {
                        key: "setValue",
                        value: function(e, t, i, a, n) {
                            if (void 0 !== t && (e[a] = "ampm" === a ? t : t.replace(/[^0-9]/g, "0"), e["raw" + a] = t), 
                            void 0 !== n) {
                                var r = e[a];
                                ("day" === a && 29 === parseInt(r) || "month" === a && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                "day" === a && (h = !0, 0 === parseInt(r) && (r = 1)), "month" === a && (h = !0), 
                                "year" === a && (h = !0, e.yearSet = t != i, r.length < 4 && (r = E(r, 4, !0))), 
                                "" === r || isNaN(r) || n.call(e._date, r), "ampm" === a && n.call(e._date, r);
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._date = new Date(1, 0, 1);
                        }
                    }, {
                        key: "reInit",
                        value: function() {
                            this._date = void 0, this.date;
                        }
                    } ]) && u(t.prototype, i), a && u(t, a), e;
                }(), p = (new Date).getFullYear(), h = !1, v = {
                    d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                    dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                        return E(Date.prototype.getDate.call(this), 2);
                    } ],
                    ddd: [ "" ],
                    dddd: [ "" ],
                    m: [ "[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return Date.prototype.getMonth.call(this) + 1;
                    } ],
                    mm: [ "0[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return E(Date.prototype.getMonth.call(this) + 1, 2);
                    } ],
                    mmm: [ "" ],
                    mmmm: [ "" ],
                    yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                        return E(Date.prototype.getFullYear.call(this), 2);
                    } ],
                    yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                        return E(Date.prototype.getFullYear.call(this), 4);
                    } ],
                    h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                        return E(Date.prototype.getHours.call(this), 2);
                    } ],
                    hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return Date.prototype.getHours;
                    } ],
                    H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                        return E(Date.prototype.getHours.call(this), 2);
                    } ],
                    Hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return function() {
                            return E(Date.prototype.getHours.call(this), e);
                        };
                    } ],
                    M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                    MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                        return E(Date.prototype.getMinutes.call(this), 2);
                    } ],
                    s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                    ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                        return E(Date.prototype.getSeconds.call(this), 2);
                    } ],
                    l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return E(Date.prototype.getMilliseconds.call(this), 3);
                    } ],
                    L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return E(Date.prototype.getMilliseconds.call(this), 2);
                    } ],
                    t: [ "[ap]", g, "ampm", k, 1 ],
                    tt: [ "[ap]m", g, "ampm", k, 2 ],
                    T: [ "[AP]", g, "ampm", k, 1 ],
                    TT: [ "[AP]M", g, "ampm", k, 2 ],
                    Z: [ "" ],
                    o: [ "" ],
                    S: [ "" ]
                }, m = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function g(e) {
                    var t = this.getHours();
                    e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                }
                function k() {}
                function y(e) {
                    var t = new RegExp("\\d+$").exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var i = v[e[0][0] + "x"].slice("");
                        return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                    }
                    if (v[e[0]]) return v[e[0]];
                }
                function b(e) {
                    if (!e.tokenizer) {
                        var t = [], i = [];
                        for (var a in v) if (/\.*x$/.test(a)) {
                            var n = a[0] + "\\d+";
                            -1 === i.indexOf(n) && i.push(n);
                        } else -1 === t.indexOf(a[0]) && t.push(a[0]);
                        e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                        e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function x(e, t, i) {
                    if (!h) return !0;
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && !Number.isFinite(e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var a = w(t.pos, i);
                        if ("yyyy" === a.targetMatch[0] && t.pos - a.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                        t;
                    } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                    e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                        pos: t.pos,
                        c: "0"
                    }, {
                        pos: t.pos + 1,
                        c: t.c
                    } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function P(e, t, i, a) {
                    var n, o, s = "";
                    for (b(i).lastIndex = 0; n = b(i).exec(e); ) {
                        if (void 0 === t) if (o = y(n)) s += "(" + o[0] + ")"; else switch (n[0]) {
                          case "[":
                            s += "(";
                            break;

                          case "]":
                            s += ")?";
                            break;

                          default:
                            s += (0, r.default)(n[0]);
                        } else if (o = y(n)) if (!0 !== a && o[3]) s += o[3].call(t.date); else o[2] ? s += t["raw" + o[2]] : s += n[0]; else s += n[0];
                    }
                    return s;
                }
                function E(e, t, i) {
                    for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                    return e;
                }
                function _(e, t, i) {
                    return "string" == typeof e ? new d(e, t, i) : e && "object" === l(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                }
                function S(e, t) {
                    return P(t.inputFormat, {
                        date: e
                    }, t);
                }
                function w(e, t) {
                    var i, a, n = 0, r = 0;
                    for (b(t).lastIndex = 0; a = b(t).exec(t.inputFormat); ) {
                        var o = new RegExp("\\d+$").exec(a[0]);
                        if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
                            i = a, a = b(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: n - r,
                        nextMatch: a,
                        targetMatch: i
                    };
                }
                a.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, v.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = m[e.inputFormat] || e.inputFormat, 
                            e.displayFormat = m[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = m[e.outputFormat] || e.outputFormat || e.inputFormat, 
                            e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                            e.regex = P(e.inputFormat, void 0, e), e.min = _(e.min, e.inputFormat, e), e.max = _(e.max, e.inputFormat, e), 
                            null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: void 0,
                        outputFormat: void 0,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        i18n: {
                            dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                            monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                            ordinalSuffix: [ "st", "nd", "rd", "th" ]
                        },
                        preValidation: function(e, t, i, a, n, r, o, s) {
                            if (s) return !0;
                            if (isNaN(i) && e[t] !== i) {
                                var l = w(t, n);
                                if (l.nextMatch && l.nextMatch[0] === i && l.targetMatch[0].length > 1) {
                                    var u = v[l.targetMatch[0]][0];
                                    if (new RegExp(u).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                    {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, i, a, n, r, o, l) {
                            var u, c;
                            if (o) return !0;
                            if (!1 === a && (((u = w(t + 1, n)).targetMatch && u.targetMatchIndex === t && u.targetMatch[0].length > 1 && void 0 !== v[u.targetMatch[0]] || (u = w(t + 2, n)).targetMatch && u.targetMatchIndex === t + 1 && u.targetMatch[0].length > 1 && void 0 !== v[u.targetMatch[0]]) && (c = v[u.targetMatch[0]][0]), 
                            void 0 !== c && (void 0 !== r.validPositions[t + 1] && new RegExp(c).test(i + "0") ? (e[t] = i, 
                            e[t + 1] = "0", a = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(c).test("0" + i) && (e[t] = "0", e[t + 1] = i, a = {
                                pos: t + 2
                            })), !1 === a)) return a;
                            if (a.fuzzy && (e = a.buffer, t = a.pos), (u = w(t, n)).targetMatch && u.targetMatch[0] && void 0 !== v[u.targetMatch[0]]) {
                                var f = v[u.targetMatch[0]];
                                c = f[0];
                                var d = e.slice(u.targetMatchIndex, u.targetMatchIndex + u.targetMatch[0].length);
                                if (!1 === new RegExp(c).test(d.join("")) && 2 === u.targetMatch[0].length && r.validPositions[u.targetMatchIndex] && r.validPositions[u.targetMatchIndex + 1] && (r.validPositions[u.targetMatchIndex + 1].input = "0"), 
                                "year" == f[2]) for (var h = s.getMaskTemplate.call(this, !1, 1, void 0, !0), m = t + 1; m < e.length; m++) e[m] = h[m], 
                                delete r.validPositions[m];
                            }
                            var g = a, k = _(e.join(""), n.inputFormat, n);
                            return g && k.date.getTime() == k.date.getTime() && (n.prefillYear && (g = function(e, t, i) {
                                if (e.year !== e.rawyear) {
                                    var a = p.toString(), n = e.rawyear.replace(/[^0-9]/g, ""), r = a.slice(0, n.length), o = a.slice(n.length);
                                    if (2 === n.length && n === r) {
                                        var s = new Date(p, e.month - 1, e.day);
                                        e.day == s.getDate() && (!i.max || i.max.date.getTime() >= s.getTime()) && (e.date.setFullYear(p), 
                                        e.year = a, t.insert = [ {
                                            pos: t.pos + 1,
                                            c: o[0]
                                        }, {
                                            pos: t.pos + 2,
                                            c: o[1]
                                        } ]);
                                    }
                                }
                                return t;
                            }(k, g, n)), g = function(e, t, i, a, n) {
                                if (!t) return t;
                                if (t && i.min && i.min.date.getTime() == i.min.date.getTime()) {
                                    var r;
                                    for (e.reset(), b(i).lastIndex = 0; r = b(i).exec(i.inputFormat); ) {
                                        var o;
                                        if ((o = y(r)) && o[3]) {
                                            for (var s = o[1], l = e[o[2]], u = i.min[o[2]], c = i.max ? i.max[o[2]] : u, f = [], d = !1, p = 0; p < u.length; p++) void 0 !== a.validPositions[p + r.index] || d ? (f[p] = l[p], 
                                            d = d || l[p] > u[p]) : (f[p] = u[p], "year" === o[2] && l.length - 1 == p && u != c && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                            "ampm" === o[2] && u != c && i.min.date.getTime() > e.date.getTime() && (f[p] = c[p]));
                                            s.call(e._date, f.join(""));
                                        }
                                    }
                                    t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                }
                                return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()), 
                                t;
                            }(k, g = x.call(this, k, g, n), n, r)), void 0 !== t && g && a.pos !== t ? {
                                buffer: P(n.inputFormat, k, n).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: a.pos
                                },
                                pos: a.caret || a.pos
                            } : g;
                        },
                        onKeyDown: function(e, t, i, a) {
                            e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(S(new Date, a)), 
                            f(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, i) {
                            return t ? P(i.outputFormat, _(e, i.inputFormat, i), i, !0) : t;
                        },
                        casing: function(e, t, i, a) {
                            return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = S(e, t)), e;
                        },
                        insertMode: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            3851: function(e, t, i) {
                var a, n = (a = i(2394)) && a.__esModule ? a : {
                    default: a
                }, r = i(8711), o = i(4713);
                n.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                function l(e, t, i, a, n) {
                    return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                    s.test(e);
                }
                n.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                        definitions: {
                            i: {
                                validator: l
                            },
                            j: {
                                validator: l
                            },
                            k: {
                                validator: l
                            },
                            l: {
                                validator: l
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "numeric"
                    },
                    email: {
                        mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                        greedy: !1,
                        casing: "lower",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, i, a, n, s, l) {
                            var u = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""));
                        }
                    }
                });
            },
            207: function(e, t, i) {
                var a = s(i(2394)), n = s(i(5581)), r = s(i(7184)), o = i(8711);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = a.default.dependencyLib;
                function u(e, t) {
                    for (var i = "", n = 0; n < e.length; n++) a.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
                    return i;
                }
                function c(e, t, i, a) {
                    if (e.length > 0 && t > 0 && (!i.digitsOptional || a)) {
                        var n = e.indexOf(i.radixPoint), r = !1;
                        i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(i.radixPoint), 
                        n = e.length - 1);
                        for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
                    }
                    return r && e.push(i.negationSymbol.back), e;
                }
                function f(e, t) {
                    var i = 0;
                    if ("+" === e) {
                        for (i in t.validPositions) ;
                        i = o.seekNext.call(this, parseInt(i));
                    }
                    for (var a in t.tests) if ((a = parseInt(a)) >= i) for (var n = 0, r = t.tests[a].length; n < r; n++) if ((void 0 === t.validPositions[a] || "-" === e) && t.tests[a][n].match.def === e) return a + (void 0 !== t.validPositions[a] && "-" !== e ? 1 : 0);
                    return i;
                }
                function d(e, t) {
                    var i = -1;
                    for (var a in t.validPositions) {
                        var n = t.validPositions[a];
                        if (n && n.match.def === e) {
                            i = parseInt(a);
                            break;
                        }
                    }
                    return i;
                }
                function p(e, t, i, a, n) {
                    var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1, o = (-1 !== r || a && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
                    return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === i ? r + 1 : r,
                            c: n.radixPoint
                        },
                        pos: i
                    } : o;
                }
                a.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                            " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                            "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", i = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                            e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                            "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                            e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                            e.numericInput = !0);
                            var a, n = "[+]";
                            if (n += u(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                            e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                            e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                            n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? n += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = n + i + t + "{0," + e.digits + "}", 
                                e.keepStatic = !0) : n += i + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return n += u(e.suffix, e), n += "[-]", a && (n = [ a + u(e.suffix, e) + "[-]", n ]), 
                            e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), n;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "000",
                            m: "000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        definitions: {
                            0: {
                                validator: p
                            },
                            1: {
                                validator: p,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, i, a, n) {
                                    return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, i, a, n) {
                                    return n.allowMinus && e === n.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, i, a, n, r, o, s) {
                            var l;
                            if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
                            if (l = n.shortcuts && n.shortcuts[i]) {
                                if (l.length > 1) for (var u = [], c = 0; c < l.length; c++) u.push({
                                    pos: t + c,
                                    c: l[c],
                                    strict: !1
                                });
                                return {
                                    insert: u
                                };
                            }
                            var p = e.indexOf(n.radixPoint), h = t;
                            if (t = function(e, t, i, a, n) {
                                return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (i > 0 || t == n.radixPoint) && (void 0 === a.validPositions[e - 1] || a.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), 
                                e;
                            }(t, i, p, r, n), "-" === i || i === n.negationSymbol.front) {
                                if (!0 !== n.allowMinus) return !1;
                                var v = !1, m = d("+", r), g = d("-", r);
                                return -1 !== m && (v = [ m, g ]), !1 !== v ? {
                                    remove: v,
                                    caret: h - n.negationSymbol.back.length
                                } : {
                                    insert: [ {
                                        pos: f.call(this, "+", r),
                                        c: n.negationSymbol.front,
                                        fromIsValid: !0
                                    }, {
                                        pos: f.call(this, "-", r),
                                        c: n.negationSymbol.back,
                                        fromIsValid: void 0
                                    } ],
                                    caret: h + n.negationSymbol.back.length
                                };
                            }
                            if (i === n.groupSeparator) return {
                                caret: h
                            };
                            if (s) return !0;
                            if (-1 !== p && !0 === n._radixDance && !1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && p !== t) return {
                                caret: n._radixDance && t === p - 1 ? p + 1 : p
                            };
                            if (!1 === n.__financeInput) if (a) {
                                if (n.digitsOptional) return {
                                    rewritePosition: o.end
                                };
                                if (!n.digitsOptional) {
                                    if (o.begin > p && o.end <= p) return i === n.radixPoint ? {
                                        insert: {
                                            pos: p + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: p
                                    } : {
                                        rewritePosition: p + 1
                                    };
                                    if (o.begin < p) return {
                                        rewritePosition: o.begin - 1
                                    };
                                }
                            } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                rewritePosition: p
                            };
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, i, a, n, r, o) {
                            if (!1 === a) return a;
                            if (o) return !0;
                            if (null !== n.min || null !== n.max) {
                                var s = n.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, n, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== n.min && s < n.min && (s.toString().length > n.min.toString().length || s < 0)) return !1;
                                if (null !== n.max && s > n.max) return !!n.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: c(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                };
                            }
                            return a;
                        },
                        onUnMask: function(e, t, i) {
                            if ("" === t && !0 === i.nullable) return t;
                            var a = e.replace(i.prefix, "");
                            return a = (a = a.replace(i.suffix, "")).replace(new RegExp((0, r.default)(i.groupSeparator), "g"), ""), 
                            "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                            i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(r.default.call(this, i.radixPoint), ".")), 
                            a = (a = a.replace(new RegExp("^" + (0, r.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            r.default)(i.negationSymbol.back) + "$"), ""), Number(a)) : a;
                        },
                        isComplete: function(e, t) {
                            var i = (t.numericInput ? e.slice().reverse() : e).join("");
                            return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, r.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            r.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                            r.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                            r.default)(t.radixPoint), ".")), isFinite(i);
                        },
                        onBeforeMask: function(e, t) {
                            var i = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                            var a = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, n = e.split(i), o = n[0].replace(/[^\-0-9]/g, ""), s = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "", l = n.length > 1;
                            e = o + ("" !== s ? i + s : s);
                            var u = 0;
                            if ("" !== i && (u = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                            "" !== s || !t.digitsOptional)) {
                                var f = Math.pow(10, u || 1);
                                e = e.replace((0, r.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(u)), 
                                e = e.toString().replace(".", i);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                            null !== t.min || null !== t.max) {
                                var d = e.toString().replace(i, ".");
                                null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                            }
                            return a && "-" !== e.charAt(0) && (e = "-" + e), c(e.toString().split(""), u, t, l).join("");
                        },
                        onBeforeWrite: function(e, t, i, a) {
                            function n(e, t) {
                                if (!1 !== a.__financeInput || t) {
                                    var i = e.indexOf(a.radixPoint);
                                    -1 !== i && e.splice(i, 1);
                                }
                                if ("" !== a.groupSeparator) for (;-1 !== (i = e.indexOf(a.groupSeparator)); ) e.splice(i, 1);
                                return e;
                            }
                            var o, s = function(e, t) {
                                var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, r.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                r.default)(t.prefix) + ")(.*)(" + (0, r.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                r.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = i ? i[2] : "", n = !1;
                                return a && (a = a.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < a.length)) && n;
                            }(t, a);
                            if (s) for (var u = t.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), f = s[0] == s.input ? 1 : 0, d = s[0].length - f; d > 0; d--) delete this.maskset.validPositions[u + d], 
                            delete t[u + d];
                            if (e) switch (e.type) {
                              case "blur":
                              case "checkval":
                                if (null !== a.min) {
                                    var p = a.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, a, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== a.min && p < a.min) return {
                                        refreshFromBuffer: !0,
                                        buffer: c(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                    };
                                }
                                if (t[t.length - 1] === a.negationSymbol.front) {
                                    var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, r.default)(a.negationSymbol.front) + "?" : "") + (0, 
                                    r.default)(a.prefix) + ")(.*)(" + (0, r.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, 
                                    r.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                                    0 == (h ? h[2] : "") && (o = {
                                        refreshFromBuffer: !0,
                                        buffer: [ 0 ]
                                    });
                                } else "" !== a.radixPoint && t[0] === a.radixPoint && (o && o.buffer ? o.buffer.shift() : (t.shift(), 
                                o = {
                                    refreshFromBuffer: !0,
                                    buffer: n(t)
                                }));
                                if (a.enforceDigitsOnBlur) {
                                    var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                    o.refreshFromBuffer = !0, o.buffer = c(v, a.digits, a, !0).reverse();
                                }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, i, a) {
                            var r, o = l(this);
                            if (e.ctrlKey) switch (e.keyCode) {
                              case n.default.UP:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), 
                                o.trigger("setvalue"), !1;

                              case n.default.DOWN:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), 
                                o.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                if (t[e.keyCode === n.default.DELETE ? i.begin - 1 : i.end] === a.negationSymbol.front) return r = t.slice().reverse(), 
                                "" !== a.negationSymbol.front && r.shift(), "" !== a.negationSymbol.back && r.pop(), 
                                o.trigger("setvalue", [ r.join(""), i.begin ]), !1;
                                if (!0 === a._radixDance) {
                                    var s = t.indexOf(a.radixPoint);
                                    if (a.digitsOptional) {
                                        if (0 === s) return (r = t.slice().reverse()).pop(), o.trigger("setvalue", [ r.join(""), i.begin >= r.length ? r.length : i.begin ]), 
                                        !1;
                                    } else if (-1 !== s && (i.begin < s || i.end < s || e.keyCode === n.default.DELETE && i.begin === s)) return i.begin !== i.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || i.begin++, 
                                    (r = t.slice().reverse()).splice(r.length - i.begin, i.begin - i.end + 1), r = c(r, a.digits, a).join(""), 
                                    o.trigger("setvalue", [ r, i.begin >= r.length ? s + 1 : i.begin ]), !1;
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t, i) {
                var a;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = ((a = i(8741)) && a.__esModule ? a : {
                    default: a
                }).default ? window : {};
                t.default = n;
            },
            7760: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.applyInputValue = c, t.clearOptionalTail = f, t.checkVal = d, t.HandleNativePlaceholder = function(e, t) {
                    var i = e ? e.inputmask : this;
                    if (l.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var a = o.getBuffer.call(i).slice(), n = e.inputmask._valueGet();
                            if (n !== t) {
                                var r = o.getLastValidPosition.call(i);
                                -1 === r && n === o.getBufferTemplate.call(i).join("") ? a = [] : -1 !== r && f.call(i, a), 
                                p(e, a);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, i = t.opts, a = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    var n = [], r = a.validPositions;
                    for (var s in r) r[s] && r[s].match && (1 != r[s].match.static || Array.isArray(a.metadata) && !0 !== r[s].generatedInput) && n.push(r[s].input);
                    var l = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");
                    if ("function" == typeof i.onUnMask) {
                        var u = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                        l = i.onUnMask.call(t, u, l, i);
                    }
                    return l;
                }, t.writeBuffer = p;
                var a, n = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, r = i(4713), o = i(8711), s = i(7215), l = i(9845), u = i(6030);
                function c(e, t) {
                    var i = e ? e.inputmask : this, a = i.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                    d(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                }
                function f(e) {
                    e.length = 0;
                    for (var t, i = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                    return e;
                }
                function d(e, t, i, a, n) {
                    var l = e ? e.inputmask : this, c = l.maskset, f = l.opts, d = l.dependencyLib, h = a.slice(), v = "", m = -1, g = void 0, k = f.skipOptionalPartCharacter;
                    f.skipOptionalPartCharacter = "", o.resetMaskSet.call(l), c.tests = {}, m = f.radixPoint ? o.determineNewCaretPosition.call(l, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, c.p = m, l.caretPos = {
                        begin: m
                    };
                    var y = [], b = l.caretPos;
                    if (h.forEach((function(e, t) {
                        if (void 0 !== e) {
                            var a = new d.Event("_checkval");
                            a.which = e.toString().charCodeAt(0), v += e;
                            var n = o.getLastValidPosition.call(l, void 0, !0);
                            !function(e, t) {
                                for (var i = r.getMaskTemplate.call(l, !0, 0).slice(e, o.seekNext.call(l, e, !1, !1)).join("").replace(/'/g, ""), a = i.indexOf(t); a > 0 && " " === i[a - 1]; ) a--;
                                var n = 0 === a && !o.isMask.call(l, e) && (r.getTest.call(l, e).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(l, e).match.static && r.getTest.call(l, e).match.nativeDef === "'" + t.charAt(0) || " " === r.getTest.call(l, e).match.nativeDef && (r.getTest.call(l, e + 1).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(l, e + 1).match.static && r.getTest.call(l, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!n && a > 0 && !o.isMask.call(l, e, !1, !0)) {
                                    var s = o.seekNext.call(l, e);
                                    l.caretPos.begin < s && (l.caretPos = {
                                        begin: s
                                    });
                                }
                                return n;
                            }(m, v) ? (g = u.EventHandlers.keypressEvent.call(l, a, !0, !1, i, l.caretPos.begin)) && (m = l.caretPos.begin + 1, 
                            v = "") : g = u.EventHandlers.keypressEvent.call(l, a, !0, !1, i, n + 1), g ? (void 0 !== g.pos && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static && void 0 === c.validPositions[g.pos].alternation && (y.push(g.pos), 
                            l.isRTL || (g.forwardPosition = g.pos + 1)), p.call(l, void 0, o.getBuffer.call(l), g.forwardPosition, a, !1), 
                            l.caretPos = {
                                begin: g.forwardPosition,
                                end: g.forwardPosition
                            }, b = l.caretPos) : void 0 === c.validPositions[t] && h[t] === r.getPlaceholder.call(l, t) && o.isMask.call(l, t, !0) ? l.caretPos.begin++ : l.caretPos = b;
                        }
                    })), y.length > 0) {
                        var x, P, E = o.seekNext.call(l, -1, void 0, !1);
                        if (!s.isComplete.call(l, o.getBuffer.call(l)) && y.length <= E || s.isComplete.call(l, o.getBuffer.call(l)) && y.length > 0 && y.length !== E && 0 === y[0]) for (var _ = E; void 0 !== (x = y.shift()); ) {
                            var S = new d.Event("_checkval");
                            if ((P = c.validPositions[x]).generatedInput = !0, S.which = P.input.charCodeAt(0), 
                            (g = u.EventHandlers.keypressEvent.call(l, S, !0, !1, i, _)) && void 0 !== g.pos && g.pos !== x && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static) y.push(g.pos); else if (!g) break;
                            _++;
                        }
                    }
                    t && p.call(l, e, o.getBuffer.call(l), g ? g.forwardPosition : l.caretPos.begin, n || new d.Event("checkval"), n && "input" === n.type && l.undoValue !== l._valueGet(!0)), 
                    f.skipOptionalPartCharacter = k;
                }
                function p(e, t, i, a, r) {
                    var l = e ? e.inputmask : this, u = l.opts, c = l.dependencyLib;
                    if (a && "function" == typeof u.onBeforeWrite) {
                        var f = u.onBeforeWrite.call(l, a, t, i, u);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var d = f.refreshFromBuffer;
                                s.refreshFromBuffer.call(l, !0 === d ? d : d.start, d.end, f.buffer || t), t = o.getBuffer.call(l, !0);
                            }
                            void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || o.caret.call(l, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.keyCode === n.default.DELETE || a.keyCode === n.default.BACKSPACE)), 
                    !0 === r)) {
                        var p = c(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                            h === o.getBufferTemplate.call(l).join("") ? p.trigger("cleared") : !0 === s.isComplete.call(l, t) && p.trigger("complete");
                        }), 0);
                    }
                }
            },
            2394: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, i(7149), i(3194);
                var a = i(157), n = m(i(4963)), r = m(i(9380)), o = i(2391), s = i(4713), l = i(8711), u = i(7215), c = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                function v(e) {
                    return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                function m(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var g = r.default.document, k = "_inputmask_opts";
                function y(e, t, i) {
                    if (h.default) {
                        if (!(this instanceof y)) return new y(e, t, i);
                        this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                        !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                        e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                        this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                        this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, 
                        this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, 
                        this.originalPlaceholder = void 0, this.isComposing = !1;
                    }
                }
                function b(e, t, i) {
                    var a = y.prototype.aliases[e];
                    return a ? (a.alias && b(a.alias, void 0, i), n.default.extend(!0, i, a), n.default.extend(!0, i, t), 
                    !0) : (null === i.mask && (i.mask = e), !1);
                }
                y.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: p.default,
                    definitions: d.default,
                    aliases: {},
                    masksCache: {},
                    get isRTL() {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                        (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : Array.from(e)).forEach((function(e, i) {
                            var s = n.default.extend(!0, {}, t.opts);
                            if (function(e, t, i, a) {
                                function o(t, n) {
                                    var o = "" === a ? t : a + "-" + t;
                                    null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), 
                                    i[t] = n);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var s, l, u, c, f = e.getAttribute(a);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), l = JSON.parse("{" + f + "}")), 
                                    l) for (c in u = void 0, l) if ("alias" === c.toLowerCase()) {
                                        u = l[c];
                                        break;
                                    }
                                    for (s in o("alias", u), i.alias && b(i.alias, i, t), t) {
                                        if (l) for (c in u = void 0, l) if (c.toLowerCase() === s.toLowerCase()) {
                                            u = l[c];
                                            break;
                                        }
                                        o(s, u);
                                    }
                                }
                                n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                t.isRTL = !0);
                                return Object.keys(i).length;
                            }(e, s, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var l = (0, o.generateMaskSet)(s, t.noMasksCache);
                                void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = s, e.inputmask.noMasksCache = t.noMasksCache, 
                                e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = l, n.default.data(e, k, t.userOptions), 
                                a.mask.call(e.inputmask));
                            }
                        })), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (n.default.extend(this.userOptions, e), 
                        this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            c.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                        }
                        return c.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            n.default.data(this.el, k, null);
                            var e = this.opts.autoUnmask ? (0, c.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                            f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                            this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        l.getBufferTemplate.call(this).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        u.isComplete.call(this, l.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        Array.isArray(this.maskset.metadata)) {
                            var e = s.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach((function(t) {
                                return t.mask !== e || (e = t, !1);
                            })), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            c.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        for (var i = l.getBuffer.call(this), a = l.determineLastRequiredPosition.call(this), n = i.length - 1; n > a && !l.isMask.call(this, n); n--) ;
                        return i.splice(a, n + 1 - a), u.isComplete.call(this, i) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                        var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        c.checkVal.call(this, void 0, !0, !1, i);
                        var a = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        return t ? {
                            value: a,
                            metadata: this.getmetadata()
                        } : a;
                    },
                    setValue: function(e) {
                        this.el && (0, n.default)(this.el).trigger("setvalue", [ e ]);
                    },
                    analyseMask: o.analyseMask
                }, y.extendDefaults = function(e) {
                    n.default.extend(!0, y.prototype.defaults, e);
                }, y.extendDefinitions = function(e) {
                    n.default.extend(!0, y.prototype.definitions, e);
                }, y.extendAliases = function(e) {
                    n.default.extend(!0, y.prototype.aliases, e);
                }, y.format = function(e, t, i) {
                    return y(t).format(e, i);
                }, y.unmask = function(e, t) {
                    return y(t).unmaskedvalue(e);
                }, y.isValid = function(e, t) {
                    return y(t).isValid(e);
                }, y.remove = function(e) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask && e.inputmask.remove();
                    }));
                }, y.setValue = function(e, t) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [ t ]);
                    }));
                }, y.dependencyLib = n.default, r.default.Inputmask = y;
                var x = y;
                t.default = x;
            },
            5296: function(e, t, i) {
                function a(e) {
                    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                var n = p(i(9380)), r = p(i(2394)), o = p(i(8741));
                function s(e, t) {
                    if (t && ("object" === a(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }
                function l(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return (l = function(e) {
                        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                        var i;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, a);
                        }
                        function a() {
                            return u(e, arguments, d(this).constructor);
                        }
                        return a.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: a,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), f(a, e);
                    })(e);
                }
                function u(e, t, i) {
                    return (u = c() ? Reflect.construct : function(e, t, i) {
                        var a = [ null ];
                        a.push.apply(a, t);
                        var n = new (Function.bind.apply(e, a));
                        return i && f(n, i.prototype), n;
                    }).apply(null, arguments);
                }
                function c() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                        !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function f(e, t) {
                    return (f = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e;
                    })(e, t);
                }
                function d(e) {
                    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
                }
                function p(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var h = n.default.document;
                if (o.default && h && h.head && h.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
                    var v = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && f(e, t);
                        }(n, e);
                        var t, i, a = (t = n, i = c(), function() {
                            var e, a = d(t);
                            if (i) {
                                var n = d(this).constructor;
                                e = Reflect.construct(a, arguments, n);
                            } else e = a.apply(this, arguments);
                            return s(this, e);
                        });
                        function n() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, n);
                            var t = (e = a.call(this)).getAttributeNames(), i = e.attachShadow({
                                mode: "closed"
                            }), o = h.createElement("input");
                            for (var s in o.type = "text", i.appendChild(o), t) Object.prototype.hasOwnProperty.call(t, s) && o.setAttribute(t[s], e.getAttribute(t[s]));
                            var l = new r.default;
                            return l.dataAttribute = "", l.mask(o), o.inputmask.shadowRoot = i, e;
                        }
                        return n;
                    }(l(HTMLElement));
                    n.default.customElements.define("input-mask", v);
                }
            },
            2391: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.generateMaskSet = function(e, t) {
                    var i;
                    function n(e, i, n) {
                        var o, s, l = !1;
                        if (null !== e && "" !== e || ((l = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (l = !0, 
                        e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), 
                        n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                            var u = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                            e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + u + "," + n.repeat + n.quantifiermarker[1];
                        }
                        return s = l ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, 
                        !1 !== n.keepStatic && (s = "ks_" + s), void 0 === r.default.prototype.masksCache[s] || !0 === t ? (o = {
                            mask: e,
                            maskToken: r.default.prototype.analyseMask(e, l, n),
                            validPositions: {},
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: i,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (r.default.prototype.masksCache[s] = o, o = a.default.extend(!0, {}, r.default.prototype.masksCache[s]))) : o = a.default.extend(!0, {}, r.default.prototype.masksCache[s]), 
                        o;
                    }
                    "function" == typeof e.mask && (e.mask = e.mask(e));
                    if (Array.isArray(e.mask)) {
                        if (e.mask.length > 1) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var o = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                o.length > 1 && (o += e.groupmarker[1] + e.alternatormarker + e.groupmarker[0]), 
                                void 0 !== t.mask && "function" != typeof t.mask ? o += t.mask : o += t;
                            })), n(o += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    null === e.keepStatic && (e.keepStatic = !1);
                    i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e);
                    return i;
                }, t.analyseMask = function(e, t, i) {
                    var a, o, s, l, u, c, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new n.default, v = [], m = [], g = !1;
                    function k(e, a, n) {
                        n = void 0 !== n ? n : e.matches.length;
                        var o = e.matches[n - 1];
                        if (t) 0 === a.indexOf("[") || p && /\\d|\\s|\\w]/i.test(a) || "." === a ? e.matches.splice(n++, 0, {
                            fn: new RegExp(a, i.casing ? "i" : ""),
                            static: !1,
                            optionality: !1,
                            newBlockMarker: void 0 === o ? "master" : o.def !== a,
                            casing: null,
                            def: a,
                            placeholder: void 0,
                            nativeDef: a
                        }) : (p && (a = a[a.length - 1]), a.split("").forEach((function(t, a) {
                            o = e.matches[n - 1], e.matches.splice(n++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || t,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                nativeDef: (p ? "'" : "") + t
                            });
                        }))), p = !1; else {
                            var s = i.definitions && i.definitions[a] || i.usePrototypeDefinitions && r.default.prototype.definitions[a];
                            s && !p ? e.matches.splice(n++, 0, {
                                fn: s.validator ? "string" == typeof s.validator ? new RegExp(s.validator, i.casing ? "i" : "") : new function() {
                                    this.test = s.validator;
                                } : new RegExp("."),
                                static: s.static || !1,
                                optionality: s.optional || !1,
                                newBlockMarker: void 0 === o || s.optional ? "master" : o.def !== (s.definitionSymbol || a),
                                casing: s.casing,
                                def: s.definitionSymbol || a,
                                placeholder: s.placeholder,
                                nativeDef: a,
                                generated: s.generated
                            }) : (e.matches.splice(n++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || a) ? new RegExp("[" + (i.staticDefinitionSymbol || a) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== a && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || a,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
                                nativeDef: (p ? "'" : "") + a
                            }), p = !1);
                        }
                    }
                    function y() {
                        if (v.length > 0) {
                            if (k(l = v[v.length - 1], o), l.isAlternator) {
                                u = v.pop();
                                for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                v.length > 0 ? (l = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                            }
                        } else k(h, o);
                    }
                    function b(e) {
                        var t = new n.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function x() {
                        if ((s = v.pop()).openGroup = !1, void 0 !== s) if (v.length > 0) {
                            if ((l = v[v.length - 1]).matches.push(s), l.isAlternator) {
                                u = v.pop();
                                for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup = !1, u.matches[e].alternatorGroup = !1;
                                v.length > 0 ? (l = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                            }
                        } else h.matches.push(s); else y();
                    }
                    function P(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                    }
                    t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                    for (;a = t ? d.exec(e) : f.exec(e); ) {
                        if (o = a[0], t) {
                            switch (o.charAt(0)) {
                              case "?":
                                o = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                o = "{" + o + "}";
                                break;

                              case "|":
                                if (0 === v.length) {
                                    var E = b(h.matches);
                                    E.openGroup = !0, v.push(E), h.matches = [], g = !0;
                                }
                            }
                            switch (o) {
                              case "\\d":
                                o = "[0-9]";
                            }
                        }
                        if (p) y(); else switch (o.charAt(0)) {
                          case "$":
                          case "^":
                            t || y();
                            break;

                          case i.escapeChar:
                            p = !0, t && y();
                            break;

                          case i.optionalmarker[1]:
                          case i.groupmarker[1]:
                            x();
                            break;

                          case i.optionalmarker[0]:
                            v.push(new n.default(!1, !0));
                            break;

                          case i.groupmarker[0]:
                            v.push(new n.default(!0));
                            break;

                          case i.quantifiermarker[0]:
                            var _ = new n.default(!1, !1, !0), S = (o = o.replace(/[{}?]/g, "")).split("|"), w = S[0].split(","), M = isNaN(w[0]) ? w[0] : parseInt(w[0]), O = 1 === w.length ? M : isNaN(w[1]) ? w[1] : parseInt(w[1]), T = isNaN(S[1]) ? S[1] : parseInt(S[1]);
                            "*" !== M && "+" !== M || (M = "*" === O ? 0 : 1), _.quantifier = {
                                min: M,
                                max: O,
                                jit: T
                            };
                            var C = v.length > 0 ? v[v.length - 1].matches : h.matches;
                            if ((a = C.pop()).isAlternator) {
                                C.push(a), C = a.matches;
                                var A = new n.default(!0), D = C.pop();
                                C.push(A), C = A.matches, a = D;
                            }
                            a.isGroup || (a = b([ a ])), C.push(a), C.push(_);
                            break;

                          case i.alternatormarker:
                            if (v.length > 0) {
                                var j = (l = v[v.length - 1]).matches[l.matches.length - 1];
                                c = l.openGroup && (void 0 === j.matches || !1 === j.isGroup && !1 === j.isAlternator) ? v.pop() : P(l.matches);
                            } else c = P(h.matches);
                            if (c.isAlternator) v.push(c); else if (c.alternatorGroup ? (u = v.pop(), c.alternatorGroup = !1) : u = new n.default(!1, !1, !1, !0), 
                            u.matches.push(c), v.push(u), c.openGroup) {
                                c.openGroup = !1;
                                var B = new n.default(!0);
                                B.alternatorGroup = !0, v.push(B);
                            }
                            break;

                          default:
                            y();
                        }
                    }
                    g && x();
                    for (;v.length > 0; ) s = v.pop(), h.matches.push(s);
                    h.matches.length > 0 && (!function e(a) {
                        a && a.matches && a.matches.forEach((function(n, r) {
                            var o = a.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, 
                            t || (k(n, i.groupmarker[0], 0), !0 !== n.openGroup && k(n, i.groupmarker[1]))), 
                            e(n);
                        }));
                    }(h), m.push(h));
                    (i.numericInput || i.isRTL) && function e(t) {
                        for (var a in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, a)) {
                            var n = parseInt(a);
                            if (t.matches[a].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                                var r = t.matches[a];
                                t.matches.splice(a, 1), t.matches.splice(n + 1, 0, r);
                            }
                            void 0 !== t.matches[a].matches ? t.matches[a] = e(t.matches[a]) : t.matches[a] = ((o = t.matches[a]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                            o);
                        }
                        var o;
                        return t;
                    }(m[0]);
                    return m;
                };
                var a = o(i(4963)), n = o(i(9695)), r = o(i(2394));
                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, i = this.el, a = this.dependencyLib;
                    s.EventRuler.off(i);
                    var f = function(t, i) {
                        "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.default.ENTER);
                        var l = t.getAttribute("type"), u = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(l) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!u) if ("input" === t.tagName.toLowerCase()) {
                            var c = document.createElement("input");
                            c.setAttribute("type", l), u = "text" === c.type, c = null;
                        } else u = "partial";
                        return !1 !== u ? function(t) {
                            var n, l;
                            function u() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== r.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, r.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, r.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                            }
                            function c(e) {
                                l.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== i.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (n = f.get, l = f.set, Object.defineProperty(t, "value", {
                                            get: u,
                                            set: c,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                            return this.textContent;
                                        }, l = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: u,
                                            set: c,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                    l = t.__lookupSetter__("value"), t.__defineGetter__("value", u), t.__defineSetter__("value", c));
                                    t.inputmask.__valueGet = n, t.inputmask.__valueSet = l;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                }, t.inputmask._valueSet = function(t, i) {
                                    l.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === n && (n = function() {
                                    return this.value;
                                }, l = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (a.valHooks && (void 0 === a.valHooks[t] || !0 !== a.valHooks[t].inputmaskpatch)) {
                                        var n = a.valHooks[t] && a.valHooks[t].get ? a.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, s = a.valHooks[t] && a.valHooks[t].set ? a.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        a.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var a = n(t);
                                                    return -1 !== r.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? a : "";
                                                }
                                                return n(t);
                                            },
                                            set: function(e, t) {
                                                var i = s(e, t);
                                                return e.inputmask && (0, o.applyInputValue)(e, t), i;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(t) {
                                    s.EventRuler.on(t, "mouseenter", (function() {
                                        var t = this.inputmask._valueGet(!0);
                                        t !== (e.isRTL ? r.getBuffer.call(e).reverse() : r.getBuffer.call(e)).join("") && (0, 
                                        o.applyInputValue)(this, t);
                                    }));
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, u;
                    }(i, t);
                    if (!1 !== f) {
                        e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                        -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                        i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                        l.iphone && (t.insertModeVisual = !1), s.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                        s.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), s.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                        s.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), s.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                        s.EventRuler.on(i, "click", c.EventHandlers.clickEvent), s.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                        s.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), s.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                        s.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), s.EventRuler.on(i, "complete", t.oncomplete), 
                        s.EventRuler.on(i, "incomplete", t.onincomplete), s.EventRuler.on(i, "cleared", t.oncleared), 
                        !0 !== t.inputEventOnly && (s.EventRuler.on(i, "keydown", c.EventHandlers.keydownEvent), 
                        s.EventRuler.on(i, "keypress", c.EventHandlers.keypressEvent), s.EventRuler.on(i, "keyup", c.EventHandlers.keyupEvent)), 
                        (l.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), s.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent), 
                        s.EventRuler.on(i, "compositionend", c.EventHandlers.compositionendEvent)), s.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), 
                        r.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                        var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                        if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                            (0, o.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                            var p = r.getBuffer.call(e).slice();
                            !1 === u.isComplete.call(e, p) && t.clearIncomplete && r.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === r.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                            (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                            o.writeBuffer)(i, p), d === i && r.caret.call(e, i, r.seekNext.call(e, r.getLastValidPosition.call(e)));
                        }
                    }
                };
                var a, n = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, r = i(8711), o = i(7760), s = i(9716), l = i(9845), u = i(7215), c = i(6030);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i, a) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                    this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var i = Object(this), a = i.length >>> 0;
                        if (0 === a) return !1;
                        for (var n = 0 | t, r = Math.max(n >= 0 ? n : a - Math.abs(n), 0); r < a; ) {
                            if (i[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            7149: function() {
                function e(t) {
                    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            8711: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, i, a, n) {
                    var r, o = this, s = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                    i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                    i = r.endOffset) : document.selection && document.selection.createRange && (r = document.selection.createRange(), 
                    t = 0 - r.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + r.text.length), 
                    {
                        begin: a ? t : u.call(o, t),
                        end: a ? i : u.call(o, i)
                    };
                    if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                    void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                    "number" == typeof t) {
                        t = a ? t : u.call(o, t), i = "number" == typeof (i = a ? i : u.call(o, i)) ? i : t;
                        var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                        if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: i
                        }, s.insertModeVisual && !1 === s.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                            if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                var c = document.createTextNode("");
                                e.appendChild(c);
                            }
                            r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                            r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                            r.collapse(!0);
                            var f = window.getSelection();
                            f.removeAllRanges(), f.addRange(r);
                        } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                        r.moveStart("character", t), r.select());
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, i, r = this, s = this.maskset, l = this.dependencyLib, u = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0), c = u.length, f = o.call(r), d = {}, p = s.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                    for (t = f + 1; t < u.length; t++) i = a.getTestTemplate.call(r, t, h, t - 1), h = i.locator.slice(), 
                    d[t] = l.extend(!0, {}, i);
                    var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                    for (t = c - 1; t > f && (((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && n.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== a.getTests.call(r, t)[0].def)) && u[t] === a.getPlaceholder.call(r, t, i.match)); t--) c--;
                    return e ? {
                        l: c,
                        def: d[c] ? d[c].match : void 0
                    } : c;
                }, t.determineNewCaretPosition = function(e, t, i) {
                    var n = this, u = this.maskset, c = this.opts;
                    t && (n.isRTL ? e.end = e.begin : e.begin = e.end);
                    if (e.begin === e.end) {
                        switch (i = i || c.positionCaretOnClick) {
                          case "none":
                            break;

                          case "select":
                            e = {
                                begin: 0,
                                end: r.call(n).length
                            };
                            break;

                          case "ignore":
                            e.end = e.begin = l.call(n, o.call(n));
                            break;

                          case "radixFocus":
                            if (function(e) {
                                if ("" !== c.radixPoint && 0 !== c.digits) {
                                    var t = u.validPositions;
                                    if (void 0 === t[e] || t[e].input === a.getPlaceholder.call(n, e)) {
                                        if (e < l.call(n, -1)) return !0;
                                        var i = r.call(n).indexOf(c.radixPoint);
                                        if (-1 !== i) {
                                            for (var o in t) if (t[o] && i < o && t[o].input !== a.getPlaceholder.call(n, o)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }(e.begin)) {
                                var f = r.call(n).join("").indexOf(c.radixPoint);
                                e.end = e.begin = c.numericInput ? l.call(n, f) : f;
                                break;
                            }

                          default:
                            var d = e.begin, p = o.call(n, d, !0), h = l.call(n, -1 !== p || s.call(n, 0) ? p : -1);
                            if (d <= h) e.end = e.begin = s.call(n, d, !1, !0) ? d : l.call(n, d); else {
                                var v = u.validPositions[p], m = a.getTestTemplate.call(n, h, v ? v.match.locator : void 0, v), g = a.getPlaceholder.call(n, h, m.match);
                                if ("" !== g && r.call(n)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !s.call(n, h, c.keepStatic, !0) && m.match.def === g) {
                                    var k = l.call(n, h);
                                    (d >= k || d === h) && (h = k);
                                }
                                e.end = e.begin = h;
                            }
                        }
                        return e;
                    }
                }, t.getBuffer = r, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    void 0 === e._buffer && (e._buffer = a.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                    return e._buffer;
                }, t.getLastValidPosition = o, t.isMask = s, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0);
                }, t.seekNext = l, t.seekPrevious = function(e, t) {
                    var i = this, n = e - 1;
                    if (e <= 0) return 0;
                    for (;n > 0 && (!0 === t && (!0 !== a.getTest.call(i, n).match.newBlockMarker || !s.call(i, n, void 0, !0)) || !0 !== t && !s.call(i, n, void 0, !0)); ) n--;
                    return n;
                }, t.translatePosition = u;
                var a = i(4713), n = i(7215);
                function r(e) {
                    var t = this.maskset;
                    return void 0 !== t.buffer && !0 !== e || (t.buffer = a.getMaskTemplate.call(this, !0, o.call(this), !0), 
                    void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
                }
                function o(e, t, i) {
                    var a = this.maskset, n = -1, r = -1, o = i || a.validPositions;
                    for (var s in void 0 === e && (e = -1), o) {
                        var l = parseInt(s);
                        o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (n = l), l >= e && (r = l));
                    }
                    return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
                }
                function s(e, t, i) {
                    var n = this, r = this.maskset, o = a.getTestTemplate.call(n, e).match;
                    if ("" === o.def && (o = a.getTest.call(n, e).match), !0 !== o.static) return o.fn;
                    if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && e > -1) {
                        if (i) {
                            var s = a.getTests.call(n, e);
                            return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0);
                        }
                        var l = a.determineTestTemplate.call(n, e, a.getTests.call(n, e)), u = a.getPlaceholder.call(n, e, l.match);
                        return l.match.def !== u;
                    }
                    return !1;
                }
                function l(e, t, i) {
                    var n = this;
                    void 0 === i && (i = !0);
                    for (var r = e + 1; "" !== a.getTest.call(n, r).match.def && (!0 === t && (!0 !== a.getTest.call(n, r).match.newBlockMarker || !s.call(n, r, void 0, !0)) || !0 !== t && !s.call(n, r, void 0, i)); ) r++;
                    return r;
                }
                function u(e) {
                    var t = this.opts, i = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)), 
                    e;
                }
            },
            4713: function(e, t) {
                function i(e, t) {
                    var i = (null != e.alternation ? e.mloc[a(e)] : e.locator).join("");
                    if ("" !== i) for (;i.length < t; ) i += "0";
                    return i;
                }
                function a(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function n(e, t, i) {
                    var a = this.opts, n = this.maskset;
                    if (void 0 !== (t = t || s.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                    if (!0 === t.static) {
                        if (e > -1 && void 0 === n.validPositions[e]) {
                            var r, o = u.call(this, e), l = [];
                            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var c = 0; c < o.length; c++) if ("" !== o[c].match.def && !0 !== o[c].match.optionality && !0 !== o[c].match.optionalQuantifier && (!0 === o[c].match.static || void 0 === r || !1 !== o[c].match.fn.test(r.match.def, n, e, !0, a)) && (l.push(o[c]), 
                            !0 === o[c].match.static && (r = o[c]), l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                        }
                        return t.def;
                    }
                    return a.placeholder.charAt(e % a.placeholder.length);
                }
                function r(e, t, i) {
                    return this.maskset.validPositions[e] || o.call(this, e, u.call(this, e, t ? t.slice() : t, i));
                }
                function o(e, t) {
                    var a = this.opts;
                    e = e > 0 ? e - 1 : 0;
                    for (var n, r, o, l = i(s.call(this, e)), u = 0; u < t.length; u++) {
                        var c = t[u];
                        n = i(c, l.length);
                        var f = Math.abs(n - l);
                        (void 0 === r || "" !== n && f < r || o && !a.greedy && o.match.optionality && "master" === o.match.newBlockMarker && (!c.match.optionality || !c.match.newBlockMarker) || o && o.match.optionalQuantifier && !c.match.optionalQuantifier) && (r = f, 
                        o = c);
                    }
                    return o;
                }
                function s(e, t) {
                    var i = this.maskset;
                    return i.validPositions[e] ? i.validPositions[e] : (t || u.call(this, e))[0];
                }
                function l(e, t, i) {
                    function a(e) {
                        for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++a < t; ) i.push(String.fromCharCode(a)); else a = e.charCodeAt(n), 
                        i.push(e.charAt(n));
                        return i.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== a(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g, "")));
                }
                function u(e, t, i) {
                    var a, n = this, r = this.dependencyLib, s = this.maskset, u = this.opts, c = this.el, f = s.maskToken, d = t ? i : 0, p = t ? t.slice() : [ 0 ], h = [], v = !1, m = t ? t.join("") : "";
                    function g(t, i, n, r) {
                        function o(n, r, f) {
                            function p(e, t) {
                                var i = 0 === t.matches.indexOf(e);
                                return i || t.matches.every((function(a, n) {
                                    return !0 === a.isQuantifier ? i = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(a, "matches") && (i = p(e, a)), 
                                    !i;
                                })), i;
                            }
                            function k(e, t, i) {
                                var a, n;
                                if ((s.tests[e] || s.validPositions[e]) && (s.tests[e] || [ s.validPositions[e] ]).every((function(e, r) {
                                    if (e.mloc[t]) return a = e, !1;
                                    var o = void 0 !== i ? i : e.alternation, s = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === n || s < n) && -1 !== s && (a = e, n = s), !0;
                                })), a) {
                                    var r = a.locator[a.alternation];
                                    return (a.mloc[t] || a.mloc[r] || a.locator).slice((void 0 !== i ? i : a.alternation) + 1);
                                }
                                return void 0 !== i ? k(e, t) : void 0;
                            }
                            function y(e, t) {
                                var i = e.alternation, a = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                if (!a && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                                    i = n, a = !0;
                                    break;
                                }
                                if (a) {
                                    e.mloc = e.mloc || {};
                                    var r = e.locator[i];
                                    if (void 0 !== r) {
                                        if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                        void 0 !== t) {
                                            for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                            e.locator[i] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = void 0;
                                }
                                return !1;
                            }
                            function b(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                return !0;
                            }
                            if (d > e + u._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;
                            if (d === e && void 0 === n.matches) {
                                if (h.push({
                                    match: n,
                                    locator: r.reverse(),
                                    cd: m,
                                    mloc: {}
                                }), !0 !== n.optionality || void 0 !== f || !(u.definitions && u.definitions[n.nativeDef] && u.definitions[n.nativeDef].optional || Inputmask.prototype.definitions[n.nativeDef] && Inputmask.prototype.definitions[n.nativeDef].optional)) return !0;
                                v = !0, d = e;
                            } else if (void 0 !== n.matches) {
                                if (n.isGroup && f !== n) {
                                    if (n = o(t.matches[t.matches.indexOf(n) + 1], r, f)) return !0;
                                } else if (n.isOptional) {
                                    var x = n, P = h.length;
                                    if (n = g(n, i, r, f)) {
                                        if (h.forEach((function(e, t) {
                                            t >= P && (e.match.optionality = !0);
                                        })), a = h[h.length - 1].match, void 0 !== f || !p(a, x)) return !0;
                                        v = !0, d = e;
                                    }
                                } else if (n.isAlternator) {
                                    var E, _ = n, S = [], w = h.slice(), M = r.length, O = !1, T = i.length > 0 ? i.shift() : -1;
                                    if (-1 === T || "string" == typeof T) {
                                        var C, A = d, D = i.slice(), j = [];
                                        if ("string" == typeof T) j = T.split(","); else for (C = 0; C < _.matches.length; C++) j.push(C.toString());
                                        if (void 0 !== s.excludes[e]) {
                                            for (var B = j.slice(), R = 0, L = s.excludes[e].length; R < L; R++) {
                                                var I = s.excludes[e][R].toString().split(":");
                                                r.length == I[1] && j.splice(j.indexOf(I[0]), 1);
                                            }
                                            0 === j.length && (delete s.excludes[e], j = B);
                                        }
                                        (!0 === u.keepStatic || isFinite(parseInt(u.keepStatic)) && A >= u.keepStatic) && (j = j.slice(0, 1));
                                        for (var F = 0; F < j.length; F++) {
                                            C = parseInt(j[F]), h = [], i = "string" == typeof T && k(d, C, M) || D.slice();
                                            var N = _.matches[C];
                                            if (N && o(N, [ C ].concat(r), f)) n = !0; else if (0 === F && (O = !0), N && N.matches && N.matches.length > _.matches[0].matches.length) break;
                                            E = h.slice(), d = A, h = [];
                                            for (var V = 0; V < E.length; V++) {
                                                var G = E[V], H = !1;
                                                G.match.jit = G.match.jit || O, G.alternation = G.alternation || M, y(G);
                                                for (var K = 0; K < S.length; K++) {
                                                    var U = S[K];
                                                    if ("string" != typeof T || void 0 !== G.alternation && j.includes(G.locator[G.alternation].toString())) {
                                                        if (G.match.nativeDef === U.match.nativeDef) {
                                                            H = !0, y(U, G);
                                                            break;
                                                        }
                                                        if (l(G, U, u)) {
                                                            y(G, U) && (H = !0, S.splice(S.indexOf(U), 0, G));
                                                            break;
                                                        }
                                                        if (l(U, G, u)) {
                                                            y(U, G);
                                                            break;
                                                        }
                                                        if (Q = U, !0 === (W = G).match.static && !0 !== Q.match.static && Q.match.fn.test(W.match.def, s, e, !1, u, !1)) {
                                                            b(G, U) || void 0 !== c.inputmask.userOptions.keepStatic ? y(G, U) && (H = !0, S.splice(S.indexOf(U), 0, G)) : u.keepStatic = !0;
                                                            break;
                                                        }
                                                    }
                                                }
                                                H || S.push(G);
                                            }
                                        }
                                        h = w.concat(S), d = e, v = h.length > 0, n = S.length > 0, i = D.slice();
                                    } else n = o(_.matches[T] || t.matches[T], [ T ].concat(r), f);
                                    if (n) return !0;
                                } else if (n.isQuantifier && f !== t.matches[t.matches.indexOf(n) - 1]) for (var $ = n, z = i.length > 0 ? i.shift() : 0; z < (isNaN($.quantifier.max) ? z + 1 : $.quantifier.max) && d <= e; z++) {
                                    var q = t.matches[t.matches.indexOf($) - 1];
                                    if (n = o(q, [ z ].concat(r), q)) {
                                        if ((a = h[h.length - 1].match).optionalQuantifier = z >= $.quantifier.min, a.jit = (z + 1) * (q.matches.indexOf(a) + 1) > $.quantifier.jit, 
                                        a.optionalQuantifier && p(a, q)) {
                                            v = !0, d = e;
                                            break;
                                        }
                                        return a.jit && (s.jitOffset[e] = q.matches.length - q.matches.indexOf(a)), !0;
                                    }
                                } else if (n = g(n, i, r, f)) return !0;
                            } else d++;
                            var W, Q;
                        }
                        for (var f = i.length > 0 ? i.shift() : 0; f < t.matches.length; f++) if (!0 !== t.matches[f].isQuantifier) {
                            var p = o(t.matches[f], [ f ].concat(n), r);
                            if (p && d === e) return p;
                            if (d > e) break;
                        }
                    }
                    if (e > -1) {
                        if (void 0 === t) {
                            for (var k, y = e - 1; void 0 === (k = s.validPositions[y] || s.tests[y]) && y > -1; ) y--;
                            void 0 !== k && y > -1 && (p = function(e, t) {
                                var i, a = [];
                                return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === u.keepStatic ? 0 === (a = o.call(n, e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : t.forEach((function(e) {
                                    "" !== e.def && (0 === a.length ? (i = e.alternation, a = e.locator.slice()) : e.locator[i] && -1 === a[i].toString().indexOf(e.locator[i]) && (a[i] += "," + e.locator[i]));
                                }))), a;
                            }(y, k), m = p.join(""), d = y);
                        }
                        if (s.tests[e] && s.tests[e][0].cd === m) return s.tests[e];
                        for (var b = p.shift(); b < f.length; b++) {
                            if (g(f[b], p, [ b ]) && d === e || d > e) break;
                        }
                    }
                    return (0 === h.length || v) && h.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: m
                    }), void 0 !== t && s.tests[e] ? r.extend(!0, [], h) : (s.tests[e] = r.extend(!0, [], h), 
                    s.tests[e]);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = o, t.getDecisionTaker = a, t.getMaskTemplate = function(e, t, i, a, s) {
                    var l = this, c = this.opts, f = this.maskset, d = c.greedy;
                    s && (c.greedy = !1);
                    t = t || 0;
                    var p, h, v, m, g = [], k = 0;
                    do {
                        if (!0 === e && f.validPositions[k]) v = s && !0 === f.validPositions[k].match.optionality && void 0 === f.validPositions[k + 1] && (!0 === f.validPositions[k].generatedInput || f.validPositions[k].input == c.skipOptionalPartCharacter && k > 0) ? o.call(l, k, u.call(l, k, p, k - 1)) : f.validPositions[k], 
                        h = v.match, p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : n.call(l, k, h)); else {
                            v = r.call(l, k, p, k - 1), h = v.match, p = v.locator.slice();
                            var y = !0 !== a && (!1 !== c.jitMasking ? c.jitMasking : h.jit);
                            (m = (m && h.static && h.def !== c.groupSeparator && null === h.fn || f.validPositions[k - 1] && h.static && h.def !== c.groupSeparator && null === h.fn) && f.tests[k] && 1 === f.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > k ? g.push(!1 === i ? h.nativeDef : n.call(l, k, h)) : m = !1;
                        }
                        k++;
                    } while (!0 !== h.static || "" !== h.def || t > k);
                    "" === g[g.length - 1] && g.pop();
                    !1 === i && void 0 !== f.maskLength || (f.maskLength = k - 1);
                    return c.greedy = d, g;
                }, t.getPlaceholder = n, t.getTest = s, t.getTests = u, t.getTestTemplate = r, t.isSubsetOf = l;
            },
            7215: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = l, t.checkAlternationMatch = function(e, t, i) {
                    for (var a, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], s = 0; s < o.length; s++) -1 !== (a = e.indexOf(o[s])) && e.splice(a, 1);
                    for (var l = 0; l < e.length; l++) if (n.includes(e[l])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.isComplete = c, t.isValid = f, t.refreshFromBuffer = p, t.revalidateMask = v, 
                t.handleRemove = function(e, t, i, a, s) {
                    var u = this, c = this.maskset, f = this.opts;
                    if ((f.numericInput || u.isRTL) && (t === r.default.BACKSPACE ? t = r.default.DELETE : t === r.default.DELETE && (t = r.default.BACKSPACE), 
                    u.isRTL)) {
                        var d = i.end;
                        i.end = i.begin, i.begin = d;
                    }
                    var p, h = o.getLastValidPosition.call(u, void 0, !0);
                    i.end >= o.getBuffer.call(u).length && h >= i.end && (i.end = h + 1);
                    t === r.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = o.seekPrevious.call(u, i.begin)) : t === r.default.DELETE && i.begin === i.end && (i.end = o.isMask.call(u, i.end, !0, !0) ? i.end + 1 : o.seekNext.call(u, i.end) + 1);
                    if (!1 !== (p = v.call(u, i))) {
                        if (!0 !== a && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(u, i.begin).match.def.indexOf("|")) {
                            var m = l.call(u, !0);
                            if (m) {
                                var g = void 0 !== m.caret ? m.caret : m.pos ? o.seekNext.call(u, m.pos.begin ? m.pos.begin : m.pos) : o.getLastValidPosition.call(u, -1, !0);
                                (t !== r.default.DELETE || i.begin > g) && i.begin;
                            }
                        }
                        !0 !== a && (c.p = t === r.default.DELETE ? i.begin + p : i.begin, c.p = o.determineNewCaretPosition.call(u, {
                            begin: c.p,
                            end: c.p
                        }, !1).begin);
                    }
                };
                var a, n = i(4713), r = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, o = i(8711), s = i(6030);
                function l(e, t, i, a, r, s) {
                    var u, c, d, p, h, v, m, g, k, y, b, x = this, P = this.dependencyLib, E = this.opts, _ = x.maskset, S = P.extend(!0, {}, _.validPositions), w = P.extend(!0, {}, _.tests), M = !1, O = !1, T = void 0 !== r ? r : o.getLastValidPosition.call(x);
                    if (s && (y = s.begin, b = s.end, s.begin > s.end && (y = s.end, b = s.begin)), 
                    -1 === T && void 0 === r) u = 0, c = (p = n.getTest.call(x, u)).alternation; else for (;T >= 0; T--) if ((d = _.validPositions[T]) && void 0 !== d.alternation) {
                        if (p && p.locator[d.alternation] !== d.locator[d.alternation]) break;
                        u = T, c = _.validPositions[u].alternation, p = d;
                    }
                    if (void 0 !== c) {
                        m = parseInt(u), _.excludes[m] = _.excludes[m] || [], !0 !== e && _.excludes[m].push((0, 
                        n.getDecisionTaker)(p) + ":" + p.alternation);
                        var C = [], A = -1;
                        for (h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (C.push(t), 
                        A = C.length - 1), (v = _.validPositions[h]) && !0 !== v.generatedInput && (void 0 === s || h < y || h >= b) && C.push(v.input), 
                        delete _.validPositions[h];
                        for (-1 === A && void 0 !== t && (C.push(t), A = C.length - 1); void 0 !== _.excludes[m] && _.excludes[m].length < 10; ) {
                            for (_.tests = {}, o.resetMaskSet.call(x, !0), M = !0, h = 0; h < C.length && (g = M.caret || o.getLastValidPosition.call(x, void 0, !0) + 1, 
                            k = C[h], M = f.call(x, g, k, !1, a, !0)); h++) h === A && (O = M), 1 == e && M && (O = {
                                caretPos: h
                            });
                            if (M) break;
                            if (o.resetMaskSet.call(x), p = n.getTest.call(x, m), _.validPositions = P.extend(!0, {}, S), 
                            _.tests = P.extend(!0, {}, w), !_.excludes[m]) {
                                O = l.call(x, e, t, i, a, m - 1, s);
                                break;
                            }
                            var D = (0, n.getDecisionTaker)(p);
                            if (-1 !== _.excludes[m].indexOf(D + ":" + p.alternation)) {
                                O = l.call(x, e, t, i, a, m - 1, s);
                                break;
                            }
                            for (_.excludes[m].push(D + ":" + p.alternation), h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete _.validPositions[h];
                        }
                    }
                    return O && !1 === E.keepStatic || delete _.excludes[m], O;
                }
                function u(e, t, i) {
                    var a = this.opts, n = this.maskset;
                    switch (a.casing || t.casing) {
                      case "upper":
                        e = e.toUpperCase();
                        break;

                      case "lower":
                        e = e.toLowerCase();
                        break;

                      case "title":
                        var o = n.validPositions[i - 1];
                        e = 0 === i || o && o.input === String.fromCharCode(r.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
                        break;

                      default:
                        if ("function" == typeof a.casing) {
                            var s = Array.prototype.slice.call(arguments);
                            s.push(n.validPositions), e = a.casing.apply(this, s);
                        }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, i = this.opts, a = this.maskset;
                    if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                    if ("*" !== i.repeat) {
                        var r = !1, s = o.determineLastRequiredPosition.call(t, !0), l = o.seekPrevious.call(t, s.l);
                        if (void 0 === s.def || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                            r = !0;
                            for (var u = 0; u <= l; u++) {
                                var c = n.getTestTemplate.call(t, u).match;
                                if (!0 !== c.static && void 0 === a.validPositions[u] && !0 !== c.optionality && !0 !== c.optionalQuantifier || !0 === c.static && e[u] !== n.getPlaceholder.call(t, u, c)) {
                                    r = !1;
                                    break;
                                }
                            }
                        }
                        return r;
                    }
                }
                function f(e, t, i, a, r, s, d) {
                    var m = this, g = this.dependencyLib, k = this.opts, y = m.maskset;
                    function b(e) {
                        return m.isRTL ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1;
                    }
                    i = !0 === i;
                    var x = e;
                    function P(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                            e.remove.sort((function(e, t) {
                                return t.pos - e.pos;
                            })).forEach((function(e) {
                                v.call(m, {
                                    begin: e,
                                    end: e + 1
                                });
                            })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                            e.insert.sort((function(e, t) {
                                return e.pos - t.pos;
                            })).forEach((function(e) {
                                "" !== e.c && f.call(m, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                            })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                p.call(m, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function E(t, i, r) {
                        var s = !1;
                        return n.getTests.call(m, t).every((function(l, c) {
                            var f = l.match;
                            if (o.getBuffer.call(m, !0), !1 !== (s = (!f.jit || void 0 !== y.validPositions[o.seekPrevious.call(m, t)]) && (null != f.fn ? f.fn.test(i, y, t, r, k, b(e)) : (i === f.def || i === k.skipOptionalPartCharacter) && "" !== f.def && {
                                c: n.getPlaceholder.call(m, t, f, !0) || f.def,
                                pos: t
                            }))) {
                                var d = void 0 !== s.c ? s.c : i, p = t;
                                return d = d === k.skipOptionalPartCharacter && !0 === f.static ? n.getPlaceholder.call(m, t, f, !0) || f.def : d, 
                                !0 !== (s = P(s)) && void 0 !== s.pos && s.pos !== t && (p = s.pos), !0 !== s && void 0 === s.pos && void 0 === s.c ? !1 : (!1 === v.call(m, e, g.extend({}, l, {
                                    input: u.call(m, d, f, p)
                                }), a, p) && (s = !1), !1);
                            }
                            return !0;
                        })), s;
                    }
                    void 0 !== e.begin && (x = m.isRTL ? e.end : e.begin);
                    var _ = !0, S = g.extend(!0, {}, y.validPositions);
                    if (!1 === k.keepStatic && void 0 !== y.excludes[x] && !0 !== r && !0 !== a) for (var w = x; w < (m.isRTL ? e.begin : e.end); w++) void 0 !== y.excludes[w] && (y.excludes[w] = void 0, 
                    delete y.tests[w]);
                    if ("function" == typeof k.preValidation && !0 !== a && !0 !== s && (_ = P(_ = k.preValidation.call(m, o.getBuffer.call(m), x, t, b(e), k, y, e, i || r))), 
                    !0 === _) {
                        if (_ = E(x, t, i), (!i || !0 === a) && !1 === _ && !0 !== s) {
                            var M = y.validPositions[x];
                            if (!M || !0 !== M.match.static || M.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                if (k.insertMode || void 0 === y.validPositions[o.seekNext.call(m, x)] || e.end > x) {
                                    var O = !1;
                                    if (y.jitOffset[x] && void 0 === y.validPositions[o.seekNext.call(m, x)] && !1 !== (_ = f.call(m, x + y.jitOffset[x], t, !0, !0)) && (!0 !== r && (_.caret = x), 
                                    O = !0), e.end > x && (y.validPositions[x] = void 0), !O && !o.isMask.call(m, x, k.keepStatic && 0 === x)) for (var T = x + 1, C = o.seekNext.call(m, x, !1, 0 !== x); T <= C; T++) if (!1 !== (_ = E(T, t, i))) {
                                        _ = h.call(m, x, void 0 !== _.pos ? _.pos : T) || _, x = T;
                                        break;
                                    }
                                }
                            } else _ = {
                                caret: o.seekNext.call(m, x)
                            };
                        }
                        !1 !== _ || !k.keepStatic || !c.call(m, o.getBuffer.call(m)) && 0 !== x || i || !0 === r ? b(e) && y.tests[x] && y.tests[x].length > 1 && k.keepStatic && !i && !0 !== r && (_ = l.call(m, !0)) : _ = l.call(m, x, t, i, a, void 0, e), 
                        !0 === _ && (_ = {
                            pos: x
                        });
                    }
                    if ("function" == typeof k.postValidation && !0 !== a && !0 !== s) {
                        var A = k.postValidation.call(m, o.getBuffer.call(m, !0), void 0 !== e.begin ? m.isRTL ? e.end : e.begin : e, t, _, k, y, i, d);
                        void 0 !== A && (_ = !0 === A ? _ : A);
                    }
                    _ && void 0 === _.pos && (_.pos = x), !1 === _ || !0 === s ? (o.resetMaskSet.call(m, !0), 
                    y.validPositions = g.extend(!0, {}, S)) : h.call(m, void 0, x, !0);
                    var D = P(_);
                    void 0 !== m.maxLength && (o.getBuffer.call(m).length > m.maxLength && !a && (o.resetMaskSet.call(m, !0), 
                    y.validPositions = g.extend(!0, {}, S), D = !1));
                    return D;
                }
                function d(e, t, i) {
                    for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), s = 0; s < o.length; s++) {
                        if (o[s].match && (o[s].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[s].match.nativeDef === t.match.nativeDef || i.regex && !o[s].match.static && o[s].match.fn.test(t.input))) {
                            r = !0;
                            break;
                        }
                        if (o[s].match && o[s].match.def === t.match.nativeDef) {
                            r = void 0;
                            break;
                        }
                    }
                    return !1 === r && void 0 !== a.jitOffset[e] && (r = d.call(this, e + a.jitOffset[e], t, i)), 
                    r;
                }
                function p(e, t, i) {
                    var a, n, r = this, l = this.maskset, u = this.opts, c = this.dependencyLib, f = u.skipOptionalPartCharacter, d = r.isRTL ? i.slice().reverse() : i;
                    if (u.skipOptionalPartCharacter = "", !0 === e) o.resetMaskSet.call(r), l.tests = {}, 
                    e = 0, t = i.length, n = o.determineNewCaretPosition.call(r, {
                        begin: 0,
                        end: 0
                    }, !1).begin; else {
                        for (a = e; a < t; a++) delete l.validPositions[a];
                        n = e;
                    }
                    var p = new c.Event("keypress");
                    for (a = e; a < t; a++) {
                        p.which = d[a].toString().charCodeAt(0), r.ignorable = !1;
                        var h = s.EventHandlers.keypressEvent.call(r, p, !0, !1, !1, n);
                        !1 !== h && void 0 !== h && (n = h.forwardPosition);
                    }
                    u.skipOptionalPartCharacter = f;
                }
                function h(e, t, i) {
                    var a = this, r = this.maskset, s = this.dependencyLib;
                    if (void 0 === e) for (e = t - 1; e > 0 && !r.validPositions[e]; e--) ;
                    for (var l = e; l < t; l++) {
                        if (void 0 === r.validPositions[l] && !o.isMask.call(a, l, !1)) if (0 == l ? n.getTest.call(a, l) : r.validPositions[l - 1]) {
                            var u = n.getTests.call(a, l).slice();
                            "" === u[u.length - 1].match.def && u.pop();
                            var c, d = n.determineTestTemplate.call(a, l, u);
                            if (d && (!0 !== d.match.jit || "master" === d.match.newBlockMarker && (c = r.validPositions[l + 1]) && !0 === c.match.optionalQuantifier) && ((d = s.extend({}, d, {
                                input: n.getPlaceholder.call(a, l, d.match, !0) || d.match.def
                            })).generatedInput = !0, v.call(a, l, d, !0), !0 !== i)) {
                                var p = r.validPositions[t].input;
                                return r.validPositions[t] = void 0, f.call(a, t, p, !0, !0);
                            }
                        }
                    }
                }
                function v(e, t, i, a) {
                    var r = this, s = this.maskset, l = this.opts, u = this.dependencyLib;
                    function c(e, t, i) {
                        var a = t[e];
                        if (void 0 !== a && !0 === a.match.static && !0 !== a.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return n && r;
                        }
                        return !1;
                    }
                    var p = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                    if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, h !== v || l.insertMode && void 0 !== s.validPositions[a] && void 0 === i || void 0 === t || t.match.optionalQuantifier || t.match.optionality) {
                        var g, k = u.extend(!0, {}, s.validPositions), y = o.getLastValidPosition.call(r, void 0, !0);
                        for (s.p = h, g = y; g >= h; g--) delete s.validPositions[g], void 0 === t && delete s.tests[g + 1];
                        var b, x, P = a, E = P;
                        for (t && (s.validPositions[a] = u.extend(!0, {}, t), E++, P++), g = t ? v : v - 1; g <= y; g++) {
                            if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (g >= v || g >= h && c(g, k, {
                                begin: h,
                                end: v
                            }))) {
                                for (;"" !== n.getTest.call(r, E).match.def; ) {
                                    if (!1 !== (x = d.call(r, E, b, l)) || "+" === b.match.def) {
                                        "+" === b.match.def && o.getBuffer.call(r, !0);
                                        var _ = f.call(r, E, b.input, "+" !== b.match.def, !0);
                                        if (m = !1 !== _, P = (_.pos || E) + 1, !m && x) break;
                                    } else m = !1;
                                    if (m) {
                                        void 0 === t && b.match.static && g === e.begin && p++;
                                        break;
                                    }
                                    if (!m && E > s.maskLength) break;
                                    E++;
                                }
                                "" == n.getTest.call(r, E).match.def && (m = !1), E = P;
                            }
                            if (!m) break;
                        }
                        if (!m) return s.validPositions = u.extend(!0, {}, k), o.resetMaskSet.call(r, !0), 
                        !1;
                    } else t && n.getTest.call(r, a).match.cd === t.match.cd && (s.validPositions[a] = u.extend(!0, {}, t));
                    return o.resetMaskSet.call(r, !0), p;
                }
            },
            5581: function(e) {
                e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}');
            }
        }, t = {};
        function i(a) {
            var n = t[a];
            if (void 0 !== n) return n.exports;
            var r = t[a] = {
                exports: {}
            };
            return e[a](r, r.exports, i), r.exports;
        }
        var a = {};
        return function() {
            var e, t = a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, i(3851), i(219), i(207), i(5296);
            var n = ((e = i(2394)) && e.__esModule ? e : {
                default: e
            }).default;
            t.default = n;
        }(), a;
    }();
}));
(function () {
    'use strict';
  
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  
    function lastItemOf(arr) {
      return arr[arr.length - 1];
    }
  
    // push only the items not included in the array
    function pushUnique(arr, ...items) {
      items.forEach((item) => {
        if (arr.includes(item)) {
          return;
        }
        arr.push(item);
      });
      return arr;
    }
  
    function stringToArray(str, separator) {
      // convert empty string to an empty array
      return str ? str.split(separator) : [];
    }
  
    function isInRange(testVal, min, max) {
      const minOK = min === undefined || testVal >= min;
      const maxOK = max === undefined || testVal <= max;
      return minOK && maxOK;
    }
  
    function limitToRange(val, min, max) {
      if (val < min) {
        return min;
      }
      if (val > max) {
        return max;
      }
      return val;
    }
  
    function createTagRepeat(tagName, repeat, attributes = {}, index = 0, html = '') {
      const openTagSrc = Object.keys(attributes).reduce((src, attr) => {
        let val = attributes[attr];
        if (typeof val === 'function') {
          val = val(index);
        }
        return `${src} ${attr}="${val}"`;
      }, tagName);
      html += `<${openTagSrc}></${tagName}>`;
  
      const next = index + 1;
      return next < repeat
        ? createTagRepeat(tagName, repeat, attributes, next, html)
        : html;
    }
  
    // Remove the spacing surrounding tags for HTML parser not to create text nodes
    // before/after elements
    function optimizeTemplateHTML(html) {
      return html.replace(/>\s+/g, '>').replace(/\s+</, '<');
    }
  
    function stripTime(timeValue) {
      return new Date(timeValue).setHours(0, 0, 0, 0);
    }
  
    function today() {
      return new Date().setHours(0, 0, 0, 0);
    }
  
    // Get the time value of the start of given date or year, month and day
    function dateValue(...args) {
      switch (args.length) {
        case 0:
          return today();
        case 1:
          return stripTime(args[0]);
      }
  
      // use setFullYear() to keep 2-digit year from being mapped to 1900-1999
      const newDate = new Date(0);
      newDate.setFullYear(...args);
      return newDate.setHours(0, 0, 0, 0);
    }
  
    function addDays(date, amount) {
      const newDate = new Date(date);
      return newDate.setDate(newDate.getDate() + amount);
    }
  
    function addWeeks(date, amount) {
      return addDays(date, amount * 7);
    }
  
    function addMonths(date, amount) {
      // If the day of the date is not in the new month, the last day of the new
      // month will be returned. e.g. Jan 31 + 1 month → Feb 28 (not Mar 03)
      const newDate = new Date(date);
      const monthsToSet = newDate.getMonth() + amount;
      let expectedMonth = monthsToSet % 12;
      if (expectedMonth < 0) {
        expectedMonth += 12;
      }
  
      const time = newDate.setMonth(monthsToSet);
      return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
    }
  
    function addYears(date, amount) {
      // If the date is Feb 29 and the new year is not a leap year, Feb 28 of the
      // new year will be returned.
      const newDate = new Date(date);
      const expectedMonth = newDate.getMonth();
      const time = newDate.setFullYear(newDate.getFullYear() + amount);
      return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
    }
  
    // Calculate the distance bettwen 2 days of the week
    function dayDiff(day, from) {
      return (day - from + 7) % 7;
    }
  
    // Get the date of the specified day of the week of given base date
    function dayOfTheWeekOf(baseDate, dayOfWeek, weekStart = 0) {
      const baseDay = new Date(baseDate).getDay();
      return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
    }
  
    // Get the ISO week of a date
    function getWeek(date) {
      // start of ISO week is Monday
      const thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
      // 1st week == the week where the 4th of January is in
      const firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
      return Math.round((thuOfTheWeek - firstThu) / 604800000) + 1;
    }
  
    // Get the start year of the period of years that includes given date
    // years: length of the year period
    function startOfYearPeriod(date, years) {
      /* @see https://en.wikipedia.org/wiki/Year_zero#ISO_8601 */
      const year = new Date(date).getFullYear();
      return Math.floor(year / years) * years;
    }
  
    // pattern for format parts
    const reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
    // pattern for non date parts
    const reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
    // cache for persed formats
    let knownFormats = {};
    // parse funtions for date parts
    const parseFns = {
      y(date, year) {
        return new Date(date).setFullYear(parseInt(year, 10));
      },
      m(date, month, locale) {
        const newDate = new Date(date);
        let monthIndex = parseInt(month, 10) - 1;
  
        if (isNaN(monthIndex)) {
          if (!month) {
            return NaN;
          }
  
          const monthName = month.toLowerCase();
          const compareNames = name => name.toLowerCase().startsWith(monthName);
          // compare with both short and full names because some locales have periods
          // in the short names (not equal to the first X letters of the full names)
          monthIndex = locale.monthsShort.findIndex(compareNames);
          if (monthIndex < 0) {
            monthIndex = locale.months.findIndex(compareNames);
          }
          if (monthIndex < 0) {
            return NaN;
          }
        }
  
        newDate.setMonth(monthIndex);
        return newDate.getMonth() !== normalizeMonth(monthIndex)
          ? newDate.setDate(0)
          : newDate.getTime();
      },
      d(date, day) {
        return new Date(date).setDate(parseInt(day, 10));
      },
    };
    // format functions for date parts
    const formatFns = {
      d(date) {
        return date.getDate();
      },
      dd(date) {
        return padZero(date.getDate(), 2);
      },
      D(date, locale) {
        return locale.daysShort[date.getDay()];
      },
      DD(date, locale) {
        return locale.days[date.getDay()];
      },
      m(date) {
        return date.getMonth() + 1;
      },
      mm(date) {
        return padZero(date.getMonth() + 1, 2);
      },
      M(date, locale) {
        return locale.monthsShort[date.getMonth()];
      },
      MM(date, locale) {
        return locale.months[date.getMonth()];
      },
      y(date) {
        return date.getFullYear();
      },
      yy(date) {
        return padZero(date.getFullYear(), 2).slice(-2);
      },
      yyyy(date) {
        return padZero(date.getFullYear(), 4);
      },
    };
  
    // get month index in normal range (0 - 11) from any number
    function normalizeMonth(monthIndex) {
      return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
    }
  
    function padZero(num, length) {
      return num.toString().padStart(length, '0');
    }
  
    function parseFormatString(format) {
      if (typeof format !== 'string') {
        throw new Error("Invalid date format.");
      }
      if (format in knownFormats) {
        return knownFormats[format];
      }
  
      // sprit the format string into parts and seprators
      const separators = format.split(reFormatTokens);
      const parts = format.match(new RegExp(reFormatTokens, 'g'));
      if (separators.length === 0 || !parts) {
        throw new Error("Invalid date format.");
      }
  
      // collect format functions used in the format
      const partFormatters = parts.map(token => formatFns[token]);
  
      // collect parse function keys used in the format
      // iterate over parseFns' keys in order to keep the order of the keys.
      const partParserKeys = Object.keys(parseFns).reduce((keys, key) => {
        const token = parts.find(part => part[0] !== 'D' && part[0].toLowerCase() === key);
        if (token) {
          keys.push(key);
        }
        return keys;
      }, []);
  
      return knownFormats[format] = {
        parser(dateStr, locale) {
          const dateParts = dateStr.split(reNonDateParts).reduce((dtParts, part, index) => {
            if (part.length > 0 && parts[index]) {
              const token = parts[index][0];
              if (token === 'M') {
                dtParts.m = part;
              } else if (token !== 'D') {
                dtParts[token] = part;
              }
            }
            return dtParts;
          }, {});
  
          // iterate over partParserkeys so that the parsing is made in the oder
          // of year, month and day to prevent the day parser from correcting last
          // day of month wrongly
          return partParserKeys.reduce((origDate, key) => {
            const newDate = parseFns[key](origDate, dateParts[key], locale);
            // ingnore the part failed to parse
            return isNaN(newDate) ? origDate : newDate;
          }, today());
        },
        formatter(date, locale) {
          let dateStr = partFormatters.reduce((str, fn, index) => {
            return str += `${separators[index]}${fn(date, locale)}`;
          }, '');
          // separators' length is always parts' length + 1,
          return dateStr += lastItemOf(separators);
        },
      };
    }
  
    function parseDate(dateStr, format, locale) {
      if (dateStr instanceof Date || typeof dateStr === 'number') {
        const date = stripTime(dateStr);
        return isNaN(date) ? undefined : date;
      }
      if (!dateStr) {
        return undefined;
      }
      if (dateStr === 'today') {
        return today();
      }
  
      if (format && format.toValue) {
        const date = format.toValue(dateStr, format, locale);
        return isNaN(date) ? undefined : stripTime(date);
      }
  
      return parseFormatString(format).parser(dateStr, locale);
    }
  
    function formatDate(date, format, locale) {
      if (isNaN(date) || (!date && date !== 0)) {
        return '';
      }
  
      const dateObj = typeof date === 'number' ? new Date(date) : date;
  
      if (format.toDisplay) {
        return format.toDisplay(dateObj, format, locale);
      }
  
      return parseFormatString(format).formatter(dateObj, locale);
    }
  
    const listenerRegistry = new WeakMap();
    const {addEventListener, removeEventListener} = EventTarget.prototype;
  
    // Register event listeners to a key object
    // listeners: array of listener definitions;
    //   - each definition must be a flat array of event target and the arguments
    //     used to call addEventListener() on the target
    function registerListeners(keyObj, listeners) {
      let registered = listenerRegistry.get(keyObj);
      if (!registered) {
        registered = [];
        listenerRegistry.set(keyObj, registered);
      }
      listeners.forEach((listener) => {
        addEventListener.call(...listener);
        registered.push(listener);
      });
    }
  
    function unregisterListeners(keyObj) {
      let listeners = listenerRegistry.get(keyObj);
      if (!listeners) {
        return;
      }
      listeners.forEach((listener) => {
        removeEventListener.call(...listener);
      });
      listenerRegistry.delete(keyObj);
    }
  
    // Event.composedPath() polyfill for Edge
    // based on https://gist.github.com/kleinfreund/e9787d73776c0e3750dcfcdc89f100ec
    if (!Event.prototype.composedPath) {
      const getComposedPath = (node, path = []) => {
        path.push(node);
  
        let parent;
        if (node.parentNode) {
          parent = node.parentNode;
        } else if (node.host) { // ShadowRoot
          parent = node.host;
        } else if (node.defaultView) {  // Document
          parent = node.defaultView;
        }
        return parent ? getComposedPath(parent, path) : path;
      };
  
      Event.prototype.composedPath = function () {
        return getComposedPath(this.target);
      };
    }
  
    function findFromPath(path, criteria, currentTarget, index = 0) {
      const el = path[index];
      if (criteria(el)) {
        return el;
      } else if (el === currentTarget || !el.parentElement) {
        // stop when reaching currentTarget or <html>
        return;
      }
      return findFromPath(path, criteria, currentTarget, index + 1);
    }
  
    // Search for the actual target of a delegated event
    function findElementInEventPath(ev, selector) {
      const criteria = typeof selector === 'function' ? selector : el => el.matches(selector);
      return findFromPath(ev.composedPath(), criteria, ev.currentTarget);
    }
  
    // default locales
    const locales = {
      en: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today",
        clear: "Clear",
        titleFormat: "MM y"
      },
      ru: {
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        today: "Сегодня",
        clear: "Очистить",
        format: "dd.mm.yyyy",
        weekStart: 1,
        monthsTitle: 'Месяцы'
      } ,
      uk: {
        days: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
        daysShort: ["Нед", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
        daysMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Cічень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        monthsShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
        today: "Сьогодні",
        clear: "Очистити",
        format: "dd.mm.yyyy",
        weekStart: 1
      }
    
    };
  
    // config options updatable by setOptions() and their default values
    const defaultOptions = {
      autohide: false,
      beforeShowDay: null,
      beforeShowDecade: null,
      beforeShowMonth: null,
      beforeShowYear: null,
      calendarWeeks: false,
      clearBtn: false,
      dateDelimiter: ',',
      datesDisabled: [],
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      defaultViewDate: undefined, // placeholder, defaults to today() by the program
      disableTouchKeyboard: false,
      format: 'mm/dd/yyyy',
      language: 'en',
      maxDate: null,
      maxNumberOfDates: 1,
      maxView: 3,
      minDate: null,
      nextArrow: '»',
      orientation: 'auto',
      pickLevel: 0,
      prevArrow: '«',
      showDaysOfWeek: true,
      showOnClick: true,
      showOnFocus: true,
      startView: 0,
      title: '',
      todayBtn: false,
      todayBtnMode: 0,
      todayHighlight: false,
      updateOnBlur: true,
      weekStart: 0,
    };
  
    const range = document.createRange();
  
    function parseHTML(html) {
      return range.createContextualFragment(html);
    }
  
    function hideElement(el) {
      if (el.style.display === 'none') {
        return;
      }
      // back up the existing display setting in data-style-display
      if (el.style.display) {
        el.dataset.styleDisplay = el.style.display;
      }
      el.style.display = 'none';
    }
  
    function showElement(el) {
      if (el.style.display !== 'none') {
        return;
      }
      if (el.dataset.styleDisplay) {
        // restore backed-up dispay property
        el.style.display = el.dataset.styleDisplay;
        delete el.dataset.styleDisplay;
      } else {
        el.style.display = '';
      }
    }
  
    function emptyChildNodes(el) {
      if (el.firstChild) {
        el.removeChild(el.firstChild);
        emptyChildNodes(el);
      }
    }
  
    function replaceChildNodes(el, newChildNodes) {
      emptyChildNodes(el);
      if (newChildNodes instanceof DocumentFragment) {
        el.appendChild(newChildNodes);
      } else if (typeof newChildNodes === 'string') {
        el.appendChild(parseHTML(newChildNodes));
      } else if (typeof newChildNodes.forEach === 'function') {
        newChildNodes.forEach((node) => {
          el.appendChild(node);
        });
      }
    }
  
    const {
      language: defaultLang,
      format: defaultFormat,
      weekStart: defaultWeekStart,
    } = defaultOptions;
  
    // Reducer function to filter out invalid day-of-week from the input
    function sanitizeDOW(dow, day) {
      return dow.length < 6 && day >= 0 && day < 7
        ? pushUnique(dow, day)
        : dow;
    }
  
    function calcEndOfWeek(startOfWeek) {
      return (startOfWeek + 6) % 7;
    }
  
    // validate input date. if invalid, fallback to the original value
    function validateDate(value, format, locale, origValue) {
      const date = parseDate(value, format, locale);
      return date !== undefined ? date : origValue;
    }
  
    // Validate viewId. if invalid, fallback to the original value
    function validateViewId(value, origValue, max = 3) {
      const viewId = parseInt(value, 10);
      return viewId >= 0 && viewId <= max ? viewId : origValue;
    }
  
    // Create Datepicker configuration to set
    function processOptions(options, datepicker) {
      const inOpts = Object.assign({}, options);
      const config = {};
      const locales = datepicker.constructor.locales;
      let {
        format,
        language,
        locale,
        maxDate,
        maxView,
        minDate,
        pickLevel,
        startView,
        weekStart,
      } = datepicker.config || {};
  
      if (inOpts.language) {
        let lang;
        if (inOpts.language !== language) {
          if (locales[inOpts.language]) {
            lang = inOpts.language;
          } else {
            // Check if langauge + region tag can fallback to the one without
            // region (e.g. fr-CA → fr)
            lang = inOpts.language.split('-')[0];
            if (locales[lang] === undefined) {
              lang = false;
            }
          }
        }
        delete inOpts.language;
        if (lang) {
          language = config.language = lang;
  
          // update locale as well when updating language
          const origLocale = locale || locales[defaultLang];
          // use default language's properties for the fallback
          locale = Object.assign({
            format: defaultFormat,
            weekStart: defaultWeekStart
          }, locales[defaultLang]);
          if (language !== defaultLang) {
            Object.assign(locale, locales[language]);
          }
          config.locale = locale;
          // if format and/or weekStart are the same as old locale's defaults,
          // update them to new locale's defaults
          if (format === origLocale.format) {
            format = config.format = locale.format;
          }
          if (weekStart === origLocale.weekStart) {
            weekStart = config.weekStart = locale.weekStart;
            config.weekEnd = calcEndOfWeek(locale.weekStart);
          }
        }
      }
  
      if (inOpts.format) {
        const hasToDisplay = typeof inOpts.format.toDisplay === 'function';
        const hasToValue = typeof inOpts.format.toValue === 'function';
        const validFormatString = reFormatTokens.test(inOpts.format);
        if ((hasToDisplay && hasToValue) || validFormatString) {
          format = config.format = inOpts.format;
        }
        delete inOpts.format;
      }
  
      //*** dates ***//
      // while min and maxDate for "no limit" in the options are better to be null
      // (especially when updating), the ones in the config have to be undefined
      // because null is treated as 0 (= unix epoch) when comparing with time value
      let minDt = minDate;
      let maxDt = maxDate;
      if (inOpts.minDate !== undefined) {
        minDt = inOpts.minDate === null
          ? dateValue(0, 0, 1)  // set 0000-01-01 to prevent negative values for year
          : validateDate(inOpts.minDate, format, locale, minDt);
        delete inOpts.minDate;
      }
      if (inOpts.maxDate !== undefined) {
        maxDt = inOpts.maxDate === null
          ? undefined
          : validateDate(inOpts.maxDate, format, locale, maxDt);
        delete inOpts.maxDate;
      }
      if (maxDt < minDt) {
        minDate = config.minDate = maxDt;
        maxDate = config.maxDate = minDt;
      } else {
        if (minDate !== minDt) {
          minDate = config.minDate = minDt;
        }
        if (maxDate !== maxDt) {
          maxDate = config.maxDate = maxDt;
        }
      }
  
      if (inOpts.datesDisabled) {
        config.datesDisabled = inOpts.datesDisabled.reduce((dates, dt) => {
          const date = parseDate(dt, format, locale);
          return date !== undefined ? pushUnique(dates, date) : dates;
        }, []);
        delete inOpts.datesDisabled;
      }
      if (inOpts.defaultViewDate !== undefined) {
        const viewDate = parseDate(inOpts.defaultViewDate, format, locale);
        if (viewDate !== undefined) {
          config.defaultViewDate = viewDate;
        }
        delete inOpts.defaultViewDate;
      }
  
      //*** days of week ***//
      if (inOpts.weekStart !== undefined) {
        const wkStart = Number(inOpts.weekStart) % 7;
        if (!isNaN(wkStart)) {
          weekStart = config.weekStart = wkStart;
          config.weekEnd = calcEndOfWeek(wkStart);
        }
        delete inOpts.weekStart;
      }
      if (inOpts.daysOfWeekDisabled) {
        config.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
        delete inOpts.daysOfWeekDisabled;
      }
      if (inOpts.daysOfWeekHighlighted) {
        config.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
        delete inOpts.daysOfWeekHighlighted;
      }
  
      //*** multi date ***//
      if (inOpts.maxNumberOfDates !== undefined) {
        const maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
        if (maxNumberOfDates >= 0) {
          config.maxNumberOfDates = maxNumberOfDates;
          config.multidate = maxNumberOfDates !== 1;
        }
        delete inOpts.maxNumberOfDates;
      }
      if (inOpts.dateDelimiter) {
        config.dateDelimiter = String(inOpts.dateDelimiter);
        delete inOpts.dateDelimiter;
      }
  
      //*** pick level & view ***//
      let newPickLevel = pickLevel;
      if (inOpts.pickLevel !== undefined) {
        newPickLevel = validateViewId(inOpts.pickLevel, 2);
        delete inOpts.pickLevel;
      }
      if (newPickLevel !== pickLevel) {
        pickLevel = config.pickLevel = newPickLevel;
      }
  
      let newMaxView = maxView;
      if (inOpts.maxView !== undefined) {
        newMaxView = validateViewId(inOpts.maxView, maxView);
        delete inOpts.maxView;
      }
      // ensure max view >= pick level
      newMaxView = pickLevel > newMaxView ? pickLevel : newMaxView;
      if (newMaxView !== maxView) {
        maxView = config.maxView = newMaxView;
      }
  
      let newStartView = startView;
      if (inOpts.startView !== undefined) {
        newStartView = validateViewId(inOpts.startView, newStartView);
        delete inOpts.startView;
      }
      // ensure pick level <= start view <= max view
      if (newStartView < pickLevel) {
        newStartView = pickLevel;
      } else if (newStartView > maxView) {
        newStartView = maxView;
      }
      if (newStartView !== startView) {
        config.startView = newStartView;
      }
  
      //*** template ***//
      if (inOpts.prevArrow) {
        const prevArrow = parseHTML(inOpts.prevArrow);
        if (prevArrow.childNodes.length > 0) {
          config.prevArrow = prevArrow.childNodes;
        }
        delete inOpts.prevArrow;
      }
      if (inOpts.nextArrow) {
        const nextArrow = parseHTML(inOpts.nextArrow);
        if (nextArrow.childNodes.length > 0) {
          config.nextArrow = nextArrow.childNodes;
        }
        delete inOpts.nextArrow;
      }
  
      //*** misc ***//
      if (inOpts.disableTouchKeyboard !== undefined) {
        config.disableTouchKeyboard = 'ontouchstart' in document && !!inOpts.disableTouchKeyboard;
        delete inOpts.disableTouchKeyboard;
      }
      if (inOpts.orientation) {
        const orientation = inOpts.orientation.toLowerCase().split(/\s+/g);
        config.orientation = {
          x: orientation.find(x => (x === 'left' || x === 'right')) || 'auto',
          y: orientation.find(y => (y === 'top' || y === 'bottom')) || 'auto',
        };
        delete inOpts.orientation;
      }
      if (inOpts.todayBtnMode !== undefined) {
        switch(inOpts.todayBtnMode) {
          case 0:
          case 1:
            config.todayBtnMode = inOpts.todayBtnMode;
        }
        delete inOpts.todayBtnMode;
      }
  
      //*** copy the rest ***//
      Object.keys(inOpts).forEach((key) => {
        if (inOpts[key] !== undefined && hasProperty(defaultOptions, key)) {
          config[key] = inOpts[key];
        }
      });
  
      return config;
    }
  
    const pickerTemplate = optimizeTemplateHTML(`<div class="datepicker">
    <div class="datepicker-picker">
      <div class="datepicker-header">
        <div class="datepicker-title"></div>
        <div class="datepicker-controls">
          <button type="button" class="%buttonClass% prev-btn"></button>
          <button type="button" class="%buttonClass% view-switch"></button>
          <button type="button" class="%buttonClass% next-btn"></button>
        </div>
      </div>
      <div class="datepicker-main"></div>
      <div class="datepicker-footer">
        <div class="datepicker-controls">
          <button type="button" class="%buttonClass% today-btn"></button>
          <button type="button" class="%buttonClass% clear-btn"></button>
        </div>
      </div>
    </div>
  </div>`);
  
    const daysTemplate = optimizeTemplateHTML(`<div class="days">
    <div class="days-of-week">${createTagRepeat('span', 7, {class: 'dow'})}</div>
    <div class="datepicker-grid">${createTagRepeat('span', 42)}</div>
  </div>`);
  
    const calendarWeeksTemplate = optimizeTemplateHTML(`<div class="calendar-weeks">
    <div class="days-of-week"><span class="dow"></span></div>
    <div class="weeks">${createTagRepeat('span', 6, {class: 'week'})}</div>
  </div>`);
  
    // Base class of the view classes
    class View {
      constructor(picker, config) {
        Object.assign(this, config, {
          picker,
          element: parseHTML(`<div class="datepicker-view"></div>`).firstChild,
          selected: [],
        });
        this.init(this.picker.datepicker.config);
      }
  
      init(options) {
        if (options.pickLevel !== undefined) {
          this.isMinView = this.id === options.pickLevel;
        }
        this.setOptions(options);
        this.updateFocus();
        this.updateSelection();
      }
  
      // Execute beforeShow() callback and apply the result to the element
      // args:
      // - current - current value on the iteration on view rendering
      // - timeValue - time value of the date to pass to beforeShow()
      performBeforeHook(el, current, timeValue) {
        let result = this.beforeShow(new Date(timeValue));
        switch (typeof result) {
          case 'boolean':
            result = {enabled: result};
            break;
          case 'string':
            result = {classes: result};
        }
  
        if (result) {
          if (result.enabled === false) {
            el.classList.add('disabled');
            pushUnique(this.disabled, current);
          }
          if (result.classes) {
            const extraClasses = result.classes.split(/\s+/);
            el.classList.add(...extraClasses);
            if (extraClasses.includes('disabled')) {
              pushUnique(this.disabled, current);
            }
          }
          if (result.content) {
            replaceChildNodes(el, result.content);
          }
        }
      }
    }
  
    class DaysView extends View {
      constructor(picker) {
        super(picker, {
          id: 0,
          name: 'days',
          cellClass: 'day',
        });
      }
  
      init(options, onConstruction = true) {
        if (onConstruction) {
          const inner = parseHTML(daysTemplate).firstChild;
          this.dow = inner.firstChild;
          this.grid = inner.lastChild;
          this.element.appendChild(inner);
        }
        super.init(options);
      }
  
      setOptions(options) {
        let updateDOW;
  
        if (hasProperty(options, 'minDate')) {
          this.minDate = options.minDate;
        }
        if (hasProperty(options, 'maxDate')) {
          this.maxDate = options.maxDate;
        }
        if (options.datesDisabled) {
          this.datesDisabled = options.datesDisabled;
        }
        if (options.daysOfWeekDisabled) {
          this.daysOfWeekDisabled = options.daysOfWeekDisabled;
          updateDOW = true;
        }
        if (options.daysOfWeekHighlighted) {
          this.daysOfWeekHighlighted = options.daysOfWeekHighlighted;
        }
        if (options.todayHighlight !== undefined) {
          this.todayHighlight = options.todayHighlight;
        }
        if (options.weekStart !== undefined) {
          this.weekStart = options.weekStart;
          this.weekEnd = options.weekEnd;
          updateDOW = true;
        }
        if (options.locale) {
          const locale = this.locale = options.locale;
          this.dayNames = locale.daysMin;
          this.switchLabelFormat = locale.titleFormat;
          updateDOW = true;
        }
        if (options.beforeShowDay !== undefined) {
          this.beforeShow = typeof options.beforeShowDay === 'function'
            ? options.beforeShowDay
            : undefined;
        }
  
        if (options.calendarWeeks !== undefined) {
          if (options.calendarWeeks && !this.calendarWeeks) {
            const weeksElem = parseHTML(calendarWeeksTemplate).firstChild;
            this.calendarWeeks = {
              element: weeksElem,
              dow: weeksElem.firstChild,
              weeks: weeksElem.lastChild,
            };
            this.element.insertBefore(weeksElem, this.element.firstChild);
          } else if (this.calendarWeeks && !options.calendarWeeks) {
            this.element.removeChild(this.calendarWeeks.element);
            this.calendarWeeks = null;
          }
        }
        if (options.showDaysOfWeek !== undefined) {
          if (options.showDaysOfWeek) {
            showElement(this.dow);
            if (this.calendarWeeks) {
              showElement(this.calendarWeeks.dow);
            }
          } else {
            hideElement(this.dow);
            if (this.calendarWeeks) {
              hideElement(this.calendarWeeks.dow);
            }
          }
        }
  
        // update days-of-week when locale, daysOfweekDisabled or weekStart is changed
        if (updateDOW) {
          Array.from(this.dow.children).forEach((el, index) => {
            const dow = (this.weekStart + index) % 7;
            el.textContent = this.dayNames[dow];
            el.className = this.daysOfWeekDisabled.includes(dow) ? 'dow disabled' : 'dow';
          });
        }
      }
  
      // Apply update on the focused date to view's settings
      updateFocus() {
        const viewDate = new Date(this.picker.viewDate);
        const viewYear = viewDate.getFullYear();
        const viewMonth = viewDate.getMonth();
        const firstOfMonth = dateValue(viewYear, viewMonth, 1);
        const start = dayOfTheWeekOf(firstOfMonth, this.weekStart, this.weekStart);
  
        this.first = firstOfMonth;
        this.last = dateValue(viewYear, viewMonth + 1, 0);
        this.start = start;
        this.focused = this.picker.viewDate;
      }
  
      // Apply update on the selected dates to view's settings
      updateSelection() {
        const {dates, rangepicker} = this.picker.datepicker;
        this.selected = dates;
        if (rangepicker) {
          this.range = rangepicker.dates;
        }
      }
  
       // Update the entire view UI
      render() {
        // update today marker on ever render
        this.today = this.todayHighlight ? today() : undefined;
        // refresh disabled dates on every render in order to clear the ones added
        // by beforeShow hook at previous render
        this.disabled = [...this.datesDisabled];
  
        const switchLabel = formatDate(this.focused, this.switchLabelFormat, this.locale);
        this.picker.setViewSwitchLabel(switchLabel);
        this.picker.setPrevBtnDisabled(this.first <= this.minDate);
        this.picker.setNextBtnDisabled(this.last >= this.maxDate);
  
        if (this.calendarWeeks) {
          // start of the UTC week (Monday) of the 1st of the month
          const startOfWeek = dayOfTheWeekOf(this.first, 1, 1);
          Array.from(this.calendarWeeks.weeks.children).forEach((el, index) => {
            el.textContent = getWeek(addWeeks(startOfWeek, index));
          });
        }
        Array.from(this.grid.children).forEach((el, index) => {
          const classList = el.classList;
          const current = addDays(this.start, index);
          const date = new Date(current);
          const day = date.getDay();
  
          el.className = `datepicker-cell ${this.cellClass}`;
          el.dataset.date = current;
          el.textContent = date.getDate();
  
          if (current < this.first) {
            classList.add('prev');
          } else if (current > this.last) {
            classList.add('next');
          }
          if (this.today === current) {
            classList.add('today');
          }
          if (current < this.minDate || current > this.maxDate || this.disabled.includes(current)) {
            classList.add('disabled');
          }
          if (this.daysOfWeekDisabled.includes(day)) {
            classList.add('disabled');
            pushUnique(this.disabled, current);
          }
          if (this.daysOfWeekHighlighted.includes(day)) {
            classList.add('highlighted');
          }
          if (this.range) {
            const [rangeStart, rangeEnd] = this.range;
            if (current > rangeStart && current < rangeEnd) {
              classList.add('range');
            }
            if (current === rangeStart) {
              classList.add('range-start');
            }
            if (current === rangeEnd) {
              classList.add('range-end');
            }
          }
          if (this.selected.includes(current)) {
            classList.add('selected');
          }
          if (current === this.focused) {
            classList.add('focused');
          }
  
          if (this.beforeShow) {
            this.performBeforeHook(el, current, current);
          }
        });
      }
  
      // Update the view UI by applying the changes of selected and focused items
      refresh() {
        const [rangeStart, rangeEnd] = this.range || [];
        this.grid
          .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
          .forEach((el) => {
            el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
          });
        Array.from(this.grid.children).forEach((el) => {
          const current = Number(el.dataset.date);
          const classList = el.classList;
          if (current > rangeStart && current < rangeEnd) {
            classList.add('range');
          }
          if (current === rangeStart) {
            classList.add('range-start');
          }
          if (current === rangeEnd) {
            classList.add('range-end');
          }
          if (this.selected.includes(current)) {
            classList.add('selected');
          }
          if (current === this.focused) {
            classList.add('focused');
          }
        });
      }
  
      // Update the view UI by applying the change of focused item
      refreshFocus() {
        const index = Math.round((this.focused - this.start) / 86400000);
        this.grid.querySelectorAll('.focused').forEach((el) => {
          el.classList.remove('focused');
        });
        this.grid.children[index].classList.add('focused');
      }
    }
  
    function computeMonthRange(range, thisYear) {
      if (!range || !range[0] || !range[1]) {
        return;
      }
  
      const [[startY, startM], [endY, endM]] = range;
      if (startY > thisYear || endY < thisYear) {
        return;
      }
      return [
        startY === thisYear ? startM : -1,
        endY === thisYear ? endM : 12,
      ];
    }
  
    class MonthsView extends View {
      constructor(picker) {
        super(picker, {
          id: 1,
          name: 'months',
          cellClass: 'month',
        });
      }
  
      init(options, onConstruction = true) {
        if (onConstruction) {
          this.grid = this.element;
          this.element.classList.add('months', 'datepicker-grid');
          this.grid.appendChild(parseHTML(createTagRepeat('span', 12, {'data-month': ix => ix})));
        }
        super.init(options);
      }
  
      setOptions(options) {
        if (options.locale) {
          this.monthNames = options.locale.monthsShort;
        }
        if (hasProperty(options, 'minDate')) {
          if (options.minDate === undefined) {
            this.minYear = this.minMonth = this.minDate = undefined;
          } else {
            const minDateObj = new Date(options.minDate);
            this.minYear = minDateObj.getFullYear();
            this.minMonth = minDateObj.getMonth();
            this.minDate = minDateObj.setDate(1);
          }
        }
        if (hasProperty(options, 'maxDate')) {
          if (options.maxDate === undefined) {
            this.maxYear = this.maxMonth = this.maxDate = undefined;
          } else {
            const maxDateObj = new Date(options.maxDate);
            this.maxYear = maxDateObj.getFullYear();
            this.maxMonth = maxDateObj.getMonth();
            this.maxDate = dateValue(this.maxYear, this.maxMonth + 1, 0);
          }
        }
        if (options.beforeShowMonth !== undefined) {
          this.beforeShow = typeof options.beforeShowMonth === 'function'
            ? options.beforeShowMonth
            : undefined;
        }
      }
  
      // Update view's settings to reflect the viewDate set on the picker
      updateFocus() {
        const viewDate = new Date(this.picker.viewDate);
        this.year = viewDate.getFullYear();
        this.focused = viewDate.getMonth();
      }
  
      // Update view's settings to reflect the selected dates
      updateSelection() {
        const {dates, rangepicker} = this.picker.datepicker;
        this.selected = dates.reduce((selected, timeValue) => {
          const date = new Date(timeValue);
          const year = date.getFullYear();
          const month = date.getMonth();
          if (selected[year] === undefined) {
            selected[year] = [month];
          } else {
            pushUnique(selected[year], month);
          }
          return selected;
        }, {});
        if (rangepicker && rangepicker.dates) {
          this.range = rangepicker.dates.map(timeValue => {
            const date = new Date(timeValue);
            return isNaN(date) ? undefined : [date.getFullYear(), date.getMonth()];
          });
        }
      }
  
      // Update the entire view UI
      render() {
        // refresh disabled months on every render in order to clear the ones added
        // by beforeShow hook at previous render
        this.disabled = [];
  
        this.picker.setViewSwitchLabel(this.year);
        this.picker.setPrevBtnDisabled(this.year <= this.minYear);
        this.picker.setNextBtnDisabled(this.year >= this.maxYear);
  
        const selected = this.selected[this.year] || [];
        const yrOutOfRange = this.year < this.minYear || this.year > this.maxYear;
        const isMinYear = this.year === this.minYear;
        const isMaxYear = this.year === this.maxYear;
        const range = computeMonthRange(this.range, this.year);
  
        Array.from(this.grid.children).forEach((el, index) => {
          const classList = el.classList;
          const date = dateValue(this.year, index, 1);
  
          el.className = `datepicker-cell ${this.cellClass}`;
          if (this.isMinView) {
            el.dataset.date = date;
          }
          // reset text on every render to clear the custom content set
          // by beforeShow hook at previous render
          el.textContent = this.monthNames[index];
  
          if (
            yrOutOfRange
            || isMinYear && index < this.minMonth
            || isMaxYear && index > this.maxMonth
          ) {
            classList.add('disabled');
          }
          if (range) {
            const [rangeStart, rangeEnd] = range;
            if (index > rangeStart && index < rangeEnd) {
              classList.add('range');
            }
            if (index === rangeStart) {
              classList.add('range-start');
            }
            if (index === rangeEnd) {
              classList.add('range-end');
            }
          }
          if (selected.includes(index)) {
            classList.add('selected');
          }
          if (index === this.focused) {
            classList.add('focused');
          }
  
          if (this.beforeShow) {
            this.performBeforeHook(el, index, date);
          }
        });
      }
  
      // Update the view UI by applying the changes of selected and focused items
      refresh() {
        const selected = this.selected[this.year] || [];
        const [rangeStart, rangeEnd] = computeMonthRange(this.range, this.year) || [];
        this.grid
          .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
          .forEach((el) => {
            el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
          });
        Array.from(this.grid.children).forEach((el, index) => {
          const classList = el.classList;
          if (index > rangeStart && index < rangeEnd) {
            classList.add('range');
          }
          if (index === rangeStart) {
            classList.add('range-start');
          }
          if (index === rangeEnd) {
            classList.add('range-end');
          }
          if (selected.includes(index)) {
            classList.add('selected');
          }
          if (index === this.focused) {
            classList.add('focused');
          }
        });
      }
  
      // Update the view UI by applying the change of focused item
      refreshFocus() {
        this.grid.querySelectorAll('.focused').forEach((el) => {
          el.classList.remove('focused');
        });
        this.grid.children[this.focused].classList.add('focused');
      }
    }
  
    function toTitleCase(word) {
      return [...word].reduce((str, ch, ix) => str += ix ? ch : ch.toUpperCase(), '');
    }
  
    // Class representing the years and decades view elements
    class YearsView extends View {
      constructor(picker, config) {
        super(picker, config);
      }
  
      init(options, onConstruction = true) {
        if (onConstruction) {
          this.navStep = this.step * 10;
          this.beforeShowOption = `beforeShow${toTitleCase(this.cellClass)}`;
          this.grid = this.element;
          this.element.classList.add(this.name, 'datepicker-grid');
          this.grid.appendChild(parseHTML(createTagRepeat('span', 12)));
        }
        super.init(options);
      }
  
      setOptions(options) {
        if (hasProperty(options, 'minDate')) {
          if (options.minDate === undefined) {
            this.minYear = this.minDate = undefined;
          } else {
            this.minYear = startOfYearPeriod(options.minDate, this.step);
            this.minDate = dateValue(this.minYear, 0, 1);
          }
        }
        if (hasProperty(options, 'maxDate')) {
          if (options.maxDate === undefined) {
            this.maxYear = this.maxDate = undefined;
          } else {
            this.maxYear = startOfYearPeriod(options.maxDate, this.step);
            this.maxDate = dateValue(this.maxYear, 11, 31);
          }
        }
        if (options[this.beforeShowOption] !== undefined) {
          const beforeShow = options[this.beforeShowOption];
          this.beforeShow = typeof beforeShow === 'function' ? beforeShow : undefined;
        }
      }
  
      // Update view's settings to reflect the viewDate set on the picker
      updateFocus() {
        const viewDate = new Date(this.picker.viewDate);
        const first = startOfYearPeriod(viewDate, this.navStep);
        const last = first + 9 * this.step;
  
        this.first = first;
        this.last = last;
        this.start = first - this.step;
        this.focused = startOfYearPeriod(viewDate, this.step);
      }
  
      // Update view's settings to reflect the selected dates
      updateSelection() {
        const {dates, rangepicker} = this.picker.datepicker;
        this.selected = dates.reduce((years, timeValue) => {
          return pushUnique(years, startOfYearPeriod(timeValue, this.step));
        }, []);
        if (rangepicker && rangepicker.dates) {
          this.range = rangepicker.dates.map(timeValue => {
            if (timeValue !== undefined) {
              return startOfYearPeriod(timeValue, this.step);
            }
          });
        }
      }
  
      // Update the entire view UI
      render() {
        // refresh disabled years on every render in order to clear the ones added
        // by beforeShow hook at previous render
        this.disabled = [];
  
        this.picker.setViewSwitchLabel(`${this.first}-${this.last}`);
        this.picker.setPrevBtnDisabled(this.first <= this.minYear);
        this.picker.setNextBtnDisabled(this.last >= this.maxYear);
  
        Array.from(this.grid.children).forEach((el, index) => {
          const classList = el.classList;
          const current = this.start + (index * this.step);
          const date = dateValue(current, 0, 1);
  
          el.className = `datepicker-cell ${this.cellClass}`;
          if (this.isMinView) {
            el.dataset.date = date;
          }
          el.textContent = el.dataset.year = current;
  
          if (index === 0) {
            classList.add('prev');
          } else if (index === 11) {
            classList.add('next');
          }
          if (current < this.minYear || current > this.maxYear) {
            classList.add('disabled');
          }
          if (this.range) {
            const [rangeStart, rangeEnd] = this.range;
            if (current > rangeStart && current < rangeEnd) {
              classList.add('range');
            }
            if (current === rangeStart) {
              classList.add('range-start');
            }
            if (current === rangeEnd) {
              classList.add('range-end');
            }
          }
          if (this.selected.includes(current)) {
            classList.add('selected');
          }
          if (current === this.focused) {
            classList.add('focused');
          }
  
          if (this.beforeShow) {
            this.performBeforeHook(el, current, date);
          }
        });
      }
  
      // Update the view UI by applying the changes of selected and focused items
      refresh() {
        const [rangeStart, rangeEnd] = this.range || [];
        this.grid
          .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
          .forEach((el) => {
            el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
          });
        Array.from(this.grid.children).forEach((el) => {
          const current = Number(el.textContent);
          const classList = el.classList;
          if (current > rangeStart && current < rangeEnd) {
            classList.add('range');
          }
          if (current === rangeStart) {
            classList.add('range-start');
          }
          if (current === rangeEnd) {
            classList.add('range-end');
          }
          if (this.selected.includes(current)) {
            classList.add('selected');
          }
          if (current === this.focused) {
            classList.add('focused');
          }
        });
      }
  
      // Update the view UI by applying the change of focused item
      refreshFocus() {
        const index = Math.round((this.focused - this.start) / this.step);
        this.grid.querySelectorAll('.focused').forEach((el) => {
          el.classList.remove('focused');
        });
        this.grid.children[index].classList.add('focused');
      }
    }
  
    function triggerDatepickerEvent(datepicker, type) {
      const detail = {
        date: datepicker.getDate(),
        viewDate: new Date(datepicker.picker.viewDate),
        viewId: datepicker.picker.currentView.id,
        datepicker,
      };
      datepicker.element.dispatchEvent(new CustomEvent(type, {detail}));
    }
  
    // direction: -1 (to previous), 1 (to next)
    function goToPrevOrNext(datepicker, direction) {
      const {minDate, maxDate} = datepicker.config;
      const {currentView, viewDate} = datepicker.picker;
      let newViewDate;
      switch (currentView.id) {
        case 0:
          newViewDate = addMonths(viewDate, direction);
          break;
        case 1:
          newViewDate = addYears(viewDate, direction);
          break;
        default:
          newViewDate = addYears(viewDate, direction * currentView.navStep);
      }
      newViewDate = limitToRange(newViewDate, minDate, maxDate);
      datepicker.picker.changeFocus(newViewDate).render();
    }
  
    function switchView(datepicker) {
      const viewId = datepicker.picker.currentView.id;
      if (viewId === datepicker.config.maxView) {
        return;
      }
      datepicker.picker.changeView(viewId + 1).render();
    }
  
    function unfocus(datepicker) {
      if (datepicker.config.updateOnBlur) {
        datepicker.update({autohide: true});
      } else {
        datepicker.refresh('input');
        datepicker.hide();
      }
    }
  
    function goToSelectedMonthOrYear(datepicker, selection) {
      const picker = datepicker.picker;
      const viewDate = new Date(picker.viewDate);
      const viewId = picker.currentView.id;
      const newDate = viewId === 1
        ? addMonths(viewDate, selection - viewDate.getMonth())
        : addYears(viewDate, selection - viewDate.getFullYear());
  
      picker.changeFocus(newDate).changeView(viewId - 1).render();
    }
  
    function onClickTodayBtn(datepicker) {
      const picker = datepicker.picker;
      const currentDate = today();
      if (datepicker.config.todayBtnMode === 1) {
        if (datepicker.config.autohide) {
          datepicker.setDate(currentDate);
          return;
        }
        datepicker.setDate(currentDate, {render: false});
        picker.update();
      }
      if (picker.viewDate !== currentDate) {
        picker.changeFocus(currentDate);
      }
      picker.changeView(0).render();
    }
  
    function onClickClearBtn(datepicker) {
      datepicker.setDate({clear: true});
    }
  
    function onClickViewSwitch(datepicker) {
      switchView(datepicker);
    }
  
    function onClickPrevBtn(datepicker) {
      goToPrevOrNext(datepicker, -1);
    }
  
    function onClickNextBtn(datepicker) {
      goToPrevOrNext(datepicker, 1);
    }
  
    // For the picker's main block to delegete the events from `datepicker-cell`s
    function onClickView(datepicker, ev) {
      const target = findElementInEventPath(ev, '.datepicker-cell');
      if (!target || target.classList.contains('disabled')) {
        return;
      }
  
      const {id, isMinView} = datepicker.picker.currentView;
      if (isMinView) {
        datepicker.setDate(Number(target.dataset.date));
      } else if (id === 1) {
        goToSelectedMonthOrYear(datepicker, Number(target.dataset.month));
      } else {
        goToSelectedMonthOrYear(datepicker, Number(target.dataset.year));
      }
    }
  
    function onClickPicker(datepicker) {
      if (!datepicker.inline && !datepicker.config.disableTouchKeyboard) {
        datepicker.inputField.focus();
      }
    }
  
    function processPickerOptions(picker, options) {
      if (options.title !== undefined) {
        if (options.title) {
          picker.controls.title.textContent = options.title;
          showElement(picker.controls.title);
        } else {
          picker.controls.title.textContent = '';
          hideElement(picker.controls.title);
        }
      }
      if (options.prevArrow) {
        const prevBtn = picker.controls.prevBtn;
        emptyChildNodes(prevBtn);
        options.prevArrow.forEach((node) => {
          prevBtn.appendChild(node.cloneNode(true));
        });
      }
      if (options.nextArrow) {
        const nextBtn = picker.controls.nextBtn;
        emptyChildNodes(nextBtn);
        options.nextArrow.forEach((node) => {
          nextBtn.appendChild(node.cloneNode(true));
        });
      }
      if (options.locale) {
        picker.controls.todayBtn.textContent = options.locale.today;
        picker.controls.clearBtn.textContent = options.locale.clear;
      }
      if (options.todayBtn !== undefined) {
        if (options.todayBtn) {
          showElement(picker.controls.todayBtn);
        } else {
          hideElement(picker.controls.todayBtn);
        }
      }
      if (hasProperty(options, 'minDate') || hasProperty(options, 'maxDate')) {
        const {minDate, maxDate} = picker.datepicker.config;
        picker.controls.todayBtn.disabled = !isInRange(today(), minDate, maxDate);
      }
      if (options.clearBtn !== undefined) {
        if (options.clearBtn) {
          showElement(picker.controls.clearBtn);
        } else {
          hideElement(picker.controls.clearBtn);
        }
      }
    }
  
    // Compute view date to reset, which will be...
    // - the last item of the selected dates or defaultViewDate if no selection
    // - limitted to minDate or maxDate if it exceeds the range
    function computeResetViewDate(datepicker) {
      const {dates, config} = datepicker;
      const viewDate = dates.length > 0 ? lastItemOf(dates) : config.defaultViewDate;
      return limitToRange(viewDate, config.minDate, config.maxDate);
    }
  
    // Change current view's view date
    function setViewDate(picker, newDate) {
      const oldViewDate = new Date(picker.viewDate);
      const newViewDate = new Date(newDate);
      const {id, year, first, last} = picker.currentView;
      const viewYear = newViewDate.getFullYear();
  
      picker.viewDate = newDate;
      if (viewYear !== oldViewDate.getFullYear()) {
        triggerDatepickerEvent(picker.datepicker, 'changeYear');
      }
      if (newViewDate.getMonth() !== oldViewDate.getMonth()) {
        triggerDatepickerEvent(picker.datepicker, 'changeMonth');
      }
  
      // return whether the new date is in different period on time from the one
      // displayed in the current view
      // when true, the view needs to be re-rendered on the next UI refresh.
      switch (id) {
        case 0:
          return newDate < first || newDate > last;
        case 1:
          return viewYear !== year;
        default:
          return viewYear < first || viewYear > last;
      }
    }
  
    function getTextDirection(el) {
      return window.getComputedStyle(el).direction;
    }
  
    // Class representing the picker UI
    class Picker {
      constructor(datepicker) {
        this.datepicker = datepicker;
  
        const template = pickerTemplate.replace(/%buttonClass%/g, datepicker.config.buttonClass);
        const element = this.element = parseHTML(template).firstChild;
        const [header, main, footer] = element.firstChild.children;
        const title = header.firstElementChild;
        const [prevBtn, viewSwitch, nextBtn] = header.lastElementChild.children;
        const [todayBtn, clearBtn] = footer.firstChild.children;
        const controls = {
          title,
          prevBtn,
          viewSwitch,
          nextBtn,
          todayBtn,
          clearBtn,
        };
        this.main = main;
        this.controls = controls;
  
        const elementClass = datepicker.inline ? 'inline' : 'dropdown';
        element.classList.add(`datepicker-${elementClass}`);
  
        processPickerOptions(this, datepicker.config);
        this.viewDate = computeResetViewDate(datepicker);
  
        // set up event listeners
        registerListeners(datepicker, [
          [element, 'click', onClickPicker.bind(null, datepicker), {capture: true}],
          [main, 'click', onClickView.bind(null, datepicker)],
          [controls.viewSwitch, 'click', onClickViewSwitch.bind(null, datepicker)],
          [controls.prevBtn, 'click', onClickPrevBtn.bind(null, datepicker)],
          [controls.nextBtn, 'click', onClickNextBtn.bind(null, datepicker)],
          [controls.todayBtn, 'click', onClickTodayBtn.bind(null, datepicker)],
          [controls.clearBtn, 'click', onClickClearBtn.bind(null, datepicker)],
        ]);
  
        // set up views
        this.views = [
          new DaysView(this),
          new MonthsView(this),
          new YearsView(this, {id: 2, name: 'years', cellClass: 'year', step: 1}),
          new YearsView(this, {id: 3, name: 'decades', cellClass: 'decade', step: 10}),
        ];
        this.currentView = this.views[datepicker.config.startView];
  
        this.currentView.render();
        this.main.appendChild(this.currentView.element);
        datepicker.config.container.appendChild(this.element);
      }
  
      setOptions(options) {
        processPickerOptions(this, options);
        this.views.forEach((view) => {
          view.init(options, false);
        });
        this.currentView.render();
      }
  
      detach() {
        this.datepicker.config.container.removeChild(this.element);
      }
  
      show() {
        if (this.active) {
          return;
        }
        this.element.classList.add('active');
        this.active = true;
  
        const datepicker = this.datepicker;
        if (!datepicker.inline) {
          // ensure picker's direction matches input's
          const inputDirection = getTextDirection(datepicker.inputField);
          if (inputDirection !== getTextDirection(datepicker.config.container)) {
            this.element.dir = inputDirection;
          } else if (this.element.dir) {
            this.element.removeAttribute('dir');
          }
  
          this.place();
          if (datepicker.config.disableTouchKeyboard) {
            datepicker.inputField.blur();
          }
        }
        triggerDatepickerEvent(datepicker, 'show');
      }
  
      hide() {
        if (!this.active) {
          return;
        }
        this.datepicker.exitEditMode();
        this.element.classList.remove('active');
        this.active = false;
        triggerDatepickerEvent(this.datepicker, 'hide');
      }
  
      place() {
        const {classList, style} = this.element;
        const {config, inputField} = this.datepicker;
        const container = config.container;
        const {
          width: calendarWidth,
          height: calendarHeight,
        } = this.element.getBoundingClientRect();
        const {
          left: containerLeft,
          top: containerTop,
          width: containerWidth,
        } = container.getBoundingClientRect();
        const {
          left: inputLeft,
          top: inputTop,
          width: inputWidth,
          height: inputHeight
        } = inputField.getBoundingClientRect();
        let {x: orientX, y: orientY} = config.orientation;
        let scrollTop;
        let left;
        let top;
  
        if (container === document.body) {
          scrollTop = window.scrollY;
          left = inputLeft + window.scrollX;
          top = inputTop + scrollTop;
        } else {
          scrollTop = container.scrollTop;
          left = inputLeft - containerLeft;
          top = inputTop - containerTop + scrollTop;
        }
  
        if (orientX === 'auto') {
          if (left < 0) {
            // align to the left and move into visible area if input's left edge < window's
            orientX = 'left';
            left = 10;
          } else if (left + calendarWidth > containerWidth) {
            // align to the right if canlendar's right edge > container's
            orientX = 'right';
          } else {
            orientX = getTextDirection(inputField) === 'rtl' ? 'right' : 'left';
          }
        }
        if (orientX === 'right') {
          left -= calendarWidth - inputWidth;
        }
  
        if (orientY === 'auto') {
          orientY = top - calendarHeight < scrollTop ? 'bottom' : 'top';
        }
        if (orientY === 'top') {
          top -= calendarHeight;
        } else {
          top += inputHeight;
        }
  
        classList.remove(
          'datepicker-orient-top',
          'datepicker-orient-bottom',
          'datepicker-orient-right',
          'datepicker-orient-left'
        );
        classList.add(`datepicker-orient-${orientY}`, `datepicker-orient-${orientX}`);
  
        style.top = top ? `${top}px` : top;
        style.left = left ? `${left}px` : left;
      }
  
      setViewSwitchLabel(labelText) {
        this.controls.viewSwitch.textContent = labelText;
      }
  
      setPrevBtnDisabled(disabled) {
        this.controls.prevBtn.disabled = disabled;
      }
  
      setNextBtnDisabled(disabled) {
        this.controls.nextBtn.disabled = disabled;
      }
  
      changeView(viewId) {
        const oldView = this.currentView;
        const newView =  this.views[viewId];
        if (newView.id !== oldView.id) {
          this.currentView = newView;
          this._renderMethod = 'render';
          triggerDatepickerEvent(this.datepicker, 'changeView');
          this.main.replaceChild(newView.element, oldView.element);
        }
        return this;
      }
  
      // Change the focused date (view date)
      changeFocus(newViewDate) {
        this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refreshFocus';
        this.views.forEach((view) => {
          view.updateFocus();
        });
        return this;
      }
  
      // Apply the change of the selected dates
      update() {
        const newViewDate = computeResetViewDate(this.datepicker);
        this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refresh';
        this.views.forEach((view) => {
          view.updateFocus();
          view.updateSelection();
        });
        return this;
      }
  
      // Refresh the picker UI
      render(quickRender = true) {
        const renderMethod = (quickRender && this._renderMethod) || 'render';
        delete this._renderMethod;
  
        this.currentView[renderMethod]();
      }
    }
  
    // Find the closest date that doesn't meet the condition for unavailable date
    // Returns undefined if no available date is found
    // addFn: function to calculate the next date
    //   - args: time value, amount
    // increase: amount to pass to addFn
    // testFn: function to test the unavailablity of the date
    //   - args: time value; retun: true if unavailable
    function findNextAvailableOne(date, addFn, increase, testFn, min, max) {
      if (!isInRange(date, min, max)) {
        return;
      }
      if (testFn(date)) {
        const newDate = addFn(date, increase);
        return findNextAvailableOne(newDate, addFn, increase, testFn, min, max);
      }
      return date;
    }
  
    // direction: -1 (left/up), 1 (right/down)
    // vertical: true for up/down, false for left/right
    function moveByArrowKey(datepicker, ev, direction, vertical) {
      const picker = datepicker.picker;
      const currentView = picker.currentView;
      const step = currentView.step || 1;
      let viewDate = picker.viewDate;
      let addFn;
      let testFn;
      switch (currentView.id) {
        case 0:
          if (vertical) {
            viewDate = addDays(viewDate, direction * 7);
          } else if (ev.ctrlKey || ev.metaKey) {
            viewDate = addYears(viewDate, direction);
          } else {
            viewDate = addDays(viewDate, direction);
          }
          addFn = addDays;
          testFn = (date) => currentView.disabled.includes(date);
          break;
        case 1:
          viewDate = addMonths(viewDate, vertical ? direction * 4 : direction);
          addFn = addMonths;
          testFn = (date) => {
            const dt = new Date(date);
            const {year, disabled} = currentView;
            return dt.getFullYear() === year && disabled.includes(dt.getMonth());
          };
          break;
        default:
          viewDate = addYears(viewDate, direction * (vertical ? 4 : 1) * step);
          addFn = addYears;
          testFn = date => currentView.disabled.includes(startOfYearPeriod(date, step));
      }
      viewDate = findNextAvailableOne(
        viewDate,
        addFn,
        direction < 0 ? -step : step,
        testFn,
        currentView.minDate,
        currentView.maxDate
      );
      if (viewDate !== undefined) {
        picker.changeFocus(viewDate).render();
      }
    }
  
    function onKeydown(datepicker, ev) {
      if (ev.key === 'Tab') {
        unfocus(datepicker);
        return;
      }
  
      const picker = datepicker.picker;
      const {id, isMinView} = picker.currentView;
      if (!picker.active) {
        switch (ev.key) {
          case 'ArrowDown':
          case 'Escape':
            picker.show();
            break;
          case 'Enter':
            datepicker.update();
            break;
          default:
            return;
        }
      } else if (datepicker.editMode) {
        switch (ev.key) {
          case 'Escape':
            picker.hide();
            break;
          case 'Enter':
            datepicker.exitEditMode({update: true, autohide: datepicker.config.autohide});
            break;
          default:
            return;
        }
      } else {
        switch (ev.key) {
          case 'Escape':
            picker.hide();
            break;
          case 'ArrowLeft':
            if (ev.ctrlKey || ev.metaKey) {
              goToPrevOrNext(datepicker, -1);
            } else if (ev.shiftKey) {
              datepicker.enterEditMode();
              return;
            } else {
              moveByArrowKey(datepicker, ev, -1, false);
            }
            break;
          case 'ArrowRight':
            if (ev.ctrlKey || ev.metaKey) {
              goToPrevOrNext(datepicker, 1);
            } else if (ev.shiftKey) {
              datepicker.enterEditMode();
              return;
            } else {
              moveByArrowKey(datepicker, ev, 1, false);
            }
            break;
          case 'ArrowUp':
            if (ev.ctrlKey || ev.metaKey) {
              switchView(datepicker);
            } else if (ev.shiftKey) {
              datepicker.enterEditMode();
              return;
            } else {
              moveByArrowKey(datepicker, ev, -1, true);
            }
            break;
          case 'ArrowDown':
            if (ev.shiftKey && !ev.ctrlKey && !ev.metaKey) {
              datepicker.enterEditMode();
              return;
            }
            moveByArrowKey(datepicker, ev, 1, true);
            break;
          case 'Enter':
            if (isMinView) {
              datepicker.setDate(picker.viewDate);
            } else {
              picker.changeView(id - 1).render();
            }
            break;
          case 'Backspace':
          case 'Delete':
            datepicker.enterEditMode();
            return;
          default:
            if (ev.key.length === 1 && !ev.ctrlKey && !ev.metaKey) {
              datepicker.enterEditMode();
            }
            return;
        }
      }
      ev.preventDefault();
      ev.stopPropagation();
    }
  
    function onFocus(datepicker) {
      if (datepicker.config.showOnFocus && !datepicker._showing) {
        datepicker.show();
      }
    }
  
    // for the prevention for entering edit mode while getting focus on click
    function onMousedown(datepicker, ev) {
      const el = ev.target;
      if (datepicker.picker.active || datepicker.config.showOnClick) {
        el._active = el === document.activeElement;
        el._clicking = setTimeout(() => {
          delete el._active;
          delete el._clicking;
        }, 2000);
      }
    }
  
    function onClickInput(datepicker, ev) {
      const el = ev.target;
      if (!el._clicking) {
        return;
      }
      clearTimeout(el._clicking);
      delete el._clicking;
  
      if (el._active) {
        datepicker.enterEditMode();
      }
      delete el._active;
  
      if (datepicker.config.showOnClick) {
        datepicker.show();
      }
    }
  
    function onPaste(datepicker, ev) {
      if (ev.clipboardData.types.includes('text/plain')) {
        datepicker.enterEditMode();
      }
    }
  
    // for the `document` to delegate the events from outside the picker/input field
    function onClickOutside(datepicker, ev) {
      const element = datepicker.element;
      if (element !== document.activeElement) {
        return;
      }
      const pickerElem = datepicker.picker.element;
      if (findElementInEventPath(ev, el => el === element || el === pickerElem)) {
        return;
      }
      unfocus(datepicker);
    }
  
    function stringifyDates(dates, config) {
      return dates
        .map(dt => formatDate(dt, config.format, config.locale))
        .join(config.dateDelimiter);
    }
  
    // parse input dates and create an array of time values for selection
    // returns undefined if there are no valid dates in inputDates
    // when origDates (current selection) is passed, the function works to mix
    // the input dates into the current selection
    function processInputDates(datepicker, inputDates, clear = false) {
      const {config, dates: origDates, rangepicker} = datepicker;
      if (inputDates.length === 0) {
        // empty input is considered valid unless origiDates is passed
        return clear ? [] : undefined;
      }
  
      const rangeEnd = rangepicker && datepicker === rangepicker.datepickers[1];
      let newDates = inputDates.reduce((dates, dt) => {
        let date = parseDate(dt, config.format, config.locale);
        if (date === undefined) {
          return dates;
        }
        if (config.pickLevel > 0) {
          // adjust to 1st of the month/Jan 1st of the year
          // or to the last day of the monh/Dec 31st of the year if the datepicker
          // is the range-end picker of a rangepicker
          const dt = new Date(date);
          if (config.pickLevel === 1) {
            date = rangeEnd
              ? dt.setMonth(dt.getMonth() + 1, 0)
              : dt.setDate(1);
          } else {
            date = rangeEnd
              ? dt.setFullYear(dt.getFullYear() + 1, 0, 0)
              : dt.setMonth(0, 1);
          }
        }
        if (
          isInRange(date, config.minDate, config.maxDate)
          && !dates.includes(date)
          && !config.datesDisabled.includes(date)
          && !config.daysOfWeekDisabled.includes(new Date(date).getDay())
        ) {
          dates.push(date);
        }
        return dates;
      }, []);
      if (newDates.length === 0) {
        return;
      }
      if (config.multidate && !clear) {
        // get the synmetric difference between origDates and newDates
        newDates = newDates.reduce((dates, date) => {
          if (!origDates.includes(date)) {
            dates.push(date);
          }
          return dates;
        }, origDates.filter(date => !newDates.includes(date)));
      }
      // do length check always because user can input multiple dates regardless of the mode
      return config.maxNumberOfDates && newDates.length > config.maxNumberOfDates
        ? newDates.slice(config.maxNumberOfDates * -1)
        : newDates;
    }
  
    // refresh the UI elements
    // modes: 1: input only, 2, picker only, 3 both
    function refreshUI(datepicker, mode = 3, quickRender = true) {
      const {config, picker, inputField} = datepicker;
      if (mode & 2) {
        const newView = picker.active ? config.pickLevel : config.startView;
        picker.update().changeView(newView).render(quickRender);
      }
      if (mode & 1 && inputField) {
        inputField.value = stringifyDates(datepicker.dates, config);
      }
    }
  
    function setDate(datepicker, inputDates, options) {
      let {clear, render, autohide} = options;
      if (render === undefined) {
        render = true;
      }
      if (!render) {
        autohide = false;
      } else if (autohide === undefined) {
        autohide = datepicker.config.autohide;
      }
  
      const newDates = processInputDates(datepicker, inputDates, clear);
      if (!newDates) {
        return;
      }
      if (newDates.toString() !== datepicker.dates.toString()) {
        datepicker.dates = newDates;
        refreshUI(datepicker, render ? 3 : 1);
        triggerDatepickerEvent(datepicker, 'changeDate');
      } else {
        refreshUI(datepicker, 1);
      }
      if (autohide) {
        datepicker.hide();
      }
    }
  
    /**
     * Class representing a date picker
     */
    class Datepicker {
      /**
       * Create a date picker
       * @param  {Element} element - element to bind a date picker
       * @param  {Object} [options] - config options
       * @param  {DateRangePicker} [rangepicker] - DateRangePicker instance the
       * date picker belongs to. Use this only when creating date picker as a part
       * of date range picker
       */
      constructor(element, options = {}, rangepicker = undefined) {
        element.datepicker = this;
        this.element = element;
  
        // set up config
        const config = this.config = Object.assign({
          buttonClass: (options.buttonClass && String(options.buttonClass)) || 'button',
          container: document.body,
          defaultViewDate: today(),
          maxDate: undefined,
          minDate: undefined,
        }, processOptions(defaultOptions, this));
        this._options = options;
        Object.assign(config, processOptions(options, this));
  
        // configure by type
        const inline = this.inline = element.tagName !== 'INPUT';
        let inputField;
        let initialDates;
  
        if (inline) {
          config.container = element;
          initialDates = stringToArray(element.dataset.date, config.dateDelimiter);
          delete element.dataset.date;
        } else {
          const container = options.container ? document.querySelector(options.container) : null;
          if (container) {
            config.container = container;
          }
          inputField = this.inputField = element;
          inputField.classList.add('datepicker-input');
          initialDates = stringToArray(inputField.value, config.dateDelimiter);
        }
        if (rangepicker) {
          // check validiry
          const index = rangepicker.inputs.indexOf(inputField);
          const datepickers = rangepicker.datepickers;
          if (index < 0 || index > 1 || !Array.isArray(datepickers)) {
            throw Error('Invalid rangepicker object.');
          }
          // attach itaelf to the rangepicker here so that processInputDates() can
          // determine if this is the range-end picker of the rangepicker while
          // setting inital values when pickLevel > 0
          datepickers[index] = this;
          // add getter for rangepicker
          Object.defineProperty(this, 'rangepicker', {
            get() {
              return rangepicker;
            },
          });
        }
  
        // set initial dates
        this.dates = [];
        // process initial value
        const inputDateValues = processInputDates(this, initialDates);
        if (inputDateValues && inputDateValues.length > 0) {
          this.dates = inputDateValues;
        }
        if (inputField) {
          inputField.value = stringifyDates(this.dates, config);
        }
  
        const picker = this.picker = new Picker(this);
  
        if (inline) {
          this.show();
        } else {
          // set up event listeners in other modes
          const onMousedownDocument = onClickOutside.bind(null, this);
          const listeners = [
            [inputField, 'keydown', onKeydown.bind(null, this)],
            [inputField, 'focus', onFocus.bind(null, this)],
            [inputField, 'mousedown', onMousedown.bind(null, this)],
            [inputField, 'click', onClickInput.bind(null, this)],
            [inputField, 'paste', onPaste.bind(null, this)],
            [document, 'mousedown', onMousedownDocument],
            [document, 'touchstart', onMousedownDocument],
            [window, 'resize', picker.place.bind(picker)]
          ];
          registerListeners(this, listeners);
        }
      }
  
      /**
       * Format Date object or time value in given format and language
       * @param  {Date|Number} date - date or time value to format
       * @param  {String|Object} format - format string or object that contains
       * toDisplay() custom formatter, whose signature is
       * - args:
       *   - date: {Date} - Date instance of the date passed to the method
       *   - format: {Object} - the format object passed to the method
       *   - locale: {Object} - locale for the language specified by `lang`
       * - return:
       *     {String} formatted date
       * @param  {String} [lang=en] - language code for the locale to use
       * @return {String} formatted date
       */
      static formatDate(date, format, lang) {
        return formatDate(date, format, lang && locales[lang] || locales.en);
      }
  
      /**
       * Parse date string
       * @param  {String|Date|Number} dateStr - date string, Date object or time
       * value to parse
       * @param  {String|Object} format - format string or object that contains
       * toValue() custom parser, whose signature is
       * - args:
       *   - dateStr: {String|Date|Number} - the dateStr passed to the method
       *   - format: {Object} - the format object passed to the method
       *   - locale: {Object} - locale for the language specified by `lang`
       * - return:
       *     {Date|Number} parsed date or its time value
       * @param  {String} [lang=en] - language code for the locale to use
       * @return {Number} time value of parsed date
       */
      static parseDate(dateStr, format, lang) {
        return parseDate(dateStr, format, lang && locales[lang] || locales.en);
      }
  
      /**
       * @type {Object} - Installed locales in `[languageCode]: localeObject` format
       * en`:_English (US)_ is pre-installed.
       */
      static get locales() {
        return locales;
      }
  
      /**
       * @type {Boolean} - Whether the picker element is shown. `true` whne shown
       */
      get active() {
        return !!(this.picker && this.picker.active);
      }
  
      /**
       * @type {HTMLDivElement} - DOM object of picker element
       */
      get pickerElement() {
        return this.picker ? this.picker.element : undefined;
      }
  
      /**
       * Set new values to the config options
       * @param {Object} options - config options to update
       */
      setOptions(options) {
        const picker = this.picker;
        const newOptions = processOptions(options, this);
        Object.assign(this._options, options);
        Object.assign(this.config, newOptions);
        picker.setOptions(newOptions);
  
        refreshUI(this, 3);
      }
  
      /**
       * Show the picker element
       */
      show() {
        if (this.inputField) {
          if (this.inputField.disabled) {
            return;
          }
          if (this.inputField !== document.activeElement) {
            this._showing = true;
            this.inputField.focus();
            delete this._showing;
          }
        }
        this.picker.show();
      }
  
      /**
       * Hide the picker element
       * Not available on inline picker
       */
      hide() {
        if (this.inline) {
          return;
        }
        this.picker.hide();
        this.picker.update().changeView(this.config.startView).render();
      }
  
      /**
       * Destroy the Datepicker instance
       * @return {Detepicker} - the instance destroyed
       */
      destroy() {
        this.hide();
        unregisterListeners(this);
        this.picker.detach();
        if (!this.inline) {
          this.inputField.classList.remove('datepicker-input');
        }
        delete this.element.datepicker;
        return this;
      }
  
      /**
       * Get the selected date(s)
       *
       * The method returns a Date object of selected date by default, and returns
       * an array of selected dates in multidate mode. If format string is passed,
       * it returns date string(s) formatted in given format.
       *
       * @param  {String} [format] - Format string to stringify the date(s)
       * @return {Date|String|Date[]|String[]} - selected date(s), or if none is
       * selected, empty array in multidate mode and untitled in sigledate mode
       */
      getDate(format = undefined) {
        const callback = format
          ? date => formatDate(date, format, this.config.locale)
          : date => new Date(date);
  
        if (this.config.multidate) {
          return this.dates.map(callback);
        }
        if (this.dates.length > 0) {
          return callback(this.dates[0]);
        }
      }
  
      /**
       * Set selected date(s)
       *
       * In multidate mode, you can pass multiple dates as a series of arguments
       * or an array. (Since each date is parsed individually, the type of the
       * dates doesn't have to be the same.)
       * The given dates are used to toggle the select status of each date. The
       * number of selected dates is kept from exceeding the length set to
       * maxNumberOfDates.
       *
       * With clear: true option, the method can be used to clear the selection
       * and to replace the selection instead of toggling in multidate mode.
       * If the option is passed with no date arguments or an empty dates array,
       * it works as "clear" (clear the selection then set nothing), and if the
       * option is passed with new dates to select, it works as "replace" (clear
       * the selection then set the given dates)
       *
       * When render: false option is used, the method omits re-rendering the
       * picker element. In this case, you need to call refresh() method later in
       * order for the picker element to reflect the changes. The input field is
       * refreshed always regardless of this option.
       *
       * When invalid (unparsable, repeated, disabled or out-of-range) dates are
       * passed, the method ignores them and applies only valid ones. In the case
       * that all the given dates are invalid, which is distinguished from passing
       * no dates, the method considers it as an error and leaves the selection
       * untouched.
       *
       * @param {...(Date|Number|String)|Array} [dates] - Date strings, Date
       * objects, time values or mix of those for new selection
       * @param {Object} [options] - function options
       * - clear: {boolean} - Whether to clear the existing selection
       *     defualt: false
       * - render: {boolean} - Whether to re-render the picker element
       *     default: true
       * - autohide: {boolean} - Whether to hide the picker element after re-render
       *     Ignored when used with render: false
       *     default: config.autohide
       */
      setDate(...args) {
        const dates = [...args];
        const opts = {};
        const lastArg = lastItemOf(args);
        if (
          typeof lastArg === 'object'
          && !Array.isArray(lastArg)
          && !(lastArg instanceof Date)
          && lastArg
        ) {
          Object.assign(opts, dates.pop());
        }
  
        const inputDates = Array.isArray(dates[0]) ? dates[0] : dates;
        setDate(this, inputDates, opts);
      }
  
      /**
       * Update the selected date(s) with input field's value
       * Not available on inline picker
       *
       * The input field will be refreshed with properly formatted date string.
       *
       * @param  {Object} [options] - function options
       * - autohide: {boolean} - whether to hide the picker element after refresh
       *     default: false
       */
      update(options = undefined) {
        if (this.inline) {
          return;
        }
  
        const opts = {clear: true, autohide: !!(options && options.autohide)};
        const inputDates = stringToArray(this.inputField.value, this.config.dateDelimiter);
        setDate(this, inputDates, opts);
      }
  
      /**
       * Refresh the picker element and the associated input field
       * @param {String} [target] - target item when refreshing one item only
       * 'picker' or 'input'
       * @param {Boolean} [forceRender] - whether to re-render the picker element
       * regardless of its state instead of optimized refresh
       */
      refresh(target = undefined, forceRender = false) {
        if (target && typeof target !== 'string') {
          forceRender = target;
          target = undefined;
        }
  
        let mode;
        if (target === 'picker') {
          mode = 2;
        } else if (target === 'input') {
          mode = 1;
        } else {
          mode = 3;
        }
        refreshUI(this, mode, !forceRender);
      }
  
      /**
       * Enter edit mode
       * Not available on inline picker or when the picker element is hidden
       */
      enterEditMode() {
        if (this.inline || !this.picker.active || this.editMode) {
          return;
        }
        this.editMode = true;
        this.inputField.classList.add('in-edit');
      }
  
      /**
       * Exit from edit mode
       * Not available on inline picker
       * @param  {Object} [options] - function options
       * - update: {boolean} - whether to call update() after exiting
       *     If false, input field is revert to the existing selection
       *     default: false
       */
      exitEditMode(options = undefined) {
        if (this.inline || !this.editMode) {
          return;
        }
        const opts = Object.assign({update: false}, options);
        delete this.editMode;
        this.inputField.classList.remove('in-edit');
        if (opts.update) {
          this.update(opts);
        }
      }
    }
  
    // filter out the config options inapproprite to pass to Datepicker
    function filterOptions(options) {
      const newOpts = Object.assign({}, options);
  
      delete newOpts.inputs;
      delete newOpts.allowOneSidedRange;
      delete newOpts.maxNumberOfDates; // to ensure each datepicker handles a single date
  
      return newOpts;
    }
  
    function setupDatepicker(rangepicker, changeDateListener, el, options) {
      registerListeners(rangepicker, [
        [el, 'changeDate', changeDateListener],
      ]);
      new Datepicker(el, options, rangepicker);
    }
  
    function onChangeDate(rangepicker, ev) {
      // to prevent both datepickers trigger the other side's update each other
      if (rangepicker._updating) {
        return;
      }
      rangepicker._updating = true;
  
      const target = ev.target;
      if (target.datepicker === undefined) {
        return;
      }
  
      const datepickers = rangepicker.datepickers;
      const setDateOptions = {render: false};
      const changedSide = rangepicker.inputs.indexOf(target);
      const otherSide = changedSide === 0 ? 1 : 0;
      const changedDate = datepickers[changedSide].dates[0];
      const otherDate = datepickers[otherSide].dates[0];
  
      if (changedDate !== undefined && otherDate !== undefined) {
        // if the start of the range > the end, swap them
        if (changedSide === 0 && changedDate > otherDate) {
          datepickers[0].setDate(otherDate, setDateOptions);
          datepickers[1].setDate(changedDate, setDateOptions);
        } else if (changedSide === 1 && changedDate < otherDate) {
          datepickers[0].setDate(changedDate, setDateOptions);
          datepickers[1].setDate(otherDate, setDateOptions);
        }
      } else if (!rangepicker.allowOneSidedRange) {
        // to prevent the range from becoming one-sided, copy changed side's
        // selection (no matter if it's empty) to the other side
        if (changedDate !== undefined || otherDate !== undefined) {
          setDateOptions.clear = true;
          datepickers[otherSide].setDate(datepickers[changedSide].dates, setDateOptions);
        }
      }
      datepickers[0].picker.update().render();
      datepickers[1].picker.update().render();
      delete rangepicker._updating;
    }
  
    /**
     * Class representing a date range picker
     */
    class DateRangePicker  {
      /**
       * Create a date range picker
       * @param  {Element} element - element to bind a date range picker
       * @param  {Object} [options] - config options
       */
      constructor(element, options = {}) {
        const inputs = Array.isArray(options.inputs)
          ? options.inputs
          : Array.from(element.querySelectorAll('input'));
        if (inputs.length < 2) {
          return;
        }
  
        element.rangepicker = this;
        this.element = element;
        this.inputs = inputs.slice(0, 2);
        this.allowOneSidedRange = !!options.allowOneSidedRange;
  
        const changeDateListener = onChangeDate.bind(null, this);
        const cleanOptions = filterOptions(options);
        // in order for initial date setup to work right when pcicLvel > 0,
        // let Datepicker constructor add the instance to the rangepicker
        const datepickers = [];
        Object.defineProperty(this, 'datepickers', {
          get() {
            return datepickers;
          },
        });
        setupDatepicker(this, changeDateListener, this.inputs[0], cleanOptions);
        setupDatepicker(this, changeDateListener, this.inputs[1], cleanOptions);
        Object.freeze(datepickers);
        // normalize the range if inital dates are given
        if (datepickers[0].dates.length > 0) {
          onChangeDate(this, {target: this.inputs[0]});
        } else if (datepickers[1].dates.length > 0) {
          onChangeDate(this, {target: this.inputs[1]});
        }
      }
  
      /**
       * @type {Array} - selected date of the linked date pickers
       */
      get dates() {
        return this.datepickers.length === 2
          ? [
              this.datepickers[0].dates[0],
              this.datepickers[1].dates[0],
            ]
          : undefined;
      }
  
      /**
       * Set new values to the config options
       * @param {Object} options - config options to update
       */
      setOptions(options) {
        this.allowOneSidedRange = !!options.allowOneSidedRange;
  
        const cleanOptions = filterOptions(options);
        this.datepickers[0].setOptions(cleanOptions);
        this.datepickers[1].setOptions(cleanOptions);
      }
  
      /**
       * Destroy the DateRangePicker instance
       * @return {DateRangePicker} - the instance destroyed
       */
      destroy() {
        this.datepickers[0].destroy();
        this.datepickers[1].destroy();
        unregisterListeners(this);
        delete this.element.rangepicker;
      }
  
      /**
       * Get the start and end dates of the date range
       *
       * The method returns Date objects by default. If format string is passed,
       * it returns date strings formatted in given format.
       * The result array always contains 2 items (start date/end date) and
       * undefined is used for unselected side. (e.g. If none is selected,
       * the result will be [undefined, undefined]. If only the end date is set
       * when allowOneSidedRange config option is true, [undefined, endDate] will
       * be returned.)
       *
       * @param  {String} [format] - Format string to stringify the dates
       * @return {Array} - Start and end dates
       */
      getDates(format = undefined) {
        const callback = format
          ? date => formatDate(date, format, this.datepickers[0].config.locale)
          : date => new Date(date);
  
        return this.dates.map(date => date === undefined ? date : callback(date));
      }
  
      /**
       * Set the start and end dates of the date range
       *
       * The method calls datepicker.setDate() internally using each of the
       * arguments in start→end order.
       *
       * When a clear: true option object is passed instead of a date, the method
       * clears the date.
       *
       * If an invalid date, the same date as the current one or an option object
       * without clear: true is passed, the method considers that argument as an
       * "ineffective" argument because calling datepicker.setDate() with those
       * values makes no changes to the date selection.
       *
       * When the allowOneSidedRange config option is false, passing {clear: true}
       * to clear the range works only when it is done to the last effective
       * argument (in other words, passed to rangeEnd or to rangeStart along with
       * ineffective rangeEnd). This is because when the date range is changed,
       * it gets normalized based on the last change at the end of the changing
       * process.
       *
       * @param {Date|Number|String|Object} rangeStart - Start date of the range
       * or {clear: true} to clear the date
       * @param {Date|Number|String|Object} rangeEnd - End date of the range
       * or {clear: true} to clear the date
       */
      setDates(rangeStart, rangeEnd) {
        const [datepicker0, datepicker1] = this.datepickers;
        const origDates = this.dates;
  
        // If range normalization runs on every change, we can't set a new range
        // that starts after the end of the current range correctly because the
        // normalization process swaps start↔︎end right after setting the new start
        // date. To prevent this, the normalization process needs to run once after
        // both of the new dates are set.
        this._updating = true;
        datepicker0.setDate(rangeStart);
        datepicker1.setDate(rangeEnd);
        delete this._updating;
  
        if (datepicker1.dates[0] !== origDates[1]) {
          onChangeDate(this, {target: this.inputs[1]});
        } else if (datepicker0.dates[0] !== origDates[0]) {
          onChangeDate(this, {target: this.inputs[0]});
        }
      }
    }
  
    window.Datepicker = Datepicker;
    window.DateRangePicker = DateRangePicker;
  
  }());

  
/**
 * Swiper 7.0.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 16, 2021
 */

 function isObject$1(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function extend$1(e={},t={}){Object.keys(t).forEach((s=>{void 0===e[s]?e[s]=t[s]:isObject$1(t[s])&&isObject$1(e[s])&&Object.keys(t[s]).length>0&&extend$1(e[s],t[s])}))}const ssrDocument={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function getDocument(){const e="undefined"!=typeof document?document:{};return extend$1(e,ssrDocument),e}const ssrWindow={document:ssrDocument,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function getWindow(){const e="undefined"!=typeof window?window:{};return extend$1(e,ssrWindow),e}function makeReactive(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}class Dom7 extends Array{constructor(e){super(...e||[]),makeReactive(this)}}function arrayFlat(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...arrayFlat(e)):t.push(e)})),t}function arrayFilter(e,t){return Array.prototype.filter.call(e,t)}function arrayUnique(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}function qsa(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}function $(e,t){const s=getWindow(),a=getDocument();let i=[];if(!t&&e instanceof Dom7)return e;if(!e)return new Dom7(i);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=a.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)i.push(t.childNodes[e])}else i=qsa(e.trim(),t||a)}else if(e.nodeType||e===s||e===a)i.push(e);else if(Array.isArray(e)){if(e instanceof Dom7)return e;i=e}return new Dom7(arrayUnique(i))}function addClass(...e){const t=arrayFlat(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this}function removeClass(...e){const t=arrayFlat(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this}function toggleClass(...e){const t=arrayFlat(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))}function hasClass(...e){const t=arrayFlat(e.map((e=>e.split(" "))));return arrayFilter(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0}function attr(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this}function removeAttr(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function transform(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function transition$1(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this}function on(...e){let[t,s,a,i]=e;function r(e){const t=e.target;if(!t)return;const i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),$(t).is(s))a.apply(t,i);else{const e=$(t).parents();for(let t=0;t<e.length;t+=1)$(e[t]).is(s)&&a.apply(e[t],i)}}function n(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),a.apply(this,t)}"function"==typeof e[1]&&([t,a,i]=e,s=void 0),i||(i=!1);const l=t.split(" ");let o;for(let e=0;e<this.length;e+=1){const t=this[e];if(s)for(o=0;o<l.length;o+=1){const e=l[o];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:a,proxyListener:r}),t.addEventListener(e,r,i)}else for(o=0;o<l.length;o+=1){const e=l[o];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:a,proxyListener:n}),t.addEventListener(e,n,i)}}return this}function off(...e){let[t,s,a,i]=e;"function"==typeof e[1]&&([t,a,i]=e,s=void 0),i||(i=!1);const r=t.split(" ");for(let e=0;e<r.length;e+=1){const t=r[e];for(let e=0;e<this.length;e+=1){const r=this[e];let n;if(!s&&r.dom7Listeners?n=r.dom7Listeners[t]:s&&r.dom7LiveListeners&&(n=r.dom7LiveListeners[t]),n&&n.length)for(let e=n.length-1;e>=0;e-=1){const s=n[e];a&&s.listener===a||a&&s.listener&&s.listener.dom7proxy&&s.listener.dom7proxy===a?(r.removeEventListener(t,s.proxyListener,i),n.splice(e,1)):a||(r.removeEventListener(t,s.proxyListener,i),n.splice(e,1))}}}return this}function trigger(...e){const t=getWindow(),s=e[0].split(" "),a=e[1];for(let i=0;i<s.length;i+=1){const r=s[i];for(let s=0;s<this.length;s+=1){const i=this[s];if(t.CustomEvent){const s=new t.CustomEvent(r,{detail:a,bubbles:!0,cancelable:!0});i.dom7EventData=e.filter(((e,t)=>t>0)),i.dispatchEvent(s),i.dom7EventData=[],delete i.dom7EventData}}}return this}function transitionEnd$1(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this}function outerWidth(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function outerHeight(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function offset(){if(this.length>0){const e=getWindow(),t=getDocument(),s=this[0],a=s.getBoundingClientRect(),i=t.body,r=s.clientTop||i.clientTop||0,n=s.clientLeft||i.clientLeft||0,l=s===e?e.scrollY:s.scrollTop,o=s===e?e.scrollX:s.scrollLeft;return{top:a.top+l-r,left:a.left+o-n}}return null}function styles(){const e=getWindow();return this[0]?e.getComputedStyle(this[0],null):{}}function css(e,t){const s=getWindow();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this}function each(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this}function filter(e){return $(arrayFilter(this,e))}function html(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function text(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function is(e){const t=getWindow(),s=getDocument(),a=this[0];let i,r;if(!a||void 0===e)return!1;if("string"==typeof e){if(a.matches)return a.matches(e);if(a.webkitMatchesSelector)return a.webkitMatchesSelector(e);if(a.msMatchesSelector)return a.msMatchesSelector(e);for(i=$(e),r=0;r<i.length;r+=1)if(i[r]===a)return!0;return!1}if(e===s)return a===s;if(e===t)return a===t;if(e.nodeType||e instanceof Dom7){for(i=e.nodeType?[e]:e,r=0;r<i.length;r+=1)if(i[r]===a)return!0;return!1}return!1}function index(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}}function eq(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return $([]);if(e<0){const s=t+e;return $(s<0?[]:[this[s]])}return $([this[e]])}function append(...e){let t;const s=getDocument();for(let a=0;a<e.length;a+=1){t=e[a];for(let e=0;e<this.length;e+=1)if("string"==typeof t){const a=s.createElement("div");for(a.innerHTML=t;a.firstChild;)this[e].appendChild(a.firstChild)}else if(t instanceof Dom7)for(let s=0;s<t.length;s+=1)this[e].appendChild(t[s]);else this[e].appendChild(t)}return this}function prepend(e){const t=getDocument();let s,a;for(s=0;s<this.length;s+=1)if("string"==typeof e){const i=t.createElement("div");for(i.innerHTML=e,a=i.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(i.childNodes[a],this[s].childNodes[0])}else if(e instanceof Dom7)for(a=0;a<e.length;a+=1)this[s].insertBefore(e[a],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this}function next(e){return this.length>0?e?this[0].nextElementSibling&&$(this[0].nextElementSibling).is(e)?$([this[0].nextElementSibling]):$([]):this[0].nextElementSibling?$([this[0].nextElementSibling]):$([]):$([])}function nextAll(e){const t=[];let s=this[0];if(!s)return $([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?$(a).is(e)&&t.push(a):t.push(a),s=a}return $(t)}function prev(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&$(t.previousElementSibling).is(e)?$([t.previousElementSibling]):$([]):t.previousElementSibling?$([t.previousElementSibling]):$([])}return $([])}function prevAll(e){const t=[];let s=this[0];if(!s)return $([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?$(a).is(e)&&t.push(a):t.push(a),s=a}return $(t)}function parent(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?$(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return $(t)}function parents(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?$(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return $(t)}function closest(e){let t=this;return void 0===e?$([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function find(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return $(t)}function children(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!$(a[s]).is(e)||t.push(a[s])}return $(t)}function remove(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}$.fn=Dom7.prototype;const Methods={addClass:addClass,removeClass:removeClass,hasClass:hasClass,toggleClass:toggleClass,attr:attr,removeAttr:removeAttr,transform:transform,transition:transition$1,on:on,off:off,trigger:trigger,transitionEnd:transitionEnd$1,outerWidth:outerWidth,outerHeight:outerHeight,styles:styles,offset:offset,css:css,each:each,html:html,text:text,is:is,index:index,eq:eq,append:append,prepend:prepend,next:next,nextAll:nextAll,prev:prev,prevAll:prevAll,parent:parent,parents:parents,closest:closest,find:find,children:children,filter:filter,remove:remove};function deleteProps(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function nextTick(e,t=0){return setTimeout(e,t)}function now(){return Date.now()}function getComputedStyle$1(e){const t=getWindow();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function getTranslate(e,t="x"){const s=getWindow();let a,i,r;const n=getComputedStyle$1(e);return s.WebKitCSSMatrix?(i=n.transform||n.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),r=new s.WebKitCSSMatrix("none"===i?"":i)):(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=r.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?r.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?r.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function isObject(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function isNode(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function extend(...e){const t=Object(e[0]),s=["__proto__","constructor","prototype"];for(let a=1;a<e.length;a+=1){const i=e[a];if(null!=i&&!isNode(i)){const e=Object.keys(Object(i)).filter((e=>s.indexOf(e)<0));for(let s=0,a=e.length;s<a;s+=1){const a=e[s],r=Object.getOwnPropertyDescriptor(i,a);void 0!==r&&r.enumerable&&(isObject(t[a])&&isObject(i[a])?i[a].__swiper__?t[a]=i[a]:extend(t[a],i[a]):!isObject(t[a])&&isObject(i[a])?(t[a]={},i[a].__swiper__?t[a]=i[a]:extend(t[a],i[a])):t[a]=i[a])}}}return t}function setCSSProperty(e,t,s){e.style.setProperty(t,s)}function animateCSSModeScroll({swiper:e,targetPosition:t,side:s}){const a=getWindow(),i=-e.translate;let r,n=null;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const o=t>i?"next":"prev",d=(e,t)=>"next"===o&&e>=t||"prev"===o&&e<=t,c=()=>{r=(new Date).getTime(),null===n&&(n=r);const o=Math.max(Math.min((r-n)/l,1),0),p=.5-Math.cos(o*Math.PI)/2;let u=i+p*(t-i);if(d(u,t)&&(u=t),e.wrapperEl.scrollTo({[s]:u}),d(u,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:u})})),void a.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=a.requestAnimationFrame(c)};c()}let support,deviceCached,browser;function calcSupport(){const e=getWindow(),t=getDocument();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}function getSupport(){return support||(support=calcSupport()),support}function calcDevice({userAgent:e}={}){const t=getSupport(),s=getWindow(),a=s.navigator.platform,i=e||s.navigator.userAgent,r={ios:!1,android:!1},n=s.screen.width,l=s.screen.height,o=i.match(/(Android);?[\s\/]+([\d.]+)?/);let d=i.match(/(iPad).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),u="Win32"===a;let h="MacIntel"===a;return!d&&h&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${n}x${l}`)>=0&&(d=i.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),h=!1),o&&!u&&(r.os="android",r.android=!0),(d||p||c)&&(r.os="ios",r.ios=!0),r}function getDevice(e={}){return deviceCached||(deviceCached=calcDevice(e)),deviceCached}function calcBrowser(){const e=getWindow();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function getBrowser(){return browser||(browser=calcBrowser()),browser}function Resize({swiper:e,on:t,emit:s}){const a=getWindow();let i=null;const r=()=>{e&&!e.destroyed&&e.initialized&&(s("beforeResize"),s("resize"))},n=()=>{e&&!e.destroyed&&e.initialized&&s("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==a.ResizeObserver?e&&!e.destroyed&&e.initialized&&(i=new ResizeObserver((t=>{const{width:s,height:a}=e;let i=s,n=a;t.forEach((({contentBoxSize:t,contentRect:s,target:a})=>{a&&a!==e.el||(i=s?s.width:(t[0]||t).inlineSize,n=s?s.height:(t[0]||t).blockSize)})),i===s&&n===a||r()})),i.observe(e.el)):(a.addEventListener("resize",r),a.addEventListener("orientationchange",n))})),t("destroy",(()=>{i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null),a.removeEventListener("resize",r),a.removeEventListener("orientationchange",n)}))}function Observer({swiper:e,extendParams:t,on:s,emit:a}){const i=[],r=getWindow(),n=(e,t={})=>{const s=new(r.MutationObserver||r.WebkitMutationObserver)((e=>{if(1===e.length)return void a("observerUpdate",e[0]);const t=function(){a("observerUpdate",e[0])};r.requestAnimationFrame?r.requestAnimationFrame(t):r.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.push(s)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=e.$el.parents();for(let e=0;e<t.length;e+=1)n(t[e])}n(e.$el[0],{childList:e.params.observeSlideChildren}),n(e.$wrapperEl[0],{attributes:!1})}})),s("destroy",(()=>{i.forEach((e=>{e.disconnect()})),i.splice(0,i.length)}))}Object.keys(Methods).forEach((e=>{Object.defineProperty($.fn,e,{value:Methods[e],writable:!0})}));var eventsEmitter={on(e,t,s){const a=this;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if("function"!=typeof t)return a;function i(...s){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(a,s)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(...e){const t=this;if(!t.eventsListeners)return t;let s,a,i;"string"==typeof e[0]||Array.isArray(e[0])?(s=e[0],a=e.slice(1,e.length),i=t):(s=e[0].events,a=e[0].data,i=e[0].context||t),a.unshift(i);return(Array.isArray(s)?s:s.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(i,[e,...a])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(i,a)}))})),t}};function updateSize(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))}function updateSlides(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const v=e.snapGrid.length,w=e.slidesGrid.length;let b=a.spaceBetween,x=-f,y=0,E=0;if(void 0===r)return;"string"==typeof b&&b.indexOf("%")>=0&&(b=parseFloat(b.replace("%",""))/100*r),e.virtualSize=-b,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(setCSSProperty(e.wrapperEl,"--swiper-centered-offset-before",""),setCSSProperty(e.wrapperEl,"--swiper-centered-offset-after",""));const $=a.grid&&a.grid.rows>1&&e.grid;let T;$&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){T=0;const n=c.eq(i);if($&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)T=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)T=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];T=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&(T=Math.floor(T))}else T=(r-(a.slidesPerView-1)*b)/a.slidesPerView,a.roundLengths&&(T=Math.floor(T)),c[i]&&(c[i].style[t("width")]=`${T}px`);c[i]&&(c[i].swiperSlideSize=T),m.push(T),a.centeredSlides?(x=x+T/2+y/2+b,0===y&&0!==i&&(x=x-r/2-b),0===i&&(x=x-r/2-b),Math.abs(x)<.001&&(x=0),a.roundLengths&&(x=Math.floor(x)),E%a.slidesPerGroup==0&&u.push(x),h.push(x)):(a.roundLengths&&(x=Math.floor(x)),(E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup==0&&u.push(x),h.push(x),x=x+T+b),e.virtualSize+=T+b,y=T,E+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),$&&e.grid.updateWrapperSize(T,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${b}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){setCSSProperty(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),setCSSProperty(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}p!==d&&e.emit("slidesLengthChange"),u.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==w&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset()}function updateAutoHeight(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)t.visibleSlides.each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}r&&t.$wrapperEl.css("height",`${r}px`)}function updateSlidesOffset(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop}function updateSlidesProgress(e=this&&this.translate||0){const t=this,s=t.params,{slides:a,rtlTranslate:i}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let r=-e;i&&(r=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const n=a[e];let l=n.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(l-=a[0].swiperSlideOffset);const o=(r+(s.centeredSlides?t.minTranslate():0)-l)/(n.swiperSlideSize+s.spaceBetween),d=-(r-l),c=d+t.slidesSizesGrid[e];(d>=0&&d<t.size-1||c>1&&c<=t.size||d<=0&&c>=t.size)&&(t.visibleSlides.push(n),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),n.progress=i?-o:o}t.visibleSlides=$(t.visibleSlides)}function updateProgress(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)}function updateSlidesClasses(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()}function updateActiveIndex(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function updateClickedSlide(e){const t=this,s=t.params,a=$(e.target).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt($(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var update={updateSize:updateSize,updateSlides:updateSlides,updateAutoHeight:updateAutoHeight,updateSlidesOffset:updateSlidesOffset,updateSlidesProgress:updateSlidesProgress,updateProgress:updateProgress,updateSlidesClasses:updateSlidesClasses,updateActiveIndex:updateActiveIndex,updateClickedSlide:updateClickedSlide};function getSwiperTranslate(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=getTranslate(i[0],e);return s&&(r=-r),r||0}function setTranslate(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o=0,d=0;let c;s.isHorizontal()?o=a?-e:e:d=e,i.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-o:-d:i.virtualTranslate||r.transform(`translate3d(${o}px, ${d}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?o:d;const p=s.maxTranslate()-s.minTranslate();c=0===p?0:(e-s.minTranslate())/p,c!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)}function minTranslate(){return-this.snapGrid[0]}function maxTranslate(){return-this.snapGrid[this.snapGrid.length-1]}function translateTo(e=0,t=this.params.speed,s=!0,a=!0,i){const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return animateCSSModeScroll({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}var translate={getTranslate:getSwiperTranslate,setTranslate:setTranslate,minTranslate:minTranslate,maxTranslate:maxTranslate,translateTo:translateTo};function setTransition(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)}function transitionEmit({swiper:e,runCallbacks:t,direction:s,step:a}){const{activeIndex:i,previousIndex:r}=e;let n=s;if(n||(n=i>r?"next":i<r?"prev":"reset"),e.emit(`transition${a}`),t&&i!==r){if("reset"===n)return void e.emit(`slideResetTransition${a}`);e.emit(`slideChangeTransition${a}`),"next"===n?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`)}}function transitionStart(e=!0,t){const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),transitionEmit({swiper:s,runCallbacks:e,direction:t,step:"Start"}))}function transitionEnd(e=!0,t){const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),transitionEmit({swiper:s,runCallbacks:e,direction:t,step:"End"}))}var transition={setTransition:setTransition,transitionStart:transitionStart,transitionEnd:transitionEnd};function slideTo(e=0,t=this.params.speed,s=!0,a,i){if("number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1),(p||l.initialSlide||0)===(c||0)&&s&&r.emit("beforeSlideChangeStart");const v=-o[g];if(r.updateProgress(v),l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let w;if(w=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==w&&(r.transitionStart(s,w),r.transitionEnd(s,w)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none"),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType=""}))}else{if(!r.support.smoothScroll)return animateCSSModeScroll({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,w),r.transitionEnd(s,w)):(r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,w),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,w))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0}function slideToLoop(e=0,t=this.params.speed,s=!0,a){const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)}function slideNext(e=this.params.speed,t=!0,s){const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return a.slideTo(a.activeIndex+o,e,t,s)}function slidePrev(e=this.params.speed,t=!0,s){const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;return void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),a.slideTo(m,e,t,s)}function slideReset(e=this.params.speed,t=!0,s){return this.slideTo(this.activeIndex,e,t,s)}function slideToClosest(e=this.params.speed,t=!0,s,a=.5){const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)}function slideToClickedSlide(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt($(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),nextTick((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),nextTick((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}var slide={slideTo:slideTo,slideToLoop:slideToLoop,slideNext:slideNext,slidePrev:slidePrev,slideReset:slideReset,slideToClosest:slideToClosest,slideToClickedSlide:slideToClickedSlide};function loopCreate(){const e=this,t=getDocument(),{params:s,$wrapperEl:a}=e;a.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let i=a.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-i.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let i=0;i<e;i+=1){const e=$(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);a.append(e)}i=a.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=i.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>i.length&&(e.loopedSlides=i.length);const r=[],n=[];i.each(((t,s)=>{const a=$(t);s<e.loopedSlides&&n.push(t),s<i.length&&s>=i.length-e.loopedSlides&&r.push(t),a.attr("data-swiper-slide-index",s)}));for(let e=0;e<n.length;e+=1)a.append($(n[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=r.length-1;e>=0;e-=1)a.prepend($(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass))}function loopFix(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")}function loopDestroy(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}var loop={loopCreate:loopCreate,loopFix:loopFix,loopDestroy:loopDestroy};function setGrabCursor(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"-webkit-grabbing":"-webkit-grab",s.style.cursor=e?"-moz-grabbin":"-moz-grab",s.style.cursor=e?"grabbing":"grab"}function unsetGrabCursor(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}var grabCursor={setGrabCursor:setGrabCursor,unsetGrabCursor:unsetGrabCursor};function closestElement(e,t=this){return function t(s){return s&&s!==getDocument()&&s!==getWindow()?(s.assignedSlot&&(s=s.assignedSlot),s.closest(e)||t(s.getRootNode().host)):null}(t)}function onTouchStart(e){const t=this,s=getDocument(),a=getWindow(),i=t.touchEventsData,{params:r,touches:n,enabled:l}=t;if(!l)return;if(t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let o=e;o.originalEvent&&(o=o.originalEvent);let d=$(o.target);if("wrapper"===r.touchEventsTarget&&!d.closest(t.wrapperEl).length)return;if(i.isTouchEvent="touchstart"===o.type,!i.isTouchEvent&&"which"in o&&3===o.which)return;if(!i.isTouchEvent&&"button"in o&&o.button>0)return;if(i.isTouched&&i.isMoved)return;!!r.noSwipingClass&&""!==r.noSwipingClass&&o.target&&o.target.shadowRoot&&e.path&&e.path[0]&&(d=$(e.path[0]));const c=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!(!o.target||!o.target.shadowRoot);if(r.noSwiping&&(p?closestElement(c,o.target):d.closest(c)[0]))return void(t.allowClick=!0);if(r.swipeHandler&&!d.closest(r.swipeHandler)[0])return;n.currentX="touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,n.currentY="touchstart"===o.type?o.targetTouches[0].pageY:o.pageY;const u=n.currentX,h=n.currentY,m=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,f=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(m&&(u<=f||u>=a.innerWidth-f)){if("prevent"!==m)return;e.preventDefault()}if(Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),n.startX=u,n.startY=h,i.touchStartTime=now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(i.allowThresholdMove=!1),"touchstart"!==o.type){let e=!0;d.is(i.focusableElements)&&(e=!1),s.activeElement&&$(s.activeElement).is(i.focusableElements)&&s.activeElement!==d[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&r.touchStartPreventDefault;!r.touchStartForcePreventDefault&&!a||d[0].isContentEditable||o.preventDefault()}t.emit("touchStart",o)}function onTouchMove(e){const t=getDocument(),s=this,a=s.touchEventsData,{params:i,touches:r,rtlTranslate:n,enabled:l}=s;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),!a.isTouched)return void(a.startMoving&&a.isScrolling&&s.emit("touchMoveOpposite",o));if(a.isTouchEvent&&"touchmove"!==o.type)return;const d="touchmove"===o.type&&o.targetTouches&&(o.targetTouches[0]||o.changedTouches[0]),c="touchmove"===o.type?d.pageX:o.pageX,p="touchmove"===o.type?d.pageY:o.pageY;if(o.preventedByNestedSwiper)return r.startX=c,void(r.startY=p);if(!s.allowTouchMove)return s.allowClick=!1,void(a.isTouched&&(Object.assign(r,{startX:c,startY:p,currentX:c,currentY:p}),a.touchStartTime=now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(s.isVertical()){if(p<r.startY&&s.translate<=s.maxTranslate()||p>r.startY&&s.translate>=s.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(c<r.startX&&s.translate<=s.maxTranslate()||c>r.startX&&s.translate>=s.minTranslate())return;if(a.isTouchEvent&&t.activeElement&&o.target===t.activeElement&&$(o.target).is(a.focusableElements))return a.isMoved=!0,void(s.allowClick=!1);if(a.allowTouchCallbacks&&s.emit("touchMove",o),o.targetTouches&&o.targetTouches.length>1)return;r.currentX=c,r.currentY=p;const u=r.currentX-r.startX,h=r.currentY-r.startY;if(s.params.threshold&&Math.sqrt(u**2+h**2)<s.params.threshold)return;if(void 0===a.isScrolling){let e;s.isHorizontal()&&r.currentY===r.startY||s.isVertical()&&r.currentX===r.startX?a.isScrolling=!1:u*u+h*h>=25&&(e=180*Math.atan2(Math.abs(h),Math.abs(u))/Math.PI,a.isScrolling=s.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(a.isScrolling&&s.emit("touchMoveOpposite",o),void 0===a.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(a.startMoving=!0)),a.isScrolling)return void(a.isTouched=!1);if(!a.startMoving)return;s.allowClick=!1,!i.cssMode&&o.cancelable&&o.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&o.stopPropagation(),a.isMoved||(i.loop&&!i.cssMode&&s.loopFix(),a.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",o)),s.emit("sliderMove",o),a.isMoved=!0;let m=s.isHorizontal()?u:h;r.diff=m,m*=i.touchRatio,n&&(m=-m),s.swipeDirection=m>0?"prev":"next",a.currentTranslate=m+a.startTranslate;let f=!0,g=i.resistanceRatio;if(i.touchReleaseOnEdges&&(g=0),m>0&&a.currentTranslate>s.minTranslate()?(f=!1,i.resistance&&(a.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+a.startTranslate+m)**g)):m<0&&a.currentTranslate<s.maxTranslate()&&(f=!1,i.resistance&&(a.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-a.startTranslate-m)**g)),f&&(o.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),s.allowSlidePrev||s.allowSlideNext||(a.currentTranslate=a.startTranslate),i.threshold>0){if(!(Math.abs(m)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,a.currentTranslate=a.startTranslate,void(r.diff=s.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}i.followFinger&&!i.cssMode&&((i.freeMode&&i.freeMode.enabled&&s.freeMode||i.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&i.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(a.currentTranslate),s.setTranslate(a.currentTranslate))}function onTouchEnd(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=now(),c=d-s.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(o),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)),s.lastClickTime=now(),nextTick((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let p;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,p=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:p});let u=0,h=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?p>=n[e]&&p<n[e+t]&&(u=e,h=n[e+t]-n[e]):p>=n[e]&&(u=e,h=n[n.length-1]-n[n.length-2])}const m=(p-n[u])/h,f=u<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(m>=a.longSwipesRatio?t.slideTo(u+f):t.slideTo(u)),"prev"===t.swipeDirection&&(m>1-a.longSwipesRatio?t.slideTo(u+f):t.slideTo(u))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(u+f):t.slideTo(u):("next"===t.swipeDirection&&t.slideTo(u+f),"prev"===t.swipeDirection&&t.slideTo(u))}}function onResize(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function onClick(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function onScroll(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let dummyEventAttached=!1;function dummyEventListener(){}const events=(e,t)=>{const s=getDocument(),{params:a,touchEvents:i,el:r,wrapperEl:n,device:l,support:o}=e,d=!!a.nested,c="on"===t?"addEventListener":"removeEventListener",p=t;if(o.touch){const t=!("touchstart"!==i.start||!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};r[c](i.start,e.onTouchStart,t),r[c](i.move,e.onTouchMove,o.passiveListener?{passive:!1,capture:d}:d),r[c](i.end,e.onTouchEnd,t),i.cancel&&r[c](i.cancel,e.onTouchEnd,t)}else r[c](i.start,e.onTouchStart,!1),s[c](i.move,e.onTouchMove,d),s[c](i.end,e.onTouchEnd,!1);(a.preventClicks||a.preventClicksPropagation)&&r[c]("click",e.onClick,!0),a.cssMode&&n[c]("scroll",e.onScroll),a.updateOnWindowResize?e[p](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",onResize,!0):e[p]("observerUpdate",onResize,!0)};function attachEvents(){const e=this,t=getDocument(),{params:s,support:a}=e;e.onTouchStart=onTouchStart.bind(e),e.onTouchMove=onTouchMove.bind(e),e.onTouchEnd=onTouchEnd.bind(e),s.cssMode&&(e.onScroll=onScroll.bind(e)),e.onClick=onClick.bind(e),a.touch&&!dummyEventAttached&&(t.addEventListener("touchstart",dummyEventListener),dummyEventAttached=!0),events(e,"on")}function detachEvents(){events(this,"off")}var events$1={attachEvents:attachEvents,detachEvents:detachEvents};const isGridEnabled=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function setBreakpoint(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=isGridEnabled(e,i),c=isGridEnabled(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses());const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),extend(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)}function getBreakpoint(e,t="window",s){if(!e||"container"===t&&!s)return;let a=!1;const i=getWindow(),r="window"===t?i.innerHeight:s.clientHeight,n=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:r*t,point:e}}return{value:e,point:e}}));n.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<n.length;e+=1){const{point:r,value:l}=n[e];"window"===t?i.matchMedia(`(min-width: ${l}px)`).matches&&(a=r):l<=s.clientWidth&&(a=r)}return a||"max"}var breakpoints={setBreakpoint:setBreakpoint,getBreakpoint:getBreakpoint};function prepareClasses(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}function addClasses(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=prepareClasses(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()}function removeClasses(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}var classes={addClasses:addClasses,removeClasses:removeClasses};function loadImage(e,t,s,a,i,r){const n=getWindow();let l;function o(){r&&r()}$(e).parent("picture")[0]||e.complete&&i?o():t?(l=new n.Image,l.onload=o,l.onerror=o,a&&(l.sizes=a),s&&(l.srcset=s),t&&(l.src=t)):o()}function preloadImages(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}var images={loadImage:loadImage,preloadImages:preloadImages};function checkOverflow(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var checkOverflow$1={checkOverflow:checkOverflow},defaults={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function moduleExtendParams(e,t){return function(s={}){const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),extend(t,s)):extend(t,s)):extend(t,s)}}const prototypes={eventsEmitter:eventsEmitter,update:update,translate:translate,transition:transition,slide:slide,loop:loop,grabCursor:grabCursor,events:events$1,breakpoints:breakpoints,checkOverflow:checkOverflow$1,classes:classes,images:images},extendedDefaults={};class Swiper{constructor(...e){let t,s;if(1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?s=e[0]:[t,s]=e,s||(s={}),s=extend({},s),t&&!s.el&&(s.el=t),s.el&&$(s.el).length>1){const e=[];return $(s.el).each((t=>{const a=extend({},s,{el:t});e.push(new Swiper(a))})),e}const a=this;a.__swiper__=!0,a.support=getSupport(),a.device=getDevice({userAgent:s.userAgent}),a.browser=getBrowser(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],s.modules&&Array.isArray(s.modules)&&a.modules.push(...s.modules);const i={};a.modules.forEach((e=>{e({swiper:a,extendParams:moduleExtendParams(s,i),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}));const r=extend({},defaults,i);return a.params=extend({},r,extendedDefaults,s),a.originalParams=extend({},a.params),a.passedParams=extend({},s),a.params&&a.params.on&&Object.keys(a.params.on).forEach((e=>{a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),a.$=$,Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:$(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===a.params.direction,isVertical:()=>"vertical"===a.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return a.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},a.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},a.support.touch||!a.params.simulateTouch?a.touchEventsTouch:a.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}mount(e){const t=this;if(t.mounted)return!0;const s=$(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=$(e.shadowRoot.querySelector(a()));return t.children=e=>s.children(e),t}return s.children(a())})();if(0===i.length&&t.params.createElements){const e=getDocument().createElement("div");i=$(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{i.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:i,wrapperEl:i[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===i.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,deleteProps(s)),s.destroyed=!0),null}static extendDefaults(e){extend(extendedDefaults,e)}static get extendedDefaults(){return extendedDefaults}static get defaults(){return defaults}static installModule(e){Swiper.prototype.__modules__||(Swiper.prototype.__modules__=[]);const t=Swiper.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>Swiper.installModule(e))),Swiper):(Swiper.installModule(e),Swiper)}}function Virtual({swiper:e,extendParams:t,on:s}){function a(t,s){const a=e.params.virtual;if(a.cache&&e.virtual.cache[s])return e.virtual.cache[s];const i=a.renderSlide?$(a.renderSlide.call(e,t,s)):$(`<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",s),a.cache&&(e.virtual.cache[s]=i),i}function i(t){const{slidesPerView:s,slidesPerGroup:i,centeredSlides:r}=e.params,{addSlidesBefore:n,addSlidesAfter:l}=e.params.virtual,{from:o,to:d,slides:c,slidesGrid:p,offset:u}=e.virtual;e.updateActiveIndex();const h=e.activeIndex||0;let m,f,g;m=e.rtlTranslate?"right":e.isHorizontal()?"left":"top",r?(f=Math.floor(s/2)+i+l,g=Math.floor(s/2)+i+n):(f=s+(i-1)+l,g=i+n);const v=Math.max((h||0)-g,0),w=Math.min((h||0)+f,c.length-1),b=(e.slidesGrid[v]||0)-(e.slidesGrid[0]||0);function x(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load()}if(Object.assign(e.virtual,{from:v,to:w,offset:b,slidesGrid:e.slidesGrid}),o===v&&d===w&&!t)return e.slidesGrid!==p&&b!==u&&e.slides.css(m,`${b}px`),void e.updateProgress();if(e.params.virtual.renderExternal)return e.params.virtual.renderExternal.call(e,{offset:b,from:v,to:w,slides:function(){const e=[];for(let t=v;t<=w;t+=1)e.push(c[t]);return e}()}),void(e.params.virtual.renderExternalUpdate&&x());const y=[],E=[];if(t)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let t=o;t<=d;t+=1)(t<v||t>w)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();for(let e=0;e<c.length;e+=1)e>=v&&e<=w&&(void 0===d||t?E.push(e):(e>d&&E.push(e),e<o&&y.push(e)));E.forEach((t=>{e.$wrapperEl.append(a(c[t],t))})),y.sort(((e,t)=>t-e)).forEach((t=>{e.$wrapperEl.prepend(a(c[t],t))})),e.$wrapperEl.children(".swiper-slide").css(m,`${b}px`),x()}t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},s("beforeInit",(()=>{e.params.virtual.enabled&&(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||i())})),s("setTranslate",(()=>{e.params.virtual.enabled&&i()})),s("init update resize",(()=>{e.params.virtual.enabled&&e.params.cssMode&&setCSSProperty(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)})),Object.assign(e.virtual,{appendSlide:function(t){if("object"==typeof t&&"length"in t)for(let s=0;s<t.length;s+=1)t[s]&&e.virtual.slides.push(t[s]);else e.virtual.slides.push(t);i(!0)},prependSlide:function(t){const s=e.activeIndex;let a=s+1,r=1;if(Array.isArray(t)){for(let s=0;s<t.length;s+=1)t[s]&&e.virtual.slides.unshift(t[s]);a=s+t.length,r=t.length}else e.virtual.slides.unshift(t);if(e.params.virtual.cache){const t=e.virtual.cache,s={};Object.keys(t).forEach((e=>{const a=t[e],i=a.attr("data-swiper-slide-index");i&&a.attr("data-swiper-slide-index",parseInt(i,10)+1),s[parseInt(e,10)+r]=a})),e.virtual.cache=s}i(!0),e.slideTo(a,0)},removeSlide:function(t){if(null==t)return;let s=e.activeIndex;if(Array.isArray(t))for(let a=t.length-1;a>=0;a-=1)e.virtual.slides.splice(t[a],1),e.params.virtual.cache&&delete e.virtual.cache[t[a]],t[a]<s&&(s-=1),s=Math.max(s,0);else e.virtual.slides.splice(t,1),e.params.virtual.cache&&delete e.virtual.cache[t],t<s&&(s-=1),s=Math.max(s,0);i(!0),e.slideTo(s,0)},removeAllSlides:function(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),i(!0),e.slideTo(0,0)},update:i})}function Keyboard({swiper:e,extendParams:t,on:s,emit:a}){const i=getDocument(),r=getWindow();function n(t){if(!e.enabled)return;const{rtlTranslate:s}=e;let n=t;n.originalEvent&&(n=n.originalEvent);const l=n.keyCode||n.charCode,o=e.params.keyboard.pageUpDown,d=o&&33===l,c=o&&34===l,p=37===l,u=39===l,h=38===l,m=40===l;if(!e.allowSlideNext&&(e.isHorizontal()&&u||e.isVertical()&&m||c))return!1;if(!e.allowSlidePrev&&(e.isHorizontal()&&p||e.isVertical()&&h||d))return!1;if(!(n.shiftKey||n.altKey||n.ctrlKey||n.metaKey||i.activeElement&&i.activeElement.nodeName&&("input"===i.activeElement.nodeName.toLowerCase()||"textarea"===i.activeElement.nodeName.toLowerCase()))){if(e.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let t=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&0===e.$el.parents(`.${e.params.slideActiveClass}`).length)return;const a=e.$el,i=a[0].clientWidth,n=a[0].clientHeight,l=r.innerWidth,o=r.innerHeight,d=e.$el.offset();s&&(d.left-=e.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+n],[d.left+i,d.top+n]];for(let e=0;e<c.length;e+=1){const s=c[e];if(s[0]>=0&&s[0]<=l&&s[1]>=0&&s[1]<=o){if(0===s[0]&&0===s[1])continue;t=!0}}if(!t)return}e.isHorizontal()?((d||c||p||u)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&e.slideNext(),((d||p)&&!s||(c||u)&&s)&&e.slidePrev()):((d||c||h||m)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),(c||m)&&e.slideNext(),(d||h)&&e.slidePrev()),a("keyPress",l)}}function l(){e.keyboard.enabled||($(i).on("keydown",n),e.keyboard.enabled=!0)}function o(){e.keyboard.enabled&&($(i).off("keydown",n),e.keyboard.enabled=!1)}e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),s("init",(()=>{e.params.keyboard.enabled&&l()})),s("destroy",(()=>{e.keyboard.enabled&&o()})),Object.assign(e.keyboard,{enable:l,disable:o})}function Mousewheel({swiper:e,extendParams:t,on:s,emit:a}){const i=getWindow();let r;t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let n,l=now();const o=[];function d(){e.enabled&&(e.mouseEntered=!0)}function c(){e.enabled&&(e.mouseEntered=!1)}function p(t){return!(e.params.mousewheel.thresholdDelta&&t.delta<e.params.mousewheel.thresholdDelta)&&(!(e.params.mousewheel.thresholdTime&&now()-l<e.params.mousewheel.thresholdTime)&&(t.delta>=6&&now()-l<60||(t.direction<0?e.isEnd&&!e.params.loop||e.animating||(e.slideNext(),a("scroll",t.raw)):e.isBeginning&&!e.params.loop||e.animating||(e.slidePrev(),a("scroll",t.raw)),l=(new i.Date).getTime(),!1)))}function u(t){let s=t,i=!0;if(!e.enabled)return;const l=e.params.mousewheel;e.params.cssMode&&s.preventDefault();let d=e.$el;if("container"!==e.params.mousewheel.eventsTarget&&(d=$(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!d[0].contains(s.target)&&!l.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const u=e.rtlTranslate?-1:1,h=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(l.forceToAxis)if(e.isHorizontal()){if(!(Math.abs(h.pixelX)>Math.abs(h.pixelY)))return!0;c=-h.pixelX*u}else{if(!(Math.abs(h.pixelY)>Math.abs(h.pixelX)))return!0;c=-h.pixelY}else c=Math.abs(h.pixelX)>Math.abs(h.pixelY)?-h.pixelX*u:-h.pixelY;if(0===c)return!0;l.invert&&(c=-c);let m=e.getTranslate()+c*l.sensitivity;if(m>=e.minTranslate()&&(m=e.minTranslate()),m<=e.maxTranslate()&&(m=e.maxTranslate()),i=!!e.params.loop||!(m===e.minTranslate()||m===e.maxTranslate()),i&&e.params.nested&&s.stopPropagation(),e.params.freeMode&&e.params.freeMode.enabled){const t={time:now(),delta:Math.abs(c),direction:Math.sign(c)},i=n&&t.time<n.time+500&&t.delta<=n.delta&&t.direction===n.direction;if(!i){n=void 0,e.params.loop&&e.loopFix();let d=e.getTranslate()+c*l.sensitivity;const p=e.isBeginning,u=e.isEnd;if(d>=e.minTranslate()&&(d=e.minTranslate()),d<=e.maxTranslate()&&(d=e.maxTranslate()),e.setTransition(0),e.setTranslate(d),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!p&&e.isBeginning||!u&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(r),r=void 0,o.length>=15&&o.shift();const s=o.length?o[o.length-1]:void 0,a=o[0];if(o.push(t),s&&(t.delta>s.delta||t.direction!==s.direction))o.splice(0);else if(o.length>=15&&t.time-a.time<500&&a.delta-t.delta>=1&&t.delta<=6){const s=c>0?.8:.2;n=t,o.splice(0),r=nextTick((()=>{e.slideToClosest(e.params.speed,!0,void 0,s)}),0)}r||(r=nextTick((()=>{n=t,o.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)}),500))}if(i||a("scroll",s),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),d===e.minTranslate()||d===e.maxTranslate())return!0}}else{const s={time:now(),delta:Math.abs(c),direction:Math.sign(c),raw:t};o.length>=2&&o.shift();const a=o.length?o[o.length-1]:void 0;if(o.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&p(s):p(s),function(t){const s=e.params.mousewheel;if(t.direction<0){if(e.isEnd&&!e.params.loop&&s.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function h(t){let s=e.$el;"container"!==e.params.mousewheel.eventsTarget&&(s=$(e.params.mousewheel.eventsTarget)),s[t]("mouseenter",d),s[t]("mouseleave",c),s[t]("wheel",u)}function m(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",u),!0):!e.mousewheel.enabled&&(h("on"),e.mousewheel.enabled=!0,!0)}function f(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,u),!0):!!e.mousewheel.enabled&&(h("off"),e.mousewheel.enabled=!1,!0)}s("init",(()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&f(),e.params.mousewheel.enabled&&m()})),s("destroy",(()=>{e.params.cssMode&&m(),e.mousewheel.enabled&&f()})),Object.assign(e.mousewheel,{enable:m,disable:f})}function createElementIfNotDefined(e,t,s,a){const i=getDocument();return e.params.createElements&&Object.keys(a).forEach((r=>{if(!s[r]&&!0===s.auto){let n=e.$el.children(`.${a[r]}`)[0];n||(n=i.createElement("div"),n.className=a[r],e.$el.append(n)),s[r]=n,t[r]=n}})),s}function Navigation({swiper:e,extendParams:t,on:s,emit:a}){function i(t){let s;return t&&(s=$(t),e.params.uniqueNavElements&&"string"==typeof t&&s.length>1&&1===e.$el.find(t).length&&(s=e.$el.find(t))),s}function r(t,s){const a=e.params.navigation;t&&t.length>0&&(t[s?"addClass":"removeClass"](a.disabledClass),t[0]&&"BUTTON"===t[0].tagName&&(t[0].disabled=s),e.params.watchOverflow&&e.enabled&&t[e.isLocked?"addClass":"removeClass"](a.lockClass))}function n(){if(e.params.loop)return;const{$nextEl:t,$prevEl:s}=e.navigation;r(s,e.isBeginning),r(t,e.isEnd)}function l(t){t.preventDefault(),e.isBeginning&&!e.params.loop||e.slidePrev()}function o(t){t.preventDefault(),e.isEnd&&!e.params.loop||e.slideNext()}function d(){const t=e.params.navigation;if(e.params.navigation=createElementIfNotDefined(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;const s=i(t.nextEl),a=i(t.prevEl);s&&s.length>0&&s.on("click",o),a&&a.length>0&&a.on("click",l),Object.assign(e.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),e.enabled||(s&&s.addClass(t.lockClass),a&&a.addClass(t.lockClass))}function c(){const{$nextEl:t,$prevEl:s}=e.navigation;t&&t.length&&(t.off("click",o),t.removeClass(e.params.navigation.disabledClass)),s&&s.length&&(s.off("click",l),s.removeClass(e.params.navigation.disabledClass))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},s("init",(()=>{d(),n()})),s("toEdge fromEdge lock unlock",(()=>{n()})),s("destroy",(()=>{c()})),s("enable disable",(()=>{const{$nextEl:t,$prevEl:s}=e.navigation;t&&t[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),s&&s[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)})),s("click",((t,s)=>{const{$nextEl:i,$prevEl:r}=e.navigation,n=s.target;if(e.params.navigation.hideOnClick&&!$(n).is(r)&&!$(n).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===n||e.pagination.el.contains(n)))return;let t;i?t=i.hasClass(e.params.navigation.hiddenClass):r&&(t=r.hasClass(e.params.navigation.hiddenClass)),a(!0===t?"navigationShow":"navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),r&&r.toggleClass(e.params.navigation.hiddenClass)}})),Object.assign(e.navigation,{update:n,init:d,destroy:c})}function classesToSelector(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function Pagination({swiper:e,extendParams:t,on:s,emit:a}){const i="swiper-pagination";let r;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`}}),e.pagination={el:null,$el:null,bullets:[]};let n=0;function l(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||0===e.pagination.$el.length}function o(t,s){const{bulletActiveClass:a}=e.params.pagination;t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function d(){const t=e.rtl,s=e.params.pagination;if(l())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,d=e.pagination.$el;let c;const p=e.params.loop?Math.ceil((i-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(c=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),c>i-1-2*e.loopedSlides&&(c-=i-2*e.loopedSlides),c>p-1&&(c-=p),c<0&&"bullets"!==e.params.paginationType&&(c=p+c)):c=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const a=e.pagination.bullets;let i,l,p;if(s.dynamicBullets&&(r=a.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),d.css(e.isHorizontal()?"width":"height",r*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==e.previousIndex&&(n+=c-e.previousIndex,n>s.dynamicMainBullets-1?n=s.dynamicMainBullets-1:n<0&&(n=0)),i=c-n,l=i+(Math.min(a.length,s.dynamicMainBullets)-1),p=(l+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),d.length>1)a.each((e=>{const t=$(e),a=t.index();a===c&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=l&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&o(t,"prev"),a===l&&o(t,"next"))}));else{const t=a.eq(c),r=t.index();if(t.addClass(s.bulletActiveClass),s.dynamicBullets){const t=a.eq(i),n=a.eq(l);for(let e=i;e<=l;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(e.params.loop)if(r>=a.length-s.dynamicMainBullets){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else o(t,"prev"),o(n,"next");else o(t,"prev"),o(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),n=(r*i-r)/2-p*r,l=t?"right":"left";a.css(e.isHorizontal()?l:"top",`${n}px`)}}if("fraction"===s.type&&(d.find(classesToSelector(s.currentClass)).text(s.formatFractionCurrent(c+1)),d.find(classesToSelector(s.totalClass)).text(s.formatFractionTotal(p))),"progressbar"===s.type){let t;t=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const a=(c+1)/p;let i=1,r=1;"horizontal"===t?i=a:r=a,d.find(classesToSelector(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(d.html(s.renderCustom(e,c+1,p)),a("paginationRender",d[0])):a("paginationUpdate",d[0]),e.params.watchOverflow&&e.enabled&&d[e.isLocked?"addClass":"removeClass"](s.lockClass)}function c(){const t=e.params.pagination;if(l())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el;let r="";if("bullets"===t.type){let a=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&a>s&&(a=s);for(let s=0;s<a;s+=1)t.renderBullet?r+=t.renderBullet.call(e,s,t.bulletClass):r+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;i.html(r),e.pagination.bullets=i.find(classesToSelector(t.bulletClass))}"fraction"===t.type&&(r=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,i.html(r)),"progressbar"===t.type&&(r=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`,i.html(r)),"custom"!==t.type&&a("paginationRender",e.pagination.$el[0])}function p(){e.params.pagination=createElementIfNotDefined(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let s=$(t.el);0!==s.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&s.length>1&&(s=e.$el.find(t.el),s.length>1&&(s=s.filter((t=>$(t).parents(".swiper")[0]===e.el)))),"bullets"===t.type&&t.clickable&&s.addClass(t.clickableClass),s.addClass(t.modifierClass+t.type),s.addClass(t.modifierClass+e.params.direction),"bullets"===t.type&&t.dynamicBullets&&(s.addClass(`${t.modifierClass}${t.type}-dynamic`),n=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&s.addClass(t.progressbarOppositeClass),t.clickable&&s.on("click",classesToSelector(t.bulletClass),(function(t){t.preventDefault();let s=$(this).index()*e.params.slidesPerGroup;e.params.loop&&(s+=e.loopedSlides),e.slideTo(s)})),Object.assign(e.pagination,{$el:s,el:s[0]}),e.enabled||s.addClass(t.lockClass))}function u(){const t=e.params.pagination;if(l())return;const s=e.pagination.$el;s.removeClass(t.hiddenClass),s.removeClass(t.modifierClass+t.type),s.removeClass(t.modifierClass+e.params.direction),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&s.off("click",classesToSelector(t.bulletClass))}s("init",(()=>{p(),c(),d()})),s("activeIndexChange",(()=>{(e.params.loop||void 0===e.snapIndex)&&d()})),s("snapIndexChange",(()=>{e.params.loop||d()})),s("slidesLengthChange",(()=>{e.params.loop&&(c(),d())})),s("snapGridLengthChange",(()=>{e.params.loop||(c(),d())})),s("destroy",(()=>{u()})),s("enable disable",(()=>{const{$el:t}=e.pagination;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)})),s("lock unlock",(()=>{d()})),s("click",((t,s)=>{const i=s.target,{$el:r}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r.length>0&&!$(i).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const t=r.hasClass(e.params.pagination.hiddenClass);a(!0===t?"paginationShow":"paginationHide"),r.toggleClass(e.params.pagination.hiddenClass)}})),Object.assign(e.pagination,{render:c,update:d,init:p,destroy:u})}function Scrollbar({swiper:e,extendParams:t,on:s,emit:a}){const i=getDocument();let r,n,l,o,d=!1,c=null,p=null;function u(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t,rtlTranslate:s,progress:a}=e,{$dragEl:i,$el:r}=t,o=e.params.scrollbar;let d=n,p=(l-n)*a;s?(p=-p,p>0?(d=n-p,p=0):-p+n>l&&(d=l+p)):p<0?(d=n+p,p=0):p+n>l&&(d=l-p),e.isHorizontal()?(i.transform(`translate3d(${p}px, 0, 0)`),i[0].style.width=`${d}px`):(i.transform(`translate3d(0px, ${p}px, 0)`),i[0].style.height=`${d}px`),o.hide&&(clearTimeout(c),r[0].style.opacity=1,c=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function h(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t}=e,{$dragEl:s,$el:a}=t;s[0].style.width="",s[0].style.height="",l=e.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,o=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),n="auto"===e.params.scrollbar.dragSize?l*o:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?s[0].style.width=`${n}px`:s[0].style.height=`${n}px`,a[0].style.display=o>=1?"none":"",e.params.scrollbar.hide&&(a[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&t.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function m(t){return e.isHorizontal()?"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientX:t.clientX:"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientY:t.clientY}function f(t){const{scrollbar:s,rtlTranslate:a}=e,{$el:i}=s;let o;o=(m(t)-i.offset()[e.isHorizontal()?"left":"top"]-(null!==r?r:n/2))/(l-n),o=Math.max(Math.min(o,1),0),a&&(o=1-o);const d=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*o;e.updateProgress(d),e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}function g(t){const s=e.params.scrollbar,{scrollbar:i,$wrapperEl:n}=e,{$el:l,$dragEl:o}=i;d=!0,r=t.target===o[0]||t.target===o?m(t)-t.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,t.preventDefault(),t.stopPropagation(),n.transition(100),o.transition(100),f(t),clearTimeout(p),l.transition(0),s.hide&&l.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),a("scrollbarDragStart",t)}function v(t){const{scrollbar:s,$wrapperEl:i}=e,{$el:r,$dragEl:n}=s;d&&(t.preventDefault?t.preventDefault():t.returnValue=!1,f(t),i.transition(0),r.transition(0),n.transition(0),a("scrollbarDragMove",t))}function w(t){const s=e.params.scrollbar,{scrollbar:i,$wrapperEl:r}=e,{$el:n}=i;d&&(d=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),r.transition("")),s.hide&&(clearTimeout(p),p=nextTick((()=>{n.css("opacity",0),n.transition(400)}),1e3)),a("scrollbarDragEnd",t),s.snapOnRelease&&e.slideToClosest())}function b(t){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:r,params:n,support:l}=e,o=s.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},c=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};if(!o)return;const p="on"===t?"addEventListener":"removeEventListener";l.touch?(o[p](a.start,g,d),o[p](a.move,v,d),o[p](a.end,w,c)):(o[p](r.start,g,d),i[p](r.move,v,d),i[p](r.end,w,c))}function x(){const{scrollbar:t,$el:s}=e;e.params.scrollbar=createElementIfNotDefined(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const a=e.params.scrollbar;if(!a.el)return;let i=$(a.el);e.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el));let r=i.find(`.${e.params.scrollbar.dragClass}`);0===r.length&&(r=$(`<div class="${e.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(t,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&e.params.scrollbar.el&&b("on"),i&&i[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function y(){e.params.scrollbar.el&&b("off")}t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},s("init",(()=>{x(),h(),u()})),s("update resize observerUpdate lock unlock",(()=>{h()})),s("setTranslate",(()=>{u()})),s("setTransition",((t,s)=>{!function(t){e.params.scrollbar.el&&e.scrollbar.el&&e.scrollbar.$dragEl.transition(t)}(s)})),s("enable disable",(()=>{const{$el:t}=e.scrollbar;t&&t[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)})),s("destroy",(()=>{y()})),Object.assign(e.scrollbar,{updateSize:h,setTranslate:u,init:x,destroy:y})}function Parallax({swiper:e,extendParams:t,on:s}){t({parallax:{enabled:!1}});const a=(t,s)=>{const{rtl:a}=e,i=$(t),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const d=i.attr("data-swiper-parallax-scale"),c=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):e.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=c){const e=c-(c-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==d)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=d-(d-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},i=()=>{const{$el:t,slides:s,progress:i,snapGrid:r}=e;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{a(e,i)})),s.each(((t,s)=>{let n=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(s/2)-i*(r.length-1)),n=Math.min(Math.max(n,-1),1),$(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{a(e,n)}))}))};s("beforeInit",(()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)})),s("init",(()=>{e.params.parallax.enabled&&i()})),s("setTranslate",(()=>{e.params.parallax.enabled&&i()})),s("setTransition",((t,s)=>{e.params.parallax.enabled&&((t=e.params.speed)=>{const{$el:s}=e;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{const s=$(e);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||t;0===t&&(a=0),s.transition(a)}))})(s)}))}function Zoom({swiper:e,extendParams:t,on:s,emit:a}){const i=getWindow();t({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let r,n,l,o=1,d=!1;const c={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},p={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},u={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let h=1;function m(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function f(t){const s=e.support,a=e.params.zoom;if(n=!1,l=!1,!s.gestures){if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;n=!0,c.scaleStart=m(t)}c.$slideEl&&c.$slideEl.length||(c.$slideEl=$(t.target).closest(`.${e.params.slideClass}`),0===c.$slideEl.length&&(c.$slideEl=e.slides.eq(e.activeIndex)),c.$imageEl=c.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),c.$imageWrapEl=c.$imageEl.parent(`.${a.containerClass}`),c.maxRatio=c.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==c.$imageWrapEl.length)?(c.$imageEl&&c.$imageEl.transition(0),d=!0):c.$imageEl=void 0}function g(t){const s=e.support,a=e.params.zoom,i=e.zoom;if(!s.gestures){if("touchmove"!==t.type||"touchmove"===t.type&&t.targetTouches.length<2)return;l=!0,c.scaleMove=m(t)}c.$imageEl&&0!==c.$imageEl.length?(s.gestures?i.scale=t.scale*o:i.scale=c.scaleMove/c.scaleStart*o,i.scale>c.maxRatio&&(i.scale=c.maxRatio-1+(i.scale-c.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),c.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===t.type&&f(t)}function v(t){const s=e.device,a=e.support,i=e.params.zoom,r=e.zoom;if(!a.gestures){if(!n||!l)return;if("touchend"!==t.type||"touchend"===t.type&&t.changedTouches.length<2&&!s.android)return;n=!1,l=!1}c.$imageEl&&0!==c.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,c.maxRatio),i.minRatio),c.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),o=r.scale,d=!1,1===r.scale&&(c.$slideEl=void 0))}function w(t){const s=e.zoom;if(!c.$imageEl||0===c.$imageEl.length)return;if(e.allowClick=!1,!p.isTouched||!c.$slideEl)return;p.isMoved||(p.width=c.$imageEl[0].offsetWidth,p.height=c.$imageEl[0].offsetHeight,p.startX=getTranslate(c.$imageWrapEl[0],"x")||0,p.startY=getTranslate(c.$imageWrapEl[0],"y")||0,c.slideWidth=c.$slideEl[0].offsetWidth,c.slideHeight=c.$slideEl[0].offsetHeight,c.$imageWrapEl.transition(0));const a=p.width*s.scale,i=p.height*s.scale;if(!(a<c.slideWidth&&i<c.slideHeight)){if(p.minX=Math.min(c.slideWidth/2-a/2,0),p.maxX=-p.minX,p.minY=Math.min(c.slideHeight/2-i/2,0),p.maxY=-p.minY,p.touchesCurrent.x="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,p.touchesCurrent.y="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,!p.isMoved&&!d){if(e.isHorizontal()&&(Math.floor(p.minX)===Math.floor(p.startX)&&p.touchesCurrent.x<p.touchesStart.x||Math.floor(p.maxX)===Math.floor(p.startX)&&p.touchesCurrent.x>p.touchesStart.x))return void(p.isTouched=!1);if(!e.isHorizontal()&&(Math.floor(p.minY)===Math.floor(p.startY)&&p.touchesCurrent.y<p.touchesStart.y||Math.floor(p.maxY)===Math.floor(p.startY)&&p.touchesCurrent.y>p.touchesStart.y))return void(p.isTouched=!1)}t.cancelable&&t.preventDefault(),t.stopPropagation(),p.isMoved=!0,p.currentX=p.touchesCurrent.x-p.touchesStart.x+p.startX,p.currentY=p.touchesCurrent.y-p.touchesStart.y+p.startY,p.currentX<p.minX&&(p.currentX=p.minX+1-(p.minX-p.currentX+1)**.8),p.currentX>p.maxX&&(p.currentX=p.maxX-1+(p.currentX-p.maxX+1)**.8),p.currentY<p.minY&&(p.currentY=p.minY+1-(p.minY-p.currentY+1)**.8),p.currentY>p.maxY&&(p.currentY=p.maxY-1+(p.currentY-p.maxY+1)**.8),u.prevPositionX||(u.prevPositionX=p.touchesCurrent.x),u.prevPositionY||(u.prevPositionY=p.touchesCurrent.y),u.prevTime||(u.prevTime=Date.now()),u.x=(p.touchesCurrent.x-u.prevPositionX)/(Date.now()-u.prevTime)/2,u.y=(p.touchesCurrent.y-u.prevPositionY)/(Date.now()-u.prevTime)/2,Math.abs(p.touchesCurrent.x-u.prevPositionX)<2&&(u.x=0),Math.abs(p.touchesCurrent.y-u.prevPositionY)<2&&(u.y=0),u.prevPositionX=p.touchesCurrent.x,u.prevPositionY=p.touchesCurrent.y,u.prevTime=Date.now(),c.$imageWrapEl.transform(`translate3d(${p.currentX}px, ${p.currentY}px,0)`)}}function b(){const t=e.zoom;c.$slideEl&&e.previousIndex!==e.activeIndex&&(c.$imageEl&&c.$imageEl.transform("translate3d(0,0,0) scale(1)"),c.$imageWrapEl&&c.$imageWrapEl.transform("translate3d(0,0,0)"),t.scale=1,o=1,c.$slideEl=void 0,c.$imageEl=void 0,c.$imageWrapEl=void 0)}function x(t){const s=e.zoom,a=e.params.zoom;if(c.$slideEl||(t&&t.target&&(c.$slideEl=$(t.target).closest(`.${e.params.slideClass}`)),c.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?c.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):c.$slideEl=e.slides.eq(e.activeIndex)),c.$imageEl=c.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),c.$imageWrapEl=c.$imageEl.parent(`.${a.containerClass}`)),!c.$imageEl||0===c.$imageEl.length||!c.$imageWrapEl||0===c.$imageWrapEl.length)return;let r,n,l,d,u,h,m,f,g,v,w,b,x,y,E,T,S,C;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),c.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===p.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,n="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=p.touchesStart.x,n=p.touchesStart.y),s.scale=c.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,o=c.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,t?(S=c.$slideEl[0].offsetWidth,C=c.$slideEl[0].offsetHeight,l=c.$slideEl.offset().left+i.scrollX,d=c.$slideEl.offset().top+i.scrollY,u=l+S/2-r,h=d+C/2-n,g=c.$imageEl[0].offsetWidth,v=c.$imageEl[0].offsetHeight,w=g*s.scale,b=v*s.scale,x=Math.min(S/2-w/2,0),y=Math.min(C/2-b/2,0),E=-x,T=-y,m=u*s.scale,f=h*s.scale,m<x&&(m=x),m>E&&(m=E),f<y&&(f=y),f>T&&(f=T)):(m=0,f=0),c.$imageWrapEl.transition(300).transform(`translate3d(${m}px, ${f}px,0)`),c.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function y(){const t=e.zoom,s=e.params.zoom;c.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?c.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):c.$slideEl=e.slides.eq(e.activeIndex),c.$imageEl=c.$slideEl.find(`.${s.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),c.$imageWrapEl=c.$imageEl.parent(`.${s.containerClass}`)),c.$imageEl&&0!==c.$imageEl.length&&c.$imageWrapEl&&0!==c.$imageWrapEl.length&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),t.scale=1,o=1,c.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),c.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),c.$slideEl.removeClass(`${s.zoomedSlideClass}`),c.$slideEl=void 0)}function E(t){const s=e.zoom;s.scale&&1!==s.scale?y():x(t)}function T(){const t=e.support;return{passiveListener:!("touchstart"!==e.touchEvents.start||!t.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!t.passiveListener||{passive:!1,capture:!0}}}function S(){return`.${e.params.slideClass}`}function C(t){const{passiveListener:s}=T(),a=S();e.$wrapperEl[t]("gesturestart",a,f,s),e.$wrapperEl[t]("gesturechange",a,g,s),e.$wrapperEl[t]("gestureend",a,v,s)}function M(){r||(r=!0,C("on"))}function P(){r&&(r=!1,C("off"))}function k(){const t=e.zoom;if(t.enabled)return;t.enabled=!0;const s=e.support,{passiveListener:a,activeListenerWithCapture:i}=T(),r=S();s.gestures?(e.$wrapperEl.on(e.touchEvents.start,M,a),e.$wrapperEl.on(e.touchEvents.end,P,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,r,f,a),e.$wrapperEl.on(e.touchEvents.move,r,g,i),e.$wrapperEl.on(e.touchEvents.end,r,v,a),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,r,v,a)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,w,i)}function z(){const t=e.zoom;if(!t.enabled)return;const s=e.support;t.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=T(),r=S();s.gestures?(e.$wrapperEl.off(e.touchEvents.start,M,a),e.$wrapperEl.off(e.touchEvents.end,P,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,r,f,a),e.$wrapperEl.off(e.touchEvents.move,r,g,i),e.$wrapperEl.off(e.touchEvents.end,r,v,a),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,r,v,a)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,w,i)}Object.defineProperty(e.zoom,"scale",{get:()=>h,set(e){if(h!==e){const t=c.$imageEl?c.$imageEl[0]:void 0,s=c.$slideEl?c.$slideEl[0]:void 0;a("zoomChange",e,t,s)}h=e}}),s("init",(()=>{e.params.zoom.enabled&&k()})),s("destroy",(()=>{z()})),s("touchStart",((t,s)=>{e.zoom.enabled&&function(t){const s=e.device;c.$imageEl&&0!==c.$imageEl.length&&(p.isTouched||(s.android&&t.cancelable&&t.preventDefault(),p.isTouched=!0,p.touchesStart.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,p.touchesStart.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY))}(s)})),s("touchEnd",((t,s)=>{e.zoom.enabled&&function(){const t=e.zoom;if(!c.$imageEl||0===c.$imageEl.length)return;if(!p.isTouched||!p.isMoved)return p.isTouched=!1,void(p.isMoved=!1);p.isTouched=!1,p.isMoved=!1;let s=300,a=300;const i=u.x*s,r=p.currentX+i,n=u.y*a,l=p.currentY+n;0!==u.x&&(s=Math.abs((r-p.currentX)/u.x)),0!==u.y&&(a=Math.abs((l-p.currentY)/u.y));const o=Math.max(s,a);p.currentX=r,p.currentY=l;const d=p.width*t.scale,h=p.height*t.scale;p.minX=Math.min(c.slideWidth/2-d/2,0),p.maxX=-p.minX,p.minY=Math.min(c.slideHeight/2-h/2,0),p.maxY=-p.minY,p.currentX=Math.max(Math.min(p.currentX,p.maxX),p.minX),p.currentY=Math.max(Math.min(p.currentY,p.maxY),p.minY),c.$imageWrapEl.transition(o).transform(`translate3d(${p.currentX}px, ${p.currentY}px,0)`)}()})),s("doubleTap",((t,s)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&E(s)})),s("transitionEnd",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&b()})),s("slideChange",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&b()})),Object.assign(e.zoom,{enable:k,disable:z,in:x,out:y,toggle:E})}function Lazy({swiper:e,extendParams:t,on:s,emit:a}){t({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let i=!1,r=!1;function n(t,s=!0){const i=e.params.lazy;if(void 0===t)return;if(0===e.slides.length)return;const r=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`):e.slides.eq(t),l=r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);!r.hasClass(i.elementClass)||r.hasClass(i.loadedClass)||r.hasClass(i.loadingClass)||l.push(r[0]),0!==l.length&&l.each((t=>{const l=$(t);l.addClass(i.loadingClass);const o=l.attr("data-background"),d=l.attr("data-src"),c=l.attr("data-srcset"),p=l.attr("data-sizes"),u=l.parent("picture");e.loadImage(l[0],d||o,c,p,!1,(()=>{if(null!=e&&e&&(!e||e.params)&&!e.destroyed){if(o?(l.css("background-image",`url("${o}")`),l.removeAttr("data-background")):(c&&(l.attr("srcset",c),l.removeAttr("data-srcset")),p&&(l.attr("sizes",p),l.removeAttr("data-sizes")),u.length&&u.children("source").each((e=>{const t=$(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),d&&(l.attr("src",d),l.removeAttr("data-src"))),l.addClass(i.loadedClass).removeClass(i.loadingClass),r.find(`.${i.preloaderClass}`).remove(),e.params.loop&&s){const t=r.attr("data-swiper-slide-index");if(r.hasClass(e.params.slideDuplicateClass)){n(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(),!1)}else{n(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(),!1)}}a("lazyImageReady",r[0],l[0]),e.params.autoHeight&&e.updateAutoHeight()}})),a("lazyImageLoad",r[0],l[0])}))}function l(){const{$wrapperEl:t,params:s,slides:a,activeIndex:i}=e,l=e.virtual&&s.virtual.enabled,o=s.lazy;let d=s.slidesPerView;function c(e){if(l){if(t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length)return!0}else if(a[e])return!0;return!1}function p(e){return l?$(e).attr("data-swiper-slide-index"):$(e).index()}if("auto"===d&&(d=0),r||(r=!0),e.params.watchSlidesProgress)t.children(`.${s.slideVisibleClass}`).each((e=>{n(l?$(e).attr("data-swiper-slide-index"):$(e).index())}));else if(d>1)for(let e=i;e<i+d;e+=1)c(e)&&n(e);else n(i);if(o.loadPrevNext)if(d>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){const e=o.loadPrevNextAmount,t=d,s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+d;e<s;e+=1)c(e)&&n(e);for(let e=r;e<i;e+=1)c(e)&&n(e)}else{const e=t.children(`.${s.slideNextClass}`);e.length>0&&n(p(e));const a=t.children(`.${s.slidePrevClass}`);a.length>0&&n(p(a))}}function o(){const t=getWindow();if(!e||e.destroyed)return;const s=e.params.lazy.scrollingElement?$(e.params.lazy.scrollingElement):$(t),a=s[0]===t,r=a?t.innerWidth:s[0].offsetWidth,n=a?t.innerHeight:s[0].offsetHeight,d=e.$el.offset(),{rtlTranslate:c}=e;let p=!1;c&&(d.left-=e.$el[0].scrollLeft);const u=[[d.left,d.top],[d.left+e.width,d.top],[d.left,d.top+e.height],[d.left+e.width,d.top+e.height]];for(let e=0;e<u.length;e+=1){const t=u[e];if(t[0]>=0&&t[0]<=r&&t[1]>=0&&t[1]<=n){if(0===t[0]&&0===t[1])continue;p=!0}}const h=!("touchstart"!==e.touchEvents.start||!e.support.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};p?(l(),s.off("scroll",o,h)):i||(i=!0,s.on("scroll",o,h))}s("beforeInit",(()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)})),s("init",(()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?o():l())})),s("scroll",(()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&l()})),s("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?o():l())})),s("transitionStart",(()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!r)&&(e.params.lazy.checkInView?o():l())})),s("transitionEnd",(()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?o():l())})),s("slideChange",(()=>{const{lazy:t,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=e.params;t.enabled&&(s||a&&(i||0===r))&&l()})),Object.assign(e.lazy,{load:l,loadInSlide:n})}function Controller({swiper:e,extendParams:t,on:s}){function a(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function i(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0},s("beforeInit",(()=>{e.controller.control=e.params.controller.control})),s("update",(()=>{i()})),s("resize",(()=>{i()})),s("observerUpdate",(()=>{i()})),s("setTranslate",((t,s,a)=>{e.controller.control&&e.controller.setTranslate(s,a)})),s("setTransition",((t,s,a)=>{e.controller.control&&e.controller.setTransition(s,a)})),Object.assign(e.controller,{setTranslate:function(t,s){const i=e.controller.control;let r,n;const l=e.constructor;function o(t){const s=e.rtlTranslate?-e.translate:e.translate;"slide"===e.params.controller.by&&(!function(t){e.controller.spline||(e.controller.spline=e.params.loop?new a(e.slidesGrid,t.slidesGrid):new a(e.snapGrid,t.snapGrid))}(t),n=-e.controller.spline.interpolate(-s)),n&&"container"!==e.params.controller.by||(r=(t.maxTranslate()-t.minTranslate())/(e.maxTranslate()-e.minTranslate()),n=(s-e.minTranslate())*r+t.minTranslate()),e.params.controller.inverse&&(n=t.maxTranslate()-n),t.updateProgress(n),t.setTranslate(n,e),t.updateActiveIndex(),t.updateSlidesClasses()}if(Array.isArray(i))for(let e=0;e<i.length;e+=1)i[e]!==s&&i[e]instanceof l&&o(i[e]);else i instanceof l&&s!==i&&o(i)},setTransition:function(t,s){const a=e.constructor,i=e.controller.control;let r;function n(s){s.setTransition(t,e),0!==t&&(s.transitionStart(),s.params.autoHeight&&nextTick((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===e.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})}function A11y({swiper:e,extendParams:t,on:s}){t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group"}});let a=null;function i(e){const t=a;0!==t.length&&(t.html(""),t.html(e))}function r(e){e.attr("tabIndex","0")}function n(e){e.attr("tabIndex","-1")}function l(e,t){e.attr("role",t)}function o(e,t){e.attr("aria-roledescription",t)}function d(e,t){e.attr("aria-label",t)}function c(e){e.attr("aria-disabled",!0)}function p(e){e.attr("aria-disabled",!1)}function u(t){if(13!==t.keyCode&&32!==t.keyCode)return;const s=e.params.a11y,a=$(t.target);e.navigation&&e.navigation.$nextEl&&a.is(e.navigation.$nextEl)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?i(s.lastSlideMessage):i(s.nextSlideMessage)),e.navigation&&e.navigation.$prevEl&&a.is(e.navigation.$prevEl)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?i(s.firstSlideMessage):i(s.prevSlideMessage)),e.pagination&&a.is(classesToSelector(e.params.pagination.bulletClass))&&a[0].click()}function h(){if(e.params.loop||!e.navigation)return;const{$nextEl:t,$prevEl:s}=e.navigation;s&&s.length>0&&(e.isBeginning?(c(s),n(s)):(p(s),r(s))),t&&t.length>0&&(e.isEnd?(c(t),n(t)):(p(t),r(t)))}function m(){return e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length}const f=(e,t,s)=>{r(e),"BUTTON"!==e[0].tagName&&(l(e,"button"),e.on("keydown",u)),d(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)};function g(){const t=e.params.a11y;e.$el.append(a);const s=e.$el;t.containerRoleDescriptionMessage&&o(s,t.containerRoleDescriptionMessage),t.containerMessage&&d(s,t.containerMessage);const i=e.$wrapperEl,r=i.attr("id")||`swiper-wrapper-${function(e=16){return"x".repeat(e).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}(16)}`,n=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";var c;c=r,i.attr("id",c),function(e,t){e.attr("aria-live",t)}(i,n),t.itemRoleDescriptionMessage&&o($(e.slides),t.itemRoleDescriptionMessage),l($(e.slides),t.slideRole);const p=e.params.loop?e.slides.filter((t=>!t.classList.contains(e.params.slideDuplicateClass))).length:e.slides.length;let h,g;e.slides.each(((s,a)=>{const i=$(s),r=e.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):a;d(i,t.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,p))})),e.navigation&&e.navigation.$nextEl&&(h=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(g=e.navigation.$prevEl),h&&h.length&&f(h,r,t.nextSlideMessage),g&&g.length&&f(g,r,t.prevSlideMessage),m()&&e.pagination.$el.on("keydown",classesToSelector(e.params.pagination.bulletClass),u)}s("beforeInit",(()=>{a=$(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),s("afterInit",(()=>{e.params.a11y.enabled&&(g(),h())})),s("toEdge",(()=>{e.params.a11y.enabled&&h()})),s("fromEdge",(()=>{e.params.a11y.enabled&&h()})),s("paginationUpdate",(()=>{e.params.a11y.enabled&&function(){const t=e.params.a11y;m()&&e.pagination.bullets.each((s=>{const a=$(s);r(a),e.params.pagination.renderBullet||(l(a,"button"),d(a,t.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))}))}()})),s("destroy",(()=>{e.params.a11y.enabled&&function(){let t,s;a&&a.length>0&&a.remove(),e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(s=e.navigation.$prevEl),t&&t.off("keydown",u),s&&s.off("keydown",u),m()&&e.pagination.$el.off("keydown",classesToSelector(e.params.pagination.bulletClass),u)}()}))}function History({swiper:e,extendParams:t,on:s}){t({history:{enabled:!1,root:"",replaceState:!1,key:"slides"}});let a=!1,i={};const r=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),n=e=>{const t=getWindow();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},l=(t,s)=>{const i=getWindow();if(!a||!e.params.history.enabled)return;let n;n=e.params.url?new URL(e.params.url):i.location;const l=e.slides.eq(s);let o=r(l.attr("data-history"));if(e.params.history.root.length>0){let s=e.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),o=`${s}/${t}/${o}`}else n.pathname.includes(t)||(o=`${t}/${o}`);const d=i.history.state;d&&d.value===o||(e.params.history.replaceState?i.history.replaceState({value:o},null,o):i.history.pushState({value:o},null,o))},o=(t,s,a)=>{if(s)for(let i=0,n=e.slides.length;i<n;i+=1){const n=e.slides.eq(i);if(r(n.attr("data-history"))===s&&!n.hasClass(e.params.slideDuplicateClass)){const s=n.index();e.slideTo(s,t,a)}}else e.slideTo(0,t,a)},d=()=>{i=n(e.params.url),o(e.params.speed,e.paths.value,!1)};s("init",(()=>{e.params.history.enabled&&(()=>{const t=getWindow();if(e.params.history){if(!t.history||!t.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);a=!0,i=n(e.params.url),(i.key||i.value)&&(o(0,i.value,e.params.runCallbacksOnInit),e.params.history.replaceState||t.addEventListener("popstate",d))}})()})),s("destroy",(()=>{e.params.history.enabled&&(()=>{const t=getWindow();e.params.history.replaceState||t.removeEventListener("popstate",d)})()})),s("transitionEnd _freeModeNoMomentumRelease",(()=>{a&&l(e.params.history.key,e.activeIndex)})),s("slideChange",(()=>{a&&e.params.cssMode&&l(e.params.history.key,e.activeIndex)}))}function HashNavigation({swiper:e,extendParams:t,emit:s,on:a}){let i=!1;const r=getDocument(),n=getWindow();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const l=()=>{s("hashChange");const t=r.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){const s=e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();if(void 0===s)return;e.slideTo(s)}},o=()=>{if(i&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&n.history&&n.history.replaceState)n.history.replaceState(null,null,`#${e.slides.eq(e.activeIndex).attr("data-hash")}`||""),s("hashSet");else{const t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");r.location.hash=a||"",s("hashSet")}};a("init",(()=>{e.params.hashNavigation.enabled&&(()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;i=!0;const t=r.location.hash.replace("#","");if(t){const s=0;for(let a=0,i=e.slides.length;a<i;a+=1){const i=e.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===t&&!i.hasClass(e.params.slideDuplicateClass)){const t=i.index();e.slideTo(t,s,e.params.runCallbacksOnInit,!0)}}}e.params.hashNavigation.watchState&&$(n).on("hashchange",l)})()})),a("destroy",(()=>{e.params.hashNavigation.enabled&&e.params.hashNavigation.watchState&&$(n).off("hashchange",l)})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&o()})),a("slideChange",(()=>{i&&e.params.cssMode&&o()}))}function Autoplay({swiper:e,extendParams:t,on:s,emit:a}){let i;function r(){const t=e.slides.eq(e.activeIndex);let s=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(s=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(i),i=nextTick((()=>{let t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),a("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?l():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),a("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),a("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),a("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?l():(t=e.slideTo(0,e.params.speed,!0,!0),a("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),a("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&r()}),s)}function n(){return void 0===i&&(!e.autoplay.running&&(e.autoplay.running=!0,a("autoplayStart"),r(),!0))}function l(){return!!e.autoplay.running&&(void 0!==i&&(i&&(clearTimeout(i),i=void 0),e.autoplay.running=!1,a("autoplayStop"),!0))}function o(t){e.autoplay.running&&(e.autoplay.paused||(i&&clearTimeout(i),e.autoplay.paused=!0,0!==t&&e.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].addEventListener(t,c)})):(e.autoplay.paused=!1,r())))}function d(){const t=getDocument();"hidden"===t.visibilityState&&e.autoplay.running&&o(),"visible"===t.visibilityState&&e.autoplay.paused&&(r(),e.autoplay.paused=!1)}function c(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,c)})),e.autoplay.paused=!1,e.autoplay.running?r():l())}function p(){e.params.autoplay.disableOnInteraction?l():o(),["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,c)}))}function u(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,r())}e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),s("init",(()=>{if(e.params.autoplay.enabled){n();getDocument().addEventListener("visibilitychange",d),e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",p),e.$el.on("mouseleave",u))}})),s("beforeTransitionStart",((t,s,a)=>{e.autoplay.running&&(a||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(s):l())})),s("sliderFirstMove",(()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?l():o())})),s("touchEnd",(()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&r()})),s("destroy",(()=>{e.$el.off("mouseenter",p),e.$el.off("mouseleave",u),e.autoplay.running&&l();getDocument().removeEventListener("visibilitychange",d)})),Object.assign(e.autoplay,{pause:o,run:r,start:n,stop:l})}function Thumb({swiper:e,extendParams:t,on:s}){t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,i=!1;function r(){const t=e.thumbs.swiper;if(!t)return;const s=t.clickedIndex,a=t.clickedSlide;if(a&&$(a).hasClass(e.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=t.params.loop?parseInt($(t.clickedSlide).attr("data-swiper-slide-index"),10):s,e.params.loop){let t=e.activeIndex;e.slides.eq(t).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,t=e.activeIndex);const s=e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-t<t-s?a:s}e.slideTo(i)}function n(){const{thumbs:t}=e.params;if(a)return!1;a=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(isObject(t.swiper)){const a=Object.assign({},t.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(a),i=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",r),!0}function l(t){const s=e.thumbs.swiper;if(!s)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView,i=e.params.thumbs.autoScrollOffset,r=i&&!s.params.loop;if(e.realIndex!==s.realIndex||r){let n,l,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const t=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();n=void 0===t?a:void 0===a?t:a-o==o-t?s.params.slidesPerGroup>1?a:o:a-o<o-t?a:t,l=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,l=n>e.previousIndex?"next":"prev";r&&(n+="next"===l?i:-1*i),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n=n>o?n-Math.floor(a/2)+1:n+Math.floor(a/2)-1:n>o&&s.params.slidesPerGroup,s.slideTo(n,t?0:void 0))}let n=1;const l=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(n=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),s.slides.removeClass(l),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let t=0;t<n;t+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(l);else for(let t=0;t<n;t+=1)s.slides.eq(e.realIndex+t).addClass(l)}e.thumbs={swiper:null},s("beforeInit",(()=>{const{thumbs:t}=e.params;t&&t.swiper&&(n(),l(!0))})),s("slideChange update resize observerUpdate",(()=>{e.thumbs.swiper&&l()})),s("setTransition",((t,s)=>{const a=e.thumbs.swiper;a&&a.setTransition(s)})),s("beforeDestroy",(()=>{const t=e.thumbs.swiper;t&&i&&t&&t.destroy()})),Object.assign(e.thumbs,{init:n,update:l})}function freeMode({swiper:e,extendParams:t,emit:s,once:a}){t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(e,{freeMode:{onTouchMove:function(){const{touchEventsData:t,touches:s}=e;0===t.velocities.length&&t.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:t.touchStartTime}),t.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:now()})},onTouchEnd:function({currentPos:t}){const{params:i,$wrapperEl:r,rtlTranslate:n,snapGrid:l,touchEventsData:o}=e,d=now()-o.touchStartTime;if(t<-e.minTranslate())e.slideTo(e.activeIndex);else if(t>-e.maxTranslate())e.slides.length<l.length?e.slideTo(l.length-1):e.slideTo(e.slides.length-1);else{if(i.freeMode.momentum){if(o.velocities.length>1){const t=o.velocities.pop(),s=o.velocities.pop(),a=t.position-s.position,r=t.time-s.time;e.velocity=a/r,e.velocity/=2,Math.abs(e.velocity)<i.freeMode.minimumVelocity&&(e.velocity=0),(r>150||now()-t.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=i.freeMode.momentumVelocityRatio,o.velocities.length=0;let t=1e3*i.freeMode.momentumRatio;const d=e.velocity*t;let c=e.translate+d;n&&(c=-c);let p,u=!1;const h=20*Math.abs(e.velocity)*i.freeMode.momentumBounceRatio;let m;if(c<e.maxTranslate())i.freeMode.momentumBounce?(c+e.maxTranslate()<-h&&(c=e.maxTranslate()-h),p=e.maxTranslate(),u=!0,o.allowMomentumBounce=!0):c=e.maxTranslate(),i.loop&&i.centeredSlides&&(m=!0);else if(c>e.minTranslate())i.freeMode.momentumBounce?(c-e.minTranslate()>h&&(c=e.minTranslate()+h),p=e.minTranslate(),u=!0,o.allowMomentumBounce=!0):c=e.minTranslate(),i.loop&&i.centeredSlides&&(m=!0);else if(i.freeMode.sticky){let t;for(let e=0;e<l.length;e+=1)if(l[e]>-c){t=e;break}c=Math.abs(l[t]-c)<Math.abs(l[t-1]-c)||"next"===e.swipeDirection?l[t]:l[t-1],c=-c}if(m&&a("transitionEnd",(()=>{e.loopFix()})),0!==e.velocity){if(t=n?Math.abs((-c-e.translate)/e.velocity):Math.abs((c-e.translate)/e.velocity),i.freeMode.sticky){const s=Math.abs((n?-c:c)-e.translate),a=e.slidesSizesGrid[e.activeIndex];t=s<a?i.speed:s<2*a?1.5*i.speed:2.5*i.speed}}else if(i.freeMode.sticky)return void e.slideToClosest();i.freeMode.momentumBounce&&u?(e.updateProgress(p),e.setTransition(t),e.setTranslate(c),e.transitionStart(!0,e.swipeDirection),e.animating=!0,r.transitionEnd((()=>{e&&!e.destroyed&&o.allowMomentumBounce&&(s("momentumBounce"),e.setTransition(i.speed),setTimeout((()=>{e.setTranslate(p),r.transitionEnd((()=>{e&&!e.destroyed&&e.transitionEnd()}))}),0))}))):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(c),e.setTransition(t),e.setTranslate(c),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,r.transitionEnd((()=>{e&&!e.destroyed&&e.transitionEnd()})))):e.updateProgress(c),e.updateActiveIndex(),e.updateSlidesClasses()}else{if(i.freeMode.sticky)return void e.slideToClosest();i.freeMode&&s("_freeModeNoMomentumRelease")}(!i.freeMode.momentum||d>=i.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}}}})}function Grid({swiper:e,extendParams:t}){let s,a,i;t({grid:{rows:1,fill:"column"}});e.grid={initSlides:t=>{const{slidesPerView:r}=e.params,{rows:n,fill:l}=e.params.grid;a=s/n,i=Math.floor(t/n),s=Math.floor(t/n)===t/n?t:Math.ceil(t/n)*n,"auto"!==r&&"row"===l&&(s=Math.max(s,r*n))},updateSlide:(t,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=e.params,{rows:c,fill:p}=e.params.grid;let u,h,m;if("row"===p&&o>1){const e=Math.floor(t/(o*c)),a=t-c*o*e,i=0===e?o:Math.min(Math.ceil((n-e*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+e*o,u=h+m*s/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(t/c),m=t-h*c,(h>i||h===i&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(t/a),h=t-m*a);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(t,a,i)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=e.params,{rows:o}=e.params.grid;if(e.virtualSize=(t+r)*s,e.virtualSize=Math.ceil(e.virtualSize/o)-r,e.$wrapperEl.css({[i("width")]:`${e.virtualSize+r}px`}),n){a.splice(0,a.length);const t=[];for(let s=0;s<a.length;s+=1){let i=a[s];l&&(i=Math.floor(i)),a[s]<e.virtualSize+a[0]&&t.push(i)}a.push(...t)}}}}function appendSlide(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function prependSlide(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function addSlide(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function removeSlide(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function removeAllSlides(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function Manipulation({swiper:e}){Object.assign(e,{appendSlide:appendSlide.bind(e),prependSlide:prependSlide.bind(e),addSlide:addSlide.bind(e),removeSlide:removeSlide.bind(e),removeAllSlides:removeAllSlides.bind(e)})}function effectInit(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l}=e;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)}))}function effectTarget(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function effectVirtualTransitionEnd({swiper:e,duration:t,transformEl:s,allSlides:a}){const{slides:i,activeIndex:r,$wrapperEl:n}=e;if(e.params.virtualTranslate&&0!==t){let t,l=!1;t=a?s?i.find(s):i:s?i.eq(r).find(s):i.eq(r),t.transitionEnd((()=>{if(l)return;if(!e||e.destroyed)return;l=!0,e.animating=!1;const t=["webkitTransitionEnd","transitionend"];for(let e=0;e<t.length;e+=1)n.trigger(t[e])}))}}function EffectFade({swiper:e,extendParams:t,on:s}){t({fadeEffect:{crossFade:!1,transformEl:null}});effectInit({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:t}=e,s=e.params.fadeEffect;for(let a=0;a<t.length;a+=1){const t=e.slides.eq(a);let i=-t[0].swiperSlideOffset;e.params.virtualTranslate||(i-=e.translate);let r=0;e.isHorizontal()||(r=i,i=0);const n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);effectTarget(s,t).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:t=>{const{transformEl:s}=e.params.fadeEffect;(s?e.slides.find(s):e.slides).transition(t),effectVirtualTransitionEnd({swiper:e,duration:t,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function EffectCube({swiper:e,extendParams:t,on:s}){t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});effectInit({effect:"cube",swiper:e,on:s,setTranslate:()=>{const{$el:t,$wrapperEl:s,slides:a,width:i,height:r,rtlTranslate:n,size:l,browser:o}=e,d=e.params.cubeEffect,c=e.isHorizontal(),p=e.virtual&&e.params.virtual.enabled;let u,h=0;d.shadow&&(c?(u=s.find(".swiper-cube-shadow"),0===u.length&&(u=$('<div class="swiper-cube-shadow"></div>'),s.append(u)),u.css({height:`${i}px`})):(u=t.find(".swiper-cube-shadow"),0===u.length&&(u=$('<div class="swiper-cube-shadow"></div>'),t.append(u))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;p&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let i=90*s,r=Math.floor(i/360);n&&(i=-i,r=Math.floor(-i/360));const o=Math.max(Math.min(t[0].progress,1),-1);let u=0,m=0,f=0;s%4==0?(u=4*-r*l,f=0):(s-1)%4==0?(u=0,f=4*-r*l):(s-2)%4==0?(u=l+4*r*l,f=l):(s-3)%4==0&&(u=-l,f=3*l+4*l*r),n&&(u=-u),c||(m=u,u=0);const g=`rotateX(${c?0:-i}deg) rotateY(${c?i:0}deg) translate3d(${u}px, ${m}px, ${f}px)`;if(o<=1&&o>-1&&(h=90*s+90*o,n&&(h=90*-s-90*o)),t.transform(g),d.slideShadows){let e=c?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=c?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=$(`<div class="swiper-slide-shadow-${c?"left":"top"}"></div>`),t.append(e)),0===s.length&&(s=$(`<div class="swiper-slide-shadow-${c?"right":"bottom"}"></div>`),t.append(s)),e.length&&(e[0].style.opacity=Math.max(-o,0)),s.length&&(s[0].style.opacity=Math.max(o,0))}}if(s.css({"-webkit-transform-origin":`50% 50% -${l/2}px`,"transform-origin":`50% 50% -${l/2}px`}),d.shadow)if(c)u.transform(`translate3d(0px, ${i/2+d.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`);else{const e=Math.abs(h)-90*Math.floor(Math.abs(h)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=d.shadowScale,a=d.shadowScale/t,i=d.shadowOffset;u.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r/2+i}px, ${-r/2/a}px) rotateX(-90deg)`)}const m=o.isSafari||o.isWebView?-l/2:0;s.transform(`translate3d(0px,0,${m}px) rotateX(${e.isHorizontal()?0:h}deg) rotateY(${e.isHorizontal()?-h:0}deg)`)},setTransition:t=>{const{$el:s,slides:a}=e;a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),e.params.cubeEffect.shadow&&!e.isHorizontal()&&s.find(".swiper-cube-shadow").transition(t)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function createShadow(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=$(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}function EffectFlip({swiper:e,extendParams:t,on:s}){t({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});effectInit({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:t,rtlTranslate:s}=e,a=e.params.flipEffect;for(let i=0;i<t.length;i+=1){const r=t.eq(i);let n=r[0].progress;e.params.flipEffect.limitRotation&&(n=Math.max(Math.min(r[0].progress,1),-1));const l=r[0].swiperSlideOffset;let o=-180*n,d=0,c=e.params.cssMode?-l-e.translate:-l,p=0;if(e.isHorizontal()?s&&(o=-o):(p=c,c=0,d=-o,o=0),r[0].style.zIndex=-Math.abs(Math.round(n))+t.length,a.slideShadows){let t=e.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),s=e.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===t.length&&(t=createShadow(a,r,e.isHorizontal()?"left":"top")),0===s.length&&(s=createShadow(a,r,e.isHorizontal()?"right":"bottom")),t.length&&(t[0].style.opacity=Math.max(-n,0)),s.length&&(s[0].style.opacity=Math.max(n,0))}const u=`translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;effectTarget(a,r).transform(u)}},setTransition:t=>{const{transformEl:s}=e.params.flipEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),effectVirtualTransitionEnd({swiper:e,duration:t,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function EffectCoverflow({swiper:e,extendParams:t,on:s}){t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}});effectInit({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:t,height:s,slides:a,slidesSizesGrid:i}=e,r=e.params.coverflowEffect,n=e.isHorizontal(),l=e.translate,o=n?t/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s*r.modifier;let p=n?d*l:0,u=n?0:d*l,h=-c*Math.abs(l),m=r.stretch;"string"==typeof m&&-1!==m.indexOf("%")&&(m=parseFloat(r.stretch)/100*s);let f=n?0:m*l,g=n?m*l:0,v=1-(1-r.scale)*Math.abs(l);Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(p)<.001&&(p=0),Math.abs(u)<.001&&(u=0),Math.abs(v)<.001&&(v=0);const w=`translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${v})`;if(effectTarget(r,t).transform(w),t[0].style.zIndex=1-Math.abs(Math.round(l)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=createShadow(r,t,n?"left":"top")),0===s.length&&(s=createShadow(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=l>0?l:0),s.length&&(s[0].style.opacity=-l>0?-l:0)}}},setTransition:t=>{const{transformEl:s}=e.params.coverflowEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function EffectCreative({swiper:e,extendParams:t,on:s}){t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=e=>"string"==typeof e?e:`${e}px`;effectInit({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:t}=e,s=e.params.creativeEffect,{progressMultiplier:i}=s;for(let r=0;r<t.length;r+=1){const n=t.eq(r),l=n[0].progress,o=Math.min(Math.max(n[0].progress,-s.limitProgress),s.limitProgress),d=n[0].swiperSlideOffset,c=[e.params.cssMode?-d-e.translate:-d,0,0],p=[0,0,0];let u=!1;e.isHorizontal()||(c[1]=c[0],c[0]=0);let h={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};o<0?(h=s.next,u=!0):o>0&&(h=s.prev,u=!0),c.forEach(((e,t)=>{c[t]=`calc(${e}px + (${a(h.translate[t])} * ${Math.abs(o*i)}))`})),p.forEach(((e,t)=>{p[t]=h.rotate[t]*Math.abs(o*i)})),n[0].style.zIndex=-Math.abs(Math.round(l))+t.length;const m=c.join(", "),f=`rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`,g=o<0?`scale(${1+(1-h.scale)*o*i})`:`scale(${1-(1-h.scale)*o*i})`,v=o<0?1+(1-h.opacity)*o*i:1-(1-h.opacity)*o*i,w=`translate3d(${m}) ${f} ${g}`;if(u&&h.shadow||!u){let e=n.children(".swiper-slide-shadow");if(0===e.length&&h.shadow&&(e=createShadow(s,n)),e.length){const t=s.shadowPerProgress?o*(1/s.limitProgress):o;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const b=effectTarget(s,n);b.transform(w).css({opacity:v}),h.origin&&b.css("transform-origin",h.origin)}},setTransition:t=>{const{transformEl:s}=e.params.creativeEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow").transition(t),effectVirtualTransitionEnd({swiper:e,duration:t,transformEl:s,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function EffectCards({swiper:e,extendParams:t,on:s}){t({cardsEffect:{slideShadows:!0,transformEl:null}});effectInit({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:t,activeIndex:s}=e,a=e.params.cardsEffect,{startTranslate:i,isTouched:r}=e.touchEventsData,n=e.translate;for(let l=0;l<t.length;l+=1){const o=t.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(p-=t[0].swiperSlideOffset);let u=e.params.cssMode?-p-e.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-2*c,v=8-.75*Math.abs(c);const w=(l===s||l===s-1)&&c>0&&c<1&&(r||e.params.cssMode)&&n<i,b=(l===s||l===s+1)&&c<0&&c>-1&&(r||e.params.cssMode)&&n>i;if(w||b){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!e.isHorizontal()){const e=h;h=u,u=e}const x=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${c<0?""+(1+(1-f)*c):""+(1-(1-f)*c)})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=createShadow(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+t.length;effectTarget(a,o).transform(x)}},setTransition:t=>{const{transformEl:s}=e.params.cardsEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow").transition(t),effectVirtualTransitionEnd({swiper:e,duration:t,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}Object.keys(prototypes).forEach((e=>{Object.keys(prototypes[e]).forEach((t=>{Swiper.prototype[t]=prototypes[e][t]}))})),Swiper.use([Resize,Observer]);const modules=[Virtual,Keyboard,Mousewheel,Navigation,Pagination,Scrollbar,Parallax,Zoom,Lazy,Controller,A11y,History,HashNavigation,Autoplay,Thumb,freeMode,Grid,Manipulation,EffectFade,EffectCube,EffectFlip,EffectCoverflow,EffectCreative,EffectCards];Swiper.use(modules);
 //# sourceMappingURL=swiper-bundle.esm.browser.min.js.map
/**
 * This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */

 (function() {
    // Return early if we're not running inside of the browser.
    if (typeof window === 'undefined') {
      return;
    }
  
    // Convenience function for converting NodeLists.
    /** @type {typeof Array.prototype.slice} */
    const slice = Array.prototype.slice;
  
    /**
     * IE has a non-standard name for "matches".
     * @type {typeof Element.prototype.matches}
     */
    const matches =
        Element.prototype.matches || Element.prototype.msMatchesSelector;
  
    /** @type {string} */
    const _focusableElementsString = ['a[href]',
                                      'area[href]',
                                      'input:not([disabled])',
                                      'select:not([disabled])',
                                      'textarea:not([disabled])',
                                      'button:not([disabled])',
                                      'details',
                                      'summary',
                                      'iframe',
                                      'object',
                                      'embed',
                                      '[contenteditable]'].join(',');
  
    /**
     * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
     * attribute.
     *
     * Its main functions are:
     *
     * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
     *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
     *   each focusable node in the subtree with the singleton `InertManager` which manages all known
     *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
     *   instance exists for each focusable node which has at least one inert root as an ancestor.
     *
     * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
     *   attribute is removed from the root node). This is handled in the destructor, which calls the
     *   `deregister` method on `InertManager` for each managed inert node.
     */
    class InertRoot {
      /**
       * @param {!Element} rootElement The Element at the root of the inert subtree.
       * @param {!InertManager} inertManager The global singleton InertManager object.
       */
      constructor(rootElement, inertManager) {
        /** @type {!InertManager} */
        this._inertManager = inertManager;
  
        /** @type {!Element} */
        this._rootElement = rootElement;
  
        /**
         * @type {!Set<!InertNode>}
         * All managed focusable nodes in this InertRoot's subtree.
         */
        this._managedNodes = new Set();
  
        // Make the subtree hidden from assistive technology
        if (this._rootElement.hasAttribute('aria-hidden')) {
          /** @type {?string} */
          this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
        } else {
          this._savedAriaHidden = null;
        }
        this._rootElement.setAttribute('aria-hidden', 'true');
  
        // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
        this._makeSubtreeUnfocusable(this._rootElement);
  
        // Watch for:
        // - any additions in the subtree: make them unfocusable too
        // - any removals from the subtree: remove them from this inert root's managed nodes
        // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
        //   element, make that node a managed node.
        this._observer = new MutationObserver(this._onMutation.bind(this));
        this._observer.observe(this._rootElement, {attributes: true, childList: true, subtree: true});
      }
  
      /**
       * Call this whenever this object is about to become obsolete.  This unwinds all of the state
       * stored in this object and updates the state of all of the managed nodes.
       */
      destructor() {
        this._observer.disconnect();
  
        if (this._rootElement) {
          if (this._savedAriaHidden !== null) {
            this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
          } else {
            this._rootElement.removeAttribute('aria-hidden');
          }
        }
  
        this._managedNodes.forEach(function(inertNode) {
          this._unmanageNode(inertNode.node);
        }, this);
  
        // Note we cast the nulls to the ANY type here because:
        // 1) We want the class properties to be declared as non-null, or else we
        //    need even more casts throughout this code. All bets are off if an
        //    instance has been destroyed and a method is called.
        // 2) We don't want to cast "this", because we want type-aware optimizations
        //    to know which properties we're setting.
        this._observer = /** @type {?} */ (null);
        this._rootElement = /** @type {?} */ (null);
        this._managedNodes = /** @type {?} */ (null);
        this._inertManager = /** @type {?} */ (null);
      }
  
      /**
       * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
       */
      get managedNodes() {
        return new Set(this._managedNodes);
      }
  
      /** @return {boolean} */
      get hasSavedAriaHidden() {
        return this._savedAriaHidden !== null;
      }
  
      /** @param {?string} ariaHidden */
      set savedAriaHidden(ariaHidden) {
        this._savedAriaHidden = ariaHidden;
      }
  
      /** @return {?string} */
      get savedAriaHidden() {
        return this._savedAriaHidden;
      }
  
      /**
       * @param {!Node} startNode
       */
      _makeSubtreeUnfocusable(startNode) {
        composedTreeWalk(startNode, (node) => this._visitNode(node));
  
        let activeElement = document.activeElement;
  
        if (!document.body.contains(startNode)) {
          // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
          let node = startNode;
          /** @type {!ShadowRoot|undefined} */
          let root = undefined;
          while (node) {
            if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              root = /** @type {!ShadowRoot} */ (node);
              break;
            }
            node = node.parentNode;
          }
          if (root) {
            activeElement = root.activeElement;
          }
        }
        if (startNode.contains(activeElement)) {
          activeElement.blur();
          // In IE11, if an element is already focused, and then set to tabindex=-1
          // calling blur() will not actually move the focus.
          // To work around this we call focus() on the body instead.
          if (activeElement === document.activeElement) {
            document.body.focus();
          }
        }
      }
  
      /**
       * @param {!Node} node
       */
      _visitNode(node) {
        if (node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }
        const element = /** @type {!Element} */ (node);
  
        // If a descendant inert root becomes un-inert, its descendants will still be inert because of
        // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
        if (element !== this._rootElement && element.hasAttribute('inert')) {
          this._adoptInertRoot(element);
        }
  
        if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
          this._manageNode(element);
        }
      }
  
      /**
       * Register the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
      _manageNode(node) {
        const inertNode = this._inertManager.register(node, this);
        this._managedNodes.add(inertNode);
      }
  
      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
      _unmanageNode(node) {
        const inertNode = this._inertManager.deregister(node, this);
        if (inertNode) {
          this._managedNodes.delete(inertNode);
        }
      }
  
      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {!Node} startNode
       */
      _unmanageSubtree(startNode) {
        composedTreeWalk(startNode, (node) => this._unmanageNode(node));
      }
  
      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {!Element} node
       */
      _adoptInertRoot(node) {
        let inertSubroot = this._inertManager.getInertRoot(node);
  
        // During initialisation this inert root may not have been registered yet,
        // so register it now if need be.
        if (!inertSubroot) {
          this._inertManager.setInert(node, true);
          inertSubroot = this._inertManager.getInertRoot(node);
        }
  
        inertSubroot.managedNodes.forEach(function(savedInertNode) {
          this._manageNode(savedInertNode.node);
        }, this);
      }
  
      /**
       * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
      _onMutation(records, self) {
        records.forEach(function(record) {
          const target = /** @type {!Element} */ (record.target);
          if (record.type === 'childList') {
            // Manage added nodes
            slice.call(record.addedNodes).forEach(function(node) {
              this._makeSubtreeUnfocusable(node);
            }, this);
  
            // Un-manage removed nodes
            slice.call(record.removedNodes).forEach(function(node) {
              this._unmanageSubtree(node);
            }, this);
          } else if (record.type === 'attributes') {
            if (record.attributeName === 'tabindex') {
              // Re-initialise inert node if tabindex changes
              this._manageNode(target);
            } else if (target !== this._rootElement &&
                      record.attributeName === 'inert' &&
                      target.hasAttribute('inert')) {
              // If a new inert root is added, adopt its managed nodes and make sure it knows about the
              // already managed nodes from this inert subroot.
              this._adoptInertRoot(target);
              const inertSubroot = this._inertManager.getInertRoot(target);
              this._managedNodes.forEach(function(managedNode) {
                if (target.contains(managedNode.node)) {
                  inertSubroot._manageNode(managedNode.node);
                }
              });
            }
          }
        }, this);
      }
    }
  
    /**
     * `InertNode` initialises and manages a single inert node.
     * A node is inert if it is a descendant of one or more inert root elements.
     *
     * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
     * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
     * is intrinsically focusable or not.
     *
     * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
     * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
     * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
     * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
     * or removes the `tabindex` attribute if the element is intrinsically focusable.
     */
    class InertNode {
      /**
       * @param {!Node} node A focusable element to be made inert.
       * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
       */
      constructor(node, inertRoot) {
        /** @type {!Node} */
        this._node = node;
  
        /** @type {boolean} */
        this._overrodeFocusMethod = false;
  
        /**
         * @type {!Set<!InertRoot>} The set of descendant inert roots.
         *    If and only if this set becomes empty, this node is no longer inert.
         */
        this._inertRoots = new Set([inertRoot]);
  
        /** @type {?number} */
        this._savedTabIndex = null;
  
        /** @type {boolean} */
        this._destroyed = false;
  
        // Save any prior tabindex info and make this node untabbable
        this.ensureUntabbable();
      }
  
      /**
       * Call this whenever this object is about to become obsolete.
       * This makes the managed node focusable again and deletes all of the previously stored state.
       */
      destructor() {
        this._throwIfDestroyed();
  
        if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          const element = /** @type {!Element} */ (this._node);
          if (this._savedTabIndex !== null) {
            element.setAttribute('tabindex', this._savedTabIndex);
          } else {
            element.removeAttribute('tabindex');
          }
  
          // Use `delete` to restore native focus method.
          if (this._overrodeFocusMethod) {
            delete element.focus;
          }
        }
  
        // See note in InertRoot.destructor for why we cast these nulls to ANY.
        this._node = /** @type {?} */ (null);
        this._inertRoots = /** @type {?} */ (null);
        this._destroyed = true;
      }
  
      /**
       * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
       * If the object has been destroyed, any attempt to access it will cause an exception.
       */
      get destroyed() {
        return /** @type {!InertNode} */ (this)._destroyed;
      }
  
      /**
       * Throw if user tries to access destroyed InertNode.
       */
      _throwIfDestroyed() {
        if (this.destroyed) {
          throw new Error('Trying to access destroyed InertNode');
        }
      }
  
      /** @return {boolean} */
      get hasSavedTabIndex() {
        return this._savedTabIndex !== null;
      }
  
      /** @return {!Node} */
      get node() {
        this._throwIfDestroyed();
        return this._node;
      }
  
      /** @param {?number} tabIndex */
      set savedTabIndex(tabIndex) {
        this._throwIfDestroyed();
        this._savedTabIndex = tabIndex;
      }
  
      /** @return {?number} */
      get savedTabIndex() {
        this._throwIfDestroyed();
        return this._savedTabIndex;
      }
  
      /** Save the existing tabindex value and make the node untabbable and unfocusable */
      ensureUntabbable() {
        if (this.node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }
        const element = /** @type {!Element} */ (this.node);
        if (matches.call(element, _focusableElementsString)) {
          if (/** @type {!HTMLElement} */ (element).tabIndex === -1 &&
              this.hasSavedTabIndex) {
            return;
          }
  
          if (element.hasAttribute('tabindex')) {
            this._savedTabIndex = /** @type {!HTMLElement} */ (element).tabIndex;
          }
          element.setAttribute('tabindex', '-1');
          if (element.nodeType === Node.ELEMENT_NODE) {
            element.focus = function() {};
            this._overrodeFocusMethod = true;
          }
        } else if (element.hasAttribute('tabindex')) {
          this._savedTabIndex = /** @type {!HTMLElement} */ (element).tabIndex;
          element.removeAttribute('tabindex');
        }
      }
  
      /**
       * Add another inert root to this inert node's set of managing inert roots.
       * @param {!InertRoot} inertRoot
       */
      addInertRoot(inertRoot) {
        this._throwIfDestroyed();
        this._inertRoots.add(inertRoot);
      }
  
      /**
       * Remove the given inert root from this inert node's set of managing inert roots.
       * If the set of managing inert roots becomes empty, this node is no longer inert,
       * so the object should be destroyed.
       * @param {!InertRoot} inertRoot
       */
      removeInertRoot(inertRoot) {
        this._throwIfDestroyed();
        this._inertRoots.delete(inertRoot);
        if (this._inertRoots.size === 0) {
          this.destructor();
        }
      }
    }
  
    /**
     * InertManager is a per-document singleton object which manages all inert roots and nodes.
     *
     * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
     * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
     * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
     * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
     * is created for each such node, via the `_managedNodes` map.
     */
    class InertManager {
      /**
       * @param {!Document} document
       */
      constructor(document) {
        if (!document) {
          throw new Error('Missing required argument; InertManager needs to wrap a document.');
        }
  
        /** @type {!Document} */
        this._document = document;
  
        /**
         * All managed nodes known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertNode>}
         */
        this._managedNodes = new Map();
  
        /**
         * All inert roots known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertRoot>}
         */
        this._inertRoots = new Map();
  
        /**
         * Observer for mutations on `document.body`.
         * @type {!MutationObserver}
         */
        this._observer = new MutationObserver(this._watchForInert.bind(this));
  
        // Add inert style.
        addInertStyle(document.head || document.body || document.documentElement);
  
        // Wait for document to be loaded.
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
        } else {
          this._onDocumentLoaded();
        }
      }
  
      /**
       * Set whether the given element should be an inert root or not.
       * @param {!Element} root
       * @param {boolean} inert
       */
      setInert(root, inert) {
        if (inert) {
          if (this._inertRoots.has(root)) { // element is already inert
            return;
          }
  
          const inertRoot = new InertRoot(root, this);
          root.setAttribute('inert', '');
          this._inertRoots.set(root, inertRoot);
          // If not contained in the document, it must be in a shadowRoot.
          // Ensure inert styles are added there.
          if (!this._document.body.contains(root)) {
            let parent = root.parentNode;
            while (parent) {
              if (parent.nodeType === 11) {
                addInertStyle(parent);
              }
              parent = parent.parentNode;
            }
          }
        } else {
          if (!this._inertRoots.has(root)) { // element is already non-inert
            return;
          }
  
          const inertRoot = this._inertRoots.get(root);
          inertRoot.destructor();
          this._inertRoots.delete(root);
          root.removeAttribute('inert');
        }
      }
  
      /**
       * Get the InertRoot object corresponding to the given inert root element, if any.
       * @param {!Node} element
       * @return {!InertRoot|undefined}
       */
      getInertRoot(element) {
        return this._inertRoots.get(element);
      }
  
      /**
       * Register the given InertRoot as managing the given node.
       * In the case where the node has a previously existing inert root, this inert root will
       * be added to its set of inert roots.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {!InertNode} inertNode
       */
      register(node, inertRoot) {
        let inertNode = this._managedNodes.get(node);
        if (inertNode !== undefined) { // node was already in an inert subtree
          inertNode.addInertRoot(inertRoot);
        } else {
          inertNode = new InertNode(node, inertRoot);
        }
  
        this._managedNodes.set(node, inertNode);
  
        return inertNode;
      }
  
      /**
       * De-register the given InertRoot as managing the given inert node.
       * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
       * node from the InertManager's set of managed nodes if it is destroyed.
       * If the node is not currently managed, this is essentially a no-op.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
       */
      deregister(node, inertRoot) {
        const inertNode = this._managedNodes.get(node);
        if (!inertNode) {
          return null;
        }
  
        inertNode.removeInertRoot(inertRoot);
        if (inertNode.destroyed) {
          this._managedNodes.delete(node);
        }
  
        return inertNode;
      }
  
      /**
       * Callback used when document has finished loading.
       */
      _onDocumentLoaded() {
        // Find all inert roots in document and make them actually inert.
        const inertElements = slice.call(this._document.querySelectorAll('[inert]'));
        inertElements.forEach(function(inertElement) {
          this.setInert(inertElement, true);
        }, this);
  
        // Comment this out to use programmatic API only.
        this._observer.observe(this._document.body || this._document.documentElement, {attributes: true, subtree: true, childList: true});
      }
  
      /**
       * Callback used when mutation observer detects attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
      _watchForInert(records, self) {
        const _this = this;
        records.forEach(function(record) {
          switch (record.type) {
          case 'childList':
            slice.call(record.addedNodes).forEach(function(node) {
              if (node.nodeType !== Node.ELEMENT_NODE) {
                return;
              }
              const inertElements = slice.call(node.querySelectorAll('[inert]'));
              if (matches.call(node, '[inert]')) {
                inertElements.unshift(node);
              }
              inertElements.forEach(function(inertElement) {
                this.setInert(inertElement, true);
              }, _this);
            }, _this);
            break;
          case 'attributes':
            if (record.attributeName !== 'inert') {
              return;
            }
            const target = /** @type {!Element} */ (record.target);
            const inert = target.hasAttribute('inert');
            _this.setInert(target, inert);
            break;
          }
        }, this);
      }
    }
  
    /**
     * Recursively walk the composed tree from |node|.
     * @param {!Node} node
     * @param {(function (!Element))=} callback Callback to be called for each element traversed,
     *     before descending into child nodes.
     * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
     */
    function composedTreeWalk(node, callback, shadowRootAncestor) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        const element = /** @type {!Element} */ (node);
        if (callback) {
          callback(element);
        }
  
        // Descend into node:
        // If it has a ShadowRoot, ignore all child elements - these will be picked
        // up by the <content> or <shadow> elements. Descend straight into the
        // ShadowRoot.
        const shadowRoot = /** @type {!HTMLElement} */ (element).shadowRoot;
        if (shadowRoot) {
          composedTreeWalk(shadowRoot, callback, shadowRoot);
          return;
        }
  
        // If it is a <content> element, descend into distributed elements - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'content') {
          const content = /** @type {!HTMLContentElement} */ (element);
          // Verifies if ShadowDom v0 is supported.
          const distributedNodes = content.getDistributedNodes ?
            content.getDistributedNodes() : [];
          for (let i = 0; i < distributedNodes.length; i++) {
            composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
          }
          return;
        }
  
        // If it is a <slot> element, descend into assigned nodes - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'slot') {
          const slot = /** @type {!HTMLSlotElement} */ (element);
          // Verify if ShadowDom v1 is supported.
          const distributedNodes = slot.assignedNodes ?
            slot.assignedNodes({flatten: true}) : [];
          for (let i = 0; i < distributedNodes.length; i++) {
            composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
          }
          return;
        }
      }
  
      // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
      // element, nor a <shadow> element recurse normally.
      let child = node.firstChild;
      while (child != null) {
        composedTreeWalk(child, callback, shadowRootAncestor);
        child = child.nextSibling;
      }
    }
  
    /**
     * Adds a style element to the node containing the inert specific styles
     * @param {!Node} node
     */
    function addInertStyle(node) {
      if (node.querySelector('style#inert-style, link#inert-style')) {
        return;
      }
      const style = document.createElement('style');
      style.setAttribute('id', 'inert-style');
      style.textContent = '\n'+
                          '[inert] {\n' +
                          '  pointer-events: none;\n' +
                          '  cursor: default;\n' +
                          '}\n' +
                          '\n' +
                          '[inert], [inert] * {\n' +
                          '  -webkit-user-select: none;\n' +
                          '  -moz-user-select: none;\n' +
                          '  -ms-user-select: none;\n' +
                          '  user-select: none;\n' +
                          '}\n';
      node.appendChild(style);
    }
  
    if (!Element.prototype.hasOwnProperty('inert')) {
      /** @type {!InertManager} */
      const inertManager = new InertManager(document);
      
      Object.defineProperty(Element.prototype, 'inert', {
        enumerable: true,
        /** @this {!Element} */
        get: function() {
          return this.hasAttribute('inert');
        },
        /** @this {!Element} */
        set: function(inert) {
          inertManager.setInert(this, inert);
        },
      });
    }
  })();
