import React, { useState } from 'react'

const DropComponent = ({ onHandleDrop, children }) => {
  const [dragging, setDragging] = useState(false)

  const handleDrop = (event) => {
    event.preventDefault()
    const dataTransfer = event.dataTransfer.getData('application/json')
    onHandleDrop(JSON.parse(dataTransfer))
    setDragging(false)
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = (event) => {
    setDragging(false)
  }

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        style={{ background: dragging ? 'lightgray' : 'white' }}
      >
        {children}
      </div>
    </div>
  )
}

export default DropComponent
