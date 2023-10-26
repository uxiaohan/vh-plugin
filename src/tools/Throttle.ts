/**
 * @description: 节流函数
 * @param {Function} fn - 需要节流的函数，必填项。
 * @param {number} delay - 节流时间，单位为毫秒。不必填项，默认值为1000。
 * @returns {Function}
 */
const Throttle = <T extends (...args: any[]) => void>(fn: T, delay: number = 1000): Function => {
  let prevTime = 0;
  return function (this: any, ...args: Parameters<T>) {
    const nowTime = Date.now();
    if (nowTime - prevTime > delay) {
      prevTime = nowTime;
      fn.apply(this, args);
    }
  };
};

export { Throttle };
