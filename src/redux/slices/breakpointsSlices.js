import { createSlice } from '@reduxjs/toolkit';

export const breakpointsSlices = createSlice({
  name: 'breakpoints',
  initialState: {
    breakpoints: [true, true, true, true, true, true]
  },
  reducers: {
    setBreakpoints(state, actions) {
      state.breakpoints = actions.payload
    }
  }
});

export const { setBreakpoints } = breakpointsSlices.actions;
export default breakpointsSlices.reducer;
