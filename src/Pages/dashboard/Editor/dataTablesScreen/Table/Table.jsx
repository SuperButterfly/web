import React from "react";
import styles from "./table.module.css";
const Table = ({ exportedFunctions }) => {
  
  const renderTableHeader = exportedFunctions.renderTableHeader;
  const renderTableRows = exportedFunctions.renderTableRows;
  //const alphabet = exportedFunctions.alphabet;
  //const focusedCell = exportedFunctions.focusedCell;
  //const selectedColumn = exportedFunctions.selectedColumn;
  //const data = exportedFunctions.data;
  const tableTitle = exportedFunctions.tableTitle;
  //const columnTypes = exportedFunctions.columnTypes;
  

  return (
    <div>
      <h2>{tableTitle}</h2>
    

      <table className={styles.table}>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      
      {/* {focusedCell[0] !== null && (
        <>
          <h3>Cell: {alphabet[focusedCell[1]]}{focusedCell[0] + 1} (Read only)</h3>
          <h3>Content: {data[focusedCell[0]][focusedCell[1]].value}</h3>
          <h3>ColumnType: {columnTypes[focusedCell[1]]} (Read only)</h3>
          <h3>CellType: {data[focusedCell[0]][focusedCell[1]].type} (Read only)</h3>
        </>
      )}

      {selectedColumn !== null && (
        <>
          <h3>Column: {selectedColumn} (Read only)</h3>
          <h3>ColumnType: {columnTypes[alphabet.indexOf(selectedColumn)]}</h3>
        </>
      )} */}

    </div>
  );
};

export default Table;
