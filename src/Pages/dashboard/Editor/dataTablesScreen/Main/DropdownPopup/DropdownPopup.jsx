import React, { useState, useEffect /* , useRef */ } from 'react'
import SelectedLabels from './SelectedLabels/SelectedLabels'
import UnselectedLabels from './UnselectedLabels/UnselectedLabels'
import EditableLabels from './EditableLabels/EditableLabels'
import styles from './DropdownPopup.module.css'

// eslint-disable-next-line react/display-name
const DropdownPopup = React.forwardRef(({ props }, ref) => {
  const { cell, datatable, updateFromDropdown } = props

  const [input, setInput] = useState('')
  // const [database, setDatabase] = useState([])
  const [auxDatabase, setAuxDatabase] = useState([]) // Se usa para guardar temporalmente los labels, hasta que se confirma su edicion
  const [buttonIsEdit, setButtonIsEdit] = useState(true)

  function handleAddButton(columnIndex) {
    // todo: optimizar quitando map
    datatable.map((row, rowIndex) => {
      return row.map((cell, index) => {
        if (index === columnIndex) {
          const auxCell = JSON.parse(JSON.stringify(cell))
          // console.log(auxCell);
          // eslint-disable-next-line no-prototype-builtins
          if (!auxCell.hasOwnProperty('columnLabels')) {
            auxCell.columnLabels = [input]
          } else {
            auxCell.columnLabels.push(input)
          }
          updateFromDropdown(auxCell, rowIndex, columnIndex)
        }
        return null
      })
    })
    setInput('')
  }

  function handleBelowButton() {
    if (buttonIsEdit === false) {
      // setDatabase([...auxDatabase])
    }
    setButtonIsEdit(!buttonIsEdit)
  }

  function handleSelectLabel(row, column, button) {
    const database = JSON.parse(JSON.stringify(datatable))
    const auxCell = database[row][column]
    if (auxCell.value.some((selected) => selected === button))
      auxCell.value = auxCell.value.filter((selected) => selected !== button)
    else auxCell.value.push(button)
    updateFromDropdown(auxCell, row, column)
  }

  function handleLabelEdit(row, column, index, newValue) {
    const auxDatabaseCopy = [...auxDatabase]
    const columnLabels = auxDatabase[row][column].columnLabels
    const newColumnLabels = [...columnLabels]
    newColumnLabels[index] = newValue
    auxDatabaseCopy[row][column].columnLabels = newColumnLabels // Actualizar el valor en auxDatabaseCopy
    // data[rowIndex].splice(columnIndex, 1, dropdownCell)
    setAuxDatabase(auxDatabaseCopy)
    console.log(auxDatabase[row][column].columnLabels)
    console.log(datatable[row][column].columnLabels)
  }

  /* function handleDelete (labelIndex) {
        const filteredData = database.filter((_, index) => index !== labelIndex)
        const filteredaux = auxDatabase.filter((_, index) => index !== labelIndex)
        setDatabase(filteredData)
        setAuxDatabase(filteredaux)
    } */

  useEffect(() => {
    setAuxDatabase(JSON.parse(JSON.stringify(datatable)))
  }, [])

  return (
    <div ref={ref} id="DropdownPopup" className={styles.container}>
      <section className={styles.contents}>
        <SelectedLabels
          cell={cell}
          datatable={datatable}
          handleSelectLabel={handleSelectLabel}
        />
        <input
          className={styles.input}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          // placeholder={database.length === 0 ? 'Create Label' : 'Create or find Label'}
        />

        {buttonIsEdit === true ? (
          <UnselectedLabels
            datatable={datatable}
            cell={cell}
            handleSelectLabel={handleSelectLabel}
            input={input}
          />
        ) : (
          <EditableLabels
            datatable={datatable}
            cell={cell}
            /* auxDatabase={auxDatabase} */ handleLabelEdit={handleLabelEdit}
            /* handleDelete={handleDelete} */ input={input}
          />
        )}

        {input !== '' && (
          <button
            // className={database.some(label => label.value === input.trimStart()) || input.trimStart().length === 0 ? styles.buttonDisabled : styles.addButton}
            type="button"
            onClick={() => handleAddButton(cell[1])}
            // disabled={database.some(label => label.value === input.trimStart()) || input.trimStart().length === 0}
          >
            + Add as new label
          </button>
        )}
        <hr style={{ border: '0.1px solid black', width: '80%' }} />

        {buttonIsEdit === true ? (
          <button className={styles.editButton} onClick={handleBelowButton}>
            Edit Labels
          </button>
        ) : (
          <button className={styles.editButton} onClick={handleBelowButton}>
            Apply
          </button>
        )}
      </section>
    </div>
  )
})

export default DropdownPopup

// Todo: pop-up de errores
// todo: js de validaciones

// validate
// delete
// edit
// revisar cuando se desplazan columnas
