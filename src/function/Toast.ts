/**
 * @description: 显示Toast弹窗
 * @param {string} text - 弹窗文本内容，必填项。
 * @param {number} duration - 弹窗持续时间，单位为毫秒。不必填项，默认值为1666。
 * @returns {void}
 */

let vhMessageSettimeout: any = null;
const Toast = (text: string): void => {
  // 形
  // eslint-disable-next-line prettier/prettier
  const vhMessageStyle = 'body > .ξvh-message {pointer-events: none;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;padding: 12.88px 14.88px;display: flex;align-items: center;height: max-content;width: max-content;max-width: 318px;color: #fff;border-radius: 8.88px;background-color: rgba(0, 0, 0, 0.6);font-size: 14px;line-height: 18px;opacity: 0;z-index: -1;transition: all 0.18s;font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;}body > .ξvh-message.active {pointer-events: auto;opacity: 1;z-index: 566;}';
  const styleTagsWithvhMessage = Array.from(document.querySelectorAll("style")).filter((i: any) => i.textContent.includes("ξvh-message"));
  // 无形则有形
  if (styleTagsWithvhMessage.length < 1) {
    const styleTag = document.querySelector("style") || document.createElement("style");
    styleTag.appendChild(document.createTextNode(vhMessageStyle));
    document.head.appendChild(styleTag);
  }
  // 无则有
  let vhMsgDom: any = document.querySelector(".ξvh-message");
  if (!vhMsgDom) {
    vhMsgDom = document.createElement("section");
    vhMsgDom.classList.add("ξvh-message");
    document.body.appendChild(vhMsgDom);
  }
  // 有则无
  clearTimeout(vhMessageSettimeout);
  // 存在即替换 终有无
  vhMsgDom.innerHTML = text;
  setTimeout(() => {
    vhMsgDom.classList.add("active");
    vhMessageSettimeout = setTimeout(() => vhMsgDom.classList.remove("active"), 2666);
  }, 6);
};

export { Toast };
