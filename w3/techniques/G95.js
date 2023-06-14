export const data = {
    name: 'G95',
    
    type: 'general',
    
    relation: [ '1.1.1'],
    
    applicability: 'Se aplica a todas las tecnologías',
    
    resume: 'Esta técnica se usa para proporcionar una alternativa de texto corto que describa brevemente el contenido sin texto. Al decidir el texto para la alternativa, se deben considerar preguntas como el propósito y la información presentada por el contenido sin texto.',
    
    example: [
        {
            title: 'Ejemplo 1:'
            resume: `Un gráfico que muestra las ventas de octubre tiene una alternativa de texto breve de "Gráfico de ventas de octubre". También tiene una descripción larga que proporciona toda la información en el gráfico.`
        }
    ],
    
    relTech: [ 'G73', 'G74', 'G92', 'G94'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Verifique la presencia de una alternativa de texto corto que proporcione una breve descripción del contenido que no es de texto'
                }
            ],
            
            results: 'La verificación #1 es verdadera.'
        }
    ]
}

