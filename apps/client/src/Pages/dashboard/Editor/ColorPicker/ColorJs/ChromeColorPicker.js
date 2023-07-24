import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

export default function App({ handleAddBg, idx, value }) {
  const [colorPreview, setColorPreview] = useState({
    h: 250,
    s: 0,
    l: 0.2,
    a: 1
  })
  const [opacityBg, setOpacityBg] = useState('1')
  const [color, setColor] = useState('#333333')

  function concatenateAlphaToHex(colorHex, opacityAlpha) {
    // Convertir el valor alpha (0 a 1) a dos dígitos hexadecimales
    const alpha = Math.round(opacityAlpha * 255)
      .toString(16)
      .padStart(2, '0')

    // Asegurarse de que el color hexadecimal tenga el formato correcto
    const sanitizedColorHex = colorHex.replace('#', '')

    // Concatenar el valor alpha al final del color hexadecimal
    const colorWithAlpha = `#${sanitizedColorHex}${alpha}`

    return colorWithAlpha
  }
  const prueba = concatenateAlphaToHex(color, opacityBg)
  const handleChangeComplete = (data) => {
    if (data.hsl !== colorPreview) {
      console.log(data.hex)
      setColor(data.hex)
      setColorPreview(data.hsl)
      setOpacityBg(data.hsl.a)
      const updatedColor = concatenateAlphaToHex(data.hex, data.hsl.a) // Obtener el color actualizado con la opacidad
      handleAddBg(updatedColor, idx) // Pasar el color actualizado a la función handleAddBg
    }
  }

  const previewStyle = {
    background: color,
    opacity: opacityBg
  }
  // const hexadecimalColor = colorWithOpacityToHex(previewStyle)
  // console.log(previewStyle)

  return <ChromePicker color={colorPreview} onChange={handleChangeComplete} />
}
