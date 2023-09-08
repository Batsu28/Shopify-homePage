"use client";
import {
	Edges,
	GradientTexture,
	GradientType,
	Instance,
	Instances,
	Outlines,
} from "@react-three/drei";
import { useMemo, useState, useRef, memo } from "react";
import React from "react";
import { useShape } from "./h-position";
import HoverBox from "./hoverbox";

function LetterH({ position }) {
	const { hShape } = useShape();

	const pointerOver = (e, position) => {
		e.stopPropagation();
		hShape.forEach((info) => {
			const [x, _, z] = info.position;
			if (Math.abs(x - position[0]) <= 2 && Math.abs(z - position[2]) <= 2) {
				if (Math.abs(x - position[0]) <= 1 && Math.abs(z - position[2]) <= 1) {
					info.value = 1;
				} else {
					info.value = 0.5;
				}
			}
		});
	};

	return (
		<group>
			<Instances
				limit={1800}
				range={1800}
				position={position}>
				<boxGeometry />

				<meshStandardMaterial
					emissive={"royalblue"}
					emissiveIntensity={0.2}>
					<GradientTexture
						stops={[0, 1]}
						colors={["royalblue", "white"]}
						size={1024}
						width={1024}
						type={GradientType.Radial}
					/>
				</meshStandardMaterial>

				<group>
					{hShape.map((props, key) => (
						<HoverBox
							key={key}
							box={props}
							pointerOver={pointerOver}
						/>
					))}
				</group>
			</Instances>
		</group>
	);
}

export default memo(LetterH);
