import React, { useEffect } from 'react'
import style from './table.module.css'
import Rows from './Rows/Rows'
import Header from './Header/Header'
import TabBar from '../TabBar/TabBar'
import { useSelector } from 'react-redux'
// import { useDataStore } from '../../../../../store/SyncedProvider'

const Table = ({ sheet, exportedFunctions }) => {
  // const { data, columns, metadata } = useDataStore()
  // const tableTitle = exportedFunctions.tableTitle
  const renderSideBarIcon = useSelector(
    (state) => state.datatable.renderSideBarIcon
  )
  useEffect(() => {
    console.log('TrackRender>Tableeeee')
    // setRowHeights(Array(sheet.getData().length).fill(30))
  }, [])
  return (
    <div className={style.tableContainer}>
      <div className={style.scrollBar}>
        <table className={style.table}>
          <thead style={{ position: 'sticky', top: 0 }}>
            <Header sheet={sheet} />
          </thead>
          <Rows sheet={sheet} handlers={exportedFunctions} />
        </table>
      </div>
      <TabBar />
    </div>
  )
}

/* {focusedCell[0] !== null && (
        <>
          <h3>Cell: {alphabet[focusedCell[1]]}{focusedCell[0] + 1} (Read only)</h3>
          <h3>Content: {data[focusedCell[0]][focusedCell[1]].value}</h3>
          <h3>ColumnType: {columnTypes[focusedCell[1]]} (Read only)</h3>
          <h3>CellType: {data[focusedCell[0]][focusedCell[1]].type} (Read only)</h3>
        </>
      )}

      {selectedColumn !== null && (
        <>
          <h3>Column: {selectedColumn} (Read only)</h3>
          <h3>ColumnType: {columnTypes[alphabet.indexOf(selectedColumn)]}</h3>
        </>
      )} */

export default Table
