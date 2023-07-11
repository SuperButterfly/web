import {useEffect, useState} from 'react'
import styles from './EditableLabels.module.css'


export default function EditableLabels ({ datatable, cell,setAuxDatabase }) {
  /* const row = JSON.parse(JSON.stringify(cell[0])); */
  /* const column = JSON.parse(JSON.stringify(cell[1])) */
  const database = JSON.parse(JSON.stringify(datatable))
  const [cellLabels, setCellLabels] = useState(null)
  
  function handleEdit(currentValue, newValue) {
    const cellLabelsCopy = { ...cellLabels };
    cellLabelsCopy[currentValue] = newValue;
    setCellLabels(cellLabelsCopy);
  }

  useEffect(() => {
    if (cellLabels !== null) {
      setAuxDatabase(cellLabels);
    }
  }, [cellLabels, setAuxDatabase]);
  
  useEffect(() => {
    const fila = cell[0];
    const columna = cell[1];
    const celda = database[fila][columna].columnLabels
    const object = {column: columna};
    
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
              {/* <button
                  name={index}
                  className={label.selected ? styles.blockedButton : styles.deleteButton}
                  onClick={(event) => handleDelete(parseInt(event.target.name, 10))}
                  disabled={label.selected}
              >
                  x
              </button> */}
            </section>
          )
        }
        else return null
      })
  );
}
