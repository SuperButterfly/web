export const data = {
    name: 'G13',
    
    type: 'general',
    
    relation: [ '3.3.2'],
    
    applicability: 'Todas las tecnologías',
    
    resume: '   Esta técnica proporciona instrucciones al usuario para informarles sobre cambios de contexto ocasionados por cambios en un control de formulario. Estas instrucciones deben estar asociadas con el control de formulario y proporcionarse antes de que el usuario encuentre el cambio de contexto. Esto se puede hacer proporcionando instrucciones en la página web, como parte de un proceso de varios pasos o como parte de la capacitación en una intranet.',
    
    example: [
        {
            title:'Ejemplo 1:',
            resume: `Una serie de botones de radio en la parte superior de una página incluyen opciones para alemán, francés y español. Las instrucciones preceden a los botones que indican al usuario que se cambiará el idioma al seleccionar una opción.`,
        },
         {
            title:'Ejemplo 2:',
            resume: `Una encuesta en línea de 50 preguntas muestra una pregunta a la vez. Aparecen instrucciones al comienzo de la encuesta que explican que los usuarios serán llevados a la siguiente pregunta de la encuesta al seleccionar una respuesta para cada pregunta.`,
        }
    ],
    
    relTech: ['G80'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Localice contenido donde cambiar la configuración de un control de formulario da como resultado un cambio de contexto'
                },
                {
                    order: 2,
                    task: 'Verifique que haya una explicación de lo que sucederá cuando se cambie el control antes de la activación de los controles.'
                }
            ],
            
            results: 'El cheque #2 es verdadero.'
        }
    ]
}