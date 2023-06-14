export const data = {
  
    name: 'G157',
    
    type: 'general',
    
    relation: [ '1.2.9'],
    
    applicability: 'Todas las tecnologías que presentan información en vivo de solo audio.',
    
    resume: 'El objetivo de esta técnica es utilizar un servicio de subtítulos en tiempo real para proporcionar una versión de texto del contenido de audio en vivo. Dichos servicios utilizan un operador humano capacitado que escucha lo que se dice y usa un teclado especial para ingresar el texto con solo un pequeño retraso. Son capaces de capturar un evento en vivo con un alto grado de fidelidad y también de insertar notas en cualquier audio no hablado que es esencial para comprender el evento. La ventana gráfica que contiene el texto del subtítulo está disponible en la misma página web que el contenido de audio en vivo.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume:'Una estación de radio por Internet proporciona una ventana gráfica en su página web para sus servicios de noticias. Los informes de noticias en vivo, especialmente los informes de emergencia, se transcriben mediante un servicio de subtítulos en tiempo real y se muestran en la ventana gráfica.'
        },
        {
            title: 'Ejemplo 2:',
            resume:'Una conferencia de audio recurrente utiliza una utilidad en línea para levantar la mano para ayudar con la cola. Con el fin de facilitar el uso de este producto junto con un servicio de subtítulos de conferencias de retransmisión en línea, la utilidad de colas está diseñada para estar completamente operativa en una ventana estrecha. Para una mejora adicional, se crea un sitio web para mostrar ambas ventanas gráficas dentro de una sola página web.'
        }
    ],
    
    relTech: [ 'G150', 'G58', 'G69' ],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Verifique que la página web contenga una ventana gráfica asociada con el contenido de audio en vivo.'
                },
                {
                    order: 2,
                    task: 'Verifique que el texto del contenido de audio en vivo aparezca en la ventana gráfica con menos de 30 segundos de retraso.'
                }
            ],
            
            results: 'Todas las comprobaciones anteriores son verdaderas.'
        }
    ]
}