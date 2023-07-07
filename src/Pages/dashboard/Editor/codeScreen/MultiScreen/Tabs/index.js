import React, { useState } from "react";
import Tab from "./Tab";

const BarTabs = ({ files, onEdit, onClose }) => {

  const onCloseTab = (target) => {
    onClose(files.filter(e => e.file !== target))
  };

  const onEditTab = (target) => {
    onEdit(files.find(e => e.file === target));
    // agregar funcion de boton encendido
  };

  return (
    <div>
      {files.map((e) => {
        return (
          <Tab
            file={e.file}
            name={e.name}
            onClose={onCloseTab}
            onEdit={onEditTab}
          />)
      })
      }
    </div>
  )
};

export default BarTabs;