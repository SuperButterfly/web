export const data = {
  name: 'G180',

  type: 'general',

  relation: ['2.2.1'],

  applicability: 'Todas las tecnologías',

  resume:
    'El objetivo de esta técnica es dar a las personas con discapacidad suficiente tiempo para completar tareas que les pueden llevar más tiempo que alguien sin esos desafíos. Algún mecanismo, como una configuración de preferencias o un control en la página, permite al usuario cambiar los límites de tiempo a al menos 10 veces el límite de tiempo predeterminado. Preferiblemente, el mecanismo tendría un ajuste variable que permitiera al usuario cambiar el límite de tiempo a cualquier valor dentro de su rango, pero también podría proporcionar formas de cambiar el límite de tiempo en incrementos discretos. El usuario cambia el límite de tiempo al inicio de su sesión, antes de cualquier actividad que tenga límite de tiempo.',

  example: [
    {
      title: 'Ejemplo 1:',
      resume:
        'Una aerolínea tiene una aplicación de compra de boletos en línea. Por defecto, la aplicación tiene un límite de tiempo de 1 minuto para cada paso del proceso de compra. Al comienzo de la sesión, una página web incluye información que dice: "Esperamos que los usuarios tarden un minuto en completar cada paso del proceso de compra. ¿Le gustaría ajustar el límite de tiempo?" seguido de varios botones de opción "1 minuto, 2 minutos, 5 minutos, 10 minutos".'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Una aplicación de correo electrónico basada en la web cierra automáticamente la sesión de los usuarios cuando no ha habido actividad durante 30 minutos. La aplicación incluye una preferencia que permite a los usuarios ajustar la cantidad de tiempo a cualquier valor.'
    }
  ],

  relTech: ['G133'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Verifique si existe un mecanismo para establecer el límite de tiempo en 10 veces el límite de tiempo predeterminado.'
        },
        {
          order: 2,
          task: 'Cambie el límite de tiempo a un nuevo valor que sea 10 veces el límite de tiempo predeterminado.'
        },
        {
          order: 3,
          task: 'Realiza una acción que tiene un límite de tiempo.'
        },
        {
          order: 4,
          task: 'Espere hasta que haya pasado el límite de tiempo predeterminado.'
        },
        {
          order: 5,
          task: 'Compruebe que el límite de tiempo no vence hasta que haya pasado el límite especificado en el paso 2.'
        }
      ],

      results: 'Las comprobaciones n.º 1 y n.º 5 son verdaderas.'
    }
  ]
}
