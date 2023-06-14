export const data = {
  
    name: 'G159',
    
    type: 'general',
    
    relation: [ '1.2.1', '1.2.8'],
    
    applicability: 'Se aplica a todas las tecnologías',
    
    resume: 'La técnica de contenido alternativo para presentaciones de solo video es una forma accesible de presentar la misma información en una presentación de solo video. Esta técnica consiste en crear un documento que cuente la misma historia y presente la misma información que el contenido de video pregrabado. El documento debe contener toda la información importante, así como descripciones de escenarios, acciones, expresiones, etc. Si se utilizó un guión para el contenido de solo video para crear el contenido en primer lugar, este puede ser un buen lugar para comenzar, pero el guión debe ser corregido para que coincida con la versión final de la presentación de video.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume:'Esta animación muestra cómo ensamblar un proyecto de carpintería. Ilustra cada paso a través de una serie de números y flechas y también incluye animaciones cortas para mostrar qué sucede si los pasos se realizan incorrectamente. Además, hay una descripción de texto que acompaña al video para explicar cada paso del proceso.'
        }
    ],
    
    relTech: [ 'G69', 'G78', 'G158' ],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Vea el contenido de solo video mientras se refiere a la alternativa para los medios basados ​​en el tiempo.'
                },
                {
                    order: 2,
                    task: 'Verifique que la información en la transcripción incluya la misma información que está en la presentación de solo video'
                },
                {
                    order: 3,
                    task: 'Si el video incluye varias personas o personajes, verifique que la transcripción identifique qué persona o personaje está asociado con cada acción descrita.'
                },
                {
                  order:4,
                  task:'Compruebe que al menos uno de los siguientes es cierto:',
                  suborder: [
                      {
                        order: 1,
                        task:'La transcripción en sí se puede determinar programáticamente a partir de la alternativa de texto para el contenido de solo video.'
                      },
                      {
                        order: 2,
                        task:'Se hace referencia a la transcripción desde la alternativa de texto determinada mediante programación para el contenido de solo video.'
                      }
                  ]
                },
                {
                  order:5,
                  task:'Si las versiones alternativas están en una página separada, verifique la disponibilidad de los enlaces para permitir que el usuario acceda a las otras versiones.'
                }
            ],
            
            results: 'Todas las comprobaciones anteriores son verdaderas.'
        }
    ]
}