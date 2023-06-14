export const data = {
    name: 'G198',
    
    type: 'general',
    
    relation: [ '2.2.1'],
    
    applicability: 'Todas las tecnologías',
    
    resume: ' El objetivo de esta técnica es proporcionar un mecanismo para que las personas que no pueden completar tareas dentro de un límite de tiempo específico desactiven el límite de tiempo.',
    
    example: [
        {
            title:'Ejemplo 1:',
            resume: `Una página tiene una lista de titulares de noticias que se actualizan automáticamente cada minuto. En la parte superior de la página hay un enlace que desactiva la actualización.`,
        }
    ],
    
    relTech: ['G133', 'G180', 'G4'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Verifique que haya un mecanismo para desactivar cualquier límite de tiempo cerca de la parte superior de la página.'
                },
                {
                    order: 2,
                    task: 'Verifique que el límite de tiempo de la página sea lo suficientemente largo como para que un usuario pueda navegar fácilmente al mecanismo incluso si es 10 veces más lento que la mayoría de los usuarios'
                }
            ],
            
            results: 'Las comprobaciones n.º 1 y n.º 2 son verdaderas.'
        }
    ]
}