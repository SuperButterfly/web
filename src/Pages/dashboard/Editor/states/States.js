/* eslint-disable no-redeclare */
/* global localStorage */
import './states.css'
import ContextStates from './ContextStates/ContextStates.js'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js'
import InterfaceState from './InterfaceState/InterfaceState.js'

const States = () => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [inVisible, setInVisible] = useState(false)
  const { componentSelected } = useSelector((state) => state.component)
  const { id } = useSelector((state) => state.component.componentSelected)
  const [selectedState, setStateSelected] = useState({})
  const [posicion, setPosicion] = useState({ top: 0, left: 0 })
  let statesComponent = {}
  if (
    componentSelected &&
    componentSelected.properties &&
    componentSelected.properties.states
  ) {
    statesComponent = componentSelected.properties.states
  }

  const initialStateInput = {
    property: '',
    value: ''
  }

  const [input, setInput] = useState(initialStateInput)
  const handleClick = (ev) => {
    const x = Math.round(ev.pageX / 1.08) - 290
    const y = Math.round(ev.pageY / 1.16) - 30
    setPosicion({ left: x, top: y })
    console.log('click', visible, x, y)
    setVisible(!visible)
  }

  const handlePosicionInterface = (ev) => {
    setInVisible(!!ev)
  }

  const handleClose = (state) => {
    const newState = {}
    for (const key in statesComponent) {
      if (key !== state) {
        newState[key] = statesComponent[key]
      }
    }
    if (!newState[state]) {
      setStateSelected({})
    }

    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          states: {
            ...newState
          }
        }
      })
    )
  }

  const handleOnBlur = (ev) => {
    const event = Object.keys(selectedState)[0]
    const newState = {
      ...componentSelected,
      properties: {
        ...componentSelected.properties,
        states: {
          ...componentSelected.properties.states,
          [event]: {
            ...componentSelected.properties.states[event],
            [ev.target.name]: ev.target.value
          }
        }
      }
    }
    dispatch(updateComponent(componentSelected.id, newState))
  }

  const handleButtonClick = (ev) => {
    // console.log(ev.target.name);
    const componentStates = componentSelected.properties.states
    let newComponentSelected = {}
    let foundEvent = ''
    if (!Object.keys(selectedState).includes(ev.target.name)) {
      newComponentSelected = {
        [ev.target.name]: componentStates[ev.target.name]
      }
      foundEvent = ev.target.name
    }
    setStateSelected(newComponentSelected)

    const newState = {
      ...componentSelected,
      properties: {
        ...componentSelected.properties,
        event: foundEvent
      }
    }
    dispatch(updateComponent(componentSelected.id, newState))
  }

  const handleInputChange = (ev) => {
    setInput({ ...input, [ev.target.name]: ev.target.value })
  }

  const addPropertyEvent = () => {
    if (
      !Object.keys(selectedState).length ||
      (Object.values(selectedState).length &&
        !Object.keys(selectedState)[0].includes(input.property))
    ) {
      const event = Object.keys(selectedState)[0]
      const newState = {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          states: {
            ...componentSelected.properties.states,
            [event]: {
              ...componentSelected.properties.states[event],
              [input.property]: input.value
            }
          }
        }
      }
      setInput({
        ...input,
        [input.property]: input.value,
        property: '',
        value: ''
      })
      setStateSelected({ [event]: newState.properties.states[event] })
      dispatch(updateComponent(componentSelected.id, newState))
    }
  }

  const deletePropEvent = (prop) => {
    const filterEvents = {}
    const currentEvent = componentSelected.properties.event
    for (const key in componentSelected.properties.states[currentEvent]) {
      if (key !== prop) {
        filterEvents[key] =
          componentSelected.properties.states[currentEvent][key]
      }
    }
    const newState = {
      ...componentSelected,
      properties: {
        ...componentSelected.properties,
        states: {
          ...componentSelected.properties.states,

          [currentEvent]: {
            ...filterEvents
          }
        }
      }
    }
    setStateSelected({
      [currentEvent]: newState.properties.states[currentEvent]
    })
    dispatch(updateComponent(componentSelected.id, newState))
  }

  useEffect(() => {
    if (
      componentSelected &&
      componentSelected.properties &&
      componentSelected.properties.states
    ) {
      const event = Object.keys(selectedState)[0]
      setInput({
        ...initialStateInput,
        ...componentSelected.properties.states[event]
      })
      handlePosicionInterface(event)
    }
  }, [selectedState])

  useEffect(() => {
    const valuesState = {}
    if (
      componentSelected &&
      componentSelected.properties &&
      componentSelected.properties.event
    ) {
      const event = componentSelected.properties.event
      valuesState[event] = componentSelected.properties.states[event]
    }
    setInput(initialStateInput)
    setStateSelected(valuesState)
  }, [id])

  useEffect(() => {
    const componentLocalStorage = localStorage.getItem('lastComponentSelected')
    const lastComponentSelected = JSON.parse(componentLocalStorage)
    if (lastComponentSelected && lastComponentSelected.id) {
      return () =>
        dispatch(
          updateComponent(lastComponentSelected.id, {
            ...lastComponentSelected,
            properties: {
              ...lastComponentSelected.properties,
              event: ''
            }
          })
        )
    }
  }, [])

  return (
    <div className="statesContainer">
      <div className="statesHeader">
        <span className="titleContainer">States</span>
        <svg
          viewBox="0 0 1024 1024"
          onClick={handleClick}
          className="title-icon"
        >
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>

      <div
        className="statesSelected"
        style={
          statesComponent && Object.keys(statesComponent).length
            ? { display: 'flex' }
            : { display: 'none' }
        }
      >
        {Object.keys(statesComponent).map((state) => (
          <div key={state} className="statesSelectedContainer">
            <button
              onClick={handleButtonClick}
              name={state}
              className={
                selectedState[state] ? 'statesButton' : 'statesButtonSelected'
              }
            >
              {state}
            </button>
            <div className="statesClose" onClick={() => handleClose(state)}>
              <svg viewBox="0 0 1024 1024" className="closeIcon">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div
        className="propertiesEvent"
        style={
          selectedState && Object.keys(selectedState).length
            ? { display: 'flex' }
            : { display: 'none' }
        }
      >
        {selectedState &&
          Object.values(selectedState)[0] &&
          Object.entries(Object.values(selectedState)[0]).map(
            ([state, value]) => (
              <div key={state} className="statesProperties">
                <div
                  className="checkedProperties"
                  onClick={() => deletePropEvent(state)}
                >
                  <svg viewBox="0 0 1024 1024" className="image-settings-clear">
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <span
                  className="titleProperties"
                  name={state}
                  style={{ fontStyle: 'italic' }}
                >
                  {state}
                </span>
                <div className="inputContainer">
                  <input
                    autoComplete="off"
                    onBlur={handleOnBlur}
                    className="inputProperties"
                    value={input[state]}
                    onChange={handleInputChange}
                    name={state}
                    style={{ fontStyle: 'italic' }}
                    placeholder="value"
                  />
                </div>
              </div>
            )
          )}
      </div>

      <div
        className="statesProperties"
        style={
          selectedState && Object.keys(selectedState).length
            ? { display: 'flex' }
            : { display: 'none' }
        }
      >
        <div className="inputContainer">
          <input
            autoComplete="off"
            className="inputProperties"
            onChange={handleInputChange}
            value={input.property}
            style={{ fontStyle: 'italic' }}
            name="property"
            placeholder="property"
          />
          <input
            autoComplete="off"
            className="inputProperties"
            onChange={handleInputChange}
            value={input.value}
            style={{ fontStyle: 'italic' }}
            name="value"
            placeholder="value"
          />
        </div>
        <div className="iconContainer" onClick={addPropertyEvent}>
          <svg viewBox="0 0 1024 1024" className="addIcon">
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
      </div>
      <InterfaceState
        visible={inVisible}
        setVisible={setInVisible}
        handleButtonClick={handleButtonClick}
        state={selectedState && Object.keys(selectedState)[0]}
      />
      <ContextStates
        setStateSelected={setStateSelected}
        visible={visible}
        setVisible={setVisible}
        posicion={posicion}
      />
    </div>
  )
}

export default States
