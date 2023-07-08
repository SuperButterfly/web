import React, { useState, useEffect } from "react";
import TabsBar from "../../../../../../Components/TabsBar";
import CodeEditor from "../../../../../../Components/CodeEditor";

const ScreenEditor = ({ files }) => {
  const [filesTab, setFilesTab] = useState(files);
  const [screen, setScreen] = useState(files[0]);

  const onClose = (target) => {
    if (screen.file === target && filesTab.length !== 1) {
      if(filesTab[0]['file'] !== target){
        const newScreen = filesTab.find((e,i) => filesTab[i+1]['file'] === target && i !== 0);
        setScreen(newScreen);
      }else {
        setScreen(filesTab[1]);
      }
    };
    setFilesTab(filesTab.filter((e) => e.file !== target));
  };

  const onEdit = (target) => {
    setScreen(target);
  };

  return (
    <div>
      <TabsBar files={filesTab} onEdit={onEdit} onClose={onClose} screenFile={screen.file} />
      {String(screen?.name)}
      <CodeEditor text={screen?.text} language={screen?.language} />
    </div>
  );
};

export default ScreenEditor;
