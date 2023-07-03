import "../LayoutCss/LayoutToken.css";

const LayoutToken = ({ name, idx, px }) => {
  return (
    <div key={idx} className="layout-token-container">
      <div className="first-section">
        <span className="token-name">{name}</span>
        <div className="size-representation"></div>
      </div>
      <div className="second-section">
        <span className="token-value">{px}</span>
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
