import Canvas from "./canvas/baseCanvas";
import TreeCanvas from "./canvas/treeCanvas";
import Edge from "./edge/baseEdge";
import Endpoint from "./endpoint/baseEndpoint";
import Group from "./group/baseGroup";
import Node from "./node/baseNode";
import TreeNode from "./node/treeNode";
import Minimap from "./utils/minimap";
import Tips from "./utils/toolTip";
import Layout from "./utils/layout/layout";
import Arrow from "./utils/arrow";

declare module "butterfly-dag" {
	export {
		Canvas,
		TreeCanvas,
		Edge,
		Endpoint,
		Group,
		Node,
		TreeNode,
		Minimap,
		Tips,
		Layout,
		Arrow,
	};
}
