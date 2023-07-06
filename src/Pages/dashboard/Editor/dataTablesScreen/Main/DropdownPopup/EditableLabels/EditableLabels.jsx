import styles from './EditableLabels.module.css'

export default function EditableLabels({database, auxDatabase, handleLabelEdit, handleDelete}) {
    return(
        database.map((label, index) =>
            <section key={index}>
                <input 
                    className={styles.editInput}                                      
                    value={auxDatabase[index].value}
                    onChange={(event) => handleLabelEdit(index, event.target.value)}
                />
                <button 
                    name={index}
                    className={label.selected ? styles.blockedButton : styles.deleteButton} 
                    onClick={(event) => handleDelete(parseInt(event.target.name,10))}
                    disabled={label.selected}
                >
                    x
                </button>
            </section>
        )
    )
}