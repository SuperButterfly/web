import React from 'react'
import styles from './TopBar.module.css'

const TopBar = ({ exportedFunctions }) => {
  return (
    <div className={styles.TopBar}>
      <button className={styles.buttons} onClick={exportedFunctions.redo}>
        Rehacer
      </button>
      <button className={styles.buttons} onClick={exportedFunctions.undo}>
        Deshacer
      </button>
      <button className={styles.buttons} onClick={exportedFunctions.clean}>
        Borrar todo
      </button>
      <button className={styles.buttons} onClick={exportedFunctions.connect}>
        connect!
      </button>
      <button className={styles.buttons} onClick={exportedFunctions.disconnect}>
        disconnect!
      </button>
      <button
        className={styles.buttons}
        onClick={exportedFunctions.handleAddVersion}
      >
        Guardar version
      </button>
      <button className={styles.buttons}>function1</button>
      <button className={styles.buttons}>function2</button>
      <button className={styles.buttons}>function3</button>
    </div>
  )
}

export default TopBar
