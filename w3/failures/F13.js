export const data = {
  name: 'F3',

  type: 'failure',

  relation: ['1.1.1', '1.4.1'],

  applicability: 'Todas las tecnologias',

  resume:
    'El objetivo de esta técnica es describir la falla que ocurre cuando una imagen usa diferencias de color para transmitir información, pero el texto alternativo para la imagen no transmite esa información. Esto puede causar problemas a las personas ciegas o daltónicas porque no podrán percibir la información transmitida por las diferencias de color.',

  note: 'Incrustar información en una imagen de fondo también puede causar problemas a las personas que usan fondos alternativos para aumentar la legibilidad y a los usuarios del modo de alto contraste en algunos sistemas operativos. Estos usuarios perderían la información en la imagen de fondo debido a la falta de cualquier texto alternativo',

  example: [
    {
      resume:
        'El texto alternativo para una imagen de un gráfico de barras de datos de ventas no proporciona información suficiente sobre las cifras de ventas anuales de cuatro empleados del Departamento de Ventas. La alternativa debería especificar qué personas no cumplieron con la cuota de ventas en lugar de depender del color para transmitir esa información.'
    }
  ],

  relTech: ['G94'],

  tests: [
    {
      procedure: [
        {
          title:
            'Para todas las imágenes del contenido que transmitan información a través de diferencias de color:',
          data: {
            order: 1,
            task: 'Verifique que la información transmitida por las diferencias de color no esté incluida en el texto alternativo de la imagen'
          }
        }
      ],

      results:
        'Si el paso n.° 1 es verdadero, entonces se aplica esta condición de falla y el contenido falla el Criterio de Conformidad'
    }
  ]
}
