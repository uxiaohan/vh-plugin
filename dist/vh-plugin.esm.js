var t=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#6364DC";if(Array.from(document.querySelectorAll("style")).filter((function(t){return t.textContent.includes("ξvh-loading")})).length<1){var n=document.querySelector("style")||document.createElement("style");n.appendChild(document.createTextNode("body>.ξvh-loading{pointer-events:none;opacity:0;position:fixed;left:0;top:0;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;z-index:566}body>.ξvh-loading.ξvh-loading-active{pointer-events:auto;opacity:1}body>.ξvh-loading>.ξvh-loading-load{position:relative;border-radius:50%;width:28px;height:28px;border:3.6px solid #fff;animation:vh-loading-spin 1000ms linear infinite}@keyframes vh-loading-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")),document.head.appendChild(n)}var o=document.querySelector(".ξvh-loading"),i=document.querySelector(".ξvh-loading-load");o||((o=document.createElement("section")).classList.add("ξvh-loading"),(i=document.createElement("section")).classList.add("ξvh-loading-load"),o.appendChild(i),document.body.appendChild(o)),o.style.backgroundColor="rgba(0,0,0,".concat(e,")"),i.style.borderTopColor=r,t?o.classList.add("ξvh-loading-active"):o.classList.remove("ξvh-loading-active")},e=null,r=function(t){if(Array.from(document.querySelectorAll("style")).filter((function(t){return t.textContent.includes("ξvh-message")})).length<1){var r=document.querySelector("style")||document.createElement("style");r.appendChild(document.createTextNode('body > .ξvh-message {pointer-events: none;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;padding: 12.88px 14.88px;display: flex;align-items: center;height: max-content;width: max-content;max-width: 318px;color: #fff;border-radius: 8.88px;background-color: rgba(0, 0, 0, 0.6);font-size: 14px;line-height: 18px;opacity: 0;z-index: -1;transition: all 0.18s;font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;}body > .ξvh-message.active {pointer-events: auto;opacity: 1;z-index: 566;}')),document.head.appendChild(r)}var n=document.querySelector(".ξvh-message");n||((n=document.createElement("section")).classList.add("ξvh-message"),document.body.appendChild(n)),clearTimeout(e),n.innerHTML=t,setTimeout((function(){n.classList.add("active"),e=setTimeout((function(){return n.classList.remove("active")}),2666)}),6)},n={phone:function(t){return/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(t)},email:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},idcard:function(t){return/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(t)},url:function(t){return/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(t)},ua:function(){var t=navigator.userAgent.toLowerCase(),e=/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|OperaMini/i.test(t),r=/iPhone|iPad|iPod/i.test(t),n=/\b(Macintosh|Mac)\b/.test(t);return{windows:!e&&!n,mac:n,android:e&&!r,ios:r}}};function o(){o=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),c=new A(n||[]);return i(a,"_invoke",{value:O(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f="suspendedStart",p="suspendedYield",v="executing",g="completed",m={};function y(){}function w(){}function b(){}var x={};s(x,c,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(M([])));E&&E!==r&&n.call(E,c)&&(x=E);var S=b.prototype=y.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,i,a,c){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function O(e,r,n){var o=f;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=d(e,r,n);if("normal"===l.type){if(o=n.done?g:p,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function M(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,i(S,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},_(C.prototype),s(C.prototype,u,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new C(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(S),s(S,l,"Generator"),s(S,c,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=M,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var a=function(){var t,e=(t=o().mark((function t(e){var n,i,a,c=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"Copy Success",i=!1,t.prev=2,t.next=5,navigator.clipboard.writeText(e);case 5:i=!0,t.next=16;break;case 8:t.prev=8,t.t0=t.catch(2),(a=document.createElement("textarea")).value=e,document.body.appendChild(a),a.select(),i=document.execCommand("copy"),document.body.removeChild(a);case 16:return i&&n&&r("Copy Success"),t.abrupt("return",!!i);case 18:case"end":return t.stop()}}),t,null,[[2,8]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}(),c=8;function u(t){return function(t){for(var e="0123456789abcdef",r="",n=0;n<4*t.length;n++)r+=e.charAt(t[n>>2]>>n%4*8+4&15)+e.charAt(t[n>>2]>>n%4*8&15);return r}(function(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;for(var r=1732584193,n=-271733879,o=-1732584194,i=271733878,a=0;a<t.length;a+=16){var c=r,u=n,l=o,v=i;r=s(r,n,o,i,t[a+0],7,-680876936),i=s(i,r,n,o,t[a+1],12,-389564586),o=s(o,i,r,n,t[a+2],17,606105819),n=s(n,o,i,r,t[a+3],22,-1044525330),r=s(r,n,o,i,t[a+4],7,-176418897),i=s(i,r,n,o,t[a+5],12,1200080426),o=s(o,i,r,n,t[a+6],17,-1473231341),n=s(n,o,i,r,t[a+7],22,-45705983),r=s(r,n,o,i,t[a+8],7,1770035416),i=s(i,r,n,o,t[a+9],12,-1958414417),o=s(o,i,r,n,t[a+10],17,-42063),n=s(n,o,i,r,t[a+11],22,-1990404162),r=s(r,n,o,i,t[a+12],7,1804603682),i=s(i,r,n,o,t[a+13],12,-40341101),o=s(o,i,r,n,t[a+14],17,-1502002290),r=h(r,n=s(n,o,i,r,t[a+15],22,1236535329),o,i,t[a+1],5,-165796510),i=h(i,r,n,o,t[a+6],9,-1069501632),o=h(o,i,r,n,t[a+11],14,643717713),n=h(n,o,i,r,t[a+0],20,-373897302),r=h(r,n,o,i,t[a+5],5,-701558691),i=h(i,r,n,o,t[a+10],9,38016083),o=h(o,i,r,n,t[a+15],14,-660478335),n=h(n,o,i,r,t[a+4],20,-405537848),r=h(r,n,o,i,t[a+9],5,568446438),i=h(i,r,n,o,t[a+14],9,-1019803690),o=h(o,i,r,n,t[a+3],14,-187363961),n=h(n,o,i,r,t[a+8],20,1163531501),r=h(r,n,o,i,t[a+13],5,-1444681467),i=h(i,r,n,o,t[a+2],9,-51403784),o=h(o,i,r,n,t[a+7],14,1735328473),r=d(r,n=h(n,o,i,r,t[a+12],20,-1926607734),o,i,t[a+5],4,-378558),i=d(i,r,n,o,t[a+8],11,-2022574463),o=d(o,i,r,n,t[a+11],16,1839030562),n=d(n,o,i,r,t[a+14],23,-35309556),r=d(r,n,o,i,t[a+1],4,-1530992060),i=d(i,r,n,o,t[a+4],11,1272893353),o=d(o,i,r,n,t[a+7],16,-155497632),n=d(n,o,i,r,t[a+10],23,-1094730640),r=d(r,n,o,i,t[a+13],4,681279174),i=d(i,r,n,o,t[a+0],11,-358537222),o=d(o,i,r,n,t[a+3],16,-722521979),n=d(n,o,i,r,t[a+6],23,76029189),r=d(r,n,o,i,t[a+9],4,-640364487),i=d(i,r,n,o,t[a+12],11,-421815835),o=d(o,i,r,n,t[a+15],16,530742520),r=f(r,n=d(n,o,i,r,t[a+2],23,-995338651),o,i,t[a+0],6,-198630844),i=f(i,r,n,o,t[a+7],10,1126891415),o=f(o,i,r,n,t[a+14],15,-1416354905),n=f(n,o,i,r,t[a+5],21,-57434055),r=f(r,n,o,i,t[a+12],6,1700485571),i=f(i,r,n,o,t[a+3],10,-1894986606),o=f(o,i,r,n,t[a+10],15,-1051523),n=f(n,o,i,r,t[a+1],21,-2054922799),r=f(r,n,o,i,t[a+8],6,1873313359),i=f(i,r,n,o,t[a+15],10,-30611744),o=f(o,i,r,n,t[a+6],15,-1560198380),n=f(n,o,i,r,t[a+13],21,1309151649),r=f(r,n,o,i,t[a+4],6,-145523070),i=f(i,r,n,o,t[a+11],10,-1120210379),o=f(o,i,r,n,t[a+2],15,718787259),n=f(n,o,i,r,t[a+9],21,-343485551),r=p(r,c),n=p(n,u),o=p(o,l),i=p(i,v)}return[r,n,o,i]}(function(t){for(var e=[],r=(1<<c)-1,n=0;n<t.length*c;n+=c)e[n>>5]|=(t.charCodeAt(n/c)&r)<<n%32;return e}(t),t.length*c))}function l(t,e,r,n,o,i){return p((a=p(p(e,t),p(n,i)))<<(c=o)|a>>>32-c,r);var a,c}function s(t,e,r,n,o,i,a){return l(e&r|~e&n,t,e,o,i,a)}function h(t,e,r,n,o,i,a){return l(e&n|r&~n,t,e,o,i,a)}function d(t,e,r,n,o,i,a){return l(e^r^n,t,e,o,i,a)}function f(t,e,r,n,o,i,a){return l(r^(e|~n),t,e,o,i,a)}function p(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}var v={showLoading:function(){t(!0,arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6,arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#6364DC")},hideLoading:function(){t(!1)},Toast:r,CopyText:a,Debounce:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=null;return function(){for(var n=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];r&&(clearTimeout(r),r=null),r=setTimeout((function(){t.apply(n,i)}),e)}},Throttle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=0;return function(){var n=Date.now();if(n-r>e){r=n;for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];t.apply(this,i)}}},getUrlParams:function(t){var e=window.location.href;return new URLSearchParams(e.split("?")[1]).get(t)},getUrlParamsJson:function(){var t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},jsonToUrlParams:function(t){return new URLSearchParams(t).toString()},TimeFormat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm:ss";t=13===String(t).length?Number(t):1e3*Number(t);var r=new Date(t),n={YYYY:r.getFullYear(),MM:String(r.getMonth()+1).padStart(2,"0"),DD:String(r.getDate()).padStart(2,"0"),hh:String(r.getHours()).padStart(2,"0"),mm:String(r.getMinutes()).padStart(2,"0"),ss:String(r.getSeconds()).padStart(2,"0")};return e.replace(/YYYY|MM|DD|hh|mm|ss/g,(function(t){return String(n[t])}))},OneKey:function(){var t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl"),r=e.getExtension("WEBGL_debug_renderer_info"),n="5ZOI5ZOI5ZOI6Kej5Ye65p2l5Y+I5oCO5qC3";return u(n+(JSON.stringify({vendor:r?e.getParameter(r.UNMASKED_VENDOR_WEBGL):null,renderer:r?e.getParameter(r.UNMASKED_RENDERER_WEBGL):null,navs:"geolocation"in navigator})+(navigator.deviceMemory||"_jquery_")+navigator.languages.join(", ")+(navigator.hardwareConcurrency||"_md5_")+(Intl.DateTimeFormat().resolvedOptions().timeZone||"_base64_")+n)).toString()},check:n};export{v as default};
