export const data = {
  name: 'G54',

  type: 'general',

  relation: ['1.26'],

  applicability:
    'Se aplica a todas las tecnologías que presentan información multimedia sincronizada',

  resume:
    'Técnica de sincronización de lenguaje de señas: permite que los usuarios que no pueden leer rápidamente el texto puedan acceder a material multimedia sincronizado. Esto se logra incrustando un video del intérprete de lenguaje de señas en la transmisión de video, asegurando un mecanismo para reproducir la transmisión de video a pantalla completa y ajustando el tamaño de la parte del intérprete del video. El autor debe decidir qué lenguaje de señas usar, generalmente el de la audiencia principal, o el de múltiples audiencias.',

  example: [
    {
      title: 'Ejemplo 1',
      resume:
        'una estación de televisión proporciona un intérprete de lenguaje de señas en la esquina o al lado de su video de noticias en línea.'
    }
  ],

  relTech: ['G81', 'SM13', 'SM14'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Pídale a alguien que vea el programa que pueda oír y que esté familiarizado con el lenguaje de señas que se usa.'
        },
        {
          order: 2,
          task: 'Verifique si hay un intérprete de lenguaje de señas en la pantalla.'
        },
        {
          order: 3,
          task: 'Verifique que el intérprete transmita el diálogo y los sonidos importantes visibles en la pantalla.'
        }
      ],

      results: '#2 y #3 son verdaderas'
    }
  ]
}
