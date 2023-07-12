import React, { useState, useEffect } from 'react'
import TabComponent from './TabComponent'
import styled from './tabsBar.module.css'

const TabsBar = ({ files, onEdit, onClose, screenFile, onDrag, onDragDocuments }) => {
  const [onScreen, setOnScreen] = useState(screenFile)

  const onCloseTab = (target) => {
    onClose(target)
  }

  const onEditTab = (target) => {
    onEdit(files.find((e) => e.file === target))
  }

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('application/json', JSON.stringify(index))
    
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e, index) => {
    const dragged = JSON.parse(e.dataTransfer.getData('application/json'))
    const newItems = [...files]
    if(typeof dragged === "number"){
      const draggedItem = files[dragged]
    onEdit(draggedItem)
    newItems.splice(dragged, 1)
    newItems.splice(index, 0, draggedItem)
    onDrag(newItems)
    } else {
      onDragDocuments(dragged, index)
    }
  }

  const tranformToTabComponent = (e, index) => {
    return (
      <TabComponent
        file={e.file}
        name={e.name}
        onClose={onCloseTab}
        onEdit={onEditTab}
        screenFile={onScreen}
        key={index}
        index={index}
        handleDragStart={handleDragStart}
        onDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
    )
  }

  const [allFiles, setAllFiles] = useState(files.map(tranformToTabComponent))

  useEffect(() => {
    setAllFiles(files.map(tranformToTabComponent))
  }, [files, onScreen])

  useEffect(() => {
    setOnScreen(screenFile)
  }, [screenFile])

  return <div className={styled.tabsBar}>{allFiles}</div>
}

export default TabsBar
