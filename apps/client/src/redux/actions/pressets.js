import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllPressets = createAsyncThunk(
  'pressets/getPressets',
  async (query) => {
    const response = await axios.get(
      `http://localhost:4000/api/pressets/getPressets?query=${query}`
    )
    return response.data
  }
)

export const getPressetsByID = createAsyncThunk(
  'pressets/getPressets/:id',
  async (id) => {
    const response = await axios.get(
      `http://localhost:4000/api/pressets/getPressets/${id}`
    )
    return response.data
  }
)
