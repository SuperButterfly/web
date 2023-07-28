import styles from './leftPanel.module.css'
import { useState } from 'react'
import TabMenu from './TabMenu'
import VersionHistory from '../History/History'
// import SidePanel from '../SidePanel/SidePanel'

// const LeftPanel = ({ sheet, controls }) => {
const LeftPanel = () => {
  const [isTabSelected, setIsTabSelected] = useState(true)

  return (
    <div className={styles.elementsPanelContainer}>
      <TabMenu selected={isTabSelected} change={setIsTabSelected} />

      {isTabSelected && <VersionHistory />}
    </div>
  )
}

export default LeftPanel
