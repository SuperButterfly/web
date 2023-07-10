export const data = {
  name: 'G148',

  type: 'general',

  relation: ['1.4.3', '1.4.6', '1.48'],

  applicability:
    'Cualquier tecnología en la que el texto y el color de fondo se especifican por separado y los navegadores pueden controlar los colores predeterminados.',

  resume:
    'Esta técnica permite a los usuarios leer el texto sin tener que ajustar manualmente sus opciones de contraste, ya que el navegador determina qué colores se usarán en primer plano y fondo. Esto es especialmente útil para personas con problemas de visión, ya que evita que el navegador y el sitio web entren en conflicto sobre los colores, lo que podría hacer que el texto sea invisible para ellos.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'El autor no especifica ni el color del texto ni el fondo, y no utiliza CSS. Como resultado, el usuario puede configurar los valores predeterminados de su navegador para proporcionar los colores y contrastes que mejor se adapten a sus necesidades.'
    }
  ],

  relTech: ['G156', 'G18'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Busque en todos los lugares donde se puede especificar el color del texto'
        },
        {
          order: 2,
          task: 'Verifique que el color del texto no esté especificado'
        },
        {
          order: 3,
          task: 'Busque en todas las áreas que se puede especificar el color de fondo o la imagen utilizada como fondo'
        },
        {
          order: 4,
          task: 'Verifique que no se especifique ningún color de fondo o imagen utilizada como fondo'
        }
      ],

      results: 'Las verificaciones #2 y 4 son verdaderas.'
    }
  ]
}
