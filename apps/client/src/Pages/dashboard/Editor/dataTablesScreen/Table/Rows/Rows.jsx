import React from 'react'
import style from './row.module.css'
import Cell from '../Cell/Cell'

export default function Rows(rows, columns, handlers) {
  //   const filteredData = rows.filter((row) =>
  //     row.some((cell) => {
  //       if (typeof cell.value === 'number' || typeof cell.value === 'boolean') {
  //         return cell.value.toString().toLowerCase().includes(searchTerm)
  //       } else return cell.value.toLowerCase().includes(searchTerm)
  //     })
  //   )

  return (
    <div className={style.container}>
      {rows.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className={style.tr}
          //   className={`${rowIndex === hoveredRowIndex ? style.hovered : ''}`}
        >
          <td className={style.rowNumber}>
            <input
              /* The input belongs to the row number, but it made no sense to create a new class */
              className={`${style.input} ${style.rowNumber} ${
                rowIndex === handlers.selectedRow - 1 ? style.titleColumn : ''
              }`}
              type="text"
              value={rowIndex + 1}
              onClick={(event) => handlers.handleRowSelect(event)}
              readOnly
            />
          </td>
          {row.map((cell, columnIndex) => (
            <Cell
              data={cell}
              columns={columns}
              rows={rows}
              key={columnIndex}
              rowIndex={rowIndex}
              handlers={handlers}
            />
          ))}
        </tr>
      ))}
    </div>
  )
}
