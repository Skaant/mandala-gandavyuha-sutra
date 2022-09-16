import React from "react";
import Character from "../types/Character";

type HumanoidProps = {
  x: number;
  y: number;
  size?: number;
  character?: Character;
};

export default function Humanoid({
  x,
  y,
  size = 20,
  character,
}: HumanoidProps) {
  const top = [x, y - size];
  const right = [x + size * 0.6, y];
  const bottom = [x, y + size];
  const left = [x - size * 0.6, y];
  return (
    <>
      <polygon
        points={[top, right, bottom, left]
          .map(([x, y]) => `${x},${y}`)
          .join(" ")}
      />
      {character && (
        <text x={x} y={y - 30} textAnchor="middle" fontSize="5">
          {character.name}
        </text>
      )}
    </>
  );
}
