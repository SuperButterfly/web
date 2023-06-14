export const data = {
    name: 'G9',
    
    type: 'general',
    
    relation: [ '1.2.4'],
    
    applicability: 'Se aplica a todas las tecnologías que presentan información audiovisual.',
    
    resume: 'La técnica de subtitulado en tiempo real permite que los usuarios con discapacidades auditivas accedan a transmisiones de medios sincronizadas. Se usan tecnologías estenográficas y de escritura rápida para la escritura de texto en tiempo real. Además, existe la posibilidad de usar la conversión de voz a texto para los servicios de subtítulos. Estas herramientas permiten una mayor accesibilidad para personas con discapacidad auditiva.',
    
    example: [
        {
            title: 'Ejemplo 1',
            resume: 'Un estudio de televisión utiliza un servicio de subtítulos en tiempo real para crear subtítulos para sus noticias de la noche en línea.'
        },
        {
            title: 'Ejemplo 2:',
            resume: 'Un usuario mira un seminario en línea en su dispositivo móvil, incluidos los subtítulos proporcionados mediante el uso de Communication Access Real-time Translation (CART). Los subtítulos proporcionados también benefician a los participantes en persona que necesitan subtítulos y pueden ver la información en su propio dispositivo.'
        }
    ],
    
    relTech: [ 'G87', 'G93', 'G157'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Verifique que exista un procedimiento y una política para garantizar que los subtítulos se entreguen en tiempo real.'
                }
            ],
            
            results: 'La verificación #1 es verdadera.'
        }
    ]
}