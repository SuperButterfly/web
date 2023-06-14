export const data = {
    name: 'G191',
    
    type: 'general',
    
    relation: [ '2.2.2'],
    
    applicability: 'Esta técnica se relaciona con todas las tecnologías.',
    
    resume: 'Esta es una técnica general para permitir que las personas que no pueden usar una página con contenido parpadeante apaguen el contenido parpadeante. El requisito de conformidad 1 permite que se utilicen páginas alternativas conformes para cumplir con la conformidad. Esta técnica es un ejemplo de ese enfoque aplicado a los criterios de éxito 2.2.2.',
    
    example: [
        {
            title:'Ejemplo 1:',
            resume: `Una página tiene un texto parpadeante en la parte superior que advierte a los usuarios que no deben enviar la página sin registrarse primero. Un enlace en la parte superior de la página vuelve a cargar la página con el texto parpadeante reemplazado por un texto diseñado para ser muy visible pero que no parpadea.`,
        }
    ],
    
    relTech: ['G4', 'G11', 'G152', 'G186', 'G187'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Compruebe que hay un mecanismo para recargar la página para apagar el parpadeo.'
                },
                {
                    order: 2,
                    task: 'Compruebe que la página recargada no parpadea y Verifica que la página recargada tenga toda la información y funcionalidad de la página original.'
                }
            ],
            
            results: 'Todas las comprobaciones anteriores son verdaderas.'
        }
    ]
}