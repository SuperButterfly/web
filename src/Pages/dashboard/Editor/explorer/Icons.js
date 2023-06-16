import MaterialIcons from "./IconsFolder/MaterialIcons";
import FontAwesome from "./IconsFolder/FontAwesome";
import IcoMoon from "./IconsFolder/IcoMoon";
import Feather from "./IconsFolder/Feather";
import Typicons from "./IconsFolder/Typicons";
import "./icons.css";
import { useState, useEffect, useRef } from "react";

const Icons = ({ iconsSearch }) => {
  const [isDrop, setIsDrop] = useState([false, false, false, false, false, false, true]);
  const [icons, setIcons] = useState([]);
  const iconElementRef = useRef(null)
  const handleDropPanel = (ev) => {
    ev.preventDefault();
    const { id } = ev.target;
    let aux = isDrop;
    aux[id] = !isDrop[parseInt(id)];
    setIsDrop([...aux]);
  };
  console.log("lopeo")
  useEffect(() => {
    if (iconsSearch && iconsSearch.trim().length > 0) {
      const apiUrl = `https://api-web.aythen.com/api/resources/icons?source=&search=${iconsSearch}&page=0`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setIcons(data.svgs));
    } else {
      setIcons([]);
    }
  }, [iconsSearch]);

  console.log(icons);

  return (
    <div className="icons-container" ref={iconElementRef}>
      {icons.length ? (
        <div className="icons-container01">
          <div className="icons-container02" /*onClick={handleDropPanel}*/ id="0">
            <span id="6">Icons</span>
            <svg
              onClick={handleDropPanel}
              id="6"
              viewBox="0 0 1024 1024"
              className="icons-icon"
              style={isDrop[6] ? { rotate: "-90deg" } : { rotate: "0deg" }}
            >
              <path
                id="6"
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
              ></path>
            </svg>
          </div>

          <div
            className="icons-container03"
            style={isDrop[6] ? { display: "inherit" } : { display: "none" }}
          >
            <div className="iconos1">
              {icons.map((icon, index) => (
                <span key={index} className="icon-wrapper">
                  <div
                    height="24"
                    width="24"
                    viewBox="0 0 1024 1024"
                    fill="#262626"
                    className="jsx-3323936745"
                    dangerouslySetInnerHTML={{ __html: icon.data }}
                  ></div>
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="icons-container01">
            <div className="icons-container02" onClick={handleDropPanel} id="0">
              <span id="0">Material Icons</span>
              <svg
                id="0"
                viewBox="0 0 1024 1024"
                className="icons-icon"
                style={isDrop[0] ? { rotate: "-90deg" } : { rotate: "0deg" }}
              >
                <path
                  id="0"
                  d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                ></path>
              </svg>
            </div>

            <div
              className="icons-container03"
              style={isDrop[0] ? { display: "inherit" } : { display: "none" }}
            >
              <div className="iconos1">
                <MaterialIcons iconElementRef={iconElementRef} />
              </div>
            </div>
          </div>
          <div className="icons-container04">
            <div className="icons-container05" onClick={handleDropPanel} id="1">
              <span id="1">Font Awesome</span>
              <svg
                id="1"
                viewBox="0 0 1024 1024"
                className="icons-icon04"
                style={isDrop[1] ? { rotate: "-90deg" } : { rotate: "0deg" }}
              >
                <path
                  id="1"
                  d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                ></path>
              </svg>
            </div>
            <div
              className="icons-container03"
              style={isDrop[1] ? { display: "inherit" } : { display: "none" }}
            >
              <div className="iconos1">
                <FontAwesome iconElementRef={iconElementRef}/>
              </div>
            </div>
          </div>
          <div className="icons-container07">
            <div className="icons-container08" onClick={handleDropPanel} id="2">
              <span id="2">Feather</span>
              <svg
                id="2"
                viewBox="0 0 1024 1024"
                className="icons-icon08"
                style={isDrop[2] ? { rotate: "-90deg" } : { rotate: "0deg" }}
              >
                <path
                  id="2"
                  d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                ></path>
              </svg>
            </div>
            <div
              className="icons-container03"
              style={isDrop[2] ? { display: "inherit" } : { display: "none" }}
            >
              <div className="iconos1">
                <Feather iconElementRef={iconElementRef} />
              </div>
            </div> 
          </div>
          <div className="icons-container10">
            <div className="icons-container11" onClick={handleDropPanel} id="3">
              <span id="3">IcoMoon</span>
              <svg
                id="3"
                viewBox="0 0 1024 1024"
                className="icons-icon12"
                style={isDrop[3] ? { rotate: "-90deg" } : { rotate: "0deg" }}
              >
                <path
                  id="3"
                  d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                ></path>
              </svg>
            </div>
            <div
              className="icons-container03"
              style={isDrop[3] ? { display: "inherit" } : { display: "none" }}
            >
              <div className="iconos1">
                <IcoMoon iconElementRef={iconElementRef}/>
              </div>
            </div>
          </div>
          <div className="icons-container13">
            <div className="icons-container14" onClick={handleDropPanel} id="4">
              <span id="4">Typicons</span>
              <svg
                id="4"
                viewBox="0 0 1024 1024"
                className="icons-icon16"
                style={isDrop[4] ? { rotate: "-90deg" } : { rotate: "0deg" }}
              >
                <path
                  id="4"
                  d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                ></path>
              </svg>
            </div>
            <div
              className="icons-container03"
              style={isDrop[4] ? { display: "inherit" } : { display: "none" }}
            >
              <div className="iconos1">
                <Typicons iconElementRef={iconElementRef} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Icons;
