import axios from 'axios'
import {
  createNewInstance,
  setCurrentInstance,
  deleteInstanceStore
} from '../slices/instancesSlices'

export const postInstance = (idTemplate, projectName, sendFiles) => {
  const instanceData = {
    name: `/var/www/${projectName}`,
    project: '',
    commercial_type: 'GP1-S',
    image: '544f0add-626b-4e4f-8a96-79fa4414d99a',
    enable_ipv6: true
  }

  return async (dispatch) => {
    try {
      const response = await axios.post('/instance', {
        instanceData,
        idTemplate,
        sendFiles
      })
      console.log(response.data)
      dispatch(createNewInstance(response.data.instance))
      dispatch(setCurrentInstance(response.data.instance))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getInstance = (idTemplate) => {
  return async (dispatch) => {
    try {
      const response = await axios(`/instance/${idTemplate}`)
      const { success, instance } = response.data

      if (success) {
        dispatch(setCurrentInstance(instance))
      }
    } catch (error) {
      console.error('Error getting instance:', error)
    }
  }
}

export const deleteInstance = (idInstance) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/instance/${idInstance}`)
      console.log('Instances deleted: \n', response.data)
      dispatch(deleteInstanceStore(idInstance))
    } catch (error) {
      console.error('Error deleting instance:', error)
    }
  }
}

export const updateInstance = (idInstance) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`/instances/${idInstance}`)
      console.log('Successfully updated: \n', response.data)
    } catch (error) {
      console.error('Error deleting instance:', error.message)
    }
  }
}
