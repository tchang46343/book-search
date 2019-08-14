import React, { Component } from "react";
import "./App.css";
import SearchBox from "./searchBox";
import ResultFilters from "./resultFilters";
import ResultContainer from "./Results/ResultContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showAddForm: false
    };
  }

  search = searchTerm => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}:keyes&key=AIzaSyAafXfoT1YH3_GRT-6EsKY6W87ge7bKDjo`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };
  render() {
    return (
      <main className="App">
        <header className="title"> Google Book search</header>
        <SearchBox search={this.search} />
        <ResultFilters />
        <ResultContainer books={this.state.books} />
      </main>
    );
  }
}

export default App;
