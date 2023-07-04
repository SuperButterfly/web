import "./visibility.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateComponent } from "../../../../../src/redux/actions/component.js";
const Visibility = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const { componentSelected } = useSelector((state) => state.component);
  const { id } = useSelector((state) => state.component.componentSelected);
  const [input, setInput] = useState({ opacity: "" });
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!isOpen);
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

  const handleBlur = (ev) => {
    const opacityValue = parseFloat(ev.target.value) / 100;
    const newState = { ...componentSelected.properties.style, opacity: opacityValue };
    handleDispatchComponent(newState);
  };

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
    }
  };
  const handleScroll = (ev, currenValue) => {
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
            fill={isVisible ? "#14A9FF" : "#565656"}
            width="20"
            height="14"
            viewBox="0 0 20 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.24 5.523C5.77 6.875 7.84 8.06 10.085 8.06c2.274 0 4.35-.96 5.862-2.173.755-.606 1.358-1.267 1.768-1.886.419-.63.608-1.172.608-1.547h.909c0 .634-.297 1.355-.759 2.05-.469.707-1.139 1.435-1.957 2.092-1.634 1.311-3.904 2.373-6.43 2.373-2.557 0-4.834-1.34-6.448-2.766a12.95 12.95 0 01-1.932-2.112 6.576 6.576 0 01-.544-.886c-.12-.244-.224-.514-.224-.751h.91c0 .004.003.033.023.095.02.066.055.15.106.254.102.207.259.466.469.76.42.586 1.032 1.287 1.794 1.959z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.588 11.546V8.817h.91v2.729h-.91zM18.763 8.299l-2.39-2.5.657-.629 2.39 2.5-.657.629zM.58 7.545L2.852 5.17l.657.629-2.27 2.374-.657-.628zM15.096 10.786l-1.69-3.062.796-.439 1.69 3.062-.796.44zM3.892 10.193l1.605-2.908.796.44-1.605 2.908-.796-.44z"
            ></path>
          </svg>
          <input
            name="opacity"
            pattern="^-?\d*\.?\d+$"
            className="input-visibility"
            value={input.opacity}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder="100%"
            onWheel={(ev) => handleScroll(ev, input.opacity)}
          />
        </div>
      </div>
    </div>
  );
};
export default Visibility;
