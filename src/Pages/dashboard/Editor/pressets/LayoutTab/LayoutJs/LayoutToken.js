import "../LayoutCss/LayoutToken.css";

const LayoutToken = ({ name, idx, px, categories }) => {
  const width = parseInt(px, 10);
  const cate = categories;
  return (
    <div key={idx} className="layout-token-container">
      <div className="first-section">
        <span className="token-name-lay">{name}</span>

        {cate?.name === "Radius" ? (
          <div className="radius-square" style={{ borderTopLeftRadius: px }}>
            {px}
          </div>
        ) : (
          <div
            className="size-representation"
            style={{ width: width > 72 ? 72 : px }}
          ></div>
        )}
      </div>
      <div className="second-section">
        {cate?.name === "Radius" ? null : (
          <span className="token-value">{px}</span>
        )}
        <button className="delete-btn-lay">
          <div className="pt-icon-lay">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
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
    </div>
  );
};

export default LayoutToken;
