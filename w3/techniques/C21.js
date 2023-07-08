export const data = {
  name: 'C21',

  type: 'css',

  relation: ['1.4.8', '1.4.12'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'Muchas personas con discapacidades cognitivas tienen problemas para seguir líneas de texto cuando un bloque de texto está a espacio simple. Proporcionar un espacio entre 1,5 y 2 les permite comenzar una nueva línea más fácilmente una vez que han terminado la anterior.',

  example: [
    {
      title: 'Ejemplo 1',
      resume:
        'Establecer el elemento en una altura de línea de 1,5. En la hoja de estilo establece las características del elemento.',
      code: 'p { line-height: 150%; } <p> Lorem ipsum dolor sit …  </p>'
    },
    {
      title: 'Ejemplo 2: ',
      resume:
        'Establecer una clase en una altura de línea de 1,5 (espacio y medio entre líneas). En la hoja de estilo, defina la clase.',
      code: 'p.tall {line-height:150%}  <p class="tall"> Lorem ipsum dolor sit …  </p>'
    },

    {
      title: 'Ejemplo 3: ',
      resume:
        'Establecer una clase en altura de línea a doble espacio. En la hoja de estilo, defina la clase.',
      code: 'p.tall {line-height:200%}  <p class="tall"> Lorem ipsum dolor sit …  </p>'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Abrir contenido en un navegador.'
        },
        {
          order: 2,
          task: 'Comprueba que el espacio entre líneas en los bloques de texto esté entre 1,5 y 2.'
        }
      ],

      results: '#2 es verdadera.'
    }
  ]
}
