export const data = {
  name: 'C32',

  type: 'css',

  relation: ['1.4.10'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'La técnica de diseño de cuadrícula es una forma de presentar contenido sin barra de desplazamiento. Esto se logra mediante el uso de técnicas de diseño que se adaptan al espacio de ventana gráfica disponible. Los principios básicos incluyen definir el tamaño de las regiones de diseño y colocarlas en el contenedor de cuadrícula como una fila de elementos de cuadrícula adyacentes.',

  example: [
    {
      title:
        'Ejemplo 1: Ejemplo 1: Diseño de cuadrícula en HTML y CSS - Complejidad media',
      code: '<html lang="en"><head><meta charset="UTF-8"><title>CSS: Using media queries and grid CSS to reflow columns</title><style>/* Reflow Styling */header[role="banner"]{grid-area:header;}main[role="main"]{grid-area:main;}aside[role="complementary"]{grid-area:aside;}footer[role="contentinfo"]{grid-area:footer;}.grid,.subgrid{display:grid;grid-template-columns:minmax(0,1fr);}.grid{grid-template-areas:"header"main"aside"footer";width:100%;}.subgrid{width:calc(100%+2rem);margin:0-1rem;}.grid-item,.subgrid-item{padding:1rem;}@media all and (min-width:576px){.subgrid{grid-template-columns:minmax(0,1fr)minmax(0,1fr);margin-bottom:1rem;}.subgrid-item{padding-bottom:0.25rem;}}@media all and (min-width:992px){.grid{grid-template-areas:"header header header"main main aside"footer footer footer";grid-template-columns:minmax(0,1fr)minmax(0,1fr)minmax(0,1fr);}}</style></head><body class="grid"><header role="banner" class="grid-item">...</header><main role="main" class="grid-item">... ...<div class="subgrid"><div class="subgrid-item">...</div><div class="subgrid-item">...</div></div></main><aside role="complementary" class="grid-item">...</aside><footer role="contentinfo" class="grid-item">...</footer></body></html>'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
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
