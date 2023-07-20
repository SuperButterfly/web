import React from 'react'
import style from './cell.module.css'
import Celltypes from '../../Main/CellTypes/Celltypes'

function Cell({ cell, sheet, rowIndex, columnIndex, handlers }) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const handleOnFocus = (rowIndex, columnIndex) => {
    // if (sheet.selectedColumn !== null) handleColumnUnselect()
    // if (sheet.selectedRow !== null) handleRowUnselect()
    sheet.selectedCell = [rowIndex, columnIndex]
  }

  const handleOnBlur = (element) => {
    sheet.selectedCell = [null, null]
    element.setAttribute('readonly', 'readonly')
  }

  function enableEdit(element) {
    element.removeAttribute('readonly')
  }

  const getCellClassNames = (rowIndex, columnIndex) => {
    const classNames = {}

    if (
      sheet.getData()[rowIndex][columnIndex].type === 'priority' ||
      sheet.getData()[rowIndex][columnIndex].type === 'state'
    ) {
      switch (sheet.getData()[rowIndex][columnIndex].value) {
        case 'high':
        case 'unstarted':
          classNames.byType = style.red
          break
        case 'medium':
        case 'in progress':
          classNames.byType = style.yellow
          break
        case 'low':
        case 'complete':
          classNames.byType = style.green
          break
        default:
          break
      }
    }

    if (
      sheet.selectedCell &&
      rowIndex === sheet.selectedCell[0] &&
      columnIndex === sheet.selectedCell[1]
    ) {
      classNames.bySelected = style.selectedCell
    } else if (
      sheet.getColumns()[columnIndex].title ===
        sheet.selectedColumn?.columnTitle ||
      rowIndex + 1 === sheet.selectedRow
    ) {
      classNames.bySelected = style.selectedColumn
    } else {
      classNames.bySelected = style.unselectedCell
    }

    return classNames
  }

  const getInputClassNames = (rowIndex, columnIndex) => {
    const classNames = {}

    if (
      sheet.getData()[rowIndex][columnIndex].type === 'priority' ||
      sheet.getData()[rowIndex][columnIndex].type === 'state'
    ) {
      switch (sheet.getData()[rowIndex][columnIndex].value) {
        case 'high':
        case 'unstarted':
          classNames.byType = style.red
          break
        case 'medium':
        case 'in progress':
          classNames.byType = style.yellow
          break
        case 'low':
        case 'complete':
          classNames.byType = style.green
          break
        default:
          break
      }
    }

    if (
      sheet.getColumns()[columnIndex].title ===
        sheet.selectedColumn?.columnTitle ||
      rowIndex + 1 === sheet.selectedRow
    ) {
      classNames.bySelected = style.selectedColumn
    } else if (
      rowIndex === handlers.hoveredRowIndex &&
      sheet.getData()[rowIndex][columnIndex].type !== 'priority' &&
      sheet.getData()[rowIndex][columnIndex].type !== 'state'
    ) {
      classNames.bySelected = style.hovered
    }

    return classNames
  }

  const handleCellValueChange = (rowIndex, columnIndex, value) => {
    sheet.getData()[rowIndex][columnIndex].value = value
  }

  const commonProps = {
    className: `${style.input} ${
      getInputClassNames(rowIndex, columnIndex).byType
    } ${getInputClassNames(rowIndex, columnIndex).bySelected}`,
    name: `${alphabet[columnIndex]}${rowIndex + 1}`,
    value: cell.value,
    onFocus: () => handleOnFocus(rowIndex, columnIndex),
    onBlur: (event) => handleOnBlur(event.target),
    onDoubleClick: (event) => enableEdit(event.target),
    readOnly: true
  }

  return (
    <td
      name={`Cell${alphabet[columnIndex]}${rowIndex + 1}`}
      key={columnIndex}
      className={`${getCellClassNames(rowIndex, columnIndex).byType}
        ${
          rowIndex === sheet.selectedRow - 1
            ? style.rowSelected
            : getCellClassNames(rowIndex, columnIndex).bySelected
        } `}
    >
      {Celltypes(
        sheet.getColumns()[columnIndex]?.type,
        commonProps,
        sheet.getData(),
        rowIndex,
        columnIndex,
        handleCellValueChange,
        handlers.handlePopUp
      )}
    </td>
  )
}

export default Cell
