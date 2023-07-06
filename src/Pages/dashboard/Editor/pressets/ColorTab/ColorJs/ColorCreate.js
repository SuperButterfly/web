import { useState } from "react";
import "../ColorCss/styley.css";
import { ChromePicker } from "react-color";

const MenuCreate = (category) => {
  const [color, setColor] = useState({
    h: 250,
    s: 0,
    l: 0.2,
    a: 1,
  });
  const [opacityBg, setOpacityBg] = useState("1");
  const [colorPreview, setColorPreview] = useState("#333333");
  const [tokenName, setTokenName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const handleChangeComplete = (data) => {
    if (data.hsl !== color) {
      setColorPreview(data.hex);
      setColor(data.hsl);
      setOpacityBg(data.hsl.a);
    }
  };

  const previewStyle = {
    background: colorPreview,
    opacity: opacityBg,
  };
  console.log(previewStyle);

  const handleNameChange = (event) => {
    const name = event.target.value;
    setTokenName(name);
    setIsNameValid(name !== "");
  };

  const handleAddToken = () => {
    if (tokenName !== "") {
      // Perform the logic for adding the token
      console.log("Token added:", tokenName);
    }
  };

  return (
    <div className="tokens-panel-container position">
      <span className="tokens-panel-title">New {category.name} Token</span>
      <div className="thq-panel-section">
        <div className="section-content">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-form-field">
              <div className="pt-stack" style={{ alignItems: "flex-start" }}>
                <div className="label-group"></div>
                <div className="pt-form-input-container">
                  <div className="pt-input flexible boxed">
                    <div
                      className={`input-addon-wrapper boxed flexible height-md ${
                        isNameValid ? "" : "not-valid"
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="Name"
                        className="input-menues"
                        value={tokenName}
                        onChange={handleNameChange}
                      />
                      <fieldset className="input-border">
                        <legend className="input-border-label"></legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                {!isNameValid && (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thq-panel-section">
        <div className="section-content">
          <div className="color-picker-container">
            <ChromePicker color={color} onChange={handleChangeComplete} />
          </div>
        </div>
      </div>
      <div className="thq-panel-section">
        <div className="section-content">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-btn-group">
              <button
                disabled={!isNameValid}
                className="pt-btn-color-add"
                onClick={handleAddToken}
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

export default MenuCreate;
