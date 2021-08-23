import React from "react";

export default function WaveBorder({ bottomColor, upColor }) {
	return (
		<div
			style={{
				backgroundColor: bottomColor,
			}}
		>
			<svg
				// className={"waveSVG"}
				viewBox="0 70 500 60"
				preserveAspectRatio="xMinYMin meet"
			>
				<path
					d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
					style={{
						stroke: "none",
						fill: upColor,
					}}
				></path>
			</svg>
		</div>
	);
}
