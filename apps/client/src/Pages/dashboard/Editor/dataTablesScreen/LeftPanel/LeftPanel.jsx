import styles from './leftPanel.module.css'
import { useState } from 'react'
import TabMenu from './TabMenu'
import VersionHistory from '../History/History'
import SidePanel from '../SidePanel/SidePanel'

const LeftPanel = ({ sheet, controls }) => {
  const [isTabSelected, setIsTabSelected] = useState(true)

  return (
    <div className={styles.elementsPanelContainer}>
      <TabMenu selected={isTabSelected} change={setIsTabSelected} />

      {isTabSelected && (
        <VersionHistory
          versiones={controls.exportedFunctions}
          onVersionSelect={controls.exportedFunctions.handleRestoreVersion}
        />
      )}
      {!isTabSelected && (
        <SidePanel
          sheet={sheet}
          onSubmit={controls.handleFormSubmit}
          exportedFunctions={controls.exportedFunctions}
        />
      )}
    </div>
  )
}

export default LeftPanel
