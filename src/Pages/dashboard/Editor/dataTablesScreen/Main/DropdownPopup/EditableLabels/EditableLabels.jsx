import styles from './EditableLabels.module.css'
/* //*Estable */
/* export default function EditableLabels ({ database, auxDatabase, handleLabelEdit, handleDelete, input }) {
  return (
    database.map((label, index) => {
      if (label.value.includes(input)) {
        return (
                    <section key={index}>
                        <input
                            className={styles.editInput}
                            value={auxDatabase[index].value}
                            onChange={(event) => handleLabelEdit(index, event.target.value)}
                        />
                        <button
                            name={index}
                            className={label.selected ? styles.blockedButton : styles.deleteButton}
                            onClick={(event) => handleDelete(parseInt(event.target.name, 10))}
                            disabled={label.selected}
                        >
                            x
                        </button>
                    </section>
        )
      }
      return null
    })
  )
} */
/* //!BREAKPOINT */
/* //*En desarrollo */
export default function EditableLabels ({ datatable, cell, auxDatabase, handleLabelEdit, handleDelete, input }) {
  const row = JSON.parse(JSON.stringify(cell[0]));
  const column = JSON.parse(JSON.stringify(cell[1]))
  const database = JSON.parse(JSON.stringify(datatable))

  return (
      cell[0] !== null && database[row][column].columnLabels && database[row][column].columnLabels.map((label, index) => {
        return(
          <section key={index}>
            <input
                className={styles.editInput}
                /* //value={auxDatabase[row][column].columnLabels[index]} */
                value={label}
                onChange={(event) => handleLabelEdit(row, column, index, event.target.value)}
            />
            {/* <button
                name={index}
                className={label.selected ? styles.blockedButton : styles.deleteButton}
                onClick={(event) => handleDelete(parseInt(event.target.name, 10))}
                disabled={label.selected}
            >
                x
            </button> */}
          </section>
        )
      })
  );
}
