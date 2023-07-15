import styles from './Selected.module.css'

export default function Selected({cell, datatable, handleSelectPeople}) {
    const row = JSON.parse(JSON.stringify(cell[0]))
    const column = JSON.parse(JSON.stringify(cell[1]))
    const database = JSON.parse(JSON.stringify(datatable))
    return (
        <div className={styles.addedPeople}>
        {cell[0] !== null && Array.isArray(database[row][column].value) && database[row][column].value.length > 0 && database[row][column].value.map((mail) => (
            <div key={mail} className={styles.selectedPerson}>
                <span>{mail}</span>
                <button
                    name={mail}
                    className={styles.buttonX}
                    onClick={(event) => handleSelectPeople(row, column, event.target.name)}
                >
                    x
                </button>
            </div>
        ))}
        </div>
    )
}