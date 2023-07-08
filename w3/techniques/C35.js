export const data = {
  name: 'C35',

  type: 'css',

  relation: ['1.4.12'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'La técnica de resumen de texto se utiliza para permitir que los usuarios resuman el contenido de un documento para que sea más fácil de entender. Esto puede incluir el uso de herramientas de resumen como la extracción de frases clave, la eliminación de palabras vacías, la consolidación de contenido, la abreviación de palabras, entre otros. Esta técnica es útil para personas con discapacidades cognitivas o con baja visión que necesitan una forma más clara y concisa de leer el contenido.',

  example: [
    {
      title:
        'Ejemplo 1: una caja de tamaño con espacio para permitir la expansión',
      code: '<nav><ul><li><a href="/">Home</a></li><li><a href="/contact/">Contact</a></li><ul></nav>'
    },
    {
      title: 'Ejemplo 2: un cuadro que se expande con el tamaño del texto',
      code: 'nav li {display: inline-block;}  <nav><ul><li><a href="/">Home</a></li><li><a href="/contact/">Contact</a></li></ul></nav>'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Establezca el nivel de zoom al 100%.'
        },
        {
          order: 2,
          task: 'Utilice una herramienta u otro mecanismo para aplicar las métricas de espaciado de texto (altura de línea y espaciado de párrafo, letra y palabra), como el Bookmarklet de espaciado de texto o un complemento de navegador de estilo de usuario.'
        },
        {
          order: 3,
          task: 'Verifique que todo el contenido y la funcionalidad estén disponibles, por ejemplo, el texto en los contenedores no está truncado y no se superpone a otro contenido.'
        }
      ],

      results: 'La verificación #3 es verdadera'
    }
  ]
}
