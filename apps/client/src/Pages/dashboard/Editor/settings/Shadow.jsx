/* eslint-disable*/
import './shadow.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component'

const Shadow = () => {
  const { componentSelected } = useSelector((state) => state.component)
  const { id } = useSelector((state) => state.component.componentSelected)
  const [input, setInput] = useState({})
  const dispatch = useDispatch()

  const addSection = () => {
    const pos = Object.keys(input).length.toString()
    const newPanel = {
      [pos]: {
        ejeX: '0',
        ejeY: '0',
        blur: '0',
        spread: '0',
        color: '#000000'
      }
    }
    setInput({ ...input, ...newPanel })
    handleDispachUpdateComponent({ ...input, ...newPanel })
  }

  const deleteSection = (pos) => {
    let auxPanel = {}
    let count = -1
    for (const prop in input) {
      if (prop !== pos.toString()) {
        count++
        auxPanel[count] = input[prop]
      }
    }
    setInput(auxPanel)
    handleDispachUpdateComponent(auxPanel)
  }

  const handleDispachUpdateComponent = (stateShadow) => {
    let arrBoxShadow = Object.keys(stateShadow).map((inp) => {
      let arrProps = Object.keys(stateShadow[inp]).map((prop) => {
        return prop !== 'color' && stateShadow[inp][prop].slice(-2) !== 'px'
          ? `${stateShadow[inp][prop]}px`
          : stateShadow[inp][prop]
      })
      return arrProps.join(' ')
    })
    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          style: {
            ...componentSelected.properties.style,
            boxShadow: arrBoxShadow.join(',')
          }
        }
      })
    )
  }

  const handleInputChange = (ev, i) => {
    let actInput = input
    actInput[i] = { ...input[i], [ev.target.name]: ev.target.value }
    setInput({
      ...input,
      [i]: { ...input[i], [ev.target.name]: ev.target.value }
    })
  }

  useEffect(() => {
    if (componentSelected.properties && componentSelected.properties.style) {
      const shadowComponent = componentSelected.properties.style.boxShadow
        ? componentSelected.properties.style.boxShadow
        : '0 0 0 0 #000000'

      let sectionsShadow = {}
      shadowComponent.split(',').forEach((prop, pos) => {
        const [ejeX, ejeY, blur, spread, color] = prop.split(' ')
        let shadowComponent = { ejeX, ejeY, blur, spread, color }
        for (const key in shadowComponent) {
          shadowComponent[key] =
            shadowComponent[key] && shadowComponent[key].slice(-2) === 'px'
              ? shadowComponent[key].substring(
                  0,
                  shadowComponent[key].length - 2
                )
              : shadowComponent[key]
        }
        sectionsShadow = {
          ...sectionsShadow,
          [pos]: shadowComponent
        }
      })
      setInput(sectionsShadow)
    }
  }, [id])

  //---------------- Arrow up Arrow Down -------------------------//
  const handleKeyDown = (ev, i) => {
    if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
      ev.preventDefault()
      const increment = ev.key === 'ArrowUp' ? 1 : -1
      const newValue = (parseInt(ev.target.value, 10) + increment).toString()
      let actInput = input
      actInput[i] = { ...input[i], [ev.target.name]: newValue }
      setInput({ ...input, [i]: { ...input[i], [ev.target.name]: newValue } })
    } else if (ev.key === 'Enter') {
      ev.preventDefault()
      const newValue = ev.target.value
      let actInput = { ...input }
      actInput[i] = { ...input[i], [ev.target.name]: newValue }
      setInput(actInput)
      handleDispachUpdateComponent(actInput)
      ev.target.blur()
    }
  }

  //---------------- Scroll up Scroll Down -------------------------//
  const handleScroll = (ev, i) => {
    const { deltaY } = ev
    const increment = deltaY > 0 ? -1 : 1
    const newValue = (parseInt(ev.target.value, 10) + increment).toString()
    let actInput = input
    actInput[i] = { ...input[i], [ev.target.name]: newValue }
    setInput({ ...input, [i]: { ...input[i], [ev.target.name]: newValue } })
  }

  //---------------- Deactivate Scroll on Focus --------------------//
  const handleOnFocus = () => {
    const homeSettingsDiv = document.querySelector('.home-settings')
    homeSettingsDiv.style.overflow = 'hidden'
  }
  //------------------ Activate Scroll on Leave --------------------//
  const handleOnBlur = (ev, i) => {
    handleDispachUpdateComponent({
      ...input,
      [i]: { ...input[i], [ev.target.name]: ev.target.value }
    })
    const homeSettingsDiv = document.querySelector('.home-settings')
    homeSettingsDiv.style.overflowY = 'scroll'
  }

  return (
    <div className="shadow-container">
      <div className="shadow-container05">
        <div className="shadow-component-header1" onClick={addSection}>
          <span className="shadow-title1">Shadow</span>
          <svg viewBox="0 0 1024 1024" className="shadow-icon04">
            <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>

          <svg
            viewBox="0 0 1024 1024"
            className="shadow-icon06"
            onClick={addSection}
          >
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        {Object.keys(input).map((inp, i) => (
          <div key={inp} className="shadow-container06">
            <input
              type="color"
              className="shadow-color-input"
              id="color"
              onChange={(ev) => handleInputChange(ev, i)}
              onBlur={(ev) => handleOnBlur(ev, i)}
            />
            <div className="shadow-container08">
              <input
                className="shadow-text02"
                name="ejeX"
                value={input[i].ejeX}
                onMouseEnter={handleOnFocus}
                onChange={(ev) => handleInputChange(ev, i)}
                onKeyDown={(ev) => handleKeyDown(ev, i)}
                onWheel={(ev) => handleScroll(ev, i)}
                onMouseLeave={(ev) => handleOnBlur(ev, i)}
              />
              <span className="shadow-text03">X</span>
            </div>
            <div className="shadow-container09">
              <input
                className="shadow-text02"
                name="ejeY"
                value={input[i].ejeY}
                onMouseEnter={handleOnFocus}
                onChange={(ev) => handleInputChange(ev, i)}
                onKeyDown={(ev) => handleKeyDown(ev, i)}
                onWheel={(ev) => handleScroll(ev, i)}
                onMouseLeave={(ev) => handleOnBlur(ev, i)}
              />
              <span className="shadow-text05">Y</span>
            </div>
            <div className="shadow-container10">
              <input
                className="shadow-text02"
                name="blur"
                value={input[i].blur}
                onMouseEnter={handleOnFocus}
                onChange={(ev) => handleInputChange(ev, i)}
                onKeyDown={(ev) => handleKeyDown(ev, i)}
                onWheel={(ev) => handleScroll(ev, i)}
                onMouseLeave={(ev) => handleOnBlur(ev, i)}
              />
              <span className="shadow-text07">Blur</span>
            </div>
            <div className="shadow-container11">
              <input
                className="shadow-text02"
                name="spread"
                value={input[i].spread}
                onMouseEnter={handleOnFocus}
                onChange={(ev) => handleInputChange(ev, i)}
                onKeyDown={(ev) => handleKeyDown(ev, i)}
                onWheel={(ev) => handleScroll(ev, i)}
                onMouseLeave={(ev) => handleOnBlur(ev, i)}
              />
              <span className="shadow-text09">Spread</span>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="shadow-icon08"
              onClick={() => deleteSection(i)}
            >
              <path d="M128 320v640c0 35.2 28.8 64 64 64h576c35.2 0 64-28.8 64-64v-640h-704zM320 896h-64v-448h64v448zM448 896h-64v-448h64v448zM576 896h-64v-448h64v448zM704 896h-64v-448h64v448z"></path>
              <path d="M848 128h-208v-80c0-26.4-21.6-48-48-48h-224c-26.4 0-48 21.6-48 48v80h-208c-26.4 0-48 21.6-48 48v80h832v-80c0-26.4-21.6-48-48-48zM576 128h-192v-63.198h192v63.198z"></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shadow
