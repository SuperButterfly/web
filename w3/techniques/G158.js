export const data = {
  name: 'G158',

  type: 'todas las tecnologias',

  relation: ['1.2.1'],

  applicability: 'Documentos que cargan complementos con el embedelemento.',

  resume:
    'Esta técnica implica la creación de un documento que cuente la misma historia que el contenido pregrabado de audio, para proporcionar una forma alternativa accesible de presentar la información. El documento contendría todos los diálogos y otros detalles importantes de la presentación de audio, y se crearía a partir del guión original o de la versión editada final.',

  example: [
    {
      title: 'Ejemplo',
      resume:
        'Un podcast incluye una descripción de las nuevas funciones en una versión de software reciente. Se trata de dos oradores que discuten informalmente las funciones nuevas y actualizadas y describen cómo se utilizan. Uno de los oradores trabaja a partir de una lista de preguntas que se utilizó para delinear la discusión antes de la grabación. Una vez completada la grabación, el esquema se edita y complementa para que coincida con el diálogo, etc. La transcripción resultante se pone a disposición en el sitio web de los oradores junto con el archivo de solo audio. La alternativa de texto que identifica el contenido de solo audio dice: "Episodio 42: Versión 12 de Zap (sigue la transcripción del texto)" '
    }
  ],

  relTech: ['G69', 'G159'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Vea el contenido de solo audio mientras se refiere a la alternativa para los medios basados ​​en el tiempo.'
        },
        {
          order: 2,
          task: 'Verifique que el diálogo en la transcripción coincida con el diálogo y la información presentados en la presentación de solo audio.'
        },
        {
          order: 3,
          task: 'Si el audio incluye varias voces, verifique que la transcripción identifique quién está hablando en todos los diálogos.'
        },
        {
          order: 4,
          task: 'Compruebe que al menos uno de los siguientes es cierto:',
          suborder: [
            {
              order: 1,
              task: 'La transcripción en sí se puede determinar mediante programación a partir de la alternativa de texto para el contenido de solo audio.'
            },
            {
              order: 2,
              task: 'Se hace referencia a la transcripción desde la alternativa de texto determinada mediante programación para el contenido de solo audio.'
            }
          ]
        },
        {
          order: 5,
          task: 'Si las versiones alternativas están en una página separada, verifique la disponibilidad de los enlaces para permitir que el usuario acceda a las otras versiones.'
        }
      ],

      results: 'Todas las comprobaciones anteriores son verdaderas.'
    }
  ]
}
