import "./border.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateComponent } from "../../../../../src/redux/actions/component.js";

const Border = () => {
  const [isOpen, setOpen] = useState(false);
  const { componentSelected } = useSelector((state) => state.component);
  const { id } = useSelector((state) => state.component.componentSelected);
  const borderAttributes = [
    "borderWidth",
    "borderStyle",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderTopWidth",
    "borderColor",
  ];
  const borderMedias = [
    "borderWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderTopWidth",
  ];
  const initialStateBorder = {
    borderWidth: "",
    borderStyle: "",
    borderLeftWidth: "",
    borderRightWidth: "",
    borderBottomWidth: "",
    borderTopWidth: "",
    borderColor: "",
    unitOfLength: "px",
  };
  const [input, setInput] = useState(initialStateBorder);
  const dispatch = useDispatch();
  const [independentBorderOpen, setIndependentBorderOpen] = useState(false);

  const handleOpen = () => {
    let newValue = !isOpen;
    setOpen(newValue);

    if (newValue) {
      const valueDefaultInput = newValue
        ? {
            borderColor: "#000000",
            borderWidth: "1",
            borderStyle: "solid",
            unitOfLength: "px",
          }
        : initialStateBorder;

      setInput({ ...initialStateBorder, ...valueDefaultInput });
      handleUpdateComponent({ ...initialStateBorder, ...valueDefaultInput }, newValue);
    } else {
      setInput(initialStateBorder);
      handleUpdateComponent({}, newValue);
    }
  };

  const handleOpenIndependentBorder = () => {
    const newValue = !independentBorderOpen;
    setIndependentBorderOpen(newValue);
    handleUpdateComponent(input, newValue);
  };

  const handleInputChange = (ev) => {
    let value = "";
    if (borderMedias.includes(ev.target.name) && !isNaN(ev.target.value)) {
      value = ev.target.value;
    } else if (!borderMedias.includes(ev.target.name)) {
      value = ev.target.value;
    } else {
      value = input[ev.target.name];
    }
    setInput({ ...input, [ev.target.name]: value });
  };

  const handleBlur = (ev) => {
    handleUpdateComponent({ [ev.target.name]: ev.target.value }, independentBorderOpen);
  };

  const handleUpdateComponent = (newStyleBorder, isOpenInd) => {
    const actInput = { ...input, ...newStyleBorder };
    const stylesComponent = componentSelected.properties.style;
    let newStyles = {};

    for (const key in stylesComponent) {
      if (!borderAttributes.includes(key)) {
        newStyles[key] = stylesComponent[key];
      }
    }
    console.log(newStyles);
    if (Object.keys(newStyleBorder).length > 0) {
      if (isOpenInd) {
        borderAttributes.forEach((med) => {
          if (actInput[med].length && med !== "borderWidth") {
            if (borderMedias.includes(med)) {
              newStyles[med] = `${actInput[med]}${actInput.unitOfLength}`;
            } else {
              newStyles[med] = actInput[med];
            }
          }
        });
      } else {
        const attCloseIndCor = ["borderWidth", "borderStyle", "borderColor"];
        attCloseIndCor.forEach((med) => {
          if (borderMedias.includes(med)) {
            newStyles[med] = `${actInput[med]}${actInput.unitOfLength}`;
          } else {
            newStyles[med] = actInput[med];
          }
        });
      }
    }

    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          style: {
            ...newStyles,
          },
        },
      })
    );
  };

  const handleSelectChange = (ev) => {
    setInput({ ...input, [ev.target.name]: ev.target.value });
    let stylesBorder = {};
    borderMedias.forEach((med) => {
      if (componentSelected.properties.style[med])
        stylesBorder[med] = `${input[med]}${ev.target.value}`;
    });
    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          style: {
            ...componentSelected.properties.style,
            ...stylesBorder,
          },
        },
      })
    );
  };

  useEffect(() => {
    if (componentSelected.properties && componentSelected.properties.style) {
      const stylesComponent = componentSelected.properties.style;
      let media = "px";
      let border = {};
      for (const key in stylesComponent) {
        if (borderAttributes.includes(key)) {
          if (borderMedias.includes(key)) {
            const matchMedia = stylesComponent[key].match(/^(\d+(?:\.\d+)?)(px|rem|%)$/);
            border[key] = matchMedia[1];
            media = matchMedia[2];
          } else {
            border[key] = stylesComponent[key];
          }
        }
      }
      const arrPropStyles = Object.keys(border);
      setOpen(arrPropStyles.length > 0);
      if (arrPropStyles.length > 0)
        setIndependentBorderOpen(
          arrPropStyles.find((prop) => borderAttributes.includes(prop) && prop.length > 11)
        );

      setInput({ ...initialStateBorder, ...border, unitOfLength: media });
    }
  }, [id]);

  const handleKeyDown = (ev) => {
    if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
      ev.preventDefault();
      const value = parseFloat(ev.target.value);
      if (!isNaN(value)) {
        const step = ev.key === "ArrowUp" ? 1 : -1;
        const newValue = value + step;
        const newInput = {
          ...input,
          [ev.target.name]: newValue.toString(),
        };
        setInput(newInput);
        handleInputChange({
          target: {
            name: ev.target.name,
            value: newValue.toString(),
          },
        });

        // Actualizar los estilos del componente Border
        const updatedStyles = {};
        const updatedMedias = [
          "borderWidth",
          "borderLeftWidth",
          "borderRightWidth",
          "borderBottomWidth",
          "borderTopWidth",
        ];
        borderAttributes.forEach((attr) => {
          if (updatedMedias.includes(attr)) {
            updatedStyles[attr] = `${newInput[attr]}${newInput.unitOfLength}`;
          } else {
            updatedStyles[attr] = newInput[attr];
          }
        });
        handleUpdateComponent(updatedStyles, independentBorderOpen);
      }
    }
  };

  const handleScroll = (ev, currentBorder) => {
    const { deltaY } = ev;
    const scrollAmount = deltaY > 0 ? -1 : 1;
    const step = 1;
    const parsedBorder = parseFloat(currentBorder);

    if (!isNaN(parsedBorder)) {
      const newBorder = parsedBorder + step * scrollAmount;
      const updatedBorder = Math.max(0, newBorder);
      const updatedInput = { ...input, [ev.target.name]: updatedBorder.toString() };
      setInput(updatedInput);
    }
  };
  const handleOnFocus = () => {
    const homeSettingsDiv = document.querySelector(".home-settings");
    homeSettingsDiv.style.overflow = "hidden";
  };
  const handleOnBlur = (ev) => {
    handleBlur(ev);
    const homeSettingsDiv = document.querySelector(".home-settings");
    homeSettingsDiv.style.overflow = "auto";
  };

  return (
    <div className="border-container">
      <div className="border-component-header">
        <span className="border-title">Border</span>
        {!isOpen ? (
          <svg viewBox="0 0 1024 1024" className="shadow-icon06" onClick={handleOpen}>
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        ) : (
          <svg viewBox="0 0 1024 1024" className="-index-icon2" onClick={handleOpen}>
            <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        )}
      </div>
      <div
        className="independet-borders-section"
        style={isOpen ? { display: "flex" } : { display: "none" }}
      >
        <div className="section-borders">
          <span className="border-text">Color</span>
          <div className="independet-borders-column">
            <input
              type="text"
              name="borderColor"
              onChange={handleInputChange}
              value={input.borderColor}
              onBlur={handleBlur}
              className="border-text01"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="section-borders">
          <span className="border-text">Width</span>
          <div className="independet-borders-column">
            <input
              name="borderWidth"
              onChange={handleInputChange}
              value={input.borderWidth}
              onBlur={(ev) => handleOnBlur(ev)}
              type="text"
              placeholder="0"
              className="border-text01"
              autoComplete="off"
              onKeyDown={handleKeyDown}
              onWheel={(ev) => handleScroll(ev, input.borderWidth)}
              onFocus={handleOnFocus}
            />
            <svg
              version="1.0"
              fill={independentBorderOpen ? "#14A9FF" : "#6B6B6B"}
              onClick={handleOpenIndependentBorder}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 48 48"
            >
              <path d="M11 7.5C11 8.8 13.1 9 24 9s13-.2 13-1.5S34.9 6 24 6s-13 .2-13 1.5zM6 24c0 10.9.2 13 1.5 13S9 34.9 9 24s-.2-13-1.5-13S6 13.1 6 24zm33 0c0 10.9.2 13 1.5 13S42 34.9 42 24s-.2-13-1.5-13S39 13.1 39 24zM11 40.5c0 1.3 2.1 1.5 13 1.5s13-.2 13-1.5S34.9 39 24 39s-13 .2-13 1.5z" />
            </svg>
          </div>
        </div>
        {independentBorderOpen && (
          <div className="section-independent-borders">
            <input
              type="text"
              name="borderTopWidth"
              value={input.borderTopWidth}
              onChange={handleInputChange}
              onBlur={(ev) => handleOnBlur(ev)}
              placeholder={input.borderWidth ? input.borderWidth : 0}
              className="independent-border-text-top"
              autoComplete="off"
              onKeyDown={handleKeyDown}
              onWheel={(ev) => handleScroll(ev, input.borderTopWidth)}
              onFocus={handleOnFocus}
            />
            <div className="section-borders01">
              <input
                type="text"
                name="borderLeftWidth"
                value={input.borderLeftWidth}
                placeholder={input.borderWidth ? input.borderWidth : 0}
                onBlur={(ev) => handleOnBlur(ev)}
                onChange={handleInputChange}
                className="independent-border-text-left"
                autoComplete="off"
                onKeyDown={handleKeyDown}
                onWheel={(ev) => handleScroll(ev, input.borderWidth)}
                onFocus={handleOnFocus}
              />
              <input
                type="text"
                name="borderRightWidth"
                value={input.borderRightWidth}
                placeholder={input.borderWidth ? input.borderWidth : 0}
                onBlur={(ev) => handleOnBlur(ev)}
                onChange={handleInputChange}
                className="independent-border-text-right"
                autoComplete="off"
                onKeyDown={handleKeyDown}
                onWheel={(ev) => handleScroll(ev, input.borderRightWidth)}
              />
            </div>
            <input
              type="text"
              name="borderBottomWidth"
              value={input.borderBottomWidth}
              placeholder={input.borderWidth ? input.borderWidth : 0}
              onBlur={handleBlur}
              onChange={handleInputChange}
              className="independent-border-text-bottom"
              autoComplete="off"
              onKeyDown={handleKeyDown}
              onWheel={(ev) => handleScroll(ev, input.borderWidth)}
              onFocus={handleOnFocus}
            />
          </div>
        )}
        <div className="section-borders" style={isOpen ? { display: "flex" } : { display: "none" }}>
          <label className="border-unitText" htmlFor="selectUnitLength">
            Unit of length
          </label>
          <select
            onChange={handleSelectChange}
            name="unitOfLength"
            value={input.unitOfLength}
            id="selectUnitLength"
          >
            <option value="px">px</option>
            <option value="rem">rem</option>
            <option value="%">%</option>
          </select>
        </div>
        <div className="section-borders">
          <span className="border-text">Style</span>
          <div className="independet-borders-column">
            <input
              type="text"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={input.borderStyle}
              name="borderStyle"
              className="border-text01"
              placeholder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Border;
