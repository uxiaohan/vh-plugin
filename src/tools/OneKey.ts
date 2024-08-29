/**
 * @description: 取用户唯一标识
 */
import $MD5 from "../utils/md5";
const OneKey = (_vkey?: string) => {
  const canvas: HTMLCanvasElement = document.createElement("canvas");
  const gl: any = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  const debugInfo: any = gl.getExtension("WEBGL_debug_renderer_info");
  const glOneStr = JSON.stringify({
    vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : null,
    renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : null,
    navs: "geolocation" in navigator,
  });
  const keyStr = _vkey || "5ZOI5ZOI5ZOI6Kej5Ye65p2l5Y+I5oCO5qC3";
  const resStr = glOneStr + ((navigator as any).deviceMemory || "_jquery_") + navigator.languages.join(", ") + (navigator.hardwareConcurrency || "_md5_") + (Intl.DateTimeFormat().resolvedOptions().timeZone || "_base64_") + keyStr;
  return $MD5(resStr).toString();
};

export { OneKey };
