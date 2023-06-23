import { createSlice } from "@reduxjs/toolkit";

export const componentSlices = createSlice({
  name: "components",
  initialState: {
    componentSelected: {},
    componentsSelected: [],
    width: 0,
    editingId: null,
  },
  reducers: {
    setSelectedComponent(state, actions) {
      state.componentSelected = actions.payload;
      state.componentsSelected = [actions.payload];
    },
    createNewComponent(state, actions) {
      state.component = actions.payload;
    },
    updateSelectedComponent(state, actions) {
      state.componentSelected = actions.payload;
      state.componentsSelected = [actions.payload];
    },
    updateWidth(state, actions) {
      state.width = actions.payload;
    },
    setComponentsSelected(state,actions){
      if(state.componentsSelected.find(c=>!c.id===actions.payload.id))
        state.componentsSelected = [...state.componentsSelected,actions.payload];
    },
    resetAndSetComponentsSelected(state,actions){
      state.componentsSelected = [...actions.payload];
    },
    updateComponentsSelected(state, actions) {
      state.componentsSelected = actions.payload;
    },
    cleanComponentsSelected(state, actions) {
      state.componentsSelected = [];
    },
    setEditingId(state, actions) {
      state.editingId = actions.payload;
    },
  },
});

export const {
  setSelectedComponent,
  setComponentsSelected,
  createNewComponent,
  updateSelectedComponent,
  cleanComponentsSelected,
  updateWidth,
  resetAndSetComponentsSelected,
  setEditingId,
} = componentSlices.actions;
export default componentSlices.reducer;
