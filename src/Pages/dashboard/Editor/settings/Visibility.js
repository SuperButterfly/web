import './visibility.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js'
const Visibility = () => {
  const [isOpen, setOpen] = useState(false)
  const { componentSelected } = useSelector((state) => state.component)
  const [isVisible, setVisible] = useState(componentSelected?.isshow)
  const { id } = useSelector((state) => state.component.componentSelected)
  const [input, setInput] = useState({ opacity: '100' })
  const dispatch = useDispatch()
  const [sliderValue, setSliderValue] = useState(input.opacity)

  const handleOpen = () => {
    setOpen(!isOpen)
  }

  const handleDispatchComponent = (newVisibility) => {
    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        isshow: !componentSelected?.isshow,
        properties: {
          ...componentSelected.properties,
          style: {
            ...newVisibility
          }
        }
      })
    )
  }

  const handleDisplay = () => {
    let newVisi = {}
    if (!componentSelected?.isshow) {
      for (const key in componentSelected.properties.style) {
        if (key !== 'display') {
          newVisi[key] = componentSelected.properties.style[key]
        }
      }
    } else {
      newVisi = { ...componentSelected.properties.style, display: 'none' }
    }
    handleDispatchComponent(newVisi)
  }

  const handleInputChange = (ev) => {
    setInput({ ...input, [ev.target.name]: ev.target.value })
    setSliderValue(ev.target.value)
  }

  const handleBlur = (ev) => {
    const opacityValue = parseFloat(ev.target.value) / 100
    const newState = {
      ...componentSelected.properties.style,
      opacity: opacityValue
    }
    handleDispatchComponent(newState)
  }

  // ---------------- Arrow up Arrow Down -------------------------//
  const handleKeyDown = (ev) => {
    if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
      ev.preventDefault()
      let value = parseFloat(input.opacity)
      if (isNaN(value)) {
        value = 100
      }
      if (ev.key === 'ArrowUp') {
        value += 1
      } else if (ev.key === 'ArrowDown') {
        value -= 1
      }
      value = Math.max(0, Math.min(100, value)) // Asegurar que el valor está entre 0 y 100
      setInput({ ...input, opacity: value.toString() })
      const newState = {
        ...componentSelected.properties.style,
        opacity: value / 100
      }
      handleDispatchComponent(newState)
    } else if (ev.key === 'Enter') {
      ev.preventDefault()
      const opacityValue = parseFloat(input.opacity) / 100
      const newState = {
        ...componentSelected.properties.style,
        opacity: opacityValue
      }
      handleDispatchComponent(newState)
      ev.target.blur()
    }
  }

  // ---------------- Scroll up Scroll Down -------------------------//
  const handleScroll = (ev, currenValue = 0) => {
    const { deltaY } = ev
    const scrollAmount = deltaY > 0 ? -1 : 1
    const step = 1
    const parsedValue = parseFloat(currenValue)

    if (!isNaN(parsedValue)) {
      const newValue = parsedValue + step * scrollAmount
      const updateValue = Math.max(0, Math.min(100, newValue))
      const updatedInput = {
        ...input,
        [ev.target.name]: updateValue.toString()
      }
      setInput(updatedInput)
    }
  }

  // ---------------- Deactivate Scroll on Focus --------------------//
  const handleOnFocus = () => {
    const homeSettingsDiv = document.querySelector('.home-settings')
    homeSettingsDiv.style.overflow = 'hidden'
  }

  // ------------------ Activate Scroll on Leave --------------------//
  const handleOnBlur = (ev) => {
    handleBlur(ev)
    const homeSettingsDiv = document.querySelector('.home-settings')
    homeSettingsDiv.style.overflow = 'auto'
  }

  const handleRangeInput = (ev) => {
    const value = ev.target.value
    setSliderValue(value)
    setInput({ ...input, opacity: value })
    const newState = {
      ...componentSelected.properties.style,
      opacity: value / 100
    }
    handleDispatchComponent(newState)
  }

  useEffect(() => {
    if (componentSelected.properties && componentSelected.properties.style) {
      setOpen(
        (componentSelected.properties.style.display &&
          componentSelected.properties.style.display === 'none') ||
          componentSelected.properties.style.opacity
      )
      setInput({
        opacity: componentSelected.properties.style.opacity
          ? componentSelected.properties.style.opacity * 100
          : ''
      })
      setVisible(componentSelected.properties.style.display === 'none')
    }
  }, [id])

  useEffect(() => {
    setSliderValue(input.opacity)
  }, [input.opacity])

  return (
    <div className="visibility-container">
      <div className="visibility-container1">
        <div className="visibility-component-header">
          <span className="visibility-title">Visibility</span>
          {isOpen ? (
            <svg
              viewBox="0 0 1024 1024"
              className="radius-icon02"
              onClick={handleOpen}
            >
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 1024 1024"
              className="radius-icon"
              onClick={handleOpen}
            >
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          )}
        </div>
        <div
          className="visibility-container02"
          style={{ display: isOpen ? 'flex' : 'none' }}
        >
          {componentSelected?.isshow ? (
            <svg
              onClick={handleDisplay}
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
                <path
                  d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
          ) : (
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleDisplay}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
          )}
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
  )
}
export default Visibility
