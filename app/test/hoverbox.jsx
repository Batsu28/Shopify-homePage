import { Edges, Instance } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useShape } from "./h-position";
import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const arr = [0, 1, 2, 3];
const boxSize = 0.2;

const HoverBox = ({ box, pointerOver, hoverPosition, setHoverPosition }) => {
  const ref = useRef();
  const { hShape } = useShape();
  const [animate, setAnimate] = useState(0);

  const pointerLeave = () => {
    hShape.forEach((box) => {
      box.value = 0;
    });
    setHoverPosition(null);
    setAnimate(0);
  };

  useFrame(() => {
    let value = 0;

    if (!hoverPosition) {
      value = 0;
    } else {
      const [x, _, z] = hoverPosition;
      const check =
        Math.abs(x - box.position[0]) + Math.abs(z - box.position[2]);

      if (check <= 0) {
        value = 0.9;
      } else if (check <= 2) {
        value = 0.6;
      } else if (check <= 4) {
        value = 0.3;
      }
    }
    setAnimate(value);
  });

  const instances = useMemo(
    () =>
      arr.map((_, index) => (
        <Instance
          scale={0.99}
          color={"royalBlue"}
          key={index}
          position={[0, index, 0]}
        />
      )),
    [box]
  );

  return (
    <motion.group
      onPointerEnter={(e) => pointerOver(e, box.position)}
      onPointerLeave={pointerLeave}
      position={box.position}
      animate={{ y: animate }}
      transition={{ duration: 0.3 }}
      ref={ref}
    >
      {instances}
    </motion.group>
  );
};

export default HoverBox;
