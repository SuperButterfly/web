export const data = {
  name: 'H53',

  type: 'html',

  relation: ['1.1.1', '1.2.3', '1.2.8'],

  applicability: 'Documentos que cargan medios con el objectelemento.',

  resume:
    ' Esta técnica ofrece una alternativa de texto para contenido representado con el elemento object. El cuerpo del elemento puede contener contenido adicional o una alternativa de texto completo. Si los medios no se procesan, el contenido alternativo se presentará al usuario. Los autores solo pueden confiar en esta técnica para satisfacer el criterio de éxito si esperan que los usuarios puedan acceder a la alternativa.',

  example: [
    {
      title:
        'Ejemplo 1: un objeto incluye una descripción larga que lo describe',
      code: '<object classid="http://www.example.com/analogclock.py"> <p>Aquí hay un texto que describe el objeto y su funcionamiento.</p></object>'
    },
    {
      title:
        'Ejemplo 2: un objeto incluye contenido que no es texto con una alternativa de texto',
      code: '<object classid="http://www.example.com/animatedlogo.py"><img src="logo estático.gif" alt="Nombre de la empresa" /></object>'
    },
    {
      title:
        'Ejemplo 3: el objeto de imagen tiene contenido que proporciona una breve descripción de la función de la imagen',
      code: '<object data="companylogo.gif" type="image/gif"><p>Company Name</p></object>'
    },
    {
      title: 'Ejemplo 4',
      resume:
        'Este ejemplo aprovecha el hecho de que los objectelementos se pueden anidar para proporcionar representaciones alternativas de la información.',
      code: '<object classid="java:Press.class" width="500" height="500"><object data="Pressure.mpeg" type="video/mpeg"><object data="Pressure.gif" type="image/gif">As temperature increases, the molecules in the balloon...</object></object></object>'
    }
  ],

  relTech: ['G92'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Compruebe que el cuerpo de cada objectelemento contiene una alternativa de texto para el objet'
        }
      ],

      results: 'La verificacion #1 es cierta.'
    }
  ]
}
