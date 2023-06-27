import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { SyncedContext } from "../SyncedContext";
import { sortByColumns, countColumnTitles } from './SpreadsheetUtils';
import SidePanel from '../SidePanel/SidePanel'
import VersionHistory from "../History/History";
import Table from "../Table/Table";
import YesNoAlert from "../CustomAlerts/YesNoAlert";
import OkOnlyAlert from '../CustomAlerts/OkOnlyAlert'
import styles from './main.module.css'

const Main = ({ lastState }) => {
  const sharedState = useContext(SyncedContext);
  const { data, columns } = sharedState;
  const { storedData, storedColumns } = lastState
  const [tableTitle, setTableTitle] = useState("");
  const [counterColumnTitles, setCounterColumnTitles] = useState({});
  const genColTitle = useRef(null);
  const defaultColumn = (type = 'text', opts = {}) => {
    const { title = counterColumnTitles[type]++, order = 'ASC', visible = true } = opts;
    return {
      orderBy: order,
      visible: visible,
      title: `${type}${title}`,
      type: type,
    }
  };
  const defaultRow = () => { return { value: 'Any content', type: 'text', format: {} } };

  useEffect(() => {
    data.splice(0, data.length);
    columns.splice(0, columns.length);
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormSubmit = (title) => {
    setTableTitle(title);
  };

  const loadData = () => {
    //console.log('init load data')
    if (storedColumns.length) {
      setCounterColumnTitles(countColumnTitles(storedColumns))
      storedColumns.forEach(column => {
        columns.push(column)
      });
    }
    else {
      columns.push(...Array(3).fill(defaultColumn()));
    }
    if (storedData.length) {
      storedData.forEach((record) => {
        // record.length === 0 && record.fill('');
        data.push(record)
      })
    } else {
      data.push(...Array(3).fill(new Array(3).fill(defaultRow())));
    }
    console.log('finish load data')
    //console.log(columns.length)
    //console.log(data.length)
    // console.log(columns.get(1))
    // console.log(data.get(3))
  }

  //const currentVersion = ""; // Asigna el valor deseado a la variable currentVersion
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const size = 3;


  const [numberOfRows, setNumberOfRows] = useState(size);
  const [numberOfColumns, setNumberOfColumns] = useState(size);
  //const [data, setData] = useState(initialTable);
  const [columnTypes, setColumnTypes] = useState(new Array(size).fill("text"));
  //const [sortColumns, setSortColumns] = useState([]);
  //const [sortRows, setSortRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  const [focusedCell, setFocusedCell] = useState([null, null]);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertActionType, setAlertActionType] = useState(['', '', '']);


  const handleYesClick = () => {
    const alert = document.getElementById('yesNoAlert');
    switch (alertActionType[0]) {
      case 'DELETE COLUMN':
        deleteColumn();
        setAlertVisible(false);
        setAlertActionType(['', '', '']);
        alert.style.display = 'none';
        break;
      case 'DELETE ROW':
        deleteRow();
        setAlertVisible(false);
        setAlertActionType(['', '', '']);
        alert.style.display = 'none';
        break;
      case 'CHANGE TYPE':
        handleColumnTypeChange(selectedColumn, alertActionType[2]);
        setAlertVisible(false);
        setAlertActionType(['', '', '']);
        alert.style.display = 'none';
        break;
      default:
        break
    }
  };


  const handleNoClick = () => {
    const alert = document.getElementById('yesNoAlert');
    setAlertVisible(false);
    setAlertActionType(['', '', '']);
    alert.style.display = 'none';
  };


  const handleOkClick = () => {
    const alert = document.getElementById('okOnlyAlert');
    setAlertVisible(false);
    setAlertActionType(['', '', '']);
    alert.style.display = 'none';
  }


  const handleCellValueChange = (rowIndex, columnIndex, value) => {
    // const newData = [...data];
    // const updatedCell = { ...newData[rowIndex][columnIndex], value: value };
    // newData[rowIndex][columnIndex] = updatedCell;
    // setData(newData);
    data[rowIndex][columnIndex].value = value;
  };


  const cellParser = (rowIndex, columnIndex, newType) => {
    // const newData = [...data];
    const cellValue = data[rowIndex][columnIndex].value;
    // const cellValue = newData[rowIndex][columnIndex].value;
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

    data[rowIndex][columnIndex].value = parsedValue;
    data[rowIndex][columnIndex].type = newType;
  };

  /* const handleColumnSortChange = (columnIndex, value) => {
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
  }; */

  /* const handleRowSortChange = (rowIndex, value) => {
    if (data[rowIndex] !== undefined && data[rowIndex] !== null) {
      const newSortRows = [...sortRows];
      newSortRows[rowIndex] = { index: rowIndex, sortType: value };
      setSortRows(newSortRows);
  
      const newData = [...data];
      newData[rowIndex] = sortRow(Object.values(newData[rowIndex]), value);
      setData(newData);
    }
  }; */


  /* const sortColumn = (columnData, sortType) => {
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
  }; */

  /* const sortRow = (rowData, sortType) => {
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
  }; */

  const handleOnFocus = (rowIndex, columnIndex) => {
    if (selectedColumn !== null)
      handleColumnUnselect();
    if (selectedRow !== null)
      handleRowUnselect();
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
    setSelectedRow(null);
    const columnTitle = event.target.value;
    setSelectedColumn({ columnTitle, id:event.target.id });
  };

  const handleColumnUnselect = () => {
    setSelectedColumn(null);
  };

  const handleColumnTypeChange = (columnIndex, newType) => {
    // const newColumnTypes = [...columnTypes];
    // newColumnTypes[columnIndex] = newType;
    // setColumnTypes(newColumnTypes);

    // data.forEach((row, rowIndex) => {
    //   if (row[columnIndex].type !== newType) {
    //     cellParser(rowIndex, columnIndex, newType);
    //   }
    // });
    //************Agustin */

    console.log(newType);
    console.log(columnIndex);
    columns[columnIndex].type = newType;
    data.forEach((row, rowIndex) => {
      if (row[columnIndex].type !== newType) {
        cellParser(rowIndex, columnIndex, newType);
      }
    });
  };
  const deleteColumn = () => {
    console.log('selected: '+selectedColumn)
    console.log(columns.map(e=>e.title))
    data.forEach((row) =>
    row.splice(selectedColumn.id, 1)
    );
    columns.splice(selectedColumn.id, 1);
    console.log('selected: '+selectedColumn)
    console.log(columns.map(e=>e.title))
    setSelectedColumn(null)
  };

  const handleRowHover = (rowIndex) => {
    setHoveredRowIndex(rowIndex);
  };

  const handleRowSelect = (event) => {
    setSelectedColumn(null);
    const row = event.target.value;
    setSelectedRow(parseInt(row, 10));
  };

  const handleRowUnselect = () => {
    setSelectedRow(null);
  };

  const deleteRow = () => {
    // const newData = data.filter((_, index) => index + 1 !== selectedRow);
    // setData(newData);

    // setNumberOfRows(numberOfRows - 1);
    // setSelectedRow(null)


    //* Agustin ******


    data.splice(selectedRow - 1, 1);
    setNumberOfRows(numberOfRows - 1);
    setSelectedRow(null)
  };

  const getCellClassName = (rowIndex, columnIndex) => {
    let className = "";
    if (rowIndex === focusedCell[0] && columnIndex === focusedCell[1])
      className = styles.selectedCell;
    else if (columns[columnIndex].title === selectedColumn?.columnTitle || rowIndex + 1 === selectedRow)
      className = styles.selectedColumn;
    else className = styles.unselectedCell;

    return className;
  };

  const getInputClassName = (rowIndex, columnIndex) => {
    let className = "";
    if (columns[columnIndex].title === selectedColumn?.columnTitle || rowIndex + 1 === selectedRow)
      className = styles.selectedColumn;
    else if (rowIndex === hoveredRowIndex) className = styles.hovered;
    return className;
  };


  const exportedFunctions = {
    alphabet: alphabet,
    columns: columns,
    selectedColumn: selectedColumn,
    setSelectedColumn: setSelectedColumn,
    columnTypes: columnTypes,
    numberOfColumns: numberOfColumns,
    selectedRow: selectedRow,
    numberOfRows: numberOfRows,
    focusedCell: focusedCell,
    data: data,
    tableTitle: tableTitle,
    searchTerm: searchTerm,

    handleTableAction: (title, message, alertType, newType) => {
      setAlertVisible(alertType);
      setAlertActionType([title, message, newType])
    },

    renderTableHeader: () => {
      //const headerLetters = alphabet.slice(0, numberOfColumns);
      return (
        <tr>
          <th className={styles.header}></th>
          {/* {headerLetters.split("").map((letter, index) => ( */}
          {columns.map((column, index) => (
            <th
              key={column.title}
              className={`${styles.header} ${styles.columnName}`}
              onClick={(event) => handleColumnSelect(event)}
            >
              <input
                id={index}
                name={column.title}
                className={`${styles.input} ${styles.columnName}`}
                type='text'
                value={column.title}
                readOnly
              />
            </th>
          ))}
        </tr>
      );
    },

    renderTableRows: () => {
      // const filteredData = data.filter((row) =>
      //   row.some((cell) => {
      //     if (typeof cell.value === 'number' || typeof cell.value === 'boolean')
      //       return cell.value.toString().toLowerCase().includes(searchTerm)
      //     else return cell.value.toLowerCase().includes(searchTerm)
      //   })
      // );

      return data.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className={`${rowIndex === hoveredRowIndex ? styles.hovered : ""}`}
        >
          <td className={styles.rowNumber}>
            <input
              /* The input belongs to the row number, but it made no sense to create a new class */
              className={`${styles.input} ${styles.columnName}`}
              type='text'
              value={rowIndex + 1}
              onClick={(event) => handleRowSelect(event)}
              readOnly
            />
          </td>

          {row.map((cell, columnIndex) => {
            const commonProps = {
              className: `${styles.input} ${getInputClassName(rowIndex, columnIndex)}`,
              name: `${alphabet[columnIndex]}${rowIndex + 1}`,
              value: cell.value,
              onChange: (e) => handleCellValueChange(rowIndex, columnIndex, e.target.value),
              onMouseEnter: () => handleRowHover(rowIndex),
              onMouseLeave: () => handleRowHover(-1),
              onFocus: () => handleOnFocus(rowIndex, columnIndex),
              onBlur: (event) => handleOnBlur(event.target),
              onDoubleClick: (event) => enableEdit(event.target),
              readOnly: true
            };

            return (
              <td
                name={`Cell${alphabet[columnIndex]}${rowIndex + 1}`}
                key={columnIndex}
                className={getCellClassName(rowIndex, columnIndex)}
              >
                {columns[columnIndex]?.type === "boolean" ? (
                  <select {...commonProps}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                ) : (
                  <input
                    {...commonProps}
                    type={columns[columnIndex]?.type === "number" ? "number" : "text"}
                  />
                )}
              </td>
            );
          })}
        </tr>
      ));
    },

    addColumn: () => {
      // setNumberOfColumns(numberOfColumns + 1);
      // setColumnTypes([...columnTypes, "text"]);
      // const newData = data.map((row) => [...row, { value: 'Any content', type: 'text', format: {} }]);
      // setData(newData);

      //* Agustin ************
      setNumberOfColumns(numberOfColumns + 1);
      columns.push(defaultColumn());
      data.forEach((row) =>
        row.push({ value: 'Any content', type: 'text', format: {} })
      );
    },


    addRow: () => {
      // setNumberOfRows(numberOfRows + 1);
      // let newRow = new Array(numberOfColumns).fill({ value: 'Any content', type: 'text', format: {} });
      // newRow.forEach((cell, index) => {
      //   const type = columnTypes[index];
      //   let value = '';
      //   if (type === 'number')
      //     value = 0;
      //   else if (type === 'boolean')
      //     value = true
      //   else value = 'Any content'
      //   newRow[index] = { ...cell, type, value };
      // });
      // const newData = [...data, newRow];
      // setData(newData);

      //* Agustin ****

      setNumberOfRows(numberOfRows + 1);
      let newRow = new Array(columns.length).fill({ value: 'Any content', type: 'text', format: {} });
      newRow.forEach((cell, index) => {
        console.log(cell)
        const type = columns[index].type;
        console.log(type)
        let value = '';
        if (type === 'number')
          value = 0;
        else if (type === 'boolean')
          value = true
        else value = 'Any content'
        newRow[index] = { ...cell, type, value };
      });
      data.push(newRow);
    },

    handleSearch: (event) => {
      setSearchTerm(event.target.value.toLowerCase());
    },
  };


  return (
    <Fragment>
      <div className={styles.dataManagerMainContainer1}>
        <VersionHistory />
        <Table exportedFunctions={exportedFunctions} />
        <SidePanel
          onSubmit={handleFormSubmit}
          exportedFunctions={exportedFunctions}
        />
      </div>

      <YesNoAlert
        title={alertActionType[0]}
        message={alertActionType[1]}
        visible={alertVisible === 'yesNoAlert'}
        onYesClick={handleYesClick}
        onNoClick={handleNoClick}
      />

      <OkOnlyAlert
        title={alertActionType[0]}
        message={alertActionType[1]}
        visible={alertVisible === 'okOnlyAlert'}
        onOkClick={handleOkClick}
      //onNoClick={handleNoClick}
      />
    </Fragment>
  );
};

export default Main;