
import React, { useState, useRef } from "react";
import styled from "./ResizeHorizontal.module.css";

const ResizeHorizontal = ({ children, width = '100%', height = '100%' }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [startWidth1, setStartWidth1] = useState(0);
  const [startWidth2, setStartWidth2] = useState(0);

  const containerRef = useRef(null);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);

  const styleContainer = {
    width,
    height,
  };

  const handleMouseDown = (event) => {
    setIsResizing(true);
    setStartPosition(event.clientX);
    setStartWidth1(parseInt(getComputedStyle(contentRef1.current).getPropertyValue('width')));
    setStartWidth2(parseInt(getComputedStyle(contentRef2.current).getPropertyValue('width')));
  };

  const handleMouseMove = (event) => {
    if (!isResizing) return;
    const width1 = startWidth1 + (event.clientX - startPosition);
    const width2 = startWidth2 - (event.clientX - startPosition);
    const maxWidth = parseInt(getComputedStyle(containerRef.current).getPropertyValue('width')) * .8;
    if (width1 < maxWidth && width2 < maxWidth) {
      contentRef1.current.style.width = `${width1}px`;
      contentRef2.current.style.width = `${width2}px`;
    };
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  return (
    <div className={styled.container}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={containerRef}
      style={styleContainer}
    >
      <div className={styled.content1} ref={contentRef1}>
        { children && children[0]}
      </div>
      <div
        className={styled.resizeHandle}
        onMouseDown={handleMouseDown}
      ></div>
      <div className={styled.content2} ref={contentRef2}>
        {children && children[1] }
      </div>
    </div>
  )
};

export default ResizeHorizontal;