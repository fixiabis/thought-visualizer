export default Group;
declare class Group extends EventEmit3<string | symbol, any> {
    constructor();
    draw(): void;
    addNode(): void;
    addNodes(): void;
    getWidth(): void;
    getHeight(): void;
    removeNode(): void;
    removeNodes(): void;
    setResize(): void;
    setSize(): void;
    moveTo(): void;
    getEndpoint(): void;
    addEndpoint(): void;
    remove(): void;
    destroy(): void;
    removeEndpoint(): void;
    collapse(): void;
    stretch(): void;
    click(): void;
    doubleClick(): void;
    onContextmenu(): void;
    hover(): void;
    focus(): void;
    unFocus(): void;
}
import EventEmit3 = require("eventemitter3");
