import React from "react";

class YearSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: [], isFetching: false };

    this.getServerData = this.getServerData.bind(this);
  }

  componentDidMount() {
    this.getServerData();
  }

  getServerData() {
    this.setState({ isFetching: true });
    fetch("https://sleepingpill.javazone.no/public/allSessions")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        this.setState({ text: json.conferences });
      })
      .catch(error => {
        throw Error(error);
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render() {
    return (
      <React.Fragment>
        <select>
          {this.state.text.map(conference => (
            <option key={conference.id}>{conference.name}</option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export default YearSelector;
