import React from 'react'
import {useDispatch} from 'react-redux';
import { setSelectedColumn } from '../../../../../../redux/slices/datatableSlices';
import styles from './ResizableColumns.module.css'

export default function ResizableColumn({
  width,
  onMouseDown,
  columnIndex,
  sheet,
  children
}) {

  const dispatch = useDispatch();
  

  const handleCellMouseDown = (e, index) => {
    const boundingRect = e.target.getBoundingClientRect()
    const x = e.clientX - boundingRect.left
    const rightMargin = 12 // Ajusta este valor para establecer el margen desde el borde derecho

    if (x >= boundingRect.width - rightMargin) {
      // Activa el redimensionamiento de la columna solo si el cursor está cerca del borde derecho
      e.stopPropagation()
      onMouseDown(e, index)
    }
  }

  return (
    <th
      
      className={styles.header}
      onClick={event => 
        dispatch(setSelectedColumn({
          columnTitle: event.target.value,
          id: parseInt(event.target.id,10)
        }))
      }
    >
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          onMouseDown: handleCellMouseDown,
          style:{ width: `${width}px` }
          /* style: { cursor: 'column-resize' } */
        })
      })}
    </th>
  )
}
