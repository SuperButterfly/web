export const data = {
    name: 'F30',
    
    type: 'failure',
    
    relation: [ '1.1.1', '1.2.1' ],
    
    applicability: 'Todas las tecnologias',
    
    resume: 'Describe una condición de falla para todas las técnicas que involucran alternativas de texto. Si el texto en la "alternativa de texto" no se puede usar en lugar del contenido que no es de texto sin perder información o función, falla porque, de hecho, no es una alternativa al contenido que no es de texto.',
    
    example: [
        {
            title: 'Ejemplo 1',
            resume: {
                title: 'Ejemplos de texto que no son alternativas de texto incluyen:',
                examples: ['texto de marcador de posición como " " o "espaciador" o "imagen" o "imagen", etc. que se colocan en la ubicación de "texto alternativo" en imágenes o imágenes', 
                'referencias de programación que no transmiten la información o la función del contenido que no es texto, como "imagen 1", "imagen 2" o "0001", "0002" o "Intro#1", "Intro#2"', 
                'nombres de archivo que no son alternativas de texto válidas por derecho propio, como "Oct.jpg" o "Chart.jpg" o "sales\\oct\\top3.jpg"'
                ]
            }
        }
    ],
    
    relTech: [ 'none'],
    
    tests:[
         {
            procedure :[   
                {
                    order: 1,
                    task: 'Verifique cada alternativa de texto para ver si está describiendo contenido diferente al contenido que no es de texto que se muestra actualmente'
                }
            ],
            
            results: 'Si el paso n.º 1 es verdadero, la alternativa de texto no está actualizada con el elemento actual, se aplica esta condición de falla y el contenido no cumple con estos Criterios de Conformidad.'
        }
    ]
}