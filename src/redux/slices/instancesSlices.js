import { createSlice } from '@reduxjs/toolkit';

export const instancesSlices = createSlice({
  name: 'instances',
  initialState: {
    userInstances: [],
    currentInstance: {}
  },
  
  reducers: {
    
    createNewInstance(state, actions) {
      state.userInstances.push(actions.payload);
    },
    setCurrentInstance(state, actions) {
      if(actions.payload) {
        localStorage.setItem('currentInstance', actions.payload.id);
        state.currentInstance = state.userInstances.find((instance) => instance.TemplateId === actions.payload.TemplateId);
      }
      else if(localStorage.getItem('currentInstance')) {
        state.currentInstance = state.userInstances.find((instance) => instance.id === localStorage.getItem('currentInstance'));
      }
      else if(state.userInstances[0]) {
        state.currentInstance = state.userInstances[0];
      }
    },
  }
});

export const {
  createNewInstance, setCurrentInstance
} = instancesSlices.actions;

export default instancesSlices.reducer;
