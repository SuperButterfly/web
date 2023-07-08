/* eslint-disable no-redeclare */
/* global localStorage */
import {
  createNewProject,
  createNewPage,
  createNewComponent,
  updateSelectedProject,
  setTarget,
  setProjects
} from '../slices/projectSlices'
import axios from 'axios'

export const getProjects = () => async (dispatch) => {
  const workspaceId = localStorage.getItem('workspaceid')
  try {
    const { data } = await axios(
      `/template/ofworkspace/${workspaceId}`,
      {},
      {
        // headers: {
        //   credential: "aythen" // + localStorage.getItem("tkn")
        // }
      }
    )
    dispatch(setProjects(data.templates))
  } catch (error) {
    console.log(error.message)
  }
}

export const getProject = (id) => async (dispatch) => {
  const templateId = id || localStorage.getItem('projectid')
  try {
    const { data } = await axios(
      `/template/${templateId}`,
      {},
      {
        // headers: {
        //   credential: "aythen" // + localStorage.getItem("tkn")
        // }
      }
    )
    dispatch(updateSelectedProject(data.template))
  } catch (error) {
    console.log(error.message)
  }
}

export const createProject = (workspaceId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/template/${workspaceId}`,
      {},
      {
        // headers: {
        //   credential: "aythen" // + localStorage.getItem("tkn")
        // }
      }
    )
    dispatch(createNewProject(data.template))
  } catch (error) {
    console.log(error.message)
  }
  console.log('project created')
}

export const createComponent = (id, name, isPage) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/component/${id}?isPage=${isPage}`, {
      name
    })

    if (isPage) {
      dispatch(createNewPage(data))
    } else {
      dispatch(createNewComponent(data))
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const updateProject = (id, template) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/template/${id}`, template)
    dispatch(updateSelectedProject(data.template))
  } catch (error) {
    console.log(error.message)
  }
}

export const update = (component, id) => async (dispatch) => {
  try {
    const componentId = id || localStorage.getItem('componentId')
    const projectid = localStorage.getItem('projectid')
    await axios.patch(`/component/${componentId}`, component)
    const { data } = await axios.get(`/template/${projectid}`)
    dispatch(updateSelectedProject(data.template))
  } catch (error) {
    console.log(error.message)
  }
}

export const getTarget = (id) => async (dispatch) => {
  const componentId = id || localStorage.getItem('componentId')
  try {
    const { data } = await axios(`/component/${componentId}`)
    id && localStorage.setItem('componentId', id)
    dispatch(setTarget(data.component))
  } catch (error) {
    console.log(error.message)
  }
}

export const cleanTarget = () => async (dispatch) => {
  try {
    dispatch(setTarget({}))
  } catch (error) {
    console.log(error.message)
  }
}

export const addClassProperties = (id, classProperties) => async (dispatch) => {
  console.log('id', id)
  try {
    const { data } = await axios.post(`/classes/${id}`, classProperties)
    dispatch(updateSelectedProject(data.template))
  } catch (error) {
    console.log(error.message)
  }
}

export const updateClassProperties =
  (id, classProperties) => async (dispatch) => {
    try {
      const { data } = await axios.patch(`/classes/${id}`, classProperties)
      dispatch(updateSelectedProject(data.template))
    } catch (error) {
      console.log(error.message)
    }
  }

export const deleteClassProperties =
  (id, classProperties) => async (dispatch) => {
    console.log('id', id)
    try {
      const { data } = await axios.patch(
        `/classes/delete/${id}`,
        classProperties
      )
      dispatch(updateSelectedProject(data.template))
    } catch (error) {
      console.log(error.message)
    }
  }
