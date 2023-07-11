/* eslint-disable no-redeclare */
/* global localStorage */
import axios from 'axios'
import {
  setSelectedComponent,
  updateSelectedComponent,
  setComponentsSelected,
  updateComponentsSelected,
  cleanComponentsSelected,
  resetAndSetComponentsSelected,
  setEditingId
} from '../slices/componentSlices'
import { setTarget } from '../slices/projectSlices'

export const getSelectedComponent = (id) => async (dispatch) => {
  const componentId = id || localStorage.getItem('componentId')
  try {
    const { data } = await axios(`/component/${componentId}`)
    dispatch(setSelectedComponent(data.component))
  } catch (error) {
    console.log(error.message)
  }
}

export const updateComponent = (id, component) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/component/${id}`, component)
    dispatch(updateSelectedComponent(data.component))
  } catch (error) {
    console.log(error.message)
  }
}

export const createComponent = (id, tag) => async (dispatch) => {
  const src = localStorage.getItem('src')
  const targetId = localStorage.getItem('componentId')
  try {
    const body = { tag }
    if (src) body.src = src
    await axios.post(`/children/${id}`, body) //
    const { data } = await axios.get(`/component/${targetId}`)
    dispatch(setTarget(data.component))
    localStorage.removeItem('src')
    localStorage.removeItem('text')
  } catch (error) {
    console.log(error.message)
  }
}

export const createChildren = (id, tag) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/children/tree/${id}`, { tag })
    dispatch(setTarget(data.component))
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteComponent = (id) => async (dispatch) => {
  const targetId = localStorage.getItem('componentId')
  try {
    /* const { data } = */ await axios.patch(`/component/delete/${id}`)
    const { data } = await axios(`/component/${targetId}`)
    console.log(data)
    dispatch(setTarget(data.component))
  } catch (error) {
    console.log(error.message)
  }
}

export const cleanEventAndUpdateComponent =
  (componentSelected, id) => async (dispatch) => {
    try {
      if (
        componentSelected &&
        componentSelected.id !== id &&
        componentSelected.properties &&
        componentSelected.properties.event &&
        componentSelected.properties.event.length
      ) {
        const { data } = await axios.patch(
          `/component/${componentSelected.id}`,
          {
            ...componentSelected,
            properties: {
              ...componentSelected.properties,
              event: ''
            }
          }
        )
        dispatch(updateSelectedComponent(data.component))
      }
      const { data } = await axios(`/component/${id}`)
      localStorage.setItem(
        'lastComponentSelected',
        JSON.stringify(data.component)
      )
      dispatch(setSelectedComponent(data.component))
    } catch (error) {
      console.log(error.message)
    }
  }

export const deleteComponentSelected = () => async (dispatch) => {
  try {
    dispatch(setSelectedComponent({}))
    dispatch(cleanComponentsSelected())
  } catch (error) {
    console.log(error.message)
  }
}

export const pasteComponent = (body) => async (dispatch) => {
  try {
    const { data } = await axios.post('/component/pasteComponent', body)
    dispatch(updateSelectedComponent(data.component))
  } catch (error) {
    console.log(error.message)
  }
}

export const addComponentSelected = (id) => async (dispatch) => {
  const componentId = localStorage.getItem('componentId')
  try {
    if (id !== componentId) {
      const { data } = await axios(`/component/${id}`)
      localStorage.setItem(
        'lastComponentSelected',
        JSON.stringify(data.component)
      )
      dispatch(setComponentsSelected(data.component))
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const addMultipleComponentSelected =
  (components) => async (dispatch) => {
    try {
      console.log(components)
      dispatch(resetAndSetComponentsSelected(components))
    } catch (error) {
      console.log(error.message)
    }
  }

export const deletedMultipleComponents = (componentsId) => async (dispatch) => {
  const targetId = localStorage.getItem('componentId')
  try {
    console.log({
      componentsId,
      targetId
    })

    const { data } = await axios.patch(
      `component/multipleComponentsDeleted/${targetId}`,
      {
        componentsId
      }
    )

    dispatch(setTarget(data.component))
  } catch (error) {
    console.log(error.message)
  }
}

export const getParentId = (idChildren) => async (dispatch) => {
  try {
    const { data } = await axios.get('/component/getParentId', {
      params: { idChildren }
    })

    dispatch(getSelectedComponent(data.parentId))
  } catch (error) {
    console.log(error.response)
  }
}

export const setEditingIdAction = (id) => async (dispatch) => {
  try {
    dispatch(setEditingId(id))
  } catch (error) {
    console.log(error.response)
  }
}

export const groupComponents = async (components) => {
  try {
    const { data } = await axios.patch('component/groupComponents', components)
  } catch (error) {
    console.log(error.response)
  }
}

export const unGroupComponents = async (groupId) => {
  try {
    const { data } = await axios.patch('component/unGroupComponents', groupId)
  } catch (error) {
    console.log(error.response)
  }
}

export const changeLevelComponents = (dropedComponentId, dragComponentId,position)=> async (dispatch)=>{
  try{
    ///component/changeParent/
    console.log(dropedComponentId, dragComponentId,position)
    const targetId = localStorage.getItem('componentId')
    const {data} = await axios.post(`component/changeParent/${targetId}`,{
      dropedComponentId, 
      dragComponentId,
      position
    })
    console.log({
      dropedComponentId, 
      dragComponentId,
      position
    })
    dispatch(setTarget(data.component))
  }catch (error) {
    console.log(error.response)
  }
}
