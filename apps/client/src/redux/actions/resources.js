import axios from 'axios'
const { getResources } = require('resourcesSlices')

export const getPhotos = (page) => async (dispatch) => {
  const num = page || 1
  try {
    const { data } = await axios(`/resources/?page=${num}`)
    dispatch(getResources(data))
  } catch (error) {
    console.log(error.message)
  }
}

export const searchPhotos = (query, page) => async (dispatch) => {
  const num = page || 1
  try {
    const { data } = await axios(`/resources?page=${num}&word=${query}`)
    dispatch(getResources(data))
  } catch (error) {
    console.log(error.message)
  }
}

export const getPhoto = (id, quality) => async (dispatch) => {
  try {
    const { data } = await axios(`/resources/${id}?quality=${quality}`)
    dispatch(getResources(data))
  } catch (error) {
    console.log(error.message)
  }
}
