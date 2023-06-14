export const data = {
    name: 'G143',
    
    type: 'general',
    
    relation: [ '1.1.1'],
    
    applicability: 'Se aplica a todas las tecnologías',
    
    resume: 'Esta técnica proporciona una alternativa de texto que describe el contenido de un CAPTCHA, así como instrucciones sobre cómo encontrar la versión alternativa.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: `Una prueba de CAPTCHA le pide al usuario que escriba el texto que se muestra en una imagen oscurecida. La alternativa de texto es "Escriba la palabra en la imagen"`
        },
        {
            title: 'Ejemplo 2:',
            resume: `Una prueba de CAPTCHA le pide al usuario que escriba el texto que se reproduce en un archivo de audio. La alternativa de texto es "Escriba las letras habladas en el audio"`
        },
    ],
    
    relTech: [ 'G144' ],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Quite, oculte o enmascare el CAPTCHA.'
                },
                {
                    order: 2,
                    task: 'Reemplácelo con la alternativa de texto.'
                },
                {
                    order: 3,
                    task: 'Verifique que el texto alternativo describa el propósito del CAPTCHA.'
                }
            ],
            
            results: 'La verificación #3 es verdadera.'
        }
    ]
}
