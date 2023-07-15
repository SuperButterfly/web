import React from 'react'
import styles from './OkOnlyAlert.module.css'

const OkOnlyAlert = ({ title, message, visible, onOkClick }) => {
  const containerClasses = `${styles.container} ${visible ? styles.visible : ''}`

  return (
      <div>
        {visible && <div className={styles.overlay} />}
        <div id='okOnlyAlert' className={containerClasses}>
          <section className={styles.titleBar}>
            {title}
          </section>
          <section className={styles.body}>
            <section className={styles.messageContainer}>
              {message}
            </section>
            <section className={styles.buttonsContainer}>
              <button type='button' className={styles.button} onClick={() => onOkClick()}>OK</button>
            </section>
          </section>
        </div>
      </div>
  )
}

export default OkOnlyAlert
