export const data = {
    name: 'F38',
    
    type: 'failure',
    
    relation: [ '1.1.1' ],
    
    applicability: 'HTML and XHTML',
    
    resume: 'Esta es una condición de falla que debe ser ignorada por AT. Si una imagen tiene role="presentation", AT la ignorará. De lo contrario, se debe usar role="presentation" o proporcionar el atributo alt con un valor nulo (alt="") para evitar una falla de este Criterio de Conformidad.',
    
    example: [
        {
            title: 'Ejemplo 1',
            resume: 'Imágenes decorativas que no tienen alt atributo ni roleatributo.'
        }
    ],
    
    relTech: [ 'none'],
    
    tests:[
         {
            procedure :[   
                {
                    order: 1,
                    task: 'Compruebe si el elemento no tiene roleatributo o tiene un rolevalor de atributo que no es presentation.'
                },
                {
                    order: 2,
                    task: 'Compruebe si el elemento no tiene altatributo o tiene un altatributo con un valor que no es nulo.'
                }
            ],
            
            results: 'Si el paso n.º 1 es verdadero y el paso n.º 2 es verdadero, se aplica esta condición de falla y el contenido no cumple el Criterio de Conformidad.'
        }
    ]
}