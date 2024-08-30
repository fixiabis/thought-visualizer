import { TreeNode } from "butterfly-dag";
import $ from "jquery";

class BaseNode extends TreeNode {
	constructor(opts: any) {
		super(opts);
	}

	draw = (opts: any) => {
		let container = $('<div class="mind-map-node"></div>')
			.css("top", opts.top)
			.css("left", opts.left)
			.attr("id", opts.id);
		let titleDom = $(`<div class="title">${opts.options.title}<div>`);

		container.append(titleDom);

		return container[0];
	};
}

export default BaseNode;
