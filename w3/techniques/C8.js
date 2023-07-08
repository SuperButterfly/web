export const data = {
  name: 'C8',

  type: 'css',

  relation: ['1.3.2', '1.4.12', '1.4.5', '1.4.9'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'El objetivo de esta técnica es demostrar cómo se puede mejorar la apariencia visual del espaciado en el texto a través de hojas de estilo mientras se mantiene una secuencia de texto significativa. La propiedad de espaciado entre letras de CSS ayuda a los desarrolladores a controlar la cantidad de espacio en blanco entre los caracteres. Se recomienda esto en lugar de agregar caracteres en blanco para controlar el espacio, ya que los caracteres en blanco pueden cambiar el significado y la pronunciación de la palabra.',

  example: [
    {
      title: 'Ejemplo 1: Separación de caracteres en una palabra',
      code: 'h2 {	letter-spacing: 1em; }  <h2>Museum</h2>'
    }
  ],

  relTech: ['F1', 'F32'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Compruebe si se utilizó la propiedad de espaciado entre letras de CSS para controlar el espaciado.'
        }
      ],

      results: 'Las comprobaciones n.º 1 es verdadera'
    }
  ]
}
