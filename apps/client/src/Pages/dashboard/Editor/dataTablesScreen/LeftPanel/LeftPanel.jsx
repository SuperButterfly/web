import styles from './leftPanel.module.css'
import { useState } from 'react'
import TabMenu from './TabMenu'
import VersionHistory from '../History/History'
import SidePanel from '../SidePanel/SidePanel'

const testData = [
  {
    id: 1,
    name: 'Versión 1',
    description: 'Descripción de la versión 1',
    date: new Date(2023, 5, 22),
    time: '10:00 AM',
    author: 'Fiorella'
  },
  {
    id: 2,
    name: 'Versión 2',
    description: 'Descripción de la versión 2',
    date: new Date(2023, 5, 20),
    time: '02:30 PM',
    author: 'Aythen'
  }
]
const LeftPanel = ({ controls }) => {
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
          onSubmit={controls.handleFormSubmit}
          exportedFunctions={controls.exportedFunctions}
        />
      )}
      {/* {!isTabSelected && <SidePanel controls={controls}/> } */}
    </div>
  )
}

export default LeftPanel
