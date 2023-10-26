/**
 * @description: 将JSON对象转换为URL参数字符串
 * @param {Record<string, string>} json - JSON对象，必填项。
 * @returns {string} 类似 a=1&b=2&c=3 的URL参数字符串。
 */
declare const jsonToUrlParams: (json: Record<string, any>) => string;
export { jsonToUrlParams };
