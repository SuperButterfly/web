import React from 'react'
import style from './header.module.css'

export default function Header({ sheet }) {
  // const headerLetters = alphabet.slice(0, numberOfColumns); return (
  return (
    <tr>
      <th className={style.header}></th>
      {/* {headerLetters.split("").map((letter, index) => ( */}
      {sheet.getColumns().map((column, index) => (
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
      ))}
    </tr>
  )
}
