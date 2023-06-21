import { createSlice } from '@reduxjs/toolkit';

export const componentSlices = createSlice({
  name: 'components',
  initialState: {
    componentSelected: {},
    componentsSelected:[],
    width: 0
  },
  reducers: {
    setSelectedComponent(state, actions) {
      state.componentSelected = actions.payload;
      state.componentsSelected = [actions.payload]
    },
    createNewComponent(state, actions) {
      state.component = actions.payload;
    },
    updateSelectedComponent(state, actions) {
      state.componentSelected = actions.payload;
      state.componentsSelected=[actions.payload];
    },
    updateWidth(state, actions) {
      state.width = actions.payload;
    },
    setComponentsSelected(state,actions){
      console.log(actions)
      console.log([...state.componentsSelected,actions.payload])
      state.componentsSelected = [...state.componentsSelected,actions.payload];
    },
    updateComponentsSelected(state,actions){
      state.componentsSelected=actions.payload
    }
  }
});

export const { setSelectedComponent,setComponentsSelected, createNewComponent, updateSelectedComponent, updateWidth } = componentSlices.actions;
export default componentSlices.reducer;
