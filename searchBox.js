import React, { Component } from "react";
import "./searchBox.css";

class searchBox extends Component {
  handleButtonClicked = event => {
    event.preventDefault();
    // console.log(event.target.userEntry.value);
    this.props.search(event.target.userEntry.value);
  };

  render() {
    return (
      <form onSubmit={this.handleButtonClicked} className="searchField">
        <p className="searchTitle">
          Search:
          <input
            className="userInput"
            placeholder="Wolf of Wall Street"
            required
            type="text"
            name="userEntry"
          />
          <button className="userSearch">Search</button>
        </p>
      </form>
    );
  }
}

export default searchBox;
