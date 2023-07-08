// import React from 'react';
import styles from './SelectedLabels.module.css'

export default function SelectedLabels ({ database, handleSelectLabel }) {
  return (
        <div className={styles.addedLabels}>
            {database.map((label, index) => {
              if (label.selected) {
                return (
                        <div key={index} className={styles.selectedLabel}>
                            <span>{label.value}</span>
                            <button className={styles.buttonX} onClick={() => handleSelectLabel(index)}>
                                x
                            </button>
                        </div>
                )
              }
            })}
        </div>
  )
}
