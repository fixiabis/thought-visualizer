export default GridService;
declare class GridService {
    constructor(opts: any);
    root: any;
    canvas: any;
    domWrapper: any;
    canvasHeight: number;
    canvasWidth: number;
    dom: HTMLElement;
    isActive: boolean;
    theme: any;
    _resize(): void;
    create(options?: {}): void;
    createCircle(): void;
    createLine(): void;
    justifyAllCoordinate(): void;
    destroy(): void;
}
