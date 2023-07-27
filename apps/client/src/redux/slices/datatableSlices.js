import { createSlice } from '@reduxjs/toolkit'

const datatableSlices = createSlice({
  name: 'datatable',
  initialState: {
    exportedFunctions: null,
    hoveredRowIndex: -1,
    focusedCell: [null, null],
    selectedColumn: { id: null, titleColumn: null },
    selectedRow: null,
    renderTable: true,
    renderSideBarIcon: true,
    versions: []
  },
  reducers: {
    setExportedFunctions: (state, action) => {
      state.exportedFunctions = action.payload
    },
    setHoveredRowIndex: (state, action) => {
      state.hoveredRowIndex = action.payload
    },
    /* setFocusedCell: (state, action) => {
      state.focusedCell = action.payload
    }, */
    setSelectedColumn: (state, action) => {
      return {
        ...state,
        selectedColumn: { ...action.payload },
        selectedRow: null,
        focusedCell: [null, null]
      }
    },
    /* setSelectedRow: (state, action) => {
      state.selectedRow = action.payload
    }, */

    /* handleColumnSelect: (state, action) => {
      state.selectedRow = null;
      const { columnTitle, id } = action.payload;
      state.selectedColumn = { columnTitle, id };
    }, */
    handleRowSelect: (state, action) => {
      const rowIndex = parseInt(action.payload, 10)
      return {
        ...state,
        selectedColumn: {
          ...state.selectedColumn,
          id: null,
          titleColumn: null
        },
        selectedRow: rowIndex,
        focusedCell: [null, null]
      }
    },
    handleOnFocus: (state, action) => {
      const { rowIndex, columnIndex } = action.payload
      /* if (state.selectedColumn !== null) state.selectedColumn = null;
      if (state.selectedRow !== null) state.selectedRow = null; */
      return {
        ...state,
        selectedColumn: {
          ...state.selectedColumn,
          id: null,
          titleColumn: null
        },
        selectedRow: null,
        focusedCell: [rowIndex, columnIndex]
      }
    },
    setRenderTable: (state, action) => {
      state.renderTable = action.payload
    },
    setRenderSideBarIcon: (state, action) => {
      state.renderSideBarIcon = action.payload
      console.log('despachado')
    },
    setVersions: (state, action) => {
      state.versions.push(action.payload)
    }
  }
})

export const {
  setExportedFunctions,
  setHoveredRowIndex,
  setFocusedCell,
  setSelectedColumn,
  setSelectedRow,
  //handleColumnSelect,
  handleRowSelect,
  handleOnFocus,
  setRenderTable,
  setVersions,
  setRenderSideBarIcon
} = datatableSlices.actions

export default datatableSlices.reducer
