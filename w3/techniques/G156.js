export const data = {
    name: 'G156',
    
    type: 'general',
    
    relation: [ '1.4.3', '1.4.6', '1.4.8' ],
    
    applicability: 'Cualquier tecnología ',
    
    resume: 'El autor web diseña la página para que funcione con navegadores que tengan controles de cambio de colores, y no los anula. Esto permite que las personas con discapacidades cognitivas comprendan correctamente el contenido de la página web. Si se usan colores de fondo para delinear áreas de la página, se puede especificar colores de texto y de fondo del contenido secundario sin especificar los colores del contenido principal para permitir que el usuario controle los colores.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: 'Una página web se diseña utilizando HTML y CSS para especificar los colores de primer plano y de fondo. El usuario establece sus propios colores en Internet Explorer 7 y puede ver el contenido con los colores de fondo y de primer plano elegidos.'
        },
        {
            title: 'Ejemplo 2:',
            resume: 'Una página web se diseña utilizando HTML y CSS. Hay un enlace en la página a instrucciones sobre cómo configurar colores en varios navegadores.'
        }
    ],
    
    relTech: [ 'none'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Abra la página web en un navegador que permita a los usuarios cambiar los colores del contenido HTML.'
                },
                {
                    order: 2,
                    task: 'Cambie los colores de primer plano y de fondo en la configuración del navegador para que sean diferentes a los especificados en el contenido.'
                },
                {
                    order: 3,
                    task: 'Vuelva a la página y compruebe que los nuevos colores de fondo y texto de primer plano especificados en el navegador anulan los colores especificados en el contenido.'
                }
            ],
            
            results: 'La verificación #3 es verdadera.'
        }
    ]
}