import React from "react";
import "./StarWars.css";
import axios from "axios";
import Characters from "./StarWarsCharacters";

export default class StarWarsPage extends React.Component {
  state = {
    page: "https://swapi.co/api/people/",
    data: []
  };
  componentDidMount = () => {
    this.getPage();
  };

  getPage = () => {
    return axios.get(this.state.page).then(res => {
      console.log(res.data);
      this.setState({
        data: res.data
      });
    });
  };

  buttonPrevHandler = async () => {
    await this.getPage();
    if (this.state.data.previous) {
      this.setState({
        page: this.state.data.previous
      });
    } else {
      alert("No more pages on previous");
    }
  };
  buttonNextHandler = async () => {
    await this.getPage();
    if (this.state.data.next) {
      this.setState({
        page: this.state.data.next
      });
    } else {
      alert("No more pages on next");
    }
  };
  render() {
    return (
      <div>
        <div className="Header">
          <h1 className="HeaderText">React Wars</h1>
          <div className="Btns">
            <button className="Btn" onClick={this.buttonPrevHandler}>
              previous
            </button>
            <button className="Btn" onClick={this.buttonNextHandler}>
              next
            </button>
          </div>
        </div>
        <Characters Page={this.state.page} />
      </div>
    );
  }
}
