export default BaseCanvas;
declare class BaseCanvas extends Canvas {
    constructor(options: any);
    root: any;
    layout: {
        type: any;
        options: any;
    };
    layoutOptions: any;
    previousIsFlatNode: any;
    zoomable: any;
    moveable: any;
    draggable: any;
    linkable: any;
    disLinkable: any;
    theme: {
        group: {
            type: any;
            includeGroups: any;
            dragGroupZIndex: any;
        };
        node: {
            dragNodeZIndex: any;
        };
        edge: {
            type: any;
            shapeType: any;
            hasRadius: any;
            Class: any;
            arrow: any;
            arrowShapeType: any;
            arrowPosition: any;
            arrowOffset: any;
            draggable: any;
            label: any;
            labelPosition: any;
            labelOffset: any;
            labelUpdateInterval: any;
            isRepeat: any;
            isLinkMyself: any;
            isExpandWidth: any;
            defaultAnimate: any;
            dragEdgeZindex: any;
        };
        endpoint: {
            linkableHighlight: any;
            limitNum: any;
            expandArea: {
                left: any;
                right: any;
                top: any;
                bottom: any;
            };
            isAllowLinkInSameNode: any;
        };
        zoomGap: any;
        autoFixCanvas: {
            enable: any;
            autoMovePadding: any;
        };
        autoResizeRootSize: any;
        isMouseMoveStopPropagation: any;
    };
    global: any;
    _zoomData: number;
    _moveData: number[];
    _zoomTimer: any;
    groups: any[];
    nodes: any[];
    edges: any[];
    isSelectMode: boolean;
    selectContents: any[];
    selectMode: string;
    selectItem: {
        nodes: any[];
        edges: any[];
        groups: any[];
        endpoints: any[];
    };
    _remarkZoom: any;
    _remarkMove: any;
    svg: JQuery<SVGSVGElement>;
    wrapper: HTMLElement;
    canvasWrapper: SelectCanvas;
    _dragGroupZIndex: any;
    _dragNodeZIndex: any;
    _dragEdgeZindex: any;
    _dragType: string;
    _dragNode: any;
    _mouseMoved: boolean;
    _dragEndpoint: any;
    _dragEdges: any[];
    _dragPathEdge: {
        edge: any;
        path: any;
    };
    _dragGroup: any;
    _rootWidth: number;
    _rootHeight: number;
    _hoverGroupQueue: any[];
    _hoverGroupObj: any;
    _hoverGroupTimer: any;
    _gridService: GridService;
    _gridObjQueue: any[];
    _gridObj: any;
    _gridTimer: any;
    _guidelineService: GuidelineService;
    _guideObjQueue: any[];
    _guideObj: any;
    _guideTimer: any;
    _coordinateService: CoordinateService;
    _unionData: {
        __system: {
            nodes: any[];
            edges: any[];
            groups: any[];
            endpoints: any[];
        };
    };
    _NodeClass: typeof Node;
    _GroupClass: typeof Group;
    actionQueue: any[];
    actionQueueIndex: number;
    _autoMoveDir: any[];
    _autoMoveTimer: NodeJS.Timeout;
    _hasInited: boolean;
    _updateInterval: NodeJS.Timeout;
    _cache: {
        nodes: {};
    };
    _redrawPromises: any[];
    _isRedraw: boolean;
    _isFocusing: boolean;
    draw(opts: any, callback: any): void;
    redraw(opts: any, callback: any): void;
    getDataMap(): {
        nodes: any[];
        edges: any[];
        groups: any[];
    };
    autoLayout(type: any, options: any): void;
    _genSvgWrapper(): JQuery<SVGSVGElement>;
    _genWrapper(): HTMLElement;
    _genCanvasWrapper(): void;
    _addEventListener(): void;
    _attachMouseDownEvent(): void;
    getNode(id: any): any;
    addNodes(nodes: any, isNotEventEmit: any): any;
    addNode(node: any, isNotEventEmit: any): any;
    removeNode(nodeId: any, isNotDelEdge: any, isNotEventEmit: any): {
        nodes: any[];
        edges: any[];
    };
    removeNodes(nodes: any, isNotDelEdge: any, isNotEventEmit: any): {
        nodes: any[];
        edges: any[];
    };
    getNeighborNodes(nodeId: any): any[];
    /**
     * 查找 N 层节点
     *
     * @param {Object} options
     * @param {Node} options.node
     * @param {Endpoint} options.endpoint
     * @param {String} options.type
     * @param {Number} options.level
     * @param {Function} options.iteratee
     * @returns {Object} filteredGraph
     */
    getNeighborNodesAndEdgesByLevel({ node, endpoint, type, level, iteratee }: {
        node: Node;
        endpoint: Endpoint;
        type: string;
        level: number;
        iteratee: Function;
    }): any;
    _getAdjcentTable(type: any): {};
    _isExistNode(node: any): boolean;
    _moveNode(node: any, x: any, y: any, isNotEventEmit: any): void;
    _addEndpoint(endpoint: any, type: any, isInited: any): void;
    _getAllEndpoints(): any;
    getGroup(id: any): any;
    addGroup(group: any, unionItems: any, options: any, isNotEventEmit: any): any;
    addGroups(datas: any): any;
    removeGroup(data: any, isNotEventEmit: any): {
        group: any;
        nodes: any;
        edges: any[];
        groups: any;
    };
    removeGroups(groups: any[], isNotEventEmit: any): {
        groups: {
            group: any;
            nodes: any;
            edges: any[];
            groups: any;
        }[];
    };
    _isExistGroup(group: any): boolean;
    _moveGroup(group: any, x: any, y: any, isNotEventEmit: any): void;
    _findGroupByCoordinates(item: any, lx: any, ty: any, rx: any, by: any): any;
    _hoverGroup(node: any): void;
    _clearHoverGroup(group: any): void;
    _getGroupPos(group: any): {
        top: number;
        left: number;
    };
    getEdge(id: any): any;
    addEdges(links: any, isNotEventEmit: any): any;
    addEdge(link: any, isNotEventEmit: any): any;
    removeEdges(edges: any, isNotEventEmit: any, isNotPushActionQueue: any): any[];
    removeEdge(edge: any, isNotEventEmit: any, isNotPushActionQueue: any): any;
    getNeighborEdges(id: any, type: any): any[];
    getNeighborEdgesByEndpoint(id: any, pointId: any): any[];
    setEdgeZIndex(edges?: any[], zIndex?: number): void;
    _findEdgeIndex(edge: any): number;
    _autoLayout(data: any): void;
    setMinimap(flat?: boolean, options?: {}): void;
    minimap: Minimap;
    updateFn: () => void;
    focusNodesWithAnimate(param: any, type: string[], options: any, callback: any): void;
    focusCenterWithAnimate(options: any, callback: any): void;
    focusNodeWithAnimate(param: any, type: string, options: any, callback: any): void;
    setSelectMode(flat?: boolean, contents?: string[], selectMode?: string): void;
    getUnion(name: any): any;
    getAllUnion(): {
        __system: {
            nodes: any[];
            edges: any[];
            groups: any[];
            endpoints: any[];
        };
    };
    add2Union(name: any, obj: any): void;
    removeUnion(name: any): void;
    _rmSystemUnion(): void;
    _findUnion(type: any, item: any): string[];
    _selectMultiplyItem(range: any, toDirection: any): {
        nodes: any[];
        edges: any[];
        groups: any[];
        endpoints: any[];
    };
    updateRootResize(opts?: {}): void;
    setZoomable(flat: any, zoomDirection?: any): void;
    _zoomDirection: any;
    _zoomCb: (event: any) => void;
    setMoveable(flat: any): void;
    setLinkable(flat: any): void;
    setDisLinkable(flat: any): void;
    setDraggable(flat: any): void;
    setOrigin(data: any): void;
    getZoom(): number;
    getOffset(): number[];
    getOrigin(): string[];
    zoom(param: any, callback: any): void;
    move(position: any): void;
    setGridMode(flat: boolean, options: any, _isResize: any): void;
    setGuideLine(flat?: boolean, options?: any): void;
    canvas2terminal(coordinates: any, options: any): any[];
    terminal2canvas(coordinates: any, options: any): number[];
    save2img(options: any): any;
    _autoMoveCanvas(x: any, y: any, data: any, cb: any): void;
    undo(): void;
    redo(): void;
    isActionQueueTop(): boolean;
    isActionQueueBottom(): boolean;
    pushActionQueue(option: any): void;
    popActionQueue(): any;
    clearActionQueue(): void;
    getNodesVisibleStatus(): {
        inside: any[];
        outside: any[];
    };
}
import Canvas from "../interface/canvas";
import SelectCanvas from '../utils/selectCanvas';
import GridService from '../utils/gridService';
import GuidelineService from '../utils/guidelineService';
import CoordinateService from '../utils/coordinate';
import Node from '../node/baseNode';
import Group from '../group/baseGroup';
import Endpoint from '../endpoint/baseEndpoint';
import Minimap from '../utils/minimap';
