import styles from './EditableLabels.module.css'

export default function EditableLabels({database, auxDatabase, handleLabelEdit, handleDelete}) {
    return(
        database.map((_, index) =>
            <section key={index}>
                <input 
                    className={styles.editInput}                                      
                    value={auxDatabase[index].value}
                    onChange={(event) => handleLabelEdit(index, event.target.value)}
                />
                <button 
                    name={index}
                    className={styles.deleteButton} 
                    onClick={(event) => handleDelete(parseInt(event.target.name,10))}
                >
                    x
                </button>
            </section>
        )
    )
}