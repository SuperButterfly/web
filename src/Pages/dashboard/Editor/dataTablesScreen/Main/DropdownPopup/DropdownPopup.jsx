import React, {useState} from 'react';
import styles from './DropdownPopup.module.css'

export default function DropdownPopup() {
    
    const [input, setInput] = useState('');
    const [database, setDatabase] = useState([]);
    const [auxDatabase, setAuxDatabase] = useState([]);     // Se usa para guardar temporalmente los labels, hasta que se confirma su edicion
    const [buttonIsEdit, setButtonIsEdit] = useState(true);

    function handleAddButton() {
        setDatabase([...database, input]);
        setAuxDatabase([...database, input]);
        setInput('')
    }

    function handleBelowButton() {
        if (buttonIsEdit === false) {
            setDatabase(auxDatabase)
        }
        setButtonIsEdit(!buttonIsEdit)
    }

    function handleLabelEdit(index, newValue) {
        const auxDatabaseCopy = [...auxDatabase];
        auxDatabaseCopy[index] = newValue;
        setAuxDatabase(auxDatabaseCopy);
    }

    function handleDelete(labelIndex) {
        const filteredData = database.filter((_, index) => index !== labelIndex);
        const filteredaux = auxDatabase.filter((_, index) => index !== labelIndex);
        setDatabase(filteredData);
        setAuxDatabase(filteredaux)
    }

    return(
        <div id='DropdownPopup' className={styles.container}>
            <section className={styles.contents}>
                <section className={styles.addedLabels}>
                    {database.map((label, index) => <span key={index}>{label}</span>)}
                </section>
                <input 
                    className = {styles.input} 
                    value={input}
                    onChange={(event) => setInput(event.target.value)} 
                    type="text" 
                    placeholder={database.length === 0 ? 'Create Label' : 'Create or find Label'}
                />
                {input !== '' && 
                    <button 
                        className={database.some(label => label === input) ? styles.buttonDisabled : styles.addButton}
                        type='button'
                        onClick={handleAddButton}
                        disabled={database.some(label => label === input)}
                    >
                        + Add as new label
                    </button>
                }
                
                {buttonIsEdit === true
                ?
                    <button
                        className={styles.editButton}
                        onClick={handleBelowButton}
                    >
                        Edit Labels
                    </button>
                :
                    <>
                        {database.map((_, index) => 
                            <div key={index}>
                                <input 
                                    className={styles.editInput}                                      
                                    value={auxDatabase[index]}
                                    onChange={(event) => handleLabelEdit(index, event.target.value)}
                                />
                                <button 
                                    name={index}
                                    className={styles.deleteButton} 
                                    onClick={(event) => handleDelete(parseInt(event.target.name,10))}
                                >
                                    x
                                </button>
                            </div>)
                        }
                        <button
                            className={styles.editButton}
                            onClick={handleBelowButton}
                        >
                            Apply
                        </button> 
                    </>
                    
            }
                
            </section>
        </div>
    )
}

//!: Validaciones
//todo: hay que evaluar espacios en blanco al principio
//todo: no se puede eliminar una etiqueta en uso