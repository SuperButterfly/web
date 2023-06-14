/* global localStorage */
import { createSlice } from '@reduxjs/toolkit';
// import { getProjects } from '../actions/projects.js';

export const projectSlices = createSlice({
  name: 'project',
  initialState: {
    projectSelected: {},
    projects: [],
    target: {}
  },
  reducers: {
    createNewProject(state, actions) {
      state.projectSelected = actions.payload;
    },
    createNewPage(state, actions) {
      state.projectSelected.pages = [
        ...state.projectSelected.pages,
        actions.payload
      ];
    },
    createNewComponent(state, actions) {
      state.projectSelected.components = [
        ...state.projectSelected.components,
        actions.payload
      ];
    },
    setProjects(state, actions) {
      state.projects = actions.payload;
    },
    selectProject(state, actions) {
      if(actions.payload) {
        localStorage.setItem('projectid', actions.payload);
        state.projectSelected = state.projects.find((project) => project.id === actions.payload);
      }
      else if(localStorage.getItem('projectid')) {
        state.projectSelected = state.projects.find((project) => project.id === localStorage.getItem('projectid'));
      }
      else if(state.projects[0]) {
        state.projectSelected = state.projects[0];
      }
    },
    
    setTarget(state, actions){
      state.target = actions.payload;
    },
    updateSelectedProject(state, actions) {
      state.projectSelected = actions.payload;
    }
  }
});

export const {
  createNewProject,
  createNewPage,
  createNewComponent,
  setProjects,
  selectProject,
  setTarget,
  updateSelectedProject
} = projectSlices.actions;
export default projectSlices.reducer;
