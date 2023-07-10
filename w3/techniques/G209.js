export const data = {
  name: 'G209',

  type: 'general',

  relation: ['1.4.11'],

  applicability:
    'Para gráficos que utilizan varios colores adyacentes entre sí.',

  resume:
    'Esta técnica asegura que las personas con una visión moderadamente baja puedan distinguir los límites entre los segmentos de color contiguos. Se deben seleccionar colores para gráficos con múltiples colores con una relación de contraste de al menos 3:1. Si es menor, un borde de contraste de 3:1 debe añadirse con cada color.',

  example: [
    {
      title:
        'Ejemplo 1: gráfico circular con colores claros/oscuros alternativos',
      image:
        'https://www.w3.org/WAI/WCAG21/Techniques/general/img/pie-chart-contrast-segments.png'
    },
    {
      title: 'Ejemplo 2: gráfico circular con bordes entre segmentos ',
      image:
        'https://www.w3.org/WAI/WCAG21/Techniques/general/img/pie-chart-contrast-borders.png'
    },
    {
      title: 'Ejemplo 3: Mapa con límites fronterizos',
      image:
        'https://www.w3.org/WAI/WCAG21/Techniques/general/img/map-with-borders.png'
    },
    {
      title: 'Ejemplo 4: Mapa con límites fronterizos',
      image:
        'https://www.w3.org/WAI/WCAG21/Techniques/general/img/pie-chart-contrast-two-color-borders.png'
    }
  ],

  relTech: ['G207'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Mida la relación de contraste de cada color en comparación con los colores adyacentes o el borde (si está presente).'
        },
        {
          order: 2,
          task: 'Compruebe que la relación de contraste sea de al menos 3:1 para cada color o borde adyacente (si está presente).'
        }
      ],

      results: 'La verificación #2 es verdadera.'
    }
  ]
}
