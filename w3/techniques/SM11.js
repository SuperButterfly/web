export const data = {
  name: 'SM11',
  type: 'Smil',
  relation: [ '1.2.2', '1.2.4'],
  applicability: 'Se aplica a Smil 1.0',
  resume: 'El objetivo de esta técnica es proporcionar una manera para que las personas sordas o que tienen problemas para escuchar el diálogo en material audiovisual puedan ver el material. Con esta técnica, todos los diálogos y sonidos importantes están disponibles en un flujo de texto que se muestra en un área de subtítulos. Con SMIL 1.0, se pueden definir regiones separadas para el video y los subtítulos. Los subtítulos y la reproducción de video están sincronizados, con el texto del subtítulo que se muestra en una región de la pantalla, mientras que el video correspondiente se muestra en otra región.',
  example: [
      {
          title:'Ejemplo 1: muestra de subtítulos SMIL 1.0 para el reproductor Quickime',
          code:'<?xml version="1.0" encoding="UTF-8"?><smil xmlns="https://www.w3.org/TR/REC-smil"><head><layout><root-layout background-color="black" height="310" width="330"/><region id="video" background-color="black" top="5" left="5" height="240" width="320"/><region id="captions" background-color="black" top="250" height="60" left="5" width="320"/></layout></head><body><par><video src="salesdemo.mpg" region="video" title="Sales Demo" alt="Sales Demo"/><textstream src="salesdemo_cc.rt" region="captions" system-captions="on" title="captions" alt="Sales Demo Captions"/></par></body></smil>'
      },
      {
          title:'Ejemplo 2:',
          resume: 'El ejemplo muestra un segmento <par> que contiene una etiqueta <video> y <code><![CDATA[<textstream>. El atributo system-captions indica que el flujo de texto debe mostrarse cuando la configuración del reproductor del usuario para los subtítulos indica la preferencia de los subtítulos que se mostrarán. La sección <layout> define las regiones utilizadas para el video y los subtítulos.',
          code:'<?xml version="1.0" encoding="UTF-8"?><smil xmlns="https://www.w3.org/TR/REC-smil"><head><layout><root-layout background-color="black" height="310" width="330"/><region id="video" background-color="black" top="5" left="5" height="240" width="320"/><region id="captions" background-color="black" top="250" height="60" left="5" width="320"/></layout></head><body><par><video src="salesdemo.mpg" region="video" title="Sales Demo" alt="Sales Demo"/><textstream src="salesdemo_cc.rt" region="captions" system-captions="on" title="captions" alt="Sales Demo Captions"/></par></body></smil>' 
      }
  ],
  relTech: ['SM12'],
  tests:[
      {
          procedure :[   
              {
                  order: 1,
                  task: 'Preferencia de subtítulos habilitada en el reproductor, si está presente'
              },
              {
                  order: 2,
                  task: 'Reproducir archivo con subtítulos'
              },
              {
                  order: 3,
                  task: 'Comprobar si se muestran subtítulos'
              }
          ],
          results: 'La verificación #3 es verdadera.'
      }
  ]
}