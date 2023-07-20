import React, { useState } from 'react'
import style from './rows.module.css'
import Cell from '../Cell/Cell'

export default function Rows({ sheet, handlers }) {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1)
  const handleRowHover = (rowIndex) => {
    setHoveredRowIndex(rowIndex)
  }
  //   const filteredData = rows.filter((row) =>
  //     row.some((cell) => {
  //       if (typeof cell.value === 'number' || typeof cell.value === 'boolean') {
  //         return cell.value.toString().toLowerCase().includes(searchTerm)
  //       } else return cell.value.toLowerCase().includes(searchTerm)
  //     })
  //   )

  return sheet.getData().map((row, rowIndex) => (
    <tr
      key={rowIndex}
      className={style.tr}
      // onMouseEnter={() => handleRowHover(rowIndex)}
      // onMouseLeave={() => handleRowHover(-1)}
      //   className={`${rowIndex === hoveredRowIndex ? style.hovered : ''}`}
    >
      <td className={style.rowNumber}>
        <input
          /* The input belongs to the row number, but it made no sense to create a new class */
          className={`${style.input} ${style.rowNumber} ${
            rowIndex === sheet.selectedRow - 1 ? style.titleColumn : ''
          }`}
          type="text"
          value={rowIndex + 1}
          onClick={(event) =>
            (sheet.setSelectedRow = parseInt(event.target.value, 10))
          }
          readOnly
        />
      </td>
      {row.map((cell, columnIndex) => (
        <Cell
          key={columnIndex}
          cell={cell}
          sheet={sheet}
          columnIndex={columnIndex}
          rowIndex={rowIndex}
          handlers={{ ...handlers, hoveredRowIndex }}
        />
      ))}
    </tr>
  ))
}
