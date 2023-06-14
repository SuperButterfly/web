export const data = {
    name: 'SM6',
    
    type: 'smil',
    
    relation: [ '1.2.3', '1.2.5' ],
    
    applicability: 'Se aplica siempre que el reproductor SMIL 1.0 esté disponible',
    
    resume: 'El objetivo de esta técnica es proporcionar una forma para que las personas ciegas o que tienen problemas para ver el video en material audiovisual puedan acceder al material. Con esta técnica se proporciona una descripción del vídeo a través de una audiodescripción que encajará en los huecos del diálogo del material audiovisual.',
    
    example: [
        {
            title: 'Ejemplo 1: muestra de descripción de audio SMIL 1.0 para reproductor QuickTime',
            code: '<?xml version="1.0" encoding="UTF-8"?><smil xmlns:qt="http://www.apple.com/quicktime/resources/smilextensions" xmlns="https://www.w3.org/TR/REC-smil" qt:time-slider="true"><head><layout><root-layout background-color="black" height="266" width="320"/><region id="videoregion" background-color="black" top="26" left="0" height="144" width="320"/></layout></head><body><par><video dur="0:01:20.00" region="videoregion" src="salesdemo.mov" alt="Sales Demo"/><audio dur="0:01:20.00" src="salesdemo_ad.mp3" alt="Sales Demo Audio Description"/></par></body></smil>'
        },
        {
            title: 'Ejemplo 2: Muestra de descripción de audio SMIL 1.0 para RealTime Player',
            code: '<?xml version="1.0" encoding="UTF-8"?><smil xmlns="https://www.w3.org/TR/REC-smil"><head><layout><root-layout background-color="black" height="266" width="320"/><region id="videoregion" background-color="black" top="26" left="0" height="144" width="320"/></layout></head><body><par><video src="salesdemo.mov" region="videoregion" title="Sales Demo" alt="Sales Demo"/><audio src="salesdemo_ad.mp3" title="audio description" alt="Sales Demo Audio Description"/></par></body></smil>'
        }
    ],
    
    relTech: ['SM7'],
    
    tests:[
        {
            procedure :[   
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