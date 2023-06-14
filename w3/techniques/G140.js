export const data = {
    name: 'G140',
    
    type: 'general',
    
    relation: [ '1.4.9', '1.3.1', '1.4.5' ],
    
    applicability: 'Todas las tecnologías',
    
    resume: ' Esta técnica consiste en separar la codificación estructural del contenido de la codificación de presentación para facilitar la interacción de la tecnología de asistencia. Esto permite a los agentes de usuario realizar transformaciones de estructura y apoyar la interacción con el contenido basándose en la estructura. También permite modificar la presentación utilizando reglas de presentación alternativas adjuntas a las características estructurales.',
    
    example: [
        {
            title: 'Ejemplo 1: HTML con CSS',
            resume: 'Un documento HTML usa las características estructurales de HTML, como párrafos, listas, encabezados, etc., y evita las características de presentación, como cambios de fuente, sugerencias de diseño, etc. CSS se usa para formatear el documento según sus propiedades estructurales. Los atributos de "clase" bien elaborados en HTML amplían la semántica del marcado estructural si es necesario para permitir un formato más flexible con CSS. Las tecnologías de asistencia pueden sustituir o ampliar el CSS para modificar la presentación, o ignorar el CSS e interactuar directamente con la codificación estructural.'
        },
        {
            title: 'Ejemplo 2: PDF etiquetado:',
            resume: 'Un documento PDF consta principalmente del contenido incrustado con información de formato. La información sobre la estructura se proporciona en una sección separada del documento utilizando etiquetas similares a XML; esto se llama "PDF etiquetado". Las tecnologías de asistencia pueden utilizar la información de estas etiquetas para realizar transformaciones de estructura significativas (p. ej., generar una lista de secciones) o para admitir la interacción con el contenido en función de las características estructurales (p. ej., saltar al inicio de los formularios).'
        }
    ],
    
    relTech: ['C29'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Examinar la codificación de un documento.'
                },
                {
                    order: 2,
                    task: 'Verifique que la información estructural y la funcionalidad se proporcionen explícitamente y que estén separadas lógicamente de la información de presentación.'
                }
            ],
            
            results: 'Las comprobacion #2 es verdadera.'
        }
    ]
}