import styles from './UnselectedLabels.module.css'

export default function unselectedLabels({
  database,
  handleSelectLabel,
  input
}) {
  return (
    <div className={styles.unselectedContainer}>
      {database.map((label, index) => {
        if (label.selected === false && label.value.includes(input)) {
          return (
            <button
              onClick={() => handleSelectLabel(index)}
              key={index}
              className={styles.unselectedLabel}
            >
              {label.value}
            </button>
          )
        }
        return null
      })}
    </div>
  )
}
