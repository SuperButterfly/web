export const data = {
  name: 'C17',

  type: 'css',

  relation: ['1.4.4'],

  applicability: 'Todas las tecnologias que soporten CSS y HTML',

  resume:
    'El objetivo de esta técnica es garantizar que los controles de formulario basados ​​en texto cambien de tamaño cuando se cambia el tamaño del texto en el agente de usuario. Esto permitirá a los usuarios ingresar texto y leer lo que han ingresado en los cuadros de entrada porque el texto se muestra en el tamaño requerido por el usuario. Los controles de formulario basados ​​en texto incluyen cuadros de entrada (texto y área de texto), así como botones.',

  example: [
    {
      title: 'Ejemplo 1: un formulario de contacto',
      code: '<label for="fname">Nombre</label><input type="text" name="fname" id="fname" /><label for="lname">Apellido</label><input type="text" name="lname" id="lname" /><label for="teléfono">Teléfono</label><input type="text" name="teléfono" id="teléfono" /><label for="email">Correo electrónico</label><input type="text" name="email" id="email" /><input type="enviar" nombre="Enviar" value="Enviar" id="Enviar" />  h1 { font-size: 2em; } p, label, input { font-size: 1em; }'
    },
    {
      title: 'Ejemplo 2: botón de opción',
      code: '<input type="radio" name="r1" value="r1" id="r1" class="geomsize" /><input type="checkbox" name="c1" id="c1" value="c1" class="geomsize" />  entrada.geomsize { ancho: 1.2em; altura: 1.2em; }'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Ingrese algo de texto en los controles de formulario basados ​​en texto que reciben el texto ingresado por el usuario.'
        },
        {
          order: 2,
          task: 'Aumente el tamaño del texto del contenido en un 200%.'
        },
        {
          order: 3,
          task: 'Verifique que el texto en los controles de formulario basados ​​en texto haya aumentado en un 200%.'
        }
      ],

      results: 'La verificación #3 es verdadera'
    }
  ]
}
