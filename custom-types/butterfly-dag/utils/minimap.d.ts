export default Minimap;
/**
 * options:
 *  height {Number} 缩略图高度 default 200,
 *  width  {Number} 缩略图宽度 default 200,
 *  className {String} default: butterfly-minimap-container
 *  containerStyle {Object} 外层css
 *  viewportStyle {Object} 视口css
 *  backgroudStyle {Object} 底层css
 *  nodeColor {String} 节点颜色
 *  groupColor {String} 节点组颜色
 *  root {Element} 画布容器节点
 *  containerWidth {Number} 画布的宽度, 可自定义
 *  containerHeight {Number} 同上
 *  nodes {Pointer[]} 节点信息
 *    node.left, node.top 节点的坐标轴信息
 *  groups {Object[]} 节点组信息
 *    group.left, group.top, group.width, group.height 节点组的二维信息
 *  offset {Pointer} 偏移信息
 *  zoom {Number} 画布当前缩放比
 *  move {Function} 缩略图互动函数, 用于移动画布, 参考小蝴蝶的move
 *  terminal2canvas {Function} 互动函数, 屏幕坐标到画布坐标的转换
 *  safeDistance {Number} 画布视口在minimap距离边距的安全距离，默认20
 *  activeNodeColor {String} 选中的节点颜色
 *  activeGroupColor {String} 选中的节点组颜色
 *  events {String[]} 补充的监听事件
 */
declare class Minimap {
    constructor(options: any);
    root: any;
    $root: JQuery<any>;
    options: any;
    ratio: number;
    getItemsPoint: () => {
        groups: any;
        nodes: any;
    };
    getBBox(): {
        minX: any;
        minY: any;
        width: number;
        height: number;
    };
    setRatio(): number;
    update({ nodes, groups, zoom, offset, }: {
        nodes?: any[];
        groups?: any[];
        zoom?: number;
        offset?: number[];
    }): void;
    getViewportBBox: () => {
        left: number;
        top: number;
        right: number;
        bottom: number;
        height: number;
        width: number;
    };
    initContainer(): void;
    container: HTMLDivElement;
    viewportDOM: HTMLDivElement;
    backgroundDOM: HTMLDivElement;
    initBGCanvas(): void;
    cvsCtx: CanvasRenderingContext2D;
    cvsRatio: number;
    initViewportEvts(): void;
    viewportEvents: {
        mousedown: (e: any) => void;
        mousemove: (e: any) => void;
        mouseleave: () => void;
        mouseup: () => void;
    };
    renderBG(): void;
    renderViewPort(): void;
    debounceRender: any;
    destroy(): void;
}
