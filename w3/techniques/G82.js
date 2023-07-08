export const data = {
  name: 'G82',

  type: 'general',

  relation: ['1.1.1'],

  applicability: 'Se aplica a todas las tecnologías',

  resume:
    'La técnica de alternativa de texto se utiliza para proporcionar información útil sobre contenido no textual cuando no se puede cumplir el mismo propósito que el contenido original. Esta técnica se logra proporcionando una descripción del propósito del contenido no textual.',

  example: [
    {
      title: 'Ejemplo1:',
      resume:
        'Un applet de desarrollo de coordinación ojo-mano tiene la siguiente alternativa de texto "Applet que utiliza el mouse y objetivos en movimiento para desarrollar la coordinación ojo-mano"'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Un subprograma de cámara que tiene un disco redondo donde presiona los bordes para controlar una cámara remota y un control deslizante en el medio para hacer zoom tiene la siguiente alternativa de texto "Control para apuntar y hacer zoom en una cámara de video remota"'
    }
  ],

  relTech: ['G196', 'H36', 'H37', 'H53', 'H86'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Eliminar, ocultar o enmascarar el contenido que no es texto'
        },
        {
          order: 2,
          task: 'Reemplazarlo con la alternativa de texto'
        },
        {
          order: 3,
          task: 'Verifique que el propósito del contenido que no es de texto sea claro, incluso si se pierde la función.'
        }
      ],

      results: '#3 es cierto.'
    }
  ]
}
