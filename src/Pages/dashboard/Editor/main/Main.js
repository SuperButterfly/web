import "./main.css";
import SidebarIcons from "../sidebaricons/SidebarIcons.js";
import MainHeader from "../mainheader/MainHeader.js";
import ProjectTools from "../projectTools";
import CodeScreen from "../codeScreen";
import DataTables from "../dataTablesScreen/DataTables";
import generateJSXFromJSON from '../mainheader/Post-Processor';
import { useState } from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const { target } = useSelector((state) => state.project);
  const [showCode, setShowCode] = useState(false);
  const [componentCode, setComponentCode] = useState('')
  const tableOrEditor = useSelector((state) => state.workspace.tableOrEditor);
  const [isAdvancedSelected, setIsAdvancedSelected] = useState(false);

  const handleScreen = () => {
    setShowCode(!showCode);
    if(showCode) {
      const jsxCode = generateJSXFromJSON(target);
      console.log(jsxCode);
      setComponentCode(jsxCode);
    }
  };

  const dataTables = tableOrEditor;

  return (
    <>
      <MainHeader handleScreen={() => handleScreen()} />
      <div style={{ display: "flex", justifyContent: "row" }}>
        <SidebarIcons
          isAdvancedSelected={isAdvancedSelected}
          setIsAdvancedSelected={setIsAdvancedSelected}
        />

        {dataTables ? (
          <DataTables />
        ) : showCode ? (
          <CodeScreen  code={componentCode}/>
        ) : (
          <ProjectTools
            isAdvancedSelected={isAdvancedSelected}
            setIsAdvancedSelected={setIsAdvancedSelected}
          />
        )}
      </div>
    </>
  );
};

export default Main;
