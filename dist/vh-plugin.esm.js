var t=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#6364DC";if(Array.from(document.querySelectorAll("style")).filter((function(t){return t.textContent.includes("ξvh-loading")})).length<1){var n=document.querySelector("style")||document.createElement("style");n.appendChild(document.createTextNode("body>.ξvh-loading{pointer-events:none;opacity:0;position:fixed;left:0;top:0;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;z-index:566}body>.ξvh-loading.ξvh-loading-active{pointer-events:auto;opacity:1}body>.ξvh-loading>.ξvh-loading-load{position:relative;border-radius:50%;width:28px;height:28px;border:3.6px solid #fff;animation:vh-loading-spin 1000ms linear infinite}@keyframes vh-loading-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")),document.head.appendChild(n)}var o=document.querySelector(".ξvh-loading"),i=document.querySelector(".ξvh-loading-load");o||((o=document.createElement("section")).classList.add("ξvh-loading"),(i=document.createElement("section")).classList.add("ξvh-loading-load"),o.appendChild(i),document.body.appendChild(o)),o.style.backgroundColor="rgba(0,0,0,".concat(e,")"),i.style.borderTopColor=r,t?o.classList.add("ξvh-loading-active"):o.classList.remove("ξvh-loading-active")},e=null,r=function(t){if(Array.from(document.querySelectorAll("style")).filter((function(t){return t.textContent.includes("ξvh-message")})).length<1){var r=document.querySelector("style")||document.createElement("style");r.appendChild(document.createTextNode('body > .ξvh-message {pointer-events: none;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;padding: 12.88px 14.88px;display: flex;align-items: center;height: max-content;width: max-content;max-width: 318px;color: #fff;border-radius: 8.88px;background-color: rgba(0, 0, 0, 0.6);font-size: 14px;line-height: 18px;opacity: 0;z-index: -1;transition: all 0.18s;font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;}body > .ξvh-message.active {pointer-events: auto;opacity: 1;z-index: 566;}')),document.head.appendChild(r)}var n=document.querySelector(".ξvh-message");n||((n=document.createElement("section")).classList.add("ξvh-message"),document.body.appendChild(n)),clearTimeout(e),n.innerHTML=t,setTimeout((function(){n.classList.add("active"),e=setTimeout((function(){return n.classList.remove("active")}),2666)}),6)},n={phone:function(t){return/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(t)},email:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},idcard:function(t){return/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(t)},url:function(t){return/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(t)},ua:function(){var t=navigator.userAgent.toLowerCase(),e=/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|OperaMini/i.test(t),r=/iPhone|iPad|iPod/i.test(t),n=/\b(Macintosh|Mac)\b/.test(t);return{windows:!e&&!n,mac:n,android:e&&!r,ios:r}}};function o(){o=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),c=new Y(n||[]);return i(a,"_invoke",{value:T(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f="suspendedStart",p="suspendedYield",v="executing",g="completed",y={};function m(){}function w(){}function x(){}var b={};l(b,c,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(M([])));S&&S!==r&&n.call(S,c)&&(b=S);var E=x.prototype=m.prototype=Object.create(b);function P(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,i,a,c){var u=d(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function T(e,r,n){var o=f;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?g:p,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Y(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function M(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=x,i(E,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=l(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},P(C.prototype),l(C.prototype,u,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new C(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(E),l(E,s,"Generator"),l(E,c,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=M,Y.prototype={constructor:Y,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var a=function(){var t,e=(t=o().mark((function t(e){var n,i,a,c=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"Copy Success",i=!1,t.prev=2,t.next=5,navigator.clipboard.writeText(e);case 5:i=!0,t.next=16;break;case 8:t.prev=8,t.t0=t.catch(2),(a=document.createElement("textarea")).value=e,document.body.appendChild(a),a.select(),i=document.execCommand("copy"),document.body.removeChild(a);case 16:return i&&n&&r("Copy Success"),t.abrupt("return",!!i);case 18:case"end":return t.stop()}}),t,null,[[2,8]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}(),c={showLoading:function(){t(!0,arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6,arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#6364DC")},hideLoading:function(){t(!1)},Toast:r,CopyText:a,Debounce:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=null;return function(){for(var n=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];r&&(clearTimeout(r),r=null),r=setTimeout((function(){t.apply(n,i)}),e)}},Throttle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=0;return function(){var n=Date.now();if(n-r>e){r=n;for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];t.apply(this,i)}}},getUrlParams:function(t){var e=window.location.href;return new URLSearchParams(e.split("?")[1]).get(t)},getUrlParamsJson:function(){var t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},jsonToUrlParams:function(t){return new URLSearchParams(t).toString()},TimeFormat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm:ss";t=13===String(t).length?Number(t):1e3*Number(t);var r=new Date(t),n={YYYY:r.getFullYear(),MM:String(r.getMonth()+1).padStart(2,"0"),DD:String(r.getDate()).padStart(2,"0"),hh:String(r.getHours()).padStart(2,"0"),mm:String(r.getMinutes()).padStart(2,"0"),ss:String(r.getSeconds()).padStart(2,"0")};return e.replace(/YYYY|MM|DD|hh|mm|ss/g,(function(t){return String(n[t])}))},check:n};export{c as default};
