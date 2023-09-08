"use client";
import { Instance, Instances } from "@react-three/drei";
import { useMemo, useState, useRef, memo } from "react";
import React from "react";
import { motion } from "framer-motion-3d";
import { useShape } from "./positions";

const boxSize = 2;

function Boxes({ position }) {
	const [hovered, setHovered] = useState([]);
	const { hShape } = useShape();

	const pointerOver = (e, position) => {
		e.stopPropagation();
		let hoverPos = [];
		hShape.forEach((box) => {
			const [x, _, z] = box.position;
			if (Math.abs(x - position[0]) <= 2 && Math.abs(z - position[2]) <= 2) {
				hoverPos.push(box.position);
				if (Math.abs(x - position[0]) <= 1 && Math.abs(z - position[2]) <= 1) {
					box.value = 1;
				} else {
					box.value = 0.5;
				}
			}
		});
		setHovered(hoverPos);
	};

	return (
		<group>
			<Instances
				limit={1800}
				range={1800}
				position={position}>
				<boxGeometry />
				<meshStandardMaterial />

				<group>
					{hShape.map((props, key) => (
						<HoverBox
							key={key}
							box={props}
							pointerOver={pointerOver}
							hovered={hovered}
							setHovered={setHovered}
						/>
					))}
				</group>
			</Instances>
		</group>
	);
}

function HoverBox({ box, pointerOver, hovered, setHovered }) {
	const isHovered = hovered.includes(box.position);

	const pointerLeave = () => {
		setHovered([]);
	};

	return (
		<motion.group
			onPointerEnter={(e) => pointerOver(e, box.position)}
			onPointerLeave={pointerLeave}
			position={box.position}
			whileHover={{
				y: 1.5,
			}}
			animate={{ y: isHovered ? box.value : 0 }}
			transition={{ ease: [0, 0, 0, 0.1] }}>
			{box.colors.map((color, index) => (
				<Instance
					args={[3, 3, 3]}
					scale={0.9}
					color={color}
					position={[0, index, 0]}
					key={index}
				/>
			))}
		</motion.group>
	);
}

export default memo(Boxes);
