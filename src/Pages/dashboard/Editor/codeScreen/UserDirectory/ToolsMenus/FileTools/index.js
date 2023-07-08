import '../FolderTools/FolderTools.css'
import { useDispatch } from "react-redux";

const FileTools = ({
  pos,
  close,
  componentSelected,
  pasteFromClipboard,
  copyComponent,
  duplicate,
  cutComponent,
  specialPaste,
  setShowFileTools}) => {

  const handleCopyClick = (componentSelected) => {
    console.log("handleCopy", componentSelected);
    copyComponent(componentSelected);
  };
  const handleCutClick = (componentSelected) => {
    console.log("handleCut", componentSelected);
    cutComponent(componentSelected);
  };

  const handlePasteClick = () => {
    pasteFromClipboard();
  };

  const handleDuplicateClick = () => {
    duplicate(componentSelected);
  };

  const handleDeleteClick = (componentSelected) => {
  };

  const handleSpecialPaste = () => {
    specialPaste(componentSelected);
  };

  return (
    <>
    <div className="aux-close-modal" onClick={setShowFileTools}></div>
    <div
      className="file-menu-context-menu"
      style={{
        top: `${pos.top}px`,
        left: `${pos.left}px`,
        display: pos.top === 0 && pos.left === 0 ? "none" : "flex",
      }}
      onClick={() => close({ top: 0, left: 0 })}
    >
      <div className="context-menu-container menu-container-options">
            <div className="context-menu-containerHover">
              <span className="context-menu-option-name">Open</span>
            </div>
            <div
              onClick={() => handleCopyClick(componentSelected)}
              className="context-menu-containerHover"
            >
              <span className="context-menu-option-name">Copy</span>
            </div>

            <div className="context-menu-containerHover" onClick={handleSpecialPaste}>
              <span className="context-menu-option-name">Copy path</span>
            </div>

            <div className="context-menu-container01" onClick={() => handleCutClick(componentSelected)}>
              <span className="context-menu-cut">Cut</span>
              <span className="context-menu-text">Ctrl + X</span>
            </div>

            <div onClick={() => handlePasteClick()} className="context-menu-container02">
              <span className="context-menu-paste">Paste</span>
              <span className="context-menu-text1">Ctrl + V</span>
            </div>

            <div className="context-menu-containerHover">
              <span className="context-menu-option-name">Rename</span>
            </div>

            <div
              className="context-menu-container04"
              onClick={() => handleDeleteClick(componentSelected)}
            >
              <span className="context-menu-option-name">Delete</span>
            </div>
          </div>
    </div>
    </>
  )
};

export default FileTools;