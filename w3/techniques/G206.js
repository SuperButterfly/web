export const data = {
  name: 'G206',

  type: 'general',

  relation: ['1.4.10', '1.4.8'],

  applicability: 'Todas las tecnologías que admiten el cambio de estilo',

  resume:
    ' Esta técnica busca potenciar el indicador de foco de los navegadores, haciendo que sea más visible mediante un color de alto contraste, una línea gruesa y otros indicadores visuales.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Una empresa de bienes raíces tiene un informe anual en línea que tiene un diseño idéntico al de su versión impresa y, como tal, requiere desplazamiento horizontal para leer una línea de texto. Hay un control en la página que cambia la hoja de estilo y proporciona un diseño que no requiere desplazamiento horizontal.'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Una hoja de cálculo financiera está en línea. Incluye texto que explica los cambios en el mercado inmobiliario en enero. Fuera de la pantalla a la derecha, hay una columna con una explicación de los cambios en el mercado en septiembre. El usuario puede desplazarse horizontalmente hasta el área de septiembre y leer cada línea de texto sin tener que desplazarse más cuando se maximiza el tamaño de la ventana.'
    }
  ],

  relTech: ['C20'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Abra el contenido que requiere desplazamiento horizontal en una ventana de pantalla completa.'
        },
        {
          order: 2,
          task: 'Verifique que haya una opción dentro del contenido para cambiar a un diseño que no requiera que el usuario se desplace horizontalmente para leer una línea de texto.'
        },
        {
          order: 3,
          task: 'Activa la opción.'
        },
        {
          order: 4,
          task: 'Verifique para asegurarse de que no se requiera el desplazamiento horizontal para leer ninguna línea de texto.'
        }
      ],

      results: 'Las comprobaciones #2 y #4 son verdaderas.'
    }
  ]
}
