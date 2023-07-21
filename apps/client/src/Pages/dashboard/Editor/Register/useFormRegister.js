import { useEffect, useState } from 'react'
import registerUser from '../../../../api/services/editor/user/register'

const useFormRegister = () => {
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
    email: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleInputChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const resetStates = () => {
    setLoading(false)
    setError(null)
    setSuccess(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    resetStates()
    try {
      setLoading(true)
      const response = await registerUser(registerData)
      response.error ? setError(response.message) : setSuccess(response.message)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
      setRegisterData({
        username: '',
        password: '',
        email: ''
      })
    }
  }

  /* 
--------   Descomentar para redireccionar al inicio  ----------
---------      si ya hay un usuario existente      -----------
----------         en el localstorage              ------------
*/

  // useEffect(() => {
  //   const user = localStorage.getItem('user')
  //   if (user) {
  //     window.location.href = '/'
  //   }
  // }, [])

  return {
    registerData,
    handleInputChange,
    handleSubmit,
    loading,
    error,
    success
  }
}

export default useFormRegister
