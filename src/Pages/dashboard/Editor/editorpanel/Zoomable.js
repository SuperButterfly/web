import { useState, useRef, useEffect } from "react";

function Zoomable({ children, zoom, onScaleChange }) {
  const [scale, setScale] = useState(0.3);
  const [translateX, setTranslateX] = useState(-5);
  const [translateY, setTranslateY] = useState(4);
  const [isShiftKeyPressed, setIsShiftKeyPressed] = useState(false);
  const [isMiddleMouseButtonPressed, setIsMiddleMouseButtonPressed] =
    useState(false);

  const scaleValue = Math.round(scale * 100);
  onScaleChange(scaleValue);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "ShiftLeft") {
        setIsShiftKeyPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.code === "ShiftLeft") {
        setIsShiftKeyPressed(false);
      }
    };

    const handleMouseDown = (event) => {
      if (event.button === 1) {
        setIsMiddleMouseButtonPressed(true);
        containerRef.current.style.cursor = "grabbing";
      }
    };

    const handleMouseMove = (event) => {
      if (isMiddleMouseButtonPressed) {
        setTranslateX((prevTranslateX) => prevTranslateX + event.movementX);
        setTranslateY((prevTranslateY) => prevTranslateY + event.movementY);
      }
    };

    const handleMouseUp = () => {
      setIsMiddleMouseButtonPressed(false);
      containerRef.current.style.cursor = "default";
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    containerRef.current.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isShiftKeyPressed, isMiddleMouseButtonPressed]);

  const handleWheel = (event) => {
    event.preventDefault();

    if (!isShiftKeyPressed) {
      return;
    }

    const delta = event.deltaY > 0 ? -0.1 : 0.1;
    const newScale = scale + delta;
    setScale(Math.max(0.1, newScale));
  };
  useEffect(() => {
    let newScale;

    if (zoom === 25) {
      newScale = 0.1;
    } else if (zoom === 50) {
      newScale = 0.15;
    } else if (zoom === 75) {
      newScale = 0.25;
    } else if (zoom === 100) {
      newScale = 0.3;
    }
    setScale(newScale);
  }, [zoom]);

  return (
    <div
      ref={containerRef}
      className="zoomable"
      onWheel={handleWheel}
      style={{
        position: "relative",
        transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
        transformOrigin: "597 482",
      }}
    >
      {children}
    </div>
  );
}

export default Zoomable;
