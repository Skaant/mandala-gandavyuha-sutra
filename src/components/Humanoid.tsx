import React from "react";
import { COLORS } from "../enums/colors";
import Character from "../types/Character";

type HumanoidProps = {
  x: number;
  y: number;
  size?: number;
  character?: Character;
  fill?: COLORS;
  stroke?: COLORS;
};

export default function Humanoid({
  x,
  y,
  size = 10,
  character,
  fill,
  stroke,
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
        {...{
          ...(fill ? { fill } : {}),
          ...(stroke ? { stroke, strokeWidth: 2 } : {}),
        }}
      />
      {character && (
        <text x={x} y={y - 12} textAnchor="middle" fontSize="3">
          {character.name}
        </text>
      )}
    </>
  );
}
