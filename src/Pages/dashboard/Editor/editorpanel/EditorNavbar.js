import "./editornavbar.css";
import { useState} from "react";
import Breakpoints from "../breakpoints/Breakpoints.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { undo, redo } from "../../../../redux/slices/projectSlices";
import { useDispatch } from "react-redux";

const EditorNavbar = ({
  scaleValue,
zoom,
  onMobileClick,
  onLandscapeMobileClick,
  onTabletClick,
  onLaptopClick,
  onDesktopClick,
  onWideClick,
  selectedButton,
  aumentarZoom,
  disminuirZoom,
}) => {
  
 const [currentSelectedButton, setCurrentSelectedButton] =
    useState(selectedButton);
    
  const { breakpoints } = useSelector((state) => state.breakpoints);
  
  const handleOnClick = () => {
    closeBreak({ isBreakOn: true });
  };
  const [isBreakOn, closeBreak] = useState(false);

  useEffect(() => {
    setCurrentSelectedButton(selectedButton);
  }, [selectedButton]);

  const mobileButtonStyle = {
    backgroundColor:
      currentSelectedButton === "mobile" ? "#36c9c9" : "transparent",
  };

  const tabletButtonStyle = {
    backgroundColor:
      currentSelectedButton === "tablet" ? "#ffa726" : "transparent",
  };
  const landscapeButtonStyle = {
    backgroundColor:
      currentSelectedButton === "landscape" ? "#9acd32" : "transparent",
  };

  const laptopButtonStyle = {
    backgroundColor:
      currentSelectedButton === "laptop" ? "#f0628d" : "transparent",
  };
  const desktopButtonStyle = {
    backgroundColor:
      currentSelectedButton === "desktop" ? "#cf53fb" : "transparent",
  };

  const wideButtonStyle = {
    backgroundColor:
      currentSelectedButton === "wide" ? "#f0f0f0" : "transparent",
  };
  const dispatch = useDispatch();

  return (
    <div className="editor-navbar-container">
      {/* seccion de seleccion de plantilla */}
      <div className="editor-navbar-container01">
        <div className="editor-navbar-container02">
          <div className="editor-navbar-container03">
            <svg
              className="editor-navbar-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 19H4c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h7c.2 0 .3 0 .5.1h-.4v4.5c0 .6.4 1 1 1H17V18c0 .6-.4 1-1 1zM4 20h12c1.1 0 2-.9 2-2V6.7c0-.5-.2-1.1-.6-1.4l-5-4.7C12.1.2 11.6 0 11 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2z"></path>
            </svg>
            <div className="editor-navbar-container04"></div>
          </div>
          <span className="editor-navbar-font">Home</span>
        </div>
      </div>

      {/* seccion de botones querys */}

      <div className="editor-navbar-container10">
        <div className="editor-navbar-container11">
          <svg viewBox="0 0 1024 1024" className="editor-navbar-icon06" onClick={() => dispatch(undo())}>
            <path d="M512 64c-141.384 0-269.376 57.32-362.032 149.978l-149.968-149.978v384h384l-143.532-143.522c69.496-69.492 165.492-112.478 271.532-112.478 212.068 0 384 171.924 384 384 0 114.696-50.292 217.636-130.018 288l84.666 96c106.302-93.816 173.352-231.076 173.352-384 0-282.77-229.23-512-512-512z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="editor-navbar-icon08" onClick={() => dispatch(redo())}>
            <path d="M0 576c0 152.924 67.048 290.184 173.35 384l84.666-96c-79.726-70.364-130.016-173.304-130.016-288 0-212.076 171.93-384 384-384 106.042 0 202.038 42.986 271.53 112.478l-143.53 143.522h384v-384l-149.97 149.978c-92.654-92.658-220.644-149.978-362.030-149.978-282.77 0-512 229.23-512 512z"></path>
          </svg>
        </div>
        <div className="editor-navbar-container12">
          {breakpoints && breakpoints[0] && (
            <button
              className="buttonQuery"
              style={mobileButtonStyle}
              onClick={onMobileClick}
            >
              <div className="editor-navbar-container13">
                <svg viewBox="0 0 1024 1024" className="editor-navbar-icon10">
                  <path d="M726 810v-596h-428v596h428zM726 44q34 0 59 25t25 59v768q0 34-25 60t-59 26h-428q-34 0-59-26t-25-60v-768q0-34 25-60t59-26z"></path>
                </svg>
              </div>
            </button>
          )}
          {breakpoints && breakpoints[1] && (
            <button
              className="buttonQuery"
              style={landscapeButtonStyle}
              onClick={onLandscapeMobileClick}
            >
              <div className="editor-navbar-container20">
                <svg viewBox="0 0 1024 1024" className="editor-navbar-icon23">
                  <path d="M810 298h-596v428h596v-428zM44 298q0-34 25-59t59-25h768q34 0 60 25t26 59v428q0 34-26 59t-60 25h-768q-34 0-60-25t-26-59z"></path>
                </svg>
              </div>
            </button>
          )}
          {breakpoints && breakpoints[2] && (
            <button
              className="buttonQuery"
              style={tabletButtonStyle}
              onClick={onTabletClick}
            >
              <div className="editor-navbar-container14">
                <svg viewBox="0 0 1024 1024" className="editor-navbar-icon12">
                  <path d="M822 810v-682h-620v682h620zM598 938v-42h-172v42h172zM768 0q52 0 90 38t38 90v768q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-768q0-52 38-90t90-38h512z"></path>
                </svg>
              </div>
            </button>
          )}
          {breakpoints && breakpoints[3] && (
            <button
              className="buttonQuery"
              style={laptopButtonStyle}
              onClick={onLaptopClick}
            >
              <div className="editor-navbar-container15">
                <svg viewBox="0 0 1024 1024" className="editor-navbar-icon14">
                  <path d="M170 256v426h684v-426h-684zM854 768h170v86h-1024v-86h170q-34 0-59-26t-25-60v-426q0-34 25-60t59-26h684q34 0 59 26t25 60v426q0 34-25 60t-59 26z"></path>
                </svg>
              </div>
            </button>
          )}
          {breakpoints && breakpoints[4] && (
            <button
              className="buttonQuery"
              style={desktopButtonStyle}
              onClick={onDesktopClick}
            >
              <div className="editor-navbar-container16">
                <svg viewBox="0 0 1024 1024" className="editor-navbar-icon16">
                  <path d="M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z"></path>
                </svg>
              </div>
            </button>
          )}
          {breakpoints && breakpoints[5] && (
            <button
              className="buttonQuery"
              style={wideButtonStyle}
              onClick={onWideClick}
            >
              <div className="editor-navbar-container19">
                <svg viewBox="0 0 1024 1024" className="editor-navbar-icon17">
                  <path d="M512 170q154 0 340 32l38 6 12 38q36 132 36 266t-36 266l-12 38-38 6q-186 32-340 32t-340-32l-38-6-12-38q-36-132-36-266t36-266l12-38 38-6q186-32 340-32zM512 256q-140 0-312 28-30 116-30 228t30 228q172 28 312 28t312-28q30-116 30-228t-30-228q-172-28-312-28z"></path>
                </svg>
              </div>
            </button>
          )}
          <div className="editor-navbar-container17">
            <svg
              viewBox="0 0 1024 1024"
              className="editor-navbar-icon18"
              onClick={handleOnClick}
            >
              <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
            </svg>
          </div>
          <Breakpoints isBreakOn={isBreakOn} closeBreak={closeBreak} />
          {/* zoom section */}
           <div className="editor-navbar-container18">
            <button onClick={disminuirZoom}>
              <svg viewBox="0 0 1024 1024" className="editor-navbar-icon20">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
            <span className="editor-navbar-zoom">{scaleValue}%</span>
            <button onClick={aumentarZoom}>
              <svg viewBox="0 0 1024 1024" className="editor-navbar-icon22">
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorNavbar;
