import React, { useState } from 'react'
import { objProperties } from '../../../../utils/PropertiesInfo'
import './property.css'

const Property = ({
  stateId,
  isChecked,
  propertyName,
  valueName,
  functionChange,
  addProperty,
  discardProperty,
  isLast
}) => {
  const [attributeSuggestions, setAttributeSuggestions] = useState([])
  const [valueSuggestions, setValueSuggestions] = useState([])
  const [selectedAttribute, setSelectedAttribute] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && e.target.value === '') {
      const previousInput = e.target.previousElementSibling
      if (
        previousInput &&
        previousInput.type !== 'checkbox' &&
        previousInput.tagName !== 'UL'
      ) {
        previousInput.focus()
      } else if (previousInput && previousInput.tagName === 'UL') {
        const auxpreviousInput = previousInput.previousElementSibling
        auxpreviousInput.focus()
      } else {
        const parentContainer =
          e.target.parentElement.parentElement.parentElement
            .previousElementSibling
        if (parentContainer) {
          const inputs =
            parentContainer.getElementsByClassName('property-textinput')
          const lastInput = inputs[inputs.length - 1]
          if (lastInput) {
            lastInput.focus()
          }
        }
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const parentContainer = e.target.parentElement.parentElement.parentElement
      const previousContainer = parentContainer.previousElementSibling
      if (previousContainer) {
        const previousInput = previousContainer.querySelector(
          '.property-textinput'
        )
        if (previousInput) {
          previousInput.focus()
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const parentContainer = e.target.parentElement.parentElement.parentElement
      const nextContainer = parentContainer.nextElementSibling
      if (nextContainer) {
        const nextInput = nextContainer.querySelector('.property-textinput')
        if (nextInput) {
          nextInput.focus()
        }
      }
    }
  }

  const getAttributeSuggestions = (text) => {
    const matchingAttributes = Object.keys(objProperties).filter((attribute) =>
      attribute.includes(text)
    )
    return matchingAttributes
  }

  const getValueSuggestions = (attribute) => {
    if (attribute) {
      return objProperties[attribute] || []
    }
    return []
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name.includes('property')) {
      const newAttributeSuggestions = getAttributeSuggestions(value)
      setAttributeSuggestions(newAttributeSuggestions)
      setSelectedAttribute('')
      setValueSuggestions([])
    } else if (name.includes('value')) {
      setSelectedAttribute(propertyName)
      const newValueSuggestions = getValueSuggestions(propertyName)
      setValueSuggestions(newValueSuggestions)
    }
    functionChange(e)
  }

  const handleAttributeSuggestionClick = (suggestion) => {
    setSelectedAttribute(suggestion)
    setAttributeSuggestions([])
    setValueSuggestions([])
    functionChange({
      target: { name: `${stateId}/property`, value: suggestion }
    })
  }

  const handleValueSuggestionClick = (suggestion) => {
    functionChange({
      target: { name: `${stateId}/value`, value: suggestion }
    })
    setValueSuggestions([])
  }

  return (
    <div className="property-container">
      <div className="property-input-container">
        <input
          type="checkbox"
          name={`${stateId}/isChecked`}
          className="property-checkinput"
          checked={isChecked}
          style={isLast ? { display: 'none' } : { display: 'flex' }}
          onChange={functionChange}
        />
        <input
          type="text"
          name={`${stateId}/property`}
          placeholder="property"
          className="property-textinput"
          value={propertyName}
          onChange={handleInputChange}
          autoComplete="off"
          onKeyDown={handleKeyDown}
          style={
            propertyName === '' || valueName === undefined
              ? { fontStyle: 'italic' }
              : { fontStyle: 'normal' }
          }
        />
        {propertyName !== '' && attributeSuggestions.length > 0 && (
          <ul className="property-suggestions">
            {attributeSuggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => handleAttributeSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <input
          type="text"
          name={`${stateId}/value`}
          placeholder="value"
          className="property-textinput"
          value={valueName}
          onChange={handleInputChange}
          autoComplete="off"
          onKeyDown={handleKeyDown}
          style={
            valueName === '' || valueName === undefined
              ? { fontStyle: 'italic' }
              : { fontStyle: 'normal' }
          }
        />
        {valueName !== '' && attributeSuggestions.length > 0 && (
          <ul className="property-suggestions">
            {valueSuggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => handleValueSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <p
          className="property-text"
          style={isLast ? { display: 'none' } : { display: 'flex' }}
        >
          ;
        </p>
      </div>
      <div className="property-icons-container">
        <svg
          height="24px"
          width="24px"
          viewBox="0 0 1024 1024"
          className="property-add-icon"
          style={isLast ? { display: 'flex' } : { display: 'none' }}
          onClick={addProperty}
        >
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>

        <button
          className="property-button"
          style={isLast ? { display: 'none' } : { display: 'flex' }}
          onClick={(e) => discardProperty(stateId, e)}
        >
          <svg viewBox="0 0 1024 1024" className="property-discard-icon">
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Property
