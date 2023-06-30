import { useState } from "react";
import TextToken from "./TextToken";
import TextMenu from "./TextMenu";
import data from "./text.json";
import "../TextCss/TextToken.css";

const TextGroup = () => {
  const textGroup = data;
  const [estru, setEstru] = useState(false);

  const handleCreate = () => {
    const valueOf = estru;
    setEstru(!valueOf);
  };

  return (
    <>
      <div className="token-preview-wrapper">
        <div className="contenedorText" style={{ display: "flex" }}>
          <div
            className="previewT"
            style={{
              fontSize: "14px",
              letterSpacing: "normal",
              color: "black",
            }}
          >
            Aa
          </div>
          <div className="token-info-container">
            <div className="token-name">
              <span className="jsx-1035456428">Content</span>
              <span className="token-role">default</span>
            </div>
            <span className="token-meta">16px Inter 400 </span>
          </div>
        </div>
      </div>

      {textGroup["text styles"].tokens.map((token, tokenIdx) => (
        <TextToken
          key={tokenIdx}
          name={token.name}
          weight={token.weight}
          font={token.font}
          px={token.px}
        />
      ))}

      <button onClick={handleCreate} className="pt-bton">
        <div className="pt-iconx ">
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
      {estru && <TextMenu />}
    </>
  );
};

export default TextGroup;
