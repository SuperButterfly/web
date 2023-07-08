export const data = {
  name: 'G58',

  type: 'general',

  relation: ['1.2.3', '1.2.8'],

  applicability:
    'Esta técnica no es específica de la tecnología y se puede utilizar en cualquier tecnología que admita enlaces',

  resume:
    ' Esta técnica proporciona un enlace al documento recopilado que contiene subtítulos y descripción de audio. El enlace se coloca junto al contenido que no es de texto. Se proporciona un enlace de regreso a la ubicación del contenido si el botón Atrás no lleva a la persona de vuelta al punto desde el que saltó.',

  example: [
    {
      title: 'Ejemplo 1: un documento .MOV en un documento HTML',
      resume: 'Código en una página llamada "Olympic_Sports.htm"',
      code: '<a name="Olympic_Wrestling"></a><p><a href="http://www.example.com/movies/olympic_wrestling.mov">Olympic Wrestling movie</a>, <a href="http://www.example.com/transcripts/olympic_wrestling_transcript.htm">Olympic Wrestling collated Transcript</a></p>'
    },
    {
      title:
        'Ejemplo 2: el vínculo de regreso al documento .MOV en un documento HTML',
      resume: 'Código en la página olympic_wrestling_transcript.htm',
      code: '<p>Sports announcer 1: This is a great battle tonight between England "Will Johnson" and "Theodore Derringo" from Argentina</p><p>Scenery: There is a mat set out in the middle of the stadium with 500 people in the stands...</p> <p>...more dialogue...</p><p>...more scenery...</p><p>...etc...</p><p>Sports announcer 2: And that is all for tonight, thank you for joining us tonight where Will Johnson is the new Gold Medalist. <a href="../movies/Olympic_Sports.htm#Olympic_Wrestling>Return to Movie page</a></p>'
    }
  ],

  relTech: ['G159', 'G69', 'H53'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Compruebe la presencia de un enlace inmediatamente antes o después del contenido que no es de texto.'
        },
        {
          order: 2,
          task: 'Verifique que sea un enlace válido que apunte directamente al documento recopilado de este medio sincronizado en particular.'
        },
        {
          order: 3,
          task: 'Compruebe la disponibilidad de un enlace o función de retroceso para que el usuario vuelva a la ubicación original del contenido multimedia sincronizado.'
        }
      ],

      results: 'Los puntos del 1 al 3 son todos verdaderos.'
    }
  ]
}
