/**
 * @description: 获取当前URL所有参数
 * @returns {Record<string, string>} 包含所有参数的 JSON 对象。
 */
const getUrlParamsJson = (): Record<string, string> => {
  const urlParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlParams.entries());
};

export { getUrlParamsJson };
