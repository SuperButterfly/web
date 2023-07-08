export const data = {
  name: 'G166',

  type: 'general',

  relation: ['1.2.1'],

  applicability: 'Se aplica a todas las tecnologías',

  resume:
    'El contenido de solo video es inaccesible para las personas ciegas y para algunas personas con problemas de visión. Por lo tanto, es importante que tengan una alternativa de audio. Una forma de hacerlo es proporcionar una pista de audio que describa la información del video. El audio debe ser un formato de audio común utilizado en Internet, como MP3.',

  example: [
    {
      title: 'Ejemplo 1',
      resume:
        'Una página web tiene un enlace a una presentación de solo video de una nave espacial que aterriza en Marte. El enlace al video es una imagen de una nave espacial. Cerca del video hay un enlace a un archivo de audio de una persona que describe el video. Esto se parecería al siguiente código de ejemplo en HTML.',
      code: '<a href="../video/marslanding.mp4"><img src="../images/nave espacial.jpg" alt="Aterrizaje en Marte, solo video" width="193" height="255"/> </a><br /><a href="Mars_landing_audio.mp3">Descripción de audio de "Aterrizaje en Marte"</a>'
    }
  ],

  relTech: ['G159'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Verifique que haya un enlace a una alternativa de audio que describa el contenido del video inmediatamente antes o después del contenido de solo video.'
        }
      ],

      results: 'La verificacion #1 es cierta.'
    }
  ]
}
