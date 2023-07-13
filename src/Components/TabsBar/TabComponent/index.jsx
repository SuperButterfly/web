import React, { useState, useEffect } from 'react'
import styled from './tabComponent.module.css'
import ContextMenu from '../../Shared/ContextMenu'

const TabComponent = ({
  file,
  name,
  onEdit,
  onClose,
  screenFile,
  handleDragStart,
  onDragOver,
  handleDrop,
  index,
  optionesMenu,
}) => {
  const [onScreen, setOnScreen] = useState(screenFile)
  const [openMenu, setOpenMenu] = useState(false)
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

  const onDragStart = (e) => handleDragStart(e, index, file)
  const onDrop = (e) => handleDrop(e, index)

  const onOptionClickMenu= (handler) => {
    handler(index)
    setOpenMenu(false)
  }
  const onContextMenu = (event) => {
    event.preventDefault();
    setOpenMenu(true)
  }

  const onCloseMenu = () => {
    setOpenMenu(false)
  }

  const positionMenu =  {
    top: 0,
    left: 80
  }
  
  return (
    <div className={styled.containerTab}>
      <div
        draggable
        onClick={onEditTab}
        className={styled.tabComponent}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        style={colorTabSelect}
        onContextMenu={onContextMenu}
      >
        {name}
        <div onClick={onCloseTab} className={styled.onCloseTab}>
          x
        </div>
      </div>
      {openMenu && <ContextMenu
        options={optionesMenu}
        onOptionClick={onOptionClickMenu}
        close={onCloseMenu}
        position={positionMenu}
      />}
    </div>
  )
}

export default TabComponent
