import React from 'react'
import styles from '../SidePanel'

function InputText({label, value, onChange}) {
    return (
        <div className={styles.fieldFormContainer}>
            <span>{label}</span>
            <input
                type="text"
                placeholder=""
                className={styles.fieldFormTextinput}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputText