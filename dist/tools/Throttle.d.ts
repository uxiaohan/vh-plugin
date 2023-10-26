/**
 * @description: 节流函数
 * @param {Function} fn - 需要节流的函数，必填项。
 * @param {number} delay - 节流时间，单位为毫秒。不必填项，默认值为1000。
 * @returns {Function}
 */
declare const Throttle: <T extends (...args: any[]) => void>(fn: T, delay?: number) => (this: any, ...args: Parameters<T>) => void;
export { Throttle };
