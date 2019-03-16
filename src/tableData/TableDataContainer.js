import React from "react";
import YearSelector from "./YearSelector";
import TableData from "./TableData";
import logo from "../viking_duke.svg";

class TableDataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conferences: [],
      sessions: [],
      conferenceId: "",
      isFetching: false
    };

    this.getServerData = this.getServerData.bind(this);
    this.getTableData = this.getTableData.bind(this);
  }

  componentDidMount() {
    this.getServerData();
    this.getTableData("3baa25d3-9cca-459a-90d7-9fc349209289"); //todo avoid hardcoded id for the initial load of sessions.
  }

  getServerData() {
    fetch("https://sleepingpill.javazone.no/public/allSessions")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          conferences: json.conferences.sort(sortConferanceYearDesc)
        });
      })
      .catch(error => {
        throw Error(error);
      })
      .finally(() => {});
  }

  getTableData(value) {
    this.setState({ isFetching: true });
    fetch(`https://sleepingpill.javazone.no/data/conference/${value}/session`, {
      method: "GET",
      headers: new Headers({
        Authorization: "Basic " + btoa(`user:password`),
        "Content-Type": "application/x-www-form-urlencoded"
      })
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        this.setState({ sessions: json.sessions });
      })
      .catch(error => {
        throw Error(error);
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  onChange = event => {
    this.setState({ conferenceId: event.target.value });
    this.getTableData(event.target.value);
  };

  render() {
    return (
      <div className="col-md-10 mx-auto">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Cakelight</h2>
        <YearSelector
          conferences={this.state.conferences}
          changeSession={this.onChange}
        />
        {this.state.isFetching && <h1>Laster...</h1>}
        {!this.state.isFetching && (
          <TableData sessionList={this.state.sessions} />
        )}
      </div>
    );
  }
}

function sortConferanceYearDesc(a, b) {
  if (a.slug > b.slug) return -1;
  if (a.slug < b.slug) return 1;
  return 0;
}

export default TableDataContainer;
