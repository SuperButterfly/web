const { UserModel } = require('../../database/models/index')

const addUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing fields' })
    }
    const user = await UserModel.create({ name, email, password })
    res.status(201).json({ user })
  } catch (error) {
    next(error)
  }
}

module.exports = { addUser }
