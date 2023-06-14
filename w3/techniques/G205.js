export const data = {
    name: 'G205',
    
    type: 'general',
    
    relation: [ '1.4.1' ],
    
    applicability: 'Todas las tecnologías que admiten color y texto.',
    
    resume: 'El objetivo de esta técnica es combinar color y texto o señales de caracteres para transmitir información. La mayoría de los usuarios pueden escanear rápidamente el contenido para localizar la información transmitida mediante el uso de diferencias de color. Los usuarios que no pueden ver el color pueden mirar o escuchar las señales de texto; las personas que usan pantallas Braille u otras interfaces táctiles pueden detectar señales de texto al tacto. La indicación de texto debe incluirse como parte del nombre determinable mediante programación para el control.',
    
    example: [
        {
            title: 'Ejemplo 1: campos obligatorios en un formulario HTML',
            resume: 'Las instrucciones para un formulario en línea dicen: "Los campos obligatorios se muestran en rojo y están marcados con (obligatorio)". La señal "(obligatorio)" se incluye dentro del elemento de etiqueta.',
            code:'<label for="apellido" class="requerido">Apellido (requerido): </label><input id="apellido" type="text" size="25" value=""/><style type="text/css">.requerido {color:red;}</style>'
        }
    ],
    
    relTech: [ 'G14' ],
    
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Verifique que la misma información esté disponible a través de señales de texto o caracteres.'
                }
              ],
            
            results: 'La verificación #1 es verdadera.'
        }
    ]
}