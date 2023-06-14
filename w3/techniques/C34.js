export const data = {
    name: 'C34',
    
    type: 'css',
    
    relation: ['1.4.10'],
    
    applicability: 'Todas las tecnologias que soporten CSS y Html',
    
    resume: 'La técnica de regiones pegajosas permite presentar contenido con encabezados y pies de página fijos cuando hay suficiente espacio. Esto se logra mediante el uso de consultas de medios min-heighty max-heightque se adaptan al espacio disponible de la ventana gráfica. Desactivar o desarmar estas regiones es una forma efectiva de permitir suficiente espacio disponible para los usuarios que prefieren diferentes preferencias de lectura y zoom. Sin embargo, estas regiones pueden crear desventajas para los usuarios de teclados, por lo que deben usarse con cuidado.',
    
    example: [
        {
            title: 'Ejemplo 1: desarreglar encabezados/pies de página fijos en HTML y CSS',
            resume: 'El siguiente ejemplo usa HTML y CSS para corregir encabezados/pies de página adhesivos. Las regiones pegajosas se desarman cuando la altura de la ventana gráfica se limita o se cambia la orientación. Cuando la min-heightpropiedad coincide con el espacio de la ventana gráfica definido a través de consultas de medios, las regiones que no son pegajosas se arreglan o viceversa. Este ejemplo en particular usa las propiedades CSS min-heighty media query.max-heightmin-width',
            code:'<html lang="en"><head><meta charset="UTF-8"><title>Using media queries to un-fix sticky headers / footers</title><style>header { min-height: 130px; } @media (min-height: 480px) { header { position: -webkit-sticky; position: sticky; top: 0; } } @media (min-device-width: 576px) and (max-device-width: 1024px) and (orientation: landscape) { header { position: static; } } footer { min-height: 130px; } @media (min-height: 480px) { footer { position: -webkit-sticky; position: sticky; bottom: 0; } } @media (min-device-width: 576px) and (max-device-width: 1024px) and (orientation: landscape)  { footer { position: static; } }</style></head><body class="grid"><header role="banner" class="grid-item">...</header><main role="main" class="grid-item">...</main><aside role="complementary" class="grid-item">...</aside><footer role="contentinfo" class="grid-item">...</footer></body></html>'
        }
    ],
    
    relTech: [ 'none'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Mostrar contenido en un dispositivo/agente de usuario en modo vertical.'
                },
                {
                    order: 2,
                    task: 'Cambia la orientación a horizontal.'
                },
                {
                    order: 3,
                    task: 'Compruebe si el encabezado y el pie de página fijos no se corregirán en función de la configuración de consulta de medios existente.'
                },
                {
                    order: 4,
                    task: 'Muestre contenido en un escritorio/agente de usuario con un ancho de ventana inicial de 1280 x 1024 píxeles CSS.'
                },
                {
                    order: 5,
                    task: 'Cambie el tamaño de la ventana gráfica en ancho y alto o use la función de zoom del navegador.'
                },
                {
                    order: 6,
                    task: 'Compruebe si el encabezado y el pie de página fijos se corregirán en tamaños específicos según la configuración de consulta de medios existente.'
                }
            ],
            
            results: '#3 y #6 son verdaderas.'
        }
    ]
}