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
  onDropDocuments
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
