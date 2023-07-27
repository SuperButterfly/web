import './main.css'
import SidebarIcons from '../sidebaricons/SidebarIcons.js'
import MainHeader from '../mainheader/MainHeader.js'
import ProjectTools from '../projectTools'
import CodeScreen from '../codeScreen'
import DataTables from '../dataTablesScreen/DataTables'
import ComponentsCommunity from '../componentsCommunityScreen/ComponentsCommunity'
import {
  generateParentComponent,
  generateStylesFromJSON
} from '../mainheader/Post-Processor'

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Main = () => {
  const { target } = useSelector((state) => state.project)
  const [showCode, setShowCode] = useState(false)
  const [componentCode, setComponentCode] = useState('')
  const [componentStyles, setComponentStyles] = useState('')
  const screen = useSelector((state) => state.workspace.screen)
  const [isAdvancedSelected, setIsAdvancedSelected] = useState(false)
  const [showExplorer, setShowExplorer] = useState(false)
  const [showData, setShowData] = useState(false)

  // const [componentCode, setComponentCode] = useState([

  const handleIconClick = () => {
    if (showCode) {
      setShowCode(false)
    }
  }

  const handleScreen = () => {
    setShowData(false)
    setShowCode(!showCode)
    // if (showCode) {
    //   // const jsxCode = generateParentComponent(target);
    //   // const jsxStyles = generateStylesFromJSON(target);

    //   // // Generate the CSS file
    //   // const cssContent = jsxStyles;

    //   // setComponentCode(jsxCode);
    //   // setComponentStyles(cssContent);
    // }else {
    //   setShowExplorer(true);
    // }
  }

  /*useEffect(() => {
    //const dataTables = screen
    setShowData(screen==="table")
  }, [screen])*/

  useEffect(() => {
    if (target) {
      const jsxCode = generateParentComponent(target)
      const jsxStyles = generateStylesFromJSON(target)

      // Generate the CSS file
      const cssContent = jsxStyles

      setComponentCode(jsxCode)
      setComponentStyles(cssContent)
    } else {
      setShowExplorer(true)
    }
  }, [target])

  return (
    <>
      <MainHeader handleScreen={() => handleScreen()} />
      <div style={{ display: 'flex', width: '99.8%', justifyContent: 'row' }}>
        {showCode ? (
          <>
            <SidebarIcons
              setIsAdvancedSelected={setIsAdvancedSelected}
              showExplorer={!showExplorer}
              handleIconClick={handleIconClick}
              showCode={showCode}
            />
            <CodeScreen
              code={componentCode}
              componentStyles={componentStyles}
            />
          </>
        ) : (
          <>
            <SidebarIcons
              isAdvancedSelected={isAdvancedSelected}
              setIsAdvancedSelected={setIsAdvancedSelected}
              showExplorer={showExplorer}
            />

            {(screen === 'table' && <DataTables />)}
            {(screen === 'editor' && (
              <ProjectTools
                isAdvancedSelected={isAdvancedSelected}
                setIsAdvancedSelected={setIsAdvancedSelected}
              />
            ))}
            {(screen === 'bookshop' && <ComponentsCommunity />)}
          </>
        )}
      </div>
    </>
  )
}

export default Main
