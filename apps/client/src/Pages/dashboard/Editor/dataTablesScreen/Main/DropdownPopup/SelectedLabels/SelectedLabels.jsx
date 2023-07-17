import styles from './SelectedLabels.module.css'

export default function SelectedLabels({ cell, datatable, handleSelectLabel }) {
  const row = JSON.parse(JSON.stringify(cell[0]))
  const column = JSON.parse(JSON.stringify(cell[1]))
  const database = JSON.parse(JSON.stringify(datatable))
  return (
    <div className={styles.addedLabels}>
      {cell[0] !== null && Array.isArray(database[row][column].value) && database[row][column].value.length > 0 && database[row][column].value.map((label) => (
        <div key={label} className={styles.selectedLabel}>
          <span>{label}</span>
          <button
            name={label}
            className={styles.buttonX}
            onClick={(event) =>
              handleSelectLabel(row, column, event)
            }
          >
            x
          </button>
        </div>
      ))}
    </div>
  )
}
