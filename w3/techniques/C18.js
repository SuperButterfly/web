export const data = {
  name: 'C18',

  type: 'css',

  relation: ['1.1.1'],

  applicability: 'Todas las tecnologias que soporten CSS',

  resume:
    'Los diseñadores web a veces usan imágenes espaciadoras para controlar el diseño, pero las hojas de estilo en cascada (CSS) ofrecen un control suficiente para reemplazarlas. Las propiedades de CSS para márgenes y relleno se usan para controlar el diseño agregando espacio externo o interno a un elemento.',

  example: [
    {
      title: 'noembedse proporciona dentro de unembed',
      code: '<embed src="../peliculas/historia_de_roma.mov" altura = "60" ancho = "144" inicio automático = "falso"> <sin incrustar> <a href="../transcripts/transcript_history_rome.htm">Transcripción de "La historia de Roma"</a> </noincrustado> </incrustar>'
    },
    {
      title: 'noembedse proporciona al lado de unembed',
      code: '<embed src="nombre de la película.swf" ancho="100" altura="80" pluginspage="http://example.com/shockwave/download/" /> <sin incrustar> <img alt="Imagen fija de la película" src="nombrepelícula.gif" ancho = "100" altura = "80" /> </noincrustado>;'
    }
  ],

  relTech: ['none'],

  tests: ['none']
}
