// https://www.w3.org/WAI/WCAG21/Techniques/failures/F3.html

export const data = {
  name: 'G94',
  type: 'general',
  relation: ['1.1.1'],
  applicability: 'Se aplica a todas las tecnologías',
  resume:
    'La técnica de alternativa de texto consiste en crear una alternativa de texto que tenga el mismo propósito y presente la misma información que el contenido original que no es de texto. Esto permite eliminar el contenido que no es de texto y reemplazarlo con el texto sin perder funcionalidad o información. Al decidir qué texto incluir en la alternativa, es útil considerar el propósito y la información que presenta el contenido que no es de texto, así como cualquier palabra importante que contenga. Si el texto es más de lo que cabe en una alternativa de texto corto, se debe proporcionar también una alternativa de texto largo con el texto completo.',
  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Un botón de búsqueda utiliza una imagen de una lupa. La alternativa de texto es "buscar" y no "lupa"'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Una imagen muestra cómo se hace un nudo, incluidas las flechas que muestran cómo van las cuerdas para hacer el nudo. La alternativa de texto describe cómo atar el nudo, no cómo se ve la imagen.'
    },
    {
      title: 'Ejemplo 3:',
      resume:
        'Una imagen muestra cómo se ve un juguete de frente. La alternativa de texto describe una vista frontal del juguete.'
    },
    {
      title: 'Ejemplo 4:',
      resume:
        'Una animación muestra cómo cambiar un neumático. Una breve alternativa de texto describe de qué se trata la animación. Una alternativa de texto largo describe cómo cambiar un neumático.'
    },
    {
      title: 'Ejemplo 5:',
      resume:
        'Un logotipo de la compañía TechTron aparece al lado de cada producto en una lista que está hecha por eso y tiene una alternativa de texto breve que dice "TechTron".'
    },
    {
      title: 'Ejemplo 6:',
      resume:
        'Un gráfico que muestra las ventas de octubre tiene una alternativa de texto breve de "Gráfico de ventas de octubre". También tiene una descripción larga que proporciona toda la información en el gráfico.'
    },
    {
      title: 'Ejemplo 7:',
      resume:
        'Un encabezado contiene una imagen de las palabras "La historia de la guerra" en texto estilizado. El texto alternativo de la imagen es "La historia de la guerra".'
    },
    {
      title: 'Ejemplo 8:',
      resume:
        'Una imagen de una serie de libros en un estante contiene áreas interactivas que proporcionan los medios de navegación a una página web sobre el libro en particular. La alternativa de texto "Los libros disponibles para comprar en esta sección. Seleccione un libro para obtener más detalles sobre ese libro". describe la imagen y la naturaleza interactiva.'
    }
  ],
  relTech: ['G92', 'G95', 'G196', 'H2', 'H24', 'H36', 'H37', 'H53', 'H86'],
  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Eliminar, ocultar o enmascarar el contenido que no sea de texto'
        },
        {
          order: 2,
          task: 'Reemplázalo con la alternativa de texto'
        },
        {
          order: 3,
          task: 'Verifique que no se pierda nada (el propósito del contenido que no es de texto se cumple con la alternativa de texto)'
        },
        {
          order: 4,
          task: 'Si el contenido que no es de texto contiene palabras que son importantes para comprender el contenido, las palabras se incluyen en la alternativa de texto'
        }
      ],
      results:
        'La verificación #3 es verdadera. Si el contenido que no es de texto contiene palabras que son importantes para comprender el contenido, la verificación #4 también es verdadera'
    }
  ]
}
