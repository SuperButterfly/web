import "./main.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VisualAdvanced from "../visualadvanced/VisualAdvanced.js";
import Settings from "../settings/Settings.js";
import Advanced from "../advanced/Advanced.js";
import SidebarIcons from "../sidebaricons/SidebarIcons.js";
import MainHeader from "../mainheader/MainHeader.js";
import ContextMenu from "../contextmenu/ContextMenu.js";
import Attributes from "../attributes/Attributes.js";
import States from "../states/States.js";
import PressetsMain from "../pressets/PressetsMain.js";
import { deleteComponentSelected, pasteComponent } from "../../../../redux/actions/component.js";
import PressetsText from "../pressets/PressetsText.js";
import PressetsLayout from "../pressets/PressetsLayout.js";
import PressetsColor from "../pressets/PressetsColor.js";
import clipboardCopy from "clipboard-copy";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { paste } from "@testing-library/user-event/dist/paste";

const Main = () => {
  const [isAdvancedSelected, setIsAdvancedSelected] = useState(false);
  const [selected, change] = useState("text");
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [idElementContext, setIdElementContext] = useState("");
  const dispatch = useDispatch();

  const { componentSelected } = useSelector((state) => state.component);
  const handleHideMenu = (ev) => {
    setPos({ top: 0, left: 0 });
    setIdElementContext(ev.target.id);
    console.log(`${ev.target.id} este es el click`);
  };
  /*
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;
      
      console.log(target)
      console.log("onclick",target.onclick,!!target.onclick)
      console.log("Target",event.target)
      if (!target.onclick){
        dispatch(deleteComponentSelected())
      }    
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [dispatch]);
  */

  const handleContextMenu = (ev) => {
    ev.preventDefault();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    setIdElementContext(ev.target.id);
    console.log(`${idElementContext} este es el context`);

    const top = ev.pageY > windowHeight - 290 ? ev.pageY - 360 : ev.pageY - 48;
    const left = ev.pageX > windowWidth - 190 ? ev.pageX - 182 : ev.pageX;

    setPos({ top, left });
  };

  //------------------copy ------------------///

  const copyToClipboard = (content) => {
    //clipboardCopy(content)
    /*  navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log(`copiado al portapapeles, ${content}`);
      })
      .catch((error) => {
        console.error("Error al copiar al portapapeles:", error);
      }); */
    localStorage.setItem("copyID", content);
    console.log(`copiado , ${content}`);
  };
  //--------------------- paste ------------------//
  const pasteFromClipboard = async () => {
    const pasteID = localStorage.getItem("copyID");
    const body = {
      id: pasteID,
      parentId: componentSelected.id,
    };
    dispatch(pasteComponent(body));
  };

  //---------------------Shortcuts copy paste ------------------//
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "c") {
      event.preventDefault();
      console.log(`${componentSelected.id} keydown`);
      copyToClipboard(componentSelected.id);
    }
    if (event.ctrlKey && event.key === "v") {
      event.preventDefault();
      pasteFromClipboard();
    }
    if (event.ctrlKey && event.key === "d") {
      event.preventDefault();
      copyToClipboard(componentSelected.id);
      pasteFromClipboard();
    }
  };

  //--------------------- Duplicate ------------------//
  const duplicate = (content) => {
    copyToClipboard(content);
    console.log(`este es el duplicate ${content}`);

    const pasteID = pasteFromClipboard();
    console.log(`este es el dupli paste ${pasteID}`);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, [componentSelected]);

  return (
    <>
      <MainHeader />
      <div className="home-container" onClick={handleHideMenu} onContextMenu={handleContextMenu}>
        <ContextMenu
          pos={pos}
          close={setPos}
          idElement={componentSelected.id}
          copyToClipboard={copyToClipboard}
          pasteFromClipboard={pasteFromClipboard}
          duplicate={duplicate}
        />
        <SidebarIcons />
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
    </>
  );
};

export default Main;
