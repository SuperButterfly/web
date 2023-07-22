import style from './Register.module.css'
import validateRegister from './ValidateRegister'
import useFormRegister from './useFormRegister'

const Register = () => {
  const {
    registerData,
    handleInputChange,
    handleSubmit,
    loading,
    error,
    success
  } = useFormRegister()
  // console.log(registerData)
  const { isUsernameValid, isPasswordValid, isEmailValid } =
    validateRegister(registerData)
  return (
    <main className={style.container}>
      <h1 style={{ textAlign: 'center', fontSize: '1.5em' }}>Registro</h1>
      <span>
        La contrasena debe tener minimo 8 caracteres, una minuscula, una
        mayuscula, un caracter especial y un numero
      </span>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.form__group}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="userName"
            placeholder="Ingrese su usuario"
            required
            minLength="4"
            value={registerData.userName}
            onChange={handleInputChange}
          />

          <small
            style={{
              opacity:
                !isUsernameValid && registerData.userName.length > 0 ? '1' : '0'
            }}
          >
            debe tener minimo 4 caracteres
          </small>
        </div>
        <div className={style.form__group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
            minLength="8"
            // maxLength="20"
            required
            value={registerData.password}
            onChange={handleInputChange}
          />

          <small
            style={{
              opacity:
                !isPasswordValid && registerData.password.length > 0 ? '1' : '0'
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
        <div className={style.form__group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese su email"
            required
            value={registerData.email}
            onChange={handleInputChange}
          />
          <small
            style={{
              opacity:
                !isEmailValid && registerData.email.length > 0 ? '1' : '0'
            }}
          >
            email no valido
          </small>
        </div>
        {loading && (
          <p style={{ textAlign: 'center' }}>Solicitando registro...</p>
        )}
        {error && <p style={{ textAlign: 'center' }}>{error}</p>}
        {success && <p style={{ textAlign: 'center' }}>Registro exitoso</p>}
        <button className={style.form__submit} type="submit">
          Registrarse
        </button>
      </form>
    </main>
  )
}

export default Register
