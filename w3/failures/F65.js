export const data = {
  name: 'F5',

  type: 'failure',

  relation: ['1.1.1'],

  applicability: 'HTML y XHTML',

  resume:
    ' Las tecnologías de asistencia necesitan una fuente de texto alternativo para identificar la imagen y transmitir su propósito al usuario. El atributo alt es la forma preferida de proporcionar un texto alternativo, pero también se pueden usar los atributos WAI-ARIA apropiados. Algunas tecnologías de asistencia intentan compensar las alternativas de texto que faltan leyendo el nombre de archivo de la imagen, pero no es suficiente confiar simplemente en el nombre del archivo.',

  example: [
    {
      title: 'Ejemplo 1: alternativa de texto faltante1',
      resume:
        'En el ejemplo de código a continuación, la persona que usa un lector de pantalla no sabría el propósito de la imagen.',
      code: '<img src="../images/animal.jpg" />'
    }
  ],

  relTech: ['H67', 'H37', 'ARIA10'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Compruebe si el altatributo está presente.'
        },
        {
          order: 2,
          task: 'Compruebe si aria-labelledbyel atributo está presente Y hace referencia a uno o más elementos de identificación en la página Y comprueba si aria-labelledbyse admite la accesibilidad .'
        },
        {
          order: 3,
          task: 'Compruebe si el aria-labelatributo está presente Y compruebe si aria-labelse admite la accesibilidad'
        }
      ],

      results:
        'Si todos los números 1, 2, 3 y 4 son falsos, se aplica esta condición de falla.'
    }
  ]
}
