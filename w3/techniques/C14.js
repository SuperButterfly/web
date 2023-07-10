export const data = {
  name: 'C14',

  type: 'css',

  relation: ['1.4.4', '1.4.8', '1.4.5', '1.4.9'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'El objetivo de esta técnica es especificar el tamaño de fuente del texto en unidades em para que los agentes de usuario puedan escalar el contenido de manera efectiva. Dado que el em es una propiedad de la fuente, se escala a medida que la fuente cambia de tamaño. Si se especifica un tamaño de fuente para el bodyelemento, todos los demás elementos heredan ese valor, a menos que los anule un selector más específico.',

  example: [
    {
      title: 'Ejemplo 1: tamaños de fuente Em en CSS',
      code: 'strong {font-size: 1.6em}  <h1>Letting the <strong>user</strong> control text size</h1>'
    }
  ],

  relTech: ['C12', 'C13'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Compruebe que el valor de la propiedad CSS que define el tamaño de fuente se expresa en unidades em.'
        }
      ],

      results: 'Las comprobaciones n.º 1 es verdadera'
    }
  ]
}
