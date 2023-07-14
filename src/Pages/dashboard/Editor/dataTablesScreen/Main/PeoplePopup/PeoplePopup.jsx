import React/* , { useState, useEffect } */ from 'react'
import Selected from './Selected/Selected'
import Suggested from './Suggested/Suggested'
import Invite from './Invite/Invite'
import styles from './PeoplePopup.module.css'

// eslint-disable-next-line react/display-name
const PeoplePopup = React.forwardRef(({ props }, ref) => {
  const allPeople = [
    {name:'Pablo', surname:'Salituri', mail:'pablo@gmail.com'},
    {name:'Agustin', surname:'Chanta', mail:'agus@hotmail.com'},
    {name:'Benjamin', surname:'Castro', mail:'benja@gmail.com'}
  ]
   const { cell, datatable, updateFromDropdown } = props
//   const hasLabelsCreated = (datatable[cell[0]]?.[cell[1]]?.columnLabels?.length) ?? 0;
//   const labelsCreated = (datatable[cell[0]]?.[cell[1]]?.columnLabels) ?? [];
//   const [input, setInput] = useState('')
//   const [auxDatabase, setAuxDatabase] = useState(null) // Se usa para guardar temporalmente los labels, hasta que se confirma su edicion
//   const [buttonIsEdit, setButtonIsEdit] = useState(true);
//   const [placeholder, setPlaceholder] = useState('Create Label')

//   function handleAddButton(columnIndex) {
//     // todo: optimizar quitando map
//     datatable.map((row, rowIndex) => {
//       return row.map((cell, index) => {
//         if (index === columnIndex) {
//           const auxCell = JSON.parse(JSON.stringify(cell))
//           // eslint-disable-next-line no-prototype-builtins
//           if (!auxCell.hasOwnProperty('columnLabels')) {
//             auxCell.columnLabels = [input.trimStart()]
//           } else {
//             auxCell.columnLabels.push(input.trimStart())
//           }
//           updateFromDropdown(auxCell, rowIndex, columnIndex)
//         }
//         return null
//       })
//     })
//     setInput('')
//   }
  
  
  function handleSelectPeople(row, column, mail) {
    const database = JSON.parse(JSON.stringify(datatable))
    const auxCell = database[row][column]
    /* const person = findPersonByMail(mail) */
    if (auxCell.value.some(selected => selected === mail))
      auxCell.value = auxCell.value.filter(selected => selected !== mail)
    else auxCell.value.push(mail)
    updateFromDropdown(auxCell, row, column)
  }

  /* function findPersonByMail(mail) {
    for(const person of allPeople) {
      if (person.mail === mail)
        return person 
    }
  } */

    
//   function handleLabelEdit() {
//     const database = JSON.parse(JSON.stringify(datatable));
//     database.forEach((row, rowIndex) => {
//       /* Actualiza el arreglo de columnLabels */
//       const columnLabels = row[auxDatabase.column].columnLabels;
//       columnLabels.forEach((columnLabel, i) => {
//         row[auxDatabase.column].columnLabels[i] = auxDatabase[columnLabel];
//       });

//       /* Actualiza el arreglo de selected labels */
//       const selectedArray = row[auxDatabase.column].value
//       for (let i = 0; i < selectedArray.length; i++) {
//         const value = selectedArray[i];
//         if (value in auxDatabase) {
//           selectedArray[i] = auxDatabase[value];
//         }
//       }
//       updateFromDropdown(row[auxDatabase.column], rowIndex, auxDatabase.column);
//     });
//   }


//   useEffect(() => {
//     hasLabelsCreated === 0 ? setPlaceholder('Create Label') : setPlaceholder('Create or find Label')
//   }, [hasLabelsCreated]);
  

  return (
    <div ref={ref} id="PeoplePopup" className={styles.container}>
      <section className={styles.contents}>
        <Selected
          cell={cell}
          datatable={datatable}
          handleSelectPeople={handleSelectPeople}
        />
        <input
          className={styles.input}
          /* value={input}
          onChange={(event) => setInput(event.target.value)} */
          type="text"
          /* placeholder={placeholder} */
        />

          Suggested People
          <Suggested
            cell={cell}
            datatable={datatable}
            allPeople={allPeople}
            handleSelectPeople={handleSelectPeople}
            /* input={input} */
          />
        
        <hr style={{ border: '0.1px solid black', width: '80%' }} />
        {/* {input !== '' && ( */}
          <button
            /* className={labelsCreated.some(label => label === input.trimStart()) || input.trimStart().length === 0 ? styles.buttonDisabled : styles.addButton} */
            type="button"
            /* onClick={() => handleAddButton(cell[1])}
            disabled={labelsCreated.some(label => label === input.trimStart()) || input.trimStart().length === 0} */
          >
            Invite new members
          </button>
        {/* )} */}
        
      </section>
    </div>
  )
})

export default PeoplePopup
