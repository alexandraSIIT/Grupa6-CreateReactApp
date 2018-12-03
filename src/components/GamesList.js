import React from "react";
import Game from "./Game";

export default class GamesList extends React.Component {
  state = {
    games: []
  };

  componentDidMount() {
    var that = this; // we need to have "this" in a function below
    fetch("https://games-world.herokuapp.com/games")
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log("games", response);
        that.setState({ games: response });
      });
  }

  render() {
    const gamesComponents = [];
    for (let i = 0; i < this.state.games.length; i++) {
      gamesComponents.push(
        <Game
          key={this.state.games[i]._id}
          _id={this.state.games[i]._id}
          title={this.state.games[i].title}
          description={this.state.games[i].description}
          imageUrl={this.state.games[i].imageUrl}
          deleteGame={() => this.deleteGame(this.state.games[i]._id)}
        />
      );
    }

    return <div>{gamesComponents}</div>;
  }

  deleteGame = function(_id) {
    console.log("deleting game", _id);
    var that = this; // we need to have "this" in a function below

    fetch("https://games-world.herokuapp.com/games/" + _id, {
      method: "DELETE"
    }).then(function() {
      fetch("https://games-world.herokuapp.com/games")
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          console.log("games", response);
          that.setState({ games: response });
        });
    });
  };
}
