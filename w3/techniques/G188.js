export const data = {
    name: 'G188',
    
    type: 'general',
    
    relation: [ '1.4.8' ],
    
    applicability: 'Todas las tecnologías ',
    
    resume: 'Muchas personas con discapacidades cognitivas tienen problemas para leer textos a espacio simple. Un botón que aumenta la altura de la línea les ayudará a leer el contenido. Para mantener la separación de párrafos, el espacio entre párrafos también debe aumentar para que sea al menos 1,5 veces más alto que el espacio entre líneas. Esta técnica se puede utilizar en combinación con una técnica de cambio de estilo para presentar una página que sea una versión alternativa conforme para el contenido no conforme. Consulte C29: Uso de un conmutador de estilo para proporcionar una versión alternativa conforme y Comprensión de las versiones alternativas conformes para obtener más información.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: 'Use el cambio de página de estilo estándar y tenga un botón o enlace en la página que cambie la hoja de estilo. La nueva hoja de estilo contiene una regla para aumentar la altura de la línea y una clase para aumentar el espacio entre párrafos'
        }
    ],
    
    relTech: [ 'C21', 'C22', 'C29'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Comprueba que en la página hay un botón o enlace que aumenta el tamaño de la altura de la línea y el espacio entre párrafos, que está etiquetado como tal.'
                },
                {
                    order: 2,
                    task: 'Activa el botón o enlace.'
                },
                {
                    order: 3,
                    task: 'Verifique que el botón o enlace aumente la altura de la línea al menos a 1.5 (150%)'
                },
                {
                    order: 4,
                    task: 'Compruebe que el botón o enlace aumenta el espacio entre párrafos al menos 1,5 veces más que el espacio entre líneas.'
                }
            ],
            
            results: 'Las comprobaciones n.º 1, n.º 3 y n.º 4 son verdaderas.'
        }
    ]
}