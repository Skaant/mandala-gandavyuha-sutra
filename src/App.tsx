import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Humanoid from "./components/Humanoid";
import Character from "./types/Character";
import CircleOfHumanoids from "./components/CircleOfHumanoids";
import Circle from "./components/Circle";
import PLACES from "./data/places";

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
        <Humanoid x={250} y={250} character={buddha} />
        <CircleOfHumanoids
          x={250}
          y={250}
          r={30}
          characters={[{ name: "a" }, { name: "b" }, { name: "c" }]}
        />
      </svg>
    </div>
  );
}

export default App;
