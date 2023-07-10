import styles from './leftPanel.module.css'
import { useState } from 'react'
import TabMenu from './TabMenu'
import VersionHistory from '../History/History'
import SidePanel from '../SidePanel/SidePanel'

const LeftPanel = ({ controls }) => {
  const [isTabSelected, setIsTabSelected] = useState(true)

  return (
    <div className={styles.elementsPanelContainer}>
      <TabMenu selected={isTabSelected} change={setIsTabSelected} />

      {isTabSelected && <VersionHistory />}
      {!isTabSelected && (
        <SidePanel
          onSubmit={controls.handleFormSubmit}
          exportedFunctions={controls.exportedFunctions}
        />
      )}
      {/* {!isTabSelected && <SidePanel controls={controls}/> } */}
    </div>
  )
}

export default LeftPanel
