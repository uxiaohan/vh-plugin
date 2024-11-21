/**
 * @description: 无视浏览器风险打开URL
 * @param {string} url - 需要打开的URL，必填项。
 * @param {string} filename - 如果是下载文件，需要指定文件名。为空则不下载，非必填项。
 * @param {string} target - 打开方式，默认为 "_blank"，非必填项。
 * @returns {void}
 */

const OpenURL = async (url: string, filename: string = "", target: string = "_blank"): Promise<any> => {
  const vhOpenWinA: HTMLAnchorElement = document.createElement("a");
  vhOpenWinA.className = "vh-open-new-window-a";
  vhOpenWinA.style.position = "fixed";
  vhOpenWinA.style.left = "0";
  vhOpenWinA.style.top = "0";
  vhOpenWinA.style.opacity = "0";
  vhOpenWinA.style.pointerEvents = "none";
  vhOpenWinA.href = url;
  if (filename) vhOpenWinA.download = filename;
  vhOpenWinA.target = target;
  document.body.appendChild(vhOpenWinA);
  await new Promise((r) => setTimeout(r, 66));
  vhOpenWinA.click();
  vhOpenWinA.remove();
};

export { OpenURL };
