import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleOnFocus } from '../../../../../../redux/slices/datatableSlices'
import style from './cell.module.css'
import Celltypes from '../../Main/CellTypes/Celltypes'

function Cell({ cell, sheet, rowIndex, columnIndex, handlers }) {
  const dispatch = useDispatch()
  const focusedCell = useSelector((state) => state.datatable.focusedCell)
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const [isInputFocused, setIsInputFocused] = useState(false)

  const selectedRow = useSelector((state) => state.datatable.selectedRow)

  const handleFocusedCell = (rowIndex, columnIndex) => {
    // if (sheet.selectedColumn !== null) handleColumnUnselect()
    // if (sheet.selectedRow !== null) handleRowUnselect()
    setIsInputFocused(true)
    /* sheet.selectedCell = [rowIndex, columnIndex] */
    dispatch(handleOnFocus({ rowIndex: rowIndex, columnIndex: columnIndex }))
  }

  const handleOnBlur = (element) => {
    setIsInputFocused(false)
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
      rowIndex + 1 === selectedRow /* sheet.selectedRow */
    ) {
      classNames.bySelected = style.rowSelected
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
    onFocus: () => handleFocusedCell(rowIndex, columnIndex),
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
      {/* Render a hidden element that will update when the input is focused */}
      {/* {isInputFocused && <div style={{ display: 'none' }} />} */}
    </td>
  )
}

export default Cell
