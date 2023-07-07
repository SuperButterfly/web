import React, { useState } from "react";
import TabsBar from "../../../../../../Components/TabsBar";
import CodeEditor from "../../../../../../Components/CodeEditor";

const ScreenEditor = ({ files }) => {
  const [filesTab, setFilesTab] = useState(files);
  const [screen, setScreen] = useState(null);
  // cada file debe venir con text, language, name , file o codigo 
  const onClose = (target) => {
    setFilesTab(files.filter((e) => e.file !== target));
  };

  const onEdit = (target) => {
    setScreen(target);
  };

  return (
    <div>
      <TabsBar files={filesTab} onEdit={onEdit} onClose={onClose}/>
      <CodeEditor text={screen?.text} language={screen?.language}/>
    </div>
  );
};

export default ScreenEditor;
