import axios from 'axios'

const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:4002/api/v1/user/register',
      userData
    )
    console.log(response)
    if (response.data.error === false) {
      setLocalStorage(userData)
      return {
        error: false,
        message: 'Registro satisfactorio',
        data: response.data
      }
    }
  } catch (error) {
    return error.response.data
  }
}

const setLocalStorage = (data) => {
  localStorage.setItem('user', JSON.stringify(data))
  return
}

export default registerUser

/* 
si hay error de validacion de datos, lo que recibo es un objeto con la propiedad error
*/
