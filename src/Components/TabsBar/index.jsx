import React, { useState } from "react";
import TabComponent from "./TabComponent";

const TabsBar = ({ files, onEdit, onClose }) => {

  const onCloseTab = (target) => {
    onClose(files.filter(e => e.file !== target))
  };

  const onEditTab = (target) => {
    onEdit(files.find(e => e.file === target));
    // agregar funcion de boton encendido
  };

  const allFiles = files.map((e) => {
    return (
      <TabComponent
        file={e.file}
        name={e.name}
        onClose={onCloseTab}
        onEdit={onEditTab}
      />)
  });
  
  return (
    <div>
      {allFiles}
    </div>
  )
};

export default TabsBar;