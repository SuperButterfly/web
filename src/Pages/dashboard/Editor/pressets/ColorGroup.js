import "./color-group.css";
import { useState } from "react";
import ColorToken from "./ColorToken";
import ColorMenu from "./ColorMenu";
import data from "./color.json";

const ColorGroup = () => {
  const colorGroup = data;
  const [open, setOpen] = useState(false);
  const handleMenu = (option) => {
    console.log("handleMenu: ", option);
    setOpen(!open);
  };

  return (
    <>
      {colorGroup.categories.map((category, idx) => (
        <div id={idx} className="color-group-color-group">
          <div className="color-group-container">
            <h3 className="color-group-text">{category.name}</h3>
            <svg
              viewBox="0 0 1024 1024"
              className="color-group-icon"
              onClick={handleMenu}
            >
              <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
            </svg>
            {open && <ColorMenu handleMenu={handleMenu} />}
          </div>
          <div className="color-group-container1">
            {category.tokens.map((token) => (
              <ColorToken name={token.name} color={token.color.hex} />
            ))}
            <button class="pt-bton">
              <div class="pt-iconx ">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="#363636"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a.5.5 0 00-1 0v3H3a.5.5 0 000 1h3v3a.5.5 0 001 0V7h3a.5.5 0 000-1H7V3z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ColorGroup;
