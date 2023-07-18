import React from 'react'

const ResizeHandle = ({ onResize }) => {
  const handleResize = (direction) => {
    onResize(direction)
  }

  return (
    <div className="resize-handles">
      <div
        className="resize-handle top-left"
        onClick={() => handleResize('top-left')}
      />
      <div className="resize-handle top" onClick={() => handleResize('top')} />
      <div
        className="resize-handle top-right"
        onClick={() => handleResize('top-right')}
      />
      <div
        className="resize-handle left"
        onClick={() => handleResize('left')}
      />
      <div
        className="resize-handle right"
        onClick={() => handleResize('right')}
      />
      <div
        className="resize-handle bottom-left"
        onClick={() => handleResize('bottom-left')}
      />
      <div
        className="resize-handle bottom"
        onClick={() => handleResize('bottom')}
      />
      <div
        className="resize-handle bottom-right"
        onClick={() => handleResize('bottom-right')}
      />
    </div>
  )
}

export default ResizeHandle
