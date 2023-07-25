import styles from './leftPanel.module.css'
import { useState } from 'react'
import TabMenu from './TabMenu'
import VersionHistory from '../History/History'
// import SidePanel from '../SidePanel/SidePanel'
import { useSelector } from 'react-redux'

// const LeftPanel = ({ sheet, controls }) => {
const LeftPanel = () => {
  const exportedFunctions = useSelector((state) => state.exportedFunctions)
  const [isTabSelected, setIsTabSelected] = useState(true)

  return (
    <div className={styles.elementsPanelContainer}>
      <TabMenu selected={isTabSelected} change={setIsTabSelected} />

      {isTabSelected && exportedFunctions && (
        <VersionHistory
          versiones={exportedFunctions}
          onVersionSelect={exportedFunctions.handleRestoreVersion}
        />
      )}
      {/* {!isTabSelected && (
        <SidePanel
          sheet={sheet}
          onSubmit={controls.handleFormSubmit}
          exportedFunctions={controls.exportedFunctions}
        />
      )} */}
    </div>
  )
}

export default LeftPanel
