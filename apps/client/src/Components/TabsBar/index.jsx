import React, { useState, useEffect, useRef } from 'react'
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
  const [onIndexChildren, setOnIndexChildren] = useState(null)
  const tabsRef = useRef(null)

  const onCloseTab = (target) => {
    onClose(target)
  }

  const onEditTab = (target, indexChildren) => {
    onEdit(files.find((e) => e.file === target))
    setOnIndexChildren(indexChildren)
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

  useEffect(() => {
    const selectedTabElement = tabsRef.current.children[onIndexChildren];
    const tabsContainer = tabsRef.current;
    if (selectedTabElement && tabsContainer) {
      const selectedTabRect = selectedTabElement.getBoundingClientRect();
      const containerRect = tabsContainer.getBoundingClientRect();

      const containerWidth = containerRect.width
      const containerLeft = containerRect.left

      const selectedTabWidth = selectedTabRect.width
      const selectedTabLeft = selectedTabRect.left 
      /*
      console.log(containerWidth)
      console.log(containerLeft)
      console.log(selectedTabWidth)
      console.log(selectedTabLeft)*/

      const scrollLeft = selectedTabRect.left + selectedTabRect.width / 2 - containerWidth / 2;
      /*
      const scrollPosition = containerLeft + containerWidth - selectedTabLeft - selectedTabWidth - 30
      console.log(scrollPosition)
      if( scrollPosition <= 0){
        console.log(-scrollPosition)
        tabsRef.current.scrollLeft = -scrollPosition;
      }*/
      // Hacemos el scroll para centrar el tab seleccionado
        tabsRef.current.scrollLeft = scrollLeft;
    }
  }, [onIndexChildren]);

  return <div className={styled.tabsBar} ref={tabsRef}>{allFiles}</div>
}

export default TabsBar
