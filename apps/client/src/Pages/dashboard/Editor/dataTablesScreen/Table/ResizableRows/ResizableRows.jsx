import React, { memo, useEffect, useState } from 'react'
import style from './resizableRows.module.css'
import { handleRowSelect } from '../../../../../../redux/slices/datatableSlices'
import Cell from '../Cell/Cell'
import { useDispatch } from 'react-redux'

const ResizableRow = memo(function ({
  row,
  rowIndex,
  selected,
  sheet,
  handlers,
  children
}) {
  const [rowHeights, setRowHeights] = useState([])
  // const [hoveredRowIndex, setHoveredRowIndex] = useState(-1)
  const dispatch = useDispatch()
  const onMouseDown = (e) => handleRowResize(e, rowIndex)
  /* const handleMouseDown = (e) => {
      e.stopPropagation();
      onMouseDown(e);
    }; */

  const handleSelect = (e) => {
    const rowIndex = selected ? null : parseInt(e, 10)
    dispatch(handleRowSelect(rowIndex))
    // setHoveredRowIndex(rowIndex)
  }

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

  const handleCellMouseDown = (e) => {
    const boundingRect = e.target.getBoundingClientRect()
    const y = e.clientY - boundingRect.top
    const bottomMargin = 12 // Adjust this value to set the margin from the bottom

    if (y >= boundingRect.height - bottomMargin) {
      // Activate the row resize only if the cursor is close to the bottom edge
      e.stopPropagation()
      onMouseDown(e)
    }
  }

  useEffect(() => {
    console.log('TrackRender>ResizableRowsssssss')
    setRowHeights(Array(sheet.getData().length).fill(30))
  }, [sheet])

  return (
    <tr
      className={style.tr}
      style={{ height: `${rowHeights[rowIndex]}px` }}
      onMouseDown={(e) => handleRowResize(e, rowIndex)}
    >
      <td className={style.rowNumber}>
        <input
          className={`${style.input} ${style.rowNumber} ${
            selected ? style.titleColumn : ''
          }`}
          type="text"
          value={rowIndex + 1}
          onClick={(e) => handleSelect(e.target.value)}
          onMouseDown={handleCellMouseDown}
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
          handlers={{ ...handlers }}
        />
      ))}
    </tr>
  )
})
export default ResizableRow
