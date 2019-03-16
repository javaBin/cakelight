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

const selectRow = {
  mode: 'radio',
  clickToSelect: true
};

class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  render() {
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        console.log(row.sessionId);
      }
    };
    return (
      <>
        <ToolkitProvider
          keyField="id"
          data={this.props.sessionList}
          columns={columns}
          selectRow={ selectRow }
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

              <BootstrapTable {...props.baseProps}  rowEvents={ rowEvents } />
            </div>
          )}
        </ToolkitProvider>
      </>
    );
  }
}

export default TableData;
