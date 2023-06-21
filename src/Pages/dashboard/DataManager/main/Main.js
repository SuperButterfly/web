import { useState } from "react";
import Table from "../../Editor/tables/Components/Spreadsheet/SpreadSheet.js"; // "../../Editor/tables/Components/Spreadsheet/SpreadSheet.js";
// import Header from "../header/Header.js";
// import FieldForm from "../fields/FieldForm";
// import Fields from "../fields/Fields.js";
// import "./main.css";

const Main = () => {
  const [tableTitle, setTableTitle] = useState("");

  const handleFormSubmit = (title) => {
    setTableTitle(title);
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const size = 3;

  const initialTable = new Array(size)
    .fill([])
    .map(() => new Array(size).fill({ value: 'Any content', type: 'text', format: {} }));

  const [numberOfRows, setNumberOfRows] = useState(size);
  const [numberOfColumns, setNumberOfColumns] = useState(size);
  const [data, setData] = useState(initialTable);

  const [columnTypes, setColumnTypes] = useState(new Array(size).fill("text"));
  const [searchTerm, setSearchTerm] = useState("");

  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  const [focusedCell, setFocusedCell] = useState([null, null]);
  const [selectedColumn, setSelectedColumn] = useState(null);

  
  const handleCellValueChange = (rowIndex, columnIndex, value) => {
    const newData = [...data];
    const updatedCell = { ...newData[rowIndex][columnIndex], value: value };
    newData[rowIndex][columnIndex] = updatedCell;
    setData(newData);
  };

  
  const cellParser = (rowIndex, columnIndex, newType) => {
    const newData = [...data];
    const cellValue = newData[rowIndex][columnIndex].value;
    let parsedValue = cellValue;
    switch (newType) {
      case 'boolean':
        parsedValue = Boolean(cellValue);
        break;
      case 'number':
        if (isNaN(parseFloat(cellValue)))
          parsedValue = 0
        else parsedValue = parseFloat(cellValue);
        break;
      default:
        break;
    }
    newData[rowIndex][columnIndex] = {
      ...newData[rowIndex][columnIndex],
      value: parsedValue,
      type: newType
    };
    setData(newData);
  };


  const handleRowHover = (rowIndex) => {
    setHoveredRowIndex(rowIndex);
  };

  const handleOnFocus = (rowIndex, columnIndex) => {
    if (selectedColumn !== null)
      handleColumnUnselect();
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


  const exportedFunctions = {
    alphabet: alphabet,

    focusedCell: focusedCell,
    selectedColumn: selectedColumn, 
    data: data,
    tableTitle: tableTitle,
    searchTerm: searchTerm,
    columnTypes: columnTypes,

    renderTableHeader: () => {
      const headerLetters = alphabet.slice(0, numberOfColumns);
      return (
        <tr>
          <th className={styles.header}></th>
          {headerLetters.split("").map((letter, index) => (
            <th
              key={index}
              className={`${styles.header} ${styles.columnName}`}
              onClick={(event) => handleColumnSelect(event)}
            >
             <input
              className={`${styles.input} ${styles.columnName}`}
              type='text'
              value={letter}
              readOnly
            />
        
            </th>
          ))}
        </tr>
      );
    },
    
    renderTableRows: () => {
      const filteredData = data.filter((row) =>
        row.some((cell) => {
          if (typeof cell.value === 'number')
            return cell.value.toString().toLowerCase().includes(searchTerm)
          else return cell.value
        })
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
            >
              {columnTypes[columnIndex] === "boolean" ? (
                <select
                  className={`${styles.select} ${getInputClassName(rowIndex, columnIndex)}`}
                  name={`${alphabet[columnIndex]}${rowIndex + 1}`}
                  value={cell.value}
                  onChange={(e) =>
                    handleCellValueChange(rowIndex, columnIndex, e.target.value)
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
                  className={`${styles.input} ${getInputClassName(rowIndex, columnIndex)}`}
                  name={`${alphabet[columnIndex]}${rowIndex + 1}`}
                  type="number"
                  value={cell.value}
                  onChange={(e) =>
                    handleCellValueChange(rowIndex, columnIndex, e.target.value)
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
                  className={`${styles.input} ${getInputClassName(rowIndex, columnIndex)}`}
                  name={`${alphabet[columnIndex]}${rowIndex + 1}`}
                  type="text"
                  value={cell.value}
                  onChange={(e) =>
                    handleCellValueChange(rowIndex, columnIndex, e.target.value)
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
        </tr>
      ));
    },

    addColumn: () => {
      setNumberOfColumns(numberOfColumns + 1);
      setColumnTypes([...columnTypes, "text"]);
      const newData = data.map((row) => [...row, { value: 'Any content', type: 'text', format: {} }]);
      setData(newData);
    },

    addRow: () => {
      setNumberOfRows(numberOfRows + 1);
      let newRow = new Array(numberOfColumns).fill({ value: 'Any content', type: 'text', format: {} });
      newRow.forEach((cell, index) => {
        const type = columnTypes[index];
        let value = '';
        if (type === 'number')
          value = 0;
        else if (type === 'boolean')
          value = true
        else value = 'Any content'
        newRow[index] = { ...cell, type, value };
      });
      const newData = [...data, newRow];
      setData(newData);
    },

    handleColumnTypeChange: (columnIndex, newType) => {
      const newColumnTypes = [...columnTypes];
      newColumnTypes[columnIndex] = newType;
      setColumnTypes(newColumnTypes);
      
      data.forEach((row, rowIndex) => {
        if (row[columnIndex].type !== newType) {
          cellParser(rowIndex, columnIndex, newType);
        }
      });
    },

    handleSearch: (event) => {
      setSearchTerm(event.target.value.toLowerCase());
    },
  };

  return (
    <div className="data-manager-main-container">
      {/*<Header />
       */}
      <div className="data-manager-main-container1">
        <Table tableTitle={tableTitle} />
        {/*<FieldForm onSubmit={handleFormSubmit} />*/}
      </div>
    </div>
  );
};

export default Main;
