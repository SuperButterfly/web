export const data = {
    name: 'G195',
    
    type: 'general',
    
    relation: [ '1.4.11', '2.4.7' ],
    
    applicability: 'Generalmente aplicable.',
    
    resume: ' Esta técnica busca potenciar el indicador de foco de los navegadores, haciendo que sea más visible mediante un color de alto contraste, una línea gruesa y otros indicadores visuales.',
    
    example: [
        {
            title: 'Ejemplo 1: Enlaces',
            resume: 'Una página web tiene un color de fondo oscuro y texto y enlaces claros. Cuando el foco aterriza en un enlace, el enlace se destaca con una línea amarilla brillante, de 3 píxeles de ancho.'
        },
        {
            title: 'Ejemplo 2: elementos de formulario',
            resume: 'Una página Web incluye un formulario dentro de una tabla. Los bordes tanto de la tabla como de los elementos del formulario son líneas negras finas. Cuando el foco aterriza en un elemento de formulario, el elemento se perfila con una línea roja de 5 píxeles que es parcialmente transparente. El rojo es equivalente a un color hexadecimal de #FF3838, lo que proporciona una relación de contraste de 3,6:1 con el fondo blanco.'
        },
        {
            title: 'Ejemplo 3: Menús',
            resume: 'Una página web incluye un menú interactivo con submenús. Un usuario puede mover el foco en el menú usando las teclas de flecha. A medida que se mueve el enfoque, el elemento de menú actualmente enfocado cambia su fondo a un color diferente, que tiene una relación de contraste de 3:1 con los elementos circundantes y una relación de contraste de 4,5:1 con su propio texto.'
        }
    ],
    
    relTech: [ 'G149','G165','C15'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Navegue hasta el componente y verifique que tenga un indicador de enfoque visible.'
                },
                {
                    order: 2,
                    task: 'Verifique que el área del indicador de enfoque tenga al menos el tamaño de un borde de 1 CSS px alrededor del componente.'
                },
                {
                    order: 3,
                    task: 'Si el área del indicador de enfoque no es al menos igual al área de un borde de 1 píxel CSS, verifique que tenga un área de al menos 4 píxeles CSS a lo largo del lado más corto del componente.'
                },
                {
                    order: 4,
                    task: 'Verifique que el cambio de contraste del indicador entre los estados enfocado y desenfocado tenga una relación de 3:1 o más para el área mínima del indicador de enfoque.'
                },
                {
                    order: 5,
                    task: 'Si el indicador de enfoque no tiene una relación de contraste de 3:1 con sus colores adyacentes, verifique que tenga al menos 2px de grosor.'
                }
            ],
            
            results: 'Las comprobaciones n.º 2, n.º 4 y n.º 5 son verdaderas.'
        }
    ]
}