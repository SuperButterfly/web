import { Fragment, useContext, useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDataStore } from '../../../../../store/SyncedProvider'
import Table from '../Table/Table'
import YesNoAlert from '../CustomAlerts/YesNoAlert'
import OkOnlyAlert from '../CustomAlerts/OkOnlyAlert'
import DropdownPopup from './DropdownPopup/DropdownPopup'
import PeoplePopup from './PeoplePopup/PeoplePopup'
import styles from './main.module.css'
import Celltypes from './CellTypes/Celltypes'
import LeftPanel from '../LeftPanel/LeftPanel'
import Spreadsheet from './SpreadSheet'
import ContextMenuData from '../ContextMenuData/ContextMenuData'
import TopBar from '../TopBar/TopBar'
import TabBar from '../TabBar/TabBar'
import {
  connect,
  disconnect,
  getVersion,
  lisen,
  mergeVersion,
  undoManager,
  versionHistory
} from '../../../../../store'
import { useDispatch } from 'react-redux'
import { setExportedFunctions } from '../../../../../redux/slices/datatableSlices'

const Main = ({ lastState }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log('Key pressed:', event.key)
    }
    lisen()

    document.addEventListener('keydown', handleKeyDown)

    // Cleanup: Remover el event listener al desmontar el componente
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  // const sharedState = useContext(SyncedContext);
  // const { data, columns } = sharedState;
  const [versions, setVersions] = useState([])
  const { table, metadata } = useDataStore()
  const { data, columns } = table
  const { storedData, storedColumns } = lastState
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // const currentVersion = ""; // Asigna el valor deseado a la variable currentVersion
  const dropdownRef = useRef(null)
  const peopleRef = useRef(null)

  //* *****************************     LOCAL STATES   ************************************ */

  const [tableTitle, setTableTitle] = useState('')
  const [renderTable, setRenderTable] = useState(false)
  // const [counterColumnTitles, setCounterColumnTitles] = useState({})
  // const [numberOfRows, setNumberOfRows] = useState(0)
  const [rowHeights, setRowHeights] = useState(null)
  const [numberOfColumns, setNumberOfColumns] = useState(0)
  // const [columnWidths, setColumnWidths] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  // const [hoveredRowIndex, setHoveredRowIndex] = useState(-1)
  // const [selectedColumn, setSelectedColumn] = useState(null)
  const [selectedRow, setSelectedRow] = useState(null)
  const [alertVisible, setAlertVisible] = useState(false)
  const [alertActionType, setAlertActionType] = useState(['', '', ''])

  //* *****************************     TABLE FUNCTIONS   ************************************ */
  const loadData = () => {
    console.debug('init load data')
    // newSheet.inicializar(28, 10);
    console.debug('finish load data')
  }

  // const handleFormSubmit = (title) => {
  //   setTableTitle(title)
  // }

  const updateFromDropdown = (dropdownCell, rowIndex, columnIndex) => {
    data[rowIndex].splice(columnIndex, 1, dropdownCell)
  }

  //* No borrar
  /* const handleArrowKeys = (event) => {
    if (!focusedCell[0]) {
      return;
    }

    const [rowIndex, columnIndex] = focusedCell;
    let newRow = rowIndex;
    let newColumn = columnIndex;

    switch (event.key) {
      case "ArrowUp":
        newRow = Math.max(rowIndex - 1, 0);
        break;
      case "ArrowDown":
        newRow = Math.min(rowIndex + 1, numberOfRows - 1);
        break;
      case "ArrowLeft":
        newColumn = Math.max(columnIndex - 1, 0);
        break;
      case "ArrowRight":
        newColumn = Math.min(columnIndex + 1, numberOfColumns - 1);
        break;
      default:
        break;
    }

    if (newRow !== rowIndex || newColumn !== columnIndex) {
      setFocusedCell([newRow, newColumn]);
    }
  };

  document.addEventListener("keydown", (event) => handleArrowKeys(event)); */

  //* *****************************     COLUMN FUNCTIONS   ************************************ */
  // const handleColumnSelect = (event) => {
  //   setSelectedRow(null)
  //   const columnTitle = event.target.value
  //   setSelectedColumn({ columnTitle, id: event.target.id })
  // }

  // const handleColumnUnselect = () => {
  //   setSelectedColumn(null)
  // }

  const handleColumnTypeChange = (columnIndex, newType) => {
    columns[columnIndex].type = newType
    data.forEach((row, rowIndex) => {
      if (row[columnIndex].type !== newType) {
        cellParser(rowIndex, columnIndex, newType)
      }
    })
  }

  const deleteColumn = () => {
    // data.forEach((row) => row.splice(selectedColumn.id, 1));
    // columns.splice(selectedColumn.id, 1);
    newSheet.deleteColumn(newSheet.selectedColumn?.id)
    setNumberOfColumns(numberOfColumns - 1)
    // newSheet.selectedColumn = null
  }

  // const handleColumnResize = (event, index) => {
  //   event.preventDefault() // Prevenir la selección de texto
  //   const startX = event.clientX
  //   const startWidth = columnWidths[index]

  //   const handleMouseMove = (e) => {
  //     const diff = e.clientX - startX
  //     const newWidth = startWidth + diff
  //     if (newWidth >= 60) {
  //       const newWidths = [...columnWidths]
  //       newWidths[index] = newWidth
  //       setColumnWidths(newWidths)
  //     }
  //   }

  //   const handleMouseUp = () => {
  //     document.removeEventListener('mousemove', handleMouseMove)
  //     document.removeEventListener('mouseup', handleMouseUp)
  //   }

  //   document.addEventListener('mousemove', handleMouseMove)
  //   document.addEventListener('mouseup', handleMouseUp)
  // }

  // const handleColumnResize = (event, index) => {
  //   event.preventDefault() // Prevenir la selección de texto
  //   const startX = event.clientX
  //   const startWidth = columnWidths[index]

  //   const handleMouseMove = (e) => {
  //     const diff = e.clientX - startX
  //     const newWidth = startWidth + diff
  //     if (newWidth >= 60) {
  //       const newWidths = [...columnWidths]
  //       newWidths[index] = newWidth
  //       setColumnWidths(newWidths)
  //     }
  //   }

  //   const handleMouseUp = () => {
  //     document.removeEventListener('mousemove', handleMouseMove)
  //     document.removeEventListener('mouseup', handleMouseUp)
  //   }

  //   document.addEventListener('mousemove', handleMouseMove)
  //   document.addEventListener('mouseup', handleMouseUp)
  // }

  //* *****************************     ROW FUNCTIONS   ************************************ */
  // const handleRowHover = (rowIndex) => {
  //   setHoveredRowIndex(rowIndex)
  // }
  // const handleRowSelect = (event) => {
  //   // setSelectedColumn(null)
  //   // const row = event.target.value
  //   newSheet.selectedRow = parseInt(event.target.value, 10)
  //   // setSelectedRow(parseInt(row, 10))
  // }
  // const handleRowUnselect = () => {
  //   setSelectedRow(null)
  // }

  const deleteRow = () => {
    newSheet.deleteRow(selectedRow)
    // setNumberOfRows(numberOfRows - 1)
    // setSelectedRow(null)
  }

  // const rowHandlers = {
  //   handleRowHover,
  //   handleRowSelect,
  //   handleRowUnselect,
  //   deleteRow
  // }

  //* *****************************     CELL FUNCTIONS   ************************************ */

  // const handleCellValueChange = (rowIndex, columnIndex, value) => {
  //   data[rowIndex][columnIndex].value = value
  // }

  const cellParser = (rowIndex, columnIndex, newType) => {
    const cellValue = data[rowIndex][columnIndex].value
    let parsedValue = cellValue
    switch (newType) {
      case 'boolean':
        parsedValue = Boolean(cellValue)
        break
      case 'number':
        if (isNaN(parseFloat(cellValue))) parsedValue = 0
        else parsedValue = parseFloat(cellValue)
        break
      default:
        break
    }
    data[rowIndex][columnIndex].value = parsedValue
    data[rowIndex][columnIndex].type = newType
  }

  // function enableEdit(element) {
  //   element.removeAttribute('readonly')
  // }

  //* *****************************     ALERTS FUNCTIONS   ************************************ */

  const handleYesClick = () => {
    const alert = document.getElementById('yesNoAlert')
    switch (alertActionType[0]) {
      case 'DELETE COLUMN':
        deleteColumn()
        setAlertVisible(false)
        setAlertActionType(['', '', ''])
        alert.style.display = 'none'
        break
      case 'DELETE ROW':
        deleteRow()
        setAlertVisible(false)
        setAlertActionType(['', '', ''])
        alert.style.display = 'none'
        break
      case 'CHANGE TYPE':
        handleColumnTypeChange(newSheet.selectedColumn?.id, alertActionType[2])
        setAlertVisible(false)
        setAlertActionType(['', '', ''])
        alert.style.display = 'none'
        break
      default:
        break
    }
  }

  const handleNoClick = () => {
    const alert = document.getElementById('yesNoAlert')
    setAlertVisible(false)
    setAlertActionType(['', '', ''])
    alert.style.display = 'none'
  }

  const handleOkClick = () => {
    const alert = document.getElementById('okOnlyAlert')
    setAlertVisible(false)
    setAlertActionType(['', '', ''])
    alert.style.display = 'none'
  }

  const handlePopUp = (type, event, rowIndex, columnIndex) => {
    //Evita que al clickearse, se cierre automáticamente el popup, ya que el botón no pertenece al mismo
    event.stopPropagation()
    const buttonClicked = event.target.getBoundingClientRect()
    let alert = null
    switch (type) {
      case 'dropdownMenu':
        peopleRef.current.style.display = 'none'
        alert = dropdownRef.current
        break
      case 'people':
        dropdownRef.current.style.display = 'none'
        alert = peopleRef.current
        break
      default:
        break
    }
    newSheet.selectedCell = [rowIndex, columnIndex]
    setAlertVisible(type)
    alert.style.position = 'absolute'
    alert.style.top = `${buttonClicked.y + buttonClicked.height}px`
    alert.style.left = `${buttonClicked.x - 150}px`
    alert.style.display = 'block'
  }

  const [newSheet, setNewSheet] = useState(null)

  //* *****************************     USE EFFECT   ************************************ */

  useEffect(() => {
    const sheet = Spreadsheet.getInstance(metadata, data, columns)
    setNewSheet(sheet)
    setNumberOfColumns(columns.length)
    // setNumberOfRows(data.length)
    // setRowHeights(Array(data.length).fill(30))
    // setColumnWidths(Array(columns.length).fill(60))
    setRenderTable(true)
    // dispatch(setExportedFunctions(exportedFunctions))
    // return () => Spreadsheet.resetInstance();
  }, [])

  //* No borrar
  /* useEffect(() => {
    const handleKeyDown = (event) => {
      handleArrowKeys(event);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      switch (true) {
        case alertVisible === 'people':
          if (peopleRef.current && !peopleRef.current.contains(event.target)) {
            setAlertVisible(false)
            peopleRef.current.style.display = 'none'
          }
          break
        case alertVisible === 'dropdownMenu':
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
          ) {
            setAlertVisible(false)
            dropdownRef.current.style.display = 'none'
          }
          break
        default:
          break
      }
    }
    document.addEventListener('click', handleOutsideClick)
  }, [alertVisible])

  //* *****************************     EXPORTED FUNCTIONS   ************************************ */

  const exportedFunctions = {
    handlePopUp,
    alphabet,
    data,
    columns,
    // selectedColumn: newSheet.selectedColumn,
    // setSelectedColumn,
    numberOfColumns,
    selectedRow,
    // numberOfRows,
    tableTitle,
    searchTerm,
    disconnect,
    connect,
    clean: () => newSheet.inicializar(),
    undo: () => undoManager.undo(),
    redo: () => undoManager.redo(),

    handleAddVersion: () => {
      const tmpDate = new Date()
      const tmpId = uuidv4()
      setVersions([
        ...versions,
        {
          id: tmpId,
          name: tmpId,
          description: 'Descripción...',
          date: tmpDate,
          time: tmpDate.toISOString().substring(11, 19),
          author: 'anonimo',
          data: versionHistory.getCurrent()
        }
      ])
      console.log('AGREGADO..')
    },
    handleRestoreVersion: (id) => {
      const tmpVersion = versions.find((v) => v.id === id)
      console.log('VERSION')
      console.log(tmpVersion.data)
      setRenderTable(false)
      versionHistory.resv3(tmpVersion.data)
      setRenderTable(true)
    },
    allVersions: () => versions,

    handleTableAction: (title, message, alertType, newType) => {
      setAlertVisible(alertType)
      setAlertActionType([title, message, newType])
    },

    // renderTableHeader: () => {
    //   // const headerLetters = alphabet.slice(0, numberOfColumns);
    //   return (
    //     <tr>
    //       <th className={styles.header}></th>
    //       {/* {headerLetters.split("").map((letter, index) => ( */}
    //       {newSheet &&
    //         newSheet.getColumns().map((column, index) => (
    //           <th
    //             key={column.title}
    //             className={` ${styles.header} ${styles.columnName} ${
    //               index == selectedColumn?.id ? styles.titleColumn : ''
    //             } `}
    //             onClick={(event) => handleColumnSelect(event)}
    //           >
    //             <input
    //               id={index}
    //               name={column.title}
    //               className={`${styles.input} ${styles.columnName} ${
    //                 index == selectedColumn?.id ? styles.titleColumn : ''
    //               }`}
    //               type="text"
    //               value={column.title}
    //               readOnly
    //             />
    //           </th>
    //         ))}
    //     </tr>
    //   )
    // },

    // renderTableRows: () => {
    //   const filteredData = data.filter((row) =>
    //     row.some((cell) => {
    //       if (
    //         typeof cell.value === 'number' ||
    //         typeof cell.value === 'boolean'
    //       ) {
    //         return cell.value.toString().toLowerCase().includes(searchTerm)
    //       } else return cell.value.toLowerCase().includes(searchTerm)
    //     })
    //   )

    //   return filteredData.map((row, rowIndex) => (
    //     <ResizableRow
    //       height={rowHeights[rowIndex]}
    //       onMouseDown={(e) => handleRowResize(e, rowIndex)}
    //     >
    //       {/* <tr
    //       key={rowIndex}
    //       className={`${rowIndex === hoveredRowIndex ? styles.hovered : ''}`}
    //     > */}
    //       <td className={styles.rowNumber}>
    //         <input
    //           /* The input belongs to the row number, but it made no sense to create a new class */
    //           className={`${styles.input} ${styles.rowNumber} ${
    //             rowIndex === selectedRow - 1 ? styles.titleColumn : ''
    //           }`}
    //           type="text"
    //           value={rowIndex + 1}
    //           onClick={(event) => handleRowSelect(event)}
    //           readOnly
    //         />
    //       </td>

    //       {row.map((cell, columnIndex) => {
    //         const commonProps = {
    //           className: `${styles.input} ${
    //             getInputClassNames(rowIndex, columnIndex).byType
    //           } ${getInputClassNames(rowIndex, columnIndex).bySelected}`,
    //           name: `${alphabet[columnIndex]}${rowIndex + 1}`,
    //           value: cell.value,
    //           onMouseEnter: () => handleRowHover(rowIndex),
    //           onMouseLeave: () => handleRowHover(-1),
    //           onFocus: () => handleOnFocus(rowIndex, columnIndex),
    //           onBlur: (event) => handleOnBlur(event.target),
    //           onDoubleClick: (event) => enableEdit(event.target),
    //           readOnly: true
    //         }

    //         return (
    //           <td
    //             name={`Cell${alphabet[columnIndex]}${rowIndex + 1}`}
    //             key={columnIndex}
    //             className={`${getCellClassNames(rowIndex, columnIndex).byType}
    //             ${
    //               rowIndex === selectedRow - 1
    //                 ? styles.rowSelected
    //                 : getCellClassNames(rowIndex, columnIndex).bySelected
    //             } `}
    //           >
    //             {Celltypes(
    //               columns[columnIndex]?.type,
    //               commonProps,
    //               data,
    //               rowIndex,
    //               columnIndex,
    //               handleCellValueChange,
    //               handlePopUp
    //             )}
    //           </td>
    //         )
    //       })}
    //       {/* </tr> */}
    //     </ResizableRow>
    //   ))
    // },

    addColumn: (newColumn) => {
      setNumberOfColumns(numberOfColumns + 1)
      newSheet.addColumn(newColumn)
    },

    moveColumn: (direction) => {
      const currentPosition = parseInt(newSheet.selectedColumn?.id)
      const newPosition =
        direction === 'left' ? currentPosition - 1 : currentPosition + 1

      //* Desplaza el nombre de la columna, junto con el contenido
      const columnsAux1 = JSON.parse(JSON.stringify(columns[newPosition]))
      const columnsAux2 = JSON.parse(JSON.stringify(columns[currentPosition]))
      columns.splice(newPosition, 1, columnsAux2)
      columns.splice(currentPosition, 1, columnsAux1)

      //* Desplaza el contenido, manteniendo el nombre de la columna en su posicion original
      /* const auxPositionType =
        direction === "left"
          ? columns[currentPosition - 1].type
          : columns[currentPosition + 1].type;

      columns[newPosition].type = columns[currentPosition].type;
      columns[currentPosition].type = auxPositionType; */

      data.forEach((row) => {
        const dataAux1 = JSON.parse(JSON.stringify(row[newPosition]))
        const dataAux2 = JSON.parse(JSON.stringify(row[currentPosition]))
        row.splice(newPosition, 1, dataAux2)
        row.splice(currentPosition, 1, dataAux1)
      })
      newSheet.selectedColumn = {
        columnTitle: newSheet.getColumns()[newPosition].title,
        id: newPosition.toString()
      }
    },

    addRow: () => {
      // setNumberOfRows(numberOfRows + 1)
      newSheet.addRow()
    },

    moveRow: (direction) => {
      const currentPosition = selectedRow - 1
      const newPosition =
        direction === 'up' ? currentPosition - 1 : currentPosition + 1
      setSelectedRow(direction === 'up' ? currentPosition : newPosition + 1)
      const aux1 = JSON.parse(JSON.stringify(data[newPosition]))
      const aux2 = JSON.parse(JSON.stringify(data[currentPosition]))

      data.splice(newPosition, 1, aux2)
      data.splice(currentPosition, 1, aux1)
    },

    handleSearch: (event) => {
      setSearchTerm(event.target.value.toLowerCase())
    }
  }

  //* *****************************     Context Menu   ************************************ */
  const initialContextMenu = {
    show: false,
    x: 0,
    y: 0
  }

  const [contextMenu, setContextMenu] = useState(initialContextMenu)

  const handleContextMenu = (event) => {
    event.preventDefault()

    const { clientX, clientY } = event
    setContextMenu({ show: true, x: clientX, y: clientY })
  }

  const closeContextMenu = () => {
    setContextMenu(initialContextMenu)
  }

  //* *****************************     end Context Menu   ************************************ */
  return (
    <Fragment>
      <div
        onContextMenu={handleContextMenu}
        className={styles.dataManagerMainContainer}
      >
        {contextMenu.show && (
          <ContextMenuData
            x={contextMenu.x}
            y={contextMenu.y}
            // Mandar 3 estados para ver si es fila, columna o celda
            //
            closeContextMenu={closeContextMenu}
            exportedFunctions={exportedFunctions}
          />
        )}
        {/* <TitleBar /> */}

        {renderTable && newSheet && (
          <div style={{ width: '100%' }}>
            <TopBar exportedFunctions={exportedFunctions} />
            <Table sheet={newSheet} exportedFunctions={exportedFunctions} />
            <TabBar />
          </div>
        )}
      </div>

      <YesNoAlert
        title={alertActionType[0]}
        message={alertActionType[1]}
        visible={alertVisible === 'yesNoAlert'}
        onYesClick={handleYesClick}
        onNoClick={handleNoClick}
      />

      <OkOnlyAlert
        title={alertActionType[0]}
        message={alertActionType[1]}
        visible={alertVisible === 'okOnlyAlert'}
        onOkClick={handleOkClick}
      />

      {newSheet && (
        <DropdownPopup
          ref={dropdownRef}
          props={{
            sheet: newSheet,
            datatable: newSheet?.getData(),
            updateFromDropdown
          }}
        />
      )}

      {newSheet && (
        <PeoplePopup
          ref={peopleRef}
          props={{
            sheet: newSheet,
            datatable: newSheet?.getData(),
            updateFromDropdown
          }}
        />
      )}
    </Fragment>
  )
}

export default Main
