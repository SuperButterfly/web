import {setScreenshot} from "../slices/screenshotSlices"
import axios from 'axios'

export const getScreenshot = (componentName) => async (dispatch)=>{
    try{

        const {data} = await axios.get(`/template/screen/${componentName}`)
        console.log(data.screenshots)
        dispatch(setScreenshot(data.screenshots))
    }catch(error){
        console.log(error.message)
    }
}