export default TreeNode;
declare class TreeNode extends Node {
    children: any;
    parent: any;
    collapsed: any;
    isRoot: any;
    collapse(): void;
    expand(nodes?: any[]): void;
    detectLeaf(): boolean;
    detectRoot(): any;
}
import Node from './baseNode';
