import './interfaceState.css'
import { useState, useEffect } from 'react'

const InterfaceState = ({
  state,
  posicion,
  visible,
  setVisible,
  handleButtonClick
}) => {
  const [stateButton, setStateButton] = useState({
    className: 'btnState',
    value: state
  })
  const handleHover = (ev) => {
    setStateButton({ value: 'Cancel', className: 'btnStateHover' })
  }
  const handleMouseLeave = () => {
    setStateButton({
      className: 'btnState',
      value: state
    })
  }
  useEffect(() => {
    setStateButton({ ...stateButton, value: state })
  }, [state])
  return (
    <div
      className="interfaceContainer"
      style={
        visible
          ? {
              top: '90%',
              position: 'absolute',
              left: '50%'
            }
          : {
              display: 'none'
            }
      }
    >
      <span className="spanState">State:</span>
      {/* <button className="btnState" name={state} onClick={handleButtonClick}>{state}</button> */}
      <button
        className={stateButton.className}
        name={state}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleHover}
        onClick={handleButtonClick}
      >
        {stateButton.value}
      </button>
    </div>
  )
}

export default InterfaceState
