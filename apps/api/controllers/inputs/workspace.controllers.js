const JSZip = require('jszip')
const fs = require('fs')
const { Workspace, Template, Component, User } = require('../../database.js')
const path = require('path')
const componentsList = require('../toCreate.js')

const addWorkspace = async (req, res, next) => {
  const userEmail = req.params.userEmail
  try {
    const userFound = await User.findOne({
      where: {
        email: userEmail,
        isDeleted: false
      }
    })
    if (!userFound) throw new Error('User not found or banned')
    const homepage = await Component.create(componentsList.Home)
    const newTemplate = await Template.create()
    const newWorkspace = await Workspace.create()

    await newTemplate.addPages(homepage)
    await newWorkspace.addProjects(newTemplate)
    await userFound.addWorkspaces(newWorkspace)

    const userUpdated = await User.findOne({
      where: {
        email: userEmail,
        isDeleted: false
      },
      include: {
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
      }
    })

    res.json({ workspaces: userUpdated.workspaces })
  } catch (error) {
    return next(error)
  }
}

// updateWorkspace  x id  x params
const updateWorkspace = async (req, res, next) => {
  try {
    await Workspace.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    const workspace = await retrieveWorkspace(req.params.id)
    res.json({ workspace })
  } catch (error) {
    return next(error)
  }
}

const addCollaborator = async (req, res, next) => {
  try {
    const workspaceFound = await Workspace.findByPk(req.params.id)
    if (!workspaceFound) {
      throw new Error('Workspace not found')
    }

    const userFound = await User.findOne({
      where: { email: req.body.email }
    })
    if (!userFound) {
      throw new Error('User not found')
    }

    if (req.query.collaborator === 'viewer') {
      await workspaceFound.addCollaboratorviewer(userFound)
    } else {
      await workspaceFound.addCollaboratoreditor(userFound)
    }

    const workspace = await retrieveWorkspace(req.params.id)
    res.json({ workspace })
  } catch (error) {
    return next(error)
  }
}

const updateCollaborator = async (req, res, next) => {
  try {
    const workspaceFound = await Workspace.findByPk(req.params.id)
    if (!workspaceFound) {
      throw new Error('Workspace not found')
    }

    const userFound = await User.findOne({
      where: { email: req.body.email }
    })
    if (!userFound) {
      throw new Error('User not found')
    }

    if (req.query.collaborator === 'viewer') {
      await workspaceFound.removeCollaboratoreditor(userFound)
      await workspaceFound.addCollaboratorviewer(userFound)
    } else {
      await workspaceFound.removeCollaboratorviewer(userFound)
      await workspaceFound.addCollaboratoreditor(userFound)
    }

    const workspace = await retrieveWorkspace(req.params.id)
    res.json({ workspace })
  } catch (error) {
    return next(error)
  }
}

const removeCollaborator = async (req, res, next) => {
  try {
    const workspaceFound = await Workspace.findByPk(req.params.id)
    if (!workspaceFound) {
      throw new Error('Workspace not found')
    }

    const userFound = await User.findOne({
      where: { email: req.body.email }
    })
    if (!userFound) {
      throw new Error('User not found')
    }

    workspaceFound.removeCollaboratoreditor(userFound)
    workspaceFound.removeCollaboratorviewer(userFound)

    const workspace = await retrieveWorkspace(req.params.id)
    res.json({ workspace })
  } catch (error) {
    return next(error)
  }
}

// eliminar   x id  x params
const deleteWorkspace = async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({ where: { id: req.params.id } })

    workspace.isDeleted = true
    await workspace.save()

    res.json({})
  } catch (error) {
    return next(error)
  }
}

const retrieveWorkspace = async (id) => {
  return await Workspace.findByPk(id, {
    include: [
      {
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
      },
      {
        model: User,
        as: 'collaboratorviewer'
      },
      {
        model: User,
        as: 'collaboratoreditor'
      }
    ],
    order: [
      [
        { model: Template, as: 'projects' },
        { model: Component, as: 'pages' },
        'name',
        'ASC'
      ],
      [
        { model: Template, as: 'projects' },
        { model: Component, as: 'components' },
        'name',
        'ASC'
      ]
    ]
  })
}

const addWorkspaceImport = async (req, res) => {
  const file = req.file
  console.log(file)

  // Verifica si se cargó un archivo
  if (!file) {
    return res
      .status(400)
      .json({ error: 'No se ha proporcionado ningún archivo' })
  }

  try {
    // Lee el contenido del archivo ZIP
    const data = await fs.promises.readFile(file.path)

    // Descomprime el archivo ZIP
    const zip = await JSZip.loadAsync(data)
    const outputFolder = path.join('uploads', file.originalname)

    // Crea la carpeta de salida si no existe
    if (!fs.existsSync('uploads')) {
      fs.mkdirSync('uploads')
    }

    // Extrae cada archivo del ZIP y guárdalo en la carpeta
    await Promise.all(
      Object.entries(zip.files).map(async ([relativePath, file]) => {
        if (!file.dir) {
          const filePath = path.join(outputFolder, relativePath)
          const content = await file.async('nodebuffer')
          fs.writeFileSync(filePath, content)
          console.log(`Archivo descomprimido: ${filePath}`)
        }
      })
    )

    return res
      .status(200)
      .json({ message: 'Archivo ZIP descomprimido exitosamente' })
  } catch (error) {
    console.error('Error al descomprimir el archivo ZIP:', error)
    return res
      .status(500)
      .json({ error: 'Error al descomprimir el archivo ZIP' })
  }
}

module.exports = {
  addWorkspace,
  updateWorkspace,
  addCollaborator,
  updateCollaborator,
  removeCollaborator,
  deleteWorkspace,
  addWorkspaceImport
}
