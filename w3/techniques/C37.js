export const data = {
  name: 'C37',

  type: 'css',

  relation: ['1.4.10'],

  applicability: 'Todas las tecnologias que soporten CSS y Html',

  resume:
    'Técnica de diseño receptivo para mostrar imágenes sin barras de desplazamiento. Se logra mediante el uso de propiedades CSS max-widthy height. Se asegura que las imágenes no se salgan de su área de diseño, incluso en diseños de una sola columna. Necesita delicadeza para lograr resultados atractivos en diferentes tamaños de ventana y niveles de zoom.',

  example: [
    {
      title: 'Ejemplo 1: ajuste de imágenes en HTML y CSS',
      resume:
        'El siguiente ejemplo simple usa HTML y CSS para crear una imagen adecuada. Las regiones de diseño ajustan su tamaño a medida que se ajusta la ventana gráfica. Posteriormente, las imágenes ajustan su tamaño para caber dentro de los contenedores de la región de diseño. El nivel de zoom se puede aumentar al 400 % sin necesidad de desplazarse en más de una dirección. Este ejemplo en particular usa un tamaño porcentual para el max-widthy un tamaño automático para que heightla imagen mantenga las dimensiones originales.',
      code: '<style>.img-responsive{max-width:100%;}</style><div class="panel"><img class="img-responsive" src="..." alt="">...</div>'
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
