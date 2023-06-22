import './FolderTools.css'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { deleteComponent } from "@/redux/actions/component.js";

const FolderTools = ({
  pos,
  close,
  componentSelected,
  pasteFromClipboard,
  copyComponent,
  duplicate,
  cutComponent,
  specialPaste}) => {
    console.log('Render toolmenu')
    const dispatch = useDispatch();

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
    console.log("delete", componentSelected.id);
    dispatch(deleteComponent(componentSelected.id));
  };

  const handleSpecialPaste = () => {
    specialPaste(componentSelected);
  };

  return (
    <div
      className="folder-menu-context-menu"
      style={{
        top: `${pos.top}px`,
        left: `${pos.left}px`,
        display: pos.top === 0 && pos.left === 0 ? "none" : "flex",
      }}
      onClick={() => close({ top: 0, left: 0 })}
    >
      <div className="context-menu-container menu-container-options">
        <div className="context-menu-containerHover">
          <span className="context-menu-edit">Edit</span>
        </div>
        <div
          onClick={() => handleCopyClick(componentSelected)}
          className="context-menu-containerHover"
        >
          <span className="context-menu-copy">Copy</span>
        </div>

        <div className="context-menu-container01" onClick={() => handleCutClick(componentSelected)}>
          <span className="context-menu-cut">Cut</span>
          <span className="context-menu-text">Ctrl + X</span>
        </div>

        <div onClick={() => handlePasteClick()} className="context-menu-container02">
          <span className="context-menu-paste">Paste</span>
          <span className="context-menu-text1">Ctrl + V</span>
        </div>

        <div className="context-menu-containerHover" onClick={handleSpecialPaste}>
          <span className="context-menu-paste-special">Paste Special</span>
        </div>

        <div
          className="context-menu-container03"
          onClick={() => handleDuplicateClick(componentSelected)}
        >
          <span className="context-menu-duplicate">Duplicate</span>
          <span className="context-menu-text2">Ctrl + D</span>
        </div>

        <div className="context-menu-containerHover">
          <span className="context-menu-rename">Rename</span>
        </div>

        <div
          className="context-menu-container04"
          onClick={() => handleDeleteClick(componentSelected)}
        >
          <span className="context-menu-delete">Delete</span>
          <div className="context-menu-container05">
            <span className="context-menu-text3">Del |</span>
            <svg viewBox="0 0 1024 1024" className="context-menu-icon">
              <path d="M896 213.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-535.296l-261.333-298.667 261.333-298.667zM896 128h-554.667c-12.8 0-24.235 5.632-32.128 14.549l-298.667 341.333c-14.208 16.213-13.909 40.192 0 56.192l298.667 341.333c8.448 9.643 20.224 14.549 32.128 14.592h554.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM481.835 414.165l97.835 97.835-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l97.835-97.835 97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-97.835-97.835 97.835-97.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-97.835 97.835-97.835-97.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
        </div>
        <div className="context-menu-containerHover">
          <span className="context-menu-hide">Hide</span>
        </div>
      </div>
      <div className="context-menu-container06"></div>
      <div className="context-menu-container07 menu-container-options">
        <div className="context-menu-container08">
          <span className="context-menu-group">Group</span>
          <span className="context-menu-text4">Ctrl + G</span>
        </div>

        <div className="context-menu-container09">
          <span className="context-menu-ungroup">Ungroup</span>
          <span className="context-menu-text5">Ctrl + Shift + G</span>
        </div>

        <div className="context-menu-containerHover">
          <span className="context-menu-select-parent">Select Parent</span>
        </div>
      </div>
      <div className="context-menu-container10"></div>
      <div className="context-menu-containerHover">
        <div className="context-menu-container menu-container-options">
          <span className="context-menu-make-component">Make Component</span>
        </div>
      </div>
    </div>
  )
};

export default FolderTools;
