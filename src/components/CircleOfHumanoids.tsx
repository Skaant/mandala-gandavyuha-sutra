import React from "react";
import { COLORS } from "../enums/colors";
import Character from "../types/Character";
import Humanoid from "./Humanoid";

type CircleOfHumanoidsProps = {
  x: number;
  y: number;
  r: number;
  characters: Character[];
  fill?: COLORS;
  stroke?: COLORS;
  /** Percents. */
  rotationPadding?: number;
};

export default function CircleOfHumanoids({
  x,
  y,
  r,
  characters,
  fill,
  stroke,
  rotationPadding = 0,
}: CircleOfHumanoidsProps) {
  const humanoidRotation = 360 / characters.length;
  const _rotationPadding = (humanoidRotation * rotationPadding) / 100;
  return (
    <>
      {characters.map((character, index) => (
        <Humanoid
          x={
            x +
            r *
              Math.sin(
                ((index * humanoidRotation + _rotationPadding) * Math.PI) / 180
              )
          }
          y={
            y +
            r *
              Math.cos(
                ((index * humanoidRotation + _rotationPadding) * Math.PI) / 180
              )
          }
          character={character}
          fill={fill}
          stroke={stroke}
        />
      ))}
    </>
  );
}
