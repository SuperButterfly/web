export const data = {
  name: 'G17',

  type: 'general',

  relation: ['1.4.6'],

  applicability: 'Cualquier tecnología que produzca resultados visuales.',

  resume:
    'Esta técnica busca asegurar que el texto sea legible sobre un fondo, aplicando una relación de contraste de 7:1 entre letras y fondo, ya sea sombreando el fondo alrededor de las letras, cambiando la luminancia relativa de las letras a medida que cambia la luminancia relativa del fondo, o creando un halo alrededor del texto.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Se elige un fondo negro para que se puedan utilizar letras de colores claros que combinen con el logotipo de la empresa.'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'El texto se coloca sobre una imagen del campus universitario. Dado que en la imagen aparece una amplia variedad de colores y oscuridades, el área detrás del texto se ve borrosa de color blanco, por lo que la imagen es muy tenue y la oscuridad máxima sigue siendo lo suficientemente clara como para mantener una relación de contraste de 7:1 con el texto negro escrito sobre el imagen.'
    }
  ],

  relTech: ['G174', 'G148'],

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
