export const data = {
    name: 'G186',
    
    type: 'general',
    
    relation: [ '2.2.2'],
    
    applicability: 'Todas las Tecnologías',
    
    resume: ' El objetivo de esta técnica es proporcionar al usuario un control que le permita dejar de mover o parpadear el contenido. Dado que el control está en la página web, el control mismo cumple con el nivel adecuado de conformidad con las WCAG, por ejemplo, tiene el contraste adecuado, tiene un nombre que lo identifica, es accesible mediante teclado. El control se encuentra en la parte superior de la página o junto al contenido en movimiento. Un solo control puede detener todo el contenido que se mueve o parpadea en la página, o puede haber controles separados para partes separadas del contenido.',
    
    example: [
        {
            title:'Ejemplo 1: cinta de teletipo del mercado de valores',
            resume: `Una página web muestra los últimos resultados del mercado de valores en una "cinta de teletipo" que se desplaza automáticamente por la parte inferior de la pantalla. Un botón de "Pausa" permite al usuario detener el teletipo. Cuando la cinta de teletipo no está en pausa, vuelve a mostrar la información actual del mercado de valores.`,
        },
        {
            title:'Ejemplo 2: Herramienta de teleconferencia',
            resume: `Una página web de teleconferencia muestra una cola de oradores de personas que desean hablar. Una casilla de verificación en la página le permite al usuario elegir si la visualización de la cola debe actualizarse automáticamente cuando se agrega o elimina una nueva persona, o si solo debe actualizarse cuando el usuario presiona el botón "Actualizar". Cuando la cola se actualiza automáticamente, el botón Actualizar está desactivado.`,
        }
    ],
    
    relTech: ['G4', 'G191'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Compruebe que hay un control en la página web para detener el movimiento.'
                },
                {
                    order: 2,
                    task: 'Activa el mando.'
                },
                {
                    order: 3,
                    task: 'Compruebe que se ha detenido el movimiento, el parpadeo o la actualización automática.'
                }
            ],
            
            results: 'Las comprobaciones n.º 1 y n.º 3 son verdaderas.'
        }
    ]
}