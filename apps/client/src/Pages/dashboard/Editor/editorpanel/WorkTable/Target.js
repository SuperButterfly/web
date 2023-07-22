import React, { useState } from 'react'
import ComponentRenderer from './ComponentRenderer'

const Target = ({ target }) => {
  const [imageSize, setImageSize] = useState({
    width: '100px',
    height: '100px'
  })

  const handleResize = (direction) => {
    let newWidth = imageSize.width
    let newHeight = imageSize.height

    switch (direction) {
      case 'top-left':
        newWidth -= 10
        newHeight -= 10
        break
      case 'top':
        newHeight -= 10
        break
      case 'top-right':
        newWidth += 10
        newHeight -= 10
        break
      case 'left':
        newWidth -= 10
        break
      case 'right':
        newWidth += 10
        break
      case 'bottom-left':
        newWidth -= 10
        newHeight += 10
        break
      case 'bottom':
        newHeight += 10
        break
      case 'bottom-right':
        newWidth += 10
        newHeight += 10
        break
      default:
        break
    }

    setImageSize({ width: newWidth, height: newHeight })
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'auto',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <ComponentRenderer
        target={target}
        imageSize={imageSize}
        onResize={handleResize}
      />
    </div>
  )
}

export default Target
