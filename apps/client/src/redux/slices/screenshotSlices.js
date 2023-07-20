import { createSlice } from '@reduxjs/toolkit'

export const screenshotSection = createSlice({
    name : "screenshot",
    initialState:{
        screenshots:[]
    },
    reducers:{
        setScreenshot(state,action){
            state.screenshots=action.payload
        },
        cleanScreenshot(state){
            state.screenshots=[]
        }
    }
})

export const { setScreenshot, cleanScreenshot } = screenshotSection.actions;

export default screenshotSection.reducer;