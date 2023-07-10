// www.w3.org/WAI/WCAG21/quickref/?showtechniques=111%2C121%2C122%2C123%2C124#text-alternatives

export const data = {
  '1:': {
    title: 'Perceptible',
    resume: `La información y los componentes de la interfaz de usuario deben estar presentables 
        para los usuarios de manera que puedan percibirlos.`,
    1.1: {
      title: 'Alternativas de textp',
      resume: `Proporcione alternativas de texto para cualquier contenido que no sea de texto para que 
            se pueda cambiar a otras formas que las personas necesiten, como letra grande, braille, habla, 
            símbolos o un lenguaje más simple.`,
      about: [
        {
          text: `dado que cualquier contenido que no cumpla con este criterio de éxito puede interferir 
                con la capacidad de un usuario para usar la página completa, todo el contenido de la página 
                web (ya sea que se use o no para cumplir con otros criterios de éxito) debe cumplir con este 
                criterio de éxito. Consulte el Requisito de conformidad 5: No interferencia.`
        }
      ],
      '1.1.1': {
        title: 'Contenido sin texto',
        level: 'A',
        resume:
          'Todo el contenido que no es de texto que se presenta al usuario tiene una alternativa de texto que cumple un propósito equivalente, excepto en las situaciones que se enumeran a continuación',
        description: [
          {
            title: 'Control de entrada',
            resume:
              'si el contenido que no es de texto es un control o acepta la entrada del usuario, entonces tiene un nombre que describe su propósito'
          },
          {
            title: 'Medios basados en el tiempo',
            resume:
              'si el contenido que no es de texto es un medio basado en el tiempo, las alternativas de texto al menos proporcionan una identificación descriptiva del contenido que no es de texto.'
          },
          {
            title: 'Prueba',
            resume:
              'si el contenido que no es de texto es una prueba o ejercicio que no sería válido si se presentara en texto, entonces las alternativas de texto al menos proporcionan una identificación descriptiva del contenido que no es de texto'
          },
          {
            title: 'Sensorial',
            resume:
              'si el contenido que no es de texto tiene como objetivo principal crear una experiencia sensorial específica, las alternativas de texto al menos proporcionan una identificación descriptiva del contenido que no es de texto'
          },
          {
            title: 'CAPTCHA',
            resume:
              'Se ofrecen alternativas de texto para identificar y describir el propósito de contenido no textual, así como formas alternativas de CAPTCHA y modos de salida adaptados a diferentes discapacidades para confirmar que una persona está accediendo al contenido en lugar de una computadora.'
          },
          {
            title: 'Decoración, formato, invisible',
            resume:
              'si el contenido que no es de texto es pura decoración, se usa solo para formato visual o no se presenta a los usuarios, entonces se implementa de manera que la tecnología de asistencia pueda ignorarlo'
          }
        ],
        sufficient: [
          {
            situation:
              'si una breve descripción puede servir para el mismo propósito y presentar la misma información que el contenido no textual',
            technique: ['G94']
          },
          {
            situation:
              'si una breve descripción no puede cumplir el mismo propósito y presentar la misma información que el contenido que no es texto',
            technique: ['G95']
          },
          {
            situation:
              'si el contenido que no es de texto es un control o acepta la entrada del usuario',
            technique: ['G82']
          },
          {
            situation:
              'si el contenido que no es de texto es un medio basado en el tiempo (incluidos solo video en vivo y solo audio en vivo); una prueba o ejercicio que no sería válido si se presentara en texto; o destinado principalmente a crear una experiencia sensorial específica',
            technique: 'Proporcionar una etiqueta descriptiva'
          },
          {
            situation: 'si el contenido que no es de texto es un CAPTCHA',
            technique: ['G143']
          },
          {
            situation:
              'si la tecnología de asistencia debe ignorar el contenido que no es texto',
            technique: [
              'Implementar o marcar el contenido que no es de texto para que sea ignorado por la tecnología de asistencia'
            ]
          }
        ],
        advisory: ['H46', 'C18', 'SL19'],
        failures: [
          'F3',
          'F13',
          'F20',
          'F30',
          'F38',
          'F39',
          'F65',
          'F67',
          'F71',
          'F72'
        ]
      }
    },
    1.2: {
      title: 'Medios basados en el tiempo',
      resume: 'Proporcionar alternativas para los medios basados en el tiempo.',
      '1.2.1': {
        title: 'Solo audio y solo video (pregrabado)',
        level: 'A',
        resume:
          'Para medios pregrabados solo de audio y solo de video pregrabados, lo siguiente es cierto, excepto cuando el audio o el video es una alternativa de medios para el texto y está claramente etiquetado como tal:',
        description: [
          {
            title: 'Solo audio pregrabado',
            resume:
              'se proporciona una alternativa para los medios basados ​​en el tiempo que presenta información equivalente para el contenido solo de audio pregrabado.'
          },
          {
            title: 'Solo video pregrabado',
            resume:
              'se proporciona una alternativa para medios basados ​​en el tiempo o una pista de audio que presenta información equivalente para contenido solo de video pregrabado.'
          }
        ],
        sufficient: [
          {
            situation: 'si el contenido es solo de audio pregrabado:',
            technique: ['G158', 'SL17']
          },
          {
            situation: ' si el contenido es solo video pregrabado:',
            technique: ['G159', 'G166', 'SL17']
          }
        ],
        advisory: ['H96'],
        failures: ['F30', 'F67']
      },
      '1.2.2': {
        title: 'Subtítulos (pregrabados)',
        level: 'A',
        resume:
          'Se proporcionan subtítulos para todo el contenido de audio pregrabado en medios sincronizados, excepto cuando el medio es una alternativa de medios para el texto y está claramente etiquetado como tal.',
        sufficient: [
          {
            technique: ['G93', 'G87', 'H95', 'SM11']
          }
        ],
        advisory: ['none'],
        failures: ['F8', 'F75', 'F74']
      },
      '1.2.3': {
        title: 'Descripción de audio o alternativa de medios (pregrabada)',
        level: 'A',
        resume:
          'Se proporciona una alternativa para los medios basados ​​en el tiempo o la descripción de audio del contenido de video pregrabado para los medios sincronizados, excepto cuando los medios son una alternativa de medios para el texto y están claramente etiquetados como tales.',
        sufficient: [
          {
            technique: [
              'G69',
              'G58',
              'SL17',
              'H53',
              'G78',
              'G173',
              'G8',
              'G203'
            ]
          }
        ],
        advisory: ['H96'],
        failures: ['none']
      },
      '1.2.4': {
        title: 'Subtítulos (en vivo)',
        level: 'A',
        resume:
          'Se proporcionan subtítulos para todo el contenido de audio en vivo en medios sincronizados.',
        sufficient: [
          {
            technique: ['G9', 'G93', 'G87']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      },
      '1.2.5': {
        title: 'Descripción de audio (pregrabado)',
        level: 'AA',
        resume:
          'Se proporciona descripción de audio para todo el contenido de video pregrabado en medios sincronizados.',
        sufficient: [
          {
            technique: ['G78', 'G173', 'G8', 'G203']
          }
        ],
        advisory: ['H96'],
        failures: ['none']
      },
      '1.2.6': {
        title: 'Lenguaje de señas (pregrabado)',
        level: 'AAA',
        resume:
          'Se proporciona interpretación en lenguaje de señas para todo el contenido de audio pregrabado en medios sincronizados.',
        sufficient: [
          {
            technique: ['G54', 'G81', 'SM13', 'SM14']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      },
      '1.2.7': {
        title: 'Descripción de audio extendida (pregrabada)',
        level: 'AAA',
        resume:
          'Cuando las pausas en el audio de primer plano son insuficientes para permitir que las descripciones de audio transmitan el sentido del video, se proporciona una descripción de audio extendida para todo el contenido de video pregrabado en medios sincronizados.',
        sufficient: [
          {
            technique: ['G8']
          }
        ],
        advisory: ['H96'],
        failures: ['none']
      },
      '1.2.8': {
        title: 'Medios alternativos (pregrabados)',
        level: 'AAA',
        resume:
          'Se proporciona una alternativa para los medios basados ​​en el tiempo para todos los medios sincronizados pregrabados y para todos los medios solo de video pregrabados.',
        sufficient: [
          {
            situation: 'si el contenido es un medio sincronizado pregrabado',
            technique: ['G69', 'G58', 'SL17', 'H53']
          },
          {
            situation: 'si el contenido es solo video pregrabado:',
            technique: ['G159']
          }
        ],
        advisory: ['H46'],
        failures: ['F74']
      },
      '1.2.9': {
        title: 'Solo audio (en vivo)',
        level: 'AAA',
        resume:
          'Se proporciona una alternativa para los medios basados ​​en el tiempo que presenta información equivalente al contenido de solo audio en vivo.',
        sufficient: [
          {
            technique: ['G151', 'G150', 'G157']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      }
    },
    1.3: {
      title: 'Adaptable',
      resume:
        'Cree contenido que se pueda presentar de diferentes maneras (por ejemplo, un diseño más simple) sin perder información o estructura.',
      '1.3.1': {
        title: 'Información y Relaciones',
        level: 'A',
        resume:
          'La información, la estructura y las relaciones transmitidas a través de la presentación se pueden determinar mediante programación o están disponibles en el texto.',
        sufficient: [
          {
            situation:
              'La tecnología proporciona una estructura semántica para hacer que la información y las relaciones transmitidas a través de la presentación sean determinables programáticamente',
            technique: [
              'ARIA11',
              'ARIA12',
              'ARIA13',
              'ARIA16',
              'ARIA17',
              'ARIA20',
              'G115',
              'H49',
              'G117',
              'G140',
              'ARIA24',
              'G138',
              'H51',
              'PDF6',
              'PDF20',
              'H39',
              'H73',
              'FLASH31',
              'H63',
              'H43',
              'FLASH21',
              'H44',
              'H65',
              'PDF10',
              'PDF12',
              'FLASH32',
              'FLASH29',
              'FLASH25',
              'H71',
              'SL20',
              'SL26',
              'H85',
              'H48',
              'H42',
              'PDF9',
              'SCR21',
              'PDF11',
              'PDF17',
              'PDF21',
              'H97'
            ]
          },
          {
            situation:
              ' La tecnología en uso NO proporciona la estructura semántica para hacer que la información y las relaciones transmitidas a través de la presentación sean determinables programáticamente:',
            technique: ['G117', 'FLASH8', 'T1', 'T2', 'T3']
          }
        ],
        advisory: ['C22', 'G162', 'ARIA1', 'ARIA2', 'G141'],
        failures: [
          'F1',
          'F2',
          'F33',
          'F34',
          'F42',
          'F43',
          'F46',
          'F48',
          'F87',
          'F90',
          'F91',
          'F92'
        ]
      },
      '1.3.2': {
        title: 'Secuencia significativa',
        level: 'A',
        resume:
          'Cuando la secuencia en la que se presenta el contenido afecta su significado, se puede determinar mediante programación una secuencia de lectura correcta.',
        sufficient: [
          {
            technique: ['G57', 'C27', 'PDF3', 'SL34']
          }
        ],
        advisory: ['none'],
        failures: ['F1', 'F34', 'F33', 'F32', 'F49']
      },
      '1.3.3': {
        title: 'Características sensoriales',
        level: 'A',
        resume:
          'Las instrucciones proporcionadas para comprender y operar el contenido no se basan únicamente en las características sensoriales de los componentes, como la forma, el color, el tamaño, la ubicación visual, la orientación o el sonido.',
        sufficient: [
          {
            technique: ['G96']
          }
        ],
        advisory: ['none'],
        failures: ['F14', 'F26']
      },
      '1.3.4': {
        title: 'Orientacion',
        level: 'AA',
        resume:
          'El contenido no restringe su visualización y funcionamiento a una única orientación de visualización, como vertical u horizontal, a menos que sea esencial una orientación de visualización específica.',
        sufficient: [
          {
            technique: [
              'Usando CSS para establecer la orientación para permitir tanto el paisaje como el retrato.',
              'Uso de controles de mostrar/ocultar para permitir el acceso al contenido en diferentes orientaciones.'
            ]
          }
        ],
        advisory: ['none'],
        failures: ['F97']
      },
      '1.3.5': {
        title: 'Identificar el propósito de entrada',
        level: 'AA',
        resume:
          'El propósito de cada campo de entrada que recopila información sobre el usuario se puede determinar mediante programación cuando:',
        description: [
          {
            resume:
              'El campo de entrada tiene un propósito identificado en la sección Propósitos de entrada para los componentes de la interfaz de usuario;'
          },
          {
            title: 'Solo video pregrabado',
            resume:
              'El contenido se implementa utilizando tecnologías con soporte para identificar el significado esperado para los datos de entrada del formulario.'
          }
        ],
        sufficient: ['none'],
        advisory: ['none'],
        failures: ['none']
      },
      '1.3.6': {
        title: 'Identificar Propósito',
        level: 'AAA',
        resume:
          'En el contenido implementado mediante lenguajes de marcado, el propósito de los componentes, iconos y regiones de la interfaz de usuario se puede determinar mediante programación.',
        sufficient: [
          {
            technique: [
              'ARIA11',
              'Uso de microdatos para marcar los componentes de la interfaz de usuario (futuro enlace)'
            ]
          }
        ],
        advisory: [
          'Permita que los agentes de usuario encuentren la versión del contenido que mejor se adapte a sus necesidades.',
          'Uso de la semántica para identificar características importantes (coga-simplification="simplest").',
          'Uso de aria-inválido y aria-requerido.'
        ],
        failures: ['none']
      }
    },
    1.4: {
      title: 'Distinguible',
      resume:
        'Facilite a los usuarios ver y escuchar contenido, incluida la separación del primer plano del fondo.',
      '1.4.1': {
        title: 'Uso del color',
        level: 'A',
        resume:
          'El color no se utiliza como el único medio visual para transmitir información, indicar una acción, provocar una respuesta o distinguir un elemento visual.',
        note: ' Este criterio de éxito aborda específicamente la percepción del color. Otras formas de percepción están cubiertas en la Pauta 1.3, incluido el acceso programático al color y otra codificación de presentación visual.',
        sufficient: [
          {
            situation:
              ' si el color de determinadas palabras, fondos u otro contenido se utiliza para indicar información:',
            technique: ['G14', 'G205', 'G182', 'G183']
          },
          {
            situation:
              ' Si el color se usa dentro de una imagen para transmitir información:',
            technique: ['G111', 'G14']
          }
        ],
        advisory: ['C15'],
        failures: ['F13', 'F73', 'F81']
      },
      '1.4.2': {
        title: 'control de sonido',
        level: 'A',
        resume:
          'Si cualquier audio en una página web se reproduce automáticamente durante más de 3 segundos, hay un mecanismo disponible para pausar o detener el audio, o hay un mecanismo disponible para controlar el volumen de audio independientemente del nivel de volumen general del sistema.',
        note: 'dado que cualquier contenido que no cumpla con este criterio de éxito puede interferir con la capacidad de un usuario para usar la página completa, todo el contenido de la página web (ya sea que se use o no para cumplir con otros criterios de éxito) debe cumplir con este criterio de éxito. Consulte el Requisito de conformidad 5: No interferencia.',
        sufficient: [
          {
            technique: ['G60', 'G170', 'G171', 'SL24']
          }
        ],
        advisory: ['none'],
        failures: ['F23', 'F93']
      },
      '1.4.3': {
        title: 'Contraste (mínimo)',
        level: 'AA',
        resume:
          'La presentación visual de texto e imágenes de texto tiene una relación de contraste de al menos 4,5:1, excepto por lo siguiente',
        description: [
          {
            title: 'Texto grande',
            resume:
              'el texto a gran escala y las imágenes de texto a gran escala tienen una relación de contraste de al menos 3:1'
          },
          {
            title: 'Incidental',
            resume:
              'Texto o imágenes de texto que son parte de un componente de interfaz de usuario inactivo, que son pura decoración, que no son visibles para nadie, o que son parte de una imagen que contiene otro contenido visual significativo, no tienen requisitos de contraste.'
          },
          {
            title: 'Logotipos',
            resume:
              'El texto que forma parte de un logotipo o marca no tiene requisitos de contraste.'
          }
        ],
        sufficient: [
          {
            situation:
              'el texto tiene menos de 18 puntos si no está en negrita y menos de 14 puntos si está en negrita',
            technique: ['G18', 'G148', 'G174', 'SL13']
          },
          {
            situation:
              'el texto tiene al menos 18 puntos si no está en negrita y al menos 14 puntos si está en negrita',
            technique: ['G148', 'G174', 'SL13']
          }
        ],
        advisory: ['G156'],
        failures: ['F83', 'F24']
      },
      '1.4.4': {
        title: 'Cambiar el tamaño del texto',
        level: 'AA',
        resume:
          'A excepción de los subtítulos y las imágenes de texto, el texto se puede cambiar de tamaño sin tecnología de asistencia hasta en un 200 por ciento sin pérdida de contenido o funcionalidad.',
        sufficient: [
          {
            technique: ['G142', 'SL22', 'SL23', 'G178', 'G179']
          }
        ],
        advisory: ['C17', 'C20'],
        failures: ['F69', 'F80', 'F94']
      },
      '1.4.5': {
        title: 'Imágenes de texto',
        level: 'AA',
        resume:
          'Si las tecnologías que se utilizan pueden lograr la presentación visual, se utiliza texto para transmitir información en lugar de imágenes de texto, excepto por lo siguiente:',
        description: [
          {
            title: 'Personalizable',
            resume:
              'la imagen del texto se puede personalizar visualmente según los requisitos del usuario;'
          },
          {
            title: 'Esencial',
            resume:
              'una presentación particular del texto es esencial para la información que se transmite.'
          }
        ],
        sufficient: [
          {
            technique: ['C22', 'C30', 'G140', 'PDF47']
          }
        ],
        advisory: ['C12', 'C13', 'C14', 'C8', 'C6'],
        failures: ['none']
      },
      '1.4.6': {
        title: 'Contraste (mejorado)',
        level: 'AAA',
        resume:
          'La presentación visual de texto e imágenes de texto tiene una relación de contraste de al menos 7:1, excepto por lo siguiente:',
        description: [
          {
            title: 'Texto grande',
            resume:
              'el texto a gran escala y las imágenes de texto a gran escala tienen una relación de contraste de al menos 4,5:1;'
          },
          {
            title: 'Incidental',
            resume:
              ' Texto o imágenes de texto que son parte de un componente de interfaz de usuario inactivo, que son pura decoración, que no son visibles para nadie, o que son parte de una imagen que contiene otro contenido visual significativo, no tienen requisitos de contraste.'
          },
          {
            title: 'Logotipos',
            resume:
              'El texto que forma parte de un logotipo o marca no tiene requisitos de contraste.'
          }
        ],
        sufficient: [
          {
            situation:
              'el texto tiene menos de 18 puntos si no está en negrita y menos de 14 puntos si está en negrita',
            technique: ['G17', 'G148', 'G174', 'SL13']
          },
          {
            situation:
              ' el texto tiene al menos 18 puntos si no está en negrita y al menos 14 puntos si está en negrita',
            technique: ['G18', 'G148', 'G174', 'SL13']
          }
        ],
        advisory: [
          'Permita que los agentes de usuario encuentren la versión del contenido que mejor se adapte a sus necesidades.',
          'Uso de la semántica para identificar características importantes (coga-simplification="simplest").',
          'Uso de aria-inválido y aria-requerido.'
        ],
        failures: ['none']
      },
      '1.4.7': {
        title: 'Audio de fondo bajo o nulo',
        level: 'AAA',
        resume:
          'Para contenido pregrabado de solo audio que (1) contiene principalmente voz en primer plano, (2) no es un CAPTCHA de audio ni un logotipo de audio, y (3) no es una vocalización destinada a ser principalmente una expresión musical, como cantar o rapear, al menos uno de los siguientes es verdadero:',
        description: [
          {
            title: 'Sin fondo',
            resume: 'el audio no contiene sonidos de fondo'
          },
          {
            title: 'Apagar',
            resume: ' los sonidos de fondo se pueden apagar.'
          },
          {
            title: '20 dB',
            resume:
              'los sonidos de fondo son al menos 20 decibelios más bajos que el contenido del habla de primer plano, con la excepción de sonidos ocasionales que duran solo uno o dos segundos. Según la definición de "decibelio", el sonido de fondo que cumple con este requisito será aproximadamente cuatro veces más bajo que el contenido de voz de primer plano.'
          }
        ],
        sufficient: [
          {
            technique: ['G56']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      },
      '1.4.8': {
        title: 'Presentación visual',
        level: 'AAA',
        resume:
          'Para la presentación visual de bloques de texto, hay un mecanismo disponible para lograr lo siguiente:',
        description: [
          {
            resume:
              'El usuario puede seleccionar los colores de primer plano y de fondo.'
          },
          {
            resume:
              'El ancho no supera los 80 caracteres o glifos (40 si es CJK).'
          },
          {
            resume:
              'El texto no está justificado (alineado a los márgenes izquierdo y derecho).'
          },
          {
            resume:
              'El interlineado (interlineado) es al menos de espacio y medio dentro de los párrafos, y el interlineado es al menos 1,5 veces mayor que el interlineado.'
          },
          {
            resume:
              'El texto se puede cambiar de tamaño sin tecnología de asistencia hasta en un 200 por ciento de una manera que no requiere que el usuario se desplace horizontalmente para leer una línea de texto en una ventana de pantalla completa.'
          }
        ],
        sufficient: [
          {
            situation:
              'Primer requisito: el texto tiene menos de 18 puntos si no está en negrita y menos de 14 puntos si está en negrita',
            technique: ['G17', 'G148', 'G174']
          },
          {
            situation:
              'Segundo requisito: técnicas para garantizar que el ancho no supere los 80 caracteres o glifos (40 si es CJK)',
            technique: ['G204', 'C20']
          },
          {
            situation:
              'Tercer Requisito: técnicas para garantizar que el texto no esté justificado (alineado a los márgenes izquierdo y derecho)',
            technique: ['G172', 'C19', 'G169']
          },
          {
            situation:
              'Cuarto requisito: técnicas para garantizar que el espacio entre líneas (interlineado) sea al menos de espacio y medio dentro de los párrafos, y que el espacio entre párrafos sea al menos 1,5 veces mayor que el espacio entre líneas',
            technique: ['G188', 'C21']
          },
          {
            situation:
              'Quinto requisito: técnicas para garantizar que el texto se pueda cambiar de tamaño sin tecnología de asistencia hasta en un 200 por ciento de una manera que no requiera que el usuario se desplace horizontalmente para leer una línea de texto en una ventana de pantalla completa',
            technique: ['G188', 'C21']
          }
        ],
        advisory: ['none'],
        failures: ['F24', 'F88']
      },
      '1.4.9': {
        title: 'Imágenes de texto (sin excepción)',
        level: 'AAA',
        resume:
          'Las imágenes de texto solo se utilizan para decoración pura o cuando una presentación particular del texto es esencial para la información que se transmite.',
        note: 'Los logotipos (texto que forma parte de un logotipo o marca) se consideran esenciales.',
        sufficient: [
          {
            technique: ['C22', 'C30', 'G140']
          }
        ],
        advisory: ['C12', 'C13', 'C14', 'C8', 'C6'],
        failures: ['none']
      },
      '1.4.10': {
        title: 'reflujo',
        level: 'AA',
        resume:
          'El contenido se puede presentar sin pérdida de información o funcionalidad, y sin necesidad de desplazarse en dos dimensiones para:',
        description: [
          {
            resume:
              'Contenido de desplazamiento vertical con un ancho equivalente a 320 píxeles CSS;'
          },
          {
            resume:
              'Contenido de desplazamiento horizontal a una altura equivalente a 256 píxeles CSS;'
          }
        ],
        sufficient: [
          {
            technique: ['C32', 'C31', 'C33', 'C38', 'G206']
          }
        ],
        advisory: [
          'C34',
          'C37',
          'CSS, redistribución de tablas de datos simples.',
          'CSS, ajuste de celdas de datos dentro del ancho de la ventana gráfica.'
        ],
        failures: [
          '(HTML) Uso de texto con formato previo o exclusión de texto con formato previo como excepción a la ausencia de desplazamiento bidimensional.',
          'Uso de contenedores de tamaño fijo y contenido de posición fija (CSS)'
        ]
      },
      '1.4.11': {
        title: 'Contraste sin texto',
        level: 'AA',
        resume:
          'La presentación visual de lo siguiente tiene una relación de contraste de al menos 3:1 frente a los colores adyacentes:',
        description: [
          {
            title: 'Componentes de la interfaz de usuario',
            resume:
              'información visual necesaria para identificar los componentes y estados de la interfaz de usuario, excepto los componentes inactivos o cuando la apariencia del componente la determine el agente de usuario y no la modifique el autor;'
          },
          {
            title: 'Objetos gráficos',
            resume:
              'partes de gráficos necesarios para comprender el contenido, excepto cuando una presentación particular de gráficos es esencial para la información que se transmite.'
          }
        ],
        sufficient: [
          {
            situation: 'Contraste del componente de la interfaz de usuario',
            technique: ['G195']
          },
          {
            situation: 'Gráficos con suficiente contraste',
            technique: ['G207', 'G209']
          },
          {
            situation: 'Texto en o sobre gráficos',
            technique: [
              'Incluir etiquetas y valores con el gráfico (TBD)',
              'G18',
              'G145',
              'G174'
            ]
          }
        ],
        advisory: ['G183'],
        failures: ['F78']
      },
      '1.4.12': {
        title: 'Espaciado de texto',
        level: 'AA',
        resume:
          'En el contenido implementado mediante lenguajes de marcado que admiten las siguientes propiedades de estilo de texto, no se produce pérdida de contenido o funcionalidad al configurar todo lo siguiente y no cambiar ninguna otra propiedad de estilo:',
        description: [
          {
            resume:
              'Contenido de desplazamiento vertical con un ancho equivalente a 320 píxeles CSS;'
          },
          {
            resume:
              'Contenido de desplazamiento horizontal a una altura equivalente a 256 píxeles CSS;'
          }
        ],
        sufficient: [
          {
            technique: ['C36', 'C35']
          }
        ],
        advisory: ['C8', 'C21', 'C28'],
        failures: [
          'Fallo del Criterio de Conformidad 1.4.12 debido a que no se permite la anulación del espaciado. (Técnica futura)'
        ]
      },
      '1.4.13': {
        title: 'Contenido en Hover o Focus',
        level: 'AA',
        resume:
          'Donde recibir y luego quitar el puntero o el foco del teclado desencadena contenido adicional para que se vuelva visible y luego se oculte, lo siguiente es cierto:',
        description: [
          {
            title: 'Descartable',
            resume:
              'hay un mecanismo disponible para descartar el contenido adicional sin mover el puntero o el foco del teclado, a menos que el contenido adicional comunique un error de entrada o no oculte o reemplace otro contenido;'
          },
          {
            title: 'Hoverable',
            resume:
              'si el puntero puede activar el contenido adicional, entonces el puntero se puede mover sobre el contenido adicional sin que desaparezca el contenido adicional;'
          },
          {
            title: 'Persistente',
            resume:
              'el contenido adicional permanece visible hasta que se elimina el disparador de desplazamiento o enfoque, el usuario lo descarta o su información ya no es válida.'
          }
        ],
        sufficient: [
          {
            technique: [
              'ARIA: Uso de rol="información sobre herramientas"',
              'CSS: uso de pseudoclases de enfoque y desplazamiento'
            ]
          }
        ],
        advisory: ['none'],
        failures: [
          'Fallo en la reunión por contenido al pasar el mouse o el foco no permanece visible hasta que se descarta o no es válido',
          'F95',
          ' No se puede descartar el contenido sin mover el puntero o el enfoque del teclado'
        ]
      }
    }
  },
  2: {
    title: 'Operable',
    resume:
      'Los componentes de la interfaz de usuario y la navegación deben estar operativos.',
    2.1: {
      title: 'Teclado accesible',
      resume:
        'Haga que toda la funcionalidad esté disponible desde un teclado.',
      '2.1.1': {
        title: 'Teclado',
        level: 'A',
        resume:
          'Toda la funcionalidad del contenido se puede operar a través de una interfaz de teclado sin requerir tiempos específicos para pulsaciones de teclas individuales, excepto cuando la función subyacente requiere una entrada que depende de la ruta de movimiento del usuario y no solo de los puntos finales.',
        note: [
          'Nota 1: esta excepción se relaciona con la función subyacente, no con la técnica de entrada. Por ejemplo, si usa escritura a mano para ingresar texto, la técnica de entrada (escritura a mano) requiere una entrada dependiente de la ruta, pero la función subyacente (ingreso de texto) no.',
          'Nota 2: Esto no prohíbe y no debe desalentar la entrada del mouse u otros métodos de entrada además de la operación del teclado.'
        ],
        suficient: [
          {
            technique: [
              'H91',
              'PDF3',
              'PDF11',
              'PDF23',
              'SL15',
              'G90',
              'SCR20',
              'SCR35',
              'SCR2',
              'SL9',
              'SL14'
            ]
          }
        ],
        advisory: ['SCR29'],
        failures: ['F54', 'F55', 'F42']
      },
      '2.1.2': {
        title: 'Sin trampa de teclado',
        level: 'A',
        resume:
          'Si el foco del teclado se puede mover a un componente de la página usando una interfaz de teclado, entonces el foco se puede alejar de ese componente usando solo una interfaz de teclado y, si requiere más que teclas de flecha o de tabulación sin modificar u otros métodos de salida estándar, se informa al usuario del método para alejar el foco.',
        note: [
          'Nota 1: dado que cualquier contenido que no cumpla con este criterio de éxito puede interferir con la capacidad de un usuario para usar la página completa, todo el contenido de la página web (ya sea que se use para cumplir con otros criterios de éxito o no) debe cumplir con este criterio de éxito. Consulte el Requisito de conformidad 5: No interferencia.'
        ],
        suficient: [
          {
            technique: ['G21']
          }
        ],
        advisory: ['none'],
        failures: ['F10']
      },
      '2.1.3': {
        title: 'Teclado (sin excepción)',
        level: 'AAA',
        resume:
          'Toda la funcionalidad del contenido se puede operar a través de una interfaz de teclado sin requerir tiempos específicos para pulsaciones de teclas individuales.'
      },
      '2.1.4': {
        title: 'Atajos de teclas de caracteres',
        level: 'A',
        resume:
          'Si se implementa un atajo de teclado en el contenido usando solo letras (incluidas letras mayúsculas y minúsculas), signos de puntuación, números o símbolos, entonces al menos uno de los siguientes es verdadero:',
        description: [
          {
            title: 'Desactivar',
            resume: 'Hay un mecanismo disponible para desactivar el atajo;'
          },
          {
            title: 'Reasignación',
            resume:
              'hay un mecanismo disponible para reasignar el atajo para incluir una o más teclas de teclado no imprimibles (p. ej., Ctrl, Alt);'
          },
          {
            title: 'Activo solo en el foco',
            resume:
              'el método abreviado de teclado para un componente de la interfaz de usuario solo está activo cuando ese componente tiene el foco'
          }
        ],
        suficient: [
          {
            technique: [
              'Los usuarios tienen una forma de desactivar los atajos de una sola tecla.',
              'Se proporciona un mecanismo que permite a los usuarios cambiar los atajos de teclas de caracteres. El mecanismo de reasignación incluye caracteres no imprimibles. Los accesos directos alternativos podrían ser cadenas más largas de hasta 25 caracteres que servirían directamente como comandos de voz nativos para cualquier motor de voz.'
            ]
          }
        ],
        advisory: ['none'],
        failures: [
          'Incumplimiento de los Criterios de Conformidad 2.1.4 debido a una página web o aplicación web que incluye accesos directos de una sola tecla que no incluye un control que permite a los usuarios desactivar los accesos directos o un control que permite a los usuarios cambiar los accesos directos a combinaciones de teclas que incluyen teclas que son no letras mayúsculas o minúsculas, signos de puntuación, números o símbolos.'
        ]
      }
    },
    2.2: {
      title: 'Tiempo suficiente',
      resume:
        'Proporcione a los usuarios suficiente tiempo para leer y usar el contenido.',
      '2.2.1': {
        title: 'Tiempo ajustable',
        level: 'A',
        resume:
          'Para cada límite de tiempo establecido por el contenido, al menos uno de los siguientes es verdadero:',
        description: [
          {
            title: 'Apagar',
            resume:
              'el usuario puede apagar el límite de tiempo antes de encontrarlo; '
          },
          {
            title: 'Ajustar',
            resume:
              'el usuario puede ajustar el límite de tiempo antes de encontrarlo en un amplio rango que es al menos diez veces la duración de la configuración predeterminada;'
          },
          {
            title: 'Extender',
            resume:
              'se advierte al usuario antes de que expire el tiempo y se le otorgan al menos 20 segundos para extender el límite de tiempo con una simple acción (por ejemplo, "presionar la barra espaciadora"), y el usuario puede extender el límite de tiempo al menos diez veces.;'
          },
          {
            title: 'Excepción en tiempo real',
            resume:
              'el límite de tiempo es una parte requerida de un evento en tiempo real (por ejemplo, una subasta), y no es posible ninguna alternativa al límite de tiempo; '
          },
          {
            title: 'Excepción Esencial:',
            resume:
              'El límite de tiempo es esencial y prorrogarlo invalidaría la actividad;'
          },
          {
            title: 'Excepción de 20 horas',
            resume: 'el límite de tiempo es superior a 20 horas.'
          }
        ],
        sufficient: [
          {
            situation: 'Si hay límites de tiempo de sesión:',
            technique: ['G198', 'G13']
          },
          {
            situation:
              'si un límite de tiempo está controlado por un script en la página:',
            technique: ['G198', 'G180', 'SL21']
          },
          {
            situation: 'Si hay límites de tiempo en la lectura:',
            technique: ['G4', 'G198']
          }
        ],
        advisory: ['none'],
        failures: ['F40', 'F41', 'F58']
      },
      '2.2.2': {
        title: 'Pausa, Detener, Ocultar',
        level: 'A',
        resume:
          'Para información en movimiento, parpadeo, desplazamiento o actualización automática, todo lo siguiente es verdadero:',
        description: [
          {
            title: 'Movimiento, parpadeo, desplazamiento',
            resume:
              'para cualquier información en movimiento, parpadeo o desplazamiento que (1) comience automáticamente, (2) dure más de cinco segundos y (3) se presente en paralelo con otro contenido, existe un mecanismo para que el usuario pausarlo, detenerlo u ocultarlo a menos que el movimiento, parpadeo o desplazamiento sea parte de una actividad en la que sea esencial; '
          },
          {
            title: 'Actualización automática',
            resume:
              'para cualquier información de actualización automática que (1) se inicie automáticamente y (2) se presente en paralelo con otro contenido, existe un mecanismo para que el usuario la pause, la detenga, la oculte o controle la frecuencia de la actualizar a menos que la actualización automática sea parte de una actividad donde sea esencial.'
          }
        ],
        notes: [
          'Nota 1: Para conocer los requisitos relacionados con el contenido parpadeante o parpadeante, consulte la Pauta 2.3.',
          'Nota 2: Dado que cualquier contenido que no cumpla con este criterio de éxito puede interferir con la capacidad de un usuario para usar la página completa, todo el contenido de la página web (ya sea que se use para cumplir con otros criterios de éxito o no) debe cumplir con este criterio de éxito. Consulte el Requisito de conformidad 5: No interferencia.',
          'Nota 3: el contenido que se actualiza periódicamente por software o que se transmite al agente de usuario no está obligado a conservar o presentar la información que se genera o recibe entre el inicio de la pausa y la reanudación de la presentación, ya que esto puede no ser técnicamente posible, y en muchas situaciones podría ser engañoso hacerlo.',
          'Nota 4: Una animación que ocurre como parte de una fase de precarga o una situación similar puede considerarse esencial si la interacción no puede ocurrir durante esa fase para todos los usuarios y si no indica el progreso podría confundir a los usuarios o hacerles pensar que el contenido se congeló o se rompió.'
        ],
        sufficient: [
          {
            technique: [
              'G4',
              'SL11',
              'SL12',
              'G11',
              'G187',
              'G152',
              'G186',
              'G191'
            ]
          }
        ],
        advisory: ['none'],
        failures: ['F16', 'F47', 'F7', 'F50', 'F7']
      },
      '2.2.3': {
        title: 'Sin tiempo',
        level: 'AAA',
        resume:
          'El tiempo no es una parte esencial del evento o actividad presentado por el contenido, a excepción de los medios sincronizados no interactivos y los eventos en tiempo real.',
        sufficient: [
          {
            technique: ['G5']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      },
      '2.2.4': {
        title: 'Volver a autenticar',
        level: 'AAA',
        resume:
          'Las interrupciones pueden ser postergadas o suprimidas por el usuario, excepto las interrupciones que impliquen una emergencia.',
        sufficient: [
          {
            technique: ['G75', 'G76']
          }
        ],
        advisory: ['none'],
        failures: ['F40', 'F41']
      },
      '2.2.5': {
        title: 'Interrupciones',
        level: 'AAA',
        resume:
          'Cuando caduca una sesión autenticada, el usuario puede continuar la actividad sin pérdida de datos después de volver a autenticarse.',
        sufficient: [
          {
            technique: ['G105', 'G181']
          }
        ],
        advisory: ['none'],
        failures: ['F12']
      },
      '2.2.6': {
        title: 'Tiempos de espera',
        level: 'AAA',
        resume:
          'Se advierte a los usuarios sobre la duración de cualquier inactividad del usuario que pueda causar la pérdida de datos, a menos que los datos se conserven durante más de 20 horas cuando el usuario no realiza ninguna acción.',
        sufficient: [
          {
            technique: [
              'Establecer un tiempo de espera de sesión para que ocurra después de al menos 20 horas de inactividad.',
              'Almacenar datos de usuario durante más de 20 horas.',
              'Proporcione una advertencia de la duración de la inactividad del usuario al comienzo de un proceso.'
            ]
          }
        ],
        advisory: ['none'],
        failures: ['F12']
      }
    },
    2.3: {
      title: 'Convulsiones y Reacciones Físicas',
      resume:
        'No diseñe contenido de una manera que se sepa que causa convulsiones o reacciones físicas.',
      '2.3.1': {
        title: 'Tres destellos o por debajo del umbral',
        level: 'A',
        resume:
          'Las páginas web no contienen nada que parpadee más de tres veces en cualquier período de un segundo, o el parpadeo está por debajo de los umbrales de parpadeo general y parpadeo rojo.',
        note: [
          'Nota 1: dado que cualquier contenido que no cumpla con este criterio de éxito puede interferir con la capacidad de un usuario para usar la página completa, todo el contenido de la página web (ya sea que se use para cumplir con otros criterios de éxito o no) debe cumplir con este criterio de éxito. Consulte el Requisito de conformidad 5: No interferencia.'
        ],
        sufficient: [
          {
            technique: ['G19', 'G176', 'G15']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      },
      '2.3.2': {
        title: 'tres destellos',
        level: 'AAA',
        resume:
          'Las páginas web no contienen nada que parpadee más de tres veces en cualquier período de un segundo',
        sufficient: [
          {
            technique: ['G19']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      },
      '2.3.3': {
        title: 'tres destellos',
        level: 'AAA',
        resume:
          'La animación de movimiento desencadenada por la interacción se puede desactivar, a menos que la animación sea esencial para la funcionalidad o la información que se transmite.',
        note: [
          'Nota 1: dado que cualquier contenido que no cumpla con este criterio de éxito puede interferir con la capacidad de un usuario para usar la página completa, todo el contenido de la página web (ya sea que se use para cumplir con otros criterios de éxito o no) debe cumplir con este criterio de éxito. Consulte el Requisito de conformidad 5: No interferencia.'
        ],
        sufficient: [
          {
            technique: ['C39']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      }
    },
    2.4: {
      title: 'Navegable',
      resume:
        'Proporcione formas de ayudar a los usuarios a navegar, encontrar contenido y determinar dónde se encuentran.',
      '2.4.1': {
        title: 'Bloques de derivación',
        level: 'A',
        resume:
          'Hay un mecanismo disponible para eludir bloques de contenido que se repiten en varias páginas web.',
        sufficient: [
          {
            technique: [
              'ARIA11',
              'H69',
              'PDF9',
              'H70',
              'H64',
              'SCR28',
              'H46',
              'SL29'
            ]
          }
        ],
        advisory: ['C6'],
        failures: ['none']
      },
      '2.4.2': {
        title: 'Bloques de derivación',
        level: 'A',
        resume:
          'Hay un mecanismo disponible para eludir bloques de contenido que se repiten en varias páginas web.',
        sufficient: [
          {
            technique: [
              'ARIA11',
              'H69',
              'PDF9',
              'H70',
              'H64',
              'SCR28',
              'H46',
              'SL29'
            ]
          }
        ],
        advisory: ['C6'],
        failures: ['none']
      },
      '2.4.3': {
        title: 'Página titulada',
        level: 'A',
        resume:
          'Las páginas web tienen títulos que describen el tema o el propósito.',
        sufficient: [
          {
            technique: ['G88', 'H25', 'PDF18']
          }
        ],
        advisory: ['G127'],
        failures: ['F25']
      },
      '2.4.4': {
        title: 'Propósito del enlace (en contexto)',
        level: 'A',
        resume:
          'El propósito de cada enlace se puede determinar a partir del texto del enlace solo o del texto del enlace junto con su contexto de enlace determinado mediante programación, excepto cuando el propósito del enlace sea ambiguo para los usuarios en general.',
        sufficient: [
          {
            technique: [
              'G189',
              'SCR30',
              'FLASH7',
              'G53',
              'H33',
              'C7',
              'ARIA7',
              'ARIA8',
              'H77',
              'H78',
              'H79',
              'H81',
              'G91',
              'PDF11',
              'PDF13',
              'SL18'
            ]
          }
        ],
        advisory: ['H2', 'FLASH5', 'H80'],
        failures: ['F63', 'F89']
      },
      '2.4.5': {
        title: 'Múltiples formas',
        level: 'AA',
        resume:
          'Hay más de una manera disponible para ubicar una página web dentro de un conjunto de páginas web, excepto cuando la página web es el resultado o un paso en un proceso.',
        sufficient: [
          {
            technique: ['G125', 'G64', 'PDF2', 'G63', 'G161', 'G126', 'G185']
          }
        ],
        advisory: ['H54'],
        failures: ['none']
      },
      '2.4.6': {
        title: 'Encabezados y etiquetas',
        level: 'AA',
        resume:
          'Los encabezados y las etiquetas describen el tema o el propósito.',
        sufficient: [
          {
            technique: ['G130', 'G131']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      },
      '2.4.7': {
        title: 'Enfoque Visible',
        level: 'AA',
        resume:
          'Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque del teclado es visible.',
        sufficient: [
          {
            technique: ['G165', 'G195', 'SCR31', 'FLASH20', 'SL2', 'SL7']
          }
        ],
        advisory: ['none'],
        failures: ['F55', 'F78']
      },
      '2.4.8': {
        title: 'Ubicación',
        level: 'AAA',
        resume:
          'La información sobre la ubicación del usuario dentro de un conjunto de páginas web está disponible.',
        sufficient: [
          {
            technique: ['G65', 'G23', 'G128', 'FLASH20', 'H59', 'G127']
          }
        ],
        advisory: ['PDF14', 'PDF17'],
        failures: ['F55', 'F78']
      },
      '2.4.9': {
        title: 'Propósito del enlace (solo enlace)',
        level: 'AAA',
        resume:
          'Hay un mecanismo disponible para permitir que el propósito de cada enlace se identifique solo a partir del texto del enlace, excepto cuando el propósito del enlace sea ambiguo para los usuarios en general.',
        sufficient: [
          {
            technique: [
              'G91',
              'H30',
              'H24',
              'FLASH27',
              'G189',
              'SCR30',
              'FLASH7',
              'C7',
              'PDF11',
              'PDF13',
              'SL18'
            ]
          }
        ],
        advisory: ['FLASH5', 'H2', 'H33'],
        failures: ['F84', 'F89']
      },
      '2.4.10': {
        title: 'Encabezados de sección',
        level: 'AAA',
        resume:
          'Los encabezados de las secciones se utilizan para organizar el contenido.',
        note: [
          'Nota 1: "Encabezado" se usa en su sentido general e incluye títulos y otras formas de agregar un encabezado a diferentes tipos de contenido.',
          'Nota 2: este criterio de éxito cubre secciones dentro de la escritura, no los componentes de la interfaz de usuario. Los componentes de la interfaz de usuario están cubiertos por el Criterio de Conformidad 4.1.2.'
        ],
        sufficient: [
          {
            technique: ['G141', 'H69']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      }
    },
    2.5: {
      title: 'Modalidades de entrada',
      resume:
        'Facilite a los usuarios operar la funcionalidad a través de varias entradas más allá del teclado.',
      '2.5.1': {
        title: 'Encabezados de sección',
        level: 'A',
        resume:
          'Toda la funcionalidad que utiliza gestos multipunto o basados ​​en rutas para la operación se puede operar con un solo puntero sin un gesto basado en rutas, a menos que sea esencial un gesto multipunto o basado en rutas.',
        sufficient: [
          {
            technique: [
              'GXXX: no confíes en gestos basados en rutas',
              'GXXX: no confíes en los gestos multipunto',
              'GXXX: proporciona controles que no requieren gestos complejos y realizan la misma función que los gestos complejos',
              'GXXX: activación de un solo punto para manipulación y posicionamiento espacial'
            ]
          }
        ],
        advisory: ['none'],
        failures: [
          'La funcionalidad se puede operar mediante la entrada del puntero, pero no solo con la activación de un solo punto'
        ]
      },
      '2.5.2': {
        title: 'Cancelación de puntero',
        level: 'A',
        resume:
          'Para la funcionalidad que se puede operar usando un solo puntero, al menos uno de los siguientes es verdadero',
        description: [
          {
            title: 'Sin evento descendente',
            resume:
              'el evento descendente del puntero no se utiliza para ejecutar ninguna parte de la función;'
          },
          {
            title: 'Abortar o Deshacer',
            resume:
              'La finalización de la función está en el evento ascendente, y hay un mecanismo disponible para abortar la función antes de la finalización o para deshacer la función después de la finalización;'
          },
          {
            title: 'Reversión hacia arriba',
            resume:
              'el evento hacia arriba invierte cualquier resultado del evento hacia abajo anterior;'
          },
          {
            title: 'Esencial',
            resume: 'Completar la función en el evento down es esencial.'
          }
        ],
        sufficient: [
          {
            technique: ['G210', 'G211']
          }
        ],
        advisory: ['none'],
        failures: [
          'Fallo de SC 2.5.3 debido a la activación de un botón en la ubicación del toque inicial en lugar de la ubicación del toque final.'
        ]
      },
      '2.5.3': {
        title: 'Etiqueta en nombre',
        level: 'A',
        resume:
          'Para los componentes de la interfaz de usuario con etiquetas que incluyen texto o imágenes de texto, el nombre contiene el texto que se presenta visualmente.',
        sufficient: [
          {
            technique: ['G208', 'G211']
          }
        ],
        advisory: [
          'Si un ícono no tiene texto que lo acompañe, considere usar su texto flotante como su nombre accesible'
        ],
        failures: [
          'F96',
          ' El nombre accesible contiene el texto de la etiqueta visible, pero las palabras de la etiqueta visible no están en el mismo orden que en el texto de la etiqueta visible',
          'El nombre accesible contiene el texto de la etiqueta visible, pero una o más palabras están intercaladas en la etiqueta'
        ]
      },
      '2.5.4': {
        title: 'Actuación de movimiento',
        level: 'A',
        resume:
          'La funcionalidad que puede ser operada por el movimiento del dispositivo o el movimiento del usuario también puede ser operada por los componentes de la interfaz de usuario y la respuesta al movimiento puede desactivarse para evitar la activación accidental, excepto cuando:',
        description: [
          {
            title: 'Interfaz compatible',
            resume:
              'el movimiento se utiliza para operar la funcionalidad a través de una interfaz compatible con accesibilidad;'
          },
          {
            title: 'Esencial',
            resume:
              'El movimiento es esencial para la función y hacerlo invalidaría la actividad.'
          }
        ],
        sufficient: [
          {
            technique: [
              'GXXX: funciones de nivel de sistema compatibles que permiten al usuario desactivar la actuación de movimiento',
              'G213'
            ]
          }
        ],
        advisory: [
          'Si un ícono no tiene texto que lo acompañe, considere usar su texto flotante como su nombre accesible'
        ],
        failures: [
          'FXXX: Incumplimiento del Criterio de Conformidad 2.5.4 debido a una funcionalidad que solo puede activarse a través de eventos de movimiento del dispositivo (p. ej., sacudidas o inclinación)',
          ' FXXX: Incumplimiento del Criterio de Conformidad 2.5.4 debido a la incapacidad de deshabilitar el accionamiento por movimiento'
        ]
      },
      '2.5.5': {
        title: 'Tamaño objetivo',
        level: 'AAA',
        resume:
          'El tamaño del objetivo para las entradas del puntero es de al menos 44 por 44 píxeles CSS, excepto cuando:',
        description: [
          {
            title: 'Equivalente',
            resume:
              ' el objetivo está disponible a través de un enlace o control equivalente en la misma página que tiene al menos 44 por 44 píxeles CSS;'
          },
          {
            title: 'En línea',
            resume: 'el objetivo está en una oración o bloque de texto;'
          },
          {
            title: 'Control del agente de usuario',
            resume:
              'el tamaño del objetivo lo determina el agente de usuario y el autor no lo modifica;'
          },
          {
            title: 'Esencial',
            resume:
              'una presentación particular del objetivo es esencial para la información que se transmite.'
          }
        ],
        sufficient: [
          {
            technique: [
              'Asegurarse de que los objetivos táctiles tengan al menos 44 x 44 píxeles CSS.',
              'Proporcionar un mecanismo para cambiar el tamaño del objetivo independientemente de la ampliación.'
            ]
          }
        ],
        advisory: [
          'Garantizar que los enlaces en línea proporcionen un objetivo de activación lo suficientemente grande.'
        ],
        failures: [
          'Fallo del criterio de éxito 2.5.3 debido a que el tamaño del objetivo es inferior a 44 por 44 píxeles CSS.',
          'Fallo del criterio de éxito 2.5.3 debido a que el tamaño objetivo de un párrafo que también es un enlace es inferior a 44 x 44 píxeles CSS.'
        ]
      },
      '2.5.6': {
        title: 'Mecanismos de entrada concurrentes',
        level: 'AAA',
        resume:
          'El contenido web no restringe el uso de las modalidades de entrada disponibles en una plataforma, excepto cuando la restricción sea esencial, necesaria para garantizar la seguridad del contenido o necesaria para respetar la configuración del usuario.',
        sufficient: [
          {
            technique: [
              'Solo se usan controladores de eventos independientes de entrada de alto nivel (foco, desenfoque, clic) en Javascript (los sistemas operativos/UA activan estos eventos para todos los mecanismos de entrada).'
            ]
          }
        ],
        advisory: ['none'],
        failures: ['F98']
      }
    }
  },
  3: {
    title: 'Comprensible',
    resume:
      'La información y el funcionamiento de la interfaz de usuario deben ser comprensibles.',
    3.1: {
      title: 'Legible',
      resume: 'Hacer que el contenido del texto sea legible y comprensible.',
      '3.1.1': {
        title: 'Idioma de la página',
        level: 'A',
        resume:
          'El idioma humano predeterminado de cada página web se puede determinar mediante programación.',
        sufficient: [
          {
            technique: ['H57']
          }
        ],
        advisory: ['SVR5'],
        failures: ['none']
      },
      '3.1.2': {
        title: 'Idioma de las partes',
        level: 'AA',
        resume:
          'El lenguaje humano de cada pasaje o frase en el contenido se puede determinar programáticamente a excepción de los nombres propios, términos técnicos, palabras de lenguaje indeterminado y palabras o frases que se han convertido en parte de la lengua vernácula del texto circundante inmediato.',
        sufficient: [
          {
            technique: ['H58', 'SL14']
          }
        ],
        advisory: ['SL27'],
        failures: ['none']
      },
      '3.1.3': {
        title: 'Palabras inusuales',
        level: 'AAA',
        resume:
          'Hay un mecanismo disponible para identificar definiciones específicas de palabras o frases utilizadas de manera inusual o restringida, incluidos modismos y jerga.',
        sufficient: [
          {
            situation:
              'Situación A: Si la palabra o frase tiene un significado único dentro de la página Web:',
            technique: [
              'G55',
              'H40',
              'H60',
              'G112',
              'H54',
              'G101',
              'G55',
              'H40',
              'H60',
              'G62',
              'G70'
            ]
          },
          {
            situation:
              'Situación B: Si la palabra o frase significa diferentes cosas dentro de la misma página Web:',
            technique: ['G55', 'H40', 'H60', 'G112', 'H54']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      },
      '3.1.4': {
        title: 'Abreviaturas',
        level: 'AAA',
        resume:
          'Se encuentra disponible un mecanismo para identificar la forma expandida o el significado de las abreviaturas.',
        sufficient: [
          {
            situation:
              'Situación A: Si la abreviatura tiene un solo significado dentro de la página Web:',
            technique: [
              'G97',
              'G55',
              'H28',
              'PDF8',
              'G102',
              'G55',
              'G62',
              'H60',
              'G70',
              'H28',
              'PDF8'
            ]
          },
          {
            situation:
              'Situación B: Si la abreviatura significa cosas diferentes dentro de una misma página Web:',
            technique: ['G55', 'H40', 'H60', 'G112', 'H54']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      },
      '3.1.5': {
        title: 'Nivel de lectura',
        level: 'AAA',
        resume:
          'Cuando el texto requiere una capacidad de lectura más avanzada que el nivel de educación secundaria inferior después de eliminar los nombres y títulos propios, hay disponible contenido complementario o una versión que no requiere una capacidad de lectura más avanzada que el nivel de educación secundaria inferior.',
        sufficient: [
          {
            technique: ['G86', 'G103', 'G79', 'G153', 'G160']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      },
      '3.1.6': {
        title: 'Pronunciación',
        level: 'AAA',
        resume:
          'Está disponible un mecanismo para identificar la pronunciación específica de palabras donde el significado de las palabras, en contexto, es ambiguo sin conocer la pronunciación.',
        sufficient: [
          {
            technique: ['G120', 'G121', 'G62', 'G163', 'H62']
          }
        ],
        advisory: ['none'],
        failures: ['none']
      }
    },
    3.2: {
      title: ' Predecible',
      resume:
        'Haga que las páginas web aparezcan y funcionen de manera predecible.',
      '3.2.1': {
        title: 'Enfocado',
        level: 'A',
        resume:
          'Cuando cualquier componente de la interfaz de usuario recibe el foco, no inicia un cambio de contexto.',
        sufficient: [
          {
            technique: ['G107']
          }
        ],
        advisory: ['G200', 'G201'],
        failures: ['F55']
      },
      '3.2.2': {
        title: 'en la entrada',
        level: 'A',
        resume:
          'Cambiar la configuración de cualquier componente de la interfaz de usuario no provoca automáticamente un cambio de contexto a menos que se haya informado al usuario sobre el comportamiento antes de usar el componente.',
        sufficient: [
          {
            technique: [
              'G80',
              'H32',
              'H84',
              'FLASH4',
              'PDF15',
              'SL10',
              'G13',
              'SCR19'
            ]
          }
        ],
        advisory: ['G201'],
        failures: ['F36', 'F37']
      },
      '3.2.3': {
        title: 'en la entrada',
        level: 'AA',
        resume:
          'Los mecanismos de navegación que se repiten en varias páginas web dentro de un conjunto de páginas web ocurren en el mismo orden relativo cada vez que se repiten, a menos que el usuario inicie un cambio.',
        sufficient: [
          {
            technique: ['G61']
          }
        ],
        advisory: ['PDF14', 'PDF17'],
        failures: ['F66']
      },
      '3.2.4': {
        title: 'Identificación consistente',
        level: 'AA',
        resume:
          'Los componentes que tienen la misma funcionalidad dentro de un conjunto de páginas web se identifican de forma coherente.',
        sufficient: [
          {
            technique: ['G197']
          }
        ],
        advisory: ['none'],
        failures: ['F31']
      },
      '3.2.5': {
        title: 'Cambio a pedido',
        level: 'AAA',
        resume:
          'Los cambios de contexto se inician solo por solicitud del usuario o hay un mecanismo disponible para desactivar dichos cambios.',
        sufficient: [
          {
            situation:
              'Situación A: Si la página Web permite actualizaciones automáticas:',
            technique: ['G76']
          },
          {
            situation:
              'Situación B: si los redireccionamientos automáticos son posibles:',
            technique: ['SVR1', 'G110', 'H76']
          },
          {
            situation:
              'Situación C: Si la página Web utiliza ventanas emergentes:',
            technique: ['H83', 'SCR24']
          },
          {
            situation:
              'Situación C: Si la página Web utiliza ventanas emergentes:',
            technique: ['SCR219']
          }
        ],
        advisory: ['G200'],
        failures: ['F60', 'F61', 'F9', 'F22', 'F52', 'F41']
      }
    },
    3.3: {
      title: 'Asistencia de entrada',
      resume: 'Ayudar a los usuarios a evitar y corregir errores.',
      '3.3.1': {
        title: 'Error de identificación',
        level: 'A',
        resume:
          'Si se detecta automáticamente un error de entrada, se identifica el elemento que tiene el error y se describe el error al usuario en texto.',
        sufficient: [
          {
            situation:
              'Situación A: Si un formulario contiene campos para los cuales la información del usuario es obligatoria.',
            technique: ['G83', 'ARIA21', 'SCR18', 'PDF5', 'SL35']
          },
          {
            situation:
              'Situación B: Si se requiere que la información proporcionada por el usuario esté en un formato de datos específico o de ciertos valores.',
            technique: [
              'ARIA18',
              'ARIA19',
              'ARIA21',
              'G84',
              'G85',
              'SCR18',
              'SCR32',
              'FLASH12',
              'PDF22',
              'SL35'
            ]
          }
        ],
        advisory: ['G139', 'G199'],
        failures: ['none']
      },
      '3.3.2': {
        title: 'Etiquetas o instrucciones',
        level: 'A',
        resume:
          'Se proporcionan etiquetas o instrucciones cuando el contenido requiere la intervención del usuario.',
        sufficient: [
          {
            technique: [
              'ARIA1',
              'ARIA9',
              'ARIA17',
              'G89',
              'G184',
              'G162',
              'G83',
              'H90',
              'FLASH10',
              'PDF5',
              'H44',
              'FLASH32',
              'FLASH29',
              'FLASH25',
              'PDF10',
              'SL26',
              'H71',
              'FLASH8',
              'SL8',
              'G167'
            ]
          }
        ],
        advisory: ['G13', 'SL19'],
        failures: ['F82']
      },
      '3.3.3': {
        title: 'Sugerencia de error',
        level: 'AA',
        resume:
          'Si se detecta automáticamente un error de entrada y se conocen sugerencias para su corrección, estas sugerencias se proporcionan al usuario, a menos que pongan en peligro la seguridad o el propósito del contenido.',
        sufficient: [
          {
            situation:
              'Situación A: Si un campo obligatorio no contiene información:',
            technique: ['G83', 'ARIA2', 'PDF5', 'SL35']
          },
          {
            situation:
              'Situación B: si se requiere que la información de un campo esté en un formato de datos específico:',
            technique: [
              'ARIA18',
              'G85',
              'G177',
              'SCR18',
              'SCR32',
              'FLASH12',
              'PDF22'
            ]
          },
          {
            situation:
              'Situación C: Se requiere que la información proporcionada por el usuario sea uno de un conjunto limitado de valores:',
            technique: [
              'ARIA18',
              'G84',
              'G177',
              'SCR18',
              'SCR32',
              'FLASH12',
              'PDF22'
            ]
          }
        ],
        advisory: ['G139', 'G199', 'SCR18'],
        failures: ['none']
      },
      '3.3.4': {
        title: 'Prevención de Errores (Legal, Financiero, Datos)',
        level: 'AA',
        resume:
          'Para las páginas web que generan compromisos legales o transacciones financieras para el usuario, que modifican o eliminan datos controlables por el usuario en los sistemas de almacenamiento de datos, o que envían respuestas de prueba del usuario, al menos uno de los siguientes es verdadero:',
        description: [
          {
            title: 'Reversible',
            resume: 'Las presentaciones son reversibles.'
          },
          {
            title: 'Comprobado',
            resume:
              'los datos introducidos por el usuario se comprueban en busca de errores de entrada y el usuario tiene la oportunidad de corregirlos.'
          },
          {
            title: 'Confirmado',
            resume:
              ' Hay un mecanismo disponible para revisar, confirmar y corregir la información antes de finalizar la presentación.'
          }
        ],
        sufficient: [
          {
            situation:
              'Situación A: Si una solicitud da lugar a que se produzca un negocio jurídico, como realizar una compra o presentar una declaración de la renta:',
            technique: ['G164', 'G98', 'G155']
          },
          {
            situation:
              'Situación B: Si una acción provoca la eliminación de información:',
            technique: ['G168', 'G99', 'G155']
          },
          {
            situation:
              'Situación C: Si la página web incluye una aplicación de prueba:',
            technique: ['G168', 'G98']
          }
        ],
        advisory: ['SL35', 'G199', 'SCR18'],
        failures: ['none']
      },
      '3.3.5': {
        title: 'Ayuda',
        level: 'AAA',
        resume: 'La ayuda sensible al contexto está disponible.',
        sufficient: [
          {
            situation:
              'Situación A: si un formulario requiere entrada de texto:',
            technique: ['G71', 'G184', 'G194', 'G193']
          },
          {
            situation:
              'Situación B: si un formulario requiere entrada de texto en un formato de datos esperado:',
            technique: ['G168', 'G99', 'G155']
          },
          {
            situation:
              'Situación C: Si la página web incluye una aplicación de prueba:',
            technique: ['G184', 'G89']
          }
        ],
        advisory: ['H89'],
        failures: ['none']
      },
      '3.3.6': {
        title: 'Prevención de errores(Todos)',
        level: 'AAA',
        resume:
          'Para las páginas web que requieren que el usuario envíe información, al menos uno de los siguientes es verdadero:',
        description: [
          {
            title: 'Reversible',
            resume: 'Las presentaciones son reversibles.'
          },
          {
            title: 'Comprobado',
            resume:
              'Los datos introducidos por el usuario se comprueban en busca de errores de entrada y el usuario tiene la oportunidad de corregirlos.'
          },
          {
            title: 'Confirmado',
            resume:
              'Hay un mecanismo disponible para revisar, confirmar y corregir la información antes de finalizar la presentación.'
          }
        ],
        sufficient: ['none'],
        advisory: ['none'],
        failures: ['none']
      }
    }
  },
  4: {
    title: 'Robusto',
    resume:
      'El contenido debe ser lo suficientemente sólido como para que pueda ser interpretado por una amplia variedad de agentes de usuario, incluidas las tecnologías de asistencia',
    4.1: {
      title: 'Compatible',
      resume:
        'Maximice la compatibilidad con los agentes de usuario actuales y futuros, incluidas las tecnologías de asistencia.',
      '4.1.1': {
        title: 'análisis',
        level: 'A',
        resume:
          'En el contenido implementado mediante lenguajes de marcado, los elementos tienen etiquetas de inicio y finalización completas, los elementos se anidan de acuerdo con sus especificaciones, los elementos no contienen atributos duplicados y cualquier ID es único, excepto donde las especificaciones permitan estas características.',
        sufficient: [
          {
            situation:
              'Situación C: Si la página web incluye una aplicación de prueba:',
            technique: ['G184', 'G89']
          }
        ],
        advisory: ['none'],
        failures: ['F70', 'F77']
      },
      '4.1.2': {
        title: 'Nombre, Rol, Valor',
        level: 'A',
        resume:
          'Para todos los componentes de la interfaz de usuario (incluidos, entre otros: elementos de formulario, enlaces y componentes generados por scripts), el nombre y la función se pueden determinar mediante programación; los estados, las propiedades y los valores que puede establecer el usuario se pueden establecer mediante programación; y la notificación de cambios en estos elementos está disponible para los agentes de usuario, incluidas las tecnologías de asistencia.',
        note: [
          'Nota 1: este criterio de éxito es principalmente para autores web que desarrollan o escriben sus propios componentes de interfaz de usuario. Por ejemplo, los controles HTML estándar ya cumplen este criterio de éxito cuando se usan de acuerdo con las especificaciones.'
        ],
        sufficient: [
          {
            situation:
              'Situación A: si usa un componente de interfaz de usuario estándar en un lenguaje de marcas (p. ej., HTML):',
            technique: [
              'ARIA14',
              'ARIA16',
              'G108',
              'H91',
              'H44',
              'H64',
              'H65',
              'H88'
            ]
          },
          {
            situation:
              'Situación B: si usa script o código para reutilizar un componente de interfaz de usuario estándar en un lenguaje de marcas:',
            technique: ['ARIA16']
          },
          {
            situation:
              'Situación C: si se utiliza un componente de interfaz de usuario estándar en una tecnología de programación:',
            technique: [
              'G135',
              'FLASH32',
              'FLASH29',
              'FLASH30',
              'PDF10',
              'PDF12',
              'SL26',
              'SL32'
            ]
          },
          {
            situation:
              'Situación D: si crea su propio componente de interfaz de usuario en un lenguaje de programación:',
            technique: [
              'ARIA4',
              'ARIA5',
              'ARIA16',
              'SL6',
              'SL18',
              'SL20',
              'SL30'
            ]
          }
        ],
        advisory: ['none'],
        failures: ['F59', 'F15', 'F20', 'F68', 'F79', 'F86', 'F89']
      },
      '4.1.3': {
        title: 'Mensajes de estado',
        level: 'AA',
        resume:
          'En el contenido implementado mediante lenguajes de marcado, los mensajes de estado se pueden determinar mediante programación a través del rol o las propiedades, de modo que se puedan presentar al usuario mediante tecnologías de asistencia sin recibir atención.',
        sufficient: [
          {
            situation:
              'Situación A: Si un mensaje de estado informa sobre el éxito o los resultados de una acción, o el estado de una aplicación:',
            technique: ['ARIA22', 'G19']
          },
          {
            situation:
              'Situación B: si un mensaje de estado transmite una sugerencia o una advertencia sobre la existencia de un error:',
            technique: ['ARIA19', 'G83', 'G84', 'G85', 'G177', 'G194']
          },
          {
            situation:
              'Situación C: si un mensaje de estado transmite información sobre el progreso de un proceso:',
            technique: ['ARIA22', 'ARIA23', 'Usando role="barra de progreso"']
          }
        ],
        advisory: [
          'Uso de regiones aria-live con clientes de chat',
          'Usando role="marquee"',
          'Uso de role="timer"',
          'ARIA18',
          'SCR14'
        ],
        failures: [
          'Usar role="alert" o aria-live="asertive" en contenido que no es importante y sensible al tiempo (futuro enlace)',
          'Uso de un evento de cambio de visibilidad para ocultar o mostrar un documento sin cambiar las regiones activas del documento entre activo e inactivo (enlace futuro)'
        ]
      }
    }
  }
}
