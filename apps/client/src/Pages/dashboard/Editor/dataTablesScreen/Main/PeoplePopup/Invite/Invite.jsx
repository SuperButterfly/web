import { useState } from 'react'
import styles from './Invite.module.css'

export default function Invite({setDisplay, invitePerson}) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const [input, setInput] = useState('')
    const [validAddress, setValidAddress] = useState(false)

    function inputHandler(value) {
        setInput(value);
        setValidAddress(regexEmail.test(value))
    }

    function handleButtons(event, value) {
        //Evita que al clickearse, se cierre automáticamente el popup, ya que el botón no pertenece al mismo
        event.stopPropagation();
        if (value === 'invite')
            invitePerson(input);
        setInput('');
        setDisplay('select')
    }

    return(
        <div>
            <span className={styles.subtitle}>Write an email address for the invitation</span>
            <input
                className={styles.input}
                value={input}
                onChange={(event) => inputHandler(event.target.value)}
                type="text"
                placeholder='Enter e-mail address'
            />
            <button className={styles.cancel} onClick={(event) => handleButtons(event, 'cancel')}>Cancel</button>
            <button
                className={validAddress ? styles.invite : styles.inviteDisabled}
                disabled={!validAddress}
                onClick={(event) => handleButtons(event, 'invite')}
            >
                Invite new member
            </button>
        </div>
    )
}