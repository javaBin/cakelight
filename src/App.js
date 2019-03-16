import React, { Component } from "react";
import TableDataContainer from "./tableData/TableDataContainer";
import DetailedView from "./detailedView/DetailedView"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={TableDataContainer} />
          <Route exact path="/detailedView" component={DetailedView} />
        </div>
      </Router>
    );
  }
}

export default App;
