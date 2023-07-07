import React, { useState, useRef } from "react";
import styled from "./MultiScreen.module.css";
import ResizeHorizontal from "./ResizeHorizontal";
import ResizeVertical from "./ResizeVertical";
import ScreenEditor from "./ScreenEditor";

const MultiScreen = ({ children, width = '200px', height = '200px' }) => {
  const styleContainer = {
    height,
    width,
  };

  const ifIs1 = (
    <div>
      {children}
    </div>
  );

  const ifIs2 = (
    <ResizeHorizontal
      width="100%"
      height="100%"
    >
      {children}
    </ResizeHorizontal>
  );

  const ifIs3 = (
    <ResizeVertical
    >
      <ResizeHorizontal
      >
        {children[0]}
        {children[1]}
      </ResizeHorizontal>
      <div>
        {children[2]}
      </div>
    </ResizeVertical>
  );

  const ifIs4 = (
    <ResizeVertical
    >
      <ResizeHorizontal>
        {children[0]}
        {children[1]}
      </ResizeHorizontal>
      <ResizeHorizontal>
        {children[2]}
        {children[3]}
      </ResizeHorizontal>
    </ResizeVertical>
  );

  const renderScreen = [ifIs1, ifIs2, ifIs3, ifIs4];
  const index = children.length-1 > 3? 3 : children.length - 1
  return (
    <div style={styleContainer}>
    {renderScreen[index]}
    </div>
    )
};

export default MultiScreen;