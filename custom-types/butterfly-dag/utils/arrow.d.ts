declare namespace _default {
    export { calcSlope };
    export { ARROW_TYPE };
    export { registerArrow };
}
export default _default;
declare function calcSlope(opts: any): {
    x: number;
    y: number;
};
declare namespace ARROW_TYPE {
    export namespace default1 {
        let type: string;
        let content: string;
    }
    namespace _default {
        let type_1: string;
        export { type_1 as type };
        let content_1: string;
        export { content_1 as content };
    }
    export { _default as default };
    export let length: number;
}
declare function registerArrow(arrows: any): void;
