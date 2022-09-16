import React from "react";
import { COLORS } from "../enums/colors";
import Coords from "../types/Coords";
import Place from "../types/Place";

type CircleProps = Coords & {
  r?: number;
  fill?: COLORS;
  stroke?: COLORS;
  place?: Place;
};

export default function Circle({ x, y, r, fill, stroke, place }: CircleProps) {
  const _r = place ? place.size : r;
  if (!_r) throw new Error("radius must be set");
  return (
    <>
      <circle
        cx={x}
        cy={y}
        r={_r}
        {...{
          ...(place ? { fill: place.color } : fill ? { fill } : {}),
          ...(stroke ? { stroke } : {}),
        }}
      />
      {place && (
        <text x={x} y={y - _r - 12} textAnchor="middle" fontSize="3">
          {place.name}
        </text>
      )}
    </>
  );
}
