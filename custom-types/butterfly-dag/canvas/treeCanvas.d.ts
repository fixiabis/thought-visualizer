export default TreeCanvas;
declare class TreeCanvas extends Canvas {
    _NodeClass: typeof TreeNode;
    _handleTreeNodes(data: any, isFlat: any): any;
    _isExistNode(node: any): void;
    findSubTree(item: any): any[];
    collapseNode(nodeId: any): {
        nodes: any[];
        edges: any[];
    };
    expandNode(nodeId: any, nodes: any): void;
    redraw(data: any, params: any, callback: any): void;
    getRootNode(): any;
    draw(opts: any, params: any, callback: any): void;
    __layout: {
        type: any;
        options: any;
    };
}
import Canvas from "./baseCanvas";
import TreeNode from '../node/treeNode';
