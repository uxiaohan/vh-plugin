/**
 * @description: 将文本复制到剪贴板
 * @param {string} text - 需要复制的文本，必填项。
 * @param {string} message - 复制成功后的提示信息，不必填项。默认为空字符串。
 * @returns {void}
 */
const CopyText = (text: string, message: string = "Copy Success"): void => {
  navigator.clipboard
    .writeText(text)
    .then(() => message !== "" && console.log(message))
    .catch((error) => console.log("Copy Error", error));
};

export { CopyText };
