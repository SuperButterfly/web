import React, { useState, useEffect, useRef } from "react";
import "./editorpanel.css";
import EditorNavbar from "./EditorNavbar.js";
import PaintAll from "./PaintAll.js";
import Zoomable from "./Zoomable";
import { useDispatch, useSelector } from 'react-redux';
import { updateComponent } from '@/redux/actions/component.js';
import { deleteComponentSelected } from '@/redux/actions/component.js';
import { updateWidth } from '@/redux/slices/componentSlices.js';

const getSizeFromLocalStorage = () => {
  const storedSize = localStorage.getItem("screenSize");
  return storedSize ? JSON.parse(storedSize) : { width: 1200 };
};

const EditorPanel = () => {

  console.log('Renderiza');

  const [selectedButton, setSelectedButton] = useState("");
  const [scaleValue, setScaleValue] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200 });
  const [initialX, setInitialX] = useState(null);
  const [dragSide, setDragSide] = useState(null);
  const stageBref = useRef(null)
  const guideLines = useRef(null)
  const dispatch = useDispatch()
  const startDrag = (side) => (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setInitialX(e.pageX);
    setDragSide(side);
  };

  const endDrag = () => {
    setDragging(false);
    setDragSide(null);
  };
  function handleScaleChange(newScaleValue) {
    setScaleValue(newScaleValue);
  }


  const drag = (e) => {
    if (!dragging || initialX === null) return;
    const movementX = e.pageX - initialX;

    if (isNaN(movementX)) {
      console.error("Error: movementX is NaN");
      return;
    }

    const newWidth =
      dragSide === "left" ?
      dimensions.width - 2 * movementX :
      dimensions.width + 2 * movementX;

    // Limit width to be between 300 and 3200
    const clampedWidth = Math.max(300, Math.min(newWidth, 3200));

    setDimensions({ width: clampedWidth });
    setInitialX(e.pageX);
  };

  useEffect(() => {
    if (dimensions) {
      dispatch(updateWidth(dimensions.width));
    }
  }, [dimensions]);

  useEffect(() => {
    document.addEventListener("pointermove", drag);
    document.addEventListener("pointerup", endDrag);

    return () => {
      document.removeEventListener("pointermove", drag);
      document.removeEventListener("pointerup", endDrag);
    };
  }, [dragging, dimensions, initialX]);

  // useEffect(() => {
  //   const handleClick = (event) => {
  //     dispatch(deleteComponentSelected())
  //     /*const target = event.target;
      
  //     console.log(target)
  //     console.log("onclick",target.onclick,!!target.onclick)
  //     if (!target.onclick){
  //       dispatch(deleteComponentSelected())
  //     }*/
  //     // console.log("Target", event.target)
  //   };
  //   stageBref.current.addEventListener('click', handleClick);
  //   guideLines.current.addEventListener('click', handleClick);
  //   return () => {
  //     stageBref && stageBref.current ? stageBref.current.removeEventListener('click', handleClick) : null;
  //     guideLines && guideLines.current ? guideLines.current.removeEventListener('click', handleClick) : null;
  //   };
  // }, [dispatch]);

  //seccion editor sizes

  // seccion botones querys
  const handleMobileClick = () => {
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      width: 479,
    }));
    setSelectedButton("mobile");
    localStorage.setItem("screenSize", JSON.stringify({ width: 479 }));
  };

  const handleTabletClick = () => {
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      width: 991,
    }));
    setSelectedButton("tablet");
    localStorage.setItem("screenSize", JSON.stringify({ width: 991 }));
  };
  const handleLandscapeClick = () => {
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      width: 767,
    }));
    setSelectedButton("landscape");
    localStorage.setItem("screenSize", JSON.stringify({ width: 767 }));
  };

  const handleLaptopClick = () => {
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      width: 1200,
    }));
    setSelectedButton("laptop");
    localStorage.setItem("screenSize", JSON.stringify({ width: 1200 }));
  };
  const handleDesktopClick = () => {
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      width: 1600,
    }));
    setSelectedButton("desktop");
    localStorage.setItem("screenSize", JSON.stringify({ width: 1600 }));
  };

  const handleWideClick = () => {
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      width: 1920,
    }));
    setSelectedButton("wide");
    localStorage.setItem("screenSize", JSON.stringify({ width: 1920 }));
  };

  const getSelectedButtonByWidth = (width) => {
    if (width <= 479) {
      return "mobile";
    } else if (width <= 991) {
      return "tablet";
    } else if (width <= 767) {
      return "landscape";
    } else if (width <= 1200) {
      return "laptop";
    } else {
      return "desktop";
    }
  };

  useEffect(() => {
    const storedSize = getSizeFromLocalStorage();
    setDimensions(storedSize);
    setSelectedButton(getSelectedButtonByWidth(storedSize.width));
  }, []);
  // seccion guias
  // seccion zoom

  const [zoom, setZoom] = useState(100);

  const aumentarZoom = () => {
    if (zoom < 100) {
      setZoom(zoom + 25);
    }
  };

  const disminuirZoom = () => {
    if (zoom > 25) {
      setZoom(zoom - 25);
    }
  };
  // seccion zoom

  const estilosContainer = {
    transform: "translateX(-1409.5px)",
    height: "1400px",
  };

  const estilosWrapper = {
    transform: "translateX(1140px)",
    width: "991px",
    borderLeft: "4px solid #363636",
    borderRight: "4px solid #363636",
  };

  const estilosBackground = {
    backgroundColor: "none",
  };

  const estilosNombre = {
    color: "#ffa726",
    transform: "scale(-4) rotate(90deg)",
    right: "1111px",
    top: "200px",
  };

  return (
    <div className="stage">
      <div className="box">
        <EditorNavbar
        scaleValue={scaleValue}
         zoom={zoom}
          onMobileClick={handleMobileClick}
          onLandscapeMobileClick={handleLandscapeClick}
          onTabletClick={handleTabletClick}
          onLaptopClick={handleLaptopClick}
          onDesktopClick={handleDesktopClick}
          onWideClick={handleWideClick}
          selectedButton={selectedButton}
            aumentarZoom={aumentarZoom}
          disminuirZoom={disminuirZoom}
        />
        <div className="stageB" id="stageComponent" ref={stageBref}>
          <Zoomable zoom={zoom} onScaleChange={handleScaleChange}>
            <div className="content">
              <div
                className="editor-panel-central"
                style={{
                  width: `${dimensions.width}px`,
                  position: "relative",
                  marginLeft: "30px",
                  marginRight: "30px",
                }}
              >
                <PaintAll />
              </div>
              <div
                className="lateral lateral-izquierdo"
                onPointerDown={startDrag("left")}
              >
                <div className="handler-bar"></div>
              </div>
              <div
                className="lateral lateral-derecho"
                onPointerDown={startDrag("right")}
              >
                <div className="handler-bar"></div>
              </div>
              <div style={estilosContainer} className="guide-lines-container" id="guideLines" ref={guideLines}>
                <div
                  style={{
                    ...estilosWrapper,
                    transform: "translateX(1095px)",
                    width: "991px",
                    borderLeft:
                      dimensions.width >= 767 && dimensions.width <= 991
                        ? "4px solid #ffa726"
                        : "4px solid #363636",
                    borderRight:
                      dimensions.width >= 767 && dimensions.width <= 991
                        ? "4px solid #ffa726"
                        : "4px solid #363636",
                  }}
                  className="guide-line-wrapper"
                >
                  <div
                    style={{
                      ...estilosBackground,
                      width: "100%",
                      backgroundColor: "#ffa726",
                      display:
                        dimensions.width >= 767 && dimensions.width <= 991
                          ? "block"
                          : "none",
                    }}
                    className="guide-line-background"
                  ></div>
                  <span
                    style={{
                      ...estilosNombre,
                      color: "#ffa726",
                      transform: "scale(-4) rotate(90deg)",
                      right: "1111px",
                      display:
                        dimensions.width >= 767 && dimensions.width <= 991
                          ? "block"
                          : "none",
                    }}
                    className="guide-line-name"
                  >
                    Tablet: 991px
                  </span>
                </div>

                <div
                  style={{
                    ...estilosWrapper,
                    transform: "translateX(1205px)",
                    width: "767px",
                    borderLeft:
                      dimensions.width >= 479 && dimensions.width <= 767
                        ? "4px solid #38ff26"
                        : "4px solid #363636",
                    borderRight:
                      dimensions.width >= 479 && dimensions.width <= 767
                        ? "4px solid #38ff26"
                        : "4px solid #363636",
                  }}
                  className="guide-line-wrapper"
                >
                  <div
                    style={{
                      ...estilosBackground,
                      width: "100%",
                      backgroundColor: "#38ff26",
                      display:
                        dimensions.width >= 479 && dimensions.width <= 767
                          ? "block"
                          : "none",
                    }}
                    className="guide-line-background"
                  ></div>
                  <span
                    style={{
                      ...estilosNombre,
                      color: "#38ff26",
                      transform: "scale(-4) rotate(90deg)",
                      right: "887px",
                      display:
                        dimensions.width >= 479 && dimensions.width <= 767
                          ? "block"
                          : "none",
                    }}
                    className="guide-line-name"
                  >
                    Mobile Landscape: 767px
                  </span>
                </div>

                <div
                  style={{
                    ...estilosWrapper,
                    transform: "translateX(1350px)",
                    width: "479px",
                    borderLeft:
                      dimensions.width >= 300 && dimensions.width <= 479
                        ? "4px solid #269aff"
                        : "4px solid #363636",
                    borderRight:
                      dimensions.width >= 300 && dimensions.width <= 479
                        ? "4px solid #269aff"
                        : "4px solid #363636",
                  }}
                  className="guide-line-wrapper"
                >
                  <div
                    style={{
                      ...estilosBackground,
                      width: "100%",
                      backgroundColor: "#269aff",
                      display:
                        dimensions.width >= 300 && dimensions.width <= 479
                          ? "block"
                          : "none",
                    }}
                    className="guide-line-background"
                  ></div>
                  <span
                    style={{
                      ...estilosNombre,
                      color: "#269aff",
                      transform: "scale(-4) rotate(90deg)",
                      right: "599px",
                      display:
                        dimensions.width >= 300 && dimensions.width <= 479
                          ? "block"
                          : "none",
                    }}
                    className="guide-line-name"
                  >
                    Mobile: 479px
                  </span>
                </div>
              </div>
              <div className="top-right-corner-stage-options">
                <div className="width-title-container">
                  <div
                    className="title"
                    style={{
                      color:
                        dimensions.width > 991
                          ? "#ededed"
                          : dimensions.width <= 991 && dimensions.width > 767
                          ? "#ffa726"
                          : dimensions.width <= 767 && dimensions.width > 479
                          ? "#38ff26"
                          : dimensions.width <= 479
                          ? "#269aff"
                          : "#ededed",
                    }}
                  >
                    <div className="pt-iconT">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {dimensions.width > 991 && (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1 2.5A1.5 1.5 0 012.5 1h9A1.5 1.5 0 0113 2.5v7a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 9.5v-7zM2.5 2a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-9zM0 12.5a.5.5 0 01.5-.5h13a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z"
                          ></path>
                        )}
                        {dimensions.width <= 991 && dimensions.width > 767 && (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-9zM3.5 1A1.5 1.5 0 002 2.5v9A1.5 1.5 0 003.5 13h7a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 1h-7zm2 10h3v-1h-3v1z"
                          ></path>
                        )}
                        {dimensions.width <= 767 && dimensions.width > 479 && (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.5 3A1.5 1.5 0 001 4.5v5A1.5 1.5 0 002.5 11h9A1.5 1.5 0 0013 9.5v-5A1.5 1.5 0 0011.5 3h-9zM2 4.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-5zm8 1v3h1v-3h-1z"
                          ></path>
                        )}
                        {dimensions.width <= 479 && (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 2.5A1.5 1.5 0 014.5 1h5A1.5 1.5 0 0111 2.5v9A1.5 1.5 0 019.5 13h-5A1.5 1.5 0 013 11.5v-9zM4.5 2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-5zm4 9h-3v-1h3v1z"
                          ></path>
                        )}
                      </svg>
                    </div>
                    <span className="width-container">
                      {Math.round(dimensions.width)}px
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Zoomable>
        </div>
      </div> 
      </div>
  );
};
export default EditorPanel;
