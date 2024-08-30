export default Edge;
declare class Edge extends EventEmit3<string | symbol, any> {
    constructor();
    draw(): void;
    redraw(): void;
    drawLabel(): void;
    redrawLabel(): void;
    drawArrow(): void;
    redrawArrow(): void;
    isConnect(): void;
    destroy(): void;
    remove(): void;
    click(): void;
    hover(): void;
    focus(): void;
    unFocus(): void;
}
import EventEmit3 = require("eventemitter3");
