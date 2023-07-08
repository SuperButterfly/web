export const data = {
  name: 'G14',

  type: 'general',

  relation: ['1.4.1'],

  applicability: 'Todas las tecnologías que admiten color y texto.',

  resume:
    'El objetivo de esta técnica es garantizar que cuando se utilizan diferencias de color para transmitir información, como campos de formulario obligatorios, la información transmitida por las diferencias de color también se transmite explícitamente en el texto.',

  example: [
    {
      title: 'Ejemplo 1: un cronograma codificado por colores',
      resume:
        'Un estudio de televisión utiliza un servicio de subtítulos en tiempo real para crear subtítulos para sus noticias de la noche en línea.El programa de sesiones en una conferencia de tecnología está organizado en tres pistas. Las sesiones de la Pista 1 se muestran sobre un fondo azul. Las sesiones en la Pista 2 se muestran sobre un fondo amarillo. Las sesiones en la Pista 3 se muestran sobre un fondo verde. Después del nombre de cada sesión hay un código que identifica la pista en texto: T1 para la pista 1, T2 para la pista 2 y T3 para la pista 3.'
    },
    {
      title:
        'Ejemplo 2: un programa codificado por colores con iconosEjemplo 2:',
      resume:
        'El programa de sesiones en una conferencia de tecnología está organizado en tres pistas. Junto al título de cada sesión hay un icono que consiste en un círculo de color con un número en el medio que muestra a qué pista pertenece: los círculos azules con el número 1 representan la pista 1, los círculos amarillos con el número 2 representan la pista 2 y los verdes los círculos con el número 3 representan la Pista 3. Cada ícono está asociado con un texto alternativo que dice "Pista 1", "Pista 2" o "Pista 3", según corresponda.'
    },
    {
      title: 'Ejemplo 3: un formulario con campos obligatorios',
      resume:
        'Un formulario contiene varios campos obligatorios. Las etiquetas de los campos obligatorios se muestran en rojo. Además, al final de cada etiqueta hay un carácter de asterisco, *. Las instrucciones para completar el formulario indican que "todos los campos obligatorios se muestran en rojo y están marcados con un asterisco *", seguido de un ejemplo.'
    },
    {
      title: 'Ejemplo 4: un formulario con un botón de envío verde',
      resume:
        'Una solicitud de préstamo en línea explica que los botones verdes avanzan en el proceso y los botones rojos cancelan el proceso. Un formulario contiene un botón verde que contiene el texto Ir . Las instrucciones dicen "Presione el botón Ir para enviar sus resultados y continúe con el siguiente paso".'
    }
  ],

  relTech: ['G205', 'G138', 'G182', 'G183'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Verifique que la información transmitida también esté disponible en texto y que el texto no sea contenido condicional.'
        }
      ],

      results: 'La verificación #1 es verdadera.'
    }
  ]
}
