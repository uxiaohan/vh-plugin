## Han 的 JS 插件库

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Installing

### Package manager

Using npm:

```bash
$ npm install vh-plugin
```

Using yarn:

```bash
$ yarn add vh-plugin
```

## USE

### CDN

Using jsDelivr CDN (ES5 UMD browser module):

```html
<script src="https://cdn.jsdelivr.net/npm/vh-plugin@latest/dist/vh-plugin.min.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/vh-plugin@latest/dist/vh-plugin.min.js"></script>
```

## Example

```js
/**
 * 显示Toast消息提示框
 * @param {string} text - 提示框内容，必填项。
 * @param {number} duration - 提示框存在时长，默认值为1666毫秒。
 */
vh.toast(text, duration);
```

```js
/**
 * 显示loading遮罩层
 * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
 * @param {string} color - loading颜色，默认值为#567AD0，可以是任何有效的CSS颜色值。
 */
vh.showLoading();
```

```js
/**
 * 隐藏loading遮罩层
 */
vh.hideLoading();
```

```js
/**
 * 获取当前URL参数
 * @param {string} param - 参数名，必填项。
 * @returns {string|null} 参数值，如果不存在该参数则返回 null。
 */
vh.getUrlParams(param);
```

```js
/**
 * 获取当前URL所有参数
 * @returns {object} 包含所有参数的 JSON 对象。
 */
vh.getUrlParamsJson();
```

```js
/**
 * 将JSON对象转换为URL参数字符串
 * @param {object} json - JSON对象，必填项。
 * @returns {string} 类似 a=1&b=2&c=3 的URL参数字符串。
 */
vh.jsonToUrlParams(json);
```

```js
/**
 * 将时间戳格式化为指定格式的时间字符串
 * @param {number} time - 时间戳，必填项。支持10位和13位时间戳。
 * @param {string} format - 时间格式字符串，不必填项。默认格式为YYYY-MM-DD hh:mm:ss。传入格式时，YYYY、MM、DD、hh、mm、ss不可改变，其他可改变。
 * @returns {string} 指定格式的时间字符串。
 */
vh.timeFormat(time, format);
```

```js
/**
 * 复制文本到剪贴板
 * @param {string} text - 需要复制的文本，必填项。
 * @param {string} msg - 复制成功后的提示消息，不必填项。默认为 "Copy Success"。传入任意非或空字符串时，不弹出消息提示。
 */
vh.copyText(text, msg);
```

```js
/**
 * 根据用户代理字符串判断当前设备类型
 * @returns {Object} 返回一个对象，包含了 `windows`、`mac`、`android` 和 `ios` 四个属性，分别表示当前设备类型
 */
vh.checkUA();
```

```js
/**
 * 暂停一段时间后执行代码
 * @param {number} time - 暂停的时间（单位：毫秒），不必填项。默认为 1666。
 */
vh.wait(time);
```
