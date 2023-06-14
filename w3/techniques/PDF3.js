export const data = {
    name: 'PDF3',
    
    type: 'PDF',
    
    relation: [ '1.3.2', '2.1.1', '2.4.3' ],
    
    applicability: ['Documentos PDF etiquetados'],
    
    resume: 'La técnica de orden de lectura asegura que el contenido de un documento PDF está ordenado de forma lógica para que los usuarios puedan navegar por él. Esto se logra mediante la etiquetación del documento con una herramienta para crear archivos PDF y corrigiendo los errores de orden de tabulación mediante herramientas de reparación como Acrobat Pro. Esta técnica garantiza que los usuarios puedan navegar correctamente por el contenido del documento PDF, incluidos los campos de formulario.',
    
    example: [
        {
            title: 'Ejemplo 1: Crear un documento de 2 columnas usando Microsoft Word 2007',
            resume: 'Este ejemplo tiene una definición de interfaz de usuario en XAML y una lógica de interacción en C#. En este caso, MediaElement no tiene representación visual y tiene un tamaño de 0x0 porque solo reproduce audio. Como marcador de posición simple, este ejemplo muestra el texto "Audio de la Biblioteca del Congreso" para representar el elemento multimedia como algo visible en la interfaz de usuario. Además de los controles Reproducir/Detener, esta interfaz incluye un botón Mostrar transcripción. Al activar el botón, se muestra texto estático que representa la transcripción del audio. La siguiente es la interfaz de usuario básica en XAML.',
            image: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/word-col-tool.jpg'
        },
        {
            title: 'Ejemplo 2: Crear un documento de 2 columnas usando OpenOffice.org Writer 2.2',
            resume: 'Este ejemplo se muestra con OpenOffice.org Writer. Hay otras herramientas de software que realizan funciones similares. Consulte la lista de otras herramientas de software en. Los documentos de varias columnas creados con la herramienta Formato > Columnas... de OpenOffice.org Writer suelen estar en el orden de lectura correcto cuando se convierten a PDF etiquetado. La siguiente imagen muestra la herramienta Columnas de Writer.',
            image: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/oo-2col-tool.jpg'
        },
        {
            title: 'Ejemplo 3: Configuración del orden de tabulación para una o más páginas con Adobe Acrobat 9 Pro',
            resume: 'Este ejemplo se muestra con Adobe Acrobat Pro. Hay otras herramientas de software que realizan funciones similares. Consulte la lista de otras herramientas de software en.',
            image: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/page-props.jpg'
        },
        {
            title: 'Ejemplo 4: Reparación del orden de lectura usando el panel Etiquetas en Adobe Acrobat 9 Pro',
            resume: 'Este ejemplo se muestra con Adobe Acrobat Pro. Hay otras herramientas de software que realizan funciones similares. Consulte la lista de otras herramientas de software en Herramientas de creación de PDF que brindan soporte de accesibilidad (http://trace.wisc.edu/wcag_wiki/index.php?title=PDF_Technology_Notes). En la siguiente imagen, el orden de lectura es correcto para el texto y el encabezado. Es decir, los elementos de contenido H1y H2se han cambiado al orden de lectura correcto.',
            image: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/tab-order.jpg'
        }
    ],
    
    relTech: [ 'G57', 'G59', 'G202'],
    
     
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Verifique que el contenido esté en el orden de lectura correcto mediante uno de los siguientes:',
                    suborder: ['Lea el documento PDF con un lector de pantalla o una herramienta que lea en voz alta, escuchando para escuchar que cada elemento se lee en el orden correcto.', 'Utilice una herramienta que exponga el documento a través de la API de accesibilidad y verifique que el orden de lectura sea el correcto.']
                },
                {
                    order: 2,
                    task: 'Verifique que el orden de tabulación sea correcto para el contenido enfocable mediante uno de los siguientes:',
                    suborder: ['Use la tecla de tabulación para recorrer el orden de enfoque en el documento.', 'Utilice una herramienta que sea capaz de mostrar la entrada del objeto de página que especifica la configuración del orden de tabulación para abrir el documento PDF y ver la configuración.']
                }
            ],
            
            results: '#1 y Verificación #2 son verdaderos.'
        }
    ]
}