export const data = {
    name: 'G75',
    
    type: 'general',
    
    relation: [ '1.2.3', '1.2.8'],
    
    applicability: 'Contenido que se actualiza automáticamente.',
    
    resume: 'El objetivo de esta técnica es garantizar que los usuarios puedan posponer actualizaciones automáticas de contenido u otras interrupciones que no sean de emergencia. Esto se puede lograr a través de una preferencia o alertando a los usuarios de una actualización inminente y permitiéndoles suprimirla. Si se proporciona una preferencia, la actualización automática de contenido se puede desactivar de forma predeterminada y los usuarios pueden especificar la frecuencia de las actualizaciones automáticas de contenido si eligen habilitar la configuración.',
    
    example: [
        {
            title:'Ejemplo1:',
            resume: `Una página web proporciona cotizaciones de acciones y actualizaciones automáticas de vez en cuando. La página proporciona un breve formulario con un campo "Frecuencia de actualización de datos (minutos):" para que los usuarios puedan ajustar la frecuencia de la actualización.`
        }
    ],
    
    relTech: ['G76'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Encuentra páginas con contenido que se actualice automáticamente.'
                },
                {
                    order: 2,
                    task: 'Para cada actualización automática, busque un mecanismo para ajustar el tiempo de las actualizaciones.'
                },
                {
                    order: 3,
                    task: 'Compruebe que la actualización automática esté desactivada de forma predeterminada o que se advierta al usuario antes de que se produzca una actualización automática y se le permita suprimirla.'
                }
            ],
            
            results: '#3 es cierto.'
        }
    ]
}