import "./sidebaricons.css";
import HelpMenu from "./HelpMenu.js";
import { useState, useRef, useEffect } from "react";
import ElementsPanel from "../explorer/ElementsPanel.js";
import CssClasses from "../explorer/CssClasses.js";
import AssetsManager from "../explorer/AssetsManager.js";
// import TablesContainer from "../tables/TablesContainer.js";
import LayersFiles from "../layersandfiles/LayersFiles";
import Explorer from "../explorer/Explorer";
import Directory from "../codeScreen/UserDirectory/index";
import { useDispatch, useSelector } from "react-redux";
import ContextMenu from "../contextmenu/ContextMenu";
import {
  pasteComponent,
  deleteComponent,
  groupComponents,
  unGroupComponents,
} from "../../../../redux/actions/component.js";
import { setTableOrEditor } from "../../../../redux/slices/workspaceSlices";

const discordsrc = "/workspace/assets/discord.svg";

const SidebarIcons = ({ isAdvancedSelected, setIsAdvancedSelected }) => {
  const showRef = useRef(null);
  const [isHelpOn, setIsHelpOn] = useState(false);

  const [expand, setExpand] = useState({ active: false, size: 0 });
  const codeOrEditor = useSelector((state) => state.workspace.codeOrEditor);
  const tableOrEditor = useSelector((state) => state.workspace.tableOrEditor);
  const [tab, setTab] = useState(1);
  const [tablas, setTablas] = useState(false);
  const tabs = ["elements", "explorer", "code", "css", "assets", "tables"];

  useEffect(() => {
    if (codeOrEditor) {
      setTab(2);
    } else {
      setTab(1);
    }
  }, [codeOrEditor]);

  const handleStateTable = () => {
    const newValue = !tableOrEditor;
    setTab(null);
    setTablas(!tablas);
    dispatch(setTableOrEditor(newValue));
    showRef.current.style.display = "none";
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    if (ev.target.id !== tab) {
      setTab(ev.target.id);
      setTablas(false);
      showRef.current.style.display = "flex";
      dispatch(setTableOrEditor(false));
    } else if(ev.target.id === tab) {
      setTab(!ev.target.id);
      setTablas(false);
      showRef.current.style.display = "none";
      dispatch(setTableOrEditor(false));
    }
  };

  const handleHelp = (ev) => {
    ev.preventDefault();
    setIsHelpOn(!isHelpOn);
  };

  const handleClosePanel = (ev) => {
    ev.preventDefault();
    showRef.current.style.display = "none";
  };
  const closeButton = "flex";

  /*--------------Funciones del ContextMenu----------------------*/
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [idElementContext, setIdElementContext] = useState("");
  const dispatch = useDispatch();

  const { componentSelected, componentsSelected } = useSelector((state) => state.component);
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
  //-----------------Edit-------------------///
  const editComponent = (id) => {
    setIsAdvancedSelected(id);
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
  //----------------------- Group --------------------------//+
  const groupComponent = () => {
    dispatch(groupComponents(componentsSelected));
  };

  //----------------------- unGroup --------------------------//+
  const unGroupComponent = () => {
    dispatch(unGroupComponents(componentSelected.id));
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

  /*Funciones del ContextMenu*/

  return (
    <div className="sidebar-icons-container">
      <div className="sidebar-icons-menubar">
        <div className="sidebar-icons-container01">
          <div
            className="sidebar-icons-container02"
            onClick={handleClick}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 804.5714285714286 1024' id='0' fill='${
                tabs[tab] === "elements" ? "%23363636" : "%23b2b2b2"
              }' %3E%3Cpath id='0' d='M658.286 457.143v36.571c0 10.286-8 18.286-18.286 18.286h-201.143v201.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-201.143h-201.143c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h201.143v-201.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286v201.143h201.143c10.286 0 18.286 8 18.286 18.286zM731.429 713.143v-475.429c0-50.286-41.143-91.429-91.429-91.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429zM804.571 237.714v475.429c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c90.857 0 164.571 73.714 164.571 164.571z'%3E%3C/path%3E%3C/svg%3E%0A")`,
            }}
            id="0"
          >
            <div
              className="sidebar-icons-container03"
              style={
                tabs[tab] === "elements"
                  ? { backgroundColor: "#363636" }
                  : { backgroundColor: "transparent" }
              }
              id="0"
            ></div>
          </div>
          {!codeOrEditor ? (
            <div
              className="sidebar-icons-container02"
              onClick={handleClick}
              id="1"
              style={{
                backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='${
                  tabs[tab] === "explorer" ? "%23363636" : "%23b2b2b2"
                }' viewBox='0 0 1024 1024' className='sidebar-icons-icon02' %3E%3Cpath id='1' d='M1024 320l-512-256-512 256 512 256 512-256zM512 148.97l342.058 171.030-342.058 171.030-342.058-171.030 342.058-171.030zM921.444 460.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722zM921.444 652.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722z'%3E%3C/path%3E%3C/svg%3E")`,
              }}
            >
              <div
                className="sidebar-icons-container05"
                style={
                  tabs[tab] === "explorer"
                    ? { backgroundColor: "#363636" }
                    : { backgroundColor: "transparent" }
                }
                id="1"
              ></div>
            </div>
          ) : (
            <div
              className="sidebar-icons-container02"
              onClick={handleClick}
              id="2"
              style={{
                backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='${
                  tabs[tab] === "code" ? "%23363636" : "%23b2b2b2"
                }' viewBox='0 0 1024 1024' className='sidebar-icons-icon02' %3E%3Cpath id='1' d='M352.571 799.429l-28.571 28.571c-7.429 7.429-18.857 7.429-26.286 0l-266.286-266.286c-7.429-7.429-7.429-18.857 0-26.286l266.286-266.286c7.429-7.429 18.857-7.429 26.286 0l28.571 28.571c7.429 7.429 7.429 18.857 0 26.286l-224.571 224.571 224.571 224.571c7.429 7.429 7.429 18.857 0 26.286zM690.286 189.714l-213.143 737.714c-2.857 9.714-13.143 15.429-22.286 12.571l-35.429-9.714c-9.714-2.857-15.429-13.143-12.571-22.857l213.143-737.714c2.857-9.714 13.143-15.429 22.286-12.571l35.429 9.714c9.714 2.857 15.429 13.143 12.571 22.857zM1065.714 561.714l-266.286 266.286c-7.429 7.429-18.857 7.429-26.286 0l-28.571-28.571c-7.429-7.429-7.429-18.857 0-26.286l224.571-224.571-224.571-224.571c-7.429-7.429-7.429-18.857 0-26.286l28.571-28.571c7.429-7.429 18.857-7.429 26.286 0l266.286 266.286c7.429 7.429 7.429 18.857 0 26.286z'%3E%3C/path%3E%3C/svg%3E")`,
              }}
            >
              <div
                className="sidebar-icons-container05"
                style={
                  tabs[tab] === "code"
                    ? { backgroundColor: "#363636" }
                    : { backgroundColor: "transparent" }
                }
                id="2"
              ></div>
            </div>
          )}

          <div
            className="sidebar-icons-container06"
            onClick={handleClick}
            id="3"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg id='2'  fill='${
                tabs[tab] === "css" ? "%23363636" : "%23b2b2b2"
              }' className='sidebar-icons-container08' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath id='2' d='M6.389 18.046c.303.15.672.224 1.106.224.317 0 .602-.042.854-.126.252-.084.467-.198.644-.343.177-.15.315-.322.413-.518.098-.196.15-.408.154-.637a.114.114 0 00-.042-.105.142.142 0 00-.105-.042h-.665a.212.212 0 00-.126.035c-.033.023-.056.068-.07.133-.075.303-.203.513-.385.63a1.274 1.274 0 01-.68.168c-.312 0-.561-.086-.748-.259-.187-.177-.287-.467-.301-.868a16.467 16.467 0 010-1.176c.014-.401.114-.688.3-.861.188-.177.437-.266.75-.266.27 0 .497.056.679.168.182.112.31.322.385.63a.24.24 0 00.07.133.212.212 0 00.126.035h.665a.142.142 0 00.105-.042.114.114 0 00.042-.105 1.473 1.473 0 00-.154-.637 1.549 1.549 0 00-.413-.511 1.94 1.94 0 00-.644-.35 2.693 2.693 0 00-.854-.126c-.43 0-.796.077-1.1.231a1.61 1.61 0 00-.692.651 2.282 2.282 0 00-.266 1.015 27.178 27.178 0 000 1.246c.019.397.107.737.266 1.022.159.28.387.497.686.651zM11 18.081c.293.126.657.189 1.091.189.397 0 .744-.058 1.043-.175.299-.117.53-.282.693-.497.168-.22.252-.483.252-.791 0-.275-.058-.502-.175-.679-.117-.182-.3-.331-.553-.448a4.903 4.903 0 00-.973-.308 7.323 7.323 0 01-.679-.21 1.01 1.01 0 01-.37-.224.493.493 0 01-.113-.329c0-.196.077-.34.231-.434.154-.093.357-.14.61-.14.242 0 .44.051.594.154.154.103.245.226.273.371a.206.206 0 00.091.105.248.248 0 00.112.028h.651c.047 0 .082-.014.105-.042a.159.159 0 00.042-.105.96.96 0 00-.133-.441 1.412 1.412 0 00-.35-.427 1.695 1.695 0 00-.58-.322 2.37 2.37 0 00-.806-.126c-.378 0-.705.06-.98.182-.27.121-.48.287-.63.497a1.24 1.24 0 00-.217.721c0 .28.058.511.175.693.121.182.299.334.532.455a4.3 4.3 0 00.882.301 6.3 6.3 0 01.728.217c.187.065.324.14.413.224a.41.41 0 01.133.322.521.521 0 01-.252.455c-.163.112-.413.168-.749.168-.21 0-.385-.028-.525-.084a.918.918 0 01-.322-.21.74.74 0 01-.16-.266.315.315 0 00-.085-.091c-.028-.028-.072-.042-.133-.042h-.623a.142.142 0 00-.147.147c.01.229.089.448.238.658.154.205.376.373.665.504zM16.582 18.27c-.434 0-.798-.063-1.092-.189a1.665 1.665 0 01-.665-.504c-.149-.21-.228-.43-.238-.658a.142.142 0 01.147-.147h.623c.061 0 .105.014.133.042.033.023.061.054.084.091a.74.74 0 00.161.266c.08.084.187.154.322.21.14.056.315.084.525.084.336 0 .586-.056.75-.168a.521.521 0 00.251-.455.41.41 0 00-.133-.322 1.16 1.16 0 00-.413-.224 6.3 6.3 0 00-.728-.217 4.3 4.3 0 01-.882-.301 1.393 1.393 0 01-.532-.455c-.116-.182-.175-.413-.175-.693 0-.27.073-.511.217-.721.15-.21.36-.376.63-.497.276-.121.602-.182.98-.182.304 0 .572.042.805.126.234.08.427.187.581.322.154.13.271.273.35.427a.96.96 0 01.133.441.159.159 0 01-.042.105c-.023.028-.058.042-.105.042h-.65a.248.248 0 01-.113-.028.206.206 0 01-.09-.105c-.029-.145-.12-.268-.274-.371-.154-.103-.352-.154-.595-.154-.252 0-.455.047-.609.14a.472.472 0 00-.23.434c0 .13.037.24.111.329.08.084.203.159.371.224.173.065.4.135.68.21.396.089.72.191.972.308.252.117.437.266.553.448.117.177.175.404.175.679 0 .308-.084.572-.252.791-.163.215-.394.38-.693.497a2.856 2.856 0 01-1.043.175z' %3E%3C/path%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M11.951 1.833a1.712 1.712 0 00-1.712 1.712v.102a.5.5 0 01-.303.457l-.005.002a.5.5 0 01-.55-.098l-.034-.034a1.712 1.712 0 10-2.422 2.422l.034.034a.5.5 0 01.099.55l-.002.005a.5.5 0 01-.457.303h-.054A1.712 1.712 0 004.908 9.5H4.5A2.5 2.5 0 002 12v7.5A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5V12a2.5 2.5 0 00-2.5-2.5h-.424a1.712 1.712 0 00-1.622-2.26h-.101a.5.5 0 01-.457-.304l-.002-.005a.5.5 0 01.098-.55l.034-.033a1.71 1.71 0 00-.555-2.794 1.712 1.712 0 00-1.867.371l-.034.034a.5.5 0 01-.58.087.5.5 0 01-.326-.453v-.048a1.712 1.712 0 00-1.713-1.712zM17.91 9.5a.712.712 0 00-.454-1.26h-.106a1.5 1.5 0 01-1.371-.907 1.5 1.5 0 01.3-1.652l.005-.004.036-.037a.715.715 0 000-1.007.715.715 0 00-1.008 0l-.04.04a1.5 1.5 0 01-1.64.306 1.5 1.5 0 01-.967-1.367v-.067a.712.712 0 00-1.425 0v.105a1.5 1.5 0 01-.906 1.372 1.5 1.5 0 01-1.652-.3l-.004-.005-.037-.036a.714.714 0 10-1.008 1.008l.04.04a1.5 1.5 0 01.302 1.652 1.5 1.5 0 01-1.372.907h-.057A.712.712 0 006.038 9.5H9.55a2.5 2.5 0 114.9 0h3.459zm-4.494 0a1.5 1.5 0 10-2.83 0h2.83zM3 12a1.5 1.5 0 011.5-1.5h15A1.5 1.5 0 0121 12v7.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5V12z'%3E%3C/path%3E%3C/svg%3E")`,
            }}
          >
            <div
              className="sidebar-icons-container07"
              style={
                tabs[tab] === "css"
                  ? { backgroundColor: "#363636" }
                  : { backgroundColor: "transparent" }
              }
              id="3"
            ></div>
          </div>

          <div
            className="sidebar-icons-container02"
            onClick={handleClick}
            id="4"
            style={{
              backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='${
                tabs[tab] === "assets" ? "%23363636" : "%23b2b2b2"
              }' viewBox='0 0 1024 1024' className='sidebar-icons-icon06' id='3' %3E%3Cpath id='3' d='M959.884 128c0.040 0.034 0.082 0.076 0.116 0.116v767.77c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.772c0.034-0.040 0.076-0.082 0.114-0.114h895.77zM960 64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64v0z'%3E%3C/path%3E%3Cpath id='3' d='M832 288c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z'%3E%3C/path%3E%3Cpath id='3' d='M896 832h-768v-128l224-384 256 320h64l224-192z'%3E%3C/path%3E%3C/svg%3E")`,
            }}
          >
            <div
              className="sidebar-icons-container11"
              style={
                tabs[tab] === "assets"
                  ? { backgroundColor: "#363636" }
                  : { backgroundColor: "transparent" }
              }
              id="4"
            ></div>
          </div>

          <div
            className="sidebar-icons-container17"
            onClick={handleStateTable}
            id="5"
            style={{
              backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='${
                tablas && tablas ? "%23363636" : "%23b2b2b2"
              }' viewBox='0 0 1024 1024' className='sidebar-icons-icon06' id='4' %3E%3Cpath id='4' d='M0 64v896h1024v-896h-1024zM384 640v-192h256v192h-256zM640 704v192h-256v-192h256zM640 192v192h-256v-192h256zM320 192v192h-256v-192h256zM64 448h256v192h-256v-192zM704 448h256v192h-256v-192zM704 384v-192h256v192h-256zM64 704h256v192h-256v-192zM704 896v-192h256v192h-256z'%3E%3C/path%3E%3C/svg%3E")`,
            }}
          >
            <div
              className="sidebar-icons-container18"
              style={
                tablas && tablas
                  ? { backgroundColor: "#363636" }
                  : { backgroundColor: "transparent" }
              }
              id="5"
            ></div>
          </div>
        </div>
        <div className="sidebar-icons-container12">
          <svg viewBox="0 0 952.5394285714285 1024" className="sidebar-icons-icon10">
            <path d="M936.571 273.143c14.286 20.571 18.286 47.429 10.286 73.714l-157.143 517.714c-14.286 48.571-64.571 86.286-113.714 86.286h-527.429c-58.286 0-120.571-46.286-141.714-105.714-9.143-25.714-9.143-50.857-1.143-72.571 1.143-11.429 3.429-22.857 4-36.571 0.571-9.143-4.571-16.571-3.429-23.429 2.286-13.714 14.286-23.429 23.429-38.857 17.143-28.571 36.571-74.857 42.857-104.571 2.857-10.857-2.857-23.429 0-33.143 2.857-10.857 13.714-18.857 19.429-29.143 15.429-26.286 35.429-77.143 38.286-104 1.143-12-4.571-25.143-1.143-34.286 4-13.143 16.571-18.857 25.143-30.286 13.714-18.857 36.571-73.143 40-103.429 1.143-9.714-4.571-19.429-2.857-29.714 2.286-10.857 16-22.286 25.143-35.429 24-35.429 28.571-113.714 101.143-93.143l-0.571 1.714c9.714-2.286 19.429-5.143 29.143-5.143h434.857c26.857 0 50.857 12 65.143 32 14.857 20.571 18.286 47.429 10.286 74.286l-156.571 517.714c-26.857 88-41.714 107.429-114.286 107.429h-496.571c-7.429 0-16.571 1.714-21.714 8.571-4.571 6.857-5.143 12-0.571 24.571 11.429 33.143 50.857 40 82.286 40h527.429c21.143 0 45.714-12 52-32.571l171.429-564c3.429-10.857 3.429-22.286 2.857-32.571 13.143 5.143 25.143 13.143 33.714 24.571zM328.571 274.286c-3.429 10.286 2.286 18.286 12.571 18.286h347.429c9.714 0 20.571-8 24-18.286l12-36.571c3.429-10.286-2.286-18.286-12.571-18.286h-347.429c-9.714 0-20.571 8-24 18.286zM281.143 420.571c-3.429 10.286 2.286 18.286 12.571 18.286h347.429c9.714 0 20.571-8 24-18.286l12-36.571c3.429-10.286-2.286-18.286-12.571-18.286h-347.429c-9.714 0-20.571 8-24 18.286z"></path>
          </svg>
          <img alt="discord" src={discordsrc} className="sidebar-icons-image" />
          <div className="sidebar-icons-container13" onClick={handleHelp}>
            <div
              className="sidebar-icons-container14"
              style={isHelpOn ? { backgroundColor: "#363636" } : { backgroundColor: "transparent" }}
            ></div>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="sidebar-icons-icon12"
              style={isHelpOn ? { fill: "#363636" } : { fill: "#b2b2b2" }}
            >
              <path d="M502.857 685.714v91.429c0 10.286-8 18.286-18.286 18.286h-91.429c-10.286 0-18.286-8-18.286-18.286v-91.429c0-10.286 8-18.286 18.286-18.286h91.429c10.286 0 18.286 8 18.286 18.286zM649.143 402.286c0 81.143-56.571 113.143-98.286 136.571-29.714 17.143-48 28-48 46.286v18.286c0 10.286-8 18.286-18.286 18.286h-91.429c-10.286 0-18.286-8-18.286-18.286v-38.857c0-70.286 50.286-92.571 90.857-110.857 34.286-16 55.429-26.857 55.429-52.571 0-33.143-41.714-57.714-79.429-57.714-20 0-41.143 6.286-54.286 15.429-12.571 8.571-24.571 21.143-45.714 47.429-3.429 4.571-8.571 6.857-14.286 6.857-4 0-8-1.143-10.857-3.429l-61.714-46.857c-7.429-5.714-9.143-16.571-4-24.571 46.857-73.714 112.571-109.714 199.429-109.714v0c93.714 0 198.857 74.286 198.857 173.714zM438.857 146.286c-201.714 0-365.714 164-365.714 365.714s164 365.714 365.714 365.714 365.714-164 365.714-365.714-164-365.714-365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <HelpMenu isHelpOn={isHelpOn} />
          </div>
        </div>
      </div>

      {true && (
        <div className="sidebar-icons-showpanel" ref={showRef}>
          <div
            className="sidebar-icons-container15"
            style={expand.active ? { width: expand.size } : {}}
          >
            {tabs[tab] === "elements" && <ElementsPanel controls={[expand, setExpand]} />}

            {tabs[tab] === "explorer" && (
              <>
                <div
                  className="sidebar-icons-container99"
                  onClick={handleHideMenu}
                  onContextMenu={handleContextMenu}
                >
                  <ContextMenu
                    pos={pos}
                    close={setPos}
                    componentSelected={componentSelected}
                    componentsSelected={componentsSelected}
                    copyComponent={copyComponent}
                    pasteFromClipboard={pasteFromClipboard}
                    duplicate={duplicate}
                    cutComponent={cutComponent}
                    selectParent={selectParent}
                    editComponent={editComponent}
                    groupComponent={groupComponent}
                    unGroupComponent={unGroupComponent}
                  />
                  <Explorer />
                  <LayersFiles />
                </div>
              </>
            )}
            {tabs[tab] === "code" && <Directory />}

            {tabs[tab] === "css" && <CssClasses />}
            {tabs[tab] === "assets" && <AssetsManager />}
          </div>

          <div
            className="sidebar-icons-container16"
            style={{ display: closeButton }}
            onClick={handleClosePanel}
          >
            <svg viewBox="0 0 1024 1024" className="sidebar-icons-icon14">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="sidebar-icons-icon16">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarIcons;
