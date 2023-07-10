export const data = {
  name: 'C33',

  type: 'css',

  relation: ['1.4.10'],

  applicability: 'Todas las tecnologias que soporten CSS y Html',

  resume:
    'Las URL largas pueden interrumpir el flujo de contenido al ampliar la página. Esta técnica busca evitar esto mediante el uso de técnicas CSS para adaptarse al espacio de visualización disponible. Se recomienda usar un enlace de texto legible por humanos en lugar de una URL larga. Los navegadores ajustarán estas URL usando caracteres como guiones, espacios, signos de interrogación y ampersands. A veces, eso no es suficiente.',

  example: [
    {
      title: 'Ejemplo 1: ruptura de URL largas',
      resume:
        'El uso del siguiente CSS hará que las URL largas se rompan en los lugares apropiados (guiones, espacios, etc.) y dentro de las palabras sin causar reflujo. Lista de declaraciones CSS utilizadas y por qué se utilizan: overflow-wrap: break-word : permite dividir palabras y envolverlas dentro de palabras word-wrap: break-word : Permite dividir y envolver palabras. (solo Microsoft)'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Muestre la página web en un agente de usuario con capacidad de zoom del 400 % y establezca las dimensiones de la ventana gráfica (en píxeles CSS) en 1280 de ancho y 1024 de alto.'
        },
        {
          order: 2,
          task: 'Ampliar en un 400%.'
        },
        {
          order: 3,
          task: 'Para el contenido que se lee horizontalmente, verifique que todo el contenido y la funcionalidad estén disponibles sin desplazamiento horizontal.'
        },
        {
          order: 4,
          task: 'Para el contenido que se lee verticalmente, verifique que todo el contenido y la funcionalidad estén disponibles sin desplazamiento vertical.'
        }
      ],

      results: '#3 y #4 son verdaderas.'
    }
  ]
}
