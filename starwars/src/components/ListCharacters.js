import React from "react";
import "./StarWars.css";

export default class ListCharacters extends React.Component {
  characterHandler = () => {
    if (this.props.List) {
      return this.props.List.map(char => {
        return (
          <div className="CharacterCard" key={char.name}>
            <h1 className="Name">{char.name}</h1>
            <li>{char.birth_year}</li>
            <li>{char.gender}</li>
            <li>{char.hair_color}</li>
            <li>{char.eye_color}</li>
            <li>{char.skin_color}</li>
            <li>{char.height}</li>
            <li>{char.mass}</li>
          </div>
        );
      });
    }
  };
  render() {
    return <div className="CharacterCardList">{this.characterHandler()}</div>;
  }
}
