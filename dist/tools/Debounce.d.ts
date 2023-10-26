declare const Debounce: <T extends (...args: any[]) => void>(fn: T, wait?: number) => (this: any, ...args: Parameters<T>) => void;
export { Debounce };
