import { createSlice } from "@reduxjs/toolkit";

export const workspaceSlices = createSlice({
  name: "workspaces",
  initialState: {
    workspaceSelected: {},
    workspaceTabMenu: 0,
    workspaces: [],
    codeOrEditor: false,
  },
  reducers: {
    setWorkspaceTabMenu(state, actions) {
      state.workspaceTabMenu = actions.payload;
    },
    setWorkspaceSelected(state, actions) {
      state.workspaceSelected = state.workspaces.find(
        ({ id }) => id === actions.payload
      );
    },
    setWorkspaces(state, actions) {
      state.workspaces = actions.payload;
    },
    updateworkspaceSelected(state, actions) {
      state.workspaceSelected = actions.payload;
    },
    setCodeOrEditor(state, action) {
      state.codeOrEditor = action.payload;
    },
  },
});

export const {
  setWorkspaces,
  setWorkspaceSelected,
  updateworkspaceSelected,
  setWorkspaceTabMenu,
  setCodeOrEditor,
} = workspaceSlices.actions;
export default workspaceSlices.reducer;
