import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedColumn } from '../../../../../../redux/slices/datatableSlices'
import style from './ResizableColumns.module.css'

export default function ResizableColumn({
  column,
  selectedColumn,
  width,
  onMouseDown,
  columnIndex,
  sheet,
  children
}) {
  const dispatch = useDispatch()

  const handleCellMouseDown = (e) => {
    const boundingRect = e.target.getBoundingClientRect()
    const x = e.clientX - boundingRect.left
    const rightMargin = 7 // Ajusta este valor para establecer el margen desde el borde derecho

    if (x >= boundingRect.width - rightMargin) {
      // Activa el redimensionamiento de la columna solo si el cursor está cerca del borde derecho
      e.stopPropagation()
      onMouseDown(e, columnIndex)
    }
  }

  const handleSelect = (e) => {
    const colIndex = selectedColumn ? null : parseInt(e.target.id, 10)
    dispatch(setSelectedColumn({ id: colIndex, titleColumn: column.title }))
  }

  return (
    <th
      className={style.header}
      onClick={(e) => handleSelect(e)}
      onMouseDown={(e) => handleCellMouseDown(e)}
    >
      <input
        id={columnIndex}
        name={column.title}
        style={{ width: `${width}px` }}
        className={`${style.input} ${selectedColumn && style.titleColumn}`}
        type="text"
        value={column.title}
        readOnly
      />
    </th>
  )
}
