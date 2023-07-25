import React, { useEffect, useState } from 'react'
import ResizableRow from '../../Table/ResizableRows/ResizableRows'
import { useSelector } from 'react-redux'
// import style from './rows.module.css'
// import Cell from '../Cell/Cell'
// import { handleRowSelect } from '../../../../../../redux/slices/datatableSlices'

export default function Rows({ sheet, handlers }) {
  const selectedRow = useSelector((state) => state.datatable.selectedRow)
  //isRowSelected solo sirve para generar cambios que el componente pueda interpretar, para re-renderizarse
  // const dispatch = useDispatch()
  // const handleFocusedRow = (rowIndex) => {
  //   dispatch(handleRowSelect(rowIndex))
  // }
  //   const filteredData = rows.filter((row) =>
  //     row.some((cell) => {
  //       if (typeof cell.value === 'number' || typeof cell.value === 'boolean') {
  //         return cell.value.toString().toLowerCase().includes(searchTerm)
  //       } else return cell.value.toLowerCase().includes(searchTerm)
  //     })
  //   )
  // const handleRowResize = (event, index) => {
  //   event.preventDefault() // Prevent text selection
  //   const startY = event.clientY
  //   const startHeight = rowHeights[index]

  //   const handleMouseMove = (e) => {
  //     const diff = e.clientY - startY
  //     const newHeight = startHeight + diff
  //     if (newHeight >= 30) {
  //       const newHeights = [...rowHeights]
  //       newHeights[index] = newHeight
  //       setRowHeights(newHeights)
  //     }
  //   }
  //   const handleMouseUp = () => {
  //     document.removeEventListener('mousemove', handleMouseMove)
  //     document.removeEventListener('mouseup', handleMouseUp)
  //   }

  //   document.addEventListener('mousemove', handleMouseMove)
  //   document.addEventListener('mouseup', handleMouseUp)
  // }

  useEffect(() => {
    console.log('TrackRender>Rowsssssss')
  }, [])

  return (
    <tbody>
      {sheet &&
        sheet.getData().map((row, rowIndex) => (
          <ResizableRow
            key={rowIndex}
            rowIndex={rowIndex}
            sheet={sheet}
            row={row}
            handlers={handlers}
            selected={Boolean(selectedRow === rowIndex + 1)}
            // height={rowHeights[rowIndex]}
            // onMouseDown={(e) => handleRowResize(e, rowIndex)}
            // className={style.tr}
            //   className={`${rowIndex === hoveredRowIndex ? style.hovered : ''}`}
            // onMouseEnter={() => handleRowHover(rowIndex)}
            // onMouseLeave={() => handleRowHover(-1)}
          />
        ))}
    </tbody>
  )
}
