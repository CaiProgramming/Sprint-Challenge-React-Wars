import React, { Component } from "react";
import "./App.css";
import Characters from "./components/StarWarsCharacters";

export default class App extends Component {
  render() {
    return (
      <div>
        <Characters />
      </div>
    );
  }
}
