import React, { Component } from "react";
import "./StarWars.css";
import axios from "axios";
import CharacterList from "./ListCharacters";

export default class StarWarsChars extends Component {
  state = {
    starwarsCharsList: []
  };

  componentDidMount = () => {
    this.getCharacters(`https://swapi.co/api/people/`);
  };

  getCharacters = URL => {
    axios.get(URL).then(res => {
      const starwarsCharsList = res.data.results;
      this.setState({ starwarsCharsList });
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList List={this.state.starwarsCharsList} />
      </div>
    );
  }
}
