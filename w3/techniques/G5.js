export const data = {
  name: 'G5',

  type: 'general',

  relation: ['2.2.3'],

  applicability: 'Cualquier tecnología que admita gif animados (GIF89a)',

  resume:
    'El objetivo de esta técnica es proporcionar a los usuarios todo el tiempo que necesitan para realizar una actividad. Esta técnica implica proporcionar una actividad específica que no requiere interacción cronometrada. Los usuarios tienen todo el tiempo que necesitan para interactuar con la actividad.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Un examen interactivo para un curso proporciona todas las preguntas en una página web. Los usuarios pueden tomarse todo el tiempo que necesiten para completarlo.'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'En un juego interactivo, los usuarios pueden tomarse todo el tiempo que deseen en su turno en lugar de tener que completar su movimiento en un tiempo limitado.'
    },
    {
      title: 'Ejemplo 3:',
      resume:
        'En una subasta en línea, cada postor puede presentar solo una oferta en lugar de presentar varias ofertas competitivas en función del tiempo. La licitación está abierta durante un día completo, lo que brinda tiempo suficiente para que cualquier persona complete el formulario de oferta simple. Una vez que se cierra la oferta, gana la mejor oferta.'
    }
  ],

  relTech: ['G75', 'G76', 'G198'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Determine si hay interacciones cronometradas presentes (del lado del cliente y/o del servidor).'
        }
      ],

      results: '#1 es falso.'
    }
  ]
}
