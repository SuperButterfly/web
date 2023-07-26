import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './header.module.css'
import ResizableColumn from '../../Table/ResizableColumns/ResizableColumns'

export default function Header({ sheet }) {
  const selectedColumn = useSelector(
    (state) => state.datatable.selectedColumn.id
  )

  const [columnWidths, setColumnWidths] = useState([])
  const handleColumnResize = (event, index) => {
    event.preventDefault() // Previene la selección de texto
    const startX = event.clientX
    const startWidth = columnWidths[index]

    const handleMouseMove = (e) => {
      const diff = e.clientX - startX
      const newWidth = startWidth + diff
      if (newWidth >= 100) {
        const newWidths = [...columnWidths]
        newWidths[index] = newWidth
        setColumnWidths(newWidths)
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
    setColumnWidths(Array(sheet.getColumns().length).fill(100))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <tr>
      <th className={style.header}></th>
      {/* {headerLetters.split("").map((letter, index) => ( */}
      {sheet.getColumns().map((column, index) => (
        <ResizableColumn
          key={column.title}
          columnIndex={index}
          selectedColumn={Boolean(selectedColumn === index)}
          column={column}
          width={columnWidths[index]}
          onMouseDown={(e) => handleColumnResize(e, index)}
          sheet={sheet}
          // selectedColumn={sheet.selectedColumn}
          // handleColumnSelect={handleColumnSelect}
        />
      ))}
    </tr>
  )
}
