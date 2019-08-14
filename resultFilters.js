import React, { Component } from "react";
import "./resultFilter.css";

class resultFilters extends Component {
  state = {};
  render() {
    return (
      <div className="print">
        <p>
          Print Type:
          <select>
            <option value="All">All</option>
            <option value="Books">Book</option>
            <option value="magazine">magazine</option>
          </select>
        </p>

        <p>
          Book Type:
          <select>
            <option value="noFilter">No Filter</option>
            <option value="pdf">Books</option>
            <option value="cost">Cost</option>
          </select>
        </p>
      </div>
    );
  }
}

export default resultFilters;
