import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import { getAllPressets, getPressetsByID } from '../actions/pressets'

const initialState = {
  allPressets: [],
  pressetsByID: {}
}

export const pressetsSlices = createSlice({
  name: 'pressets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPressets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllPressets.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.allPressets = action.payload
      })
      .addCase(getAllPressets.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Algo salió mal'
      })
    builder
      .addCase(getPressetsByID.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getPressetsByID.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.pressetsByID = action.payload
      })
      .addCase(getPressetsByID.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Algo salió mal'
      })
  }
})

export default pressetsSlices.reducer
