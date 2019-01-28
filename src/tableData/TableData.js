import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "data.title.value",
    text: "Tittel",
    sort: true
  },
  {
    dataField: "data.format.value",
    text: "Format",
    sort: true
  },
  {
    dataField: "data.intendedAudience.value",
    text: "Intendeed audience",
    sort: true
  },
  {
    dataField: "status",
    text: "Status",
    sort: true
  }
];

class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  render() {
    return (
      <>
        <ToolkitProvider
          keyField="id"
          data={this.props.sessionList}
          columns={columns}
          search
          striped
          hover
          condensed
        >
          {props => (
            <div>
              <h3>Søk:</h3>
              <SearchBar {...props.searchProps} />
              <hr />

              <BootstrapTable {...props.baseProps} />
            </div>
          )}
        </ToolkitProvider>
      </>
    );
  }
}

export default TableData;
