import './margins.css'
import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js'

const Margins = () => {
  const [isOpen, setOpen] = useState(false)
  const { componentSelected } = useSelector((state) => state.component)
  const { id } = useSelector((state) => state.component.componentSelected)
  const dispatch = useDispatch()
  const [padlockOpen, setPadlockOpen] = useState(true)
  const marginMedias = [
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft'
  ]
  const initialMarginProperties = {
    marginTop: '0',
    marginLeft: '0',
    marginRight: '0',
    marginBottom: '0',
    unitOfLength: 'px'
  }

  const [input, setInput] = useState(initialMarginProperties)
  const [lockY, setLockY] = useState(false)
  const [lockX, setLockX] = useState(false)

  const handlePadlock = (ev) => {
    setPadlockOpen(!padlockOpen)
    let foundMargin = false
    let countMargin = 0
    const auxMargin = {}
    do {
      if (input[marginMedias[countMargin]]) {
        foundMargin = true
        marginMedias.forEach((med) => {
          auxMargin[med] = input[marginMedias[countMargin]]
        })
      }
      countMargin++
    } while (!foundMargin && countMargin <= marginMedias.length)

    setInput({ ...input, ...auxMargin })
    handleDispatchMargin(auxMargin)
  }

  const handleDispatchMargin = (newState) => {
    const stylesExtraMargin = {}
    for (const key in componentSelected.properties.style) {
      if (!marginMedias.includes(key)) {
        stylesExtraMargin[key] = componentSelected.properties.style[key]
      }
    }
    for (const key in newState) {
      stylesExtraMargin[key] = `${newState[key]}${input.unitOfLength}`
    }
    dispatch(
      updateComponent(componentSelected.id, {
        properties: {
          ...componentSelected.properties,
          style: {
            ...stylesExtraMargin
          }
        }
      })
    )
  }

  const handleMargin = (ev) => {
    const actMargin = {}
    if (ev.target.value.length > 0) {
      if (!padlockOpen) {
        marginMedias.forEach((med) => {
          actMargin[med] = ev.target.value
        })
      } else if (
        lockY &&
        (ev.target.name === 'marginTop' || ev.target.name === 'marginBottom')
      ) {
        actMargin.marginTop = ev.target.value
        actMargin.marginBottom = ev.target.value
      } else if (
        lockX &&
        (ev.target.name === 'marginLeft' || ev.target.name === 'marginRight')
      ) {
        actMargin.marginLeft = ev.target.value
        actMargin.marginRight = ev.target.value
      } else {
        const auxInput = { ...input, [ev.target.name]: ev.target.value }
        marginMedias.forEach((med) => {
          if (auxInput[med]) {
            actMargin[med] = auxInput[med]
          }
        })
      }
    } else {
      for (const key in input) {
        if (input[key].length > 0 && key !== ev.target.name) {
          actMargin[key] = input[key]
        }
      }
    }
    setInput({ ...input, ...actMargin })
    handleDispatchMargin(actMargin)
  }

  const handleInputChange = (ev) => {
    if (!isNaN(ev.target.value)) {
      setInput({ ...input, [ev.target.name]: ev.target.value })
    }
  }

  const handleSelect = (ev) => {
    const actMargin = {}
    marginMedias.forEach((med) => {
      if (input[med]) actMargin[med] = `${input[med]}${ev.target.value}`
    })
    setInput({ ...input, [ev.target.name]: ev.target.value })
    dispatch(
      updateComponent(componentSelected.id, {
        properties: {
          ...componentSelected.properties,
          style: {
            ...componentSelected.properties.style,
            ...actMargin
          }
        }
      })
    )
  }

  // -------------- Arrow up Arrow Down --------------------//
  const handleKeyDown = (ev) => {
    if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
      ev.preventDefault()
      const marginValue = parseFloat(ev.target.value)
      if (!isNaN(marginValue)) {
        const step = ev.key === 'ArrowUp' ? 1 : -1
        const newMarginValue = marginValue + step
        const newMargin = {
          ...input,
          [ev.target.name]: newMarginValue.toString()
        }
        setInput(newMargin)
        handleMargin({
          target: { name: ev.target.name, value: newMarginValue.toString() }
        })
      }
    } else if (ev.key === 'Enter') {
      ev.preventDefault()
      handleInputChange(ev)
      handleMargin(ev)
      ev.target.blur()
    }
  }

  // ---------------- Scroll up Scroll Down ---------------------//
  const handleScroll = (ev, currentMargin) => {
    ev.preventDefault()
    const { deltaY } = ev
    const scrollAmount = deltaY > 0 ? -1 : 1
    const step = 1
    const parsedMargin = parseFloat(currentMargin)

    if (!isNaN(parsedMargin)) {
      const newMargin = parsedMargin + step * scrollAmount
      const updatedMargin = Math.max(0, newMargin)
      const updatedInput = {
        ...input,
        [ev.target.name]: updatedMargin.toString()
      }
      setInput(updatedInput)
      handleMargin({
        target: { name: ev.target.name, value: updatedMargin.toString() }
      })
    }
  }

  // ---------------- Deactivate Scroll on Focus -------------------------//
  const handleOnFocus = () => {
    const homeSettingsDiv = document.querySelector('.home-settings')
    homeSettingsDiv.style.overflow = 'hidden'
  }

  // ------------------ Activate Scroll on Leave -------------------------//
  const handleOnBlur = (ev) => {
    handleMargin(ev)
    const homeSettingsDiv = document.querySelector('.home-settings')
    homeSettingsDiv.style.overflow = 'auto'
  }

  // ------------------ Handle axis locked  -------------------------//
  const handleLock = (axies) => {
    console.log(axies)
    if (axies === 'lockY') {
      setLockY(!lockY)
    }
    if (axies === 'lockX') {
      setLockX(!lockX)
    }
  }

  useEffect(() => {
    const marginProperties = initialMarginProperties
    let media = 'px'
    const auxMargin = {}
    if (componentSelected.properties && componentSelected.properties.style) {
      const styles = componentSelected.properties.style
      marginMedias.forEach((med) => {
        if (styles[med]) {
          const matchMedia = styles[med].match(/^(\d+(?:\.\d+)?)(px|rem|%)$/)
          if (matchMedia) {
            marginProperties[med] = matchMedia[1]
            auxMargin[med] = matchMedia[1]
            media = matchMedia[2]
          }
        }
      })
    }
    const valuesMargin = Object.values(auxMargin)
    const marginIsEqual = !valuesMargin.every((value, _, arr) => {
      return value === arr[0]
    })
    setPadlockOpen(marginIsEqual)
    marginProperties.unitOfLength = media
    setInput(marginProperties)
  }, [id])

  return (
    <div className="margin-container">
      <div className="margin-component-header">
        <span className="margin-title">Margin</span>
        <svg
          viewBox="0 0 1024 1024"
          className="margin-icon"
          onClick={() => setOpen(!isOpen)}
          style={isOpen ? { rotate: '-90deg' } : { rotate: '0deg' }}
        >
          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="margin-icon2">
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div
        className="margin-container2"
        style={isOpen ? { display: 'flex' } : { display: 'none' }}
      >
        <input
          className="margin-text"
          name="marginTop"
          value={input.marginTop}
          onChange={handleInputChange}
          onMouseLeave={(ev) => handleOnBlur(ev)}
          autoComplete="off"
          onKeyDown={handleKeyDown}
          onWheel={(ev) => handleScroll(ev, input.marginTop)}
          onMouseEnter={handleOnFocus}
        />
        <svg
          className="margin-container3"
          width="16"
          height="16"
          viewBox="0 0 2 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleLock('lockY')}
        >
          <path
            d="M0 .5a.5.5 0 011 0v11a.5.5 0 01-1 0V.5z"
            fill={padlockOpen ? (lockY ? '#1ba0ff' : '#959595') : '#1ba0ff'}
          ></path>
        </svg>
        <div className="margin-container4">
          <input
            className="margin-text"
            name="marginLeft"
            value={input.marginLeft}
            onChange={handleInputChange}
            onMouseLeave={(ev) => handleOnBlur(ev)}
            autoComplete="off"
            onKeyDown={handleKeyDown}
            onWheel={(ev) => handleScroll(ev, input.marginLeft)}
            onMouseEnter={handleOnFocus}
          />
          <svg
            className="margin-container5"
            width="16"
            height="16"
            viewBox="0 0 16 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleLock('lockX')}
          >
            <path
              d="M9.25.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5zM15.25.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5zM3.25.5a.75.75 0 010 1.5H.75a.75.75 0 010-1.5h2.5z"
              fill={padlockOpen ? (lockX ? '#1ba0ff' : '#959595') : '#1ba0ff'}
            ></path>
          </svg>
          <svg
            viewBox="0 0 658.2857142857142 1024"
            className="margin-icon4"
            onClick={handlePadlock}
          >
            {padlockOpen ? (
              <path d="M603.429 438.857c30.286 0 54.857 24.571 54.857 54.857v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-182.857c0-141.143 114.857-256 256-256s256 114.857 256 256c0 20-16.571 36.571-36.571 36.571h-36.571c-20 0-36.571-16.571-36.571-36.571 0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v182.857h420.571z"></path>
            ) : (
              <path
                d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"
                fill="#1ba0ff"
              ></path>
            )}
          </svg>
          <svg
            className="margin-container6"
            width="16"
            height="16"
            viewBox="0 0 16 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleLock('lockX')}
          >
            <path
              d="M9.25.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5zM15.25.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5zM3.25.5a.75.75 0 010 1.5H.75a.75.75 0 010-1.5h2.5z"
              fill={padlockOpen ? (lockX ? '#1ba0ff' : '#959595') : '#1ba0ff'}
            ></path>
          </svg>
          <input
            className="margin-text"
            name="marginRight"
            value={input.marginRight}
            onMouseLeave={(ev) => handleOnBlur(ev)}
            autoComplete="off"
            onKeyDown={handleKeyDown}
            onWheel={(ev) => handleScroll(ev, input.marginRight)}
            onMouseEnter={handleOnFocus}
          />
        </div>
        <svg
          className="margin-container7"
          width="16"
          height="16"
          viewBox="0 0 2 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleLock('lockY')}
        >
          <path
            d="M0 .5a.5.5 0 011 0v11a.5.5 0 01-1 0V.5z"
            fill={padlockOpen ? (lockY ? '#1ba0ff' : '#959595') : '#1ba0ff'}
          ></path>
        </svg>
        <input
          className="margin-text"
          name="marginBottom"
          value={input.marginBottom}
          onChange={handleInputChange}
          onMouseLeave={(ev) => handleOnBlur(ev)}
          autoComplete="off"
          onKeyDown={handleKeyDown}
          onWheel={(ev) => handleScroll(ev, input.marginBottom)}
          onMouseEnter={handleOnFocus}
        />
        <div className="margin-medias-container">
          <span className="margin-text1" htmlFor="selectUnitLength">
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
  )
}

export default Margins
