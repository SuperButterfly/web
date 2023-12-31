import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const postInstance = createAsyncThunk(
  'instances/postInstance',
  async (instanceInfo) => {
    try {
      console.log(instanceInfo)
      const response = await axios.post('/instance', { instanceInfo })
      console.log(response.data)
      return response.data.instance
    } catch (error) {
      console.log(error.response.data)
      throw new Error(error)
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
      console.log(instance)
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
  async (idInstance, instanceInfo) => {
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

export const getProjectInstance = createAsyncThunk(
  'instances/getProjectInstances',
  async (templateId) => {
    const response = await axios(`/instance/workspace`, { templateId })
    console.log(response.data)
    return response.data
  }
)

export const getInstancesType = createAsyncThunk(
  'instances/getInstancesType',
  async () => {
    const response = await axios('/instance/types')
    console.log(response.data)
    return response.data
  }
)

export const getAvailableInstances = createAsyncThunk(
  'instances/getAvailability',
  async (zone) => {
    const response = await axios(`/instance/${zone}/availability`)
    return response.data
  }
)


export const getImages = createAsyncThunk(
  'instances/getImages',
  async (zone) => {
    const response = await axios(`/instance/${zone}/images`)
    return response.data
  }
)

