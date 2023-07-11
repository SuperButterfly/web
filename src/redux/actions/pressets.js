import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllPressets = createAsyncThunk(
  'pressets/getPressets',
  async () => {
    const response = await axios.get(
      `http://localhost:4000/api/pressets/getPressets`
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
