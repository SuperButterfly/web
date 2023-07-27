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
    screenEditorFiles: [],
    fileOnScreen : [],
    prompt: {},
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

    addFilesFromDirectoryToScreen(state, actions) {
      let newfiles = [...state.screenEditorFiles]
      if(newfiles.length){
        let documents = actions.payload.filter(e => {
          return !newfiles[0].some(a => a.file === e.file)
        })
        documents = [...documents, ...newfiles[0]]
        newfiles[0]= documents
      } else {
        newfiles = [actions.payload]
      }
      state.screenEditorFiles = newfiles
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
        state.fileOnScreen = [...state.fileOnScreen].filter((e,i) => {
          return i !== index
        })
      }
    },

    setFileOnScreen(state, actions){
      const {file, index} = actions.payload
      const newfileOnScreen = [...state.fileOnScreen]
      newfileOnScreen[index] = file
      state.fileOnScreen = newfileOnScreen
    },

    setPromptOfVirtualAssistant(state, actions){
      state.prompt = actions.payload
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
  addFilesFromDirectoryToScreen,
  changeFilesOnMultiScreen,
  addNewScreen,
  setFileOnScreen,
  setPromptOfVirtualAssistant,
} = projectSlices.actions

export default projectSlices.reducer
