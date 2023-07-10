export const data = {
  name: 'G18',

  type: 'general',

  relation: ['1.4.3', '1.4.6'],

  applicability:
    'Cualquier tecnología en la que el texto y el color de fondo se especifican por separado y los navegadores pueden controlar los colores predeterminados.',

  resume:
    'La técnica de legibilidad de texto ayuda a garantizar que los usuarios puedan leer el texto sobre un fondo. Esta técnica describe la relación de contraste mínima para el texto de menos de 18 puntos (si no está en negrita) o menos de 14 puntos (si está en negrita). Esta técnica también relaja el requisito de relación de contraste de 7:1 para el texto que tiene al menos 18 puntos (si no está en negrita) o al menos 14 puntos (si está en negrita). Para cumplir con ello, se puede ajustar la luminancia relativa del texto y del fondo, añadir un contorno negro alrededor de la letra, o proporcionar un halo alrededor del texto.',

  example: [
    {
      title: 'Ejemplo 1: ',
      resume:
        'Se elige un fondo negro para que se puedan utilizar letras de colores claros que coincidan con el logotipo de la empresa.'
    },
    {
      title: 'Ejemplo 2: ',
      resume:
        'El texto se coloca sobre una imagen del campus universitario. Dado que en la imagen aparece una amplia variedad de colores y sombras, el área detrás del texto se ve borrosa de color blanco, por lo que la imagen es muy tenue y la oscuridad máxima sigue siendo lo suficientemente clara como para mantener una relación de contraste de 4,5:1 con el texto negro escrito encima. la imagen.'
    }
  ],

  relTech: ['G205', 'G138', 'G182', 'G183'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Mida la luminancia relativa de cada letra (a menos que sean todas uniformes) usando la fórmula: L = 0.2126 * R + 0.7152 * G + 0.0722 * B donde R , G y B se definen como: si R sRGB <= 0,04045 entonces R = R sRGB /12,92 si no R = ((R sRGB +0,055)/1,055) ^ 2,4,  si G sRGB <= 0,04045 entonces G = G sRGB /12,92 si no G = ((G sRGB +0,055)/1,055) ^ 2,4,  si B sRGB <= 0,04045 entonces B = B sRGB /12,92 si no B = ((B sRGB +0,055)/1,055) ^ 2,4 y R sRGB, G sRGB y B sRGB se definen como: R sRGB = R 8 bits /255, G sRGB = G 8 bits /255, B sRGB = B 8 bits /255. El carácter "^" es el operador de exponenciación.'
        },
        {
          order: 2,
          task: 'Mida la luminancia relativa de los píxeles de fondo inmediatamente al lado de la letra usando la misma fórmula.'
        },
        {
          order: 3,
          task: 'Compruebe que la relación de contraste sea igual o superior a 4,5:1'
        }
      ],

      results: 'La verificación #3 es verdadera.'
    }
  ]
}
