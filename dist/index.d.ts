declare const _default: {
    showLoading: (color?: string | undefined, opacity?: number | undefined) => void;
    hideLoading: () => void;
    Toast: (text: string) => void;
    CopyText: (text: string, message?: string) => Promise<any>;
    Debounce: <T extends (...args: any[]) => void>(fn: T, wait?: number) => (this: T, ...args: Parameters<T>) => void;
    Throttle: <T_1 extends (...args: any[]) => void>(fn: T_1, delay?: number) => (this: any, ...args: Parameters<T_1>) => void;
    getUrlParams: (param: string) => string | null;
    getUrlParamsJson: () => Record<string, string>;
    jsonToUrlParams: (json: Record<string, any>) => string;
    TimeFormat: (time: string | number, format?: string) => string;
    OneKey: (safe?: boolean | undefined) => string;
    OpenURL: (url: string, filename?: string, target?: string) => Promise<any>;
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
