export const data = {
    name: 'C31',
    
    type: 'css',
    
    relation: ['1.4.10'],
    
    applicability: 'Todas las tecnologias que soporten CSS',
    
    resume: 'La técnica Flexbox permite a los diseñadores crear contenido sin la necesidad de una barra de desplazamiento, ajustándose al espacio de la ventana gráfica. Esto se logra mediante el uso de propiedades de Flexbox para definir el tamaño de las regiones de diseño y colocarlas en un contenedor de flexbox. Se debe tener caution al usar el orden de Flexbox para evitar desconexiones de la navegación de teclado.',
    
    example: [
        {
            title: 'Ejemplo 1: Ejemplo 1: Diseño flexbox de complejidad media en HTML y CSS',
            code: '<html lang="en"><head><meta charset="UTF-8"><title>Using CSS Flexbox for Reflow</title><style>.row{width:100%;display:flex;flex-flow:row wrap;}.row-nested{width:calc(100% + 2rem);margin:0 -1rem 1rem -1rem;}.col{padding:1rem;flex:0 1 100%;}@media all and (min-width: 576px){.col-panel{flex:0 1 50%;padding-bottom:0.25rem;}}@media all and (min-width: 992px){main[role="main"]{flex:0 1 66.333333%;}aside[role="complementary"]{flex:0 1 33.333333%;margin-top:0;}}</style></head><body class="row"><header role="banner" class="col">...</header><main role="main" class="col">... ...<div class="row row-nested"><div class="col col-panel">...</div><div class="col col-panel">...</div></div></main><aside role="complementary" class="col">...</aside><footer role="contentinfo" class="col">...</footer></body></html>'
        }
    ],
    
    relTech: [ 'none'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Muestre la página web en un agente de usuario con capacidad de zoom del 400 % y establezca las dimensiones de la ventana gráfica (en píxeles CSS) en 1280 de ancho y 1024 de alto.'
                },
                {
                    order: 2,
                    task: 'Ampliar en un 400%.'
                },
                {
                    order: 3,
                    task: 'Para el contenido que se lee horizontalmente, verifique que todo el contenido y la funcionalidad estén disponibles sin desplazamiento horizontal.'
                },
                {
                    order: 4,
                    task: 'Para el contenido que se lee verticalmente, verifique que todo el contenido y la funcionalidad estén disponibles sin desplazamiento vertical.'
                }
            ],
            
            results: '#3 y #4 son verdaderas.'
        }
    ]
}