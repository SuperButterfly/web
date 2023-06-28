import ColorGroup from "./ColorGroup";
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
        <div className="pressets-color-container47">
          <div className="pressets-color-container48">
            <span>New NameGroup Token / NameGroup</span>
            <div className="pressets-color-container49">
              <input
                type="text"
                placeholder="Name"
                className="pressets-color-textinput1"
              />
              <div className="pressets-color-container50">
                <svg viewBox="0 0 1024 1024" className="pressets-color-icon46">
                  <path d="M426 128h172v512h-172v-512zM426 810q0-36 25-60t61-24 61 24 25 60-25 61-61 25-61-25-25-61z"></path>
                </svg>
                <span className="pressets-color-text25">
                  tokens must have a name
                </span>
              </div>
            </div>
            <div className="pressets-color-container51">
              <span>selector de colores va aqui</span>
            </div>
            <button className="pressets-color-button">Add / Edit</button>
          </div>
          <svg viewBox="0 0 1024 1024" className="pressets-color-icon48">
            <path d="M342 214l468 298-468 298v-596z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PressetsColor;
