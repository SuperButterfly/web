import React, {useState} from 'react';
import styles from './DropdownPopup.module.css'

export default function DropdownPopup() {
    
    const [input, setInput] = useState('');
    const [database, setDatabase] = useState([]);

    return(
        <div id='DropdownPopup' className={styles.container}>
            <section className={styles.contents}>    
                <input 
                    className = {styles.input} 
                    value={input}
                    onChange={(event) => setInput(event.target.value)} 
                    type="text" 
                    placeholder={input.length === 0 ? 'Create Label' : 'Create or find Label'}
                />
                {input !== '' && 
                    <button 
                        className={styles.button} 
                        type='button'
                    >
                        + Add as new label
                    </button>
                }
                <span>Edit Labels</span>
            </section>
        </div>
    )
}