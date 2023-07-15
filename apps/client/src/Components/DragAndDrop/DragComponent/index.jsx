import React from 'react'

const DragComponent = ({ children, data }) => {
  const handleDragStart = (event, data) => {
    event.dataTransfer.setData('application/json', JSON.stringify(data))
  }
  return (
    <div draggable onDragStart={(event) => handleDragStart(event, data)}>
      {children}
    </div>
  )
}

export default DragComponent
