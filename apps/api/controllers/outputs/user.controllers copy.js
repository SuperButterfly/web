const {
  User,
  Workspace,
  Template,
  Component,
  Notification
} = require('../../database.js')
const componentsList = require('../toCreate.js')

const addUser = async (req, res, next) => {
  const { userdata } = req.body
  try {
    const homepage = await Component.create(componentsList.Home)
    const newTemplate = await Template.create()
    const newWorkspace = await Workspace.create()
    const newUser = await User.create(userdata)

    await newTemplate.addPages(homepage)
    await newWorkspace.addProjects(newTemplate)
    await newUser.addWorkspaces(newWorkspace)

    const user = await retrieveUser(userdata.email)
    res.json({ user })
  } catch (error) {
    return next(error)
  }
}

const getUser = async (req, res, next) => {
  try {
    const user = await retrieveUser(req.params.email)

    if (!user || user.isDeleted === true) {
      throw new Error('User does not exists or banned')
    }

    res.json({ user })
  } catch (error) {
    return next(error)
  }
}

const getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } })

    if (!user || user.isDeleted === true) {
      throw new Error('User does not exists or banned')
    }

    res.json({ user })
  } catch (error) {
    return next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: { email: req.params.email }
    })

    if (!updatedUser) {
      throw new Error('User does not exists or banned')
    }
    let email = req.body.email
    if (!email) {
      email = req.params.email
    }
    const user = await retrieveUser(email)
    res.json({ user })
  } catch (error) {
    return next(error, 'error')
  }
}

// eliminar   x email  x params
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.update(
      { isDeleted: true },
      {
        where: { email: req.params.email }
      }
    )

    if (!user) {
      throw new Error('User does not exists or banned')
    } else {
      res.json({ user: 'deleted ok' })
    }
  } catch (error) {
    return next(error, 'error')
  }
}

const retrieveUser = async (email) => {
  return await User.findOne({
    where: { email },

    include: [
      {
        model: Workspace,
        as: 'workspaces',
        include: {
          model: Template,
          as: 'projects',
          include: [
            {
              model: Component,
              as: 'pages'
            },
            {
              model: Component,
              as: 'components'
            }
          ]
        }
      }, /* {      model: Workspace,      as: 'sharedviewer',
      include: {
        model: Template,
        as: 'projects',
        include: [{
          model: Component,
          as: 'pages'
        }, {
          model: Component,
          as: 'components'
        }]
      }
    },
    {
      model: Workspace,
      as: 'sharededitor',
      include: {
        model: Template,
        as: 'projects',
        include: [{
          model: Component,
          as: 'pages'
        }, {
          model: Component,
          as: 'components'
        }]
      }
    },
    */
      {
        model: Notification,
        as: 'notifications'
      }
    ]
  })
}

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getSingleUser
}
