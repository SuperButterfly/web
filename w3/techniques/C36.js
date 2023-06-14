export const data = {
    name: 'C36',
    
    type: 'css',
    
    relation: [ '1.4.12' ],
    
    applicability: 'Todas las tecnologias que soporten CSS',
    
    resume: 'La técnica de resumen de texto es una herramienta útil para las personas con discapacidades cognitivas. Esta técnica permite a los usuarios ver una versión abreviada de un contenido web sin tener que leer todo el contenido. Esto se puede lograr mediante la creación de una versión abreviada o resumida del contenido, que se presenta junto con la versión completa. El autor debe proporcionar un botón de resumen u opción para mostrar el contenido resumido, y al presionar el botón se debe mostrar el contenido resumido. El contenido resumido debe estar en el mismo formato que el contenido completo, usando el mismo lenguaje y los mismos estilos. El contenido resumido debe contener las principales ideas del contenido completo, pero no todos los detalles. Esta técnica es útil para aquellos que tienen problemas de comprensión de lectura y pueden beneficiarse de una versión abreviada del contenido.',
    
    example: [
        {
            title: 'Ejemplo 1: un párrafo se expande verticalmente dentro del contenedor',
            code: '<div class="card"><img src="image.png" alt="proper alt text"><h3>Heading</h3><p class="lede">Long lede paragraph…</p></div>'
        }
    ],
    
    relTech: [ 'none'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Establezca el nivel de zoom al 100%.'
                },
                {
                    order: 2,
                    task: 'Utilice una herramienta u otro mecanismo para aplicar las métricas de espaciado de texto (altura de línea y espaciado de párrafo, letra y palabra), como el Bookmarklet de espaciado de texto o un complemento de navegador de estilo de usuario.'
                },
                {
                    order: 3,
                    task: 'Verifique que todo el contenido y la funcionalidad estén disponibles, por ejemplo, el texto en los contenedores no está truncado y no se superpone a otro contenido.'
                }
            ],
            
            results: 'La verificación #3 es verdadera'
        }
    ]
}