import './size.css'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js'

const Size = () => {
  const { componentSelected } = useSelector((state) => state.component)
  const { id } = useSelector((state) => state.component.componentSelected)
  const [isOpen, setOpen] = useState(false)
  const dispatch = useDispatch()
  const sizeMedias = [
    'width',
    'height',
    'minWidth',
    'minHeight',
    'maxWidth',
    'maxHeight'
  ]
  const initialStateInput = {
    width: 'auto',
    height: 'auto',
    minWidth: 'auto',
    minHeight: 'auto',
    maxWidth: 'auto',
    maxHeight: 'auto',
    flex: '',
    unitOfLength: 'px'
  }
  const [input, setInput] = useState(initialStateInput)
  const tagOptionFlex = [
    'img',
    'video',
    'iframe',
    'ul',
    'ol',
    'li',
    'form',
    'button',
    'input',
    'textarea',
    'select',
    'div'
  ]

  const handleUpdateComponent = (newState) => {
    dispatch(updateComponent(componentSelected.id, newState))
  }

  const handleSize = (ev) => {
    let actStyle = {}
    if (ev.target.value.length > 0) {
      const value =
        ev.target.name === 'flex'
          ? ev.target.value
          : `${ev.target.value}${input.unitOfLength}`
      actStyle = {
        properties: {
          ...componentSelected.properties,
          style: {
            ...componentSelected.properties.style,
            [ev.target.name]: value
          }
        }
      }
    } else {
      const aux = {}
      for (const key in componentSelected.properties.style) {
        if (key !== ev.target.name) {
          aux[key] = componentSelected.properties.style[key]
        }
      }
      actStyle = {
        properties: {
          ...componentSelected.properties,
          style: {
            ...aux
          }
        }
      }
    }
    setInput((prevInput) => ({
      ...prevInput,
      [ev.target.name]: ev.target.value
    }))

    handleUpdateComponent(actStyle)
  }

  const handleInputChange = (ev) => {
    setInput((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value
    }))
  }

  const handleSelect = (ev) => {
    const stylesComponent = componentSelected.properties.style
    const actInput = { ...input, [ev.target.name]: ev.target.value }
    const extraSize = {}
    const auxSize = {}

    setInput(actInput)
    for (const key in stylesComponent) {
      if (!sizeMedias.includes(key)) extraSize[key] = stylesComponent[key]
    }
    for (const key in actInput) {
      if (sizeMedias.includes(key) && actInput[key].length > 0) {
        auxSize[key] = `${actInput[key]}${ev.target.value}`
      }
    }

    const newState = {
      properties: {
        ...componentSelected.properties,
        style: {
          ...extraSize,
          ...auxSize
        }
      }
    }
    handleUpdateComponent(newState)
  }

  useEffect(() => {
    const actSize = {}
    let media = 'px'
    if (componentSelected.properties && componentSelected.properties.style) {
      const styles = componentSelected.properties.style
      sizeMedias.forEach((med) => {
        if (styles[med] && styles[med].length > 0) {
          const matchMedia = styles[med].match(/^(\d+(?:\.\d+)?)(px|rem|%)$/)
          actSize[med] = matchMedia && matchMedia[1] ? matchMedia[1] : ''
          media = matchMedia && matchMedia[2] ? matchMedia[2] : ''
        }
      })
      actSize.flex = styles.flex ? styles.flex : ''
      actSize.unitOfLength = media
    }
    setInput({ ...initialStateInput, ...actSize })
  }, [id])

  // ---------------- Arrow up Arrow Down -------------------------//
  const handleKeyDown = (ev) => {
    if (ev.key === 'ArrowUp') {
      ev.preventDefault()
      const value = Math.max(0, parseFloat(input[ev.target.name]) + 1)
      handleInputChange({
        target: { name: ev.target.name, value: value.toString() }
      })
      handleSize({ target: { name: ev.target.name, value: value.toString() } })
    } else if (ev.key === 'ArrowDown') {
      ev.preventDefault()
      const value = Math.max(0, parseFloat(input[ev.target.name]) - 1)
      handleInputChange({
        target: { name: ev.target.name, value: value.toString() }
      })
      handleSize({ target: { name: ev.target.name, value: value.toString() } })
    } else if (ev.key === 'Enter') {
      ev.preventDefault()
      handleInputChange(ev)
      handleSize(ev)
      ev.target.blur()
    }
  }

  // ---------------- Scroll up Scroll Down -------------------------//
  const handleScroll = (ev, currenValue) => {
    const { deltaY } = ev
    const scrollAmount = deltaY > 0 ? -1 : 1
    const step = 1
    const parsedValue = parseFloat(currenValue)

    if (!isNaN(parsedValue)) {
      const newValue = parsedValue + step * scrollAmount
      const updateValue = Math.max(0, newValue)
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
    handleSize(ev)
    const homeSettingsDiv = document.querySelector('.home-settings')
    homeSettingsDiv.style.overflowY = 'scroll'
  }

  return (
    <div className="size-container" onClick={() => setOpen(!isOpen)}>
      <div className="size-component-header">
        <span className="size-title">Size</span>
        <svg
          viewBox="0 0 1024 1024"
          className="size-arrow"
          onClick={() => setOpen(!isOpen)}
          style={
            isOpen
              ? { transform: 'rotate(-90deg)' }
              : { transform: 'rotate(0deg)' }
          }
        >
          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
        </svg>
      </div>
      <div className="size-container2">
        <span className="size-text">Width</span>
        <input
          placeholder="auto"
          autoComplete="off"
          className="size-text1"
          value={input.width}
          name="width"
          onChange={handleInputChange}
          onMouseLeave={(ev) => handleOnBlur(ev)}
          onKeyDown={handleKeyDown}
          onWheel={(ev) => handleScroll(ev, input.width)}
          onMouseEnter={handleOnFocus}
        />
        <span className="size-text2">Height</span>
        <input
          placeholder="auto"
          autoComplete="off"
          className="size-text1"
          value={input.height}
          name="height"
          onChange={handleInputChange}
          onMouseLeave={(ev) => handleOnBlur(ev)}
          onKeyDown={handleKeyDown}
          onWheel={(ev) => handleScroll(ev, input.height)}
          onMouseEnter={handleOnFocus}
        />
      </div>
      <div
        className="size-container3"
        style={isOpen ? { display: 'flex' } : { display: 'none' }}
      >
        <div className="size-container2">
          <span className="size-text">Min W</span>
          <input
            placeholder="auto"
            autoComplete="off"
            className="size-text1"
            value={input.minWidth}
            name="minWidth"
            onChange={handleInputChange}
            onMouseLeave={(ev) => handleOnBlur(ev)}
            onKeyDown={handleKeyDown}
            onWheel={(ev) => handleScroll(ev, input.minWidth)}
            onMouseEnter={handleOnFocus}
          />
          <span className="size-text2">Min H</span>
          <input
            placeholder="auto"
            autoComplete="off"
            className="size-text1"
            value={input.minHeight}
            name="minHeight"
            onChange={handleInputChange}
            onMouseLeave={(ev) => handleOnBlur(ev)}
            onKeyDown={handleKeyDown}
            onWheel={(ev) => handleScroll(ev, input.minHeight)}
            onMouseEnter={handleOnFocus}
          />
        </div>
        <div className="size-container2">
          <span className="size-text">Max W</span>
          <input
            placeholder="auto"
            autoComplete="off"
            className="size-text1"
            value={input.maxWidth}
            name="maxWidth"
            onChange={handleInputChange}
            onMouseLeave={(ev) => handleOnBlur(ev)}
            onKeyDown={handleKeyDown}
            onWheel={(ev) => handleScroll(ev, input.maxWidth)}
            onMouseEnter={handleOnFocus}
          />
          <span className="size-text2">Max H</span>
          <input
            placeholder="auto"
            autoComplete="off"
            className="size-text1"
            value={input.maxHeight}
            name="maxHeight"
            onChange={handleInputChange}
            onMouseLeave={(ev) => handleOnBlur(ev)}
            onKeyDown={handleKeyDown}
            onWheel={(ev) => handleScroll(ev, input.maxHeight)}
            onMouseEnter={handleOnFocus}
          />
        </div>
      </div>
      <div className="size-container2">
        <span className="size-text" htmlFor="selectUnitLength">
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
      {tagOptionFlex.includes(componentSelected.tag) && (
        <div className="size-container4">
          <span className="size-text4">Flex</span>
          <input
            placeholder="initial"
            className="size-text1"
            value={input.flex}
            name="flex"
            onChange={handleInputChange}
            onBlur={handleSize}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  )
}

export default Size
