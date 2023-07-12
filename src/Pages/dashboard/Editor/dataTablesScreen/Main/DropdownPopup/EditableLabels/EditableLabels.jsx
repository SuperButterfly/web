import {useEffect, useState} from 'react'
import styles from './EditableLabels.module.css'


export default function EditableLabels ({ datatable, cell, setAuxDatabase, handleDelete }) {
  /* const row = JSON.parse(JSON.stringify(cell[0])); */
  /* const column = JSON.parse(JSON.stringify(cell[1])) */
  const database = JSON.parse(JSON.stringify(datatable))
  const [cellLabels, setCellLabels] = useState(null)
  
  /* Lee en tiempo real los inputs editados y los guarda en un estado local, que despues se enviará a auxDatabase */
  function handleEdit(currentValue, newValue) {
    const cellLabelsCopy = { ...cellLabels };
    cellLabelsCopy[currentValue] = newValue;
    setCellLabels(cellLabelsCopy);
  }

  function labelIsUsed(labelToDelete) {
    const column = cell[1]
    for (const row of database) {
      if (row[column].value.some(selectedLabel => selectedLabel === labelToDelete))
        return true
    }
    return false
  }

  /* Actualiza auxDatabase con los valores actuales de los inputs editados */
  useEffect(() => {
    if (cellLabels !== null) {
      setAuxDatabase(cellLabels);
    }
  }, [cellLabels, setAuxDatabase]);
  

  /* Cuando renderiza por primera vez, crea un objeto cuyas propiedades son las etiquetas creadas, listas para editar */
  useEffect(() => {
    const row = cell[0];
    const column = cell[1];
    const celda = database[row][column].columnLabels
    const object = {column: column};
    
    for (let i = 0; i < celda.length; i++) {
      object[celda[i]] = celda[i];
    }
    setCellLabels(object)
  }, [cell])

  return (        
      cellLabels !== null && Object.keys(cellLabels).map((value, index) => {
        if (value !== 'column') {
          return(
            <section key={index}>
              <input
                  name={value}
                  className={styles.editInput}
                  value={cellLabels[value]}
                  onChange={(event) => handleEdit(value, event.target.value)}
              />
              <button
                  name={value}
                  className={labelIsUsed(value) ? styles.blockedButton : styles.deleteButton}
                  onClick={(event) => handleDelete(event.target.name, cell[1])}
                  disabled={labelIsUsed(value)}
              >
                  x
              </button>
            </section>
          )
        }
        else return null
      })
  );
}
