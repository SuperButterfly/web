export const data = {
    name: 'G142',
    
    type: 'general',
    
    relation: [ '1.4.4'],
    
    applicability: 'Todas las tecnologías con agente de usuario proporcionaron capacidad de zoom.',
    
    resume: 'Esta técnica ofrece la capacidad de escalar contenido de forma uniforme en tecnologías web compatibles con agentes de usuario. Esto requiere que la función de zoom conserve todas las relaciones espaciales y que toda la funcionalidad siga siendo accesible. Para cumplir con este Criterio de Conformidad, debe realizarse pruebas con una amplia variedad de agentes de usuario.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: `Internet Explorer 7 y Opera 9 proporcionan una función de zoom que escala el contenido de la página HTML/CSS de manera uniforme.`
        },
        {
            title: 'Ejemplo 2:',
            resume: `Para permitir a los usuarios cambiar el tamaño del texto, Adobe Reader proporciona una herramienta de ampliación que escala las páginas PDF de manera uniforme.`
        },
    ],
    
    relTech: [ 'none' ],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Mostrar contenido en un agente de usuario'
                },
                {
                    order: 2,
                    task: 'Ampliar contenido al 200%'
                },
                {
                    order: 3,
                    task: 'Comprobar si todo el contenido y la funcionalidad están disponibles'
                }
            ],
            
            results: 'La verificación #3 es verdadera.'
        }
    ]
}
