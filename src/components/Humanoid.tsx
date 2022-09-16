import React from "react";

type HumanoidProps = {
  x: number;
  y: number;
  size?: number;
};

export default function Humanoid({ x, y, size = 20 }: HumanoidProps) {
  const top = [x, y - size];
  const right = [x + size * 0.6, y];
  const bottom = [x, y + size];
  const left = [x - size * 0.6, y];
  return (
    <polygon
      points={[top, right, bottom, left].map(([x, y]) => `${x},${y}`).join(" ")}
    />
  );
}
