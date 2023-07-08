export const data = {
  name: 'C19',

  type: 'css',

  relation: ['1.4.8'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'Esta técnica describe cómo alinear bloques de texto a la izquierda o a la derecha configurando la propiedad CSS text-align.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'En el siguiente ejemplo, el texto está alineado a la izquierda. En la hoja de estilos, defina la clase:',
      code: 'p.left {text-align: left}  <p class="left"> Lorem ipsum dolor sit …</p>'
    },
    {
      title: 'Ejemplo 2: ',
      resume:
        'En el siguiente ejemplo, el texto está alineado a la derecha. En la hoja de estilos, defina la clase:',
      code: 'p.left {text-align: right}  <p class="left"> Lorem ipsum dolor sit …</p>'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Compruebe que el texto esté alineado a la izquierda o a la derecha.'
        }
      ],

      results: '#1 es verdadera.'
    }
  ]
}
