export const data = {
   name: 'H95',
    
    type: 'html',
    
    relation: [ '1.2.2' ],
    
    applicability: 'HTML5',
    
    resume: 'Se usa el trackelemento HTML5 para proporcionar subtítulos y pistas de texto cronometradas para elementos de video. Estas pistas contienen la transcripción del diálogo, efectos de sonido y otros sonidos importantes para comprender el video. El kindatributo indica el tipo de información; los subtítulos contienen solo el diálogo, mientras que los subtítulos pueden contener información adicional de audio relevante. El Criterio de Conformidad 1.2.2 requiere que se proporcione información de audio para los usuarios que no pueden escuchar el sonido.',
    
    example: [
        {
            title: 'Ejemplo 1: subtítulos en un idioma',
            resume: 'Un videoelemento para un video en inglés con una pista de subtítulos en inglés. Los subtítulos se proporcionan en formato WebVTT.',
            html: '<video poster="myvideo.png" controls><source src="myvideo.mp4" srclang="en" type="video/mp4"><track src="myvideo_en.vtt" kind="captions" srclang="en" label="English"></video>'
        },
        {
            title: 'Ejemplo 2: descripción de audio en varios idiomas',
            resume: 'Un videoelemento para un video en inglés con una pista de subtítulos en inglés. Los subtítulos se proporcionan en formato WebVTT.',
            html: ' <video poster="myvideo.png" controls><source src="myvideo.mp4" srclang="en" type="video/mp4"><source src="myvideo.webm" srclang="fr" type="video/webm"><track src="myvideo_en.vtt" kind="captions" srclang="en" label="English"><track src="myvideo_fr.ttml" kind="captions" srclang="fr" label="French"></video>'
        }
    ],
    
    relTech: [ 'G87'],
  
    tests:[
      {
        procedure :[   
            {
                order: 1,
                task: 'Verifique que el video contenga un trackelemento de kindsubtítulos en el idioma del video.'
            },
        ],
        results: 'La verificación #1 es verdadera.'
      }
    ]
}