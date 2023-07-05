import React, { useState } from "react";
import "../LayoutCss/Create.css";

const CreateLayout = () => {
  const [name, setName] = useState(""); // Estado para almacenar el valor del input de nombre
  const [value, setValue] = useState(""); // Estado para almacenar el valor del input de valor
  const [unit, setUnit] = useState(""); // Estado para almacenar la unidad seleccionada

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleAddButtonClick = () => {
    // Aquí puedes realizar alguna acción con los valores ingresados, como enviarlos a un servidor o hacer algo más con ellos
    console.log("Nombre:", name);
    console.log("Valor:", value);
    console.log("Unidad:", unit);
  };

  return (
    <div className="tokens-panel-container position">
      <span className="tokens-panel-title">New Size Token</span>
      <div className="thq-panel-section">
        <div className="section-content regular">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-form-field">
              <div className="pt-stack" style={{ alignItems: "flex-start" }}>
                <div className="label-group"></div>
                <div className="pt-form-input-container">
                  <div className="pt-input flexible boxed">
                    <div className="input-addon-wrapper">
                      <input
                        type="text"
                        placeholder="Name"
                        className="jsx-2523288086"
                        value={name} // Asigna el valor del estado al input
                        onChange={handleNameChange} // Asigna el manejador de cambio
                      />
                      <fieldset className="input-border">
                        <legend className="input-border-label"></legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thq-panel-section">
        <div className="section-content regular">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <span className="input-addon-wrapper">
              <input
                type="number"
                placeholder="Value"
                className="jsx-3684697000"
                value={value} // Asigna el valor del estado al input
                onChange={handleValueChange} // Asigna el manejador de cambio
              />
              <span className="unit hidden"></span>
              <select value={unit} onChange={handleUnitChange}>
                <option value="">-- Select Unit --</option>
                <option value="px">px</option>
                <option value="vw">vw</option>
                {/* Agrega más opciones de unidad aquí si es necesario */}
              </select>
            </span>
          </div>
        </div>
      </div>
      <div className="thq-panel-section">
        <div className="section-content regular">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-btn-group">
              <button
                disabled={!name || !value || !unit} // Deshabilita el botón si algún campo está vacío
                className="pt-btn-color-add"
                onClick={handleAddButtonClick} // Asigna el manejador de clic
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLayout;
