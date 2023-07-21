import { useEffect, useState } from 'react'
import style from './Login.module.css'
import axios from 'axios'
const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
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
    // service.login
    const loginUser = async (loginData) => {
      try {
        const response = await axios.get(
          'http://localhost:4002/api/v1/user/login',
          loginData
        )
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    try {
      setLoading(true)
      const response = await loginUser(loginData)
      console.log(response)
    } catch (error) {
    } finally {
      setLoading(false)
      setLoginData({
        username: '',
        password: ''
      })
    }
  }
  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value })
  }

  // useEffect(() => {
  //   const user = localStorage.getItem('user')
  //   user && window.location.replace('/')
  // }, [])
  return (
    <main className={style.container}>
      <h1 style={{ textAlign: 'center', fontSize: '1.5em' }}>Ingresar</h1>

      <form onSubmit={handleSubmit} className={style.form}>
        <a href="/register">registro</a>
        <div className={style.form__group}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Ingrese su usuario"
            required
            minLength="6"
            value={loginData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.form__group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
            minLength="6"
            // maxLength="20"
            required
            value={loginData.password}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className={style.form__group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese su email"
            required
            value={registerData.email}
            onChange={handleInputChange}
          />
        </div> */}
        {loading && (
          <p style={{ textAlign: 'center' }}>Solicitando registro...</p>
        )}
        {/* {error && (
          <p style={{ textAlign: 'center' }}>
            Hubo un error, intente nuevamente
          </p>
        )}
        {success && <p style={{ textAlign: 'center' }}>Registro exitoso</p>} */}
        <button className={style.form__submit} type="submit">
          Ingresar
        </button>
      </form>
    </main>
  )
}

export default Login
