/**
 * @description: 防抖函数
 * @param {Function} fn - 需要防抖的函数，必填项。
 * @param {number} wait - 防抖时间，单位为毫秒。不必填项，默认值为1000。
 * @returns {Function}
 */
type Timer = ReturnType<typeof setTimeout>;

const Debounce = <T extends (...args: any[]) => void>(fn: T, wait = 1000) => {
  let timer: Timer | null = null;
  return function (this: any, ...args: Parameters<T>) {
    const ctx = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, wait);
  };
};

export { Debounce };
