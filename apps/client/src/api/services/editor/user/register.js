import axios from 'axios'

const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:4002/api/v1/user/register',
      userData
    )
    if (response.data.error === false) {
      return {
        error: false,
        message: 'Registro satisfactorio'
      }
    }
  } catch (error) {
    // console.log(error)
    return {
      error: true,
      message: 'Error al registrar usuario'
    }
    // return error.response.data

    // return error.response.data
  }
}

export default registerUser

/* 
si hay error de validacion de datos, lo que recibo es un objeto con la propiedad error
*/
