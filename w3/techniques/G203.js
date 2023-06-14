export const data = {
    name: 'G203',
    
    type: 'general',
    
    relation: [ '1.2.3', '1.2.5' ],
    
    applicability: 'Videos de solo un orador.',
    
    resume: 'La técnica de descripción de audio estática es una alternativa para los medios sincronizados que no tienen información importante basada en el tiempo contenida en la porción de video. Se aplica a videos de "cabeza parlante" donde una persona habla frente a un fondo estático, como conferencias de prensa, discursos y anuncios. Esta técnica consiste en proporcionar una alternativa de texto estático para describir el contexto, los créditos y la información básica. Sin embargo, no se aplica cuando hay múltiples oradores y la identidad se identifica en la pantalla con texto visual.',
    
    example: [
        {
            title: 'Ejemplo 1: Un video de un CEO hablando a los accionistas',
            resume: 'Un CEO está hablando a los accionistas desde su oficina. El video tiene una página de título al comienzo del video que da la fecha. Cuando el orador comienza, hay una tira de texto en la parte inferior del video que dice "Jane Doe, presidenta de XYZ Cooperation". Al final del video hay títulos de crédito que dicen "producido por Honest TV Productions Ltd".Como alternativa, hay un párrafo debajo del video que está asociado con el archivo de video usando aria-describedby que dice: "22 de julio de 2011, Jane Doe, presidenta de la cooperación XYZ, hablando desde su oficina. Video producido por Honest TV Producciones Ltda."'
        }
    ],
    
    relTech: [ 'none' ],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Verifique que no haya información importante basada en el tiempo en la pista de video.'
                },
                {
                    order: 2,
                    task: 'Verifique que la descripción asociada programáticamente de los medios contenga cualquier contexto del contenido que no esté incluido en la pista de audio (por ejemplo, identificación del hablante, créditos, contexto)'
                }
              ],
            
            results: 'Todos son verdaderos'
        }
    ]
}