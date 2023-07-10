export const data = {
  name: 'ARIA11',

  type: 'aria',

  relation: ['1.3.1', '1.3.6', '2.4.1'],

  applicability:
    'Tecnologías que admiten aplicaciones de Internet enriquecidas accesibles (WAI-ARIA) .',

  resume:
    'La técnica de puntos de referencia proporciona una forma programática de identificar secciones en una página web para ayudar a los usuarios de tecnología de asistencia a navegar por la página. Los roles de punto de referencia, que se insertan utilizando un atributo de rol en un elemento, identifican secciones como banner, contenido principal, navegación y búsqueda. Además, los puntos de referencia deben complementar el marcado semántico nativo, y todo el contenido de la página debe incluirse para garantizar que los usuarios de tecnología de asistencia no pierdan el contenido.',

  example: [
    {
      title: 'Ejemplo 1: Puntos de referencia simples',
      resume:
        'El siguiente ejemplo muestra cómo se pueden agregar puntos de referencia a un documento HTML4 o XHTML 1.0:',
      code: '<div id="header" role="banner"> Uuna imagen de banner y un título introductorio</div><div id="sitelookup" role="buscar">....</div><div id="nav" role="navigation">...una lista de enlaces aquí...</div><div id="content" role="main"> ... Ottawa es la capital de Canadá ...</div><div id="rightsideadvert" role="complementary">....un anuncio aquí...</div><div id="footer" role="contentinfo">(c)The Freedom Company, 123 Freedom Way, Helpville, EE. UU.</div>'
    },
    {
      title:
        'Ejemplo 2: Múltiples puntos de referencia del mismo tipo y aria-labeledby',
      resume:
        'El siguiente ejemplo muestra una práctica recomendada de cómo se pueden agregar puntos de referencia a un documento HTML4 o XHTML 1.0 en situaciones en las que hay más de dos puntos de referencia del mismo tipo en la misma página. Por ejemplo, si una función de navegación se usa varias veces en una página web, cada instancia puede tener una etiqueta única especificada usando aria-labelledby:',
      code: '<div id="leftnav" role="navegación" aria-labelledby="leftnavheading"><h2 id="leftnavheading">Enlaces institucionales</h2><ul><li>...una lista de enlaces aquí...</li> </ul></div><div id="rightnav" role="navegación" aria-labelledby="rightnavheading"><h2 id="rightnavheading">Temas relacionados</h2><ul><li>...una lista de enlaces aquí...</li></ul></div>'
    },
    {
      title:
        'Ejemplo 3: Múltiples puntos de referencia del mismo tipo y etiqueta aria',
      resume:
        'El siguiente ejemplo muestra una mejor práctica de cómo se pueden agregar puntos de referencia a un documento HTML4 o XHTML 1.0 en situaciones en las que hay más de dos del mismo tipo de punto de referencia en la misma página, y no hay texto existente en la página que pueda ser referenciado como la etiqueta.',
      code: '<formulario rol="buscar"><etiqueta para="s6">buscar</etiqueta><entrada id="s6" tipo="texto" tamaño="20"></formulario>'
    }
  ],

  relTech: ['G1', 'G124', 'H69', 'SCR28'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Examine cada elemento con un papel destacado .'
        },
        {
          order: 2,
          task: 'Examine si el atributo de función de punto de referencia se aplica a la sección de la página que corresponde a esa función. (es decir, la función de "navegación" se aplica a una sección de navegación, la función "principal" se aplica donde comienza el contenido principal).'
        }
      ],

      results: 'La verificación #1 y #2 es verdadera.'
    }
  ]
}
