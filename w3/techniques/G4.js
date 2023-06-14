export const data = {
    name: 'G4',
    
    type: 'general',
    
    relation: [ '2.2.1', '2.2.2'],
    
    applicability: 'Todas las tecnologías',
    
    resume: 'El objetivo de esta técnica es proporcionar una forma de pausar el movimiento o el desplazamiento del contenido. Si el usuario necesita pausar el movimiento, para reducir la distracción o tener tiempo para leerlo, puede hacerlo y luego reiniciarlo según sea necesario. Este mecanismo se puede proporcionar mediante controles interactivos que se ajusten a las WCAG o mediante atajos de teclado. Si se utilizan métodos abreviados de teclado, se documentan.',
    
    example: [
        {
            title:'Ejemplo 1:',
            resume: `Un sitio contiene un banner de noticias que se desplaza en la parte superior de la página. Los usuarios que necesiten más tiempo para leerlo pueden presionar la tecla Escape para pausar el desplazamiento. Al presionar Escape nuevamente, se reinicia..`,
        },
        {
            title:'Ejemplo 2:',
            resume: `Una página web contiene un enlace denominado "Cómo atarse un zapato" que enlaza con una animación. El texto que precede inmediatamente al enlace informa al usuario que al presionar la barra espaciadora se pausará la animación y se reiniciará de nuevo.`,
        }
    ],
    
    relTech: ['G75', 'G73', 'G186'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Use el mecanismo proporcionado en la página web o por el agente de usuario para pausar el contenido en movimiento o desplazamiento.'
                },
                {
                    order: 2,
                    task: 'Verifique que el movimiento o desplazamiento se haya detenido y no se reinicie solo.'
                },
                {
                    order: 3,
                    task: 'Utilice el mecanismo proporcionado para reiniciar el contenido en movimiento.'
                },
                {
                    order: 4,
                    task: 'Compruebe que el movimiento o desplazamiento se ha reanudado desde el punto en que se detuvo.'
                }
            ],
            
            results: '#2 y #4 son verdaderas.'
        }
    ]
}