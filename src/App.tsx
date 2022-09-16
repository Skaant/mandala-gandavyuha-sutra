import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Humanoid from "./components/Humanoid";
import Character from "./types/Character";
import CircleOfHumanoids from "./components/CircleOfHumanoids";

function App() {
  const buddha: Character = { name: "Le Seigneur Bouddha" };
  return (
    <div className="App">
      <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
        <Humanoid x={50} y={50} character={buddha} />
        <CircleOfHumanoids
          x={50}
          y={50}
          r={30}
          characters={[{ name: "a" }, { name: "b" }, { name: "c" }]}
        />
      </svg>
    </div>
  );
}

export default App;
