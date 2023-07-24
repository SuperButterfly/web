const {
  Workspace,
  Template,
  Component
  // Folder,
  // Asset,
  // ClassSaved
} = require('../../database.js')
const componentsList = require('../toCreate.js')
const { formatData, makeProject } = require('../../utils/getTemplate.js')
const { clearTeleDirectory } = require('../../utils/clearTeleDirectory')

const addTemplate = async (req, res, next) => {
  try {
    const homepage = await Component.create(componentsList.Home)
    const workspacefound = await Workspace.findByPk(req.params.workspaceId)
    if (!workspacefound || !workspacefound.id) {
      throw new Error('Workspace not found')
    }
    const newTemplate = await Template.create(req.body)
    await workspacefound.addProjects(newTemplate)
    await newTemplate.addPages(homepage)
    const template = await retrieveTemplate(req.params.id)
    res.json({ template })
  } catch (error) {
    return next(error)
  }
}

// updateTemplate  x id  x params
const updateTemplate = async (req, res, next) => {
  try {
    const templateUpdated = await Template.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!templateUpdated) throw new Error('Template not found')
    const template = await retrieveTemplate(req.params.id)
    res.json({ template })
  } catch (error) {
    return next(error)
  }
}

// eliminar   x id  x params
const deleteTemplateId = async (req, res, next) => {
  try {
    const template = await Template.update(
      {
        isDeleted: true
      },
      {
        where: { id: req.params.id }
      }
    )
    if (!template) throw new Error('Template not found')
    res.json({ template: 'Deleted ok' })
  } catch (error) {
    return next(error)
  }
}

const formatTele = async (req, res, next) => {
  const { name } = req.body
  try {
    if (!name) throw new Error('Name missed')
    const formatDataRes = await formatData(name)
    if (formatDataRes !== 'ok') throw new Error(formatDataRes)
    res.send(formatDataRes)
  } catch (error) {
    return next(error)
  }
}

const saveTele = async (req, res, next) => {
  const { name, homeId } = req.body
  const { templateId } = req.params
  try {
    if (!name || !templateId) throw new Error('Parameter/s missed')
    const makeProjectRes = await makeProject(name, templateId, homeId)
    if (makeProjectRes !== 'ok') throw new Error(makeProjectRes)
    const clearImportTeleRes = await clearTeleDirectory(
      '/var/www/web/api/project'
    )
    if (clearImportTeleRes !== 'ok') throw new Error(clearImportTeleRes)
    res.send(makeProjectRes)
  } catch (error) {
    return next(error)
  }
}

const retrieveTemplate = async (templateId) => {
  return await Template.findByPk(templateId, {
    include: [
      {
        model: Component,
        as: 'pages'
      },
      {
        model: Component,
        as: 'components'
      }
    ],
    order: [
      [{ model: Component, as: 'pages' }, 'name', 'ASC'],
      [
        /* { model: Template, as: 'projects' }, */ {
          model: Component,
          as: 'components'
        },
        'name',
        'ASC'
      ]
    ]
    // order:[[{model:Component,as:"components"},{model:Component,as:"pages"},'name','ASC']]
  })
}

module.exports = {
  addTemplate,

  updateTemplate,
  deleteTemplateId,

  formatTele,
  saveTele
}
