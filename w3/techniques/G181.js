export const data = {
    name: 'G181',
    
    type: 'general',
    
    relation: [ '2.2.5' ],
    
    applicability: 'Páginas que requieren autenticación de usuario donde el tiempo disponible para enviar datos es limitado.',
    
    resume: 'Esta técnica proporciona una forma de indicar un estado especial en el texto mediante la adición de una señal visual redundante además del color. Estas señales visuales pueden ser cambios en el estilo de la fuente, como subrayados, negrita o cursiva, o cambios en el tamaño de la fuente. Esto proporciona una forma de permitir que los usuarios con poca visión o que no pueden ver las diferencias de color reconozcan estas palabras con un estado especial.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: 'Un usuario ha iniciado sesión para usar un wiki y comienza a editar una página. El tiempo necesario para completar las ediciones supera el tiempo permitido por el servidor para la inactividad de la sesión. Cuando el usuario envía las ediciones, se le notifica que la sesión ha expirado y se le redirige a una página de inicio de sesión. La secuencia de comandos que maneja el envío del formulario original pasa las ediciones como una variable a la página de inicio de sesión y cuando el usuario inicia sesión correctamente, pasa las ediciones del usuario de nuevo a la secuencia de comandos que maneja los envíos de formularios y las ediciones se procesan como si no se hubiera producido el tiempo de espera de la sesión. .',
        },
        {
            title: 'Ejemplo 2:',
            resume: 'Un usuario había iniciado sesión en un sitio de compras seguro y completa parte de la información en un formulario de pedido. Por razones de seguridad, la sesión finaliza después de 30 minutos, pero el usuario no envía el formulario hasta 45 minutos después de cargar la página. Se informa al usuario del tiempo de espera y se le pide que inicie sesión de nuevo. Si el usuario inicia sesión correctamente, el formulario de pedido se presenta al usuario con todos los datos ingresados ​​previamente y el usuario puede revisar su envío y enviar el formulario. Si el inicio de sesión no se completa con éxito, el servidor descarta los datos del formulario.',
        }
    ],
    
    relTech: [ 'G105' ],
    
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
                {
                  order: 6,
                  task: 'Verifique que el proceso utilizado para guardar la información enviada en el paso 3 no esté almacenado en el servidor. (Nota: esto requiere conocimiento de la tecnología y las características utilizadas para implementar la técnica).'
                }
            ],
            
            results: 'Las comprobaciones #5 y #6 son verdaderas.'
        }
    ]
}