export const data = {
  name: 'SL17',

  type: 'silverlight',

  relation: ['1.1.1'],

  applicability: [
    'Microsoft Silverlight, versiones 3 y superiores',
    'Modelo de programación administrado de Silverlight y Silverlight XAML'
  ],

  resume: `Esta técnica explica cómo usar HTML Lang en etiquetas de objeto para describir cada instancia de complemento de Silverlight en la página de alojamiento HTML como una parte con un idioma diferente. Esto ayuda a las tecnologías de asistencia a tratar todo el contenido de Silverlight como si usara el lenguaje HTML Lang declarado. Para admitir diferentes partes del idioma que contienen contenido de Silverlight, los autores declaran una etiqueta de objeto de Silverlight por región continua de la parte del idioma en el HTML.
             <body>
               <object type="application/x-silverlight-2" lang="en">
               </object>
               <object type="application/x-silverlight-2" lang="de">
               </object>
             </body>
    
    `,

  example: [
    {
      title:
        'Ejemplo 1: dos etiquetas de objeto de Silverlight, cada una con un idioma HTML diferente, para admitir una aplicación de traducción de idiomas simple como una página web',
      resume: `
              La solución de Visual Studio para este ejemplo tiene un total de 4 componentes de proyecto:

            El proyecto web que declara la página HTML o ASP que muestra el marco de cómo existen las dos etiquetas de objeto de Silverlight en una página. Aquí es donde realmente se establece HTML Lang.
            Un proyecto para el control de usuarios en inglés, un simple TextBox.
            Un proyecto para un control de usuario alemán, también un simple TextBox.
            Una biblioteca con una función de traducción estática
            En este ejemplo, el control de usuario en inglés implementa LocalMessageSender, que envía mensajes asincrónicos al control de usuario en alemán. El control de usuario alemán tiene un LocalMessageReceiver, que está configurado para escuchar tan pronto como se crea una instancia del control. Cuando se recibe un mensaje, el control alemán llama a una función de la biblioteca de traducción y muestra el texto traducido.
            
            La siguiente es la página HTML (se omiten algunas infraestructuras y parámetros para mayor claridad):
            
            <html xmlns="http://www.w3.org/1999/xhtml" > 
            <cuerpo> 
            
                <objeto de datos="datos:aplicación/x-silverlight-2," type="aplicación/x-silverlight-2" width="100%" height="25px" lang="en"> 
                  <param name="source" value="ClientBin/SilverFish.xap"/> 
                </object> 
            
                <object data="data:application/x- silverlight-2," type="application/x-silverlight-2" width="100%" height="25px" lang="de"> <param name="source" value="ClientBin/SilverFish_DE.xap" 
                  / > 
                </objeto> 
            
            </cuerpo> 
            </html>
            El siguiente es el XAML para el control de usuario en inglés:
            
            <UserControl x:Class="SilverFish.MainPage" 
               xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" 
               xmlns:x="http://schemas.microsoft.com/winfx/2006 /xaml" Height="20" 
            > 
               <Grid x:Name="LayoutRoot" Background="White"> 
                   <TextBox AcceptsReturn="False" Language="en-us" 
                   Name="EnglishTranslationBox" 
                   LostFocus="EnglishTranslationBox_LostFocus"/> 
               </Grid> 
            </UserControl>
            El siguiente es el código subyacente para el control de usuario en inglés:
            
               Clase parcial pública MainPage: UserControl 
               { 
                   private LocalMessageSender messageender; 
                   página principal pública() 
                   { 
                       InitializeComponent(); 
                   } 
                   private void EnglishTranslationBox_LostFocus(objeto remitente, RoutedEventArgs e) 
                   { 
                       messageender = new LocalMessageSender("receiver"); 
                       Messagesender.SendAsync((remitente como TextBox).Text); 
                   } 
               }
               
            El siguiente es el código subyacente para el control de usuario alemán (el XAML es mínimo; el principal punto relevante es que contiene un TextBoxdestino denominado GermanTranslationBox). El código invoca la función de traducción que se encuentra en una biblioteca separada. La función de traducción no se muestra, simplemente toma una cadena en inglés y devuelve una traducción al alemán.
            
               clase parcial pública MainPage: UserControl 
               { 
                   public MainPage() 
                   { 
                       InitializeComponent(); 
                       LocalMessageReceiver lmr = new LocalMessageReceiver("receptor"); 
                       lmr.MessageReceived += new EventHandler<MessageReceivedEventArgs>(lmr_MessageReceived); 
                       prueba 
                       { 
                           lmr.Listen(); 
                       } 
                       catch (ListenFailedException) {} 
                   } 
                   void lmr_MessageReceived(objeto remitente, MessageReceivedEventArgs e) 
                   { 
                       if (e.Message!="") { 
                           Cadena traducida;
                           traducido = Traductor.TraducirEso(e.Mensaje); 
                           GermanTranslationBox.Text = traducido; 
                           GermanTranslationBox.Focus(); 
                       } 
               } 
                   }`
    }
  ],

  relTech: ['SL27', 'H58'],

  tests: [
    {
      procedure: [
        {
          order: 1,
          task: 'Con un navegador compatible con Silverlight, abra una página HTML que haga referencia a varias etiquetas de objetos de Silverlight, cada una con diferentes valores de idioma HTML.'
        },
        {
          order: 2,
          task: 'Verifique que la configuración de idioma a través de HTML Lang en las etiquetas de objetos sea respetada por las tecnologías de asistencia que pueden usar los valores de HTML Lang para determinar el idioma de las piezas.'
        }
      ],

      results: 'La verificación #2 da los resultados esperados.'
    }
  ]
}
