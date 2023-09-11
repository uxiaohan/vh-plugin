### Han 的 JS 插件库

```js
/**
 * 显示Toast消息提示框
 * @param {string} text - 提示框内容，必填项。
 * @param {number} duration - 提示框存在时长，默认值为1666毫秒。
 */
vh.toast(text, duration);
/**
 * 显示loading遮罩层
 * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
 * @param {string} color - loading颜色，默认值为#567AD0，可以是任何有效的CSS颜色值。
 */
vh.showLoading();
/**
 * 隐藏loading遮罩层
 */
vh.hideLoading();
/**
 * 获取当前URL参数
 * @param {string} param - 参数名，必填项。
 * @returns {string|null} 参数值，如果不存在该参数则返回 null。
 */
vh.getUrlParams(param);
/**
 * 获取当前URL所有参数
 * @returns {object} 包含所有参数的 JSON 对象。
 */
vh.getUrlParamsJson();
/**
 * 将JSON对象转换为URL参数字符串
 * @param {object} json - JSON对象，必填项。
 * @returns {string} 类似 a=1&b=2&c=3 的URL参数字符串。
 */
vh.jsonToUrlParams(json);
/**
 * 将时间戳格式化为指定格式的时间字符串
 * @param {number} time - 时间戳，必填项。支持10位和13位时间戳。
 * @param {string} format - 时间格式字符串，不必填项。默认格式为YYYY-MM-DD hh:mm:ss。传入格式时，YYYY、MM、DD、hh、mm、ss不可改变，其他可改变。
 * @returns {string} 指定格式的时间字符串。
 */
vh.timeFormat(time, format);
/**
 * 复制文本到剪贴板
 * @param {string} text - 需要复制的文本，必填项。
 * @param {string} msg - 复制成功后的提示消息，不必填项。默认为 "Copy Success"。传入任意非或空字符串时，不弹出消息提示。
 */
vh.copyText(text, msg);
/**
 * 根据用户代理字符串判断当前设备类型
 * @returns {Object} 返回一个对象，包含了 `windows`、`mac`、`android` 和 `ios` 四个属性，分别表示当前设备类型
 */
vh.checkUA();
/**
 * 暂停一段时间后执行代码
 * @param {number} time - 暂停的时间（单位：毫秒），不必填项。默认为 1666。
 */
vh.wait(time);
```
