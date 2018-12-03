import React from "react";

export default function Game(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.imageUrl} />
      <button onClick={props.deleteGame}>Delete</button>
    </div>
  );
}
