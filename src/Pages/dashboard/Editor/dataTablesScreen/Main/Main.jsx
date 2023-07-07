import { Fragment, useContext, useEffect, useState, useRef } from "react";
import { SyncedContext } from "../SyncedContext";
import Table from "../Table/Table";
import YesNoAlert from "../CustomAlerts/YesNoAlert";
import OkOnlyAlert from "../CustomAlerts/OkOnlyAlert";
import DropdownPopup from "./DropdownPopup/DropdownPopup";
import styles from "./main.module.css";
import Celltypes from "./CellTypes/Celltypes";
import LeftPanel from "../LeftPanel/LeftPanel";
import Spreadsheet from "./SpreadSheet";
import ContextMenuData from "../ContextMenuData/ContextMenuData";

const Main = ({ lastState }) => {
  const sharedState = useContext(SyncedContext);
  const { data, columns } = sharedState;
  const { storedData, storedColumns } = lastState;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //const currentVersion = ""; // Asigna el valor deseado a la variable currentVersion
  const dropdownRef = useRef(null);

  //******************************     LOCAL STATES   ************************************ */

  const [tableTitle, setTableTitle] = useState("");
  const [counterColumnTitles, setCounterColumnTitles] = useState({});
  const [numberOfRows, setNumberOfRows] = useState(0);
  const [numberOfColumns, setNumberOfColumns] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  const [focusedCell, setFocusedCell] = useState([null, null]);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertActionType, setAlertActionType] = useState(["", "", ""]);

  //******************************     TABLE FUNCTIONS   ************************************ */
  const loadData = () => {
    console.debug("init load data");
    // newSheet.inicializar(28, 10);
    console.debug("finish load data");
  };

  const handleFormSubmit = (title) => {
    setTableTitle(title);
  };

  //*No borrar
  /* const handleArrowKeys = (event) => {
    if (!focusedCell[0]) {
      return;
    }
  
    const [rowIndex, columnIndex] = focusedCell;
    let newRow = rowIndex;
    let newColumn = columnIndex;
  
    switch (event.key) {
      case "ArrowUp":
        newRow = Math.max(rowIndex - 1, 0);
        break;
      case "ArrowDown":
        newRow = Math.min(rowIndex + 1, numberOfRows - 1);
        break;
      case "ArrowLeft":
        newColumn = Math.max(columnIndex - 1, 0);
        break;
      case "ArrowRight":
        newColumn = Math.min(columnIndex + 1, numberOfColumns - 1);
        break;
      default:
        break;
    }
  
    if (newRow !== rowIndex || newColumn !== columnIndex) {
      setFocusedCell([newRow, newColumn]);
    }
  };

  document.addEventListener("keydown", (event) => handleArrowKeys(event)); */

  //******************************     COLUMN FUNCTIONS   ************************************ */
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
    // data.forEach((row) => row.splice(selectedColumn.id, 1));
    // columns.splice(selectedColumn.id, 1);
    newSheet.deleteColumn(selectedColumn.id);
    setNumberOfColumns(numberOfColumns - 1);
    setSelectedColumn(null);
  };

  //******************************     ROW FUNCTIONS   ************************************ */
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
    newSheet.deleteRow(selectedRow);
    setNumberOfRows(numberOfRows - 1);
    setSelectedRow(null);
  };

  //******************************     CELL FUNCTIONS   ************************************ */

  const handleCellValueChange = (rowIndex, columnIndex, value) => {
    data[rowIndex][columnIndex].value = value;
  };

  const cellParser = (rowIndex, columnIndex, newType) => {
    const cellValue = data[rowIndex][columnIndex].value;
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

    if (
      data[rowIndex][columnIndex].type === "priority" ||
      data[rowIndex][columnIndex].type === "state"
    ) {
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
    } else if (
      columns[columnIndex].title === selectedColumn?.columnTitle ||
      rowIndex + 1 === selectedRow
    ) {
      classNames.bySelected = styles.selectedColumn;
    } else {
      classNames.bySelected = styles.unselectedCell;
    }

    return classNames;
  };

  const getInputClassNames = (rowIndex, columnIndex) => {
    const classNames = {};

    if (
      data[rowIndex][columnIndex].type === "priority" ||
      data[rowIndex][columnIndex].type === "state"
    ) {
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

    if (columns[columnIndex].title === selectedColumn?.columnTitle || rowIndex + 1 === selectedRow)
      classNames.bySelected = styles.selectedColumn;
    else if (
      rowIndex === hoveredRowIndex &&
      data[rowIndex][columnIndex].type !== "priority" &&
      data[rowIndex][columnIndex].type !== "state"
    )
      classNames.bySelected = styles.hovered;

    return classNames;
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

  const handlePopUp = (event) => {
    const buttonClicked = event.target.getBoundingClientRect();
    const alert = document.getElementById("DropdownPopup");
    setAlertVisible("dropdownPopup");
    alert.style.position = "absolute";
    alert.style.top = `${buttonClicked.y + buttonClicked.height}px`;
    alert.style.left = `${buttonClicked.x - 150}px`;
    alert.style.display = "block";
  };
  const [newSheet, setNewSheet] = useState();

  //******************************     USE EFFECT   ************************************ */

  useEffect(() => {
    const sheet = Spreadsheet.getInstance(undefined, data, columns);
    setNewSheet(sheet);
    setNumberOfColumns(columns.length);
    setNumberOfRows(data.length);
    // return () => Spreadsheet.resetInstance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //*No borrar
  /* useEffect(() => {
    const handleKeyDown = (event) => {
      handleArrowKeys(event);
    };
  
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      //console.log('1', dropdownRef.current?.id);
      //console.log('2', !dropdownRef.current.contains(event.target));
      //console.log(alertVisible === 'dropdownPopup' && dropdownRef.current.id === 'DropdownPopup' && !dropdownRef.current.contains(event.target))
      /* if (dropdownRef.current.id === 'DropdownPopup' && !dropdownRef.current.contains(event.target)) {
        setAlertVisible(false);
      } */
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  //******************************     EXPORTED FUNCTIONS   ************************************ */

  const exportedFunctions = {
    alphabet: alphabet,
    data: data,
    columns: columns,
    selectedColumn: selectedColumn,
    setSelectedColumn: setSelectedColumn,
    numberOfColumns: numberOfColumns,
    selectedRow: selectedRow,
    numberOfRows: numberOfRows,
    focusedCell: focusedCell,
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
          {newSheet && newSheet.getColumns().map((column, index) => (
            <th
              key={column.title}
              className={` ${styles.header} ${styles.columnName} ${
                index == selectedColumn?.id ? styles.titleColumn : ""
              } `}
              onClick={(event) => handleColumnSelect(event)}
            >
              <input
                id={index}
                name={column.title}
                className={`${styles.input} ${styles.columnName} ${
                  index == selectedColumn?.id ? styles.titleColumn : ""
                }`}
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
        <tr key={rowIndex} className={`${rowIndex === hoveredRowIndex ? styles.hovered : ""}`}>
          <td className={styles.rowNumber}>
            <input
              /* The input belongs to the row number, but it made no sense to create a new class */
              className={`${styles.input} ${styles.rowNumber} ${
                rowIndex === selectedRow - 1 ? styles.titleColumn : ""
              }`}
              type="text"
              value={rowIndex + 1}
              onClick={(event) => handleRowSelect(event)}
              readOnly
            />
          </td>

          {row.map((cell, columnIndex) => {
            const commonProps = {
              className: `${styles.input} ${getInputClassNames(rowIndex, columnIndex).byType} ${
                getInputClassNames(rowIndex, columnIndex).bySelected
              }`,
              name: `${alphabet[columnIndex]}${rowIndex + 1}`,
              value: cell.value,
              //onChange: (e) => handleCellValueChange(rowIndex, columnIndex, e.target.value),
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
                className={`${getCellClassNames(rowIndex, columnIndex).byType}
                ${
                  rowIndex === selectedRow - 1
                    ? styles.rowSelected
                    : getCellClassNames(rowIndex, columnIndex).bySelected
                } `}
              >
                {Celltypes(
                  columns[columnIndex]?.type,
                  commonProps,
                  data,
                  rowIndex,
                  columnIndex,
                  handleCellValueChange,
                  handlePopUp
                )}
              </td>
            );
          })}
        </tr>
      ));
    },

    addColumn: (newColumn) => {
      setNumberOfColumns(numberOfColumns + 1);
      newSheet.addColumn(newColumn);
    },

    moveColumn: (direction) => {
      const currentPosition = parseInt(selectedColumn.id);
      const newPosition = direction === "left" ? currentPosition - 1 : currentPosition + 1;

      //* Desplaza el nombre de la columna, junto con el contenido
      const columnsAux1 = JSON.parse(JSON.stringify(columns[newPosition]));
      const columnsAux2 = JSON.parse(JSON.stringify(columns[currentPosition]));
      columns.splice(newPosition, 1, columnsAux2);
      columns.splice(currentPosition, 1, columnsAux1);

      //* Desplaza el contenido, manteniendo el nombre de la columna en su posicion original
      /* const auxPositionType =
        direction === "left"
          ? columns[currentPosition - 1].type
          : columns[currentPosition + 1].type;

      columns[newPosition].type = columns[currentPosition].type;
      columns[currentPosition].type = auxPositionType; */

      data.forEach((row) => {
        const dataAux1 = JSON.parse(JSON.stringify(row[newPosition]));
        const dataAux2 = JSON.parse(JSON.stringify(row[currentPosition]));
        row.splice(newPosition, 1, dataAux2);
        row.splice(currentPosition, 1, dataAux1);
      });
      setSelectedColumn({
        columnTitle: columns[newPosition].title,
        id: newPosition.toString(),
      });
    },

    addRow: () => {
      setNumberOfRows(numberOfRows + 1);
      newSheet.addRow();
    },

    moveRow: (direction) => {
      const currentPosition = selectedRow - 1;
      const newPosition = direction === "up" ? currentPosition - 1 : currentPosition + 1;
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

  const initialContextMenu = {
    show: false,
    x: 0,
    y: 0,
  };

  const [contextMenu, setContextMenu] = useState(initialContextMenu);

  const handleContextMenu = (event) => {
    event.preventDefault();

    const { clientX, clientY } = event;
    setContextMenu({ show: true, x: clientX, y: clientY });
  };

  const closeContextMenu = () => {
    setContextMenu(initialContextMenu);
  };

  return (
    <Fragment>
      <div onContextMenu={handleContextMenu} className={styles.dataManagerMainContainer}>
        {contextMenu.show && (
          <ContextMenuData
            x={contextMenu.x}
            y={contextMenu.y}
            closeContextMenu={closeContextMenu}
          />
        )}
        {/* <TitleBar /> */}
        <LeftPanel controls={{ handleFormSubmit, exportedFunctions }} />

        <Table exportedFunctions={exportedFunctions} />

        {/*
        NO TOCAD ZEÑODA, SON PARA PRUEBAS
        <button
          key={`sarsdas`}
          // className={style.columnaYFila}
          onClick={loadData}
        > 
          INIT
        </button>
        <button
          key={`sarsdas`}
          // className={style.columnaYFila}
          onClick={handleAddd}
        >
          AGREGAR
        </button> */}
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

      <div ref={dropdownRef}>
        <DropdownPopup />
      </div>
    </Fragment>
  );
};

export default Main;
