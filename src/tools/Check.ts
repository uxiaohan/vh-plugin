/**
 * @description: 一些常用的正则表达式验证和设备类型判断
 */
const check = {
  phone: (phone: string): boolean => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(phone),
  email: (email: string): boolean => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
  idcard: (idcard: string): boolean => /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(idcard),
  url: (url: string): boolean => /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(url),
  ua: (): { windows: boolean; mac: boolean; android: boolean; ios: boolean } => {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|OperaMini/i.test(userAgent);
    const isIos = /iPhone|iPad|iPod/i.test(userAgent);
    const isMac = /\b(Macintosh|Mac)\b/.test(userAgent);
    const isiPad = Boolean((navigator.userAgent.match(/(iPad)/) || (navigator.userAgent.match(/(Macintosh)/) && navigator.maxTouchPoints >= 1)));
    return { windows: !isMobile && !isMac, mac: isMac && !isiPad, android: isMobile && !isIos, ios: isIos || isiPad };
  },
};

export { check };
