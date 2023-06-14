export const data = {
    name: 'H53',
    
    type: 'html',
    
    relation: [ '3.1.1' ],
    
    applicability: 'HTML',
    
    resume: `
      El objetivo de esta técnica es identificar el idioma predeterminado de un documento proporcionando el langatributo en el htmlelemento.

      Identificar el idioma del documento es importante por varias razones:

      Permite que el software de traducción braille sustituya los códigos de control por caracteres acentuados e inserte los códigos de control necesarios para evitar la creación errónea de contracciones braille de grado 2.
      Los sintetizadores de voz que admiten varios idiomas podrán orientarse y adaptarse a la pronunciación y la sintaxis que son específicas del idioma de la página, pronunciando el texto con el acento adecuado y la pronunciación adecuada.
      Marcar el idioma puede beneficiar futuros desarrollos en tecnología, por ejemplo, los usuarios que no pueden traducir entre idiomas por sí mismos podrán usar máquinas para traducir idiomas desconocidos.
      Marcar el idioma también puede ayudar a los agentes de usuario a proporcionar definiciones mediante un diccionario.
    `,
    
    example: [
        {
            title: 'Ejemplo 1: Definir el contenido de un documento HTML para que esté en francés',
            code: `
                    <!doctype html>
                    <html lang="fr"> 
                    <head>
                      <meta charset="utf-8">
                      <title>document écrit en français</title>
                    </head>  
                    <body>     
                      ... document écrit en français ...
                    </body>
                    </html>
            `
        }
    ],
    
    relTech: [ 'H58'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Examine el htmlelemento del documento y comprueba que el htmlelemento tiene un langatributo.'
                },
                {
                    order: 2,
                    task: 'Verifique que el valor del langatributo cumpla con BCP 47: Etiquetas para la identificación de idiomas o su sucesor y refleje el idioma principal utilizado por la página web.'
                }
                
                
            ],
            
            results: 'La verificacion #1 y #2 son ciertas.'
        }
    ]
}