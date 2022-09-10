export declare type Stringified<T> = string & {
    [P in keyof T]: {
        "_ value": T[P];
    };
};
//# sourceMappingURL=types.d.ts.map