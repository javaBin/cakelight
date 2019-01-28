import React from "react";

class YearSelector extends React.Component {
  render() {
    return (
      <React.Fragment>
        <select onChange={this.props.changeSession}>
          {this.props.conferences.map(conference => (
            <option key={conference.id} value={conference.id}>
              {conference.name}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export default YearSelector;
