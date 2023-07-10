export const data = {
  name: 'G187',

  type: 'general',

  relation: ['2.2.2'],

  applicability: 'Todas las Tecnologías',

  resume:
    ' El objetivo de esta técnica es garantizar que el contenido parpadeante se pueda desactivar mediante las funciones del agente de usuario. Los agentes de usuario permiten a los usuarios detener la animación de contenido en ciertas tecnologías. Cuando el usuario activa esta función, se detiene toda la animación, incluido el parpadeo. Esta función se puede proporcionar a través de controles interactivos que se ajusten a las WCAG o mediante atajos de teclado documentados.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Una página contiene un banner parpadeante destinado a llamar la atención del usuario. El banner es una imagen gif animada que se repite indefinidamente. El usuario presiona la tecla "escape", lo que hace que el agente de usuario detenga la animación de todas las imágenes gif animadas en la página.'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Cargue una página que incluya contenido parpadeante.'
        },
        {
          order: 2,
          task: 'Active el comando de detener animación del navegador (generalmente la tecla Escape) y Verifique si el parpadeo se detiene.'
        }
      ],

      results: 'El cheque #2 es verdadero.'
    }
  ]
}
