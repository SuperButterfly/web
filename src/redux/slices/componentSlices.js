import { createSlice } from '@reduxjs/toolkit';

export const componentSlices = createSlice({
  name: 'components',
  initialState: {
    componentSelected: {},
    width: 0
  },
  reducers: {
    setSelectedComponent(state, actions) {
      state.componentSelected = actions.payload;
    },
    createNewComponent(state, actions) {
      state.component = actions.payload;
    },
    updateSelectedComponent(state, actions) {
      state.componentSelected = actions.payload;
    },
    updateWidth(state, actions) {
      state.width = actions.payload;
    }
  }
});

export const { setSelectedComponent, createNewComponent, updateSelectedComponent, updateWidth } = componentSlices.actions;
export default componentSlices.reducer;