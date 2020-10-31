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

interface TableDataProps {
    sessionList: any
}

const TableData: React.FC<TableDataProps>  = (props) =>  {
    return (
        <ToolkitProvider
          keyField="id"
          data={props.sessionList}
          columns={columns}
          search
        >
          {props => (
            <div>
              <h3>Søk:</h3>
              <SearchBar {...props.searchProps} />
              <hr />

              <BootstrapTable {...props.baseProps}/>
            </div>
          )}
        </ToolkitProvider>
    );
};

export default TableData;
