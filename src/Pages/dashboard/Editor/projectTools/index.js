import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VisualAdvanced from "../visualadvanced/VisualAdvanced.js";
import Settings from "../settings/Settings.js";
import Advanced from "../advanced/Advanced.js";
import ContextMenu from "../contextmenu/ContextMenu.js";
import Attributes from "../attributes/Attributes.js";
import States from "../states/States.js";
import PressetsMain from "../pressets/PressetsMain.js";
import {
  pasteComponent,
  deleteComponent,
  getParentId,
} from "../../../../redux/actions/component.js";
import PressetsText from "../pressets/PressetsText.js";
import PressetsLayout from "../pressets/PressetsLayout.js";
import PressetsColor from "../pressets/PressetsColor.js";
import EditorPanel from "../../Editor/editorpanel/EditorPanel.js";
import axios from "axios";

const ProjectTools = () => {
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

    const top = ev.pageY > windowHeight - 290 ? ev.pageY - 360 : ev.pageY - 48;
    const left = ev.pageX > windowWidth - 190 ? ev.pageX - 182 : ev.pageX;

    setPos({ top, left });
  };

  //------------------copy ------------------///

  const copyComponent = (content) => {
    localStorage.setItem("copyComponent", content);
    console.log("copy", content);
  };
  //--------------------- paste ------------------//
  const pasteFromClipboard = async () => {
    const pastedComponent = localStorage.getItem("copyComponent");
    const body = {
      component: pastedComponent,
      parentId: componentSelected.id,
    };
    console.log("paste", body);
    dispatch(pasteComponent(body));
  };
  //--------------------- Duplicate ------------------//
  const duplicate = (content) => {
    copyComponent(content);
    console.log(`este es el duplicate ${content}`);

    const pasteID = pasteFromClipboard();
    console.log(`este es el dupli paste ${pasteID}`);
  };
  //--------------------- Cut -------------------------//
  const cutComponent = (content) => {
    console.log("cut", content);
    copyComponent(content);
    dispatch(deleteComponent(componentSelected.id));
  };
  //---------------------Select Parent ------------------//
  const selectParent = async (idChildren) => {
    try {
      dispatch(getParentId(idChildren));
    } catch (error) {
      throw error;
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
      pasteFromClipboard();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, [componentSelected]);

  return (
    <>
      <div
        className="home-container"
        onClick={handleHideMenu}
        onContextMenu={handleContextMenu}
      >
        <ContextMenu
          pos={pos}
          close={setPos}
          componentSelected={componentSelected}
          copyComponent={copyComponent}
          pasteFromClipboard={pasteFromClipboard}
          duplicate={duplicate}
          cutComponent={cutComponent}
          selectParent={selectParent}
        />

        {/* - - - -  en lugar de Outlet renderizar editor datamanager y codepanel   - - - - */}
        {/* <Outlet /> */}

        <EditorPanel />

        <div
          className="home-settings"
          style={{
            display:
              componentSelected && Object.keys(componentSelected).length
                ? "block"
                : "none",
          }}
        >
          <VisualAdvanced
            selected={isAdvancedSelected}
            change={setIsAdvancedSelected}
          />
          <Attributes />
          <States />
          {!isAdvancedSelected && <Settings />}
          {isAdvancedSelected && <Advanced />}
        </div>
        <div
          className="home-settings"
          style={{
            display:
              componentSelected && Object.keys(componentSelected).length
                ? "none"
                : "block",
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

export default ProjectTools;
