import { useState } from "react";
import "../ColorCss/styley.css";
import { ChromePicker } from "react-color";

const MenuCreate = () => {
  const [color, setColor] = useState("#715353");

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div className="tokens-panel-container position">
      <span className="tokens-panel-title">New Gray Token</span>
      <div className="thq-panel-section">
        <div className="section-content">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-form-field">
              <div className="pt-stack" style={{ alignItems: "flex-start" }}>
                <div className="label-group"></div>
                <div className="pt-form-input-container">
                  <div className="pt-input flexible boxed">
                    <div className="input-addon-wrapper boxed flexible height-md not-valid">
                      <input
                        type="text"
                        placeholder="Name"
                        className="jsx-2523288086"
                        value=""
                      />
                      <fieldset className="input-border">
                        <legend className="input-border-label"></legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <span
                  data-tooltip-name="Tokens must have a name."
                  className="thq-error-message"
                >
                  <div
                    data-tooltip-name="Tokens must have a name."
                    className="error-icon "
                  >
                    <div className="pt-icon error ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="#B81919"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 1a9 9 0 100 18 9 9 0 000-18zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"
                        ></path>
                        <path d="M10.3 12.12H9.29V6h1v6.12h.01zm-.5 1.01c.2 0 .36.07.5.22.14.13.21.3.21.5s-.07.37-.22.52a.7.7 0 01-.5.2.74.74 0 01-.5-.2.7.7 0 01-.22-.52.7.7 0 01.72-.72h.01z"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="jsx-2654182512">
                    Tokens must have a name.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thq-panel-section">
        <div className="section-content">
          <div className="color-picker-container">
            <ChromePicker color={color} onChange={handleColorChange} />
          </div>
        </div>
      </div>
      <div className="thq-panel-section">
        <div className="section-content">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-btn-group">
              <button disabled="" className="pt-btn-color-add">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCreate;
