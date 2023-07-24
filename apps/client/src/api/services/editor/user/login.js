import axios from 'axios'

const loginUser = async (loginData) => {
  console.log(loginData)
  try {
    const response = await axios.post(
      'http://localhost:4002/api/v1/user/login',
      loginData
    )
    console.log(response)
    // ------ Descomentar cuando el back mande correctamente el mensaje
    // if (response.data.error === false) {
    setLocalStorage(response.data.data)
    //   return {
    //     error: false,
    //     message: response.data.message,
    //     data: response.data.data
    //   }
    // }
  } catch (error) {
    console.log(error)
    // return {
    //   error: true,
    //   message: error.message,
    // }
  }
}

export default loginUser

const setLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}
