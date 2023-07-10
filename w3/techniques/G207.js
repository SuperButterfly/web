export const data = {
  name: 'G207',

  type: 'general',

  relation: ['1.4.11'],

  applicability: 'Todas las tecnologías que admiten iconos gráficos.',

  resume:
    'Esta técnica se centra en el uso de un contraste adecuado para los íconos gráficos para garantizar la accesibilidad para personas con problemas de visión. Los íconos deben tener una relación de contraste de al menos 3:1 con el fondo y los colores adyacentes.',

  example: [
    {
      title: 'Ejemplo 1: color de icono sólido contra el fondo',
      resume:
        'Un ícono sólido, como el símbolo de un teléfono, usa naranja sobre un fondo blanco. El color naranja ( #E3660E) se prueba contra el fondo blanco ( #FFFFFF) y tiene una relación de contraste de 3,4:1.'
    },
    {
      title: 'Ejemplo 2: color de icono sólido contra un fondo personalizado',
      resume:
        'Un icono sólido, como el símbolo de un teléfono, dentro de un fondo naranja. Los colores naranja y blanco son los mismos que en el ejemplo 1, en este caso el contraste con el fondo blanco no es relevante, el ícono blanco dentro del fondo naranja es lo que proporciona la información en el ícono y como resultado debe cumplir con el contraste requisito.'
    },
    {
      title: 'Ejemplo 3: icono sólido con un fondo degradado',
      resume:
        'Un icono sólido, como un símbolo de teléfono, con un icono azul oscuro sobre un fondo degradado de blanco a azul. La primera prueba del ícono debe ser contra el fondo más oscuro (menos contrastante) que se encuentra junto al color del ícono. Si eso es al menos 3:1, pasa el criterio de éxito.'
    },
    {
      title:
        'Ejemplo 4: icono sólido con fondo degradado superpuesto en contraste',
      resume:
        'Un ícono sólido sobre un fondo degradado puede superponerse en contraste si el gráfico aún es comprensible donde no tiene contraste con todo el fondo. Si encuentra la parte del degradado donde no se encuentra en una proporción de 3:1 con el gráfico y trata esa parte como si hubiera sido eliminada, ¿el ícono aún transmite el significado apropiado? Un método para visualizar esto es eliminar el área que no contrasta y comprobar que aún puede comprender el icono. Si es así, es suficiente. Las imágenes a continuación muestran un ícono sobre un fondo degradado y una segunda versión donde elimina el área del ícono que no cumple con la relación de contraste de 3:1. Todavía es reconocible como un ícono de teléfono, por lo que pasa el criterio de éxito.'
    }
  ],

  relTech: ['G18', 'G145'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Determine el color de primer plano del objeto gráfico..'
        },
        {
          order: 2,
          task: 'Determine el color de fondo adyacente. Si el color de fondo es un degradado o patrón, identifique el color con el menor contraste con el color de primer plano.'
        },
        {
          order: 3,
          task: 'Compruebe que la relación de contraste sea igual o superior a 3:1.'
        },
        {
          order: 4,
          task: 'Si parte del área de fondo no se encuentra 3:1 con el primer plano, suponga que las partes del icono adyacentes al área o áreas no son visibles.'
        },
        {
          order: 5,
          task: 'Verifique que el ícono aún sea reconocible sin ningún área de contraste insuficiente.'
        }
      ],

      results: 'Las comprobaciones #3 y #5 son verdaderas.'
    }
  ]
}
