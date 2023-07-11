import React, { useState, useEffect } from 'react'
import ResizeHorizontal from './ResizeHorizontal'
import ResizeVertical from './ResizeVertical'
import ScreenEditor from './ScreenEditor'
import { useSelector, useDispatch } from 'react-redux'

const MultiScreen = ({ filesOnScreen, width = '200px', height = '200px' }) => {
  const { screenEditorFiles } = useSelector((state) => state.project)
  const [allFilesOnScreen, setAllFilesOnScreen] = useState(filesOnScreen)

  const styleContainer = {
    height,
    width
  }

  /* useEffect(() => {
        if (allFilesOnScreen.some((e) => e.length === 0)) {
          setAllFilesOnScreen(allFilesOnScreen.filter((e) => e.length !== 0))
        }
      }, [allFilesOnScreen]) */

  const [file1, file2, file3, file4] = allFilesOnScreen
  const ifIs1 = <ScreenEditor files={file1} index={1} />

  const ifIs2 = (
    <ResizeHorizontal width="100%" height="100%">
      <ScreenEditor files={file1} index={1} />
      <ScreenEditor files={file2} index={2} />
    </ResizeHorizontal>
  )

  const ifIs3 = (
    <ResizeVertical>
      {ifIs2}
      <ScreenEditor files={file3} index={3} />
    </ResizeVertical>
  )

  const ifIs4 = (
    <ResizeVertical>
      {ifIs2}
      <ResizeHorizontal width="100%" height="100%">
        <ScreenEditor files={file3} index={3} />
        <ScreenEditor files={file4} index={4} />
      </ResizeHorizontal>
    </ResizeVertical>
  )

  const renderScreen = [ifIs1, ifIs2, ifIs3, ifIs4]
  const index = 
  allFilesOnScreen.length - 1 > 3 
  ? 3 
  : allFilesOnScreen.length - 1
  return <div style={styleContainer}>{renderScreen[index]}</div>
}

export default MultiScreen
