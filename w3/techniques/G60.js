export const data = {
  name: 'G60',

  type: 'general',

  relation: ['1.4.2'],

  applicability:
    'Se aplica a todas las tecnologías excepto a las de interacción por voz.',

  resume:
    'El propósito de esta técnica es permitir que los autores reproduzcan un sonido en su página web pero evitar el problema de que los usuarios no puedan usar sus lectores de pantalla debido a la interferencia del sonido del contenido. También le permite al autor evitar poner controles en la página web para controlar el sonido, y el problema que enfrentan los usuarios con lectores de pantalla para encontrar el control (cuando no pueden escuchar su lector de pantalla). La técnica es sencilla. El sonido se reproduce durante 3 segundos o menos y se detiene automáticamente.',

  example: [
    {
      title: 'Ejemplo 1',
      resume:
        'Una página web se abre con una fanfarria de trompeta y luego se queda en silencio'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Se abre una página de inicio con el presidente diciendo "Binfor, donde la calidad es nuestro negocio". luego en silencio.'
    },
    {
      title: 'Ejemplo 3:',
      resume:
        'Se abre una página web con instrucciones sobre cómo comenzar: "Para comenzar, presione la tecla Intro".'
    },
    {
      title: 'Ejemplo 4:',
      resume:
        'Una página web se abre con una advertencia y luego se queda en silencio.'
    }
  ],

  relTech: ['G170', 'G171'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Cargar la página web'
        },
        {
          order: 2,
          task: 'Compruebe que todo el sonido que se reproduce se detiene automáticamente en 3 segundos o menos'
        }
      ],

      results: '#2 es verdad'
    }
  ]
}
