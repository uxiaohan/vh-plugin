/**
 * @description: 将文本复制到剪贴板
 * @param {string} text - 需要复制的文本，必填项。
 * @param {string} message - 复制成功后的提示信息，不必填项。默认为空字符串。
 * @returns {void}
 */
import { Toast } from "../function/Toast";

const CopyText = async (text: string, message: string = "Copy Success"): Promise<any> => {
  let vhCopyStatus: any = false;
  try {
    await navigator.clipboard.writeText(text);
    vhCopyStatus = true;
  } catch (error) {
    const i = document.createElement("textarea");
    i.value = text;
    document.body.appendChild(i);
    i.select();
    vhCopyStatus = document.execCommand("copy");
    document.body.removeChild(i);
  }
  vhCopyStatus && message && Toast("Copy Success");
  return vhCopyStatus ? true : false;
};

export { CopyText };
