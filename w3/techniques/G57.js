export const data = {
  
    name: 'G57',
    
    type: 'general',
    
    relation: [ '1.3.2' ],
    
    applicability: 'Todas las tecnologías ',
    
    resume: 'La técnica de ordenamiento de contenido se utiliza para garantizar que el contenido se represente visualmente en el orden correcto y se exponga a la tecnología de asistencia de la misma manera. Esto se logra mediante el uso de marcado para anular el algoritmo bidireccional, el control de la colocación de bloques de contenido a través de tablas de diseño y la eliminación de caracteres de espacio en blanco. Estas técnicas permiten que el contenido se presente de manera significativa tanto a los usuarios como a la tecnología de asistencia.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume:'Una página web de una exposición de un museo contiene una barra de navegación que contiene una larga lista de enlaces. La página también contiene una imagen de una de las imágenes de la exposición, un encabezado para la imagen y una descripción detallada de la imagen. Los enlaces en la barra de navegación forman una secuencia significativa. El encabezado, la imagen y el texto de la descripción también forman una secuencia significativa. CSS se utiliza para posicionar los elementos en la página.',
            code:'  <h1>Mi página de museo</h1><ul id="navegación"><li><a href="#">Enlace 1</a></li>...<li><a href="#">Enlace 10</a></li></ul><div id="descripción"><h2>Mona Lisa</h2><p><img src="img.png" alt="Mona Lisa"></p><p>...descripción detallada de la imagen...</p></div>    ul#nav{float:left;width:9em;list-style-type:none;margin:0;padding:0.5em;color:#fff;background-color:#063;} ul#nav a{display:block;width:100%;text-decoration:none;color:#fff;background-color:#063;} div#description{margin-left:11em;}'
        }
    ],
    
    relTech: [ 'C6', 'C27', 'G59', 'F1' ],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Linealizar contenido utilizando un enfoque estándar para la tecnología (p. ej., eliminando estilos de diseño o ejecutando una herramienta de linealización)'
                },
                {
                    order: 2,
                    task: 'Verifique si el orden del contenido tiene el mismo significado que el original'
                }
            ],
            
            results: '#2 es verdadera.'
        }
    ]
}