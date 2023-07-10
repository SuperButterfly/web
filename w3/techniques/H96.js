export const data = {
  name: 'G82',

  type: 'html',

  relation: ['1.2.1', '1.2.3', '1.2.5', '1.2.7'],

  applicability: 'Documentos que cargan complementos con el embedelemento.',

  resume:
    ' Esta técnica utiliza el elemento HTML5 de track para especificar una pista de texto cronometrada de descripciones para un elemento de video. Esto permite a los usuarios obtener información no visualmente del recurso multimedia. No hay soporte nativo para esto en los agentes de usuario, pero el soporte está disponible a través de polyfills de JavaScript.',

  example: [
    {
      title: 'Ejemplo 1: descripción de audio en un idioma',
      resume:
        'Un videoelemento para un video en el idioma inglés. Las descripciones de audio se proporcionan en formato WebVTT. ',
      html: '<video poster="mivideo.png" controles> <fuente src="mivideo.mp4" srclang="es" type="video/mp4"> <track src="myvideo_en.vtt" kind="descriptions" srclang="en" label="English"> </vídeo>'
    },
    {
      title: 'Ejemplo 2: descripción de audio en varios idiomas',
      resume:
        'Un videoelemento para un video con un elemento fuente en inglés y francés, y con una pista de descripción de audio en inglés y francés utilizando el formato de archivo WebVTT (vtt).',
      html: ' <video poster="mivideo.png" controles><fuente src="mivideo.mp4" srclang="es" type="video/mp4"><fuente src="mivideo.webm" srclang="fr" type="video/webm"><track src="myvideo_en.vtt" kind="descriptions" srclang="en" label="English"><track src="myvideo_fr.vtt" kind="descripciones" srclang="fr" label="francés"></vídeo>'
    },
    {
      title: 'Ejemplo 3: subtítulos en varios idiomas',
      resume:
        'A video, "Coche autónomo de Google". con una pista de audio descripción.',
      code: '<video controls tabindex="1"><source src="cdgQpa1pUUE.webm" type="video/webm"><source src="cdgQpa1pUUE.mp4" type="video/mp4"><track id="audesc" src="cdgQpa1pUUE.vtt" kind="descriptions" label="Descripciones en inglés" srclang="en-us"></track></video>'
    }
  ],

  relTech: ['G117', 'G8'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Verifique que el video contenga un trackelemento de kinddescripciones en el idioma del video.'
        }
      ],
      results: 'La verificación #1 es verdadera.'
    }
  ]
}
