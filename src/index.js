// JS压缩地址
// https://www.qianbo.com.cn/Tool/Beautify/Js-Compress.html
const vh = (() => {
    console.log('vh-plugin v1.0.0');
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
                const vhStyle = `.ξvh-toast{font-family:-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif!important;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;top:50%;left:50%;display:none;padding:16px 22px;width:max-content;max-width:566px;border-radius:6.6px;font-size:14.6px;line-height:1.6;font-weight:normal;transform:translate(-50%,-50%);background-color:rgba(0,0,0,0.66);color:#fff;opacity:0;z-index:9999999;transition:all 366ms;word-wrap:break-word;overflow-wrap:break-word;overflow:hidden;}@media screen and (max-width:992px){body{.ξvh-toast{padding:4.44vw 6.11vw !important;max-width:56.66vw !important;border-radius:1.8vw !important;font-size:3.6vw !important;}}}`;
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
        _loadingInit: (status, opacity = 0.6, color = '#567AD0') => {
            const hasSty = Array.from(document.styleSheets).some(sty => {
                try {
                    return Array.from(sty.cssRules).some(rule => rule.selectorText && rule.selectorText.includes(".ξvh-loading"));
                } catch (e) {
                    return false;
                }
            });

            if (!hasSty) {
                const vhStyle = 'body .ξvh-loading{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;z-index:9999998}body .ξvh-loading>.ξvh-load{border-radius:50%;width:28px;height:28px;border:3.6px solid #f3f3f3;animation:ξvh-spin 1s linear infinite;}@media screen and (max-width:992px){body .ξvh-loading>.ξvh-load{width:6.6vw;height:6.6vw;border-width:0.96vw;}}@keyframes ξvh-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}';
                const styE = document.createElement("style");
                styE.textContent = vhStyle;
                document.head.appendChild(styE);
            }
            let vhDiv = document.querySelector('body>.ξvh-loading');
            let loadDiv = document.querySelector('body>.ξvh-loading>.ξvh-load');
            if (!vhDiv) {
                vhDiv = document.createElement('div');
                vhDiv.classList.add('ξvh-loading');
                loadDiv = document.createElement('div');
                loadDiv.classList.add('ξvh-load');
                vhDiv.appendChild(loadDiv);
                document.body.appendChild(vhDiv);
            }
            vhDiv.style.backgroundColor = `rgba(0,0,0,${opacity})`;
            loadDiv.style.borderTopColor = color;
            vhDiv.style.display = status ? "flex" : 'none';
        },
        showLoading: function (opacity, color) { this._loadingInit(true, opacity, color) },
        hideLoading: function () { this._loadingInit(false) },
        // 获取URL参数
        getUrlParams: (param) => {
            const url = window.location.href;
            const urlParams = new URLSearchParams(url.split('?')[1]);
            return urlParams.get(param);
        },
        // 获取URL参数JSON
        getUrlParamsJson: () => {
            const urlParams = new URLSearchParams(window.location.search);
            return Object.fromEntries(urlParams.entries());
        },
        // JSON转URL参数
        jsonToUrlParams: (json) => {
            return new URLSearchParams(json).toString();
        },
        // 时间戳转时间
        timeFormat: (t, fm = 'YYYY-MM-DD hh:mm:ss') => {
            t = String(t).length === 13 ? t : t * 1000;
            const date = new Date(t);
            const replacements = {
                'YYYY': date.getFullYear(),
                'MM': String(date.getMonth() + 1).padStart(2, '0'),
                'DD': String(date.getDate()).padStart(2, '0'),
                'hh': String(date.getHours()).padStart(2, '0'),
                'mm': String(date.getMinutes()).padStart(2, '0'),
                'ss': String(date.getSeconds()).padStart(2, '0')
            };
            const regex = /YYYY|MM|DD|hh|mm|ss/g;
            return fm.replace(regex, match => replacements[match]);
        },
        // 复制文案
        copyText: function (t, msg = 'Copy Success') {
            navigator.clipboard.writeText(t).then(() => ((msg || '') != '') && this.toast(msg)).catch((error) => console.log('Copy Error', error));
        },
        checkUA: () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isMobile = /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|OperaMini/i.test(userAgent);
            const isIos = /iPhone|iPad|iPod/i.test(userAgent);
            const isMac = /\b(Macintosh|Mac)\b/.test(userAgent);
            return { windows: !isMobile && !isMac, mac: isMac, android: isMobile && !isIos, ios: isIos };
        },
        wait: async (time = 1666) => new Promise((resolve) => setTimeout(resolve, time)),
    };
})();