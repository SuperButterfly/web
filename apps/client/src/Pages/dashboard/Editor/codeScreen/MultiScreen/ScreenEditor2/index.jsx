import React from 'react'
import TabsBar from '@/Components/TabsBar'
import CodeEditor from '@/Components/CodeEditor'
import DropComponent from '@/Components/DragAndDrop/DropComponent'
import generateDocument from '../hooks/generateDocuments'
import { changeFilesOnMultiScreen, setFileOnScreen } from '@/redux/slices/projectSlices'
import { useDispatch, useSelector } from 'react-redux'
import { generateNewFile, generateNewTerminal } from '../helpers/generateNewFiles'
import styles from './screenEditor.module.css'

const ScreenEditor2 = ({ files, indexScreen, screenEditorFiles }) => {
  const { fileOnScreen } = useSelector((state) => state.project)
  const screen = fileOnScreen[indexScreen]
  const dispatch = useDispatch()

  const onCloseTab = (target) => {
    if (screen.file === target && files.length !== 1) {
      if (files[0].file !== target) {
        const newScreen = files.find(
          (e, i) => files[i + 1].file === target
        )
        dispatch(setFileOnScreen({ file: newScreen, index: indexScreen }))
      } else {
        dispatch(setFileOnScreen({ file: files[1], index: indexScreen }))
      }
    }
    if (files.length === 1) setFileOnScreen({ file: files[0], index: indexScreen })
    const newFiles = files.filter((e) => e.file !== target)
    dispatch(changeFilesOnMultiScreen({ files: newFiles, index: indexScreen }))
  }

  const onEditScreen = (target) => {
    dispatch(setFileOnScreen({ file: target, index: indexScreen }))
  }

  const onHandleDropContent = (data) => {
    let documents
    if (!data) return
    if (!data.file) {
      // FOLDER
      documents = generateDocument(data);
      documents = documents.filter(e => {
        return !files.some(a => a.file === e.file)
      })
    } else if (files.some(e => e.file === data.file)) {
      // TAB
      documents = []
    } else {
      // EXTERNAL TAB
      documents = [screenEditorFiles.flat().find(e => e.file === data.file)]
      dispatch(setFileOnScreen({ file: documents[0], index: indexScreen }))
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
    const newFiles = [...files]
    newFiles.splice(i, 0, document)
    dispatch(changeFilesOnMultiScreen({ files: newFiles, index: indexScreen }))
    dispatch(setFileOnScreen({ file: document, index: indexScreen }))
  }

  const onDropDocuments = (data, i) => {
    let documents = generateDocument(data)
    documents = documents.filter(e => {
      return !files.some(a => a.file === e.file)
    })
    const newFiles = [...files, ...documents]
    dispatch(changeFilesOnMultiScreen({ files: newFiles, index: indexScreen }))
    dispatch(setFileOnScreen({ file: documents[0], index: indexScreen }))
  }

  const onNewTerminal = (i) => {
    const document = generateNewTerminal(files[i])
    const newFiles = [...files]
    newFiles.splice(i, 0, document)
    dispatch(changeFilesOnMultiScreen({ files: newFiles, index: indexScreen }))
    dispatch(setFileOnScreen({ file: document, index: indexScreen }))
  }

  const onNewFile = (i) => {
    const document = generateNewFile(files[i])
    const newFiles = [...files]
    newFiles.splice(i, 0, document)
    dispatch(changeFilesOnMultiScreen({ files: newFiles, index: indexScreen }))
    dispatch(setFileOnScreen({ file: document, index: indexScreen }))
  }

  const onCloseLeftFile = (i) => {
    if (i > 0) {
      onCloseTab(files[i - 1].file)
    }
  }

  const onCloseRigthFile = (i) => {
    if (i < files.length - 1) {
      onCloseTab(files[i + 1].file)
    }
  }

  const optionesMenu = [
    { label: 'Cerrar todos', handler: (i) => { dispatch(changeFilesOnMultiScreen({ files: [], index: indexScreen })) } },
    { label: 'Cerrar otros', handler: (i) => { dispatch(changeFilesOnMultiScreen({ files: [files[i]], index: indexScreen })) } },
    { label: 'Cerrar izquierda', handler: onCloseLeftFile },
    { label: 'Cerrar derecha', handler: onCloseRigthFile },
    { label: 'Nueva terminal', handler: onNewTerminal },
    { label: 'Nuevo archivo', handler: onNewFile }
  ]

  return (
    <div
      key={indexScreen}
      className={styles.container}
    >
      <TabsBar
        files={files}
        onEdit={onEditScreen}
        onClose={onCloseTab}
        screenFile={screen?.file}
        onDropTab={onDropTab}
        onDropExternalTab={onDropExternalTab}
        onDropDocuments={onDropDocuments}
        optionesMenu={optionesMenu}
      />
      <DropComponent onHandleDrop={onHandleDropContent} height={'calc(100% - 30px)'}>
        {screen?.file &&
          <CodeEditor id={screen?.file} index={indexScreen} text={screen?.text} language={screen?.language} />}
      </DropComponent>
    </div>
  )
}

export default ScreenEditor2