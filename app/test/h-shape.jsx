import { Instance, Instances } from "@react-three/drei";
import { useMemo, useState, useRef } from "react";
import React from "react";
import { motion } from "framer-motion-3d";
import niceColors from "nice-color-palettes";

const boxSize = 0.2;

const midZNum = [8, 9, 10, 11, 12, 13, 14];
const midXNum = [9, 10, 11, 12, 13, 14];

function LetterH({ position }) {
	const [hovered, setHovered] = useState([]);

	const hShapePositions = useMemo(() => {
		const positions = [];
		for (let x = 0; x < 24; x++) {
			for (let z = 0; z < 23; z++) {
				if (midZNum.includes(z)) {
					if (
						midXNum.includes(x) &&
						((x - 9 >= 0 && x + 9 < 24) || (z - 8 >= 0 && z + 8 < 23))
					) {
						positions.push({
							position: [x, 0, z],
							value: 0,
							colors: Array.from(
								{ length: 4 },
								() => niceColors[17][Math.floor(Math.random() * 5)]
							),
						});
					}
				} else {
					positions.push({
						position: [x, 0, z],
						value: 0,
						colors: Array.from(
							{ length: 4 },
							() => niceColors[17][Math.floor(Math.random() * 5)]
						),
					});
				}
			}
		}
		return positions;
	}, []);

	const pointerOver = (e, position) => {
		e.stopPropagation();
		let hoverPos = [];
		hShapePositions.forEach((box) => {
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
				limit={2000}
				range={2000}
				position={position}>
				<boxGeometry />
				<meshStandardMaterial />

				<group>
					{hShapePositions.map((props, key) => (
						<HoverBox
							key={key}
							position={props.position}
							value={props.value}
							colors={props.colors}
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

function HoverBox({
	position,
	value,
	colors,
	pointerOver,
	hovered,
	setHovered,
}) {
	const isHovered = hovered.includes(position);

	const pointerLeave = () => {
		setHovered([]);
	};

	return (
		<motion.group
			onPointerEnter={(e) => pointerOver(e, position)}
			onPointerLeave={pointerLeave}
			position={position}
			whileHover={{
				y: isHovered ? 1.5 : 0,
				transition: { duration: 0.3 },
			}}
			animate={isHovered ? { y: value } : { y: 0 }}>
			{colors.map((color, index) => (
				<Instance
					args={[boxSize, boxSize, boxSize]}
					scale={0.9}
					color={color}
					position={[0, index, 0]}
					key={index}
				/>
			))}
		</motion.group>
	);
}

export default LetterH;
