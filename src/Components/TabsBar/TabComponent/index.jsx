import React, { useState, useEffect } from 'react'
import styled from './tabComponent.module.css'

const TabComponent = ({
  file,
  name,
  onEdit,
  onClose,
  screenFile,
  handleDragStart,
  onDragOver,
  handleDrop,
  index
}) => {
  const [onScreen, setOnScreen] = useState(screenFile)

  const colorTabSelect = {
    background: file === onScreen ? 'blue' : 'lightblue'
  }

  const onEditTab = () => {
    onEdit(file)
  }

  const onCloseTab = (event) => {
    event.stopPropagation()
    onClose(file)
  }

  useEffect(() => {
    setOnScreen(screenFile)
  }, [screenFile])

  const onDragStart = (e) => handleDragStart(e, index)
  const onDrop = (e) =>{
    handleDrop(e, index)
  }

  return (
    <div
      draggable
      onClick={onEditTab}
      className={styled.tabComponent}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={colorTabSelect}
    >
      {name}
      <div onClick={onCloseTab} className={styled.onCloseTab}>
        x
      </div>
    </div>
  )
}

export default TabComponent
