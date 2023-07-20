import React, { useEffect, useState } from 'react'
import style from './header.module.css'
import ResizableRow from '../../Table/ResizableRows/ResizableRows'
import ResizableColumn from '../../Table/ResizableColumns/ResizableColumns'

export default function Header({ sheet }) {
  const [columnWidths, setColumnWidths] = useState([])
  const handleColumnResize = (event, index) => {
    event.preventDefault() // Prevenir la selección de texto
    const startX = event.clientX
    const startWidth = columnWidths[index]

    const handleMouseMove = (e) => {
      const diff = e.clientX - startX
      const newWidth = startWidth + diff
      if (newWidth >= 60) {
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
    setColumnWidths(Array(sheet.getColumns().length).fill(60))
  }, [])
  // const headerLetters = alphabet.slice(0, numberOfColumns); return (
  return (
    <tr>
      <th className={style.header}></th>
      {/* {headerLetters.split("").map((letter, index) => ( */}
      {sheet.getColumns().map((column, index) => (
        <ResizableColumn
          key={column.title}
          width={columnWidths[index]}
          onMouseDown={(e) => handleColumnResize(e, index)}
          /* onMouseDown={(e) => console.log('hola')} */
          columnIndex={index}
          sheet={sheet}
          // selectedColumn={sheet.selectedColumn}
          // handleColumnSelect={handleColumnSelect}
        >
          <th
            key={column.title}
            className={` ${style.header} ${style.columnName} ${
              index === sheet.selectedColumn?.id ? style.titleColumn : ''
              // index == selectedColumn?.id ? style.titleColumn : ''
            } `}
            onClick={(event) =>
              (sheet.selectedColumn = {
                columnTitle: event.target.value,
                id: event.target.id
              })
            }
          >
            <input
              id={index}
              name={column.title}
              className={`${style.input} ${style.columnName} ${
                index === sheet.selectedColumn?.id ? style.titleColumn : ''
                // index == selectedColumn?.id ? style.titleColumn : ''
              }`}
              type="text"
              value={column.title}
              readOnly
            />
          </th>
        </ResizableColumn>
      ))}
    </tr>
  )
}
