import { useEffect, useState } from 'react'
import styles from './EditableLabels.module.css'

export default function EditableLabels({
  sheet,
  datatable,
  // cell,
  setAuxDatabase,
  handleDelete
}) {
  const database = JSON.parse(JSON.stringify(datatable))
  const [cellLabels, setCellLabels] = useState(null)

  /* Lee en tiempo real los inputs editados y los guarda en un estado local, que despues se enviará a auxDatabase */
  function handleEdit(currentValue, newValue) {
    const cellLabelsCopy = { ...cellLabels }
    cellLabelsCopy[currentValue] = newValue
    setCellLabels(cellLabelsCopy)
  }

  function handleLocalDelete(labelName, column) {
    const cellLabelsCopy = { ...cellLabels }
    delete cellLabelsCopy[labelName]
    setCellLabels(cellLabelsCopy)
    handleDelete(labelName, column)
  }

  function labelIsUsed(labelToDelete) {
    const column = sheet?.selectedCell[1]
    for (const row of database) {
      if (
        row[column].value.some(
          (selectedLabel) => selectedLabel === labelToDelete
        )
      )
        return true
    }
    return false
  }

  /* Actualiza auxDatabase con los valores actuales de los inputs editados */
  useEffect(() => {
    if (cellLabels !== null) {
      setAuxDatabase(cellLabels)
    }
  }, [database])

  /* Cuando renderiza por primera vez, crea un objeto cuyas propiedades son las etiquetas creadas, listas para editar */
  useEffect(() => {
    const row = sheet?.selectedCell[0]
    const column = sheet?.selectedCell[1]
    const celda = database[row][column].columnLabels
    const object = { column: column }

    if (celda && celda.length) {
      for (let i = 0; i < celda.length; i++) {
        object[celda[i]] = celda[i]
      }
      setCellLabels(object)
    }
  }, [])

  return (
    cellLabels !== null &&
    Object.keys(cellLabels).map((value, index) => {
      if (value !== 'column') {
        return (
          <section key={index}>
            <input
              name={value}
              className={styles.editInput}
              value={cellLabels[value]}
              onChange={(event) => handleEdit(value, event.target.value)}
            />
            <button
              name={value}
              className={
                labelIsUsed(value) ? styles.blockedButton : styles.deleteButton
              }
              onClick={(event) =>
                handleLocalDelete(event.target.name, sheet?.selectedCell[1])
              }
              disabled={labelIsUsed(value)}
            >
              x
            </button>
          </section>
        )
      } else return null
    })
  )
}
