/**
 * @description: 获取当前URL参数
 * @param {string} param - 参数名，必填项。
 * @returns {string|null} 参数值，如果不存在该参数则返回 null。
 */
declare const getUrlParams: (param: string) => string | null;
export { getUrlParams };
