import './bgContent.css'
import { useState, useEffect } from 'react'
import ChromeColorPicker from '../ColorPicker/ColorJs/ChromeColorPicker'
import GradientColorPicker from '../ColorPicker/ColorJs/GradientColorPicker'
const BgContent = ({
  deleteBackground,
  icon,
  value,
  /* handleBlur */ handleAddBg,
  idx,
  type
}) => {
  const [input, setInput] = useState(
    type === 'color'
      ? {
          value
        }
      : {
          value
        }
  )
  const [pickerVisible, setPickerVisible] = useState(false)
  const [gradientVisible, setGradientVisible] = useState(false)

  const handlePickerVisible = (ev) => {
    ev.stopPropagation()
    setPickerVisible(!pickerVisible)
  }
  const handleGradientVisible = (ev) => {
    ev.stopPropagation()
    setGradientVisible(!gradientVisible)
  }
  const handleBlur = (ev) => {
    handleAddBg(ev.target.value, idx)
  }
  const handleInputChange = (ev) => {
    setInput({ ...input, [ev.target.name]: ev.target.value })
  }
  const handleDrag = (ev) => {
    ev.preventDefault()
  }

  const handleDrop = (ev) => {
    const file = ev.dataTransfer.files[0]
    const imageURL = URL.createObjectURL(file)
    setInput({ ...input, value: imageURL })
    handleAddBg(imageURL, idx)
  }

  useEffect(() => {
    setInput({ ...input, value })
  }, [value])
  // <input
  //   name="value"
  //   type="color"
  //   className="bgIconColor"
  //   value={input.value}
  //   onChange={(ev) => handleInputChange(ev)}
  //   onBlur={(ev) => handleBlur(ev /*, idx */)}
  // />
  return (
    <>
      <div className="bgContainer">
        {type === 'color' && (
          <div style={{ position: 'relative' }}>
            <div
              style={{ backgroundColor: input.value }}
              className="bgIcon"
              onClick={handlePickerVisible}
            ></div>
            {pickerVisible && (
              <div
                style={{
                  position: 'absolute',
                  zIndex: '999',
                  top: 35,
                  left: 0
                }}
              >
                <ChromeColorPicker
                  handleAddBg={handleAddBg}
                  idx={idx}
                  value={input.value}
                />
              </div>
            )}
          </div>
        )}
        {type === 'gradient' && (
          <div style={{ position: 'relative' }}>
            <div
              style={{ backgroundColor: input.value }}
              className="bgIcon"
              onClick={handleGradientVisible}
            ></div>
            {gradientVisible && (
              <div
                style={{
                  position: 'absolute',
                  zIndex: '999',
                  // top: 35,
                  left: 0
                  // width: '100px'
                }}
              >
                <GradientColorPicker />
              </div>
            )}
          </div>
        )}
        {type === 'image' && (
          <div
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className="bgIcon"
            style={icon}
          />
        )}
        <input
          className="background-text02"
          onChange={(ev) => handleInputChange(ev, idx)}
          value={input.value}
          name="value"
          onBlur={(ev) => handleBlur(ev, idx)}
        />
        <svg
          onClick={() => deleteBackground(idx)}
          viewBox="0 0 1024 1024"
          className="radius-icon02"
        >
          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
    </>
  )
}

export default BgContent
