import styles from './UnselectedLabels.module.css'

export default function unselectedLabels({database, handleSelectLabel}) {
    return(
        <div>
            {database.map((label, index) => {
                if (label.selected === false) {
                    return(
                        <button onClick={() => handleSelectLabel(index)} key={index} className={styles.unselectedLabel}>
                            {label.value}
                        </button>
                    )
                }
            })}
        </div>
    )
}