export const data = {
  name: 'G87',
  type: 'general',
  relation: ['1.2.2', '1.2.4'],
  applicability:
    'Cualquier tecnología de audio y video donde haya agentes de usuario que admitan subtítulos.',
  resume:
    'Esta técnica proporciona una forma para que las personas con deficiencias auditivas puedan ver el diálogo y los sonidos sin que los usuarios sin problemas auditivos vean los subtítulos. Esto se logra al incrustar los diálogos y sonidos importantes como texto que solo se muestra cuando se solicita. Esta técnica requiere soporte especial para subtítulos en el agente de usuario. NOTA: Los subtítulos no deben confundirse con los subtítulos. Los subtítulos proporcionan texto solo del diálogo y no incluyen sonidos importantes.',
  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Para garantizar que los usuarios sordos puedan usar sus materiales educativos interactivos, la universidad proporciona subtítulos e instrucciones para activar los subtítulos para todos sus programas educativos interactivos de audio.'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Se proporcionan archivos de subtítulos especiales que incluyen información de sincronización para una película existente. Hay reproductores disponibles que pueden reproducir los subtítulos en una ventana separada en la pantalla, sincronizados con la ventana de la película'
    },
    {
      title: 'Ejemplo 3:',
      resume:
        'Todas las películas en línea en un medio de comunicación incluyen subtítulos y se proporcionan en un formato que permite incrustar subtítulos ocultos.'
    },
    {
      title: 'Ejemplo 4:',
      resume:
        'Un video de un evento de noticias local tiene subtítulos que se pueden reproducir sobre el video o en una ventana separada según el reproductor utilizado.'
    }
  ],
  relTech: ['G93', 'SM11', 'SM12'],
  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Active la función de subtítulos ocultos del reproductor multimedia'
        },
        {
          order: 2,
          task: 'Ver el contenido multimedia sincronizado'
        },
        {
          order: 3,
          task: 'Verifique que los subtítulos (de todos los diálogos y sonidos importantes) estén visibles'
        }
      ],
      results: 'La verificación #3 es verdadera.'
    }
  ]
}
