import React, { useState, useEffect } from "react";
import TabComponent from "./TabComponent";
import styled from "./tabsBar.module.css"

const TabsBar = ({ files, onEdit, onClose, screenFile }) => {
  const [onScreen, setOnScreen] = useState(screenFile);

  const onCloseTab = (target) => {
    onClose(target)
  };

  const onEditTab = (target) => {
    onEdit(files.find(e => e.file === target));
  };

  const tranformToTabComponent = (e) => {
    return (
      <TabComponent
        file={e.file}
        name={e.name}
        onClose={onCloseTab}
        onEdit={onEditTab}
        screenFile={onScreen}
      />)
  };

  const [allFiles, setAllFiles] = useState(files.map(tranformToTabComponent));

  useEffect(() => {
    setAllFiles(files.map(tranformToTabComponent))
  }
  ,[files, onScreen]);

  useEffect(
    () => {setOnScreen(screenFile)} , [screenFile]
  );

  return (
    <div className={styled.tabsBar}>
      {allFiles}
    </div>
  )
};

export default TabsBar;