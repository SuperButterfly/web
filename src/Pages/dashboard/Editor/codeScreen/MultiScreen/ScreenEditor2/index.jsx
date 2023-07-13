import React, { useState } from 'react'
import TabsBar from '@/Components/TabsBar'
import CodeEditor from '@/Components/CodeEditor'
import DropComponent from '@/Components/DragAndDrop/DropComponent'
import generateDocument from '../hooks/generateDocuments'
import { changeFilesOnMultiScreen } from '@/redux/slices/projectSlices'
import { useDispatch } from 'react-redux'

const ScreenEditor2 = ({ files, indexScreen, screenEditorFiles }) => {

  const [screen, setScreen] = useState(files[0])
  const dispatch = useDispatch()

  const onCloseTab = (target) => {
    if (screen.file === target && files.length !== 1) {
      if (files[0].file !== target) {
        const newScreen = files.find(
          (e, i) => files[i + 1].file === target
        )
        setScreen(newScreen)
      } else {
        setScreen(files[1])
      }
    }
    const newFiles = files.filter((e) => e.file !== target)
    dispatch(changeFilesOnMultiScreen({ files: newFiles, index: indexScreen }))
  }

  const onEditScreen = (target) => {
    setScreen(target)
  }

  const onHandleDropContent = (data) => {
    let documents;
    if (!data.file) {
      // FOLDER
      documents = generateDocument(data)
    } else if (files.some(e => e.file === data.file)) {
      // TAB
      documents = []
    } else {
      // EXTERNAL TAB
      documents = [screenEditorFiles.flat().find(e => e.file === data.file)]
      setScreen(documents[0])
    }
    const newFiles = [...files, ...documents]
    dispatch(changeFilesOnMultiScreen({ files: newFiles, index: indexScreen }))
  }

  const onDropTab = (data, i) => {
    const newFiles = [...files]
    const draggedItem = files[data.index]
    newFiles.splice(data.index, 1)
    newFiles.splice(i, 0, draggedItem)
    dispatch(changeFilesOnMultiScreen({ files: newFiles, index: indexScreen }))
  }

  const onDropExternalTab = (data, i) => {
    const document = screenEditorFiles.flat().find(e => e.file === data.file)
    setScreen(document)
    const newFiles = [...files]
    newFiles.splice(i, 0, document)
    dispatch(changeFilesOnMultiScreen({ files: newFiles, index: indexScreen }))
  }

  const onDropDocuments = (data, i) => {
    const documents = generateDocument(data)
    const newFiles = [...files, ...documents]
    dispatch(changeFilesOnMultiScreen({ files: newFiles, index: indexScreen }))
    setScreen(documents[0])
  }

  return (
    <div>
      <TabsBar
        files={files}
        onEdit={onEditScreen}
        onClose={onCloseTab}
        screenFile={screen.file}
        onDropTab={onDropTab}
        onDropExternalTab={onDropExternalTab}
        onDropDocuments={onDropDocuments}
      />
      <DropComponent onHandleDrop={onHandleDropContent}>
        <CodeEditor key={screen?.file} text={screen?.text} language={screen?.language} />
      </DropComponent>
    </div>
  )
}

export default ScreenEditor2