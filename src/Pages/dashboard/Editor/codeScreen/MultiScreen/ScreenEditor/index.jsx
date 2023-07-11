import React, { useState, useEffect } from 'react'
import TabsBar from '../../../../../../Components/TabsBar'
import CodeEditor from '../../../../../../Components/CodeEditor'
import DropComponent from '../../../../../../Components/DragAndDrop/DropComponent'
import generateDocument from '../hooks/generateDocuments'
import { set } from 'lodash'

const ScreenEditor = ({ files, index, onCloseTab }) => {
  const [filesTab, setFilesTab] = useState(files)
  const [screen, setScreen] = useState(files[0])

  const onClose = (target) => {
    if (screen.file === target && filesTab.length !== 1) {
      if (filesTab[0].file !== target) {
        const newScreen = filesTab.find(
          (e, i) =>  filesTab[i + 1].file === target 
        )
        setScreen(newScreen)
      } else {
        setScreen(filesTab[1])
      }
    }
  //  onCloseTab(target, index)
     setFilesTab(filesTab.filter((e) => e.file !== target))
  }

  const onEdit = (target) => {
    setScreen(target)
  }

  const onHandleDrop = (data) => {
    const documents = generateDocument(data);
    setFilesTab([...filesTab,...documents])
  }

  const onDrag = (data) => {
    setFilesTab(data)
  }

  const onDragDocuments = (data, index) => {
    const documents = generateDocument(data)
    const newItems = [...filesTab]
    newItems.splice(index, 0, ...documents)
    setFilesTab(newItems)
    setScreen(documents[0])
  }

  return (
    <div>
      <TabsBar
        files={filesTab}
        onEdit={onEdit}
        onClose={onClose}
        screenFile={screen.file}
        onDrag={onDrag}
        onDragDocuments={onDragDocuments}
      />
      <DropComponent onHandleDrop={onHandleDrop}>
      {String(screen?.name)}
      <CodeEditor text={screen?.text} language={screen?.language} />
      </DropComponent>
    </div>
  )
}

export default ScreenEditor
