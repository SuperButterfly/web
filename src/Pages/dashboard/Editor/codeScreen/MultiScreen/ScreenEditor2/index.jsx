import React, { useState, useEffect } from 'react'
import TabsBar from '@/Components/TabsBar'
import CodeEditor from '@/Components/CodeEditor'
import DropComponent from '@/Components/DragAndDrop/DropComponent'
import generateDocument from '../hooks/generateDocuments'
import { changeFilesOnMultiScreen } from '@/redux/slices/projectSlices'
import { useDispatch, useSelector } from 'react-redux'
import onsliceFiles from '../helpers/onsliceFiles'

const ScreenEditor2 = ({ files, index }) => {
  const [filesTab, setFilesTab] = useState(files)
  const [screen, setScreen] = useState(files[0])
  const dispatch = useDispatch()
  const { screenEditorFiles } = useSelector((state) => state.project)

  useEffect(
    () => {
      setFilesTab(files)
    }, [files]
  )

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
    const newFiles = filesTab.filter((e) => e.file !== target)
    dispatch(changeFilesOnMultiScreen(onsliceFiles(screenEditorFiles, index, newFiles)))
    // setFilesTab(filesTab.filter((e) => e.file !== target))
  }

  const onEdit = (target) => {
    setScreen(target)
  }

  const onHandleDrop = (data) => {
    const documents = generateDocument(data);
    const newFiles = [...filesTab,...documents]
    dispatch(changeFilesOnMultiScreen(onsliceFiles(screenEditorFiles, index, newFiles)))
   // setFilesTab([...filesTab,...documents])
  }

  const onDrag = (data) => {
    const newFiles = data
    dispatch(changeFilesOnMultiScreen(onsliceFiles(screenEditorFiles, index, newFiles)))
   // setFilesTab(data)
  }

  const onDragDocuments = (data, i) => {
    const documents = generateDocument(data)
    const newFiles = [...filesTab, ...documents]
    dispatch(changeFilesOnMultiScreen(onsliceFiles(screenEditorFiles, index, newFiles)))
   // setFilesTab(newFiles)
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
      {String(screen?.text)}
      <CodeEditor text={screen?.text} language={screen?.language} />
      </DropComponent>
    </div>
  )
}

export default ScreenEditor2