import React, { useEffect, useState } from 'react'
import style from './rows.module.css'
import Cell from '../Cell/Cell'
import ResizableRow from '../../Table/ResizableRows/ResizableRows'
import { useDispatch, useSelector } from 'react-redux'
import { handleRowSelect } from '../../../../../../redux/slices/datatableSlices'

export default function Rows({ sheet, handlers }) {
  const [rowHeights, setRowHeights] = useState([])
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1)
  //isRowSelected solo sirve para generar cambios que el componente pueda interpretar, para re-renderizarse

  const dispatch = useDispatch()

  const selectedRow = useSelector((state) => state.datatable.selectedRow)

  const handleFocusedRow = (rowIndex) => {
    dispatch(handleRowSelect(rowIndex))
  }
  //   const filteredData = rows.filter((row) =>
  //     row.some((cell) => {
  //       if (typeof cell.value === 'number' || typeof cell.value === 'boolean') {
  //         return cell.value.toString().toLowerCase().includes(searchTerm)
  //       } else return cell.value.toLowerCase().includes(searchTerm)
  //     })
  //   )
  const handleRowResize = (event, index) => {
    event.preventDefault() // Prevent text selection
    const startY = event.clientY
    const startHeight = rowHeights[index]

    const handleMouseMove = (e) => {
      const diff = e.clientY - startY
      const newHeight = startHeight + diff
      if (newHeight >= 30) {
        const newHeights = [...rowHeights]
        newHeights[index] = newHeight
        setRowHeights(newHeights)
      }
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  useEffect(() => {
    setRowHeights(Array(sheet.getData().length).fill(30))
  }, [])

  return (
    sheet &&
    sheet.getData().map((row, rowIndex) => (
      <ResizableRow
        height={rowHeights[rowIndex]}
        onMouseDown={(e) => handleRowResize(e, rowIndex)}
        key={rowIndex}
      >
        {/* <tr
        key={rowIndex}
        className={style.tr}
        // onMouseEnter={() => handleRowHover(rowIndex)}
        // onMouseLeave={() => handleRowHover(-1)}
        //   className={`${rowIndex === hoveredRowIndex ? style.hovered : ''}`}
      > */}
        <td className={style.rowNumber}>
          <input
            className={`${style.input} ${style.rowNumber} ${
              rowIndex === selectedRow /*sheet.selectedRow */ - 1
                ? style.titleColumn
                : ''
            }`}
            type="text"
            value={rowIndex + 1}
            onClick={(e) => handleFocusedRow(e.target.value)}
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
        {/* </tr> */}
      </ResizableRow>
    ))
  )
}
