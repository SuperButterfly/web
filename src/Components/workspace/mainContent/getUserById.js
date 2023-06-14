import axios from "axios";

export const getUserById = async (userId) => {
  //console.log("body", body)
/*
   userId = "id del usuario al que agrega la notificacion"
*/
  try {
    const {data} = await axios.get(`https://api-web.aythen.com/api/user/single/${userId}`)
    //console.log("data", data)
    return data;  
  } catch (error) {
    return error.message; // mensaje de error
  }
};
