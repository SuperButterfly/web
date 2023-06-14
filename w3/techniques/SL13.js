export const data = {
    name: 'SL13',
    
    type: 'silverlight',
    
    relation: [ 'none' ],
    
    applicability: ['Microsoft Silverlight, versiones 3 y superiores','Modelo de programación administrado de Silverlight y Silverlight XAML'],
    
    resume: 'Esta técnica se usa para incorporar opciones de color de alto contraste en un diseño visual de interfaz de usuario de Silverlight. Se puede lograr cambiando los valores de estilos y plantillas de XAML, y cambiando valores de recursos individuales como pinceles o colores. Silverlight ofrece una propiedad integrada para determinar si el sistema operativo de alojamiento utiliza un tema de alto contraste, y Silverlight Toolkit proporciona API de temas y estilos temáticos para los controles de Silverlight. El tema System Colors se alinea con los pinceles o colores de la configuración de Windows, permitiendo que la aplicación Silverlight use los mismos colores de alto contraste que el usuario selecciona.',
    
    example: [
        {
            title: 'Ejemplo 1: aplicación Silverlight diseñada con recursos de pincel y recursos de plantilla que permiten un cambio de alto contraste',
            resume: 'Este ejemplo tiene una definición de interfaz de usuario en XAML y una lógica de interacción en C#. En este caso, MediaElement no tiene representación visual y tiene un tamaño de 0x0 porque solo reproduce audio. Como marcador de posición simple, este ejemplo muestra el texto "Audio de la Biblioteca del Congreso" para representar el elemento multimedia como algo visible en la interfaz de usuario. Además de los controles Reproducir/Detener, esta interfaz incluye un botón Mostrar transcripción. Al activar el botón, se muestra texto estático que representa la transcripción del audio.',
        },
        {
            title: 'Ejemplo 2: use SystemParameters.HighContrast para detectar la configuración de alto contraste del sistema al iniciar la aplicación',
            resume: 'Este ejemplo usa la misma interfaz de usuario y definiciones de estilo que el ejemplo anterior. La única adición es una declaración de caso que se agrega al constructor de la página principal de la interfaz de usuario (definida en C#). El código agregado es todo lo que no sea la llamada InitializeComponent() (que es parte de la infraestructura de Silverlight). Tenga en cuenta que el código agregado llama a una función definida por el usuario ChangeToHighCon(), que es la misma función y comportamiento que se muestra en el ejemplo 1 para el cambio de alto contraste iniciado por el usuario.',
            code: 'public MainPage() { InitializeComponent(); if (SystemParameters.HighContrast) { ChangeToHighCon(); } }'
        }
    ],
    
    relTech: [ 'G174'],
    
     
    tests:['none']
}