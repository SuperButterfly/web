import React from 'react'
import style from './cell.module.css'
import Celltypes from '../../Main/CellTypes/Celltypes'

function Cell(data, columns, rows, rowIndex, key, handlers) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const commonProps = {
    className: `${style.input} ${
      handlers.getInputClassNames(rowIndex, key).byType
    } ${handlers.getInputClassNames(rowIndex, key).bySelected}`,
    name: `${alphabet[key]}${rowIndex + 1}`,
    value: data.value,
    onMouseEnter: () => handlers.handleRowHover(rowIndex),
    onMouseLeave: () => handlers.handleRowHover(-1),
    onFocus: () => handlers.handleOnFocus(rowIndex, key),
    onBlur: (event) => handlers.handleOnBlur(event.target),
    onDoubleClick: (event) => handlers.enableEdit(event.target),
    readOnly: true
  }
  return (
    <td
      name={`Cell${alphabet[key]}${rowIndex + 1}`}
      key={key}
      className={`${handlers.getCellClassNames(rowIndex, key).byType}
        ${
          rowIndex === handlers.selectedRow - 1
            ? style.rowSelected
            : handlers.getCellClassNames(rowIndex, key).bySelected
        } `}
    >
      {Celltypes(
        columns[key]?.type,
        commonProps,
        rows,
        rowIndex,
        key,
        handlers.handleCellValueChange,
        handlers.handlePopUp
      )}
    </td>
  )
}

export default Cell
