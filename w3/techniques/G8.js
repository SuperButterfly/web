export const data = {
    name: 'G8',
    
    type: 'general',
    
    relation: [ '1.2.3', '1.2.5', '1.2.7' ],
    
    applicability: 'Cualquier tecnología que admita audio y video.',
    
    resume: 'Esta técnica permite a los usuarios acceder a contenido visualmente a través de una versión de audio que proporciona información adicional sobre acciones, personajes, cambios de escena y texto en pantalla. Esta información se agrega durante pausas en el diálogo y los efectos de sonido para no oscurecer la información clave de la pista de sonido original. Esta versión de audio puede ser una pista de sonido alternativa o la pista estándar que todos escuchan.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: 'Una versión alternativa de un video en línea de una familia escapando de un edificio en llamas: hay un diálogo continuo entre el esposo y la esposa sobre dónde están los niños. Mientras tanto, en el fondo, una pared se derrumba. Esta es una información importante en la historia porque bloqueará su salida de esa parte del edificio. La pista del video se detiene (se repite el mismo cuadro) mientras un narrador brinda los detalles sobre la caída del muro y el video continúa.'
        },
        {
            title: 'Ejemplo 2:',
            resume: 'Una película de entrenamiento tiene una narrativa que se desarrolla casi continuamente. Hay una versión alternativa disponible para las personas que tienen dificultades para ver la parte del video. La versión alternativa congela el video y proporciona una descripción de audio de la información clave.'
        }
    ],
    
    relTech: [ 'G69', 'G78' ,'SM6', 'SM7', 'G173'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Abre la versión de la película que incluye descripciones de audio extendidas.'
                },
                {
                    order: 2,
                    task: 'Verifique que el video se detenga para una descripción de audio extendida cuando no haya suficiente espacio para incluir la narración necesaria entre el diálogo natural.'
                },
                {
                    order: 3,
                    task: 'Comprueba que la información necesaria está en la audiodescripción.'
                },
                {
                  order: 4,
                  task:'Si las versiones alternativas están en una página separada, verifique la disponibilidad de los enlaces para permitir que el usuario acceda a las otras versiones.'
                }
            ],
            
            results: 'Las comprobaciones n.º 2, n.º 3 y n.º 4 son verdaderas.'
        }
    ]
}