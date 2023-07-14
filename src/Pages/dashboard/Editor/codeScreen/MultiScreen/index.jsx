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

  return (
    <div
      style={styleContainer}
      className={styled.multiScreenContainer}
      onDragOver={() => setAddScreen(true)}
    >
      {file1 &&
        <ResizeVertical>
          <ResizeHorizontal width="100%" height="100%">
            <ScreenEditor files={file1} indexScreen={0} screenEditorFiles={screenEditorFiles} />
            {file2 && <ScreenEditor files={file2} indexScreen={1} screenEditorFiles={screenEditorFiles} />}
          </ResizeHorizontal>
          {file3 && <ResizeHorizontal width="100%" height="100%">
            <ScreenEditor files={file3} indexScreen={2} screenEditorFiles={screenEditorFiles} />
            {file4 && <ScreenEditor files={file4} indexScreen={3} screenEditorFiles={screenEditorFiles} />}
          </ResizeHorizontal>}
        </ResizeVertical>}
      {addScreen && (
        <DropComponent onHandleDrop={addScreenForDrop}>
          <div className={styled[`addScreen${screenEditorFiles.length}`]}></div>
        </DropComponent>
      )}
    </div>
  )

}

export default MultiScreen
