export const data = {
  name: 'SM11',
  type: 'Smil',
  relation: [ '1.2.6'],
  applicability: 'Se aplica siempre que el reproductor SMIL 1.0 esté disponible',
  resume: 'El objetivo de esta técnica es proporcionar una manera para que las personas sordas o que tienen problemas para escuchar el diálogo en material audiovisual puedan ver el material. Con esta técnica, todos los diálogos y sonidos importantes están disponibles en un flujo de texto que se muestra en un área de subtítulos. Con SMIL 1.0, se pueden definir regiones separadas para el video y los subtítulos. Los subtítulos y la reproducción de video están sincronizados, con el texto del subtítulo que se muestra en una región de la pantalla, mientras que el video correspondiente se muestra en otra región.',
  example: [
      {
          title:'Ejemplo 1: muestra de interpretación de lenguaje de señas SMIL 1.0 para reproductor QuickTime',
          code:'<smil xmlns:qt="http://www.apple.com/quicktime/resources/smilextensions" xmlns="https://www.w3.org/TR/REC-smil" qt:time-slider="true"><head><layout><root-layout width="320" height="300" background-color="black"/><region top="0" width="320" height="240" left="0" background-color="black" id="videoregion"/><region top="240" width="320" height="60" left="0" background-color="black" id="signingregion"/></layout></head><body><par><video dur="0:01:20.00" region="videoregion" src="salesdemo.mov" alt="Sales Demo"/><video dur="0:01:20.00" region="signingregion" system-captions="on" src="salesdemo_si.mov" alt="Sales Demo Sign Language Interpretation"/></par></body></smil>'
      },
      {
          title:'Ejemplo 2: Muestra de lenguaje de señas SMIL 1.0 para el reproductor RealMedia:',
          resume: 'El ejemplo muestra un segmento <par> que contiene dos etiquetas <video>. El atributo system-captions indica que el video en lenguaje de señas debe mostrarse cuando la configuración del reproductor del usuario para los subtítulos indica la preferencia de los subtítulos que se mostrarán. La sección <layout> define las regiones utilizadas para el video principal y el video de interpretación del lenguaje de señas.',
          code:'<smil xmlns="https://www.w3.org/TR/REC-smil"><head><layout><root-layout background-color="black" height="310" width="330"/><region top="0" width="320" height="240" left="0" background-color="black" id="videoregion"/><region top="240" width="320" height="60" left="0" background-color="black" id="signingregion"/></layout></head><body><par><video dur="0:01:20.00" region="videoregion" src="salesdemo.mov" alt="Sales Demo"/><video dur="0:01:20.00" region="signingregion" system-captions="on" src="salesdemo_si.mov" alt="Sales Demo Sign Language Interpretation"/></par></body></smil>' 
      }
  ],
  relTech: ['SM14'],
  tests:[
      {
          procedure :[   
              {
                  order: 1,
                  task: 'Habilite el control en el contenido o el reproductor para activar la interpretación del lenguaje de señas (a menos que siempre se muestre)'
              },
              {
                  order: 2,
                  task: 'Reproducir archivo con interpretación en lenguaje de señas'
              },
              {
                  order: 3,
                  task: 'Compruebe si se muestra la interpretación del lenguaje de señas'
              }
          ],
          results: 'La verificación #3 es verdadera.'
      }
  ]
}