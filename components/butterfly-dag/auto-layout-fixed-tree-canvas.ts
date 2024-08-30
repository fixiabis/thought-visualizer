import { TreeCanvas } from "butterfly-dag";
import _ from "lodash";

/**
 * 針對 "butterfly-dag 的 TreeCanvas 自動排版異常" 的問題進行修正
 * TreeCanvas 在進行自動排版位置計算時，僅處理根節點 options 中的節點資料，且該資料與外部節點不同步
 * 1. 在新增或刪除節點後，另外更新根節點 options 中的節點資料。
 * 2. 在自動排版計算後，另外將根節點 options 中計算出的節點位置同步到實際節點上。
 */
export class AutoLayoutFixedTreeCanvas extends TreeCanvas {
	constructor(options: any) {
		super(options);
	}

	addNodes(newNodeOptionsArray: any, isNotEventEmit: any) {
		this._traverseRootOptionsAndAddNodeOptions(newNodeOptionsArray);
		const result = super.addNodes(newNodeOptionsArray, isNotEventEmit);
		this._traverseRootOptionsAndSyncNodeOptionsToAllNodes();

		return result;
	}

	_traverseRootOptionsAndAddNodeOptions(newNodeOptionsArray: any) {
		const rootNode = this.getRootNode();

		if (!rootNode) {
			return;
		}

		const nodeOptionsArray = this._traverseRootOptionsAndGetNodeOptionsArray();

		for (const newNodeOptions of newNodeOptionsArray) {
			if ("parent" in newNodeOptions) {
				const parentNodeOptions = nodeOptionsArray.find((nodeOptions) => nodeOptions.id === newNodeOptions.parent);
				parentNodeOptions.children ||= [];
				parentNodeOptions.children.push(newNodeOptions);
			}
		}

		return nodeOptionsArray;
	}

	removeNodes(nodes: any, isNotDelEdge: any, isNotEventEmit: any) {
		const result = super.removeNodes(nodes, isNotDelEdge, isNotEventEmit);
		this._traverseRootOptionsAndRemoveNodeOptions(result.nodes.map((node) => node.id));
		this._traverseRootOptionsAndSyncNodeOptionsToAllNodes();

		return result;
	}

	_traverseRootOptionsAndRemoveNodeOptions(nodeIds: any) {
		const rootNode = this.getRootNode();

		if (!rootNode) {
			return;
		}

		const nodeOptionsArray = this._traverseRootOptionsAndGetNodeOptionsArray();

		for (const nodeOptions of nodeOptionsArray) {
			if (nodeOptions.children) {
				nodeOptions.children = nodeOptions.children.filter((nodeOptions: any) => !nodeIds.includes(nodeOptions.id));
			}
		}
	}

	_traverseRootOptionsAndGetNodeOptionsArray() {
		const rootNode = this.getRootNode();

		if (!rootNode) {
			return [];
		}

		const nodeOptionsArray = [rootNode.options];

		for (const nodeOptions of nodeOptionsArray) {
			if (nodeOptions.children && nodeOptions.children.length > 0) {
				nodeOptionsArray.splice(nodeOptionsArray.length, 0, ...nodeOptions.children);
			}
		}

		return nodeOptionsArray;
	}

	_traverseRootOptionsAndSyncNodeOptionsToAllNodes() {
		const rootNode = this.getRootNode();

		if (!rootNode) {
			return;
		}

		this._autoLayout({
			groups: [],
			nodes: [rootNode.options],
			edges: [],
		});

		const nodeOptionsArray = this._traverseRootOptionsAndGetNodeOptionsArray();

		for (const nodeOptions of nodeOptionsArray) {
			const node = this.getNode(nodeOptions.id);
			node.options = _.cloneDeep(nodeOptions);
		}
	}

	autoLayout(type: any, options: any) {
		return super.autoLayout(type ?? this.layout.type, options ?? this.layout.options);
	}
}
