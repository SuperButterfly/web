import styles from './UnselectedLabels.module.css'

export default function UnselectedLabels({
  datatable,
  sheet,
  handleSelectLabel,
  input
}) {
  const row = JSON.parse(JSON.stringify(sheet?.selectedCell[0]))
  const column = JSON.parse(JSON.stringify(sheet?.selectedCell[1]))
  const database = JSON.parse(JSON.stringify(datatable))

  return (
    <div className={styles.unselectedContainer}>
      {sheet?.selectedCell[0] !== null &&
        database[row][column].columnLabels &&
        database[row][column].columnLabels.map((label) => {
          if (input === '') {
            if (
              database[row][column].value.every(
                (selected) => selected !== label
              )
            ) {
              return (
                <button
                  onClick={(event) => handleSelectLabel(row, column, event)}
                  className={styles.unselectedLabel}
                  key={label}
                  name={label}
                >
                  {label}
                </button>
              )
            } else {
              return null
            }
          } else if (
            label.includes(input) &&
            database[row][column].value.every((selected) => selected !== label)
          ) {
            return (
              <button
                onClick={(event) =>
                  handleSelectLabel(row, column, event.target.name)
                }
                className={styles.unselectedLabel}
                key={label}
                name={label}
              >
                {label}
              </button>
            )
          } else {
            return null
          }
        })}
    </div>
  )
}
