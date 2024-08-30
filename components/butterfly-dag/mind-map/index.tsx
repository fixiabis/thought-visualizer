"use client";

import { Component } from "react";
import mockData from "./data";

import "butterfly-dag/dist/index.css";
import "./index.scss";
import { AutoLayoutFixedTreeCanvas } from "../auto-layout-fixed-tree-canvas";

export class MindMap extends Component {
	canvas!: AutoLayoutFixedTreeCanvas;

	componentDidMount() {
		let root = document.getElementById("dag-canvas");

		this.canvas = new AutoLayoutFixedTreeCanvas({
			root: root,
			disLinkable: true, // 可删除连线
			linkable: true, // 可连线
			draggable: true, // 可拖动
			zoomable: true, // 可放大
			moveable: true, // 可平移
			theme: {
				edge: {
					shapeType: "AdvancedBezier",
				},
			},
			layout: {
				type: "mindmap",
				options: {
					linkDistance: 50,
					direction: "H",
					getSide(d: any) {
						return d.data.side || "right";
					},
					getHeight(d: any) {
						return 20;
					},
					getWidth(d: any) {
						return 60;
					},
					getHGap(d: any) {
						return 50;
					},
					getVGap(d: any) {
						return 20;
					},
				},
			},
		});

		Object.assign(globalThis, { mindMap: this, data: mockData });

		this.canvas.draw(mockData, {}, () => {
			this.canvas.focusCenterWithAnimate({}, console.log);

			// 需要重新帶入 layout 參數，否則 layout 的設定會被重置
			this.canvas.autoLayout(this.canvas.layout.type, this.canvas.layout.options);
		});
	}

	render() {
		return (
			<div className="mind-map">
				<div className="compactBoxTree-canvas" id="dag-canvas"></div>
			</div>
		);
	}
}
