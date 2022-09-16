import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Humanoid from "./components/Humanoid";
import Character from "./types/Character";
import CircleOfHumanoids from "./components/CircleOfHumanoids";
import Circle from "./components/Circle";
import PLACES from "./data/places";
import CHARACTERS from "./data/characters";
import { COLORS } from "./enums/colors";

function App() {
  const buddha: Character = { name: "Le Seigneur Bouddha" };
  return (
    <div className="App">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        {[
          PLACES.SRAVASTI,
          PLACES.PARC_JETA,
          PLACES.JARDIN_AUMONE,
          PLACES.PAVILLON_PARE,
        ].map((place) => (
          <Circle x={250} y={250} place={place} />
        ))}
        <Humanoid x={250} y={250} character={buddha} fill={COLORS.GOLD} />
        <CircleOfHumanoids
          x={250}
          y={250}
          r={60}
          characters={Object.values(CHARACTERS).filter(
            (_, index) => !(index % 2)
          )}
          fill={COLORS.JEWEL}
          rotationPadding={25}
        />
        <CircleOfHumanoids
          x={250}
          y={250}
          r={110}
          characters={Object.values(CHARACTERS).filter((_, index) => index % 2)}
          fill={COLORS.JEWEL}
          rotationPadding={75}
        />
      </svg>
    </div>
  );
}

export default App;
