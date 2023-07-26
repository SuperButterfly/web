import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleOnFocus } from '../../../../../../redux/slices/datatableSlices'
import style from './cell.module.css'
import Celltypes from '../../Main/CellTypes/Celltypes'

const Cell = ({
  cell,
  sheet,
  rowIndex,
  columnIndex,
  handlers,
  selectedRow,
  focusedCell
}) => {
  const dispatch = useDispatch()
  const selectedColumn = useSelector((state) => state.datatable.selectedColumn)
  const [cellValue, setCellValue] = useState(cell.value);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const handleFocusedCell = (rowIndex, columnIndex) => {
    // if (sheet.selectedColumn !== null) handleColumnUnselect()
    // if (sheet.selectedRow !== null) handleRowUnselect()
    /* sheet.selectedCell = [rowIndex, columnIndex] */
    dispatch(handleOnFocus({ rowIndex: rowIndex, columnIndex: columnIndex }))
  }

  const handleOnBlur = (element, rowIndex, columnIndex) => {
    sheet.getData()[rowIndex][columnIndex].value = cellValue
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
      focusedCell &&
      rowIndex === focusedCell[0] &&
      columnIndex === focusedCell[1]
    ) {
      classNames.bySelected = style.selectedCell
    } else if (selectedRow) {
      classNames.bySelected = style.rowSelected
    } else if (columnIndex === selectedColumn?.id) {
      classNames.bySelected = style.columnSelected
    } else classNames.bySelected = style.unselectedCell

    return classNames
  }


  const handleCellValueChange = (/* rowIndex, columnIndex,  */value) => {
    setCellValue(value);
  }

  const commonProps = {
    className: `${style.input}`,
    name: `${alphabet[columnIndex]}${rowIndex + 1}`,
    value: cellValue,
    onFocus: () => handleFocusedCell(rowIndex, columnIndex),
    onBlur: (event) => handleOnBlur(event.target, rowIndex, columnIndex),
    onDoubleClick: (event) => enableEdit(event.target),
    readOnly: true
  }

  return (
    <td
      name={`Cell${alphabet[columnIndex]}${rowIndex + 1}`}
      key={columnIndex}
      onClick={(e) => handleFocusedCell(rowIndex, columnIndex)}
      className={`${getCellClassNames(rowIndex, columnIndex).byType}
        ${getCellClassNames(rowIndex, columnIndex).bySelected} `}
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
  );
};

export default memo(Cell);
