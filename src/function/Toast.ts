/**
 * @description: 显示Toast弹窗
 * @param {string} text - 弹窗文本内容，必填项。
 * @param {number} duration - 弹窗持续时间，单位为毫秒。不必填项，默认值为1666。
 * @returns {void}
 */
let toastSetTimeout: any = null;
const Toast = (text: string, duration: number = 1666): void => {
  const hasSty = Array.from(document.styleSheets).some((sty) => {
    try {
      return Array.from(sty.cssRules).some((rule: any) => rule.selectorText && rule.selectorText.includes(".ξvh-toast"));
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
  let vhDiv: HTMLDivElement | null = document.querySelector("body>.ξvh-toast");
  if (!vhDiv) {
    vhDiv = document.createElement("div");
    vhDiv.classList.add("ξvh-toast");
    document.body.appendChild(vhDiv);
  }
  // 初始化隐藏
  vhDiv.style.opacity = "0";
  vhDiv.style.display = "none";
  // 继续执行
  vhDiv.innerText = text;
  vhDiv.style.display = "block";
  setTimeout(() => {
    vhDiv!.style.opacity = "1";
  }, 1);
  if (toastSetTimeout) {
    clearTimeout(toastSetTimeout);
  }
  toastSetTimeout = setTimeout(() => {
    vhDiv!.style.opacity = "0";
    setTimeout(() => {
      vhDiv!.style.display = "none";
    }, 366);
  }, duration);
};

export { Toast };
