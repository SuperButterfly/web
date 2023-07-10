export const data = {
  name: 'F3',

  type: 'failure',

  relation: ['1.1.1'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'La propiedad background-image de CSS proporciona una forma de incluir imágenes en el documento con CSS sin referencia en el código HTML. Sin embargo, no se pueden asociar alternativas de texto con estas imágenes, por lo que no se recomienda usar esta propiedad para transmitir información importante.',

  note: 'Incrustar información en una imagen de fondo también puede causar problemas a las personas que usan fondos alternativos para aumentar la legibilidad y a los usuarios del modo de alto contraste en algunos sistemas operativos. Estos usuarios perderían la información en la imagen de fondo debido a la falta de cualquier texto alternativo',

  example: [
    {
      title: 'Ejemplo 1',
      resume:
        'parte del contenido está contenido en una imagen que se presenta solo con CSS. En este ejemplo, la imagen TopRate.png es una imagen de 180 por 200 píxeles que contiene el texto "19,3 % APR variable típica',
      code: 'p#mejorinterés {padding-left: 200px; background: url(/images/TopRate.png) top left no-repeat;}  Se utiliza en este extracto:  <p id="mejorinterés"> ¿Dónde más encontraría una mejor tasa de interés?</p>'
    },
    {
      title: 'Ejemplo 2',
      resume:
        'Un distribuidor de libros utiliza imágenes de fondo para proporcionar iconos en una lista de títulos de libros para indicar si son nuevos, limitados, en stock o agotados. El CSS contiene:',
      code: ' ul#booklist li.new {background: transparent url(new.png) no-repeat top left;}ul#booklist li.limited {background: transparent url(limited.png) no-repeat top left;}ul#booklist li.instock {background: transparent url(instock.png) no-repeat top left;}ul#booklist li.outstock {background: transparent url(outstock.png) no-repeat top left;}  Se utiliza en este extracto:  <ul id="booklist"><li class="new">Algún libro</li><li class="instock">Algún otro libro</li><li class="limited">Un libro que queremos desesperadamente para deshacerse de</li>...<li class="outstock">Un libro que realmente quiere </li></ul>'
    },
    {
      title: 'Ejemplo 3',
      resume:
        'Usando el código del ejemplo 1, la misma imagen de fondo se declara en el atributo de estilo HTML:',
      code: '<p id="bestinterest" style="background: url(/images/TopRate.png) no-repeat top left;">¿Dónde más encontraría una mejor tasa de interés?</p>  En el siguiente código, la declaración de la imagen de fondo se crea en un script de cliente:  <script type="text/javascript">var newP = document.createElement("p"); var newPText = document.createTextNode("¿Dónde más encontraría una mejor tasa de interés?"); newP.appendChild(newPText); newP.style.background = "url(/images/TopRate.png) no-repeat top left"; document.body.appendChild(newP);</script>'
    }
  ],

  relTech: ['H37'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Examine todas las imágenes agregadas al contenido a través de CSS, atributos de estilo HTML o dinámicamente en secuencias de comandos como imágenes de fondo'
        },
        {
          order: 2,
          task: 'Verifique que las imágenes no transmitan información importante'
        },
        {
          order: 3,
          task: 'Si una imagen transmite información importante, la información se proporciona a las tecnologías de asistencia y también está disponible cuando no se muestra la imagen CSS.'
        }
      ],

      results:
        'Si el paso n.º 2 y el paso n.º 3 son falsos, entonces se aplica esta condición de falla y el contenido no cumple con este Criterio de Conformidad.'
    }
  ]
}
