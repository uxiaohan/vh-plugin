/**
 * @description: 无视浏览器风险打开URL
 * @param {string} url - 需要打开的URL，必填项。
 * @param {string} filename - 如果是下载文件，需要指定文件名。为空则不下载，非必填项。
 * @param {string} target - 打开方式，默认为 "_blank"，非必填项。
 * @returns {void}
 */
declare const OpenURL: (url: string, filename?: string, target?: string) => Promise<any>;
export { OpenURL };
