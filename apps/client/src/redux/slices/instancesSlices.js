import { createSlice } from '@reduxjs/toolkit'
import {
  postInstance,
  getInstance,
  getInstancesType,
  deleteInstance,
  getAvailableInstances,
  getImages
} from '../actions/instances'

export const instancesSlice = createSlice({
  name: 'instances',
  initialState: {
    userInstances: [],
    currentInstance: {},
    instancesType: [],
    availableTypes: [],
    availableImages: []
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
          (instance) => instance.id !== action.payload
        )
      } else {
        state.userInstances = []
      }
    },
    setUserInstances(state, action) {
      state.userInstances = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postInstance.fulfilled, (state, action) => {
        state.userInstances.push(action.payload)
      })
      .addCase(getInstance.fulfilled, (state, action) => {
        state.currentInstance = action.payload
      })
      .addCase(deleteInstance.fulfilled, (state, action) => {
        state.userInstances = state.userInstances.filter(
          (instance) => instance.id !== action.payload
        )
      })
      .addCase(getInstancesType.fulfilled, (state, action) => {
        state.instancesType = action.payload
      })
      .addCase(getAvailableInstances.fulfilled, (state, action) => {
        state.availableTypes = action.payload
      }).addCase(getImages.fulfilled, (state, action) => {
        state.availableImages = action.payload
      })
  }
})

export const {
  createNewInstance,
  setCurrentInstance,
  deleteInstanceStore,
  setUserInstances
} = instancesSlice.actions

export default instancesSlice.reducer
