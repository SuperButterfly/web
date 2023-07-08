export const data = {
  name: 'C13',

  type: 'css',

  relation: ['1.4.4', '1.4.8', '1.4.5', '1.4.9'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'El objetivo de esta técnica es especificar un tamaño de fuente con nombre que exprese el tamaño de fuente relativo deseado. Estos valores proporcionan sugerencias para que el agente de usuario pueda elegir un tamaño de fuente relativo al tamaño de fuente heredado.',

  example: [
    {
      title: 'Ejemplo 1: Tamaños de fuente con nombre en CSS',
      code: 'strong {font-size: larger}  <h1>Letting the <strong>user</strong> control text size</h1>'
    }
  ],

  relTech: ['C12', 'C14'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Compruebe que el valor de la propiedad CSS que define el tamaño de fuente es xx-pequeño, xx-pequeño, x-pequeño, pequeño, mediano, grande, x-grande, xx-grande, xpequeño o más grande.'
        }
      ],

      results: 'Las comprobaciones n.º 1 es verdadera'
    }
  ]
}
