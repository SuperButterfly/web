export const data = {
  name: 'G96',

  type: 'general',

  relation: ['1.3.3'],

  applicability:
    'Todas las tecnologías que presentan una descripción de una representación de contenido para el usuario.',

  resume:
    'El objetivo de esta técnica es garantizar que los elementos dentro de una página web estén referenciados en el contenido no solo por su forma, tamaño, sonido o ubicación, sino también de formas que no dependan de esa percepción sensorial. Por ejemplo, una referencia también puede describir la función del artículo o su etiqueta.',

  example: [
    {
      title: 'Ejemplo 1: ',
      resume:
        'Se proporciona un botón redondo en un formulario para enviar el formulario y pasar al siguiente paso en una progresión. El botón está etiquetado con el texto "ir". Las instrucciones dicen: "para enviar el formulario, presione el botón redondo con la etiqueta ir ". Esto incluye tanto la forma como la información textual para ubicar el botón.'
    },
    {
      title: 'Ejemplo 2: ',
      resume:
        'Las instrucciones para una página web que proporciona capacitación en línea indican: "Use la lista de enlaces a la derecha con el encabezado \'Lista de clases\' para navegar al curso en línea deseado". Esta descripción proporciona la ubicación, así como pistas textuales para ayudar a encontrar la lista correcta de enlaces.'
    },
    {
      title: 'Ejemplo 3: ',
      resume:
        'El siguiente diseño coloca un botón en la esquina inferior derecha y lo indica por posición. Una indicación de la etiqueta de texto aclara qué botón usar para los usuarios que acceden a una versión lineal en la que la posición no es significativa.',
      code: '<tabla><tbody><tr><td colspan="2">Presione el botón inferior derecho [Vista previa].</td><td><span style="background: ButtonFace; color: ButtonText; border: ButtonShadow de inicio medio; ancho: 5em; bloqueo de pantalla; fuente-peso: negrita; alineación de texto: centro;">Imprimir</span></td></tr><tr><td><span style="background: ButtonFace; color: ButtonText; border: ButtonShadow de inicio medio; ancho: 5em; bloqueo de pantalla; fuente-peso: negrita; alineación de texto: centro;">Cancelar</span></td><td><span style="background: ButtonFace; color: ButtonText; border: ButtonShadow de inicio medio; ancho: 5em; bloqueo de pantalla; fuente-peso: negrita; alineación de texto: centro;">Aceptar</span></td><td><span style="background: ButtonFace; color: ButtonText; border: ButtonShadow de inicio medio; ancho: 5em; bloqueo de pantalla; fuente-peso: negrita; alineación de texto: centro;">Vista previa</span></td></tr></tbody></tabla>'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Verifique que la referencia contenga información adicional que permita ubicar e identificar el artículo sin conocer su forma, tamaño o posición relativa.'
        }
      ],

      results: 'La verificación #1 es verdadera.'
    }
  ]
}
