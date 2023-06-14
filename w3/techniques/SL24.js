export const data = {
    name: 'SL24',
    
    type: 'silverlight',
    
    relation: [ '1.3.2' ],
    
    applicability: ['Microsoft Silverlight, versiones 3 y superiores','Modelo de programación administrado de Silverlight y Silverlight XAML'],
    
    resume: 'La técnica de AutoPlaypropiedad se utiliza para prevenir la reproducción automática de medios en el MediaElementobjeto. Esto se logra estableciendo AutoPlayen false, y proporcionando controles de interfaz de usuario pertinentes que permitan al usuario controlar los medios, como reproducir, pausar o detener. Esto garantiza una mejor experiencia de accesibilidad para los usuarios.',
    
    example: [
        {
            title: 'Ejemplo 1: configurar la reproducción automática en falso y proporcionar los controles típicos de MediaElement en la interfaz de usuario',
            resume: 'Este ejemplo tiene una definición de interfaz de usuario en XAML y una lógica de interacción en C#. La siguiente es la interfaz de usuario básica en XAML. Tenga en cuenta la configuración de reproducción automática = "falso".',
            code: '<UserControl x:Class="MediaElementControlsAutoPlay.MainPage" xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"><Grid x:Name="LayoutRoot"><Grid.Definiciones de columna><Ancho de definición de columna="*"/><Ancho de definición de columna="*"/><Ancho de definición de columna="*"/></Grid.Definiciones de columna><Definiciones de cuadrícula.Fila><Altura de definición de fila="*"/><RowDefinition Height="Auto"/></Grid.RowDefinitions><Elemento multimedia x:Nombre="medios" Fuente="/xbox.wmv" Ancho="300" Altura="300" Cuadrícula.Columna="0" Cuadrícula.Row="0" Cuadrícula.ColumnaSpan="3" Reproducción automática="Falso" AutomationProperties.Name="Video del nuevo juego Fable para XBox"/><Haga clic en el botón="Detener medios" Grid.Column="0" Grid.Row="1" Content="Stop"/><Haga clic en el botón="Pausar medios" Cuadrícula.Columna="1" Cuadrícula.Row="1" Contenido="Pausa"/><Clic en botón="PlayMedia" Cuadrícula.Columna="2" Cuadrícula.Row="1" Contenido="Reproducir"/></Grid></Control de usuario>    private void StopMedia(object sender, RoutedEventArgs e) { media.Stop(); } private void PauseMedia(object sender, RoutedEventArgs e) { media.Pause(); } private void PlayMedia(object sender, RoutedEventArgs e) { media.Play(); }'
        }
    ],
    
    relTech: [ 'SL17'],
    
     
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Con un navegador compatible con Silverlight, abra una página HTML que haga referencia a una aplicación de Silverlight a través de una etiqueta de objeto. Se espera que la aplicación use un MediaElementobjeto para reproducir medios pregrabados.'
                },
                {
                    order: 2,
                    task: 'Verifique que los medios no se reproduzcan automáticamente tan pronto como la aplicación se cargue y se muestre. Más bien, al usuario se le presenta una interfaz de usuario que puede iniciar los medios según la acción del usuario.'
                }
            ],
            
            results: 'La verificación #2 es verdadera.'
        }
    ]
}