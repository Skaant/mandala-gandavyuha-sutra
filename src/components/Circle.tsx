import React from "react";
import { COLORS } from "../enums/colors";
import Coords from "../types/Coords";
import Place from "../types/Place";

type CircleProps = Coords & {
  r: number;
  fill?: COLORS;
  stroke?: COLORS;
  place?: Place;
};

export default function Circle({ x, y, r, fill, stroke, place }: CircleProps) {
  return (
    <>
      <circle
        cx={x}
        cy={y}
        r={r}
        {...{
          ...(fill ? { fill } : {}),
          ...(stroke ? { stroke } : {}),
        }}
      />
      {place && (
        <text x={x} y={y - r - 12} textAnchor="middle" fontSize="3">
          {place.name}
        </text>
      )}
    </>
  );
}
