import React from 'react'
import styles from './YesNoAlert.module.css'

const YesNoAlert = ({ title, message, visible, onYesClick, onNoClick }) => {
  const containerClasses = `${styles.container} ${visible ? styles.visible : ''}`

  return (
      <div>
        {visible && <div className={styles.overlay} />}
        <div id='yesNoAlert' className={containerClasses}>
          <section className={styles.titleBar}>
            {title}
          </section>
          <section className={styles.body}>
            <section className={styles.messageContainer}>
              {message}
            </section>
            <section className={styles.buttonsContainer}>
              <button type='button' className={styles.button} onClick={() => onYesClick()}>YES</button>
              <button type='button' className={styles.button} onClick={() => onNoClick()}>NO</button>
            </section>
          </section>
        </div>
      </div>
  )
}

export default YesNoAlert
