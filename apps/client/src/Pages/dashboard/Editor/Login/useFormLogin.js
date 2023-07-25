import { useEffect, useState } from 'react'
import loginUser from '../../../../api/services/editor/user/login'
import validateRegister from '../Register/ValidateRegister'

const useFormLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
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
      const response = await loginUser(loginData)
      response.error ? setError(response.message) : setSuccess(response.message)
    } catch (error) {
    } finally {
      setLoading(false)
      setLoginData({
        email: '',
        password: ''
      })
    }
  }
  const handleInputChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
    const validationResults = validateRegister({
      ...loginData,
      [e.target.id]: e.target.value // Usa el nuevo valor ingresado en el input
    })
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    user?.length > 0 && window.location.replace('/')
  }, [])
  return { loginData, loading, error, success, handleSubmit, handleInputChange }
}

export default useFormLogin
