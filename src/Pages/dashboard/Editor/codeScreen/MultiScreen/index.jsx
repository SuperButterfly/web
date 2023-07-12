import React, { useState, useEffect } from 'react'
import ResizeHorizontal from './ResizeHorizontal'
import ResizeVertical from './ResizeVertical'
import ScreenEditor from './ScreenEditor'
import { useSelector,  useDispatch } from 'react-redux'
import { changeFilesOnMultiScreen,  addNewScreen } from '@/redux/slices/projectSlices'
import DropComponent from '../../../../../Components/DragAndDrop/DropComponent'
import styled from './MultiScreen.module.css'
import generateDocument from './hooks/generateDocuments'

const MultiScreen = ({ filesOnScreen, width = '200px', height = '200px' }) => {
  const { screenEditorFiles } = useSelector((state) => state.project)
  const [addScreen, setAddScreen] = useState(false);
//  const [allFilesOnScreen, setAllFilesOnScreen] = useState(filesOnScreen)
  const dispatch = useDispatch()
  console.log(screenEditorFiles)
  const styleContainer = {
    height,
    width
  }

  useEffect(() => {
    dispatch(addNewScreen(filesOnScreen[0]))
    console.log('hi')
  }, [])

  /* useEffect(() => {
        if (allFilesOnScreen.some((e) => e.length === 0)) {
          setAllFilesOnScreen(allFilesOnScreen.filter((e) => e.length !== 0))
        }
      }, [allFilesOnScreen]) */

  const [file1, file2, file3, file4] = screenEditorFiles
  const ifIs1 = <ScreenEditor files={file1} index={0} />

  const ifIs2 = (
    <ResizeHorizontal width="100%" height="100%">
      <ScreenEditor files={file1} index={0} />
      <ScreenEditor files={file2} index={1} />
    </ResizeHorizontal>
  )

  const ifIs3 = (
    <ResizeVertical>
      {ifIs2}
      <ScreenEditor files={file3} index={2} />
    </ResizeVertical>
  )

  const ifIs4 = (
    <ResizeVertical>
      {ifIs2}
      <ResizeHorizontal width="100%" height="100%">
        <ScreenEditor files={file3} index={2} />
        <ScreenEditor files={file4} index={3} />
      </ResizeHorizontal>
    </ResizeVertical>
  )
  const onAddScreenDrop = (data) => {
    const documents = generateDocument(data);
    dispatch(addNewScreen(documents))
  }
  const renderScreen = [ifIs1, ifIs2, ifIs3, ifIs4]
  const index = 
  screenEditorFiles.length - 1 > 3 
  ? 3 
  : screenEditorFiles.length - 1
  return (
  <div 
  style={styleContainer} 
  className={styled.multiScreenContainer}
  onDragOver={() => setAddScreen(true)}
  >
    {renderScreen[index]}
   {addScreen && 
   <DropComponent onHandleDrop={onAddScreenDrop}>
    <div 
    className={styled[`addScreen${screenEditorFiles.length}`]}
    ></div>
    </DropComponent>}
  </div>)
}

export default MultiScreen
