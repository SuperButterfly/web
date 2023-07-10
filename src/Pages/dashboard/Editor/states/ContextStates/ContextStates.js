import './contextStates.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../../src/redux/actions/component.js'

const ContextStates = ({ visible, setVisible, posicion, setStateSelected }) => {
  const { componentSelected } = useSelector((state) => state.component)
  const dispatch = useDispatch()
  const statesPossibles = [
    'focus',
    'hover',
    'active',
    'focus-within',
    'focus-visible'
  ]
  const statesComponent =
    componentSelected &&
    componentSelected.properties &&
    componentSelected.properties.states
      ? componentSelected.properties.states
      : {}

  const handleClick = (stateName) => {
    setVisible(false)
    const newState = { ...statesComponent, [stateName]: {} }
    dispatch(
      updateComponent(componentSelected.id, {
        ...componentSelected,
        properties: {
          ...componentSelected.properties,
          states: {
            ...newState
          },
          event: stateName
        }
      })
    )
    setStateSelected({ [stateName]: newState[stateName] })
  }

  return (
    <div
      className="modal-container"
      style={
        visible
          ? {
              top: posicion.top,
              position: 'absolute',
              left: posicion.left,
              zIndex: 1
            }
          : {
              display: 'none'
            }
      }
    >
      <div className="section-option">
        {statesPossibles.map((state) =>
          !statesComponent[state] ? (
            <div
              key={state}
              className="container-option"
              onClick={() => handleClick(state)}
            >
              <span>{state}</span>
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export default ContextStates
