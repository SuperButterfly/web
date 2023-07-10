export const data = {
  name: 'F20',

  type: 'failure',

  relation: ['1.1.1', '4.1.2'],

  applicability: 'Todas las tecnologias',

  resume:
    'Esta condición de falla aborda situaciones en las que la alternativa de texto no es actualizada al mismo tiempo que el contenido que no es de texto, haciendo que el texto ya no sea una alternativa válida para el contenido que no es de texto.',

  note: 'Incrustar información en una imagen de fondo también puede causar problemas a las personas que usan fondos alternativos para aumentar la legibilidad y a los usuarios del modo de alto contraste en algunos sistemas operativos. Estos usuarios perderían la información en la imagen de fondo debido a la falta de cualquier texto alternativo',

  example: [
    {
      title: 'Ejemplo de error 1',
      resume:
        'un gráfico de ventas se actualiza con los resultados de octubre, pero la alternativa de texto sigue describiendo los resultados de septiembre.'
    },
    {
      title: 'Ejemplo de error 2',
      resume:
        'las imágenes en una página de inicio cambian a diario, pero las alternativas de texto no se actualizan al mismo tiempo.'
    },
    {
      title: 'Ejemplo de error 3',
      resume:
        'el atributo de origen de las imágenes en una página se actualiza periódicamente mediante un script, pero las alternativas de texto no se actualizan al mismo tiempo'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Verifique cada alternativa de texto para ver si está describiendo contenido diferente al contenido que no es de texto que se muestra actualmente'
        }
      ],

      results:
        'Si el paso n.º 1 es verdadero, la alternativa de texto no está actualizada con el elemento actual, se aplica esta condición de falla y el contenido no cumple con estos Criterios de Conformidad.'
    }
  ]
}
