import { createSlice } from '@reduxjs/toolkit'

export const instancesSlice = createSlice({
  name: 'instances',
  initialState: {
    userInstances: [],
    currentInstance: {}
  },
  reducers: {
    createNewInstance(state, action) {
      state.userInstances = [...state.userInstances, action.payload]
    },
    setCurrentInstance(state, action) {
      if (action.payload) {
        localStorage.setItem('currentInstance', action.payload.id)
        state.currentInstance = action.payload
      } else {
        const storedInstanceId = localStorage.getItem('currentInstance')
        state.currentInstance = storedInstanceId
          ? state.userInstances.find(
              (instance) => instance.id === storedInstanceId
            ) || {}
          : state.userInstances[0] || {}
      }
    },
    deleteInstanceStore(state, action) {
      if (action.payload) {
        state.userInstances = state.userInstances.filter(
          (instance) => instance.id !== action.payload.id
        )
      } else {
        state.userInstances = []
      }
    },
    setUserInstances(state, action) {
      state.userInstances = action.payload
    }
  }
})

export const {
  createNewInstance,
  setCurrentInstance,
  deleteInstanceStore,
  updateInstance
} = instancesSlice.actions

export default instancesSlice.reducer
