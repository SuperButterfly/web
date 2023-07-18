import React, {useState} from 'react'
import Selected from './Selected/Selected'
import Suggested from './Suggested/Suggested'
import Invite from './Invite/Invite'
import styles from './PeoplePopup.module.css'

// eslint-disable-next-line react/display-name
const PeoplePopup = React.forwardRef(({ props }, ref) => {
  
  const { cell, datatable, updateFromDropdown } = props
  const [input, setInput] = useState('')
  const [display, setDisplay] = useState('select');
  const [allPeople, setAllPeople] = useState([
    {name:'Pablo', surname:'Salituri', mail:'pablo@gmail.com'},
    {name:'Agustin', surname:'Chanta', mail:'agus@hotmail.com'},
    {name:'Benjamin', surname:'Castro', mail:'benja@gmail.com'}
  ])


  function handleInviteButton(event, displayValue) {
    //Evita que al clickearse, se cierre automáticamente el popup, ya que el botón no pertenece al mismo
    event.stopPropagation();
    setDisplay(displayValue)
  }
  
  function handleSelectPeople(row, column, event) {
    //Evita que al clickearse, se cierre automáticamente el popup, ya que el botón no pertenece al mismo
    event.stopPropagation();
    const mail = event.target.name;
    const database = JSON.parse(JSON.stringify(datatable))
    const auxCell = database[row][column]
    if (auxCell.value.some(selected => selected === mail))
      auxCell.value = auxCell.value.filter(selected => selected !== mail)
    else auxCell.value.push(mail)
    updateFromDropdown(auxCell, row, column)
  }


  return (
    <div ref={ref} id="PeoplePopup" className={styles.container}>
      {display === 'select'
      ?
        <section className={styles.contents}>
          <Selected
            cell={cell}
            datatable={datatable}
            handleSelectPeople={handleSelectPeople}
          />
          <input
            className={styles.input}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            placeholder='Search...'
          />

            <span className={styles.subtitle}>{input === '' ? 'Suggested People' : 'Found'}</span>
            <Suggested
              cell={cell}
              datatable={datatable}
              allPeople={allPeople}
              handleSelectPeople={handleSelectPeople}
              input={input}
            />
          
          <hr style={{ border: '0.1px solid black', width: '80%' }} />
            <button
              className={styles.button}
              type="button"
              onClick={(event) => handleInviteButton(event, 'invite')}
            >
              Invite new members
            </button>
        </section>
      :
        <section className={styles.contents}>
          <Invite setDisplay={setDisplay} allPeople={allPeople} setAllPeople={setAllPeople}/>
        </section>
      }
    </div>
  )
})

export default PeoplePopup
