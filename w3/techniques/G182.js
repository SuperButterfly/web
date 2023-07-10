export const data = {
  name: 'G182',

  type: 'general',

  relation: ['1.4.1'],

  applicability:
    'Texto en color cuando el color se utiliza para transmitir información como palabras que son enlaces en un párrafo y elementos de una lista donde algunos son diferentes a otros y se presentan en texto de color',

  resume:
    'Esta técnica proporciona una forma de indicar un estado especial en el texto mediante la adición de una señal visual redundante además del color. Estas señales visuales pueden ser cambios en el estilo de la fuente, como subrayados, negrita o cursiva, o cambios en el tamaño de la fuente. Esto proporciona una forma de permitir que los usuarios con poca visión o que no pueden ver las diferencias de color reconozcan estas palabras con un estado especial.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'El formato predeterminado para los enlaces en una página incluye presentarlos en un color diferente al resto del texto de la página y subrayarlos para que los enlaces sean identificables incluso sin visión de color.'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Un artículo que compara el uso de elementos similares en diferentes lenguajes de marcado utiliza texto en color para identificar los elementos de cada idioma. Los elementos del primer lenguaje de marcado se identifican con texto AZUL en negrita. Los elementos del segundo se presentan como ROJO, texto en cursiva.'
    },
    {
      title: 'Ejemplo 3:',
      resume:
        'Un sitio de noticias enumera enlaces a sus artículos con información adicional como la sección, la hora de publicación y ubicación relacionada. Los enlaces tienen un color diferente al de la información adicional pero no están subrayados y se presentan en una fuente más grande para que los usuarios con discapacidades visuales los identifiquen con facilidad.'
    },
    {
      title: 'Ejemplo 4:',
      resume:
        'Las noticias cortas a veces tienen oraciones que también son enlaces a más información. Esas oraciones están impresas en color y usan una fuente sans-serif mientras que el resto del párrafo está en Times-Roman negro.'
    }
  ],

  relTech: ['G14', 'G205', 'G183'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Localice todos los casos en los que se utiliza el color del texto para transmitir información.'
        },
        {
          order: 2,
          task: 'Verifique que cualquier texto en el que se use color para transmitir información también tenga estilo o use una fuente que lo diferencie visualmente del resto del texto que lo rodea.'
        }
      ],

      results: 'La verificación #2 es verdadera.'
    }
  ]
}
