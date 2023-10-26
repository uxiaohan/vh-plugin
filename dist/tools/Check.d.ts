/**
 * @description: 一些常用的正则表达式验证和设备类型判断
 */
declare const check: {
    phone: (phone: string) => boolean;
    email: (email: string) => boolean;
    idcard: (idcard: string) => boolean;
    url: (url: string) => boolean;
    ua: () => {
        windows: boolean;
        mac: boolean;
        android: boolean;
        ios: boolean;
    };
};
export { check };
