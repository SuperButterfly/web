import validateRegister from '../Register/ValidateRegister'
import style from './Login.module.css'
import useFormLogin from './useFormLogin'
const Login = () => {
  const {
    loginData,
    loading,
    error,
    success,
    handleSubmit,
    handleInputChange
  } = useFormLogin()
  const { isPasswordValid, isEmailValid } = validateRegister(loginData)
  return (
    <main className={style.container}>
      <h1 style={{ textAlign: 'center', fontSize: '1.5em' }}>Ingresar</h1>

      <form onSubmit={handleSubmit} className={style.form}>
        <a href="/register">registro</a>
        <div className={style.form__group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese su email"
            required
            value={loginData.email}
            onChange={handleInputChange}
          />
          <small
            style={{
              opacity: !isEmailValid && loginData.email.length > 0 ? '1' : '0'
            }}
          >
            email no valido
          </small>
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
          <small
            style={{
              opacity:
                !isPasswordValid && loginData.password.length > 0 ? '1' : '0'
            }}
          >
            <div style={{ display: 'flex', gap: '1em' }}>
              <li>8 caracteres</li>
              <li>1 minuscula</li>
              <li>1 mayuscula</li>
              <li>1 caracter especial</li>
              <li>1 numero</li>
            </div>
          </small>
        </div>

        {loading && (
          <p style={{ textAlign: 'center' }}>Solicitando registro...</p>
        )}
        {error && (
          <p style={{ textAlign: 'center' }}>
            Hubo un error, intente nuevamente
          </p>
        )}
        {success && <p style={{ textAlign: 'center' }}>Registro exitoso</p>}
        <button className={style.form__submit} type="submit">
          Ingresar
        </button>
      </form>
    </main>
  )
}

export default Login
