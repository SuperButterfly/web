import ColorGroup from "./ColorJs/ColorGroup";
import "./pressets-color.css";

const PressetsColor = () => {
  return (
    <div className="pressets-color-container">
      <div className="pressets-color-container01">
        <div className="pressets-color-container02">
          <ColorGroup />
          <div className="pressets-color-container46">
            <input
              type="text"
              placeholder="Add new category"
              className="pressets-color-textinput"
            />
            <svg viewBox="0 0 1024 1024" className="pressets-color-icon44">
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressetsColor;
