export const data = {
    name: 'G105',
    
    type: 'general',
    
    relation: [ '2.2.5' ],
    
    applicability: 'Páginas web que requieren autenticación de usuario y limitan el tiempo disponible para el envío de datos.',
    
    resume: 'Los servidores web a veces requieren la autenticación del usuario y pueden finalizar la sesión si no hay actividad. Si esto sucede, los datos se almacenan temporalmente en un caché para cuando el usuario vuelva a iniciar sesión, y el formulario se procesará como si nunca hubiera habido un tiempo de sesión. El caché solo se mantiene durante el tiempo suficiente para garantizar el éxito de una sola sesión de usuario, como un día.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: 'Un usuario inicia sesión para usar un foro y responde a una publicación. El tiempo que se tarda en escribir la respuesta es superior al tiempo permitido por el servidor para una sesión de inactividad. El usuario envía la respuesta y se le informa del tiempo de espera y se le solicita que inicie sesión nuevamente para enviar la respuesta. El servidor conserva la respuesta de la publicación del usuario y, si el inicio de sesión del usuario se realiza correctamente, la respuesta se procesa con normalidad. Si el inicio de sesión no se puede completar con éxito, la respuesta se descarta.'
        },
        {
            title: 'Ejemplo 2:',
            resume: 'Un usuario inicia sesión en un área segura y completa un formulario. La sesión se agota por motivos de seguridad. El servidor retiene los datos del formulario y se informa al usuario del tiempo de espera y se le solicita que inicie sesión nuevamente. Si el usuario inicia sesión correctamente, el formulario se presenta al usuario con todos los datos ingresados ​​previamente y el usuario puede enviar el formulario. Si el inicio de sesión no se puede completar con éxito, los datos del formulario se descartan.'
        }
    ],
    
    relTech: ['G181'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Inicie sesión y comience la actividad cronometrada.'
                },
                {
                    order: 2,
                    task: 'Permita que la sesión termine.'
                },
                {
                    order: 3,
                    task: 'Envíe los datos.'
                },
                {
                    order: 4,
                    task: 'Vuelva a autenticarse.'
                },
                {
                    order: 5,
                    task: 'Verifique que el proceso pueda continuar y completarse sin pérdida de datos, incluidos los datos originales y cualquier cambio realizado después de la reautenticación.'
                },
            ],
            
            results: 'Las comprobacion #5 es verdadera.'
        }
    ]
}