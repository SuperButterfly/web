import { createSlice } from '@reduxjs/toolkit';

export const instancesSlices = createSlice({
  name: 'instances',
  initialState: {
    userInstances: [],
    currentInstance: {}
  },
  
  reducers: {
    
    createNewInstance(state, action) {
      state.currentInstance = action.payload;
      state.userInstances.push(action.payload)
    }
  }
});

export const {
  createNewInstance
} = instancesSlices.actions;

export default instancesSlices.reducer;
