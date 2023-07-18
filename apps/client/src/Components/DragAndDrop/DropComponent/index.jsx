import React, { useState } from 'react'

const DropComponent = ({ onHandleDrop, children, width = '100%', height ="100%" }) => {
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
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{ width, height, background: dragging ? 'lightgray' : 'inherit' }}
    >
      {children}
    </div>
  )
}

export default DropComponent
