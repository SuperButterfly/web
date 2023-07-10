export const data = {
  name: 'G11',

  type: 'general',

  relation: ['2.2.2'],

  applicability: 'Tecnologías que admiten contenido parpadeante.',

  resume:
    ' El objetivo de esta técnica es minimizar la distracción causada por el contenido parpadeante y permitir que los usuarios vuelvan a concentrarse en el otro contenido de la página.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Se utiliza una imagen animada para resaltar los artículos en oferta. Dentro de una lista de artículos para comprar, se usa una imagen de una etiqueta roja seguida de la frase "En oferta" para indicar los artículos que se ofrecen a un precio reducido. La imagen de la etiqueta roja parpadea al cargar la página y se detiene en cinco segundos.'
    }
  ],

  relTech: ['G80'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Encuentra todos los elementos que parpadean.'
        },
        {
          order: 2,
          task: 'Para cada elemento que parpadea, determine si el intervalo entre el inicio y el final del parpadeo es inferior a cinco segundos.'
        }
      ],

      results: 'El cheque #2 es verdadero.'
    }
  ]
}
