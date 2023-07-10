export const data = {
  name: 'G179',

  type: 'general',

  relation: ['1.4.4'],

  applicability:
    'Todas las tecnologías que redistribuyen el texto cuando se cambia el tamaño de las ventanas. ',

  resume:
    'Algunas aplicaciones de usuario admiten cambiar el tamaño del texto sin cambiar otras dimensiones del contenedor de texto. La pérdida de contenido o funcionalidad puede ocurrir cuando el texto desborda el espacio que se le asignó. Sin embargo, las propiedades de diseño pueden proporcionar una forma de continuar mostrando el contenido de manera efectiva. Los tamaños de los bloques se pueden definir lo suficientemente amplios como para que el texto no se desborde cuando se cambia el tamaño en un 200 %. El texto puede ajustarse cuando ya no cabe dentro del bloque, y el bloque puede ser lo suficientemente alto como para que todo el texto siga entrando en el bloque. El bloque puede proporcionar barras de desplazamiento cuando el texto redimensionado ya no cabe',

  example: [
    {
      title: 'Ejemplo 1: un diseño de página de varias columnas',
      resume:
        'HTML y CSS se utilizan para crear un diseño de dos columnas para una página de texto. El uso del valor predeterminado de la propiedad de espacio en blanco, normal, hace que el texto se ajuste. Entonces, a medida que el tamaño del texto aumenta al 200%, el texto se redistribuye y la columna de texto crece. Si la columna es demasiado larga para la ventana gráfica, el agente de usuario proporciona barras de desplazamiento para que el usuario pueda desplazar el texto a la vista porque el autor ha especificado la regla CSS overflow:scroll o overflow:auto.'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Un diseño de periódico con bloques de texto en columnas. Los bloques tienen un ancho fijo, pero no una altura establecida. Cuando se cambia el tamaño del texto en el navegador, el texto se ajusta y hace que los bloques sean más altos.'
    }
  ],

  relTech: ['G146', 'C28'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Aumente el tamaño del texto al 200%.'
        },
        {
          order: 2,
          task: 'Compruebe si todo el contenido y la funcionalidad están disponibles.'
        }
      ],

      results: 'Las comprobacion n.º 2 es verdadera'
    }
  ]
}
