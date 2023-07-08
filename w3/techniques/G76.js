export const data = {
  name: 'G76',

  type: 'general',

  relation: ['1.2.3', '1.2.8'],

  applicability: 'Contenido que se actualiza automáticamente.',

  resume:
    ' La técnica de actualización por petición del usuario permite que el usuario controle la actualización del contenido para evitar la confusión o desorientación causada por actualizaciones automáticas. Esta técnica proporciona un mecanismo para que el usuario solicite una actualización del contenido en lugar de realizar actualizaciones automáticas.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'En HTML, un desarrollador puede proporcionar un botón o enlace que permita al usuario actualizar el contenido. Por ejemplo, en una página con noticias ubicadas en http://www.example.com/news.jsp',
      code: ' <a href="news.jsp">Actualizar esta página</a>'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'En una interfaz web para correo electrónico (Webmail), un desarrollador puede proporcionar un botón o enlace para obtener nuevos correos entrantes en lugar de actualizarlos automáticamente.'
    }
  ],

  relTech: ['G75'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Encuentre mecanismos para actualizar el contenido (si tal mecanismo está presente).'
        },
        {
          order: 2,
          task: 'Para cada mecanismo de este tipo, compruebe si permite al usuario solicitar una actualización.'
        },
        {
          order: 3,
          task: 'Para cada mecanismo de este tipo, compruebe si puede provocar una actualización automática.'
        }
      ],

      results: 'Si el #2 es verdadero, entonces el #3 es falso.'
    }
  ]
}
