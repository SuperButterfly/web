import React, {useState} from 'react';
import styles from './DropdownPopup.module.css'

export default function DropdownPopup() {
    
    const [input, setInput] = useState('');
    const [database, setDatabase] = useState([]);

    function HandleButtonClick() {
        setDatabase([...database, input]);
        setInput('')
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
                        className={database.some(label => label === input) ? styles.buttonDisabled : styles.button}
                        type='button'
                        onClick={HandleButtonClick}
                        disabled={database.some(label => label === input)}
                    >
                        + Add as new label
                    </button>
                }
                <span>Edit Labels</span>
            </section>
        </div>
    )
}