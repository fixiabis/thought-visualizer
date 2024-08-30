export default CoordinateService;
declare class CoordinateService {
    constructor(opts: any);
    canvas: any;
    terOffsetX: any;
    terOffsetY: any;
    terWidth: any;
    terHeight: any;
    canOffsetX: any;
    canOffsetY: any;
    scale: any;
    scrollTop: number;
    scrollLeft: number;
    scrollTimer: any;
    originX: any;
    originY: any;
    _currentTerX: number;
    _currentTerY: number;
    _changeCanvasInfo(data: any): void;
    _lastScale: any;
    canvas2terminal(coordinates: any, options: any): any[];
    terminal2canvas(coordinates: any, options: any): number[];
    _canvas2terminal(pos: any, coordinate: any, options: any): any;
    _terminal2canvas(pos: any, coordinate: any, options: any): number;
    _calcScrollPos(isRealtime: any): void;
}
