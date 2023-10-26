/**
 * @description: 将时间戳格式化为指定格式的时间字符串
 * @param {number} time - 时间戳，必填项。支持10位和13位时间戳。
 * @param {string} format - 时间格式字符串，不必填项。默认格式为YYYY-MM-DD hh:mm:ss。传入格式时，YYYY、MM、DD、hh、mm、ss不可改变，其他可改变。
 * @returns {string} 指定格式的时间字符串。
 */

const TimeFormat = (time: number | string, format: string = "YYYY-MM-DD hh:mm:ss"): string => {
  time = String(time).length === 13 ? Number(time) : Number(time) * 1000;
  const date = new Date(time);
  const replacements: { [key: string]: number | string } = {
    YYYY: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    DD: String(date.getDate()).padStart(2, "0"),
    hh: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
  };
  const regex = /YYYY|MM|DD|hh|mm|ss/g;
  return format.replace(regex, (match) => String(replacements[match]));
};

export { TimeFormat };
