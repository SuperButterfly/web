const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const fs = require('fs')
const JSZip = require('jszip')
const path = require('path')
const cheerio = require('cheerio')
const parseCssStyles = require('../../utils/helpers/parseCssStyles')
const generateNestedTree = require('../../utils/helpers/generateNestedTree')
const createComponentsRecursively = require('../../utils/helpers/createComponentsRecursively')

const addWorkspaceByFigma = async (req, res, next) => {
  const file = req.file
  const { projectId } = req.query

  // Lee el contenido del archivo ZIP
  const data = await fs.promises.readFile(file.path)

  // Descomprime el archivo ZIP
  const zip = await JSZip.loadAsync(data)
  const outputFolder = path.join('uploads', file.originalname)

  // Crea la carpeta de salida si no existe
  if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads')
  }

  // Busca el archivo index.html dentro del ZIP
  const indexHtmlFile = zip.file('index.html')
  const styleCssFile = zip.file('style.css') // Nuevo: Busca el archivo style.css dentro del ZIP

  if (!indexHtmlFile) {
    throw new ClientError('No se encontró el archivo index.html en el ZIP.')
  }

  // Lee el contenido del archivo index.html
  const indexHtmlContent = await indexHtmlFile.async('string')

  // Lee el contenido del archivo style.css
  let styleCssContent = '' // Inicializamos como cadena vacía
  if (styleCssFile) {
    styleCssContent = await styleCssFile.async('string')
  }

  // Parsea el contenido HTML usando cheerio
  const $ = cheerio.load(indexHtmlContent)

  // Obtiene el árbol de etiquetas HTML anidadas desde el elemento raíz
  const rootElement = $('html').get(0) // Assuming root is <html> tag
  const htmlTree = generateNestedTree(rootElement)

  // Parsea los estilos CSS
  const cssStyles = parseCssStyles(styleCssContent)

  // Crear la página
  const page = await models.PageModel.create({
    name: 'New Page', // Set the name of the page as desired
    projectId,
    title:
      htmlTree.children.find(
        (node) => node.tag === 'head'
      )?.children.find((child) => child.tag === 'title')?.children[0]?.text || 'Untitled',
  })

  // Obtiene el nodo "body" del árbol de etiquetas HTML
  const bodyNode = htmlTree.children.find((node) => node.tag === 'body')

  // Verificar si se encontró el nodo "body"
  if (!bodyNode) {
    throw new ClientError('No se encontró el nodo <body> en el archivo index.html.')
  }

  // Crear el componente 'body' asociado con la página
  const bodyComponent = await models.ComponentModel.create({
    tag: 'body',
    order: 1,
    attributes: {},
    nativeAttributes: {},
    isShow: true,
    pageId: page.id,
    projectId,
  })

  // Función para crear componentes y propiedades recursivamente
  await createComponentsRecursively(bodyNode, bodyComponent.id, models, page, projectId, cssStyles)

  response(res, 200, page)
}

module.exports = { addWorkspaceByFigma: catchedAsync(addWorkspaceByFigma) }


