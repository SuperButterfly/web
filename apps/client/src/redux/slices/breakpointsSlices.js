import { createSlice } from '@reduxjs/toolkit'

// Función para cargar los breakpoints desde localStorage
const loadBreakpointsFromLocalStorage = () => {
  try {
    const serializedBreakpoints = localStorage.getItem('breakpoints')
    if (serializedBreakpoints === null) {
      return [true, true, true, true, true, true]
    }
    return JSON.parse(serializedBreakpoints)
  } catch (error) {
    console.error('Error loading breakpoints from localStorage:', error)
    return [true, true, true, true, true, true]
  }
}

// Función para guardar los breakpoints en localStorage
const saveBreakpointsToLocalStorage = (breakpoints) => {
  try {
    const serializedBreakpoints = JSON.stringify(breakpoints)
    localStorage.setItem('breakpoints', serializedBreakpoints)
  } catch (error) {
    console.error('Error saving breakpoints to localStorage:', error)
  }
}

export const breakpointsSlice = createSlice({
  name: 'breakpoints',
  initialState: {
    breakpoints: loadBreakpointsFromLocalStorage()
  },
  reducers: {
    setBreakpoints: (state, action) => {
      state.breakpoints = action.payload
      saveBreakpointsToLocalStorage(action.payload)
    }
  }
})

export const { setBreakpoints } = breakpointsSlice.actions
export default breakpointsSlice.reducer
