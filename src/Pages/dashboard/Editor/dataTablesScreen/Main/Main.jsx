import {
  Fragment,
  useContext,
  useEffect /* , useRef */,
  useState,
} from "react";
import { SyncedContext } from "../SyncedContext";
import { /* sortByColumns, */ countColumnTitles } from "./SpreadsheetUtils";
import SidePanel from "../SidePanel/SidePanel";
import VersionHistory from "../History/History";
import Table from "../Table/Table";
import YesNoAlert from "../CustomAlerts/YesNoAlert";
import OkOnlyAlert from "../CustomAlerts/OkOnlyAlert";
import Celltypes from './CellTypes/Celltypes'
import styles from "./main.module.css";

const Main = ({ lastState }) => {
  const sharedState = useContext(SyncedContext);
  const { data, columns } = sharedState;
  const { storedData, storedColumns } = lastState;
  //const genColTitle = useRef(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //const currentVersion = ""; // Asigna el valor deseado a la variable currentVersion

  //******************************     LOCAL STATES   ************************************ */

  const [tableTitle, setTableTitle] = useState("");
  const [counterColumnTitles, setCounterColumnTitles] = useState({});
  const [numberOfRows, setNumberOfRows] = useState(0);
  const [numberOfColumns, setNumberOfColumns] = useState(0);
  //const [data, setData] = useState(initialTable);
  //const [sortColumns, setSortColumns] = useState([]);
  //const [sortRows, setSortRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  const [focusedCell, setFocusedCell] = useState([null, null]);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertActionType, setAlertActionType] = useState(["", "", ""]);

  //******************************     TABLE FUNCTIONS   ************************************ */

  const loadData = () => {
    //console.log('init load data')
    if (storedColumns.length) {
      setCounterColumnTitles(countColumnTitles(storedColumns));
      storedColumns.forEach((column) => {
        columns.push(column);
      });
    } else {
      columns.push(...Array(3).fill(defaultColumn()));
    }
    if (storedData.length) {
      storedData.forEach((record) => {
        // record.length === 0 && record.fill('');
        data.push(record);
      });
    } else {
      data.push(...Array(3).fill(new Array(3).fill(defaultRow())));
    }
    console.log("finish load data");
  };

  const handleFormSubmit = (title) => {
    setTableTitle(title);
  };
  //******************************     COLUMN FUNCTIONS   ************************************ */

  const defaultColumn = (type = "text", opts = {}) => {
    const updated = setCounterColumnTitles(countColumnTitles(columns));
    let nTitle = "";
    const tempTitle = type.charAt(0).toUpperCase() + type.slice(1);
    if (updated[type]) {
      nTitle = tempTitle +' '+ counterColumnTitles[type];
    } else {
      nTitle = tempTitle
    }

    const { title = nTitle, order = "ASC", visible = true } = opts;
    // while (
    //   columns.some((column) => column.title.toLowerCase() === `${type}${title}`)
    // ) {
    //   counterColumnTitles[type]++;
    //   title = counterColumnTitles[type];
    // }
    // counterColumnTitles[type]++;

    return {
      orderBy: order,
      visible: visible,
      title: title,
      type: type,
    };
  };

  // const defaultColumn = (type = 'text', opts = {}) => {
  //   console.log('DEFAULT')
  //   const { title = counterColumnTitles[type]++, order = 'ASC', visible = true } = opts;
  //   return {
  //     orderBy: order,
  //     visible: visible,
  //     title: `${type}${title}`,
  //     type: type,
  //   }
  // };

  const handleColumnSelect = (event) => {
    setSelectedRow(null);
    const columnTitle = event.target.value;
    setSelectedColumn({ columnTitle, id: event.target.id });
  };

  const handleColumnUnselect = () => {
    setSelectedColumn(null);
  };

  const handleColumnTypeChange = (columnIndex, newType) => {
    columns[columnIndex].type = newType;
    data.forEach((row, rowIndex) => {
      if (row[columnIndex].type !== newType) {
        cellParser(rowIndex, columnIndex, newType);
      }
    });
  };

  const deleteColumn = () => {
    data.forEach((row) => row.splice(selectedColumn.id, 1));
    columns.splice(selectedColumn.id, 1);
    setNumberOfColumns(numberOfColumns - 1);
    setSelectedColumn(null);
  };

  //******************************     ROW FUNCTIONS   ************************************ */

  const defaultRow = () => {
    return { value: "Any content", type: "text", format: {} };
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
    data.splice(selectedRow - 1, 1);
    setNumberOfRows(numberOfRows - 1);
    setSelectedRow(null);
  };

  //******************************     CELL FUNCTIONS   ************************************ */

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
      case "boolean":
        parsedValue = Boolean(cellValue);
        break;
      case "number":
        if (isNaN(parseFloat(cellValue))) parsedValue = 0;
        else parsedValue = parseFloat(cellValue);
        break;
      default:
        break;
    }

    data[rowIndex][columnIndex].value = parsedValue;
    data[rowIndex][columnIndex].type = newType;
  };

  const handleOnFocus = (rowIndex, columnIndex) => {
    if (selectedColumn !== null) handleColumnUnselect();
    if (selectedRow !== null) handleRowUnselect();
    setFocusedCell([rowIndex, columnIndex]);
  };

  const handleOnBlur = (element) => {
    setFocusedCell([null, null]);
    element.setAttribute("readonly", "readonly");
  };

  function enableEdit(element) {
    element.removeAttribute("readonly");
  }


  const getCellClassNames = (rowIndex, columnIndex) => {
    const classNames = {};
  
    if (data[rowIndex][columnIndex].type === "priority" || data[rowIndex][columnIndex].type === "state") {
      switch (data[rowIndex][columnIndex].value) {
        case "high":
        case "unstarted":
          classNames.byType = styles.red;
          break;
        case "medium":
        case "in progress":
          classNames.byType = styles.yellow;
          break;
        case "low":
        case "complete":
          classNames.byType = styles.green;
          break;
        default:
          break;
      }
    }
  
    if (rowIndex === focusedCell[0] && columnIndex === focusedCell[1]) {
      classNames.bySelected = styles.selectedCell;
    } else if (columns[columnIndex].title === selectedColumn?.columnTitle || rowIndex + 1 === selectedRow) {
      classNames.bySelected = styles.selectedColumn;
    } else {
      classNames.bySelected = styles.unselectedCell;
    }
  
    return classNames;
  };

  const getInputClassName = (rowIndex, columnIndex) => {
    let className = "";
    if (
      columns[columnIndex].title === selectedColumn?.columnTitle ||
      rowIndex + 1 === selectedRow
    )
      className = styles.selectedColumn;
    else if (rowIndex === hoveredRowIndex) className = styles.hovered;
    return className;
  };

  //******************************     ALERTS FUNCTIONS   ************************************ */

  const handleYesClick = () => {
    const alert = document.getElementById("yesNoAlert");
    switch (alertActionType[0]) {
      case "DELETE COLUMN":
        deleteColumn();
        setAlertVisible(false);
        setAlertActionType(["", "", ""]);
        alert.style.display = "none";
        break;
      case "DELETE ROW":
        deleteRow();
        setAlertVisible(false);
        setAlertActionType(["", "", ""]);
        alert.style.display = "none";
        break;
      case "CHANGE TYPE":
        handleColumnTypeChange(selectedColumn.id, alertActionType[2]);
        setAlertVisible(false);
        setAlertActionType(["", "", ""]);
        alert.style.display = "none";
        break;
      default:
        break;
    }
  };

  const handleNoClick = () => {
    const alert = document.getElementById("yesNoAlert");
    setAlertVisible(false);
    setAlertActionType(["", "", ""]);
    alert.style.display = "none";
  };

  const handleOkClick = () => {
    const alert = document.getElementById("okOnlyAlert");
    setAlertVisible(false);
    setAlertActionType(["", "", ""]);
    alert.style.display = "none";
  };

  //******************************     USE EFFECT   ************************************ */

  useEffect(() => {
    data.splice(0, data.length);
    columns.splice(0, columns.length);
    loadData();
    setNumberOfColumns(columns.length);
    setNumberOfRows(data.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //******************************     EXPORTED FUNCTIONS   ************************************ */

  const exportedFunctions = {
    alphabet: alphabet,
    columns: columns,
    selectedColumn: selectedColumn,
    setSelectedColumn: setSelectedColumn,
    numberOfColumns: numberOfColumns,
    selectedRow: selectedRow,
    numberOfRows: numberOfRows,
    focusedCell: focusedCell,
    data: data,
    tableTitle: tableTitle,
    searchTerm: searchTerm,

    handleTableAction: (title, message, alertType, newType) => {
      setAlertVisible(alertType);
      setAlertActionType([title, message, newType]);
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
                type="text"
                value={column.title}
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
          if (typeof cell.value === "number" || typeof cell.value === "boolean")
            return cell.value.toString().toLowerCase().includes(searchTerm);
          else return cell.value.toLowerCase().includes(searchTerm);
        })
      );

      return filteredData.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className={`${rowIndex === hoveredRowIndex ? styles.hovered : ""}`}
        >
          <td className={styles.rowNumber}>
            <input
              /* The input belongs to the row number, but it made no sense to create a new class */
              className={`${styles.input} ${styles.columnName}`}
              type="text"
              value={rowIndex + 1}
              onClick={(event) => handleRowSelect(event)}
              readOnly
            />
          </td>

          {row.map((cell, columnIndex) => {
            const commonProps = {
              className: `${styles.input} ${getInputClassName(
                rowIndex,
                columnIndex
              )}`,
              name: `${alphabet[columnIndex]}${rowIndex + 1}`,
              value: cell.value,
              onChange: (e) =>
                handleCellValueChange(rowIndex, columnIndex, e.target.value),
              onMouseEnter: () => handleRowHover(rowIndex),
              onMouseLeave: () => handleRowHover(-1),
              onFocus: () => handleOnFocus(rowIndex, columnIndex),
              onBlur: (event) => handleOnBlur(event.target),
              onDoubleClick: (event) => enableEdit(event.target),
              readOnly: true,
            };
            
            return (
              <td
                name={`Cell${alphabet[columnIndex]}${rowIndex + 1}`}
                key={columnIndex}
                className={`${getCellClassNames(rowIndex, columnIndex).byType} ${getCellClassNames(rowIndex, columnIndex).bySelected}`}
              >

                {Celltypes(columns[columnIndex]?.type, commonProps)}

              </td>
            );
          })}
        </tr>
      ));
    },
    addColumn: (newColumn) => {
      setNumberOfColumns(numberOfColumns + 1);
      columns.push(defaultColumn(newColumn.type, { ...newColumn }));
      data.forEach((row) =>

        row.push({ value: '', type: newColumn.type, format: {} })

      );
    },
    
    moveColumn: (direction) => {
      const currentPosition = parseInt(selectedColumn.id);
      const newPosition = direction === 'left' ? currentPosition - 1 : currentPosition + 1;
      const auxPositionType = direction === 'left' ? columns[currentPosition - 1].type : columns[currentPosition + 1].type;
      
      columns[newPosition].type = columns[currentPosition].type;
      columns[currentPosition].type = auxPositionType;
      data.forEach(row => {
        const aux1 = JSON.parse(JSON.stringify(row[newPosition]));
        const aux2 = JSON.parse(JSON.stringify(row[currentPosition]));
        row.splice(newPosition, 1, aux2)
        row.splice(currentPosition, 1, aux1);
      });      
      setSelectedColumn({columnTitle:columns[newPosition].title, id:newPosition.toString()});
    },

    addRow: () => {
      setNumberOfRows(numberOfRows + 1);
      let newRow = new Array(columns.length).fill({
        value: "Any content",
        type: "text",
        format: {},
      });
      newRow.forEach((cell, index) => {
        //console.log(cell)
        const type = columns[index].type;
        //console.log(type)
        let value = "";
        if (type === "number") value = 0;
        else if (type === "boolean") value = true;
        else value = "Any content";
        newRow[index] = { ...cell, type, value };
      });
      data.push(newRow);
    },

    moveRow: (direction) => {
      const currentPosition = selectedRow - 1;
      const newPosition =
        direction === "up" ? currentPosition - 1 : currentPosition + 1;
      setSelectedRow(direction === "up" ? currentPosition : newPosition + 1);

      const aux1 = JSON.parse(JSON.stringify(data[newPosition]));
      const aux2 = JSON.parse(JSON.stringify(data[currentPosition]));

      data.splice(newPosition, 1, aux2);
      data.splice(currentPosition, 1, aux1);
    },

    handleSearch: (event) => {
      setSearchTerm(event.target.value.toLowerCase());
    },
  };

  return (
    <Fragment>
      <div className={styles.dataManagerMainContainer}>
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
        visible={alertVisible === "yesNoAlert"}
        onYesClick={handleYesClick}
        onNoClick={handleNoClick}
      />

      <OkOnlyAlert
        title={alertActionType[0]}
        message={alertActionType[1]}
        visible={alertVisible === "okOnlyAlert"}
        onOkClick={handleOkClick}
      />
    </Fragment>
  );
};

export default Main;
