export const data = {
  name: 'SM7',

  type: 'smil',

  relation: ['1.2.3', '1.2.5'],

  applicability:
    'Se aplica siempre que el reproductor SMIL 2.0 esté disponible',

  resume:
    'El objetivo de esta técnica es proporcionar una forma para que las personas ciegas o que tienen problemas para ver el video en material audiovisual puedan acceder al material. Con esta técnica se proporciona una descripción del vídeo a través de una audiodescripción que encajará en los huecos del diálogo del material audiovisual.',

  example: [
    {
      title:
        'Ejemplo 1: muestra de descripción de audio SMIL 2.0 para reproductor RealMedia',
      resume:
        'El ejemplo muestra un segmento <par> que contiene una etiqueta <audio> y <video>. La transmisión de audio no se inicia inmediatamente.',
      code: '<smil xmlns="https://www.w3.org/2001/SMIL20/Language"><head><layout><root-layout backgroundColor="black" height="266" width="320"/><region id="video" backgroundColor="black" top="26" left="0" height="144" width="320"/></layout></head><body><par><video src="salesdemo.mpg" region="video" title="Sales Demo" alt="Sales Demo"/><audio src="salesdemo_ad.mp3" begin="33.71s" title="audio description" alt="Sales Demo Audio Description"/></par></body></smil>'
    }
  ],

  relTech: ['SM6'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Encuentre el método para activar la descripción de audio desde el contenido/reproductor (a menos que siempre se reproduzca de forma predeterminada)'
        },
        {
          order: 2,
          task: 'Reproducir archivo con descripción de audio'
        },
        {
          order: 3,
          task: 'Comprobar si se reproduce la descripción de audio'
        }
      ],

      results: '#3 es verdad'
    }
  ]
}
