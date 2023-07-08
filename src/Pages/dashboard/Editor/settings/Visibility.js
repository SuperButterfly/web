import "./visibility.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateComponent } from "../../../../../src/redux/actions/component.js";
const Visibility = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const { componentSelected } = useSelector((state) => state.component);
  const { id } = useSelector((state) => state.component.componentSelected);
  const [input, setInput] = useState({ opacity: "100" });
  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(input.opacity);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const handleDispatchComponent = (newVisibility) => {
    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          style: {
            ...newVisibility,
          },
        },
      })
    );
  };

  const handleDisplay = () => {
    setVisible(!isVisible);
    let newVisi = {};
    if (isVisible) {
      for (const key in componentSelected.properties.style) {
        if (key !== "display") {
          newVisi[key] = componentSelected.properties.style[key];
        }
      }
    } else {
      newVisi = { ...componentSelected.properties.style, display: "none" };
    }
    handleDispatchComponent(newVisi);
  };

  const handleInputChange = (ev) => {
    setInput({ ...input, [ev.target.name]: ev.target.value });
    setSliderValue(ev.target.value);
  };

  const handleBlur = (ev) => {
    const opacityValue = parseFloat(ev.target.value) / 100;
    const newState = { ...componentSelected.properties.style, opacity: opacityValue };
    handleDispatchComponent(newState);
  };

  useEffect(() => {
    if (componentSelected.properties && componentSelected.properties.style) {
      setOpen(
        (componentSelected.properties.style.display &&
          componentSelected.properties.style.display === "none") ||
          componentSelected.properties.style.opacity
      );
      setInput({
        opacity: componentSelected.properties.style.opacity
          ? componentSelected.properties.style.opacity * 100
          : "",
      });
      setVisible(componentSelected.properties.style.display === "none");
    }
  }, [id]);

  useEffect(() => {
    setSliderValue(input.opacity);
  }, [input.opacity]);

  //---------------- Arrow up Arrow Down -------------------------//
  const handleKeyDown = (ev) => {
    if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
      ev.preventDefault();
      let value = parseFloat(input.opacity);
      if (isNaN(value)) {
        value = 100;
      }
      if (ev.key === "ArrowUp") {
        value += 1;
      } else if (ev.key === "ArrowDown") {
        value -= 1;
      }
      value = Math.max(0, Math.min(100, value)); // Asegurar que el valor está entre 0 y 100
      setInput({ ...input, opacity: value.toString() });
      const newState = { ...componentSelected.properties.style, opacity: value / 100 };
      handleDispatchComponent(newState);
    } else if (ev.key === "Enter") {
      ev.preventDefault();
      const opacityValue = parseFloat(input.opacity) / 100;
      const newState = { ...componentSelected.properties.style, opacity: opacityValue };
      handleDispatchComponent(newState);
      ev.target.blur();
    }
  };

  //---------------- Scroll up Scroll Down -------------------------//
  const handleScroll = (ev, currenValue = 0) => {
    const { deltaY } = ev;
    const scrollAmount = deltaY > 0 ? -1 : 1;
    const step = 1;
    const parsedValue = parseFloat(currenValue);

    if (!isNaN(parsedValue)) {
      const newValue = parsedValue + step * scrollAmount;
      const updateValue = Math.max(0, Math.min(100, newValue));
      const updatedInput = { ...input, [ev.target.name]: updateValue.toString() };
      setInput(updatedInput);
    }
  };

  //---------------- Deactivate Scroll on Focus --------------------//
  const handleOnFocus = () => {
    const homeSettingsDiv = document.querySelector(".home-settings");
    homeSettingsDiv.style.overflow = "hidden";
  };

  //------------------ Activate Scroll on Leave --------------------//
  const handleOnBlur = (ev) => {
    handleBlur(ev);
    const homeSettingsDiv = document.querySelector(".home-settings");
    homeSettingsDiv.style.overflow = "auto";
  };

  const handleRangeInput = (ev) => {
    const value = ev.target.value;
    setSliderValue(value);
    setInput({ ...input, opacity: value });
    const newState = {
      ...componentSelected.properties.style,
      opacity: value / 100,
    };
    handleDispatchComponent(newState);
  };

  return (
    <div className="visibility-container">
      <div className="visibility-container1">
        <div className="visibility-component-header">
          <span className="visibility-title">Visibility</span>
          {isOpen ? (
            <svg viewBox="0 0 1024 1024" className="radius-icon02" onClick={handleOpen}>
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          ) : (
            <svg viewBox="0 0 1024 1024" className="radius-icon" onClick={handleOpen}>
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          )}
        </div>
        <div className="visibility-container02" style={{ display: isOpen ? "flex" : "none" }}>
          <svg
            onClick={handleDisplay}
            className="visibility-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.4800000000000001"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.8494 7.05025C14.1158 4.31658 9.6836 4.31658 6.94993 7.05025L4.82861 9.17157C3.49528 10.5049 2.82861 11.1716 2.82861 12C2.82861 12.8284 3.49528 13.4951 4.82861 14.8284L6.94993 16.9497C9.6836 19.6834 14.1158 19.6834 16.8494 16.9497L18.9707 14.8284C20.3041 13.4951 20.9707 12.8284 20.9707 12C20.9707 11.1716 20.3041 10.5049 18.9707 9.17157L16.8494 7.05025ZM12.0002 8.75C10.2053 8.75 8.75019 10.2051 8.75019 12C8.75019 13.7949 10.2053 15.25 12.0002 15.25C13.7951 15.25 15.2502 13.7949 15.2502 12C15.2502 10.2051 13.7951 8.75 12.0002 8.75Z"
              ></path>
              <path
                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="#323232"
                stroke-width="2"
                fill={isVisible ? "none" : "#1ba0ff"}
              ></path>
              <path
                d="M6.94975 7.05025C9.68342 4.31658 14.1156 4.31658 16.8492 7.05025L18.9706 9.17157C20.3039 10.5049 20.9706 11.1716 20.9706 12C20.9706 12.8284 20.3039 13.4951 18.9706 14.8284L16.8492 16.9497C14.1156 19.6834 9.68342 19.6834 6.94975 16.9497L4.82843 14.8284C3.49509 13.4951 2.82843 12.8284 2.82843 12C2.82843 11.1716 3.49509 10.5049 4.82843 9.17157L6.94975 7.05025Z"
                stroke="#323232"
                stroke-width="2"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <input
            className="visibility-range-bar"
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(ev) => handleRangeInput(ev)}
          />
          <input
            name="opacity"
            pattern="^-?\d*\.?\d+$"
            className="input-visibility"
            value={input.opacity}
            onChange={handleInputChange}
            onMouseLeave={(ev) => handleOnBlur(ev)}
            onKeyDown={handleKeyDown}
            placeholder="100%"
            onWheel={(ev) => handleScroll(ev, input.opacity)}
            onMouseEnter={handleOnFocus}
          />
        </div>
      </div>
    </div>
  );
};
export default Visibility;
