import { createSlice } from '@reduxjs/toolkit'

export const instancesSlices = createSlice({
  name: 'instances',
  initialState: {
    userInstances: [],
    currentInstance: {}
  },

  reducers: {
    createNewInstance(state, actions) {
      state.userInstances = [...state.userInstances, actions.payload]
    },
    setCurrentInstance(state, actions) {
      if (actions.payload) {
        localStorage.setItem('currentInstance', actions.payload.id)
        const matchedInstance = state.userInstances.find(
          (instance) => instance.TemplateId === actions.payload.TemplateId
        )
        state.currentInstance = matchedInstance ?? {}
      } else {
        const storedInstanceId = localStorage.getItem('currentInstance')
        state.currentInstance = storedInstanceId
          ? state.userInstances.find(
            (instance) => instance.id === storedInstanceId
          ) || {}
          : state.userInstances[0] || {}
      }
    },
    deleteInstanceStore(state, actions) {
      if (actions.payload) {
        state.userInstances.filter(
          (instance) => instance.id !== actions.payload.id
        )
      } else {
        state.userInstances = []
      }
    }
  }
})

export const { createNewInstance, setCurrentInstance, deleteInstanceStore } =
  instancesSlices.actions

export default instancesSlices.reducer
