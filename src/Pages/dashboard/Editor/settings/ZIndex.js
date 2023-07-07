import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateComponent } from "../../../../../src/redux/actions/component.js";
import "./zindex.css";

const ZIndex = () => {
  const dispatch = useDispatch();
  const { componentSelected } = useSelector((state) => state.component);
  const { id } = useSelector((state) => state.component.componentSelected);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    zIndex: "auto",
  });

  const handleInputChange = (ev) => {
    setInput({ ...input, [ev.target.name]: ev.target.value });
  };

  //---------------- Arrow up Arrow Down -------------------------//
  const handleKeyDown = (ev) => {
    if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
      ev.preventDefault();
      const delta = ev.key === "ArrowUp" ? 1 : -1;
      setInput((prevInput) => {
        const newZIndex = parseInt(prevInput.zIndex, 10) + delta;
        return { ...prevInput, zIndex: newZIndex.toString() };
      });
    } else if (ev.key === "Enter") {
      ev.preventDefault();
      ev.target.blur();
      setInput({ ...input, zIndex: ev.target.value.toString() });
      handleOnBlur(ev);
    }
  };

  //---------------- Scroll up Scroll Down -------------------------//
  const handleScroll = (ev) => {
    const delta = Math.sign(ev.deltaY);
    setInput((prevInput) => {
      const newZIndex = parseInt(prevInput.zIndex, 10) - delta;
      return { ...prevInput, zIndex: newZIndex.toString() };
    });
  };

  //---------------- Deactivate Scroll on Focus --------------------//
  const handleOnFocus = () => {
    const homeSettingsDiv = document.querySelector(".home-settings");
    homeSettingsDiv.style.overflow = "hidden";
  };
  //------------------ Activate Scroll on Leave --------------------//
  const handleOnBlur = (ev) => {
    const actInput = { ...input, [ev.target.name]: ev.target.value };

    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          style: {
            ...componentSelected.properties.style,
            zIndex: actInput.zIndex ? actInput.zIndex : "100",
          },
        },
      })
    );
    const homeSettingsDiv = document.querySelector(".home-settings");
    homeSettingsDiv.style.overflow = "auto";
  };

  useEffect(() => {
    if (componentSelected.properties && componentSelected.properties.style)
      setInput({
        zIndex: componentSelected.properties.style.zIndex
          ? componentSelected.properties.style.zIndex
          : "100",
      });
  }, [id]);
  return (
    <div className="-index--index">
      <div className="-index-container">
        <span className="-index-settings-title">Z-Indez</span>
        {!isOpen && (
          <svg viewBox="0 0 1024 1024" className="-index-icon" onClick={() => setIsOpen(true)}>
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        )}
        {isOpen && (
          <svg viewBox="0 0 1024 1024" className="-index-icon2" onClick={() => setIsOpen(false)}>
            <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        )}
      </div>
      {isOpen && (
        <div className="-index-container1">
          <span className="-index-text1">Z-Indez</span>
          <input
            type="text"
            name="zIndex"
            value={input.zIndex}
            onMouseEnter={(ev) => handleOnFocus()}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onWheel={handleScroll}
            onMouseLeave={(ev) => handleOnBlur(ev)}
            className="-index-textinput"
          />
        </div>
      )}
    </div>
  );
};

export default ZIndex;
