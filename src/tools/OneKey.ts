/**
 * @description: 取用户唯一标识
 */
import $MD5 from "../utils/md5";

const getvhHash = (v: string) => v.split("").reduce((hash, char) => (hash << 5) + hash + char.charCodeAt(0), 5666) >>> 0;
const OneKey = (safe?: boolean) => {
  const userAgent: string = safe ? navigator.userAgent || "userAgent" : "";
  const screenWidth: number = safe ? screen.width || 0 : 0;
  const screenHeight: number = safe ? screen.height || 0 : 0;
  const colorDepth: number = screen.colorDepth || 0;
  const timezoneOffset: number = new Date().getTimezoneOffset() || 0;
  const timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone || "timeZone";
  const hardwareConcurrency: number = navigator.hardwareConcurrency || 0;
  const language: string = navigator.language || "language";
  const languages: string[] = [...(navigator.languages || ["languages"])];
  const onLine: string | boolean = navigator.onLine || "onLine";
  const cookieEnabled: string | boolean = navigator.cookieEnabled || "cookieEnabled";
  const doNotTrack: string = navigator.doNotTrack || "doNotTrack";

  // 唯一Canvas元素
  const getvhCanvasHash = () => {
    const canvas: any = document.createElement("canvas");
    const ctx: any = canvas.getContext("2d");
    const en: string = "www.vvhan.com";
    const zh: string = "骤雨重山博客";
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText(`${en} - ${zh}`, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(`${en} - ${zh}`, 4, 17);
    return getvhHash(canvas.toDataURL());
  };

  // 默认字体
  const getvhFonts = () => {
    const fontList = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Comic Sans MS", "Trebuchet MS", "Arial Black", "Impact", "San Francisco", "Lucida Grande", "Segoe UI", "Roboto"];
    const canvas = document.createElement("canvas");
    const context: any = canvas.getContext("2d");
    const text = "abcdefghijklmnopqrstuvwxyz0123456789";
    const availableFonts = fontList
      .map((font: string) => {
        context.font = `16px ${font}`;
        const width = context.measureText(text).width;
        context.font = `16px 'HelloHan'`;
        return context.measureText(text).width !== width ? font : null;
      })
      .filter(Boolean);
    return availableFonts.join(",");
  };
  return $MD5(JSON.stringify({ userAgent, screenWidth, screenHeight, colorDepth, timezoneOffset, timeZone, language, languages, hardwareConcurrency, onLine, cookieEnabled, doNotTrack, fonts: getvhFonts(), canvasHash: getvhCanvasHash() })).toString();
};

export { OneKey };
