export const data = {
  name: 'C6',

  type: 'css',

  relation: ['1.3.2', '1.4.5', '1.4.9', '2.4.1'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'El objetivo de esta técnica es demostrar cómo se puede mejorar la apariencia visual a través de hojas de estilo mientras se mantiene una presentación significativa cuando no se aplican hojas de estilo. Usando las propiedades de posicionamiento de CSS2, el contenido se puede mostrar en cualquier posición en la ventana gráfica del usuario. El uso de elementos estructurales garantiza que el significado del contenido aún se pueda determinar cuando el estilo no esté disponible.',

  example: [
    {
      title: 'Ejemplo 1: ',
      resume:
        'En este ejemplo, se han aplicado marcas estructurales (listas de definición) al contenido. CSS se ha utilizado para diseñar el contenido en forma de columnas. Cada clase posiciona absolutamente el contenido en columnas y los márgenes se han establecido en 0 para anular el comportamiento predeterminado de los agentes de usuario para mostrar listas de definiciones HTML con el elemento DD sangrado.',
      code: '<div class="box"><dl><dt class="menu1">Products</dt><dd class="item1">Telephones</dd><dd class="item2">Computers</dd><dd class="item3">Portable MP3 Players</dd><dt class="menu2">Locations</dt><dd class="item4">Idaho</dd><dd class="item5">Wisconsin</dd></dt></dl></div>  .item1{left:0;margin:0;position:absolute;top:7em;} .item2{left:0;margin:0;position:absolute;top:8em;} .item3{left:0;margin:0;position:absolute;top:9em;} .item4{left:14em;margin:0;position:absolute;top:7em;} .item5{left:14em;margin:0;position:absolute;top:8em;} .menu1{background-color:#FFFFFF;color:#FF0000;font-family:sans-serif;font-size:120%;left:0;margin:0;position:absolute;top:3em;} .menu2{background-color:#FFFFFF;color:#FF0000;font-family:sans-serif;font-size:120%;left:10em;margin:0;position:absolute;top:3em;}#box{left:5em;position:absolute;top:5em;}'
    }
  ],

  relTech: ['F1'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Elimine la información de estilo del documento o desactive el uso de hojas de estilo en la aplicación de usuario.'
        },
        {
          order: 2,
          task: 'Comprobar que se conservan las relaciones estructurales y el significado del contenido.'
        }
      ],

      results: 'Las comprobaciones n.º 2 es verdadera'
    }
  ]
}
