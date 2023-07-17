const fs = require('fs')
const jsdom = require('jsdom')
const beautify = require('js-beautify').html
const { JSDOM } = jsdom

function formatearCSS(nombreArchivo) {
  // Leer el contenido del archivo CSS
  const contenidoCSS = fs.readFileSync(nombreArchivo, 'utf8')

  // Aplicar las normas de formato
  const cssFormateado = contenidoCSS
    .replace(/{/g, '{\n')
    .replace(/}/g, '}\n')
    .replace(/;/g, ';\n')

  // Escribir el CSS formateado en un nuevo archivo
  const nombreArchivoFormateado = `${
    nombreArchivo.split('.')[0]
  }_formateado.css`
  fs.writeFileSync(nombreArchivoFormateado, cssFormateado)

  console.log(
    `Se ha creado el archivo ${nombreArchivoFormateado} con el CSS formateado.`
  )
}

// Leer el contenido del archivo HTML
const contenidoHTML = fs.readFileSync('./index.html', 'utf8')

// Crear un objeto JSDOM a partir del contenido del archivo HTML
const dom = new JSDOM(contenidoHTML)

// Obtener el objeto window a partir del objeto JSDOM
const window = dom.window

let contadorComponentes = 0

function iterarSobreElementos(elemento, esPadre) {
  // Procesar el elemento actual

  if (esPadre) {
    // Si es el div padre, agregar el atributo name="padre"
    elemento.setAttribute('name', 'padre')
  } else {
    // Si no es el div padre, agregar el atributo name="componente_xxx" a cualquier etiqueta
    contadorComponentes++
    elemento.setAttribute('name', `componente_${contadorComponentes}`)
    console.log(
      'Procesando elemento:',
      elemento.tagName,
      `name="componente_${contadorComponentes}"`
    )
  }

  // Iterar sobre los hijos del elemento actual
  for (let i = 0; i < elemento.children.length; i++) {
    iterarSobreElementos(elemento.children[i], false)
  }
}

// Obtener el elemento raíz del archivo HTML
const raiz = window.document.documentElement

// Llamar a la función recursiva con el elemento raíz y true para indicar que es el div padre
iterarSobreElementos(raiz, true)

// Obtener el HTML procesado como una cadena
let htmlProcesado = dom.serialize()

// Formatear el HTML procesado con js-beautify
htmlProcesado = beautify(htmlProcesado, { indent_size: 2, extra_liners: [] })

// Escribir el HTML procesado en un nuevo archivo
fs.writeFileSync('./index_procesado.html', htmlProcesado)

// Llamar a la función para formatear el archivo CSS
formatearCSS('./style.css')
