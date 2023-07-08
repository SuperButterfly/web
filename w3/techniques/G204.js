export const data = {
  name: 'G204',

  type: 'general',

  relation: ['1.4.8'],

  applicability: 'Todas las tecnologías ',

  resume:
    'Esta técnica evita el desplazamiento horizontal de los bloques de texto cuando la ventana se estrecha. Esto se logra definiendo el ancho de los contenedores de texto en porcentajes. Esto permite que los agentes de usuario HTML y XHTML redistribuyan el texto automáticamente sin necesidad de especificar anchos en medidas absolutas.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Un sitio de periódico incluye artículos con columnas que se ajustan con el ancho de la ventana de los agentes de usuario. Los usuarios con discapacidades cognitivas pueden reducir la columna a un ancho que facilite la lectura.'
    }
  ],

  relTech: ['C20'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Abra el contenido que contiene un bloque de texto en un agente de usuario común.'
        },
        {
          order: 2,
          task: 'Verifique si el agente de usuario tiene una configuración que debe habilitarse para permitir el reflujo y, de ser así, habilítela.'
        },
        {
          order: 3,
          task: 'Reduzca la ventana de visualización a 1/4 del ancho de la pantalla.'
        },
        {
          order: 4,
          task: 'Verifique que el contenido no requiera desplazamiento horizontal para leer una línea de texto.'
        }
      ],

      results: 'La verificación #4 es verdadera.'
    }
  ]
}
