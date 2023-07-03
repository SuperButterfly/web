import "./editornavbar.css";
import { useState } from "react";
import Breakpoints from "../Editor/breakpoints/Breakpoints.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const EditorNavbar = ({
  onMobileClick,
  onLandscapeMobileClick,
  onTabletClick,
  onLaptopClick,
  onDesktopClick,
  onWideClick,
  selectedButton
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

  return (
    <div className="editor-navbar-container">
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
        {breakpoints[1] && (
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
        {breakpoints[2] && (
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
        {breakpoints[3] && (
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
        {breakpoints[4] && (
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
        {breakpoints[5] && (
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
      </div>
    </div>
  );
};

export default EditorNavbar;
