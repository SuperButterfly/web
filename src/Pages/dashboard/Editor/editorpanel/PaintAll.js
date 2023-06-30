/* eslint-disable no-redeclare */
/* global localStorage*/
import "./PaintAll.css";
import { useState, useEffect, createElement } from "react";
import Loader from "./Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { createComponent } from "@/redux/actions/component.js";
import { cleanEventAndUpdateComponent } from "@/redux/actions/component.js";
import { getTarget } from "@/redux/actions/projects.js";

const PaintAll = () => {
  const { target } = useSelector((state) => state.project);
  const { componentSelected, width } = useSelector((state) => state?.component);
  const { breakpoints } = useSelector((state) => state.breakpoints);
  const { properties } = useSelector(
    (state) => state.component.componentSelected
  );
  const dispatch = useDispatch();
  const [imageSize, setImageSize] = useState({
    width: "auto",
    height: "auto",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [eventChange, setEventCange] = useState('');

  const initialStylesTarget = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
  const handleResize = (direction) => {
    const { width, height } = imageSize;
    let newWidth = width;
    let newHeight = height;

    switch (direction) {
      case "top-left":
        newWidth -= 10;
        newHeight -= 10;
        break;
      case "top":
        newHeight -= 10;
        break;
      case "top-right":
        newWidth += 10;
        newHeight -= 10;
        break;
      case "left":
        newWidth -= 10;
        break;
      case "right":
        newWidth += 10;
        break;
      case "bottom-left":
        newWidth -= 10;
        newHeight += 10;
        break;
      case "bottom":
        newHeight += 10;
        break;
      case "bottom-right":
        newWidth += 10;
        newHeight += 10;
        break;
      default:
        break;
    }

    setImageSize({ width: newWidth, height: newHeight });
  };

  useEffect(() => {
    dispatch(getTarget())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setIsLoading(!(target && target.tag));
  }, [target]);

  useEffect(() => {
    console.log("eventChange: ", eventChange);
  }, [eventChange]);

  const handleTarget = (ev) => {
    dispatch(cleanEventAndUpdateComponent(componentSelected, ev.target.id));
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    const tag = localStorage.getItem("text");
    dispatch(createComponent(ev.target.id, tag));
  };

  const handleonDragOver = (ev) => {
    ev.preventDefault();
  };

  const selectStyles = (incomingProps, states) => {
    let properties = {};
    const sizes = [479, 767, 991, 1200, 1600, 1920];
    if (width <= sizes[0]) {
      if (breakpoints[0] && incomingProps.mq479 && Object.keys(incomingProps.mq479).length > 0) {
        properties = { ...incomingProps.style, ...incomingProps.mq479 };
      }
    }
    else if (width <= sizes[1] && width > sizes[0]) {
      if (breakpoints[1] && incomingProps.mq767 && Object.keys(incomingProps.mq767).length > 0) {
        properties = { ...incomingProps.style, ...incomingProps.mq767 };
      }
    }
    else if (width <= sizes[2] && width > sizes[1]) {
      if (breakpoints[2] && incomingProps.mq991 && Object.keys(incomingProps.mq991).length > 0) {
        properties = { ...incomingProps.style, ...incomingProps.mq991 };
      }
    }
    else if (width <= sizes[3] && width > sizes[2]) {
      if (breakpoints[3] && incomingProps.mq1200 && Object.keys(incomingProps.mq1200).length > 0) {
        properties = { ...incomingProps.style, ...incomingProps.mq1200 };
      }
    }
    else if (width <= sizes[4] && width > sizes[3]) {
      if (breakpoints[4] && incomingProps.mq1600 && Object.keys(incomingProps.mq1600).length > 0) {
        properties = { ...incomingProps.style, ...incomingProps.mq1600 };
      }
    }
    else {
      if (incomingProps.mq1920 && incomingProps.mq1920) {
        properties = { ...incomingProps.style, ...incomingProps.mq1920 };

      }
      else {
        properties = incomingProps.style
      };
    }
    if (Object.keys(states).length > 0) {
      console.log("states: ", states);
      properties = { ...properties, ...states };
    }
    return properties;
  };

  function createTreeFromJSON(json, idx) {
    let { tag, children, properties, attributes, classes } = json;
    attributes = { ...attributes, id: json.id };
    let componentStyle = target.id === json.id ? initialStylesTarget : {};
    let states = {};

    const event = properties?.event;
    if (event && event.length) {
      console.log("event: ", event);
      states = properties?.states[event];
      // setEventCange(event);
    } 

    if (componentSelected?.id === json.id) {
      componentStyle = { ...componentStyle, border: "2px solid blue" };
    }
    if (properties?.style) {
      const dinamicStyles = selectStyles(properties, states, json.id);
      // console.log("dinamicStyles result: ", dinamicStyles);
      componentStyle = { ...componentStyle, ...dinamicStyles };
    }
    if (json.tag === "img" && componentSelected?.id === json.id) {
      componentStyle = { ...componentStyle, ...imageSize };

      return createElement(
        "div",
        {
          key: idx,
          onClick: handleTarget,
          onDrop: handleDrop,
          onDragOver: handleonDragOver,
          style: { position: "relative" },
        },
        [
          createElement(
            "img",
            {
              style: { ...componentStyle },
              ...attributes,
            },
            null
          ),
          <div className="resize-handles" key="resizeHandles">
            <div
              style={{
                width: "15px",
                height: "15px",
                background: "white",
                borderRadius: "50%",
              }}
              className="resize-handle top-left"
              onClick={() => handleResize("top-left")}
            />
            <div
              style={{
                width: "15px",
                height: "15px",
                background: "white",
                borderRadius: "50%",
              }}
              className="resize-handle top"
              onClick={() => handleResize("top")}
            />
            <div
              style={{
                width: "15px",
                height: "15px",
                background: "white",
                borderRadius: "50%",
              }}
              className="resize-handle top-right"
              onClick={() => handleResize("top-right")}
            />
            <div
              style={{
                width: "15px",
                height: "15px",
                background: "white",
                borderRadius: "50%",
              }}
              className="resize-handle left"
              onClick={() => handleResize("left")}
            />
            <div
              style={{
                width: "15px",
                height: "15px",
                background: "white",
                borderRadius: "50%",
              }}
              className="resize-handle right"
              onClick={() => handleResize("right")}
            />
            <div
              style={{
                width: "15px",
                height: "15px",
                background: "white",
                borderRadius: "50%",
              }}
              className="resize-handle bottom-left"
              onClick={() => handleResize("bottom-left")}
            />
            <div
              style={{
                width: "15px",
                height: "15px",
                background: "white",
                borderRadius: "50%",
              }}
              className="resize-handle bottom"
              onClick={() => handleResize("bottom")}
            />
            <div
              style={{
                width: "15px",
                height: "15px",
                background: "white",
                borderRadius: "50%",
              }}
              className="resize-handle bottom-right"
              onClick={() => handleResize("bottom-right")}
            />
          </div>,
          children && children[0]
            ? children.map((child, idx) => createTreeFromJSON(child, idx))
            : properties?.innerHTML || null,
        ]
      );
    } else {
      return createElement(
        tag ? tag : "div",
        {
          key: idx,
          onClick: handleTarget,
          onDrop: handleDrop,
          onDragOver: handleonDragOver,
          style: { ...componentStyle, ...states },
          ...attributes,
          ...classes,
        },
        children && children[0]
          ? children.map((child, idx) => createTreeFromJSON(child, idx))
          : properties?.innerHTML || null
      );
    }
  }

  return isLoading ? <Loader /> : createTreeFromJSON(target);
};

export default PaintAll;
