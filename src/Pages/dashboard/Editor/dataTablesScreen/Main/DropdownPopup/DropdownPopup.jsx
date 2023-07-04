import React, {useState} from 'react';
import styles from './DropdownPopup.module.css'

export default function DropdownPopup() {
    //!BREAKPOINT
    const [input, setInput] = useState('');
    const [database, setDatabase] = useState([]);
    const [auxDatabase, setAuxDatabase] = useState([]);     // Se usa para guardar temporalmente los labels, hasta que se confirma su edicion
    const [buttonIsEdit, setButtonIsEdit] = useState(true);

    function HandleButtonClick() {
        setDatabase([...database, input]);
        setAuxDatabase([...database, input]);
        setInput('')
    }

    function handleBelowButton() {
        setButtonIsEdit(!buttonIsEdit)
    }

    function handleLabelEdit(index) {
        console.log(index);
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
                        onClick={HandleButtonClick}
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
                        {database.map((label, index) => 
                            <input 
                                className={styles.editInput} 
                                key={index} 
                                value={label}
                                onChange={() => handleLabelEdit(index)}
                            />)
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

//!Hay que evaluar espacios en blanco al principio