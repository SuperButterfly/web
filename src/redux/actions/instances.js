import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const postInstance = createAsyncThunk(
  'instances/postInstance',
  async ({ projectData, sendFiles }) => {
    try {
      const response = await axios.post('/instance', { projectData, sendFiles })
      return response.data.instance
    } catch (error) {
      throw new Error(error.message)
    }
  }
)

export const getInstance = createAsyncThunk(
  'instances/getInstance',
  async (idTemplate) => {
    try {
      const response = await axios(`/instance/${idTemplate}`)
      const { success, instance } = response.data

      if (success) {
        return instance
      }
    } catch (error) {
      console.error('Error getting instance:', error)
      throw error
    }
  }
)

export const deleteInstance = createAsyncThunk(
  'instances/deleteInstance',
  async (idInstance) => {
    console.log(idInstance)
    try {
      const response = await axios.delete(`/instance/${idInstance}`)
      console.log('Instances deleted: \n', response.data)
      return idInstance
    } catch (error) {
      console.error('Error deleting instance:', error)
      throw error
    }
  }
)

export const updateInstance = createAsyncThunk(
  'instances/updateInstance',
  async ({ idInstance, instanceInfo }) => {
    try {
      const response = await axios.put(`/instance/${idInstance}`, {
        instanceInfo
      })
      console.log('Successfully updated: \n', response.data)
    } catch (error) {
      console.error('Error updating instance:', error)
      throw error
    }
  }
)

export const getWorkspaceInstances = createAsyncThunk(
  'instances/getWorkspaceInstances',
  async (idScwProject) => {
    const response = await axios(`/instance/${idScwProject}`)
    return response.data
  }
)

export const getInstancesType = createAsyncThunk(
  'instances/getInstancesType',
  async () => {
    const response = await axios('instance/types')
    return response.data
  }
)
