const { UserModel } = require('../../database/models/index')

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, email, password } = req.body
    const user = await UserModel.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    )
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

module.exports = updateUser
