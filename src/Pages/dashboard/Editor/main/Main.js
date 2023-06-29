import "./main.css";
import SidebarIcons from "../sidebaricons/SidebarIcons.js";
import MainHeader from "../mainheader/MainHeader.js";
import ProjectTools from "../projectTools";
import CodeScreen from "../codeScreen";
import DataTables from "../dataTablesScreen/DataTables";
import { generateParentComponent, generateStylesFromJSON } from "../mainheader/Post-Processor";

import { useState } from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const { target } = useSelector((state) => state.project);
  const [showCode, setShowCode] = useState(false);
  const [componentCode, setComponentCode] = useState("");
  const [componentStyles, setComponentStyles] = useState("");
  const tableOrEditor = useSelector((state) => state.workspace.tableOrEditor);
  const [isAdvancedSelected, setIsAdvancedSelected] = useState(false);

  const handleScreen = () => {
    setShowCode(!showCode);
    if (showCode) {
      const jsxCode = generateParentComponent(target);
      const jsxStyles = generateStylesFromJSON(target);
      console.log(jsxStyles);
      setComponentCode(jsxCode);
      setComponentStyles(jsxStyles);
    }
  };
  console.log(componentStyles);

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
          <CodeScreen code={componentCode} componentStyles={componentStyles} />
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
