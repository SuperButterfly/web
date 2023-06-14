export const data = {
    name: 'G174',
    
    type: 'general',
    
    relation: [ '1.4.3', '1.4.6', '1.4.11' ],
    
    applicability: 'Cualquier tecnología ',
    
    resume: 'Es posible cumplir con el Criterio de Conformidad 1.4.3 y 1.4.6 usando una versión alternativa de la página. Esta versión debe contener el mismo contenido y funcionalidad que la original y cumplir con el nivel deseado de contraste. El texto debe tener un contraste de 4.5:1 y texto grande de 3:1 para el Criterio de Conformidad 1.4.3, y un contraste de 7:1 y 4.5:1 para el Criterio de Conformidad 1.4.6.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: 'Una página con algunos titulares que no cumplen los requisitos de contraste de 3:1 tiene un enlace de contraste alto (5:1) en la parte superior de la página que lleva al usuario a una nueva versión de la página con un contraste mínimo de 4,5:1 en todos texto e imágenes de texto.'
        },
        {
            title: 'Ejemplo 2:',
            resume: 'Una página utiliza fondos sombreados para el efecto, pero da como resultado un contraste de texto a fondo de 4:1. Un control en la parte superior de la página dice "alto contraste". Al hacer clic en él, se usan diferentes estilos y se sueltan los colores de fondo para lograr un contraste de 7:1.'
        }
    ],
    
    relTech: [ 'G17', 'G18', 'G145', 'G148'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Verifique que exista un enlace o control en la página original que proporcione acceso a la versión alternativa.'
                },
                {
                    order: 2,
                    task: 'Verifique que el enlace o control en la página original cumpla con todos los criterios de éxito para el nivel de conformidad que se está probando.'
                },
                {
                    order: 3,
                    task: 'Verifique que la versión alternativa cumpla con el contraste y todos los demás criterios de éxito para el nivel de conformidad que se está probando.'
                }
            ],
            
            results: 'Las tres comprobaciones son verdaderas.'
        }
    ]
}