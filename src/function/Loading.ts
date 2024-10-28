/**
 * @description: 显示loading遮罩层
 * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
 * @param {string} color - loading颜色，默认值为#6364DC，可以是任何有效的CSS颜色值。
 * @return {void}
 */
// #616dd7
const _loadingInit = (status: boolean, opacity: number = 0.6, color: string = "#6364DC"): void => {
  // 形
  const styleTagsWithvhLoading = Array.from(document.querySelectorAll("style")).filter((i: any) => i.textContent.includes("ξvh-loading"));
  // 无形则有形
  if (styleTagsWithvhLoading.length < 1) {
    // eslint-disable-next-line prettier/prettier
    const vhLoadingStyle = `body>.ξvh-loading{pointer-events:none;opacity:0;position:fixed;left:0;top:0;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;z-index:6666666666666666}body>.ξvh-loading.ξvh-loading-active{pointer-events:auto;opacity:1}body>.ξvh-loading>.ξvh-loading-load{position:relative;border-radius:50%;width:28px;height:28px;border:3.6px solid #fff;animation:vh-loading-spin 1000ms linear infinite}@keyframes vh-loading-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;
    const styleTag = document.querySelector("style") || document.createElement("style");
    styleTag.appendChild(document.createTextNode(vhLoadingStyle));
    document.head.appendChild(styleTag);
  }
  // 无则有
  let vhLoadingFillDom: any = document.querySelector(".ξvh-loading");
  let vhLoadingDom: any = document.querySelector(".ξvh-loading-load");
  if (!vhLoadingFillDom) {
    vhLoadingFillDom = document.createElement("section");
    vhLoadingFillDom.classList.add("ξvh-loading");
    vhLoadingDom = document.createElement("section");
    vhLoadingDom.classList.add("ξvh-loading-load");
    vhLoadingFillDom.appendChild(vhLoadingDom);
    document.body.appendChild(vhLoadingFillDom);
  }
  // 显
  vhLoadingFillDom.style.backgroundColor = `rgba(0,0,0,${opacity})`;
  vhLoadingDom.style.borderTopColor = color;
  // 存在即替换 终有无
  status ? vhLoadingFillDom.classList.add("ξvh-loading-active") : vhLoadingFillDom.classList.remove("ξvh-loading-active");
};

/**
 * @description: 显示loading遮罩层
 * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
 * @param {string} color - loading颜色，默认值为#6364DC，可以是任何有效的CSS颜色值。
 * @return {void}
 */
const showLoading = (color: string = "#6364DC", opacity: number = 0.6): void => {
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
