export const data = {
    name: 'G182',
    
    type: 'general',
    
    relation: [ '1.4.1' ],
    
    applicability: 'Texto en color cuando el color solo se usa para transmitir información, como palabras que son enlaces en un párrafo',
    
    resume: 'La técnica de diferenciación de color redundante proporciona una forma de proporcionar una diferencia de contraste para los usuarios que no pueden discernir la diferencia de color entre el texto y el enlace. Se debe asegurar que la luminancia relativa sea de 3:1 o mayor. Esta técnica cumple con el criterio de éxito 1.4.1: Uso del color, pero no es la preferida. Se recomienda subrayar los enlaces en los bloques de texto si hay pocos enlaces.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: 'Los enlaces de hipertexto en un documento son de color azul claro medio (#3366CC) y el texto normal es negro (#000000). Debido a que el texto azul es lo suficientemente claro, tiene un contraste de 3.9:1 con el texto circundante y puede ser identificado como diferente del texto circundante por personas con todo tipo de daltonismo, incluidas aquellas personas que no pueden ver el color en absoluto.',
        }
    ],
    
    relTech: [ 'G14', 'G205', 'G182', 'G145' ],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Compruebe que la luminancia relativa del color del texto difiere de la luminancia relativa del texto circundante en una relación de contraste de al menos 3:1.'
                },
                {
                    order: 2,
                    task: 'Verifique que al pasar el mouse sobre el enlace se produzca una mejora visual (como un subrayado, un cambio de fuente, etc.)'
                }
              ],
            
            results: 'Las verificaciones #1 y #2 son verdaderas.'
        }
    ]
}