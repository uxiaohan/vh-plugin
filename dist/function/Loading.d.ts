/**
 * @description: 显示loading遮罩层
 * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
 * @param {string} color - loading颜色，默认值为#567AD0，可以是任何有效的CSS颜色值。
 * @return {void}
 */
declare const showLoading: (opacity: number, color: string) => void;
/**
 * @description: 隐藏loading遮罩层
 * @return {void}
 */
declare const hideLoading: () => void;
export { showLoading, hideLoading };
