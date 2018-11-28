import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game";

import "./styles.css";

function App() {
  var name = "Mela";

  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <Game
        title="Call of Duty"
        description="Return to the 20th century’s most iconic armed conflict and the dramatic
        backdrop which first inspired the hugely-popular Call of Duty series –
        now redefined for a new gaming generation.Embark on an intense journey
        across Europe’s vast theatre of war as part of a brotherhood of ordinary
        fighting men, struggling to preserve freedom as the world teeters on the
        brink of tyranny. Also team-up with friends online and experience a
        separate, story-driven cooperative campaign."
        image="https://psmedia.playstation.com/is/image/psmedia/call-of-duty-wwii-two-column-01-ps4-eu-19apr17?$TwoColumn_Image$"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
