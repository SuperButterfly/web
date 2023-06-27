import style from "./side-panel.module.css";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown/Dropdown";

const SidePanel = ({ onSubmit, exportedFunctions }) => {
  const [title, setTitle] = useState("");
  const [columnTitle, setColumnTitle] = useState("");
  const cleanNewColumn = {
    type: 'text',
    title: undefined,
    order: 'ASC',
    visible: true
  }
  const [newColumn, setNewColumn] = useState({...cleanNewColumn});


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

  const handleSetNewColumn = (statekey, key) => {
    setNewColumn({ ...newColumn, [statekey]: key })
  };

  const handleCreateColumn = () => {
    if (!newColumn.title?.length) newColumn.title = undefined
    addColumn(newColumn)
    setNewColumn(cleanNewColumn)
  };
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
    <div className={style.sidePanelContainer}>
      <h1 className={style.editor}>Editor de tabla</h1>
      {/* agregar titulo */}
      <div className={style.fieldFormContainer}>
        <span>Titulo: </span>
        <input
          type="text"
          placeholder=""
          className={style.fieldFormTextinput}
          value={title}
          onChange={handleTitleInputChange}
        />
        <button className={style.submit} type="submit">
          ✔
        </button>
      </div>
      <hr></hr>

      {/* agregar fila y columnma */}
      <button className={style.columna} onClick={handleCreateColumn}>
        + Columna
      </button>
      {/* {isDropdownOpen && */}

      <input
        className={style.fieldFormTextinput}
        type="text"
        value={newColumn.title || ''}
        onChange={(e) => handleSetNewColumn('title', e.target.value)}
        placeholder="Title"
      />
      <Dropdown
        title="Tipo"
        id="type"
        list={[
          { key: 'text', value: 'Text' },
          { key: 'number', value: 'Number' },
          { key: 'date', value: 'Date' }
        ]}
        handler={handleSetNewColumn}
      />
      <Dropdown
        title="Order"
        id="order"
        list={[
          { key: 'ASC', value: 'Ascendent' },
          { key: 'DESC', value: 'Descendent' }
        ]}
        handler={handleSetNewColumn}
      />
      <Dropdown
        title="Visible"
        id="visible"
        list={[
          { key: true, value: 'Visible' },
          { key: false, value: 'Hidden' }
        ]}
        handler={handleSetNewColumn}
      />
      <button className={style.fila} onClick={addRow}>
        + Fila
      </button>
      <hr></hr>

      {/* input de busqueda */}
      <span> Buscar: </span>
      <input
        className={style.fieldFormTextinput}
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
            className={style.submit}
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
            className={style.selectOrder}
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
    </div>
  );
};

export default SidePanel;
