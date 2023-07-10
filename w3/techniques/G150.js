export const data = {
  name: 'G150',

  type: 'general',

  relation: ['1.2.9'],

  applicability:
    'Todas las tecnologías que presentan información de solo audio en vivo',

  resume:
    'La técnica de escritura de texto en tiempo real permite a los usuarios sordos acceder a transmisiones de audio en tiempo real. Se usan tecnologías estenográficas y de escritura rápida para traducir la voz a texto. Esta técnica también se usa hoy en día para los servicios de retransmisión telefónica, y en el futuro, será posible la conversión de voz a texto con corrección.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Una estación de radio utiliza servicios de subtítulos basados ​​en la web para brindar alternativas para eventos deportivos en vivo; la salida del servicio se incorpora en una ventana de visualización de la página web que también incluye un control de transmisión de audio.'
    }
  ],

  relTech: ['G9'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Verifique que exista un procedimiento y una política para garantizar que las alternativas de texto se entreguen en tiempo real.'
        },
        {
          order: 2,
          task: 'Verifique que el procedimiento y la política funcionen realizando una muestra aleatoria para ver si aparecen alternativas de texto.'
        }
      ],

      results: 'Tanto el #1 como el #2 son verdaderos.'
    }
  ]
}
