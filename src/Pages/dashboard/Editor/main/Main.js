import "./main.css";
import SidebarIcons from "../sidebaricons/SidebarIcons.js";
import MainHeader from "../mainheader/MainHeader.js";
import ProjectTools from "../projectTools";
import CodeScreen from "../codeScreen";
import { useState } from "react";

const Main = () => {
  const [showCode, setShowCode] = useState(false);

  const handleScreen = () => {
    setShowCode(!showCode);
  };

  return (
    <>
      <MainHeader handleScreen={() => handleScreen()} />
      <div style={{ display: "flex", justifyContent: "row" }}>
        <SidebarIcons />
        {showCode ? <CodeScreen /> : <ProjectTools />}
      </div>
    </>
  );
};

export default Main;