import { createSlice } from '@reduxjs/toolkit';

const datatableSlices = createSlice({
  name: 'datatable',
  initialState: {
    hoveredRowIndex: -1,
    focusedCell: [null, null],
    selectedColumn: null,
    selectedRow: null,
  },
  reducers: {
    setHoveredRowIndex: (state, action) => {
      state.hoveredRowIndex = action.payload;
    },
    setFocusedCell: (state, action) => {
      state.focusedCell = action.payload;
    },
    setSelectedColumn: (state, action) => {
      state.selectedColumn = action.payload;
    },
    setSelectedRow: (state, action) => {
      state.selectedRow = action.payload;
    },
    handleColumnSelect: (state, action) => {
      state.selectedRow = null;
      const { columnTitle, id } = action.payload;
      state.selectedColumn = { columnTitle, id };
    },
    handleRowSelect: (state, action) => {
      state.selectedColumn = null;
      state.selectedRow = parseInt(action.payload, 10);
    },
    handleOnFocus: (state, action) => {
        const {rowIndex, columnIndex} = action.payload;
        console.log(action.payload);
      /* if (state.selectedColumn !== null) state.selectedColumn = null;
      if (state.selectedRow !== null) state.selectedRow = null; */
      //state.focusedCell = [rowIndex, columnIndex];
      return {...state, selectedColumn:null, selectedRow:null, focusedCell:[rowIndex, columnIndex]}
    },
  },
});

export const {
  setHoveredRowIndex,
  setFocusedCell,
  setSelectedColumn,
  setSelectedRow,
  handleColumnSelect,
  handleRowSelect,
  handleOnFocus,
} = datatableSlices.actions;

export default datatableSlices.reducer;
