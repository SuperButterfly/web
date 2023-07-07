import React, { useState } from "react";
//import Tabs from "."
import CodeEditor from "../../../../../../Components/CodeEditor";

const ScreenEditor = ({ files }) => {
 /* const [filesTab, setFilesTab] = useState(files);
  const [screen, setScreen] = useState(null);

  const onClose = (target) => {
    setFilesTab(files.filter((e) => e.file !== target));
  };

  const onEdit = (target) => {
    setScreen(target);
  };*/

  return (
    <div>
      {/*<Tabs files={filesTab} onEdit={onEdit} onClose={onClose} />
      <div>{screen}</div>*/}
    </div>
  );
};

export default ScreenEditor;
