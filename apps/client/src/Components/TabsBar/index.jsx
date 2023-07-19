import React, { useState, useEffect } from 'react'
import TabComponent from './TabComponent'
import styled from './tabsBar.module.css'

const TabsBar = ({
  files,
  onEdit,
  onClose,
  screenFile,
  onDropTab,
  onDropExternalTab,
  onDropDocuments,
  optionesMenu
}) => {
  const [onScreen, setOnScreen] = useState(screenFile)

  const onCloseTab = (target) => {
    onClose(target)
  }

  const onEditTab = (target) => {
    onEdit(files.find((e) => e.file === target))
  }

  const handleDragStart = (e, index, file) => {
    e.dataTransfer.setData('application/json', JSON.stringify({ index, file }))
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e, index) => {
    const data = JSON.parse(e.dataTransfer.getData('application/json'))
    if (!data) return 
    if (!data.file) {
      // FOLDER
      onDropDocuments(data, index)
    } else if (files.some(e => e.file === data.file)) {
      // TAB
      onDropTab(data, index)
    } else {
      // EXTERNAL TAB
      onDropExternalTab(data, index)
    }
  }

  const transformToTabComponent = (e, index) => {
    return (
      <TabComponent
        file={e.file}
        name={e.name}
        icon={e.icons}
        onClose={onCloseTab}
        onEdit={onEditTab}
        screenFile={onScreen}
        key={index}
        index={index}
        handleDragStart={handleDragStart}
        onDragOver={handleDragOver}
        handleDrop={handleDrop}
        optionesMenu={optionesMenu}
      />
    )
  }

  const [allFiles, setAllFiles] = useState(files.map(transformToTabComponent))

  useEffect(() => {
    setAllFiles(files.map(transformToTabComponent))
  }, [files, onScreen])

  useEffect(() => {
    setOnScreen(screenFile)
  }, [screenFile])

  return <div className={styled.tabsBar}>{allFiles}</div>
}

export default TabsBar
