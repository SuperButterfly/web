export const data = {
  name: 'C35',

  type: 'css',

  relation: ['1.4.5', '1.4.9'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'Esta técnica es para mostrar cómo usar CSS para reemplazar texto HTML con imágenes de texto. Un autor comienza creando una página HTML con elementos semánticos. Se diseñan dos o más hojas de estilo: una con texto HTML y la otra con funciones CSS para reemplazar el texto con imágenes. Se proporciona un control para permitir que los usuarios cambien entre las vistas. Se cumplen los criterios de conformidad si hay una presentación que no incluye imágenes de texto y el control cumple con los requisitos relevantes. Usar esta técnica requiere prever la compatibilidad con la tecnología de asistencia.',

  example: [
    {
      title:
        'Ejemplo 1: una caja de tamaño con espacio para permitir la expansión',
      resume:
        'Un sitio de estudio de diseño utiliza un selector de estilo para permitir a los usuarios ver dos presentaciones de su página de inicio. Para la versión predeterminada, el texto del encabezado se reemplaza con imágenes de texto. Un control en la página permite a los usuarios cambiar a una versión que presenta los encabezados como texto. A continuación se muestra el CSS para la presentación que incluye imágenes de texto. Tenga en cuenta que el CSS utiliza el posicionamiento para colocar el contenido de los elementos de encabezado fuera de la pantalla para que el texto permanezca disponible para los usuarios de lectores de pantalla.',
      code: '#Header h1 {background-image: url(pufferfish-logo.png);height: 195px;width: 290px;background-repeat: no-repeat;margin-top: 0;position: absolute;}#Header h1 span {position: absolute;left: -999em;}#Header h2 {background-image: url(beauty.png);background-repeat: no-repeat;height: 234px;width: 33px;margin-left: 8px;position: absolute;margin-top: 250px;}#Header h2 span {position: absolute;left: -999em;}'
    }
  ],

  relTech: ['C29'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Compruebe que la página web incluye un control que permite a los usuarios seleccionar una presentación alternativa.'
        },
        {
          order: 2,
          task: 'Compruebe que cuando se activa el control, la página resultante incluye texto (texto determinado mediante programación) dondequiera que se hayan utilizado imágenes de texto.'
        }
      ],

      results: 'Todas las verificaciones son verdaderas'
    }
  ]
}
