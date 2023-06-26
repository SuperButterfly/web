import './FolderTools.css'
import { useDispatch } from "react-redux";

const FolderTools = ({
  pos,
  setAddNewPage,
  setPagesOpen,
  handleHideMenu,
  folderSelected,
  pasteFromClipboard,
  idElementContext,
  copyElement,
  cutComponent,
  renameFolder}) => {

  //Add file
  const addNewFile = async (e) => {
    e.preventDefault();
      await handleHideMenu();
      await setPagesOpen();
      await setAddNewPage();
  };

  // Rename file

  const handleRenameFolder = (e) => {
    e.preventDefault();

  }

  const handleCopyClick = async () => {
    await copyElement();
  };

  const handleCutClick = () => {
    cutComponent(idElementContext);
  };

  const handlePasteClick = () => {
    pasteFromClipboard();
  };

  const handleDeleteClick = (componentSelected) => {
  };

  // const handleSpecialPaste = () => {
  //   specialPaste(folderSelected);
  // };

  return (
    <div
      className="folder-menu-context-menu"
      style={{
        top: `${pos.top}px`,
        left: `${pos.left}px`,
        display: pos.top === 0 && pos.left === 0 ? "none" : "flex",
      }}
    >
      <div className="context-menu-container menu-container-options">
            <div className="context-menu-containerHover" onClick={addNewFile}>
              <span className="context-menu-option-name">New File</span>
            </div>
            <div
              className="context-menu-containerHover"
            >
              <span className="context-menu-option-name">New Folder</span>
            </div>

            <div className="context-menu-containerHover" onClick={() => handleCopyClick(folderSelected)}>
              <span className="context-menu-option-name">Copy</span>
            </div>

            <div className="context-menu-containerHover">
              <span className="context-menu-option-name">Copy to instance</span>
            </div>

            <div className="context-menu-containerHover" >
              <span className="context-menu-option-name">Copy path</span>
            </div>

            <div className="context-menu-container01" onClick={() => handleCutClick(folderSelected)}>
              <span className="context-menu-cut">Cut</span>
              <span className="context-menu-text">Ctrl + X</span>
            </div>

            <div onClick={() => handlePasteClick()} className="context-menu-container02">
              <span className="context-menu-paste">Paste</span>
              <span className="context-menu-text1">Ctrl + V</span>
            </div>

            <div className="context-menu-containerHover" onClick={handleRenameFolder}>
              <span className="context-menu-option-name">Rename</span>
            </div>

            <div
              className="context-menu-container04"
              onClick={() => handleDeleteClick(folderSelected)}
            >
              <span className="context-menu-option-name">Delete</span>
            </div>
          </div>
    </div>
  )
};

export default FolderTools;
