export const data = {
  name: 'H46',

  type: 'html',

  relation: ['1.1.1'],

  applicability: 'Documentos que cargan complementos con el embedelemento.',

  resume:
    ' Esta técnica se usa para proporcionar contenido alternativo para el elemento embed al no admitirse en algunos navegadores. Se recomienda ubicarlo como un elemento secundario de embed para que sea claro para las tecnologías de asistencia que hay una alternativa de texto asociada.',

  example: [
    {
      title:
        'consta de dos partes: el código CSS, que especifica un margen en todos los lados de la tabla y el relleno para las celdas de la tabla; y el código HTML de la tabla, que no contiene imágenes espaciadoras y no está anidado dentro de otra tabla',
      resume:
        '   tabla { margen: .5em; borde-colapso: colapso; }  td, th { relleno: .4em; borde: 1px sólido #000; } ',
      code: '<table summary="Títulos, autores y fechas de publicación de los libros en la categoría de desarrollo web">  <caption>Libros en la categoría "Desarrollo web"</caption>  <thead> <tr> <th>Título</th> <th>Autor</th> <th>Fecha</th> </tr> </thead> <tbody> <tr> <td>Cómo pensar con claridad sobre los estándares web</td> <td>Andrés Stanovich</td> <td>1 de abril de 2007</td> </tr> </tbody> </tabla>'
    }
  ],

  relTech: ['none'],

  tests: ['none']
}
