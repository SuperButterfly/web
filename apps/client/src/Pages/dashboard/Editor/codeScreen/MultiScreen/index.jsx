import React, { useState } from 'react'
import ResizeHorizontal from './ResizeHorizontal'
import ResizeVertical from './ResizeVertical'
import ScreenEditor from './ScreenEditor2'
import { useSelector, useDispatch } from 'react-redux'
import { addNewScreen, setFileOnScreen } from '@/redux/slices/projectSlices'
import DropComponent from '@/Components/DragAndDrop/DropComponent'
import styled from './MultiScreen.module.css'
import generateDocument from './hooks/generateDocuments'

const MultiScreen = () => {
  const { screenEditorFiles } = useSelector((state) => state.project)
  const [addScreen, setAddScreen] = useState(false)
  const dispatch = useDispatch()
  const [isVertical, setIsVertical] = useState(true)

  const addScreenForDrop = (data, value) => {
    setAddScreen(false)
    setIsVertical(value === 'vertical')
    let documents
    if (!data) return
    if (!data.file) {
      // FOLDER
      documents = generateDocument(data)
    } else {
      // EXTERNAL TAB
      documents = screenEditorFiles.flat().filter(e => e.file === data.file)
    }
    dispatch(setFileOnScreen({ file: documents[0], index: screenEditorFiles.length }))
    dispatch(addNewScreen(documents))
  }

  const [file1, file2, file3, file4] = screenEditorFiles

  return (
    <div
      className={styled.multiScreenContainer}
      onDragOver={() => setAddScreen(true)}
    >
      {file1 && !isVertical &&
        <ResizeVertical width="100%" height="100%">
          <ResizeHorizontal width="100%" height="100%">
            <ScreenEditor files={file1} indexScreen={0} screenEditorFiles={screenEditorFiles} />
            {file3 && <ScreenEditor files={file3} indexScreen={2} screenEditorFiles={screenEditorFiles} />}
          </ResizeHorizontal>
          {file2 && <ResizeHorizontal width="100%" height="100%">
            <ScreenEditor files={file2} indexScreen={1} screenEditorFiles={screenEditorFiles} />
            {file4 && <ScreenEditor files={file4} indexScreen={3} screenEditorFiles={screenEditorFiles} />}
          </ResizeHorizontal>}
        </ResizeVertical>}

      {file1 && isVertical &&
        <ResizeHorizontal width="100%" height="100%">
          <ResizeVertical width="100%" height="100%">
            <ScreenEditor files={file1} indexScreen={0} screenEditorFiles={screenEditorFiles} />
            {file3 && <ScreenEditor files={file3} indexScreen={2} screenEditorFiles={screenEditorFiles} />}
          </ResizeVertical>
          {file2 && <ResizeVertical width="100%" height="100%">
            <ScreenEditor files={file2} indexScreen={1} screenEditorFiles={screenEditorFiles} />
            {file4 && <ScreenEditor files={file4} indexScreen={3} screenEditorFiles={screenEditorFiles} />}
          </ResizeVertical>}
        </ResizeHorizontal>}

      {/*file1 &&
        <ResizeVertical width="100%" height="100%">
          <ResizeHorizontal width="100%" height="100%">
            <ScreenEditor files={file1} indexScreen={0} screenEditorFiles={screenEditorFiles} />
            {file2 && <ScreenEditor files={file2} indexScreen={1} screenEditorFiles={screenEditorFiles} />}
          </ResizeHorizontal>
          {file3 && <ResizeHorizontal width="100%" height="100%">
            <ScreenEditor files={file3} indexScreen={2} screenEditorFiles={screenEditorFiles} />
            {file4 && <ScreenEditor files={file4} indexScreen={3} screenEditorFiles={screenEditorFiles} />}
          </ResizeHorizontal>}
  </ResizeVertical>*/}
      {
        addScreen && !screenEditorFiles.length &&
        (
          <DropComponent onHandleDrop={addScreenForDrop} height={'auto'} width={'auto'} value={'vertical'}>
            <div className={styled[`addScreen${screenEditorFiles.length}v`]}></div>
          </DropComponent>
        )
      }
      {addScreen && screenEditorFiles.length && (isVertical || screenEditorFiles.length === 1) &&
        (
          <DropComponent onHandleDrop={addScreenForDrop} height={'auto'} width={'auto'} value={'vertical'}>
            <div className={styled[`addScreen${screenEditorFiles.length}v`]}></div>
          </DropComponent>
        )
      }

      {addScreen && screenEditorFiles.length && (!isVertical || screenEditorFiles.length === 1) &&
        (
          <DropComponent onHandleDrop={addScreenForDrop} height={'auto'} width={'auto'} value={"horizontal"}>
            <div className={styled[`addScreen${screenEditorFiles.length}h`]}></div>
          </DropComponent>
        )
      }
    </div>
  )

}

export default MultiScreen
