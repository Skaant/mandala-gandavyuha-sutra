import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Humanoid from "./components/Humanoid";
import Character from "./types/Character";
import CircleOfHumanoids from "./components/CircleOfHumanoids";
import Circle from "./components/Circle";
import { COLORS } from "./enums/colors";

function App() {
  const buddha: Character = { name: "Le Seigneur Bouddha" };
  return (
    <div className="App">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <Circle
          x={250}
          y={250}
          r={200}
          fill={COLORS.GREY}
          place={{ name: "Sravasti" }}
        />
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
