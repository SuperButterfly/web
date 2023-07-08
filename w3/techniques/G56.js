export const data = {
  name: 'G56',

  type: 'general',

  relation: ['1.4.7'],

  applicability: 'Todas las tecnologías ',

  resume:
    'El objetivo de esta técnica es permitir a los autores incluir sonido detrás del discurso sin dificultar demasiado la comprensión del discurso por parte de las personas con problemas auditivos. Asegurarse de que la voz de primer plano sea 20 db más fuerte que el sonido de fondo hace que la voz sea 4 veces más fuerte que el audio de fondo.',

  example: [
    {
      title: 'Ejemplo 1: un locutor hablando sobre una escena de disturbios',
      resume:
        'Un narrador está describiendo una escena de disturbios. El volumen de la escena del motín se ajusta para que sea 20 db más bajo que el volumen del locutor antes de que la escena se mezcle con el narrador.'
    },
    {
      title:
        'Ejemplo 2: contraste de audio suficiente entre un narrador y la música de fondo',
      resume:
        'Este ejemplo muestra una voz con música de fondo en la que la voz está 20 DB por encima del fondo. La voz (en primer plano) se graba a -17,52 decibelios (RMS promedio) y la música (de fondo) a -37,52 decibelios, lo que hace que el primer plano sea 20 decibelios más fuerte que el fondo. Ejemplo de sonido Ejemplo de audio: el primer plano está 20 decibelios por encima del fondo (mp3) Transcripción del ejemplo de audio (buen contraste): "Por lo general, el primer plano se refiere a una voz que habla y debe entenderse. Mi voz en este momento está 20 decibelios por encima del fondo, que es la música. Este es un ejemplo de cómo debe hacerse". Ejemplo visual de la grabación anterior El ejemplo de audio anterior se representa visualmente a continuación en una instantánea del archivo en un editor de audio. Se resalta una sección que contiene el primer plano y el fondo. Es una ola mucho más grande que la sección que contiene solo fondo.'
    }
  ],

  relTech: ['C6', 'C27', 'G59', 'F1'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Localice valores altos de contenido de fondo entre el discurso de primer plano'
        },
        {
          order: 2,
          task: 'Mide el volumen en dB(A) SPL'
        },
        {
          order: 3,
          task: 'Mida el volumen del habla en primer plano en dB(A) SPL'
        },
        {
          order: 4,
          task: 'restar los valores'
        },
        {
          order: 5,
          task: 'Compruebe que el resultado es 20 o más.'
        }
      ],

      results: '#5 es verdadera.'
    }
  ]
}
