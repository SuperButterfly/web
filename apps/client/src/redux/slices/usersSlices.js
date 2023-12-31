import { createSlice } from '@reduxjs/toolkit'

export const userSlices = createSlice({
  name: 'user',
  initialState: {
    user: {},
    collaborators: []
  },
  reducers: {
    getUser(state, actions) {
      state.user = actions.payload
    },
    cambio(state, actions) {
      state.user.username = actions.payload
    },
    setCollaborators(state, actions) {
      state.collaborators = actions.payload
    },
    updateCollaborator(state, actions) {
      // console.log(state, actions)
      // console.log(state.collaborators)
      // console.log(actions.payload)
      const colaboratorElem = state.collaborators.findIndex(
        (item) => item.name === actions.payload.name
      )
      Object.assign(state.collaborators[colaboratorElem], actions.payload)
    }
  }
})

export const { getUser, setCollaborators, updateCollaborator, cambio } =
  userSlices.actions
export default userSlices.reducer
