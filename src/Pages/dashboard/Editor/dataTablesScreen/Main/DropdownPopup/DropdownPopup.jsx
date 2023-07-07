import React, {useState/* , useRef */} from 'react';
import SelectedLabels from './SelectedLabels/SelectedLabels';
import UnselectedLabels from './UnselectedLabels/UnselectedLabels';
import EditableLabels from './EditableLabels/EditableLabels';
import styles from './DropdownPopup.module.css'

const DropdownPopup = React.forwardRef((cell, ref) => {
    
    const [input, setInput] = useState('');
    const [database, setDatabase] = useState([]);
    const [auxDatabase, setAuxDatabase] = useState([]);     // Se usa para guardar temporalmente los labels, hasta que se confirma su edicion
    const [buttonIsEdit, setButtonIsEdit] = useState(true);

    function handleAddButton() {
        setDatabase([...database, {value:input.trimStart(), selected:false}]);
        setAuxDatabase([...auxDatabase, {value:input.trimStart(), selected:false}]);
        setInput('')
    }

    function handleBelowButton() {
        if (buttonIsEdit === false) {
            setDatabase([...auxDatabase])
        }
        setButtonIsEdit(!buttonIsEdit)
    }

    function handleSelectLabel(index) {
        const updatedDatabase = [...database];
        updatedDatabase[index].selected = !updatedDatabase[index].selected;
        setDatabase(updatedDatabase);
        setAuxDatabase(updatedDatabase)
    }

    function handleLabelEdit(index, newValue) {
        const auxDatabaseCopy = [...auxDatabase];
        auxDatabaseCopy[index] = { ...auxDatabaseCopy[index], value: newValue };
        setAuxDatabase(auxDatabaseCopy);
    }

    function handleDelete(labelIndex) {
        const filteredData = database.filter((_, index) => index !== labelIndex);
        const filteredaux = auxDatabase.filter((_, index) => index !== labelIndex);
        setDatabase(filteredData);
        setAuxDatabase(filteredaux)
    }
    
    return(
        <div ref={ref} id="DropdownPopup" className={styles.container}>
            <section className={styles.contents}>
                <SelectedLabels database={database} handleSelectLabel={handleSelectLabel}/>
                <input 
                    className = {styles.input} 
                    value={input}
                    onChange={(event) => setInput(event.target.value)} 
                    type="text" 
                    placeholder={database.length === 0 ? 'Create Label' : 'Create or find Label'}
                />

                {buttonIsEdit === true
                    ? <UnselectedLabels database={database} handleSelectLabel={handleSelectLabel} input={input}/>
                    : <EditableLabels database={database} auxDatabase={auxDatabase} handleLabelEdit={handleLabelEdit} handleDelete={handleDelete} input={input}/>
                }
                
                {input !== '' && 
                    <button 
                        className={database.some(label => label.value === input.trimStart()) || input.trimStart().length === 0 ? styles.buttonDisabled : styles.addButton}
                        type='button'
                        onClick={handleAddButton}
                        disabled={database.some(label => label.value === input.trimStart()) || input.trimStart().length === 0}
                    >
                        + Add as new label
                    </button>
                }
                <hr style={{ border: '0.1px solid black', width: '80%' }} />
                
                {buttonIsEdit === true
                ?
                    <button className={styles.editButton} onClick={handleBelowButton}>
                        Edit Labels
                    </button>
                :
                    <button className={styles.editButton} onClick={handleBelowButton}>
                        Apply
                    </button> 
                }
            </section>
        </div>
    )
})

export default DropdownPopup;

//Todo: pop-up de errores
//todo: js de validaciones