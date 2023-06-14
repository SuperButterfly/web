export const data = {
    name: 'C38',
    
    type: 'css',
    
    relation: [ '1.4.10' ],
    
    applicability: 'Todas las tecnologias que soporten CSS',
    
    resume: 'Esta técnica ayuda a evitar el desplazamiento horizontal al ajustar el tamaño de etiquetas e insumos en diseños receptivos, usando propiedades de Flexbox y de ancho para adaptarse al espacio disponible y a los niveles de zoom. Esto garantiza que el contenido se ajuste a la ventana gráfica sin salirse del área de diseño.',
    
    example: [
        {
            title: 'Ejemplo 1: Ajuste de etiquetas, entradas y diseño de flexbox con HTML y CSS.',
            resume:'El siguiente ejemplo usa HTML y CSS para ajustar etiquetas y entradas dentro de varios contenedores de ancho, incluida la ventana gráfica. Las regiones de diseño ajustan su tamaño a medida que se ajusta la ventana gráfica. Posteriormente, las etiquetas y las entradas ajustan su tamaño para adaptarse a los contenedores de la región de diseño. El nivel de zoom se puede aumentar al 400% sin necesidad de desplazamiento horizontal. Este ejemplo en particular usa un tamaño porcentual para el widthy max-widthpara las etiquetas y entradas. se max-widthaplica para corregir los elementos que se derraman fuera de la cuadrícula de forma cruzada, ya que los elementos reemplazados selecttienen un tamaño intrínseco.',
            code: '<style>.form-group{display:flex;flex-flow:row wrap;margin:0 -1rem 1rem -1rem;}[class*="form-col"]{flex:0 1 100%;padding:0 1rem;}@media (min-width: 576px){.form-col-4{flex:0 0 33.33333%;max-width:33.33333%;}.form-col-8{flex:0 0 66.66667%;max-width:66.66667%;}.offset-form-col-4{margin-left:33.33333%;}}input{display:block;width:100%;}label,select{display:block;width:100%;max-width:100%;}</style><div class="form-group"><div class="form-col-4"><label for="fname">First Name</label></div><div class="form-col-8"><input type="text" id="fname" autocomplete="given-name"></div></div><div class="form-group"><div class="form-col-4"><label for="lname">Last Name</label></div><div class="form-col-8"><input type="text" id="lname" autocomplete="family-name"></div></div><div class="form-group"><div class="form-col-4"><label for="favorite-fruit">Favorite fruit</label></div><div id="favorite-fruit" class="form-col-8"><select><option>Banana</option><option>Pineapple</option><option>Strawberry</option></select></div></div><div class="form-group"><div class="offset-form-col-4 form-col-8"><button>Submit</button></div></div>'
        }
    ],
    
    relTech: [ 'none'],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Muestre la página web en un agente de usuario con capacidad de zoom del 400 % y establezca las dimensiones de la ventana gráfica (en píxeles CSS) en 1280 de ancho y 1024 de alto.'
                },
                {
                    order: 2,
                    task: 'Ampliar en un 400%.'
                },
                {
                    order: 3,
                    task: 'Para contenido de desplazamiento vertical, todas las etiquetas y entradas caben en su espacio disponible sin desplazamiento horizontal.'
                }
            ],
            
            results: 'La verificación #3 es verdadera'
        }
    ]
}