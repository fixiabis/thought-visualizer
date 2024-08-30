"use client";

import React from "react";
import dynamic from "next/dynamic";

const MindMapExample = dynamic(() => import("../components/butterfly-dag/mind-map").then((mod) => mod.MindMap), {
	ssr: false,
});

export default function Home() {
	return (
		<div className="w-screen h-screen">
			<MindMapExample />
		</div>
	);
}
