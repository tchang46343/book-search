import React, { Component } from "react";
import "./App.css";
import SearchBox from "./searchBox";
import ResultFilters from "./resultFilters";
import ResultContainer from "./Results/resultContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  componentDidMount() {
    const url = "http://localhost:8081/v3/bookmarks";
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  render() {
    return (
      <main className="App">
        <header className="title"> Google Book search</header>
        <SearchBox />
        <ResultFilters />
        <ResultContainer />
      </main>
    );
  }
}

export default App;
