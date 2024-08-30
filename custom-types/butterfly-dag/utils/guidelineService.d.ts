export default GuidelineService;
declare class GuidelineService {
    constructor(opts: any);
    root: any;
    canvas: any;
    dom: HTMLElement;
    cxt: any;
    isActive: boolean;
    limitNum: any;
    adsorp: any;
    theme: {
        lineColor: string;
        lineWidth: number;
    };
    _adsorpTimer: any;
    _resize(): void;
    canvasHeight: number;
    canvasWidth: number;
    create(options?: {}): void;
    guideLineCanvas: HTMLElement;
    guidLine(moveTo?: number[], lineTo?: number[]): void;
    draw(item: any, type: any): void;
    zoom(scale: any): void;
    move(x: any, y: any): void;
    setOrigin(x: any, y: any): void;
    clearCanvas(): void;
    destroy(): void;
}
