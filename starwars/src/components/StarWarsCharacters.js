import React, { Component } from "react";
import "./StarWars.css";
import axios from "axios";
import CharacterList from "./ListCharacters";

export default class StarWarsChars extends Component {
  state = {
    currentPage: "",
    starwarsCharsList: []
  };
  componentDidUpdate = () => {
    if (this.state.currentPage !== this.props.Page) {
      this.getCharacters(this.props.Page);
    }
  };

  updateCharacterState = () => {
    this.setState({ starwarsCharsList: [], currentPage: this.props.Page });
  };

  getCharacters = URL => {
    this.updateCharacterState();
    axios.get(URL).then(res => {
      const starwarsCharsList = res.data.results;
      this.setState({ starwarsCharsList });
    });
  };

  render() {
    return (
      <div>
        <CharacterList List={this.state.starwarsCharsList} />
      </div>
    );
  }
}
