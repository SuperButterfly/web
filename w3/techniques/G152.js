export const data = {
  name: 'G152',

  type: 'general',

  relation: ['1.2.9'],

  applicability: 'Cualquier tecnología que admita gif animados (GIF89a)',

  resume:
    'La técnica para evitar que las imágenes GIF animadas parpadeen en 5 segundos requiere ajustar la duración de la animación, que se calcula multiplicando el número de fotogramas por la velocidad de fotogramas y el número de repeticiones. Para lograr esto, ajuste el número de repeticiones a cinco segundos dividido por el producto de los otros dos factores. Si aún así sobrepasa los 5 segundos, reduzca el número de fotogramas o aumente la velocidad de fotogramas.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Una simple imagen parpadeante. Una imagen tiene 2 fotogramas, una velocidad de fotogramas de 0,5 segundos y 3 repeticiones. La animación tiene una duración de (2 * 0,5 * 3) segundos, o exactamente 3 segundos, y por lo tanto cumple con los requisitos del criterio de éxito.'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Muestre un gif animado y cronometre cuánto tiempo se anima.'
        },
        {
          order: 2,
          task: 'Como alternativa, utilice un editor de imágenes para determinar el número de fotogramas, la frecuencia de fotogramas y el número de repeticiones. Calcule el producto del número de fotogramas multiplicado por la velocidad de fotogramas por el número de repeticiones. Si las frecuencias de fotogramas no son uniformes, calcule el producto de la suma de las frecuencias de fotogramas multiplicada por el número de repeticiones.'
        },
        {
          order: 3,
          task: 'Usando cualquier método, la duración de la animación debe ser menor o igual a 5 segundos.'
        }
      ],

      results: 'El cheque #3 es verdadero'
    }
  ]
}
