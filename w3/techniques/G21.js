export const data = {
  name: 'G21',

  type: 'general',

  relation: ['2.1.2'],

  applicability: 'Todas las tecnologías que soportan la operación interactiva.',

  resume:
    ' Esta técnica se utiliza para garantizar que los usuarios que usan teclado no queden atrapados en un subconjunto de contenido. Para prevenir esto, se pueden implementar mecanismos de teclado para avanzar el enfoque o mover el foco fuera del subconjunto del contenido, o usar una tecnología que permita ingresar al subcontenido con el teclado y salir del mismo.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Una vez que un usuario ingresa a un subprograma, el subprograma maneja más pestañas evitando que la persona salga. Sin embargo, el subprograma está diseñado para que devuelva el foco del teclado a la ventana principal cuando la persona termine de pasar por la secuencia de tabulación en el subprograma.'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Una página que incluye contenido que no es compatible con la accesibilidad contiene instrucciones sobre cómo volver a enfocar el contenido compatible con la accesibilidad a través del teclado. Las instrucciones preceden al contenido no compatible con la accesibilidad.'
    },
    {
      title: 'Ejemplo 3:',
      resume:
        'La información de ayuda disponible del contenido que no es compatible con la accesibilidad documenta cómo volver a enfocarse en el contenido compatible con la accesibilidad a través del teclado, y se puede acceder a la información de ayuda a través del teclado.'
    }
  ],

  relTech: ['G75'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Pase el contenido de principio a fin.'
        },
        {
          order: 2,
          task: 'Verifique que el foco del teclado no esté atrapado en ninguno de los contenidos.'
        },
        {
          order: 3,
          task: 'Si el foco del teclado parece estar atrapado en alguno de los contenidos, verifique que haya información de ayuda disponible que explique cómo salir del contenido y que se pueda acceder a través del teclado.'
        }
      ],

      results: 'Si el #2 es verdadero'
    }
  ]
}
