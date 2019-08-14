import React, { Component } from "react";
import "./searchBox.css";
class searchBox extends Component {
  handleButtonClicked = () => {
    console.log(this.text);
  };

  render() {
    return (
      <div className="searchField">
        <p className="searchTitle">
          Search:
          <input
            className="userInput"
            placeholder="Wolf of Wall Street"
            required
            type={Text}
            // value={this.state.value}
          />
          <button onClick={this.handleButtonClicked} className="userSearch">
            Search
          </button>
        </p>
      </div>
    );
  }
}

export default searchBox;
