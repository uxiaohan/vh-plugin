declare const _default: {
    showLoading: (color?: string, opacity?: number) => void;
    hideLoading: () => void;
    Toast: (text: string) => void;
    CopyText: (text: string, message?: string) => Promise<any>;
    Debounce: <T extends (...args: any[]) => void>(fn: T, wait?: number) => (this: T, ...args: Parameters<T>) => void;
    Throttle: <T extends (...args: any[]) => void>(fn: T, delay?: number) => (this: any, ...args: Parameters<T>) => void;
    getUrlParams: (param: string) => string | null;
    getUrlParamsJson: () => Record<string, string>;
    jsonToUrlParams: (json: Record<string, any>) => string;
    TimeFormat: (time: number | string, format?: string) => string;
    OneKey: (safe?: boolean) => string;
    check: {
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
};
export default _default;
