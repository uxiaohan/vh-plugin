## Han 的 JS 插件库

Team front end tool library

[![npm version](https://badge.fury.io/js/vh-plugin.svg)](https://badge.fury.io/js/vh-plugin)
[![GitHub issues](https://img.shields.io/github/issues/vbs-plus/utils)](https://github.com/vbs-plus/utils/issues)
[![GitHub forks](https://img.shields.io/github/forks/uxiaohan/vh-plugin)](https://github.com/uxiaohan/vh-plugin/network)
[![GitHub stars](https://img.shields.io/github/stars/uxiaohan/vh-plugin)](https://github.com/uxiaohan/vh-plugin/stargazers)
[![GitHub license](https://img.shields.io/github/license/uxiaohan/vh-plugin)](https://github.com/uxiaohan/vh-plugin/blob/main/LICENSE)

## Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                         | Latest ✔                                                                                            | Latest ✔                                                                                         | Latest ✔                                                                                      | Latest ✔                                                                                   | 11 ✔                                                                                                                                   |

## USE

### Mode 1

Using jsDelivr CDN (ES5 UMD browser module):

```html
<script src="//cdn.jsdelivr.net/npm/vh-plugin@latest/dist/vh-plugin.min.js"></script>
<!-- <script src="//unpkg.com/vh-plugin@latest/dist/vh-plugin.min.js"></script> -->
<script>
  console.log(vh);
</script>
```

### Mode 2

```html
<script type="module">
  import vh = '../dist/vh-plugin.esm.js';
</script>
```

### Mode 3 Installing

### Package manager

Using npm:

```bash
$ npm install vh-plugin
```

Using yarn:

```bash
$ yarn add vh-plugin
```

```javascript
import vh from "vh-plugin";
```

## Example

```js
/**
 * 显示Toast消息提示框
 * @param {string} text - 提示框内容，必填项。
 * @param {number} duration - 提示框存在时长，默认值为1666毫秒。
 */
vh.Toast(text, duration);
```

```js
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
vh.TimeFormat(time, format);
```

```js
/**
 * 复制文本到剪贴板
 * @param {string} text - 需要复制的文本，必填项。
 * @param {string} msg - 复制成功后的提示消息，不必填项。默认为 "Copy Success"。传入任意非或空字符串时，不弹出消息提示。
 */
vh.CopyText(text, msg);
```

```js
/**
 * 防抖
 * @param {function} fn - 需要执行的函数。
 * @param {number} wait - 间隔时间，默认1000ms。
 */
vh.Debounce(() => fn, wait);
```

```js
/**
 * 节流
 * @param {function} fn - 需要执行的函数。
 * @param {number} delay - 间隔时间，默认1000ms。
 */
vh.Throttle(() => fn, delay);
```

```js
/**
 * 正则校验
 * @param {string} url - 需要校验的URL，必填项。
 * @param {string} phone - 需要校验的手机号码，必填项。
 * @param {string} email - 需要校验的邮箱地址，必填项。
 * @param {string} idcard - 需要校验的身份证号码，必填项。
 * @returns {Boolean} 返回一个布尔值，true或false
 */
vh.Check.url(url);
vh.Check.phone(phone);
vh.Check.email(email);
vh.Check.idcard(idcard);
/**
 * 设备类型判断
 * @returns {Object} 返回一个对象，包含了 `windows`、`mac`、`android` 和 `ios` 四个属性，分别表示当前设备类型
 */
vh.Check.ua();
```

```js
/**
 * 极简图片灯箱，初始化即可使用
 * @param {Array} ImgArr - 图片集合（数组），必填项。
 */
vh.imgLightBoxInit(ImgArr);
```

```js
/**
 * 暂停一段时间后执行代码
 * @param {number} time - 暂停的时间（单位：毫秒），不必填项。默认为 1666。
 */
vh.Wait(time);
```
