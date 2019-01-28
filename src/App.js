import React, { Component } from "react";
import logo from "./viking_duke.svg";
import TableDataContainer from "./tableData/TableDataContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Cakelight</h2>
        <TableDataContainer />
      </div>
    );
  }
}

export default App;
