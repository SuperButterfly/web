import "./mainheader.css";
import ReactDOMServer from "react-dom/server";
import { useState } from "react";
import { useSelector } from "react-redux";
import Share from "../share/Share.js";
import Publish from "../publish/Publish.js";
import Popmenu from "./Popmenu.js";
import TeleModal from "./TeleModal.js";
import TeleProgress from "./TeleProgress.js";
import { getTele, formatTele, saveTele } from "./teleImport.js";
import Export from "./Export";
import Prueba from "../prueba/Prueba.js";
import { useDispatch } from "react-redux";
import { setCodeOrEditor } from "../../../../redux/slices/workspaceSlices";

const MainHeader = ({ handleScreen }) => {
  const { projectSelected, target } = useSelector((state) => state.project);
  const { user } = useSelector((state) => state.user);
  const [isShareOn, closeShare] = useState(false);
  const [isPublishOn, closePublish] = useState(false);
  const [isMenuOn1, closeMenu1] = useState(false);
  const [isModalOn1, closeModal1] = useState(false);
  const [isModalOn2, closeModal2] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const initialteledata = {
    name: "",
    URL: "",
  };
  const [fileContent, setFileContent] = useState("");
  const [teledata, setTeleData] = useState(initialteledata);
  const [show, setShow] = useState(false);
  const codeOrEditor = useSelector((state) => state.workspace.codeOrEditor);

  const initialProgress = {
    getTeleProject: false,
    formatData: false,
    makeProject: false,
  };
  const [progress, setProgress] = useState(initialProgress);

  const dispatch = useDispatch();

  const handleShow = () => {
    const newShow = !show;
    if (showExport) setShowExport(false);
    setShow(newShow);

    const newValue = !codeOrEditor;
    dispatch(setCodeOrEditor(newValue));
  };

  const importTemplate = async () => {
    let result = "";
    result = await getTele(teledata);
    if (result === "ok") {
      setProgress({
        ...progress,
        getTeleProject: true,
      });
    }
    console.log("get: ", result);
    result = "";
    result = await formatTele(teledata);
    if (result === "ok") {
      setProgress({
        ...progress,
        getTeleProject: true,
      });
    }
    console.log("format: ", result);
    result = "";
    result = await saveTele(teledata);
    if (result === "ok") {
      setProgress({
        ...progress,
        getTeleProject: true,
      });
    }
    console.log("save: ", result);
    result = "";
    // DESPACHAR UPDATE DE PROJECT
    closeModal2(false);
  };

  const handleModal1 = (button) => {
    if (button === "import") {
      closeModal1(false);
      closeModal2(true);
      importTemplate();
    } else {
      setTeleData(initialteledata);
      closeModal1(false);
    }
  };

  const handleChangeModal1 = (e) => {
    e.preventDefault();
    setTeleData({
      ...teledata,
      [e.target.name]: e.target.value,
    });
  };

  const handleModal2 = () => {
    closeModal2(false);
  };

  const generateFile = () => {
    const jsxString = ReactDOMServer.renderToStaticMarkup(<Prueba />);
    setFileContent(jsxString);
  };

  const toggleExport = () => {
    setShowExport(!showExport);
    // show ? setShow(false) : null
    generateFile();
  };

  const closeExport = () => {
    setShowExport(false);
  };

  const handlePopUp = () => {
    closeMenu1(!isMenuOn1);
  };

  return (
    <div /*style={{border: "2px solid red"}}*/ className="main-header-container">
      <div className="main-header-logo-container" onClick={handlePopUp}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="main-header-aythenlogo"
        >
          <rect width="30" height="30" rx="4" fill="#F0F0F0" />
          <path
            d="M5.02969 4.23604C4.5375 4.67315 4.0002 5.20929 3.46407 5.85792C2.72754 6.74796 2.19024 7.61104 1.8 8.34698C4.6916 8.28487 6.92403 8.30128 8.07188 8.3505C8.33907 8.36221 8.79258 8.39034 9.26895 8.65343C9.8877 8.99444 10.1918 9.52823 10.4707 10.0181C10.7156 10.4487 10.8557 10.8366 10.9359 11.105C9.31055 14.6499 7.68516 18.1942 6.05977 21.7392H10.6096L13.2199 16.0245L17.0625 24.2985C17.158 24.5013 17.4299 25.011 18.027 25.3755C18.6105 25.7317 19.1982 25.7341 19.5023 25.7358C20.7281 25.7435 22.5897 25.7605 24.9211 25.737C25.442 25.2355 26.0297 24.595 26.6074 23.8005C27.1834 23.0083 27.6111 22.2542 27.9281 21.6056C25.1754 21.612 23.0607 21.5991 21.9322 21.5956C21.76 21.595 21.4066 21.5903 21.0012 21.4233C20.1814 21.0858 19.7842 20.3482 19.5955 19.9978C19.4596 19.7452 19.3758 19.5208 19.3242 19.3614C16.0576 12.1966 13.5961 6.96124 12.9568 5.64874C12.8672 5.46534 12.6492 5.02179 12.1816 4.68077C11.5582 4.22608 10.8492 4.21085 10.4555 4.20792C9.12656 4.19796 7.2791 4.18917 5.02969 4.23604Z"
            fill="#808080"
          />
        </svg>
        <div onClick={handlePopUp} className="main-header-menu-hamburguer">
          <svg viewBox="0 0 100 80" width="25" height="25">
            <rect width="100" height="20" fill="#808080"></rect>
            <rect y="30" width="100" height="20" fill="#808080"></rect>
            <rect y="60" width="100" height="20" fill="#808080"></rect>
          </svg>
        </div>

        {isMenuOn1 && <Popmenu closeMenu1={closeMenu1} closeModal1={closeModal1} />}
        {isModalOn1 && (
          <TeleModal
            teledata={teledata}
            handleChangeModal1={handleChangeModal1}
            handleModal1={handleModal1}
          />
        )}
        {isModalOn2 && <TeleProgress handleModal2={handleModal2} progress={progress} />}
        <svg
          viewBox="0 0 1024 1024"
          className="main-header-menu-icon"
          onClick={() => closeMenu1(true)}
        >
          <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
        </svg>
      </div>

      <span className="main-name-project">
        {projectSelected ? projectSelected.name : "Name Project"} editor
      </span>
      <div className="main-header-container1">
        <div className="main-header-user">
          <span className="main-header-user1">
            {user && user.username ? user.username.slice(0, 1).toUpperCase() : "U"}
          </span>
        </div>
        <button className="main-header-share" onClick={() => closeShare(true)}>
          Share
        </button>

        <Share isShareOn={isShareOn} closeShare={closeShare} />

        <Publish isPublishOn={isPublishOn} closePublish={closePublish} />

        <div className="main-header-container2"></div>
        <button onClick={handleScreen} className="main-header-btn">
          <svg
            viewBox="0 0 1097.142857142857 1024"
            className={!show ? "main-header-icon-select" : "main-header-icon" }
            onClick={() => handleShow()}
          >
            <path d="M352.571 799.429l-28.571 28.571c-7.429 7.429-18.857 7.429-26.286 0l-266.286-266.286c-7.429-7.429-7.429-18.857 0-26.286l266.286-266.286c7.429-7.429 18.857-7.429 26.286 0l28.571 28.571c7.429 7.429 7.429 18.857 0 26.286l-224.571 224.571 224.571 224.571c7.429 7.429 7.429 18.857 0 26.286zM690.286 189.714l-213.143 737.714c-2.857 9.714-13.143 15.429-22.286 12.571l-35.429-9.714c-9.714-2.857-15.429-13.143-12.571-22.857l213.143-737.714c2.857-9.714 13.143-15.429 22.286-12.571l35.429 9.714c9.714 2.857 15.429 13.143 12.571 22.857zM1065.714 561.714l-266.286 266.286c-7.429 7.429-18.857 7.429-26.286 0l-28.571-28.571c-7.429-7.429-7.429-18.857 0-26.286l224.571-224.571-224.571-224.571c-7.429-7.429-7.429-18.857 0-26.286l28.571-28.571c7.429-7.429 18.857-7.429 26.286 0l266.286 266.286c7.429 7.429 7.429 18.857 0 26.286z"></path>
          </svg>
        </button>
        <button onClick={toggleExport} className="main-header-btn">
          <svg viewBox="0 0 1024 1024" className="main-header-icon">
            <path d="M853.333 640v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 537.003v-409.003c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v409.003l-140.501-140.501c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c3.925 3.925 8.619 7.083 13.824 9.259s10.795 3.243 16.341 3.243c10.923 0 21.845-4.181 30.165-12.501l213.333-213.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
          </svg>
        </button>
        <div className="main-header-container3"></div>
        <button className="main-header-button">Preview Test</button>
        <button className="main-header-button1" onClick={() => closePublish(!isPublishOn)}>
          Publish
        </button>
      </div>
      {showExport && (
        <Export
          closeExport={closeExport}
          componentName={projectSelected.name}
          fileContent={fileContent}
        />
      )}
    </div>
  );
};
export default MainHeader;
