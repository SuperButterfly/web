import "./paddings.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateComponent } from "../../../../../src/redux/actions/component.js";

const Paddings = () => {
  const [isOpen, setOpen] = useState(false);
  const [padlockOpen, setPadlockOpen] = useState(true);
  const dispatch = useDispatch();
  const { componentSelected } = useSelector((state) => state.component);
  const { id } = useSelector((state) => state.component.componentSelected);
  const paddingMedias = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"];
  const initialPaddingProperties = {
    paddingTop: "",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "",
    unitOfLength: "",
  };

  const [input, setInput] = useState(initialPaddingProperties);

  const handlePadlock = (ev) => {
    setPadlockOpen(!padlockOpen);
    let foundPadding = false;
    let countPadding = 0;
    let auxPadding = {};

    do {
      if (input[paddingMedias[countPadding]]) {
        foundPadding = true;
        paddingMedias.forEach((med, index) => {
          auxPadding[med] = input[paddingMedias[countPadding]];
        });
      }
      countPadding++;
    } while (!foundPadding && countPadding < paddingMedias.length);

    setInput({ ...input, auxPadding });
    handleDispatchPadding(auxPadding);
  };

  const handleDispatchPadding = (newState) => {
    let stylesExtraPadding = {};
    for (const key in componentSelected.properties.style) {
      if (!paddingMedias.includes(key))
        stylesExtraPadding[key] = componentSelected.properties.style[key];
    }
    for (const key in newState) {
      stylesExtraPadding[key] = `${newState[key]}${input.unitOfLength}`;
    }
    dispatch(
      updateComponent(componentSelected.id, {
        properties: {
          ...componentSelected.properties,
          style: {
            ...stylesExtraPadding,
          },
        },
      })
    );
  };

  const handlePadding = (ev) => {
    let actPadding = {};
    if (ev.target.value.length > 0) {
      if (!padlockOpen) {
        paddingMedias.forEach((med) => {
          actPadding[med] = ev.target.value;
        });
      } else {
        let auxInput = { ...input, [ev.target.name]: ev.target.value };
        paddingMedias.forEach((med) => {
          if (auxInput[med]) {
            actPadding[med] = auxInput[med];
          }
        });
      }
    } else {
      for (const key in input) {
        if (input[key].length > 0 && key !== ev.target.name) actPadding[key] = input[key];
      }
    }
    setInput({ ...input, ...actPadding });
    handleDispatchPadding(actPadding);
  };

  const handleInputChange = (ev) => {
    if (!isNaN(ev.target.value)) setInput({ ...input, [ev.target.name]: ev.target.value });
  };

  const handleSelect = (ev) => {
    let actPadding = {};
    paddingMedias.forEach((med) => {
      if (input[med]) actPadding[med] = `${input[med]}${ev.target.value}`;
    });
    setInput({ ...input, [ev.target.name]: ev.target.value });
    dispatch(
      updateComponent(componentSelected.id, {
        properties: {
          ...componentSelected.properties,
          style: {
            ...componentSelected.properties.style,
            ...actPadding,
          },
        },
      })
    );
  };

  useEffect(() => {
    let paddingProperties = initialPaddingProperties;
    let media = "px";
    let auxPadding = {};
    if (componentSelected.properties && componentSelected.properties.style) {
      const styles = componentSelected.properties.style;
      paddingMedias.forEach((med) => {
        if (styles[med]) {
          const matchMedia = styles[med].match(/^(\d+(?:\.\d+)?)(px|rem|%)$/);
          paddingProperties[med] = matchMedia[1];
          auxPadding[med] = matchMedia[1];
          media = matchMedia[2];
        }
      });
    }
    const valuesPadding = Object.values(auxPadding);
    const paddingIsEqual = !valuesPadding.every((value, _, arr) => {
      return value === arr[0];
    });
    setPadlockOpen(paddingIsEqual);
    paddingProperties.unitOfLength = media;
    setInput(paddingProperties);
  }, [id]);

  //---------------- Arrow up Arrow Down -------------------------//
  const handleKeyDown = (ev) => {
    if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
      ev.preventDefault();
      const paddingValue = parseFloat(ev.target.value);
      if (!isNaN(paddingValue)) {
        const step = ev.key === "ArrowUp" ? 1 : -1;
        const newPaddingValue = paddingValue + step;
        const newPadding = { ...input, [ev.target.name]: newPaddingValue.toString() };
        setInput(newPadding);
        handleInputChange({ target: { name: ev.target.name, value: newPaddingValue.toString() } });
      }
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
      const updateValue = Math.max(0, newValue);
      const updatedInput = { ...input, [ev.target.name]: updateValue.toString() };
      setInput(updatedInput);
    }
  };
  //---------------- Deactivate Scroll on Focus -------------------------//
  const handleOnFocus = () => {
    const homeSettingsDiv = document.querySelector(".home-settings");
    homeSettingsDiv.style.overflow = "hidden";
  };
  //------------------ Activate Scroll on Leave -------------------------//
  const handleOnBlur = (ev) => {
    handlePadding(ev);
    const homeSettingsDiv = document.querySelector(".home-settings");
    homeSettingsDiv.style.overflow = "auto";
  };

  return (
    <div className="paddings-container">
      <div className="paddings-component-header">
        <span className="paddings-title">Padding</span>
        <svg
          viewBox="0 0 1024 1024"
          className="paddings-icon"
          onClick={() => setOpen(!isOpen)}
          style={isOpen ? { rotate: "-90deg" } : { rotate: "0deg" }}
        >
          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="paddings-icon2">
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div
        className="paddings-container2"
        style={isOpen ? { display: "flex" } : { display: "none" }}
      >
        <input
          className="paddings-text"
          name="paddingTop"
          value={input.paddingTop}
          onChange={handleInputChange}
          onMouseLeave={(ev) => handleOnBlur(ev)}
          autoComplete="off"
          onKeyDown={handleKeyDown}
          placeholder="0"
          onWheel={(ev) => handleScroll(ev, input.paddingTop)}
          onMouseEnter={handleOnFocus}
        />
        <svg
          className="paddings-container3"
          width="1"
          height="12"
          viewBox="0 0 1 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 .5a.5.5 0 011 0v11a.5.5 0 01-1 0V.5z"></path>
        </svg>
        <div className="paddings-container4">
          <input
            className="paddings-text"
            name="paddingLeft"
            value={input.paddingLeft}
            onChange={handleInputChange}
            onMouseLeave={(ev) => handleOnBlur(ev)}
            autoComplete="off"
            onKeyDown={handleKeyDown}
            placeholder="0"
            onWheel={(ev) => handleScroll(ev, input.paddingLeft)}
            onMouseEnter={handleOnFocus}
          />
          <svg
            className="paddings-container5"
            width="16"
            height="2"
            viewBox="0 0 16 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.25.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5zM15.25.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5zM3.25.5a.75.75 0 010 1.5H.75a.75.75 0 010-1.5h2.5z"></path>
          </svg>
          <svg
            viewBox="0 0 658.2857142857142 1024"
            className="paddings-icon4"
            onClick={handlePadlock}
          >
            {padlockOpen ? (
              <path d="M603.429 438.857c30.286 0 54.857 24.571 54.857 54.857v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-182.857c0-141.143 114.857-256 256-256s256 114.857 256 256c0 20-16.571 36.571-36.571 36.571h-36.571c-20 0-36.571-16.571-36.571-36.571 0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v182.857h420.571z"></path>
            ) : (
              <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
            )}
          </svg>
          <svg
            className="paddings-container6"
            width="16"
            height="2"
            viewBox="0 0 16 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.25.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5zM15.25.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5zM3.25.5a.75.75 0 010 1.5H.75a.75.75 0 010-1.5h2.5z"></path>
          </svg>
          <input
            className="paddings-text"
            name="paddingRight"
            value={input.paddingRight}
            onChange={handleInputChange}
            onMouseLeave={(ev) => handleOnBlur(ev)}
            autoComplete="off"
            onKeyDown={handleKeyDown}
            placeholder="0"
            onWheel={(ev) => handleScroll(ev, input.paddingRight)}
            onMouseEnter={handleOnFocus}
          />
        </div>
        <svg
          className="paddings-container7"
          width="1"
          height="12"
          viewBox="0 0 1 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 .5a.5.5 0 011 0v11a.5.5 0 01-1 0V.5z"></path>
        </svg>
        <input
          className="paddings-text"
          name="paddingBottom"
          value={input.paddingBottom}
          onChange={handleInputChange}
          onMouseLeave={(ev) => handleOnBlur(ev)}
          autoComplete="off"
          onKeyDown={handleKeyDown}
          placeholder="0"
          onWheel={(ev) => handleScroll(ev, input.paddingBottom)}
          onMouseEnter={handleOnFocus}
        />
        <div className="paddings-medias-container">
          <span className="paddings-text1" htmlFor="selectUnitLength">
            Unit of length
          </span>
          <select
            name="unitOfLength"
            value={input.unitOfLength}
            onChange={handleSelect}
            id="selectUnitLength"
          >
            <option value="px">px</option>
            <option value="rem">rem</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Paddings;
