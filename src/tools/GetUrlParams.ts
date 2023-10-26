/**
 * @description: 获取当前URL参数
 * @param {string} param - 参数名，必填项。
 * @returns {string|null} 参数值，如果不存在该参数则返回 null。
 */
const getUrlParams = (param: string): string | null => {
  const url = window.location.href;
  const urlParams = new URLSearchParams(url.split("?")[1]);
  return urlParams.get(param);
};

export { getUrlParams };
