export const data = {
    name: 'G173',
    
    type: 'general',
    
    relation: [ '1.2.3', '1.2.5' ],
    
    applicability: 'Cualquier tecnología que admita audio y video.',
    
    resume: 'Esta técnica proporciona una segunda versión de contenido de video que incluye descripciones de audio para que las personas ciegas puedan comprender el material audiovisual. Esta información adicional se agrega durante las pausas en el diálogo y los efectos de sonido para no oscurecer la información clave en la pista de sonido original. Esto hará que el contenido sea accesible para aquellos que necesitan escuchar el contexto y otros detalles del video que no se comunican a través del diálogo.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: 'Están disponibles dos versiones de un video de una ópera. La primera versión incluye solo la música. La segunda versión incluye tanto la música como la voz que describen las acciones de los artistas en el escenario.'
        },
        {
            title: 'Ejemplo 2:',
            resume: 'Un video de un malabarista actuando frente a un grupo de niños incluye una versión con descripción de audio. El narrador de la descripción de audio describe la cantidad y el tipo de elementos que el malabarista está haciendo malabares, así como las reacciones de los niños durante la actuación.'
        }
    ],
    
    relTech: [ 'G69', 'SM6', 'SM7', 'G78'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Abre la versión del medio que incluye audiodescripción.'
                },
                {
                    order: 2,
                    task: 'Escucha la película.'
                },
                {
                    order: 3,
                    task: 'Verifique si los espacios en el diálogo se utilizan para transmitir información importante sobre el contenido visual.'
                },
                {
                  order: 4,
                  task: 'Si las versiones alternativas están en una página separada, verifique la disponibilidad de los enlaces para permitir que el usuario acceda a las otras versiones.'
                }
            ],
            
            results: '#3 y #4 son verdaderas.'
        }
    ]
}