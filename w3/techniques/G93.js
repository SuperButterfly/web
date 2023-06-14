export const data = {

  name: 'G93',
  type: 'general',
  relation: [ '1.2.2', '1.2.4'],
  applicability: 'Cualquier tecnología multimedia sincronizada, incluso las que no admiten subtítulos.',
  resume: 'El objetivo de esta técnica es proporcionar una manera para que las personas sordas o que tienen problemas para escuchar el diálogo en material audiovisual puedan ver el material. Con esta técnica, todos los diálogos y sonidos importantes se incrustan como texto en la pista de video. Como resultado, siempre están visibles y el agente de usuario no requiere soporte especial para los subtítulos. NOTA: Los subtítulos no deben confundirse con los subtítulos. Los subtítulos proporcionan texto solo del diálogo y no incluyen sonidos importantes.',
  example: [
      {
          title: `Ejemplo 1:"`,
          resume:'Para garantizar que todos puedan ver sus películas en línea, incluso si los usuarios no saben cómo activar los subtítulos en su reproductor multimedia, una asociación de bibliotecas coloca los subtítulos directamente en el video.'
      },
      {
          title: `Ejemplo2:`,
          resume:'Una organización de noticias proporciona subtítulos abiertos en todo su material.'
      }
  ],
  relTech: [ 'G87'],
  tests:[
      {
          procedure :[   
              {
                  order: 1,
                  task: 'Mire los medios sincronizados con los subtítulos desactivados.'
              },
              {
                  order: 2,
                  task: 'Verifique que los subtítulos (de todos los diálogos y sonidos importantes) estén visibles.'
              }
          ],
          results: 'La verificación #2 es verdadera.'
      }
  ]
}