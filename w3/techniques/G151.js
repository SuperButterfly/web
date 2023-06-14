export const data = {
  
    name: 'G151',
    
    type: 'general',
    
    relation: [ '1.2.9'],
    
    applicability: 'Todas las tecnologías que presentan información de solo audio en vivo',
    
    resume: 'El objetivo de esta técnica es proporcionar una transcripción o guión si el contenido de audio en vivo sigue un guión establecido. Debido a que se prepara con anticipación, el guión puede ser más preciso y completo que la transcripción en vivo. Sin embargo, el guión no se sincronizará con el audio mientras se reproduce. El audio en vivo no debe desviarse del guión de esta técnica. Con esta técnica, se proporciona un enlace a la transcripción o guión y debe cumplir con las WCAG 2.0 y podría incluirse en otra ubicación en la misma página web o en otro URI.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume:'Una obra de radio en vivo de un grupo de teatro marginal se está transmitiendo a la Web. Como los actores se apegan en gran medida a un guión establecido y el presupuesto del programa es pequeño, los productores proporcionan un enlace (con el permiso del dramaturgo) al guión de la obra en HTML.'
        },
        {
            title: 'Ejemplo 2:',
            resume:'Un miembro del gobierno transmite un importante discurso político en la Web. Una transcripción del discurso está disponible en el sitio web cuando comienza el discurso.'
        }
    ],
    
    relTech: [ 'G150', 'G58', 'G69', 'G157' ],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Compruebe la presencia de un enlace que apunte directamente al guión o la transcripción.'
                },
                {
                    order: 2,
                    task: 'Verifique que el audio en vivo siga el guión.'
                },
                {
                    order: 3,
                    task: 'Si las versiones alternativas están en una página separada, verifique la disponibilidad de los enlaces para permitir que el usuario acceda a las otras versiones.'
                }
            ],
            
            results: 'Todas las comprobaciones anteriores son verdaderas.'
        }
    ]
}