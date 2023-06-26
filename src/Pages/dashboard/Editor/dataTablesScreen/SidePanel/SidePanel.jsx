import "./field-form.css";
import { useState, useEffect } from "react";
import VersionHistory from "../History/History";
import Dropdown from "./Dropdown/Dropdown";

const SidePanel = ({ onSubmit, exportedFunctions }) => {
  const [title, setTitle] = useState("");
  const [columnTitle, setColumnTitle] = useState("");


  const alphabet = exportedFunctions.alphabet;
  const columns = exportedFunctions.columns;
  const renderTableHeader = exportedFunctions.renderTableHeader;
  const columnTypes = exportedFunctions.columnTypes;
  const selectedColumn = exportedFunctions.selectedColumn;
  const setSelectedColumn = exportedFunctions.setSelectedColumn;
  //const changeColumnName = exportedFunctions.changeColumnName;
  const addColumn = exportedFunctions.addColumn;
  const numberOfColumns = exportedFunctions.numberOfColumns;
  const selectedRow = exportedFunctions.selectedRow;
  const addRow = exportedFunctions.addRow;
  const numberOfRows = exportedFunctions.numberOfRows;
  const focusedCell = exportedFunctions.focusedCell;
  const handleSearch = exportedFunctions.handleSearch;
  const searchTerm = exportedFunctions.searchTerm;
  const handleTableAction = exportedFunctions.handleTableAction;

  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  function handleClick(title, newType) {
    let message = "";
    let alertType = "";

    switch (title) {
      case "DELETE COLUMN":
        message = "Delete selected column?";
        alertType = "yesNoAlert";
        break;
      case "DELETE ROW":
        message = "Delete selected row?";
        alertType = "yesNoAlert";
        break;
      case "EXISTING NAME":
        message = "The entered name already exists.";
        alertType = "okOnlyAlert";
        break;
      case "CHANGE TYPE":
        message = "Some contents may be lost when changing the column data type.\n\nContinue?";
        alertType = "yesNoAlert";
        break;
      default:
        break;
    }

    handleTableAction(title, message, alertType, newType);
    const alert = document.getElementById(alertType);
    alert.style.display = "block";
  }

  useEffect(() => {
    if (selectedColumn !== null) {
      setColumnTitle(selectedColumn.columnTitle);
    }
  }, [selectedColumn]);


  const handleColumnTitleChange = (event) => {
    setColumnTitle(event.target.value);
  };

  const handleCreateColumn = (key) => {
    addColumn(key)
  }
  const changeColumnName = (currentName, newName) => {
    if (columns.every(column => column.title.toLowerCase() !== newName.toLowerCase())) {
      let posicion = '';
      columns.forEach((column, index) => {
        if (column.title === currentName)
          posicion = index
      });
      columns[posicion].title = newName;
      setSelectedColumn({ columnTitle: newName })
    }
    else handleClick('EXISTING NAME')
  };


  return (
    <div className="field-form-field-form">
      <h1 className="editor">Editor de tabla</h1>
      <br></br>

      <form onSubmit={handleFormSubmit}>
        {/* agregar titulo */}
        <div className="field-form-container">
          <span>Titulo: </span>
          <input
            type="text"
            placeholder=""
            className="field-form-textinput"
            value={title}
            onChange={handleTitleInputChange}
          />
          <button className="submit" type="submit">
            ✔
          </button>
        </div>
        <hr></hr>

        {/* agregar fila y columnma */}
        <button className="columna" onClick={() => { handleCreateColumn() }}>
          + Columna
        </button>
        {/* {isDropdownOpen && */}
        <Dropdown
          title="Tipo"
          list={[
            { key: 'text', title: 'Text' },
            { key: 'number', title: 'Number' },
            { key: 'date', title: 'Date' }
          ]}
          handler={handleCreateColumn}
        />
        <br></br>
        <button className="fila" onClick={addRow}>
          + Fila
        </button>
        <br></br>
        <hr></hr>

        {/* input de busqueda */}
        <span> Buscar: </span>
        <input
          className="field-form-textinput2"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <br></br>
        <hr></hr>

        <p>Tag:</p>
        <p>
          {selectedColumn !== null
            ? `Column ${selectedColumn.columnTitle}`
            : selectedRow !== null
              ? `Row ${selectedRow}`
              : focusedCell[0] !== null
                ? `Cell ${alphabet[focusedCell[1]]}${focusedCell[0] + 1}`
                : 'None'
          }
        </p>

        {selectedColumn !== null && (
          <>
            <hr></hr>

            <p>Name:</p>
            <input
              value={columnTitle}
              onChange={handleColumnTitleChange}
            />
                      <button 
            className="submit" 
            type="button" 
            onClick={() => changeColumnName(selectedColumn.columnTitle, columnTitle)}
          >
              ✔
            </button>
            <br></br>

            <select
              /* className="selectType" */
              value={columnTypes[alphabet.indexOf(selectedColumn)]}
              onChange={(event) => handleClick('CHANGE TYPE', event.target.value)}
            >
              <option value="" disabled={true}>Type</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
            </select>
            <br></br>
            {/* select de seleccion de order, no ordena */}
            <select
              className="selectOrder"
              onChange={(e) => renderTableHeader(e.target.value)}
            >
              <option value="">Order</option>
              <option value="asc">asc</option>
              <option value="desc">desc</option>
            </select>
            <hr></hr>
            <br></br>
            <button
              type="button"
              onClick={() => handleClick('DELETE COLUMN')}
              disabled={numberOfColumns === 1}
            >
              Delete Column
            </button>
          </>
        )}

        {selectedRow !== null && (
          <>
            <button
              type="button"
              onClick={() => handleClick('DELETE ROW')}
              disabled={numberOfRows === 1}
            >
              Delete Row
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default SidePanel;
