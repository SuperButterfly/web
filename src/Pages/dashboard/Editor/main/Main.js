import "./main.css";
import SidebarIcons from "../sidebaricons/SidebarIcons.js";
import MainHeader from "../mainheader/MainHeader.js";
import ProjectTools from "../projectTools";
import CodeScreen from "../codeScreen";
import { useState } from "react";
import { useSelector } from 'react-redux';
import generateJSXFromJSON from '../mainheader/Post-Processor';


const Main = () => {
  const [showCode, setShowCode] = useState(false);
  const { target } = useSelector((state) => state.project);
   const [componentCode, setComponentCode] = useState("");

  const handleScreen = () => {
    setShowCode(!showCode);
    if(showCode) {
      const jsxCode = generateJSXFromJSON(target);
      console.log(jsxCode);
      setComponentCode(jsxCode);
    }
  };

  return (
    <>
      <MainHeader handleScreen={() => handleScreen()} />
      <div style={{ display: "flex", justifyContent: "row" }}>
        <SidebarIcons />
        {showCode ? <CodeScreen code={componentCode}/> : <ProjectTools />}
      </div>
    </>
  );
};

export default Main;
