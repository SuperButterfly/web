import React, { useState } from 'react'
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker'
import styles from '../ColorStyleCss/Gradient.modules.css'

const GradientColorPicker = () => {
  const [color, setColor] = useState(
    'linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)'
  )
  const { valueToHex } = useColorPicker(color, setColor)
  const { getGradientObject } = useColorPicker(color, setColor)
  const gradientObject = getGradientObject()
  const hexString = valueToHex()

  console.log(gradientObject, 'Color en obj/gradiente')
  console.log(hexString, 'Color en hex')

  const handleColorChange = (newColor) => {
    setColor(newColor)
  }

  const handleHexButtonClick = () => {
    const hexColor = valueToHex()
    console.log(hexColor)
  }

  // const handleGetGradientObjectButtonClick = () => {
  //   const gradientObject = getGradientObject()
  //   console.log(gradientObject)}
  return (
    <div>
      <ColorPicker
        hideEyeDrop={true}
        hideAdvancedSliders={true}
        hideColorGuide={true}
        hideInputType={true}
        hideColorTypeBtns={true}
        value={color}
        onChange={setColor}
      />
    </div>
  )
}

export default GradientColorPicker
