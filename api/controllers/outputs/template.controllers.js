const {
  Workspace,
  Template,
  Component
  // Folder,
  // Asset,
  // ClassSaved
} = require('../../database.js')
const { JSDOM } = require('jsdom')
const fs = require('fs');
const path = require('path')
const puppeteer = require('puppeteer');
const {
  getTeleProject,
  formatData,
  makeProject
} = require('../../utils/getTemplate.js')
const { clearTeleDirectory } = require('../../utils/clearTeleDirectory')
const { componentsList } = require('../toCreate.js')

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

// getTemplate  x id  x params
const getTemplate = async (req, res, next) => {
  try {
    const template = await retrieveTemplate(req.params.id)
    res.json({ template })
  } catch (error) {
    return next(error)
  }
}

// getWorkspaceTemplates x workspaceId x params
const getWorkspaceTemplates = async (req, res, next) => {
  try {
    const workspaceFound = await Workspace.findOne({
      where: { id: req.params.workspaceId },
      include: {
        model: Template,
        as: 'projects',
        where: { isDeleted: false },
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
    if (!workspaceFound) throw new Error('Workspace not found')
    res.json({ templates: workspaceFound.projects })
  } catch (error) {
    return next(error)
  }
}

const getTele = async (req, res, next) => {
  const { URL } = req.body
  try {
    if (!URL) throw new Error('URL missed')
    const getTeleProjectRes = await getTeleProject(URL)
    if (getTeleProjectRes !== 'ok') throw new Error(getTeleProjectRes)
    res.send(getTeleProjectRes)
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

const createElemenFromJson = (template) => {
  const { tag, properties, children, attributes, name } = template
  const dom = new JSDOM()
  const document = dom.window.document
  const element = document.createElement(tag)
  if (name) element.setAttribute('name', name)
  if (properties) {
    for (const [key, value] of Object.entries(properties)) {
      if (key === 'style') {
        const styleObj = value
        for (const [styleKey, styleValue] of Object.entries(styleObj)) {
          element.style[styleKey] = styleValue
        }
      } else if (key === 'innerHTML') {
        element.innerHTML = value
      } else {
        element[key] = value
      }
    }
  }
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value)
    }
  }
  if (children) {
    for (const child of children) {
      const childEelement = createElemenFromJson(child)
      element.appendChild(childEelement)
    }
  }
  return element
}

const getScreenComponentJSON = async (req, res) => {
  try {
    const { component } = req.params
    if (!component)
      return res.status(400).json({ error: 'Component name is required' })
    const folderPath = path.resolve(__dirname,`../../componentsJson/${component}`);
    console.log(folderPath)
    const componentsJson = fs.readdirSync(folderPath)

    if (!componentsJson||componentsJson.length===0)
      return res.status(404).json({ error: 'Component not found' })

    const browser = await puppeteer.launch({ headless: 'new' });
    const screenshots = []
    for (const fileName of componentsJson) {
      const filePath = path.join(folderPath, fileName)
      const fileContent = fs.readFileSync(filePath)
      const componentJson = JSON.parse(fileContent)
      const componentHtml = createElemenFromJson(componentJson)//.outerHTML
      const page = await browser.newPage();
      await page.setContent(componentHtml.outerHTML);
      const screenshotBuffer = await page.screenshot();
      const jpgBuffer = screenshotBuffer.toString('base64')
      screenshots.push(jpgBuffer);
    }
    await browser.close()
    res.json( {screenshots} );
  } catch (error) {
    return res.status(400).send({ name: error.name, error: error.message })
  }
}

module.exports = {
  getTemplate,
  getWorkspaceTemplates,
  addTemplate,
  getTele,
  formatTele,
  saveTele,
  getScreenComponentJSON
}
