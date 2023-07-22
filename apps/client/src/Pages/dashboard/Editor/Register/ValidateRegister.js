function validateRegister(data) {
  // Valida el username tenga mínimo 4 caracteres
  const isUsernameValid = data?.userName?.length >= 4

  // Valida que la contraseña tenga mínimo 8 caracteres, una minúscula, una mayúscula, un carácter especial y un número
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
  const isPasswordValid = passwordRegex.test(data?.password)

  // Valida el formato del email con @
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isEmailValid = emailRegex.test(data?.email)

  return {
    isUsernameValid,
    isPasswordValid,
    isEmailValid
  }
}

export default validateRegister
