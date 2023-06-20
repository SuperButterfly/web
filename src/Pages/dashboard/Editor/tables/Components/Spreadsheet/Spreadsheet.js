import React, { useState } from "react";
import styles from "./spreadsheet.module.css";

const Table = ({ tableTitle }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const size = 3;
  /* const initialTable = new Array(size)
    .fill("")
    .map(() => new Array(size).fill("")); */

  const initialTable = new Array(size)
    .fill([])
    .map(() => new Array(size).fill({ value: 'Contenido', type: 'String', format: {} }));

  const [numberOfRows, setNumberOfRows] = useState(size);
  const [numberOfColumns, setNumberOfColumns] = useState(size);
  const [data, setData] = useState(initialTable);

  const [columnTypes, setColumnTypes] = useState(new Array(size).fill("text"));
  const [sortColumns, setSortColumns] = useState([]);
  const [sortRows, setSortRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //---------------------------------P
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  const [focusedCell, setFocusedCell] = useState([null, null]);
  const [selectedColumn, setSelectedColumn] = useState(null);


  const handleCellChange = (rowIndex, columnIndex, value) => {
    const newData = [...data];
    const updatedCell = { ...newData[rowIndex][columnIndex], value: value };
    newData[rowIndex][columnIndex] = updatedCell;
    setData(newData);
  };

  const handleColumnTypeChange = (columnIndex, value) => {
    const newColumnTypes = [...columnTypes];
    newColumnTypes[columnIndex] = value;
    setColumnTypes(newColumnTypes);
  };

  const handleColumnSortChange = (columnIndex, value) => {
    const newSortColumns = [...sortColumns];
    newSortColumns[columnIndex] = { index: columnIndex, sortType: value };
    setSortColumns(newSortColumns);

    const newData = [...data];
    const sortedColumn = sortColumn(
      newData.map((row) => row[columnIndex]),
      value
    );
    newData.forEach((row, rowIndex) => {
      row[columnIndex] = sortedColumn[rowIndex];
    });
    setData(newData);
  };

  const handleRowSortChange = (rowIndex, value) => {
    const newSortRows = [...sortRows];
    newSortRows[rowIndex] = { index: rowIndex, sortType: value };
    setSortRows(newSortRows);

    const newData = [...data];
    newData[rowIndex] = sortRow(newData[rowIndex], value);
    setData(newData);
  };

  const sortColumn = (columnData, sortType) => {
    const sortedColumn = [...columnData];
    sortedColumn.sort((a, b) => {
      if (sortType === "asc") {
        if (isNaN(a) || isNaN(b)) {
          return a.localeCompare(b);
        } else {
          return parseFloat(a) - parseFloat(b);
        }
      } else if (sortType === "desc") {
        if (isNaN(a) || isNaN(b)) {
          return b.localeCompare(a);
        } else {
          return parseFloat(b) - parseFloat(a);
        }
      }
      return 0;
    });
    return sortedColumn;
  };

  const sortRow = (rowData, sortType) => {
    const sortedRow = [...rowData];
    sortedRow.sort((a, b) => {
      if (sortType === "asc") {
        if (isNaN(a) || isNaN(b)) {
          return a.localeCompare(b);
        } else {
          return parseFloat(a) - parseFloat(b);
        }
      } else if (sortType === "desc") {
        if (isNaN(a) || isNaN(b)) {
          return b.localeCompare(a);
        } else {
          return parseFloat(b) - parseFloat(a);
        }
      }
      return 0;
    });
    return sortedRow;
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  //-----------------------------------P
  const handleRowHover = (rowIndex) => {
    setHoveredRowIndex(rowIndex);
  };

  const handleOnFocus = (rowIndex, columnIndex) => {
    setFocusedCell([rowIndex, columnIndex]);
  };

  const handleOnBlur = (element) => {
    setFocusedCell([null, null]);
    element.setAttribute("readonly", "readonly");
  };

  function enableEdit(element) {
    element.removeAttribute("readonly");
  }

  const handleColumnSelect = (event) => {
    const column = event.target.value;
    setSelectedColumn(column);
  };

  const handleColumnUnselect = () => {
    setSelectedColumn(null);
  };

  const getCellClassName = (rowIndex, columnIndex) => {
    let className = "";
    if (rowIndex === focusedCell[0] && columnIndex === focusedCell[1])
      className = styles.selectedCell;
    else if (alphabet[columnIndex] === selectedColumn)
      className = styles.selectedColumn;
    else className = styles.unselectedCell;

    return className;
  };

  const getInputClassName = (rowIndex, columnIndex) => {
    let className = "";
    if (alphabet[columnIndex] === selectedColumn)
      className = styles.selectedColumn;
    else if (rowIndex === hoveredRowIndex) className = styles.hovered;
    return className;
  };


  //---------------------------------F

  const renderTableHeader = () => {
    const headerLetters = alphabet.slice(0, numberOfColumns);
    return (
      <tr>
        <th></th>
        {headerLetters.split("").map((letter, index) => (
          <th                                  
            key={index}
            className={styles.columnName}
            onClick={(event) => handleColumnSelect(event)}
          >
           <input
            className={styles.columnName}
            type='text'
            value={letter}
            onBlur={handleColumnUnselect}
            readOnly
          />
            <select
              value={columnTypes[index]}
              onChange={(e) => handleColumnTypeChange(index, e.target.value)}
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
            </select>

            <select
              value={sortColumns[index] ? sortColumns[index].sortType : ""}
              onChange={(e) => handleColumnSortChange(index, e.target.value)}
            >
              <option value="">Order</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </th>
        ))}
      </tr>
    );
  };
  
  const renderTableRows = () => {
    const filteredData = data.filter((row) =>
      row.some((cell) => cell.value.toLowerCase().includes(searchTerm))
    );

    return filteredData.map((row, rowIndex) => (
      <tr
        key={rowIndex}
        className={`${rowIndex === hoveredRowIndex ? styles.hovered : ""}`}
      >
        <td className={styles.rowNumber}>{rowIndex + 1}</td>
        {row.map((cell, columnIndex) => (
          <td
            name={`Cell${alphabet[columnIndex]}${rowIndex + 1}`}
            key={columnIndex}
            className={getCellClassName(rowIndex, columnIndex)}
            // className={cell.toLowerCase().includes(searchTerm) ? styles.highlightedCell : ""}
          >
            {columnTypes[columnIndex] === "boolean" ? (
              <select
                className={`${styles.select} ${getInputClassName(rowIndex, columnIndex)}`}
                name={`${alphabet[columnIndex]}${rowIndex + 1}`}
                value={cell.value}
                onChange={(e) =>
                  handleCellChange(rowIndex, columnIndex, e.target.value)
                }
                onMouseEnter={() => handleRowHover(rowIndex)}
                onMouseLeave={() => handleRowHover(-1)}
                onFocus={() => handleOnFocus(rowIndex, columnIndex)}
                onBlur={(event) => handleOnBlur(event.target)}
                onDoubleClick={(event) => enableEdit(event.target)}
                readOnly
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            ) : columnTypes[columnIndex] === "number" ? (
              <input
                className={getInputClassName(rowIndex, columnIndex)}
                name={`${alphabet[columnIndex]}${rowIndex + 1}`}
                type="number"
                value={cell.value}
                onChange={(e) =>
                  handleCellChange(rowIndex, columnIndex, e.target.value)
                }
                onMouseEnter={() => handleRowHover(rowIndex)}
                onMouseLeave={() => handleRowHover(-1)}
                onFocus={() => handleOnFocus(rowIndex, columnIndex)}
                onBlur={(event) => handleOnBlur(event.target)}
                onDoubleClick={(event) => enableEdit(event.target)}
                readOnly
              />
            ) : (
              <input
                className={getInputClassName(rowIndex, columnIndex)}
                name={`${alphabet[columnIndex]}${rowIndex + 1}`}
                type="text"
                value={cell.value}
                onChange={(e) =>
                  handleCellChange(rowIndex, columnIndex, e.target.value)
                }
                onMouseEnter={() => handleRowHover(rowIndex)}
                onMouseLeave={() => handleRowHover(-1)}
                onFocus={() => handleOnFocus(rowIndex, columnIndex)}
                onBlur={(event) => handleOnBlur(event.target)}
                onDoubleClick={(event) => enableEdit(event.target)}
                readOnly

              />
            )}
          </td>
        ))}
        <td>
          <select
            value={sortRows[rowIndex] ? sortRows[rowIndex].sortType : ""}
            onChange={(e) => handleRowSortChange(rowIndex, e.target.value)}
          >
            <option value="">Order</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </td>
      </tr>
    ));
  };

  const addColumn = () => {
    setNumberOfColumns(numberOfColumns + 1);
    setColumnTypes([...columnTypes, "text"]);
    const newData = data.map((row) => [...row, { value: 'Contenido', type: 'String', format: {} }]);
    setData(newData);
  };

  const addRow = () => {
    setNumberOfRows(numberOfRows + 1);
    let newRow = new Array(numberOfColumns).fill({ value: 'Contenido', type: 'String', format: {} });
    const newData = [...data, newRow];
    setData(newData);
  };

  return (
    <div>
      <h2>{tableTitle}</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <table className={styles.table}>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <button onClick={addColumn}>+ Columna</button>
      <button onClick={addRow}>+ Fila</button>
      
      {/* //! Prueba */}
      {focusedCell[0] !== null && (
        <>
          <h3>Celda: {alphabet[focusedCell[1]]}{focusedCell[0] + 1} (Read only)</h3>
          <h3>Contenido: {data[focusedCell[0]][focusedCell[1]].value}</h3>
          <h3>Tipo: {data[focusedCell[0]][focusedCell[1]].type} (Read only)</h3>
        </>
      )}
      {/* //! Prueba */}

    </div>
  );
};

export default Table;