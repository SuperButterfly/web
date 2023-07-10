export const data = {
  name: 'C8',

  type: 'css',

  relation: ['1.4.4', '1.4.8', '1.4.5', '1.4.9'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'El objetivo de esta técnica es especificar el tamaño de fuente del texto proporcionalmente para que los agentes de usuario puedan escalar el contenido de manera efectiva. Si se especifica un tamaño de fuente para el bodyelemento, todos los demás elementos heredan ese valor, a menos que los anule un selector más específico.',

  example: [
    {
      title: 'Ejemplo 1: Porcentaje de tamaños de fuente en CSS',
      code: 'strong { font-size: 120%; }  <h1>Permitir que el <strong>usuario</strong> controle el tamaño del texto</h1>'
    }
  ],

  relTech: ['C13', 'C14'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Comprueba que el valor de la propiedad CSS que define el tamaño de fuente es un porcentaje.'
        }
      ],

      results: 'Las comprobaciones n.º 1 es verdadera'
    }
  ]
}
