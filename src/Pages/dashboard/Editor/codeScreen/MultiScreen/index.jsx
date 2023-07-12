import React, { useState } from 'react'
import ResizeHorizontal from './ResizeHorizontal'
import ResizeVertical from './ResizeVertical'
import ScreenEditor from './ScreenEditor2'
import { useSelector, useDispatch } from 'react-redux'
import { addNewScreen } from '@/redux/slices/projectSlices'
import DropComponent from '@/Components/DragAndDrop/DropComponent'
import styled from './MultiScreen.module.css'
import generateDocument from './hooks/generateDocuments'

const MultiScreen = ({ width = '200px', height = '200px' }) => {
  const { screenEditorFiles } = useSelector((state) => state.project)
  const [addScreen, setAddScreen] = useState(false)
  const dispatch = useDispatch()

  const styleContainer = {
    height,
    width
  }

  const addScreenForDrop = (data) => {
    let documents
    if (!data.file) {
      // FOLDER
      documents = generateDocument(data)
    } else {
      // EXTERNAL TAB
      documents = screenEditorFiles.flat().filter(e => e.file === data.file)
    }
    dispatch(addNewScreen(documents))
  }

  const [file1, file2, file3, file4] = screenEditorFiles

  const ifIs1 = <ScreenEditor files={file1} indexScreen={0} screenEditorFiles={screenEditorFiles} />

  const ifIs2 = (
    <ResizeHorizontal width="100%" height="100%">
      <ScreenEditor files={file1} indexScreen={0} screenEditorFiles={screenEditorFiles} />
      <ScreenEditor files={file2} indexScreen={1} screenEditorFiles={screenEditorFiles} />
    </ResizeHorizontal>
  )

  const ifIs3 = (
    <ResizeVertical>
      {ifIs2}
      <ScreenEditor files={file3} indexScreen={2} screenEditorFiles={screenEditorFiles} />
    </ResizeVertical>
  )

  const ifIs4 = (
    <ResizeVertical>
      {ifIs2}
      <ResizeHorizontal width="100%" height="100%">
        <ScreenEditor files={file3} indexScreen={2} screenEditorFiles={screenEditorFiles} />
        <ScreenEditor files={file4} indexScreen={3} screenEditorFiles={screenEditorFiles} />
      </ResizeHorizontal>
    </ResizeVertical>
  )

  const renderScreen = [ifIs1, ifIs2, ifIs3, ifIs4]
  const index = screenEditorFiles.length > 4 ? 3 : screenEditorFiles.length - 1

  return (
    <div
      style={styleContainer}
      className={styled.multiScreenContainer}
      onDragOver={() => setAddScreen(true)}
    >
      {renderScreen[index]}
      {addScreen && (
        <DropComponent onHandleDrop={addScreenForDrop}>
          <div className={styled[`addScreen${screenEditorFiles.length}`]}></div>
        </DropComponent>
      )}
    </div>
  )
}

export default MultiScreen
