import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Humanoid from "./components/Humanoid";

function App() {
  return (
    <div className="App">
      <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
        <Humanoid x={50} y={50} />
      </svg>
    </div>
  );
}

export default App;
