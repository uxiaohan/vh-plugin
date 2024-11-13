/**
 * @description: 显示loading遮罩层
 * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
 * @param {string} color - loading颜色，默认值为#000000，可以是任何有效的CSS颜色值。
 * @return {void}
 */
// #616dd7
const _loadingInit = (status: boolean, opacity: number = 0.6, color: string = "#000000"): void => {
  // 形
  const styleTagsWithvhLoading = Array.from(document.querySelectorAll("style")).filter((i: any) => i.textContent.includes("ξvh-loading"));
  // 无形则有形
  if (styleTagsWithvhLoading.length < 1) {
    // eslint-disable-next-line prettier/prettier
    const vhLoadingStyle = `body>.ξvh-loading{position:fixed;left:0;top:0;box-sizing:border-box;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;transition:all .166s;z-index:-99;pointer-events:none;opacity:0;overflow:hidden}body>.ξvh-loading.ξvh-loading-active{z-index:6666666666666666;pointer-events:auto;opacity:1}body>.ξvh-loading.ξvh-loading-active>.ξvh-loading-span-1,body>.ξvh-loading.ξvh-loading-active>.ξvh-loading-span-2,body>.ξvh-loading.ξvh-loading-active>.ξvh-loading-span-3{position:relative;width:5px;height:5px;margin:3px;border-radius:5px}body>.ξvh-loading.ξvh-loading-active>.ξvh-loading-span-1{-webkit-animation:scale .8s ease infinite;animation:vh_loading_animation .8s ease infinite}body>.ξvh-loading.ξvh-loading-active>.ξvh-loading-span-2{-webkit-animation:scale .8s ease .2s infinite;animation:vh_loading_animation .8s ease .2s infinite}body>.ξvh-loading.ξvh-loading-active>.ξvh-loading-span-3{-webkit-animation:scale .8s ease .4s infinite;animation:vh_loading_animation .8s ease .4s infinite}@-webkit-keyframes vh_loading_animation{50%{height:25px}0%{height:5px}}@keyframes vh_loading_animation{50%{height:25px}0%{height:5px}}`;
    const styleTag = document.querySelector("style") || document.createElement("style");
    styleTag.appendChild(document.createTextNode(vhLoadingStyle));
    document.head.appendChild(styleTag);
  }
  // 无则有
  let vhLoadingFillDom: any = document.querySelector(".ξvh-loading");
  let vhLoadingDom_1: any = document.querySelector(".ξvh-loading-span-1");
  let vhLoadingDom_2: any = document.querySelector(".ξvh-loading-span-2");
  let vhLoadingDom_3: any = document.querySelector(".ξvh-loading-span-3");
  if (!vhLoadingFillDom) {
    vhLoadingFillDom = document.createElement("section");
    vhLoadingFillDom.classList.add("ξvh-loading");
    vhLoadingDom_1 = document.createElement("span");
    vhLoadingDom_2 = document.createElement("span");
    vhLoadingDom_3 = document.createElement("span");
    [vhLoadingDom_1, vhLoadingDom_2, vhLoadingDom_3].forEach((i: any, idx: number) => {
      i.classList.add(`ξvh-loading-span-${idx + 1}`);
      vhLoadingFillDom.appendChild(i);
    });
    document.body.appendChild(vhLoadingFillDom);
  }
  // 显
  vhLoadingFillDom.style.background = `rgba(255,255,255,${opacity})`;
  [vhLoadingDom_1, vhLoadingDom_2, vhLoadingDom_3].forEach((i: any) => (i.style.background = color));
  // 存在即替换 终有无
  status ? vhLoadingFillDom.classList.add("ξvh-loading-active") : vhLoadingFillDom.classList.remove("ξvh-loading-active");
};

/**
 * @description: 显示loading遮罩层
 * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
 * @param {string} color - loading颜色，默认值为#000000，可以是任何有效的CSS颜色值。
 * @return {void}
 */
const showLoading = (color: string = "#000000", opacity: number = 0.6): void => {
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
