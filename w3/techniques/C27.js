export const data = {
    name: 'C27',
    
    type: 'css',
    
    relation: [ '1.3.2', '2.4.3' ],
    
    applicability: 'CSS utilizado con HTML y XHTML',
    
    resume: 'Los diseñadores web a veces usan imágenes espaciadoras para controlar el diseño, pero las hojas de estilo en cascada (CSS) ofrecen un control suficiente para reemplazarlas. Las propiedades de CSS para márgenes y relleno se usan para controlar el diseño agregando espacio externo o interno a un elemento.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: 'Un periódico en línea colocó una barra de navegación visualmente en la esquina superior izquierda de la página, directamente debajo de su logotipo inicial. En el código fuente, los elementos de navegación aparecen después de los elementos que codifican el logotipo.'
        }
    ],
    
    relTech: [ 'G57', 'G59'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Examine visualmente el orden del contenido en la página web tal como se presenta al usuario final.'
                },
                {
                    order: 2,
                    task: 'Examine los elementos en el DOM usando una herramienta que le permita ver el DOM.'
                },
                {
                    order: 3,
                    task: 'Asegúrese de que el orden del contenido en las secciones del código fuente coincida con la presentación visual del contenido en la página web. (por ejemplo, para una página en inglés, el orden es de arriba a abajo y de izquierda a derecha).'
                }
            ],
            
            results: 'La verificación #3 es verdadera.'
        }
    ]
}