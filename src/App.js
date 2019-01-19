import React, { Component } from "react";
import logo from "./viking_duke.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cakelight</h2>
        </header>
      </div>
    );
  }
}

export default App;
