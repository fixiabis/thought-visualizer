import Node from "./node";

const data = {
	nodes: {
		isRoot: true,
		id: "root",
		title: "根节点",
		Class: Node,
		children: [
			{
				id: "node-1",
				Class: Node,
				title: "节点 1",
				side: "left",
				children: [
					{
						id: "node-1-1",
						Class: Node,
						title: "节点 1-1",
						side: "right",
					},
					{
						id: "node-1-2",
						Class: Node,
						title: "节点 1-2",
						side: "right",
						children: [
							{
								id: "node-1-2-1",
								Class: Node,
								title: "节点 1-2-1",
								side: "right",
							},
						],
					},
					{
						id: "node-1-3",
						Class: Node,
						title: "节点 1-3",
						side: "right",
					},
				],
			},
			{
				id: "node-2",
				Class: Node,
				title: "节点 2",
				side: "left",
				children: [
					{
						id: "node-2-1",
						Class: Node,
						title: "节点 2-1",
						side: "right",
						children: [
							{
								id: "node-2-1-1",
								Class: Node,
								title: "节点 2-1-1",
								side: "right",
							},
						],
					},
					{
						id: "node-2-2",
						Class: Node,
						title: "节点 2-2",
						side: "right",
					},
					{
						id: "node-2-3",
						Class: Node,
						title: "节点 2-3",
						side: "right",
						children: [
							{
								id: "node-2-3-1",
								Class: Node,
								title: "节点 2-3-1",
								side: "right",
							},
						],
					},
				],
			},
			{
				id: "node-3",
				Class: Node,
				title: "节点 3",
				side: "left",
				children: [
					{
						id: "node-3-1",
						side: "left",
						Class: Node,
						title: "节点 3-1",
						children: [
							{
								id: "node-3-1-1",
								side: "left",
								Class: Node,
								title: "节点 3-1-1",
							},
							{
								id: "node-3-1-2",
								side: "left",
								Class: Node,
								title: "节点 3-1-2",
							},
							{
								id: "node-3-1-3",
								side: "left",
								Class: Node,
								title: "节点 3-1-3",
							},
						],
					},
				],
			},
			{
				id: "node-4",
				Class: Node,
				title: "节点 4",
				side: "right",
				children: [
					{
						id: "node-4-1",
						Class: Node,
						side: "right",
						title: "节点 4-1",
						children: [
							{
								id: "node-4-1-1",
								side: "right",
								Class: Node,
								title: "节点 4-1-1",
							},
							{
								id: "node-4-1-2",
								side: "right",
								Class: Node,
								title: "节点 4-1-2",
							},
							{
								id: "node-4-1-3",
								side: "right",
								Class: Node,
								title: "节点 4-1-3",
							},
							{
								id: "node-4-1-4",
								Class: Node,
								side: "right",
								title: "节点 4-1-4",
							},
						],
					},
					{
						id: "node-4-2",
						Class: Node,
						side: "right",
						title: "节点 4-2",
					},
					{
						id: "node-4-3",
						side: "right",
						Class: Node,
						title: "节点 4-3",
					},
					{
						id: "node-4-4",
						Class: Node,
						side: "right",
						title: "节点 4-4",
					},
				],
			},
			{
				id: "node-5",
				Class: Node,
				side: "right",
				title: "节点 5",
				children: [
					{
						id: "node-5-1",
						Class: Node,
						title: "节点 5-1",
						side: "right",
					},
					{
						id: "node-5-2",
						Class: Node,
						title: "节点 5-2",
						side: "right",
						children: [
							{
								id: "node-5-2-1",
								Class: Node,
								title: "节点 5-2-1",
								side: "right",
							},
							{
								id: "node-5-2-2",
								Class: Node,
								title: "节点 5-2-2",
								side: "right",
							},
							{
								id: "node-5-2-3",
								Class: Node,
								title: "节点 5-2-3",
								side: "right",
							},
						],
					},
					{
						id: "node-5-3",
						Class: Node,
						title: "节点 5-3",
						side: "right",
						children: [
							{
								id: "node-5-3-1",
								Class: Node,
								title: "节点 5-3-1",
								side: "right",
							},
							{
								id: "node-5-3-2",
								Class: Node,
								title: "节点 5-3-2",
								side: "right",
							},
						],
					},
				],
			},
		],
	},
	edges: [],
};

const edges: any[] = data.edges;
const nodes: any[] = [data.nodes];

for (const node of nodes) {
	for (const nodeChild of node.children || []) {
		edges.push({
			id: `from-${node.id}-to-${nodeChild.id}`,
			source: node.id,
			target: nodeChild.id,
			type: "node",
		});

		nodes.push(nodeChild);
	}
}

export default data;
