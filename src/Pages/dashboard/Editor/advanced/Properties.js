import './properties.css'
import { useState, useEffect } from 'react'
import Property from './Property.js'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js'

const Properties = ({ title, deviceIcon, target }) => {
  const initialState = { isCheked: true, propertyName: '', valueName: '' }
  const [statesSelected, setStatesSelected] = useState([])
  const { componentSelected } = useSelector((state) => state.component)
  const dispatch = useDispatch()

  useEffect(() => {
    if (componentSelected && componentSelected.properties) {
      const targetProperties = componentSelected.properties[target]
      if (
        targetProperties !== undefined &&
        Object.keys(targetProperties).length > 0
      ) {
        console.log('targetProperties: ', targetProperties)
        getProperties(targetProperties)
      } else {
        console.log('targetProperties: ', targetProperties)
        setStatesSelected([initialState])
      }
    }
  }, [componentSelected])

  const getProperties = (incomProps) => {
    if (incomProps === undefined) {
      setStatesSelected([initialState])
    } else {
      if (Object.keys(incomProps).length > 0) {
        const localproperties = []
        const keys = Object.keys(incomProps)
        for (const key of keys) {
          localproperties.push({
            isCheked: true,
            propertyName: key,
            valueName: incomProps[key]
          })
        }
        localproperties.push(initialState)
        setStatesSelected(localproperties)
      }
    }
  }

  const update = (newproperties) => {
    const updateproperties = {}
    const aux = [...newproperties]
    console.log('aux: ', aux)
    // aux.pop();
    aux.forEach(({ propertyName, valueName, isCheked }) => {
      if (isCheked) {
        updateproperties[propertyName] = valueName
      }
    })
    const compProps = {
      ...componentSelected.properties,
      [target]: updateproperties
    }
    console.log('newproperties: ', newproperties)
    console.log('updateproperties: ', updateproperties)
    console.log('compProps: ', compProps)
    dispatch(updateComponent(componentSelected.id, { properties: compProps }))
  }

  const handleChange = (ev) => {
    const [id, name] = ev.target.name.split('/')
    const aux = [...statesSelected]
    aux.forEach((state, idx) => {
      if (parseInt(id) === idx) {
        if (name === 'isCheked' && idx === id) {
          state.isCheked = !state.isCheked
        } else {
          state[`${name}Name`] = ev.target.value
        }
      }
      return state
    })
    setStatesSelected(aux)
    const last = aux.length - 1
    if (aux[id].propertyName.length > 2 && aux[id].valueName.length > 2) {
      if (parseInt(id) !== last) {
        update(aux.slice(0, last))
      }
    }
  }

  const addProperty = (ev) => {
    const aux = statesSelected
    const last = statesSelected.length - 1
    if (statesSelected[last].propertyName !== '') {
      if (statesSelected[last].valueName !== '') {
        update(aux)
        aux.push(initialState)
        setStatesSelected(aux)
      }
    }
  }

  const discardProperty = (stateId, ev) => {
    ev.preventDefault()
    const id = stateId
    const aux = statesSelected.filter((state, idx) => idx !== id)
    setStatesSelected(aux)
    console.log('discardProperty: ', aux)
    update(aux.slice(0, aux.length - 1))
  }

  return (
    <div className="properties-container">
      <div className="properties-header">
        <span className="properties-heading">{title}</span>
        <svg viewBox="0 0 1024 1024" className="properties-icon">
          <path d={deviceIcon}></path>
        </svg>
      </div>
      {statesSelected && statesSelected.length > 0
        ? statesSelected.map(({ isCheked, propertyName, valueName }, idx) => (
            <Property
              key={idx}
              stateId={idx}
              isCheked={isCheked}
              propertyName={propertyName}
              valueName={valueName}
              isLast={idx === statesSelected.length - 1}
              addProperty={addProperty}
              discardProperty={discardProperty}
              functionChange={handleChange}
            />
          ))
        : null}
    </div>
  )
}

export default Properties
