import './states.css'
import { useState } from 'react'
import Property from './Property'

const States = () => {
  const initialState = { isCheked: true, propertyName: '', valueName: '' }
  const [statesSelected, setStatesSelected] = useState([])
  const [statesList, setStatesList] = useState([
    'focus',
    'hover',
    'active',
    'disabled',
    'focus-within',
    'focus-visible'
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [haveStates, setHaveStates] = useState(false)

  const handleChange = (ev) => {
    const [stateName, id, name] = ev.target.name.split('/')
    const aux = statesSelected.map((state) => {
      if (state.name === stateName) {
        if (name === 'isCheked') {
          state.properties[id].isCheked = !state.properties[id].isCheked
        } else {
          state.properties[id][`${name}Name`] = ev.target.value
        }
      }
      return state
    })
    setStatesSelected(aux)
  }

  const addState = (ev) => {
    ev.preventDefault()
    const [state, idx] = ev.target.id.split('/')
    if (!idx) return
    setHaveStates(true)
    let aux = statesSelected.map((state) => {
      state.activated = false
      return state
    })
    aux = [
      ...aux,
      {
        name: state,
        activated: true,
        properties: [initialState]
      }
    ]
    setStatesSelected(aux)
    statesList.splice(idx, 1)
    setIsOpen(false)
  }

  const discardState = (name) => {
    const aux = statesSelected.filter((state) => state.name != name)
    setStatesSelected(aux)
    setStatesList([...statesList, name])
  }

  const addProperty = (stateName) => {
    const aux = statesSelected.map((state) => {
      if (state.name === stateName) {
        const temp = state.properties
        const last = state.properties.length - 1
        if (temp[last].propertyName !== '' && temp[last].valueName !== '') {
          state.properties.unshift(initialState)
        }
      }
      return state
    })
    setStatesSelected(aux)
  }

  const discardProperty = (stateId) => {
    const [stateName, id] = stateId.split('/')
    const aux = statesSelected.map((state) => {
      if (state.name === stateName) {
        state.properties.splice(parseInt(id), 1)
      }
      return state
    })
    setStatesSelected(aux)
  }

  const handlebuttonClick = (name) => {
    const aux = statesSelected.map((state) => {
      if (state.name === name) {
        state.activated = !state.activated
      } else state.activated = false
      return state
    })
    setStatesSelected(aux)
  }

  return (
    <div className="states-container">
      <div
        className={
          haveStates || isOpen
            ? 'states-container1'
            : 'states-container1 closed'
        }
      >
        <span className="states-heading-states">States</span>
        <svg
          viewBox="0 0 1024 1024"
          className="states-icon"
          onClick={() => setIsOpen(true)}
        >
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
        <div
          className="states-container2"
          onClick={addState}
          style={
            isOpen && statesList.length > 0
              ? { display: 'flex' }
              : { display: 'none' }
          }
        >
          <span className="states-close" onClick={() => setIsOpen(false)}>
            x
          </span>
          {statesList &&
            statesList.length > 0 &&
            statesList.map((state, idx) => (
              <span className="states-text" id={`${state}/${idx}`} key={idx}>
                {state}
              </span>
            ))}
        </div>
      </div>
      <div className="states-container3">
        {statesSelected && statesSelected.length > 0
          ? statesSelected.map(({ name }, idx) => (
              <div className="states-container4" key={idx}>
                <button
                  id={name}
                  className="states-button"
                  onClick={() => handlebuttonClick(name)}
                >
                  <span>{name}</span>
                </button>
                <div
                  className="states-container5"
                  onClick={() => discardState(name)}
                >
                  <svg viewBox="0 0 1024 1024" className="states-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
          ))
          : null}
      </div>
      {statesSelected && statesSelected.length > 0
        ? statesSelected.map(({ name, activated, properties }, idx) =>
          activated && properties && properties.length > 0
            ? properties
              .map(({ isCheked, propertyName, valueName }, idx) => (
                    <Property
                      key={idx}
                      stateId={`${name}/${idx}`}
                      isCheked={isCheked}
                      propertyName={propertyName}
                      valueName={valueName}
                      isLast={idx === 0}
                      addProperty={addProperty}
                      discardProperty={discardProperty}
                      functionChange={handleChange}
                    />
              ))
              .reverse()
            : null
        )
        : null}
    </div>
  )
}

export default States
