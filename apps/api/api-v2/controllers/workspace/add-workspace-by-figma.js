const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const fs = require('fs')
const JSZip = require('jszip')
const path = require('path')
const cheerio = require('cheerio')


const addWorkspaceByFigma = async (req, res, next) => {
  const file = req.file
  console.log(file)

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

  if (!indexHtmlFile) {
    throw new ClientError('No se encontró el archivo index.html en el ZIP.')
  }

  // Lee el contenido del archivo index.html
  const indexHtmlContent = await indexHtmlFile.async('string')

  // Parsea el contenido HTML usando cheerio
  const $ = cheerio.load(indexHtmlContent)

  // Función para generar el árbol de etiquetas HTML anidadas
  const generateNestedTree = (element) => {
    // Ignorar elementos con el tag "image"
    if (element.tagName === 'image') {
      return null
    }

    const tagObject = {
      tag: element.tagName,
      attributes: {},
      children: [],
    }
    // Agrega los atributos de la etiqueta al objeto (si los tiene)
    const attributes = element.attribs
    if (attributes) {
      Object.keys(attributes).forEach((attr) => {
        tagObject.attributes[attr] = attributes[attr]
      })
    }

    // Recorre los hijos del elemento actual
    element.children.forEach((child) => {
      // Ignora los nodos de texto y comentarios
      if (child.type === 'tag' || child.type === 'script') {
        const nestedChild = generateNestedTree(child)
        if (nestedChild) {
          tagObject.children.push(nestedChild)
        }
      }
    })

    return tagObject
  }
  // Obtiene el árbol de etiquetas HTML anidadas desde el elemento raíz
  const rootElement = $('html').get(0) // Assuming root is <html> tag
  const htmlTree = generateNestedTree(rootElement)
 
    response(res, 200, htmlTree)
  }
  

module.exports = { addWorkspaceByFigma: catchedAsync(addWorkspaceByFigma) }
