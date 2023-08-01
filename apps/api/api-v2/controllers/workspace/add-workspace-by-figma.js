const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const fs = require('fs')
const JSZip = require('jszip')
const path = require('path')
const cheerio = require('cheerio')
const getOrderNumber = require('../../utils/helpers/getOrderNumber')
const {addPage} = require('../page/add-page')


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

  // Crear la página
  const page = await models.PageModel.create({
    name: 'New Page', // Set the name of the page as desired
    projectId,
    title:
      htmlTree.children.find(
        (node) => node.tag === 'head'
      )?.children.find((child) => child.tag === 'title')?.children[0]?.text || 'Untitled',
  })

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

  // Objeto para almacenar las clases CSS y sus estilos asociados
  const cssStyles = {}

  // Función para parsear el contenido de style.css y almacenar los estilos en cssStyles
  const parseCssStyles = () => {
    const styleBlocks = styleCssContent.split('}')

    for (const block of styleBlocks) {
      const selectorBlock = block.split('{')
      if (selectorBlock.length === 2) {
        const selector = selectorBlock[0].trim()
        const styles = selectorBlock[1].trim().split(';')
        const stylesObj = {}
        for (const style of styles) {
          const [property, value] = style.split(':')
          if (property && value) {
            stylesObj[property.trim()] = value.trim()
          }
        }
        cssStyles[selector] = stylesObj
      }
    }
  }

  // Llamamos a la función para parsear el estilo CSS
  parseCssStyles()

  // Función para crear el componente y sus propiedades recursivamente
  const createComponentsRecursively = async (node, parentId) => {
    for (const childNode of node.children) {
      const component = await models.ComponentModel.create({
        tag: childNode.tag,
        order: await getOrderNumber(parentId),
        attributes: childNode.attributes,
        nativeAttributes: {},
        isShow: true,
        pageId: page.id,
        projectId,
        parentId,
      })

      // Crear la propiedad "style" para el componente y asignar los estilos de la clase CSS
      const componentClass = childNode.attributes.class // Asumimos que el atributo "class" contiene el nombre de la clase CSS
      console.log(componentClass)
      console.log(cssStyles[componentClass])
      if (componentClass && cssStyles[componentClass]) {
        await models.PropertyModel.create({
          style: cssStyles[componentClass], // Asignar los estilos de la clase CSS al componente
          isDeleted: false,
          ComponentId: component.id, // Relacionar la propiedad con el componente creado
        })
      }

      if (childNode.children) {
        await createComponentsRecursively(childNode, component.id)
      }
    }
  }

  const bodyNode = htmlTree.children.find((node) => node.tag === 'body')
  if (bodyNode) {
    await createComponentsRecursively(bodyNode, bodyComponent.id)
  }

  response(res, 200, page)
}

module.exports = { addWorkspaceByFigma: catchedAsync(addWorkspaceByFigma) }
