import React, { useState, useEffect } from "react";
import styled from "./tabComponent.module.css"

const TabComponent = ({ file, name, onEdit, onClose, screenFile }) => {
  const [onScreen, setOnScreen] = useState(screenFile);

  const colorTabSelect = {
    background: file === onScreen? "blue" : "lightblue"
  };

  const onEditTab = () => {
    onEdit(file)
  };

  const onCloseTab = (event) => {
    event.stopPropagation();
    onClose(file)
  };

  useEffect(
    () => {setOnScreen(screenFile)} , [screenFile]
  );

  return (
    <div onClick={onEditTab} className={styled.tabComponent} style={colorTabSelect}>
      {name}
      <div onClick={onCloseTab} className={styled.onCloseTab}>x</div>
    </div>
    )
};

export default TabComponent;