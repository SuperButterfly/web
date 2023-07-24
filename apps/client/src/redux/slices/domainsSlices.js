import { createSlice } from '@reduxjs/toolkit'

export const domainsSlices = createSlice({
  name: 'domains',
  initialState: {
    userDomains: [],
    resultantDomains: []
  },

  reducers: {
    addDomains(state, actions) {
      state.userDomains = [...state.userDomains, actions.payload]
    },
    setResultantDomains(state, actions) {
      state.resultantDomains = actions.payload
    }
  }
})

export const { addDomains, setResultantDomains } = domainsSlices.actions

export default domainsSlices.reducer
