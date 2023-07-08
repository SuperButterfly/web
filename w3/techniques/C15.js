export const data = {
  name: 'C15',

  type: 'css',

  relation: ['1.4.1', '2.4.7'],

  applicability: 'CSS, HTML and XHTML',

  resume:
    'El objetivo de esta técnica es demostrar cómo se puede mejorar la apariencia visual a través de hojas de estilo para proporcionar comentarios visuales cuando un elemento interactivo tiene el foco o cuando un usuario se desplaza sobre él con un dispositivo señalador. Resaltar el elemento que tiene el foco o sobre el que se pasa el mouse puede proporcionar información como el hecho de que el elemento es interactivo o el alcance del elemento interactivo.',

  example: [
    {
      title: 'Ejemplo 1: Elementos de enlace',
      resume:
        'En este ejemplo, los indicadores de enfoque del mouse y del teclado se han aplicado a los elementos de enlace. CSS se ha utilizado para aplicar un color de fondo cuando los elementos del enlace reciben el foco.',
      code: '#mainnav a:hover, #mainnav a:active, #mainnav a:focus {background-color: #DCFFFF; color:#000066;}'
    },
    {
      title: 'Ejemplo 2: Resaltar elementos que reciben atención',
      resume:
        'En este ejemplo, la pseudoclase :focus se usa para cambiar el estilo aplicado a los campos de entrada cuando reciben el foco cambiando el color de fondo.',
      code: '<html><head><style type="text/css">input.text:focus {background-color: #7FFF00; color: #000;} input[type=checkbox]:focus+label, input[type=radio]:focus+label {background-color: #1E2EB8; color: #FFF;}</style></head><body><form method="post" action="form.php"><p><label for="fname">Name: </label><input class="text" type="text" name="fname" id="fname" /></p><p><input type="radio" name="sex" value="male" id="sm" /> <label for="sm">Male</label><br /><input type="radio" name="sex" value="female" id="sf" /> <label for="sf">Female</label><p></form></body></html>'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Con el mouse, desplace el cursor sobre el elemento.'
        },
        {
          order: 2,
          task: 'Comprueba que el fondo o borde cambia de color.'
        },
        {
          order: 3,
          task: 'Aleje el mouse del objeto antes de intentar enfocar con el teclado.'
        },
        {
          order: 4,
          task: 'Con un teclado, tabule hasta el elemento.'
        },
        {
          order: 5,
          task: 'Comprueba que el fondo o borde cambia de color.'
        },
        {
          order: 6,
          task: 'Compruebe que los cambios de color del fondo o del borde se eliminan cuando el elemento pierde el foco.'
        }
      ],

      results: 'Las comprobaciones n.º 2, n.º 5 y n.º 6 son verdaderas.'
    }
  ]
}
