export const data = {
  name: 'G171',

  type: 'general',

  relation: ['1.4.2'],

  applicability: 'Todas las tecnologías que pueden reproducir sonido.',

  resume:
    'La intención de esta técnica es permitir que un usuario controle el uso de sonidos en el contenido web. A alguien que usa un lector de pantalla le puede resultar muy molesto y difícil escuchar su lector de pantalla si también hay sonidos provenientes del contenido web. Proporcionar una forma de reproducir sonidos solo a pedido le dará al usuario el control necesario para escuchar cualquier sonido u otro audio sin interferir con la salida de un lector de pantalla.',

  example: [
    {
      title: 'Ejemplo 1',
      resume:
        'Una página web de una sociedad de conservación de ballenas grises tiene un sonido de fondo continuo del canto de las ballenas grises. También hay sonidos de salpicaduras de agua. Los sonidos no se inician automáticamente. En su lugar, el contenido web proporciona un enlace en la parte superior de la página para permitir que el usuario inicie los sonidos manualmente. El botón dice "Activar sonidos". Después de presionar el botón "activar sonidos", se escuchan los sonidos. Luego, al usuario se le presenta una opción para "desactivar los sonidos".'
    },
    {
      title: 'Ejemplo 2:',
      resume:
        'Se proporciona un enlace a un archivo de sonido que incluye los sonidos de las ballenas grises. El texto del enlace dice: "Escucha el canto de la ballena gris (mp3)".'
    }
  ],

  relTech: ['G60', 'G170'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Cargue una página web que se sabe que contiene sonidos que se reproducen durante 3 segundos o más.'
        },
        {
          order: 2,
          task: 'Compruebe que no se reproduzca ningún sonido automáticamente.'
        },
        {
          order: 3,
          task: 'Verifique que haya una manera para que un usuario inicie los sonidos manualmente.'
        }
      ],

      results: 'La verificación #3 es verdadera.'
    }
  ]
}
