export const data = {
    name: 'C20',
    
    type: 'css',
    
    relation: [ '1.4.4', '1.4.8' ],
    
    applicability: 'Todas las tecnologias que soporten CSS',
    
    resume: 'La técnica de Longitud de Línea Recomendada (RLT) busca garantizar que los usuarios con discapacidades de lectura o visión puedan ver y interactuar con el contenido de manera eficiente mediante el uso de medidas relativas en los diseños CSS para permitir que el ancho de la columna aumente con el tamaño de la fuente, asegurando que la longitud de línea promedio sea de 80 caracteres o menos.',
    
    example: [
        {
            title: 'Ejemplo 1: un formulario de contacto',
            code: '<div id="contenido_principal"><p>Lorem ipsum dolor sit amet, consectetur adipisicing...</p></div> #main_content {max-width: 70em}'
        },
        {
            title: 'Ejemplo 2: botón de opción',
            code: '<div id="contenido_principal"><p>Lorem ipsum dolor sit amet, consectetur adipisicing...</p></div> #main_content {max-width: 90%}'
        }
    ],
    
    relTech: [ 'none'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Pruebe para ver que las columnas están definidas en unidades relativas.'
                },
                {
                    order: 2,
                    task: 'Compruebe que la longitud de la línea se puede establecer en 80 caracteres o menos cambiando el tamaño de la ventana del navegador.'
                } 
            ],
            
            results: 'Las comprobaciones n.º 1 y n.º 2 son verdaderas.'
        }
    ]
}