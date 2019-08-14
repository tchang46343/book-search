import React, { Component } from "react";
import "./resultContainer.css";
import listing from "./resultList";

class ResultContainer extends Component {
  state = {};
  render() {
    console.log(this.props);
    const books = this.props.books.map(book => {
      let amount = 0;
      if (book.saleInfo.listPrice) {
        amount = book.saleInfo.listPrice.amount;
      }

      return (
        <li>
          {book.id} {amount}
        </li>
      );
    });
    return (
      <div>
        <ul>{books}</ul>
      </div>
    );
  }
}

export default ResultContainer;
