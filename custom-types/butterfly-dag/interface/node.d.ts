export default Node;
declare class Node extends EventEmit3<string | symbol, any> {
    constructor();
    draw(): void;
    getEndpoint(): void;
    addEndpoint(): void;
    removeEndpoint(): void;
    moveTo(): void;
    getWidth(): void;
    getHeight(): void;
    setDraggable(): void;
    remove(): void;
    destroy(): void;
    focus(): void;
    unFocus(): void;
    click(): void;
    doubleClick(): void;
    onContextmenu(): void;
    hover(): void;
}
import EventEmit3 = require("eventemitter3");
