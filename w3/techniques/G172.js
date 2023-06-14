export const data = {
  
    name: 'G172',
    
    type: 'general',
    
    relation: [ '1.4.8' ],
    
    applicability: 'Todas las tecnologías ',
    
    resume: 'El objetivo de esta técnica es proporcionar una versión de la página que no tenga una justificación completa (justificada tanto a la izquierda como a la derecha).',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume:'Una novela clásica en línea se encuentra en un sitio que intenta duplicar el aspecto del trabajo publicado originalmente, que incluye una justificación completa. Se proporciona un botón cerca de la parte superior de la página que dice "eliminar justificación completa" y se usa una técnica de cambio de estilo para cambiar la hoja de estilo. La nueva hoja de estilo alinea el texto solo a la izquierda.'
        }
    ],
    
    relTech: [ 'C19' ],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Abre una página con justificación completa.'
                },
                {
                    order: 2,
                    task: 'Verifique que haya una función para eliminar la justificación completa.'
                },
                {
                    order: 3,
                    task: 'Verifique que la función elimine la justificación completa.'
                },
            ],
            
            results: '#2 y #3 son verdaderas.'
        }
    ]
}