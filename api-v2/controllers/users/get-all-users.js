const { UserModel } = require('../../database/models/index')

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.findAll({})
    res.status(200).json({ users })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllUsers
