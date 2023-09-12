import niceColors from "nice-color-palettes";
import { useMemo } from "react";

export const useShape = () => {
  const midZNum = [8, 9, 10, 11, 12, 13, 14];
  const midXNum = [9, 10, 11, 12, 13, 14];

  const hShape = useMemo(() => {
    const data = [];
    for (let x = 0; x < 24; x++) {
      for (let z = 0; z < 23; z++) {
        if (midZNum.includes(z)) {
          if (
            midXNum.includes(x) &&
            ((x - 9 >= 0 && x + 9 < 24) || (z - 8 >= 0 && z + 8 < 23))
          ) {
            data.push({
              position: [x, 0, z],
              value: 0,
              isHovered: false,
            });
          }
        } else {
          data.push({
            position: [x, 0, z],
            value: 0,
          });
        }
      }
    }
    return data;
  }, []);
  return { hShape };
};
