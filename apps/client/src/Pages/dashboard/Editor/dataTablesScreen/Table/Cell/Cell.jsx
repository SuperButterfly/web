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
  selectedColumn,
  handlers,
  selectedRow,
  focusedCell
}) => {
  const dispatch = useDispatch()
  const [cellValue, setCellValue] = useState(cell.value)

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const handleFocusedCell = (rowIndex, columnIndex) => {
    // if (sheet.selectedColumn !== null) handleColumnUnselect()
    // if (sheet.selectedRow !== null) handleRowUnselect()
    /* sheet.selectedCell = [rowIndex, columnIndex] */
    dispatch(handleOnFocus({ rowIndex: rowIndex, columnIndex: columnIndex }))
  }

  const handleOnBlur = (element, rowIndex, columnIndex) => {
    // CellValue es el valor en cada momento, y cell.value es el valor original
    if (cellValue !== cell.value)
      sheet.getData()[rowIndex][columnIndex].value = cellValue
    sheet.selectedCell = [null, null]
    element.setAttribute('readonly', 'readonly')
  }

  function enableEdit(element) {
    element.removeAttribute('readonly')
  }


  const getCellClassNames = (rowIndex, columnIndex) => {
    const classNames = [];
  
    if (selectedColumn) {
      classNames.push(style.columnSelected);
    } else {
      if (selectedRow) {
        classNames.push(style.rowSelected);
      } else {
        if (
          sheet.getData()[rowIndex][columnIndex].type === 'priority' ||
          sheet.getData()[rowIndex][columnIndex].type === 'state'
        ) {
          switch (sheet.getData()[rowIndex][columnIndex].value) {
            case 'high':
            case 'unstarted':
              classNames.push(style.red);
              break;
            case 'medium':
            case 'in progress':
              classNames.push(style.yellow);
              break;
            case 'low':
            case 'complete':
              classNames.push(style.green);
              break;
            default:
              break;
          }
        }
  
        if (focusedCell && rowIndex === focusedCell[0] && columnIndex === focusedCell[1]) {
          classNames.push(style.selectedCell);
        } else {
          classNames.push(style.unselectedCell);
        }
      }
    }
  
    return classNames.join(' ');
  };


  const handleCellValueChange = (/* rowIndex, columnIndex,  */ value) => {
    setCellValue(value)
  }

  const commonProps = {
    className: `${style.input} ${getCellClassNames(rowIndex, columnIndex)}`,
    name: `${alphabet[columnIndex]}${rowIndex + 1}`,
    value: cellValue,
    onFocus: () => handleFocusedCell(rowIndex, columnIndex),
    onBlur: (event) => handleOnBlur(event.target, rowIndex, columnIndex),
    onDoubleClick: (event) => enableEdit(event.target),
    readOnly: true
  };
  

  // useEffect(() => {
  //   console.log('Componente montado o actualizado')
  //   return () => {
  //     console.log('Componente desmontado')
  //   }
  // })

  // console.log('Componente renderizado')

  return (
    <td
      name={`Cell${alphabet[columnIndex]}${rowIndex + 1}`}
      key={columnIndex}
      onClick={(e) => handleFocusedCell(rowIndex, columnIndex)}
      className= {style.cell}
    >
      {Celltypes(
        sheet.getColumns()[columnIndex]?.type,
        commonProps,
        sheet.getData(),
        rowIndex,
        columnIndex,
        handleCellValueChange,
        handlers
      )}
    </td>
  )
}

export default memo(Cell)
