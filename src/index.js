import React from "react";
import ReactDOM from "react-dom";

import GamesList from "./components/GamesList";

import "./styles.css";

function App() {
  const name = "Mela";

  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <GamesList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
