import "./main.css";
import SidebarIcons from "../sidebaricons/SidebarIcons.js";
import MainHeader from "../mainheader/MainHeader.js";
import ProjectTools from "../projectTools";
import CodeScreen from "../codeScreen";
import DataTables from "../dataTablesScreen/DataTables";
import { useState } from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const [showCode, setShowCode] = useState(false);
  const tableOrEditor = useSelector((state) => state.workspace.tableOrEditor);
  const [isAdvancedSelected, setIsAdvancedSelected] = useState(false);

  const handleScreen = () => {
    setShowCode(!showCode);
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
          <CodeScreen />
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
