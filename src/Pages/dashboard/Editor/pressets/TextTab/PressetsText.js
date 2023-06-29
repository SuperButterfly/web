import TextGroup from "./TextJs/TextGroup";
import "./pressets-text.css";

const PressetsText = (props) => {
  return (
    <div className="pressets-text-container">
      <span>Text Styles</span>
      <div className="pressets-text-container01"></div>
      <TextGroup />
    </div>
  );
};

export default PressetsText;
