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
      <MainHeader />
      <div style={{display:"flex",justifyContent:"row"}}>
        <SidebarIcons />
        <div className="home-container" onClick={handleHideMenu} onContextMenu={handleContextMenu}>
          <ContextMenu
            pos={pos}
            close={setPos}
            componentSelected={componentSelected}
            copyComponent={copyComponent}
            pasteFromClipboard={pasteFromClipboard}
            duplicate={duplicate}
            cutComponent={cutComponent}
          />
          
          {/* - - - -  en lugar de Outlet renderizar editor datamanager y codepanel   - - - - */}
          <Outlet />
  
          <div
            className="home-settings"
            style={{
              display: componentSelected && Object.keys(componentSelected).length ? "block" : "none",
            }}
          >
            <VisualAdvanced selected={isAdvancedSelected} change={setIsAdvancedSelected} />
            <Attributes />
            <States />
            {!isAdvancedSelected && <Settings />}
            {isAdvancedSelected && <Advanced />}
          </div>
          <div
            className="home-settings"
            style={{
              display: componentSelected && Object.keys(componentSelected).length ? "none" : "block",
            }}
          >
            <PressetsMain selected={selected} change={change} />
            {selected === "text" && <PressetsText />}
            {selected === "layout" && <PressetsLayout />}
            {selected === "color" && <PressetsColor />}
          </div>
        </div>
      </div>
      { /*<CodePanel/>*/}
    </>
  );
};

export default Main;
