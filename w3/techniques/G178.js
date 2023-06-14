export const data = {
    name: 'G178',
    
    type: 'general',
    
    relation: [ '1.4.4' ],
    
    applicability: 'Cualquier tecnología ',
    
    resume: ' La técnica de aumento de letra proporciona mecanismos para facilitar el aumento de letra en una página web. Esto es especialmente útil para personas con baja visión, discapacidades cognitivas y usuarios mayores. Esta técnica ofrece un control para aumentar gradualmente el tamaño del texto en la página hasta al menos el 200 % del tamaño predeterminado. Esto se logra a través de enlaces, botones y scripts. Los controles deben ser fáciles de encontrar mediante tamaño de texto más grande, alto contraste, etc. Esta técnica también se puede usar en código heredado.',
    
    example: [
        {
            title: 'Ejemplo 1:',
            resume: 'Un artículo de periódico tiene dos botones cerca de la parte superior de la página. El botón "aumentar el tamaño del texto" tiene una letra "T" grande con una flecha hacia arriba y el botón "disminuir el tamaño del texto" tiene una letra "T" pequeña con una flecha hacia abajo. Hay alt texto en cada botón.'
        },
        {
            title: 'Ejemplo 2:',
            resume: 'Un sitio tiene varias hojas de estilo con diferentes tamaños de texto. El usuario puede elegir cualquiera de las hojas de estilo si su navegador proporciona esta funcionalidad. Cada página también incluye los enlaces "Aumentar el tamaño del texto" y "Disminuir el tamaño del texto" que cambiarán la hoja de estilo aplicada actualmente a la hoja de estilo alternativa adecuada.'
        },
        {
            title: 'Ejemplo 3:',
            resume: 'Un sitio incluye el texto "Cambiar tamaño de texto:" seguido de enlaces de texto "Arriba" y "Abajo" en cada página web. Los enlaces activan un Javascript que altera el valor de la propiedad de tamaño de texto en consecuencia.'
        },
        {
            title: 'Ejemplo 2:',
            resume: 'Un sitio incluye un enlace en cada página que dice "Cambiar el tamaño del texto". La página resultante incluye una serie de enlaces que incluyen opciones que representan los tamaños disponibles. Los enlaces dicen: "Tamaño de fuente más pequeño", "Tamaño de fuente pequeño", "Tamaño de fuente predeterminado", "Tamaño de fuente grande", etc. Las instrucciones que preceden a la lista dirigen a los usuarios a elegir un enlace para cambiar al tamaño de fuente deseado.'
        },
        
    ],
    
    relTech: [ 'none'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Establezca el tamaño de la ventana gráfica en 1024 px por 768 px o más.'
                },
                {
                    order: 2,
                    task: 'Aumente el tamaño del texto y verifique si el tamaño del texto aumentó.'
                },
                {
                    order: 3,
                    task: 'Compruebe que el tamaño del texto se puede aumentar al 200% del tamaño original.'
                },
                {
                    order: 4,
                    task: 'Verifique que después de aumentar el tamaño del texto al 200% del tamaño original, no haya pérdida de contenido o funcionalidad (por ejemplo, ninguna parte del texto está recortada, los cuadros no se superponen, los controles no están oscurecidos o separados de sus etiquetas, etc.). ).'
                },
                {
                    order: 5,
                    task: 'Disminuya el tamaño del texto a su valor predeterminado y compruebe si, de hecho, volvió al tamaño predeterminado.'
                }
            ],
            
            results: 'Las comprobaciones n.º 2, n.º 3, n.º 4 y n.º 5 son verdaderas.'
        }
    ]
}