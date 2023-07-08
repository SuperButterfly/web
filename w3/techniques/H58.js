export const data = {
  name: 'H53',

  type: 'html',

  relation: ['3.1.2'],

  applicability: 'HTML',

  resume: `
      El objetivo de esta técnica es identificar claramente cualquier cambio de idioma en una página utilizando el langatributo.

      Los valores permitidos para el langatributo se indican en los recursos a los que se hace referencia a continuación. Las etiquetas de idioma utilizan 
      un código principal para indicar el idioma y subcódigos opcionales (separados por guiones) para indicar variantes del idioma. Por ejemplo, el inglés 
      se indica con el código principal "en"; El inglés británico y el inglés americano se pueden distinguir usando "en-GB"y "en-US", respectivamente. El 
      uso del código primario es importante para esta técnica. El uso de subcódigos es opcional pero puede ser útil en ciertas circunstancias.
    `,

  example: [
    {
      title:
        'Ejemplo 1: El uso del langatributo para definir una cita escrita en alemán',
      code: `
                    <blockquote lang="de">
                    <p>
                      Da dachte der Herr daran, ihn aus dem Futter zu schaffen,
                      aber der Esel merkte, daß kein guter Wind wehte, lief fort
                      und machte sich auf den Weg nach Bremen: dort, meinte er,
                      könnte er ja Stadtmusikant werden.
                    </p>
                  </blockquote>
            `
    }
  ],

  relTech: ['H57'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Para cada elemento del documento: Verifique que el idioma humano del contenido del elemento sea el mismo que el idioma heredado para el elemento como se especifica en HTML-The langy xml:langatributos .'
        },
        {
          order: 2,
          task: 'Para cada langatributo en el documento: Verifique que el valor del langatributo se ajuste a BCP 47: Etiquetas para la identificación de idiomas o su sucesor y compruebe que el código de idioma coincida con el idioma del contenido al que se aplica.'
        }
      ],

      results: 'Todas las comprobaciones anteriores son verdaderas.'
    }
  ]
}
