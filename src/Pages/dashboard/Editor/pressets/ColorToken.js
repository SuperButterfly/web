import "./color-token.css";
import { useRef } from "react";

const ColorToken = ({ name, color }) => {
  const ref = useRef(null);

  return (
    <div
      className="color-token-color-token"
      style={{ backgroundColor: color }}
      onMouseOver={() => (ref.current.style.display = "flex")}
      onMouseOut={() => (ref.current.style.display = "none")}
    >
      <div className="color-token-container" ref={ref}>
        <svg viewBox="0 0 1024 1024" className="color-token-icon">
          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
        </svg>
        <span className="color-token-name">{name}</span>
      </div>
    </div>
  );
};

export default ColorToken;
