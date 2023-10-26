/**
 * @description: 显示loading遮罩层
 * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
 * @param {string} color - loading颜色，默认值为#567AD0，可以是任何有效的CSS颜色值。
 * @return {void}
 */
const _loadingInit = (status: boolean, opacity: number = 0.6, color: string = "#567AD0"): void => {
  const hasSty = Array.from(document.styleSheets).some((sty) => {
    try {
      return Array.from(sty.cssRules).some((rule: any) => rule.selectorText && rule.selectorText.includes(".ξvh-loading"));
    } catch (e) {
      return false;
    }
  });
  if (!hasSty) {
    const vhStyle =
      "body .ξvh-loading{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;z-index:9999998}body .ξvh-loading>.ξvh-load{border-radius:50%;width:28px;height:28px;border:3.6px solid #f3f3f3;animation:ξvh-spin 1s linear infinite;}@media screen and (max-width:992px){body .ξvh-loading>.ξvh-load{width:6.6vw;height:6.6vw;border-width:0.96vw;}}@keyframes ξvh-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
    const styE = document.createElement("style");
    styE.textContent = vhStyle;
    document.head.appendChild(styE);
  }
  let vhDiv: HTMLDivElement | null = document.querySelector("body>.ξvh-loading");
  let loadDiv: HTMLDivElement | null = document.querySelector("body>.ξvh-loading>.ξvh-load");
  if (!vhDiv) {
    vhDiv = document.createElement("div");
    vhDiv.classList.add("ξvh-loading");
    loadDiv = document.createElement("div");
    loadDiv.classList.add("ξvh-load");
    vhDiv.appendChild(loadDiv);
    document.body.appendChild(vhDiv);
  }
  vhDiv.style.backgroundColor = `rgba(0,0,0,${opacity})`;
  loadDiv!.style.borderTopColor = color;
  vhDiv.style.display = status ? "flex" : "none";
};

/**
 * @description: 显示loading遮罩层
 * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
 * @param {string} color - loading颜色，默认值为#567AD0，可以是任何有效的CSS颜色值。
 * @return {void}
 */
const showLoading = (opacity: number, color: string): void => {
  _loadingInit(true, opacity, color);
};

/**
 * @description: 隐藏loading遮罩层
 * @return {void}
 */
const hideLoading = (): void => {
  _loadingInit(false);
};

export { showLoading, hideLoading };
