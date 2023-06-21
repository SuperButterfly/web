import "./field-form.css";
import { useState } from "react";

const FieldForm = ({onSubmit, exportedFunctions}) => {
  const [title, setTitle] = useState("");

  const alphabet = exportedFunctions.alphabet;
  const renderTableHeader = exportedFunctions.renderTableHeader;
  const columnTypes = exportedFunctions.columnTypes;
  const handleColumnTypeChange = exportedFunctions.handleColumnTypeChange;
  const selectedColumn = exportedFunctions.selectedColumn;
  const addColumn = exportedFunctions.addColumn;
  const addRow = exportedFunctions.addRow;
  const focusedCell = exportedFunctions.focusedCell;
  const handleSearch = exportedFunctions.handleSearch;
  const searchTerm = exportedFunctions.searchTerm;

  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    setTitle(""); 
  };


  return (
    <div className="field-form-field-form">
      <h1 className="editor">Editor de tabla</h1>
      <form onSubmit={handleFormSubmit}>

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


        <button className="columna" onClick={addColumn}>
        + Columna
        </button>
        <br></br>
        <button className="fila" onClick={addRow}>
          + Fila
        </button>
        <br></br>
        <hr></hr>


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
            ? `Column ${selectedColumn}` 
            : (focusedCell[0] !== null
              ? `Cell ${alphabet[focusedCell[1]]}${focusedCell[0] + 1}`
              : 'None')
          }
        </p>

        {selectedColumn !== null && (
        <>
          <select 
            value={columnTypes[alphabet.indexOf(selectedColumn)]} 
            onChange={(event) => handleColumnTypeChange(alphabet.indexOf(selectedColumn), event.target.value)}
          >
            <option value="" disabled={true}>Type</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
          </select>
          <br></br>
          <hr></hr>
          <select 
            className="selectOrder"
            onChange={(e) => renderTableHeader(e.target.value)}
           >
            <option value="">Order</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </>
      )}
      </form>
    </div>
  );
};

export default FieldForm;
