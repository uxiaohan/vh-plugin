/**
 * @description: 防抖函数
 * @param {Function} fn - 需要防抖的函数，必填项。
 * @param {number} wait - 防抖时间，单位为毫秒。不必填项，默认值为1000。
 * @returns {Function}
 */
declare const Debounce: <T extends (...args: any[]) => void>(fn: T, wait?: number) => (this: T, ...args: Parameters<T>) => void;
export { Debounce };
