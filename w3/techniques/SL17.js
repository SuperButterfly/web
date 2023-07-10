export const data = {
  name: 'SL17',

  type: 'silverlight',

  relation: ['1.1.1'],

  applicability: [
    'Microsoft Silverlight, versiones 3 y superiores',
    'Modelo de programación administrado de Silverlight y Silverlight XAML'
  ],

  resume:
    'Esta técnica consiste en reemplazar un elemento multimedia Silverlight con contenido no multimedia alternativo estático que está ubicado en la misma región de la interfaz de usuario o en una cercana. El contenido alternativo se activa con un control para mostrar el contenido alternativo estático, que suele ser un control que muestra texto o un elemento de texto. Esta técnica aborda el Criterio de Conformidad 1.2.1 y 1.2.3.',

  example: [
    {
      title:
        'Ejemplo 1: MediaElement reproduciendo audio, reemplazar con transcripción',
      resume:
        'Este ejemplo tiene una definición de interfaz de usuario en XAML y una lógica de interacción en C#. En este caso, MediaElement no tiene representación visual y tiene un tamaño de 0x0 porque solo reproduce audio. Como marcador de posición simple, este ejemplo muestra el texto "Audio de la Biblioteca del Congreso" para representar el elemento multimedia como algo visible en la interfaz de usuario. Además de los controles Reproducir/Detener, esta interfaz incluye un botón Mostrar transcripción. Al activar el botón, se muestra texto estático que representa la transcripción del audio. La siguiente es la interfaz de usuario básica en XAML.',
      code: '<UserControl x:Class="ReplaceAudioWithTranscriptText.MainPage" xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-espacio de nombres:System;assembly=mscorlib"> <UserControl.Resources> <sys:String x:Key="transSpeakerName">Matt Raymond: </sys:String> <sys:String x:Key="transText">Soy Matt Raymond de la Biblioteca del Congreso.</sys:cadena> </UserControl.Recursos> <StackPanel x:Name="LayoutRoot" Background="Blanco" > <TextBlock FontSize="30" Foreground="Blue">Audio de la Biblioteca del Congreso</TextBlock> <MediaElement Source="/locintro.wma" AutoPlay="False" Name="player" Height="0" /> <Orientación del panel de pila="Horizontal" Name="Barra de control"> <Button Name="Reproducir" Click="Reproducir_Click">Reproducir</Button> <Button Name="Stop" Click="Stop_Click">Stop</Button> <Button Name="TextAlt" Click="TextAlt_Click">Mostrar transcripción</Button> </StackPanel> </StackPanel> </Control de usuario>'
    }
  ],

  relTech: ['none'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Con un navegador compatible con Silverlight, abra una página HTML que haga referencia a una aplicación de Silverlight a través de una etiqueta de objeto. Esa aplicación tiene contenido de medios de solo audio y se espera que proporcione una alternativa de texto, o tiene medios que se espera que se reemplacen por completo con una transcripción o una alternativa de texto similar.'
        },
        {
          order: 2,
          task: 'Busque un control que indique que al activarlo se proporcionará contenido alternativo estático para los medios. Activa el mando.'
        },
        {
          order: 3,
          task: 'Verifique que el control de medios se reemplace con contenido alternativo y que las tecnologías de asistencia representen el cambio en la interfaz de usuario.'
        }
      ],

      results: 'La verificación #3 es verdadera.'
    }
  ]
}
