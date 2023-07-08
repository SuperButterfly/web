export const data = {
  name: 'G78',

  type: 'general',

  relation: ['1.2.3', '1.2.5'],

  applicability:
    'Se aplica a cualquier tecnología que tenga banda sonora y contenido visual.',

  resume:
    'Esta técnica permite a los usuarios acceder a contenido visualmente a través de una versión de audio que proporciona información adicional sobre acciones, personajes, cambios de escena y texto en pantalla. Esta información se agrega durante pausas en el diálogo y los efectos de sonido para no oscurecer la información clave de la pista de sonido original. Esta versión de audio puede ser una pista de sonido alternativa o la pista estándar que todos escuchan.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Un diario de viaje del noreste tiene una descripción de audio adicional agregada durante los espacios en el diálogo para que los oyentes ciegos sepan de qué está hablando la persona en cualquier momento.'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Un video muestra a un pájaro carpintero tallando un nido en un árbol. Un botón dentro del contenido permite a los usuarios activar o desactivar la pista de descripción de audio.'
    },
    {
      title: 'Ejemplo 3:',
      resume:
        'A una clase se le agrega una descripción de audio cada vez que el instructor dice cosas como "y esta es la más importante". Las descripciones de audio les permiten a los oyentes que no pueden ver el video saber qué es "esto".'
    },
    {
      title: 'Ejemplo 4',
      resume:
        'Un archivo de película tiene dos pistas de audio, una de las cuales incluye una descripción de audio. Los usuarios pueden elegir cualquiera de los dos cuando escuchan la película seleccionando la pista adecuada en su reproductor multimedia.'
    }
  ],

  relTech: ['G69', 'SM6', 'SM7', 'G173'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Compruebe que existe la posibilidad de activar la pista de audio que incluye descripciones de audio. Por ejemplo, usando un control dentro del propio contenido o seleccionando un control o preferencia en el reproductor multimedia o el sistema operativo.'
        },
        {
          order: 2,
          task: 'Escuche los medios sincronizados'
        },
        {
          order: 3,
          task: 'Verifique si los espacios en el diálogo se utilizan para transmitir información importante sobre el contenido visual.'
        }
      ],

      results: 'Las comprobaciones n.º 1 y n.º 3 son verdaderas.'
    }
  ]
}
