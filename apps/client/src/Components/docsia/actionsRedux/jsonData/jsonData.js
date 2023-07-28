import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 
export const postData = createAsyncThunk('jsonData/postData', async ({ data, code, properties }) => {
  try {
    const requestBody = {
      data: data,
      properties: properties
    };
    const response = await axios.post('/actions', requestBody);
    return response.data;
  } catch (error) {
    throw new Error('Error al realizar la petición POST');
  }
});
// Acción para realizar la petición GET al servidor y guardar los datos
export const getData = createAsyncThunk('jsonData/getData', async (id) => {
  try {
    const response = await axios.get(`/actions${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al realizar la petición GET');
  }
});

const jsonDataSlice = createSlice({
  // ...
  extraReducers: (builder) => {
    // Este bloque maneja las acciones asincrónicas
    builder
      .addCase(postData.fulfilled, (state, action) => {
        // La acción se ejecuta cuando la petición POST es exitosa
        return action.payload;
      })
      .addCase(getData.fulfilled, (state, action) => {
        // La acción se ejecuta cuando la petición GET es exitosa
        return action.payload;
      });
  },
});
