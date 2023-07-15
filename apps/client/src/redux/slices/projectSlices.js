/* global localStorage */
import { createSlice } from '@reduxjs/toolkit'
// import { getProjects } from '../actions/projects.js';
import _ from 'lodash'

export const projectSlices = createSlice({
  name: 'project',
  initialState: {
    projectSelected: {},
    projects: [],
    target: {},
    past: [],
    present: null,
    future: [],
    screenEditorFiles: []
  },

  reducers: {
    createNewProject(state, actions) {
      state.projectSelected = actions.payload
    },
    createNewPage(state, actions) {
      state.projectSelected.pages = [
        ...state.projectSelected.pages,
        actions.payload
      ]
    },
    createNewComponent(state, actions) {
      state.projectSelected.components = [
        ...state.projectSelected.components,
        actions.payload
      ]
    },

    setProjects(state, actions) {
      state.projects = actions.payload
    },

    selectProject(state, actions) {
      if (actions.payload) {
        localStorage.setItem('projectid', actions.payload)
        state.projectSelected = state.projects.find(
          (project) => project.id === actions.payload
        )
      } else if (localStorage.getItem('projectid')) {
        state.projectSelected = state.projects.find(
          (project) => project.id === localStorage.getItem('projectid')
        )
      } else if (state.projects[0]) {
        state.projectSelected = state.projects[0]
      }
    },

    setTarget(state, actions) {
      state.present = _.cloneDeep(actions.payload.children)
      state.past.push(_.cloneDeep(state.target.children))
      state.target = actions.payload
    },

    updateSelectedProject(state, actions) {
      state.present = _.cloneDeep(actions.payload.children)
      state.past.push(_.cloneDeep(state.projectSelected.children))
      state.projectSelected = actions.payload
    },

    undo(state) {
      if (state.past.length > 0) {
        state.future.push(_.cloneDeep(state.present))
        state.present = _.cloneDeep(state.past[state.past.length - 1])
        state.target.children = _.cloneDeep(state.past.pop())
      }
    },

    redo(state) {
      if (state.future.length > 0) {
        state.past.push(_.cloneDeep(state.present))
        state.present = _.cloneDeep(state.future[state.future.length - 1])
        state.target.children = _.cloneDeep(state.future.pop())
      }
    },

    addFilesToScreen(state, actions) {
      const [a, ...b] = state.screenEditorFiles
      const newfiles = [actions.payload, ...a]
      state.screenEditorFiles = [newfiles, ...b]
    },

    addNewScreen(state, actions) {
      const newfiles = [...state.screenEditorFiles, actions.payload]
      state.screenEditorFiles = newfiles
    },

    changeFilesOnMultiScreen(state, actions) {
      const { files, index } = actions.payload
      const newscreen = [...state.screenEditorFiles]
      newscreen[index] = files
      if (files.length > 0) {
        state.screenEditorFiles = newscreen
      } else {
        state.screenEditorFiles = newscreen.filter(e => e.length !== 0)
      }
    }
  }
})

export const {
  createNewProject,
  createNewPage,
  createNewComponent,
  setProjects,
  selectProject,
  setTarget,
  updateSelectedProject,
  undo,
  redo,
  addFilesToScreen,
  changeFilesOnMultiScreen,
  addNewScreen
} = projectSlices.actions

export default projectSlices.reducer
