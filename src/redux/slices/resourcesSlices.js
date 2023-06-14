import { createSlice } from '@reduxjs/toolkit';

export const resourcesSlices = createSlice({
  name: 'resources',
  initialState: {
    resources:[],
  },
  reducers: {
    getResources(state, actions) {
      state.resources = actions.payload
    }
  }
});

export const { getResources } = resourcesSlices.actions;
export default resourcesSlices.reducer;
