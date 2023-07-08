export const data = {
  name: 'G82',

  type: 'general',

  relation: ['1.2.3', '1.2.8'],

  applicability: 'Se aplica a todas las tecnologías',

  resume:
    'Esta técnica se usa para proporcionar una alternativa accesible a la información presentada en medios sincronizados, creando un documento que cuente la misma historia de los medios. Esto incluye diálogos, acciones, fondos y enlaces o mecanismos que permitan a los usuarios interactuar con la información de la misma manera que con los medios.',

  example: [
    {
      title: 'Ejemplo1:',
      resume:
        'Se creó una película de capacitación para mostrar a los empleados cómo usar un nuevo equipo, con un guión como punto de partida. Se editó y corrigió para que coincida con el diálogo, y se subieron al sitio web de la empresa tanto la película como la alternativa basada en el tiempo para que los empleados puedan aprender a usar la máquina.'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Se crea un entorno de compras interactivo que permite a los usuarios orientarse por sí mismos en una tienda virtual y comprar. Una alternativa para los medios basados ​​en el tiempo permite a los usuarios acceder a las mismas compras en texto con enlaces para elegir pasillos y comprar cosas en lugar de arrastrarlas a una cesta de compras virtual.'
    }
  ],

  relTech: ['G8', 'G58', 'G78', 'G158', 'G159'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Vea la presentación multimedia sincronizada mientras se refiere a la alternativa para los medios basados ​​en el tiempo.'
        },
        {
          order: 2,
          task: 'Verifique que el diálogo en la alternativa para medios basados ​​en el tiempo coincida con el diálogo en la presentación de medios sincronizados.'
        },
        {
          order: 3,
          task: 'Verifique que la alternativa para los medios basados ​​en el tiempo tenga descripciones de sonidos.'
        },
        {
          order: 4,
          task: 'Verifique que la alternativa para los medios basados ​​en el tiempo tenga descripciones de la configuración y los cambios de configuración.'
        },
        {
          order: 5,
          task: 'Verifique que la alternativa para los medios basados ​​en el tiempo tenga descripciones de acciones y expresiones de cualquier "actor" (personas, animales, etc.).'
        },
        {
          order: 6,
          task: 'Si las versiones alternativas están en una página separada, verifique la disponibilidad de los enlaces para permitir que el usuario acceda a las otras versiones.'
        }
      ],

      results: '#2, 3, 4, 5 son verdaderas.'
    }
  ]
}
