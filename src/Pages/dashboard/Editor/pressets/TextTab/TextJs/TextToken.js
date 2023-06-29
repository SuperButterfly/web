import { useRef } from "react";

const TextToken = ({ name, px, font, weight }) => {
  const ref = useRef(null);

  return (
    <div className="token-preview-wrapper">
      <div className="contenedorText" style={{ display: "flex" }}>
        <div
          className="previewT"
          style={{ fontSize: "14px", letterSpacing: "normal", color: "gray" }}
        >
          Aa
        </div>
        <div className="token-info-container">
          <div className="token-name">
            <span className="jsx-1035456428">{name}</span>
          </div>
          <span className="token-meta">
            {px} {font} {weight}
          </span>
        </div>
      </div>
      <button className="delete-btn">
        <div className="pt-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#b2b2b2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default TextToken;
