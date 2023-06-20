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
import {
  deleteComponentSelected,
  pasteComponent,
  deleteComponent,
} from "../../../../redux/actions/component.js";
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

  const handleContextMenu = (ev) => {
    ev.preventDefault();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    setIdElementContext(ev.target.id);

    const top = ev.pageY > windowHeight - 290 ? ev.pageY - 360 : ev.pageY - 48;
    const left = ev.pageX > windowWidth - 190 ? ev.pageX - 182 : ev.pageX;

    setPos({ top, left });
  };

  //------------------copy ------------------///

  const copyComponent = (content) => {
    const componentJSON = JSON.stringify(content);
    localStorage.setItem("copyComponent", componentJSON);
    console.log("copy", content);
  };
  //--------------------- paste ------------------//
  const pasteFromClipboard = async (content = null) => {
    const componentJSON = localStorage.getItem("copyComponent");
    if (componentJSON) {
      const pastedComponent = JSON.parse(componentJSON);
      console.log("paste", content);

      const body = {
        component: pastedComponent,
        parentId: content ? content?.parentId : componentSelected.id,
      };
      console.log("paste", body);
      dispatch(pasteComponent(body));
    }
  };
  //--------------------- Duplicate ------------------//
  const duplicate = (content) => {
    copyComponent(content);
    console.log(`este es el duplicate ${content}`);

    const pasteID = pasteFromClipboard(content);
    console.log(`este es el dupli paste ${pasteID}`);
  };
  //--------------------- Cut -------------------------//
  const cutComponent = (content) => {
    console.log("cut", content);
    copyComponent(content);
    dispatch(deleteComponent(componentSelected.id));
  };

  //---------------------SpecialPaste-----------------------//
  const specialPasteComponent = async (content) => {
    //el id del q tegno en storage, y el id, del seleccionado
    const componentJSON = localStorage.getItem("copyComponent");
    const copyComponeteId = JSON.parse(componentJSON)?.id;
    if (copyComponeteId) {
      const body = {
        idCopied: copyComponeteId,
        idPaste: content.id,
      };
      try {
        await axios.patch("/component/copiedStyles/", body); //localhost:3010/api/component/copiedStyles
      } catch (error) {
        console.log(error.message);
      }

      console.log("specialPaste", body);
    }
  };

  //---------------------Shortcuts copy paste ------------------//
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "c") {
      event.preventDefault();
      console.log(`${componentSelected.id} keydown`);
      copyComponent(componentSelected);
    }

    if (event.ctrlKey && event.key === "v") {
      event.preventDefault();
      pasteFromClipboard();
    }

    if (event.ctrlKey && event.key === "x") {
      event.preventDefault();
      cutComponent(componentSelected);
    }

    if (event.ctrlKey && event.key === "d") {
      event.preventDefault();
      copyComponent(componentSelected);
      pasteFromClipboard(componentSelected);
    }
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
          componentSelected={componentSelected}
          copyComponent={copyComponent}
          pasteFromClipboard={pasteFromClipboard}
          duplicate={duplicate}
          cutComponent={cutComponent}
          specialPaste={specialPasteComponent}
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
