const vh = (() => {
  return {
    toastSetTimeout: null,
    // Toast弹窗事件
    toast: function (text, dua = 1666) {
      const hasSty = Array.from(document.styleSheets).some(sty => {
        try {
          return Array.from(sty.cssRules).some(rule => rule.selectorText && rule.selectorText.includes(".ξvh-toast"));
        } catch (e) {
          return false;
        }
      });
      if (!hasSty) {
        const vhStyle = `.ξvh-toast{font-family:-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif!important;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;top:50%;left:50%;display:none;padding:8px 16px;width:max-content;max-width:566px;border-radius:6.6px;font-size:14.6px;line-height:1.6;font-weight:normal;transform:translate(-50%,-50%);background-color:rgba(0,0,0,0.66);color:#fff;opacity:0;z-index:9999999;transition:all 366ms;word-wrap:break-word;overflow-wrap:break-word;overflow:hidden;}@media screen and (max-width:992px){body{.ξvh-toast{padding:2vw 6vw !important;max-width:56.66vw !important;border-radius:1.8vw !important;font-size:3.6vw !important;}}}`;
        const styE = document.createElement("style");
        styE.textContent = vhStyle;
        document.head.appendChild(styE);
      }
      let vhDiv = document.querySelector("body>.ξvh-toast");
      if (!vhDiv) {
        vhDiv = document.createElement("div");
        vhDiv.classList.add("ξvh-toast");
        document.body.appendChild(vhDiv);
      }
      // 初始化隐藏
      vhDiv.style.opacity = 0;
      vhDiv.style.display = "none";
      // 继续执行
      vhDiv.innerText = text;
      vhDiv.style.display = "block";
      setTimeout(() => {
        vhDiv.style.opacity = 1;
      }, 1);
      if (this.toastSetTimeout) {
        clearTimeout(this.toastSetTimeout);
      }
      this.toastSetTimeout = setTimeout(function () {
        vhDiv.style.opacity = 0;
        setTimeout(() => {
          vhDiv.style.display = "none";
        }, 366);
      }, dua);
    },
    // Loading加载事件
    _loadingInit: (status, opacity = 0.6, color = "#567AD0") => {
      const hasSty = Array.from(document.styleSheets).some(sty => {
        try {
          return Array.from(sty.cssRules).some(rule => rule.selectorText && rule.selectorText.includes(".ξvh-loading"));
        } catch (e) {
          return false;
        }
      });

      if (!hasSty) {
        const vhStyle = "body .ξvh-loading{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;z-index:9999998}body .ξvh-loading>.ξvh-load{border-radius:50%;width:28px;height:28px;border:3.6px solid #f3f3f3;animation:ξvh-spin 1s linear infinite;}@media screen and (max-width:992px){body .ξvh-loading>.ξvh-load{width:6.6vw;height:6.6vw;border-width:0.96vw;}}@keyframes ξvh-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
        const styE = document.createElement("style");
        styE.textContent = vhStyle;
        document.head.appendChild(styE);
      }
      let vhDiv = document.querySelector("body>.ξvh-loading");
      let loadDiv = document.querySelector("body>.ξvh-loading>.ξvh-load");
      if (!vhDiv) {
        vhDiv = document.createElement("div");
        vhDiv.classList.add("ξvh-loading");
        loadDiv = document.createElement("div");
        loadDiv.classList.add("ξvh-load");
        vhDiv.appendChild(loadDiv);
        document.body.appendChild(vhDiv);
      }
      vhDiv.style.backgroundColor = `rgba(0,0,0,${opacity})`;
      loadDiv.style.borderTopColor = color;
      vhDiv.style.display = status ? "flex" : "none";
    },
    showLoading: function (opacity, color) {
      this._loadingInit(true, opacity, color);
    },
    hideLoading: function () {
      this._loadingInit(false);
    },
    // 获取URL参数
    getUrlParams: param => {
      const url = window.location.href;
      const urlParams = new URLSearchParams(url.split("?")[1]);
      return urlParams.get(param);
    },
    // 获取URL参数JSON
    getUrlParamsJson: () => {
      const urlParams = new URLSearchParams(window.location.search);
      return Object.fromEntries(urlParams.entries());
    },
    // JSON转URL参数
    jsonToUrlParams: json => {
      return new URLSearchParams(json).toString();
    },
    // 时间戳转时间
    timeFormat: (t, fm = "YYYY-MM-DD hh:mm:ss") => {
      t = String(t).length === 13 ? t : t * 1000;
      const date = new Date(t);
      const replacements = {
        YYYY: date.getFullYear(),
        MM: String(date.getMonth() + 1).padStart(2, "0"),
        DD: String(date.getDate()).padStart(2, "0"),
        hh: String(date.getHours()).padStart(2, "0"),
        mm: String(date.getMinutes()).padStart(2, "0"),
        ss: String(date.getSeconds()).padStart(2, "0")
      };
      const regex = /YYYY|MM|DD|hh|mm|ss/g;
      return fm.replace(regex, match => replacements[match]);
    },
    // 复制文案
    copyText: function (t, msg = "Copy Success") {
      navigator.clipboard
        .writeText(t)
        .then(() => (msg || "") != "" && this.toast(msg))
        .catch(error => console.log("Copy Error", error));
    },
    check: {
      phone: phone => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(phone),
      email: email => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
      idcard: idcard => /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(idcard),
      url: url => /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(url),
      ua: () => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|OperaMini/i.test(userAgent);
        const isIos = /iPhone|iPad|iPod/i.test(userAgent);
        const isMac = /\b(Macintosh|Mac)\b/.test(userAgent);
        return { windows: !isMobile && !isMac, mac: isMac, android: isMobile && !isIos, ios: isIos };
      }
    },
    wait: async (time = 1666) => new Promise(resolve => setTimeout(resolve, time)),
    // https://github.com/nextapps-de/spotlight
    imgLightBoxInit: vhDomArr => {
      vhDomArr &&
        vhDomArr.length > 0 &&
        vhDomArr.forEach(i => {
          i.classList.add("ξvh-lightbox");
        });
      (function () {
        "use strict";
        var aa = {};
        function ba(a) {
          for (var b = a.classList, c = {}, d = 0; d < b.length; d++) c[b[d]] = 1;
          a.a = c;
          a.c = b;
        }
        function e(a, b) {
          a = g(a);
          var c = "string" === typeof b;
          if (a.length) for (var d = 0; d < a.length; d++) (c ? ca : da)(a[d], b);
          else (c ? ca : da)(a, b);
        }
        function da(a, b) {
          for (var c = 0; c < b.length; c++) ca(a, b[c]);
        }
        function ca(a, b) {
          a.a || ba(a);
          a.a[b] || ((a.a[b] = 1), a.c.add(b));
        }
        function h(a, b) {
          a = g(a);
          var c = "string" === typeof b;
          if (a.length) for (var d = 0; d < a.length; d++) (c ? ea : fa)(a[d], b);
          else (c ? ea : fa)(a, b);
        }
        function fa(a, b) {
          for (var c = 0; c < b.length; c++) ea(a, b[c]);
        }
        function ea(a, b) {
          a.a || ba(a);
          a.a[b] && ((a.a[b] = 0), a.c.remove(b));
        }
        function k(a, b, c) {
          a = g(a);
          var d = "string" !== typeof b && Object.keys(b);
          if (a.length) for (var f = 0; f < a.length; f++) (d ? ha : ia)(a[f], b, d || c, void 0);
          else (d ? ha : ia)(a, b, d || c, void 0);
        }
        function ha(a, b, c, d) {
          for (var f = 0; f < c.length; f++) {
            var p = c[f];
            ia(a, p, b[p], d);
          }
        }
        function ia(a, b, c, d) {
          var f = a.f;
          f || (a.f = f = {});
          f[b] !== c && ((f[b] = c), (a.g || (a.g = a.style)).setProperty(aa[b] || (aa[b] = b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()), c, d ? "important" : null));
        }
        var ja = 0;
        function l(a, b, c) {
          k(a, "transition", "none");
          k(a, b, c);
          ja || (ja = a.clientTop && 0);
          k(a, "transition", "");
        }
        function ka(a, b) {
          b || (b = "");
          a = g(a);
          if (a.length)
            for (var c = 0; c < a.length; c++) {
              var d = a[c],
                f = b;
              d.b !== f && ((d.b = f), (d.textContent = f));
            }
          else a.b !== b && ((a.b = b), (a.textContent = b));
        }
        function g(a) {
          return "string" === typeof a ? document.querySelectorAll(a) : a;
        }
        function m(a, b) {
          return (b || document).getElementsByClassName(a);
        }
        function la(a, b, c, d) {
          ma("add", a, b, c, d);
        }
        function na(a, b, c, d) {
          ma("remove", a, b, c, d);
        }
        function ma(a, b, c, d, f) {
          b[a + "EventListener"](c || "click", d, "undefined" === typeof f ? !0 : f);
        }
        function n(a, b) {
          a || (a = window.event);
          a && (b || a.preventDefault(), a.stopImmediatePropagation(), (a.returnValue = !1));
          return !1;
        }
        var oa = document.createElement("style");
        oa.innerHTML =
          "@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#ξvh-lightbox,#ξvh-lightbox .drag,#ξvh-lightbox .preloader,#ξvh-lightbox .scene{top:0;left:0;width:100vw;height:100vh}#ξvh-lightbox .arrow,#ξvh-lightbox .icon{cursor:pointer;background-repeat:no-repeat}#ξvh-lightbox{position:fixed;z-index:99999;color:#fff;background-color:#000;visibility:hidden;opacity:0;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:visibility .25s ease,opacity .25s ease;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;contain:layout size paint style;touch-action:none;-webkit-tap-highlight-color:transparent}#ξvh-lightbox.show{opacity:1;visibility:visible;transition:none}#ξvh-lightbox.show .pane,#ξvh-lightbox.show .scene{will-change:transform}#ξvh-lightbox.show .scene img{will-change:transform,opacity}#ξvh-lightbox .preloader{position:absolute;background-position:center center;background-repeat:no-repeat;background-size:42px 42px;visibility:hidden}#ξvh-lightbox .preloader.show{transition:visibility 0s linear .25s;visibility:visible}#ξvh-lightbox .drag{position:absolute}#ξvh-lightbox .scene{position:absolute;transition:transform 1s cubic-bezier(.1,1,.1,1);contain:layout size style;pointer-events:none}#ξvh-lightbox .scene img{display:inline-block;position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;opacity:1;margin:0;padding:0;border:0;transform:translate(-50%,-50%) scale(1) perspective(100vw);transition:transform 1s cubic-bezier(.1,1,.1,1),opacity 1s cubic-bezier(.3,1,.3,1);transform-style:preserve-3d;contain:layout paint style;visibility:hidden}#ξvh-lightbox .header,#ξvh-lightbox .pane{position:absolute;top:0;width:100%;height:100%;contain:layout size style}#ξvh-lightbox .header{height:50px;text-align:right;background-color:rgba(0,0,0,.45);transform:translateY(-100px);transition:transform .35s ease-out;contain:layout size paint style}#ξvh-lightbox .header:hover,#ξvh-lightbox.menu .header{transform:translateY(0)}#ξvh-lightbox .header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:50px;height:80px;margin-top: -20px;padding-right:20px;opacity:.5}#ξvh-lightbox .progress{position:absolute;top:0;width:100%;height:3px;background-color:rgba(255,255,255,.45);transform:translateX(-100%);transition:transform 1s linear}#ξvh-lightbox .arrow,#ξvh-lightbox .footer{position:absolute;background-color:rgba(0,0,0,.45)}#ξvh-lightbox .footer{bottom:0;line-height:1.35em;padding:20px 25px;text-align:left;pointer-events:none;contain:layout paint style}#ξvh-lightbox .footer .title{font-size:125%;padding-bottom:10px}#ξvh-lightbox .page{float:left;width:auto;padding-left:20px;line-height:90px}#ξvh-lightbox .icon{background-position:left center;background-size:21px 21px;transition:opacity .2s ease-out}#ξvh-lightbox .fullscreen{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9Ii0xIC0xIDI2IDI2IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+)}#ξvh-lightbox .fullscreen.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIvPjwvc3ZnPg==)}#ξvh-lightbox .autofit{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9Ijk2cHgiIHZpZXdCb3g9IjAgMCA5NiA5NiIgd2lkdGg9Ijk2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTAgNTApIiBmaWxsPSIjZmZmIiBkPSJNNzEuMzExLDgwQzY5LjY3LDg0LjY2LDY1LjIzLDg4LDYwLDg4SDIwYy02LjYzLDAtMTItNS4zNy0xMi0xMlYzNmMwLTUuMjMsMy4zNC05LjY3LDgtMTEuMzExVjc2YzAsMi4yMSwxLjc5LDQsNCw0SDcxLjMxMSAgeiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSIgZmlsbD0iI2ZmZiIgZD0iTTc2LDhIMzZjLTYuNjMsMC0xMiw1LjM3LTEyLDEydjQwYzAsNi42Myw1LjM3LDEyLDEyLDEyaDQwYzYuNjMsMCwxMi01LjM3LDEyLTEyVjIwQzg4LDEzLjM3LDgyLjYzLDgsNzYsOHogTTgwLDYwICBjMCwyLjIxLTEuNzksNC00LDRIMzZjLTIuMjEsMC00LTEuNzktNC00VjIwYzAtMi4yMSwxLjc5LTQsNC00aDQwYzIuMjEsMCw0LDEuNzksNCw0VjYweiIvPjwvc3ZnPg==)}#ξvh-lightbox .zoom-out{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4=)}#ξvh-lightbox .zoom-in{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg==)}#ξvh-lightbox .theme{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMiAyIDIwIDIwIiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIsNGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFMxNi40MTgsNCwxMiw0eiBNMTIsMThjLTMuMzE0LDAtNi0yLjY4Ni02LTZzMi42ODYtNiw2LTZzNiwyLjY4Niw2LDYgUzE1LjMxNCwxOCwxMiwxOHoiLz48cGF0aCBkPSJNMTIsN3YxMGMyLjc1NywwLDUtMi4yNDMsNS01UzE0Ljc1Nyw3LDEyLDd6Ii8+PC9nPjwvc3ZnPg==)}#ξvh-lightbox .player{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAgOCAxNiAxMiAxMCAxNiAxMCA4Ii8+PC9zdmc+)}#ξvh-lightbox .player.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTUiIHkyPSI5Ii8+PGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxNSIgeTI9IjkiLz48L3N2Zz4=);animation:pulsate 1s ease infinite}#ξvh-lightbox .close{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIyIDIgMjAgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZSB4MT0iMTgiIHgyPSI2IiB5MT0iNiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIvPjwvc3ZnPg==)}#ξvh-lightbox .preloader{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMTUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTggMTgiIHRvPSIzNjAgMTggMTgiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvZz48L2c+PC9zdmc+)}#ξvh-lightbox .arrow{top:50%;left:20px;width:50px;height:50px;border-radius:100%;margin-top:-25px;padding:10px;transform:translateX(-100px);transition:transform .35s ease-out,opacity .2s ease-out;box-sizing:border-box;background-position:center center;background-size:30px 30px;opacity:.65;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz48L3N2Zz4=)}#ξvh-lightbox .arrow-right{left:auto;right:20px;transform:translateX(100px) scaleX(-1)}#ξvh-lightbox.menu .arrow-left{transform:translateX(0)}#ξvh-lightbox.menu .arrow-right{transform:translateX(0) scaleX(-1)}#ξvh-lightbox .arrow-left:hover,#ξvh-lightbox .arrow-right:hover,#ξvh-lightbox .icon:hover{opacity:1;animation:none}#ξvh-lightbox.white{color:#fff;background-color:#fff}#ξvh-lightbox.white .arrow,#ξvh-lightbox.white .footer,#ξvh-lightbox.white .header,#ξvh-lightbox.white .preloader,#ξvh-lightbox.white .progress{filter:invert(1)}.hide-scrollbars{overflow:-moz-hidden-unscrollable;-ms-overflow-style:none}.hide-scrollbars::-webkit-scrollbar{width:0}@media (max-width:800px){#ξvh-lightbox .header div{width:50px}#ξvh-lightbox .footer{font-size:12px}#ξvh-lightbox .arrow{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}#ξvh-lightbox .preloader{background-size:30px 30px}}@media (max-width:400px),(max-height:400px){#ξvh-lightbox .fullscreen{display:none!important}}";
        document.getElementsByTagName("head")[0].appendChild(oa);
        var q = "theme fullscreen autofit zoom-in zoom-out page title description player progress".split(" "),
          r,
          t,
          pa,
          qa,
          x,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H,
          ra,
          I,
          J,
          K,
          L,
          sa,
          ta,
          M,
          N,
          O,
          P,
          Q,
          ua,
          va,
          wa,
          xa,
          ya,
          R,
          za,
          Aa,
          Ba,
          Ca,
          S,
          Da,
          T,
          V,
          W,
          Ea;
        function Fa(a, b, c) {
          this.src = a;
          this.title = b;
          this.description = c;
        }
        function Ga(a, b) {
          if ((J = a.length)) {
            O || (O = m("pane", Q));
            var c = O.length,
              d = K.title,
              f = K.description;
            W = Array(J);
            for (var p = 0; p < J; p++) {
              var u = a[p],
                v = u.dataset;
              if (p >= c) {
                var w = O[0].cloneNode(!1);
                k(w, "left", 100 * p + "%");
                O[0].parentNode.appendChild(w);
              }
              w = void 0;
              W[p] = new Fa((v && (v.href || v.src)) || u.src || u.href, (v && v.title) || u.title || ((w = (u || document).getElementsByTagName("img")).length && w[0].alt) || d || "", (v && v.description) || u.description || f || "");
            }
            I = b || 1;
            l(M, "transform", "translateX(-" + 100 * (I - 1) + "%)");
            Ha();
          }
        }
        function Ia(a, b, c, d) {
          if (d || a[c]) K[c] = (b && b[c]) || d;
        }
        function Ja(a, b) {
          K = {};
          b && Ka(b);
          Ka(a);
          Ia(a, b, "description");
          Ia(a, b, "title");
          Ia(a, b, "prefetch", !0);
          Ia(a, b, "preloader", !0);
          L = K.infinite;
          L = "undefined" !== typeof L && "false" !== L;
          sa = "false" !== K.progress;
          ta = 1 * K.player || 7e3;
          if ((a = K.zoom) || "" === a) (K["zoom-in"] = K["zoom-out"] = a), delete K.zoom;
          if ((a = K.control) || "" === a) {
            a = "string" === typeof a ? a.split(",") : a;
            for (b = 0; b < q.length; b++) K[q[b]] = "false";
            for (b = 0; b < a.length; b++) {
              var c = a[b].trim();
              "zoom" === c ? (K["zoom-in"] = K["zoom-out"] = "true") : (K[c] = "true");
            }
          }
          for (a = 0; a < q.length; a++) (b = q[a]), k(m(b, Q)[0], "display", "false" === K[b] ? "none" : "");
          (ra = K.theme) ? La() : (ra = "white");
        }
        function Ka(a) {
          for (var b = K, c = Object.keys(a), d = 0; d < c.length; d++) {
            var f = c[d];
            b[f] = "" + a[f];
          }
        }
        function Ma() {
          var a = I;
          N = O[a - 1];
          P = N.firstElementChild;
          I = a;
          if (!P) {
            var b = "false" !== K.preloader;
            P = new Image();
            P.onload = function () {
              b && h(Ca, "show");
              W && ((z = this.width), (A = this.height), k(this, { visibility: "visible", opacity: 1, transform: "" }), "false" !== K.prefetch && a < J && (new Image().src = W[a].src));
            };
            P.onerror = function () {
              N.removeChild(this);
            };
            N.appendChild(P);
            P.src = W[a - 1].src;
            b && e(Ca, "show");
            return !b;
          }
          return !0;
        }
        la(document, "", Na);
        la(
          document,
          "DOMContentLoaded",
          function () {
            Q = document.createElement("div");
            Q.id = "ξvh-lightbox";
            Q.innerHTML =
              '<div class=drag></div><div class=preloader></div><div class=scene><div class=pane></div></div><div class=header><div class=page></div><div class="icon fullscreen"></div><div class="icon autofit"></div><div class="icon zoom-out"></div><div class="icon zoom-in"></div><div class="icon theme"></div><div class="icon player"></div><div class="icon close"></div></div><div class=progress></div><div class="arrow arrow-left"></div><div class="arrow arrow-right"></div><div class=footer><div class=title></div><div class=description></div></div>';
            k(Q, "transition", "none");
            document.body.appendChild(Q);
            M = m("scene", Q)[0];
            ua = m("footer", Q)[0];
            va = m("title", ua)[0];
            wa = m("description", ua)[0];
            xa = m("arrow-left", Q)[0];
            ya = m("arrow-right", Q)[0];
            R = m("fullscreen", Q)[0];
            za = m("page", Q)[0];
            Aa = m("player", Q)[0];
            Ba = m("progress", Q)[0];
            Ca = m("preloader", Q)[0];
            V = document.documentElement || document.body;
            document.cancelFullScreen || (document.cancelFullScreen = document.exitFullscreen || document.webkitCancelFullScreen || document.webkitExitFullscreen || document.mozCancelFullScreen || function () {});
            V.requestFullScreen || (V.requestFullScreen = V.webkitRequestFullScreen || V.msRequestFullScreen || V.mozRequestFullScreen || k(R, "display", "none") || function () {});
            var a = m("drag", Q)[0];
            Ea = [
              [window, "keydown", Oa],
              [window, "wheel", Pa],
              [window, "hashchange", Qa],
              [window, "resize", Ra],
              [a, "mousedown", Sa],
              [a, "mouseleave", Ta],
              [a, "mouseup", Ta],
              [a, "mousemove", Ua],
              [a, "touchstart", Sa, { passive: !1 }],
              [a, "touchcancel", Ta],
              [a, "touchend", Ta],
              [a, "touchmove", Ua, { passive: !0 }],
              [R, "", Va],
              [xa, "", Wa],
              [ya, "", X],
              [Aa, "", Xa],
              [m("autofit", Q)[0], "", Ya],
              [m("zoom-in", Q)[0], "", Za],
              [m("zoom-out", Q)[0], "", $a],
              [m("close", Q)[0], "", ab],
              [m("theme", Q)[0], "", La]
            ];
          },
          { once: !0 }
        );
        function Ra() {
          x = Q.clientWidth;
          y = Q.clientHeight;
          P && ((z = P.width), (A = P.height), bb());
        }
        function bb() {
          k(P, "transform", "translate(-50%, -50%) scale(" + B + ")");
        }
        function cb(a) {
          for (var b = 0; b < Ea.length; b++) {
            var c = Ea[b];
            (a ? la : na)(c[0], c[1], c[2], c[3]);
          }
        }
        function Na(a) {
          var b = db.call(a.target, ".ξvh-lightbox");
          if (b) {
            var c = db.call(b, ".ξvh-lightbox-group"),
              d = m("ξvh-lightbox", c);
            Ja(b.dataset, c && c.dataset);
            for (c = 0; c < d.length; c++)
              if (d[c] === b) {
                Ga(d, c + 1);
                break;
              }
            eb();
            return n(a);
          }
        }
        function Oa(a) {
          if (N)
            switch (a.keyCode) {
              case 8:
                Ya();
                break;
              case 27:
                ab();
                break;
              case 32:
                "false" !== K.player && Xa();
                break;
              case 37:
                Wa();
                break;
              case 39:
                X();
                break;
              case 38:
              case 107:
              case 187:
                Za();
                break;
              case 40:
              case 109:
              case 189:
                $a();
            }
        }
        function Pa(a) {
          N && ((a = a.deltaY), 0 > 0.5 * (0 > a ? 1 : a ? -1 : 0) ? $a() : Za());
        }
        function Qa() {
          N && "#ξvh-lightbox" === location.hash && ab(!0);
        }
        function Xa(a) {
          ("boolean" === typeof a ? a : !S) ? S || ((S = setInterval(X, ta)), e(Aa, "on"), sa && fb()) : S && ((S = clearInterval(S)), h(Aa, "on"), sa && l(Ba, "transform", ""));
          return S;
        }
        function Y() {
          T ? clearTimeout(T) : e(Q, "menu");
          var a = K.autohide;
          T =
            "false" !== a
              ? setTimeout(function () {
                  h(Q, "menu");
                  T = null;
                }, 1 * a || 3e3)
              : 1;
        }
        function gb(a) {
          "boolean" === typeof a && (T = a ? T : 0);
          T ? ((T = clearTimeout(T)), h(Q, "menu")) : Y();
          return n(a);
        }
        function Sa(a) {
          C = !0;
          D = !1;
          var b = hb(a);
          E = z * B <= x;
          pa = b.x;
          qa = b.y;
          return n(a, !0);
        }
        function Ta(a) {
          if (C && !D) return (C = !1), gb(a);
          E && D && (l(M, "transform", "translateX(" + -(100 * (I - 1) - (r / x) * 100) + "%)"), (r < -(y / 10) && X()) || (r > y / 10 && Wa()) || k(M, "transform", "translateX(-" + 100 * (I - 1) + "%)"), (r = 0), (E = !1), k(N, "transform", ""));
          C = !1;
          return n(a);
        }
        function Ua(a) {
          if (C) {
            Da || (Da = requestAnimationFrame(ib));
            var b = hb(a),
              c = (z * B - x) / 2;
            D = !0;
            r -= pa - (pa = b.x);
            E ? (F = !0) : r > c ? (r = c) : 0 < x - r - z * B + c ? (r = x - z * B + c) : (F = !0);
            A * B > y && ((c = (A * B - y) / 2), (t -= qa - (qa = b.y)), t > c ? (t = c) : 0 < y - t - A * B + c ? (t = y - A * B + c) : (F = !0));
          } else Y();
          return n(a, !0);
        }
        function hb(a) {
          var b = a.touches;
          b && (b = b[0]);
          return { x: b ? b.clientX : a.pageX, y: b ? b.clientY : a.pageY };
        }
        function ib(a) {
          F ? (a && (Da = requestAnimationFrame(ib)), k(N, "transform", "translate(" + r + "px, " + t + "px)")) : (Da = null);
          F = !1;
        }
        function Va(a) {
          ("boolean" === typeof a ? a : document.isFullScreen || document.webkitIsFullScreen || document.mozFullScreen) ? (document.cancelFullScreen(), h(R, "on")) : (V.requestFullScreen(), e(R, "on"));
        }
        function Ya(a) {
          "boolean" === typeof a && (G = !a);
          G = 1 === B && !G;
          k(P, { maxHeight: G ? "none" : "", maxWidth: G ? "none" : "", transform: "" });
          z = P.width;
          A = P.height;
          B = 1;
          t = r = 0;
          F = !0;
          ib();
          Y();
        }
        function Za(a) {
          var b = B / 0.65;
          5 >= b && jb((B = b));
          a || Y();
        }
        function jb(a) {
          B = a || 1;
          bb();
        }
        function $a(a) {
          var b = 0.65 * B;
          1 <= b && (jb((B = b)), (t = r = 0), (F = !0), ib());
          a || Y();
        }
        function eb() {
          location.hash = "ξvh-lightbox";
          location.hash = "show";
          k(Q, "transition", "");
          e(V, "hide-scrollbars");
          e(Q, "show");
          cb(!0);
          Ra();
          Y();
        }
        function ab(a) {
          cb(!1);
          history.go(!0 === a ? -1 : -2);
          h(V, "hide-scrollbars");
          h(Q, "show");
          S && Xa(!1);
          P.parentNode.removeChild(P);
          N = P = W = null;
        }
        function Wa() {
          if (1 < I) return Z(I - 1);
          if (S || L) return Z(J);
        }
        function X() {
          if (I < J) return Z(I + 1);
          if (S || L) return Z(1);
        }
        function Z(a) {
          if (!((S && C) || a === I)) {
            S || Y();
            S && sa && fb();
            var b = a > I;
            I = a;
            Ha(b);
            return !0;
          }
        }
        function fb() {
          l(Ba, { transitionDuration: "", transform: "" });
          k(Ba, { transitionDuration: ta + "ms", transform: "translateX(0)" });
        }
        function La(a) {
          "boolean" === typeof a ? (H = a) : ((H = !H), Y());
          H ? e(Q, ra) : h(Q, ra);
        }
        function Ha(a) {
          t = r = 0;
          B = 1;
          var b = K.animation,
            c = !0,
            d = !0,
            f = !0;
          if (b || "" === b) {
            c = d = f = !1;
            b = "string" === typeof b ? b.split(",") : b;
            for (var p = 0; p < b.length; p++) {
              var u = b[p].trim();
              if ("scale" === u) c = !0;
              else if ("fade" === u) d = !0;
              else if ("slide" === u) f = !0;
              else if ("flip" === u) var v = !0;
              else if ("false" !== u) {
                c = d = f = v = !1;
                var w = u;
                break;
              }
            }
          }
          k(M, { transition: f ? "" : "none", transform: "translateX(-" + 100 * (I - 1) + "%)" });
          N && k(N, "transform", "");
          if (P) {
            k(P, { opacity: d ? 0 : 1, transform: "" });
            var U = P;
            setTimeout(function () {
              U && P !== U && U.parentNode && U.parentNode.removeChild(U);
            }, 800);
          }
          f = Ma();
          w && e(P, w);
          l(P, { opacity: d ? 0 : 1, transform: "translate(-50%, -50%)" + (c ? " scale(0.8)" : "") + (v && "undefined" !== typeof a ? " rotateY(" + (a ? "" : "-") + "90deg)" : ""), maxHeight: "", maxWidth: "" });
          f && k(P, { visibility: "visible", opacity: 1, transform: "" });
          w && h(P, w);
          k(N, "transform", "");
          k(xa, "visibility", L || 1 !== I ? "" : "hidden");
          k(ya, "visibility", L || I !== J ? "" : "hidden");
          a = W[I - 1];
          if ((c = a.title || a.description)) ka(va, a.title), ka(wa, a.description);
          k(ua, "visibility", c ? "visible" : "hidden");
          ka(za, I + " / " + J);
        }
        var db =
          Element.prototype.closest ||
          function (a) {
            var b = this;
            for (a = a.substring(1); b && 1 === b.nodeType; ) {
              if (b.classList.contains(a)) return b;
              b = b.parentElement || b.parentNode;
            }
          };
        window.Spotlight = {
          theme: La,
          fullscreen: Va,
          autofit: Ya,
          next: X,
          prev: Wa,
          goto: Z,
          close: ab,
          zoom: jb,
          menu: gb,
          show: function (a, b) {
            setTimeout(function () {
              a ? (b ? Ja(b) : (b = {}), Ga(a, b.index)) : (K = {});
              eb();
            });
          },
          play: Xa
        };
      }).call(window);
    },
    // 防抖
    debounce: (fn, wait = 1000) => {
      let timer = null;
      return function (...args) {
        const ctx = this;
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(() => {
          fn.apply(ctx, args);
        }, wait);
      };
    },
    // 节流
    throttle: (fn, delay = 1000) => {
      let prevTime = 0;
      return function (...args) {
        const nowTime = Date.now();
        if (nowTime - prevTime > delay) {
          prevTime = nowTime;
          fn.apply(this, args);
        }
      };
    }
  };
})();

window.vh = vh;
