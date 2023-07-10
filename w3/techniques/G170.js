export const data = {
  name: 'G170',

  type: 'general',

  relation: ['1.4.2'],

  applicability:
    'Todas las tecnologías donde el sonido se puede reproducir automáticamente.',

  resume:
    'La técnica de subtitulado en tiempo real permite que los usuarios con discapacidades auditivas accedan a transmisiones de medios sincronizadas. Se usan tecnologías estenográficas y de escritura rápida para la escritura de texto en tiempo real. Además, existe la posibilidad de usar la conversión de voz a texto para los servicios de subtítulos. Estas herramientas permiten una mayor accesibilidad para personas con discapacidad auditiva.',

  example: [
    {
      title: 'Ejemplo 1',
      resume:
        'Una página web contiene una presentación multimedia basada en el tiempo que incluye una pista de audio y un video animado que describe cómo reparar el motor de una cortadora de césped. La página contiene 2 botones que dicen "Pausar" y "Detener", que le dan al usuario control sobre cuándo y si se reproducen los medios basados ​​en el tiempo.'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Una página web contiene un cortometraje incrustado. La página contiene un botón que dice "Pausar la película", que permite al usuario pausar la película.'
    },
    {
      title: 'Ejemplo 3:',
      resume:
        'Una página web contiene una presentación que incluye video y audio. La página contiene un botón que dice "Desactivar multimedia", que permite al usuario detener la reproducción de cualquier video y audio.'
    }
  ],

  relTech: ['G60', 'G171'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Cargue una página web.'
        },
        {
          order: 2,
          task: 'Compruebe si hay música o sonidos que se inicien automáticamente.'
        },
        {
          order: 3,
          task: 'Compruebe que se proporciona un control que permite al usuario apagar los sonidos cerca del comienzo de la página.'
        }
      ],

      results: 'La verificación #3 es verdadera.'
    }
  ]
}
