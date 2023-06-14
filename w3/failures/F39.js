export const data = {
    name: 'F38',
    
    type: 'failure',
    
    relation: [ '1.1.1' ],
    
    applicability: 'HTML and XHTML',
    
    resume: 'Las imágenes que no transmiten un significado como decoración o para espaciar el contenido deben tener una alternativa de texto nulo para que las tecnologías de asistencia las ignoren, evitando así una falla de conformidad con el Criterio.',
    
    example: [
        {
            title: 'Ejemplo 1: Imágenes decorativas que no tienen altatributo',
            resume: 'La imagen usada como espaciador no cumple con el Criterio de Conformidad, ya que el texto alternativo no tiene un propósito equivalente. Los lectores de pantalla anuncian el texto alternativo "espaciador", pero la imagen debe ignorarse.',
            code: '<div>Tipo de árbol: <img src="spacer.gif" width="100" height="1" alt="spacer"/>Cedrus deodara</div>'
        }
    ],
    
    relTech: [ 'H37', 'C9', 'F38'],
    
    tests:[
         {
            procedure :[   
                {
                    order: 1,
                    task: 'Identifique cualquier elemento img que se use para decoración, espaciado u otro propósito que no sea parte del contenido significativo de la página.'
                },
                {
                    order: 2,
                    task: 'Verifique que el atributo alt para estos elementos sea nulo.'
                }
            ],
            
            results: 'Si el paso n.° 2 es falso, se aplica esta condición de falla y el contenido falla el Criterio de Conformidad.'
        }
    ]
}