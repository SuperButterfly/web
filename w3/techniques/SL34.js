export const data = {
    name: 'SL34',
    
    type: 'silverlight',
    
    relation: [ '1.3.2' ],
    
    applicability: ['Microsoft Silverlight, versiones 3 y superiores','Modelo de programación administrado de Silverlight y Silverlight XAML'],
    
    resume: 'La técnica de secuencia de pestañas de Silverlight utiliza definiciones estructuradas para definir presentaciones de interfaz de usuario, donde el orden de declaración es importante. El modelo de programación Silverlight define una Controlclase que solo permite a un control recibir el foco del teclado. La plataforma de desarrollo de Silverlight crea una secuencia de pestañas para que atraviese los elementos de izquierda a derecha y de arriba a abajo. El autor de una aplicación puede cambiar la secuencia de pestañas estableciendo la Visibilitypropiedad del control, la IsEnabledpropiedad, la IsTabStoppropiedad o la TabIndexpropiedad. El orden de tabulación predeterminado también es de derecha a izquierda para los idiomas que usan el orden de lectura de derecha a izquierda.',
    
    example: [
        {
            title: 'Ejemplo 1: orden de tabulación predeterminado, basado en el orden en StackPanel',
            resume: 'En este ejemplo, a StackPaneltiene un orden de diseño natural de arriba a abajo, y ese también será el orden de tabulación de cada StackPanelelemento secundario (FirstName, luego LastName).',
            code: '<StackPanel Orientation="Horizontal"><TextBlock Name="lbl_FirstName">First name</TextBlock><TextBox AutomationProperties.LabeledBy="{Binding ElementName=lbl_FirstName}" Name="tbFirstName" Width="100"/></StackPanel><StackPanel Orientation="Horizontal"><TextBlock Name="lbl_LastName">First name</TextBlock><TextBox AutomationProperties.LabeledBy="{Binding ElementName=lbl_LastName}" Name="tbLastName" Width="100"/></StackPanel>'
        },
        {
            title: 'Ejemplo 2: Orden de tabulación, modificado por TabIndex',
            resume: 'Un formulario se marca utilizando una tabla de datos que incluye los campos del novio en la primera columna y los campos de la novia en la segunda columna. El orden en el contenido es fila por fila, pero el autor cree que es más lógico que los usuarios naveguen por el formulario columna por columna. De esta manera, todos los criterios del novio se pueden completar antes de pasar a los criterios de la novia. Los TabIndexatributos de los elementos de Silverlight se utilizan para especificar un orden de tabulación que navega columna por columna. Este ejemplo ilustra específicamente cómo cambiar el orden de tabulación puede cambiar la secuencia significativa.',
            code: ' <UserControl x:Class="TabSequence.MainPage" xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"><StackPanel x:Name="LayoutRoot" Background="White"><TextBlock>he first column contains the search criteria of the groom, the second column the search criteria of of the bride</TextBlock><Grid><Grid.RowDefinitions><RowDefinition/><RowDefinition/><RowDefinition/><RowDefinition/></Grid.RowDefinitions><Grid.ColumnDefinitions><ColumnDefinition/><ColumnDefinition/><ColumnDefinition/></Grid.ColumnDefinitions><TextBlock>Search criteria</TextBlock><TextBlock Grid.Column="1">Groom</TextBlock><TextBlock Grid.Column="2">Bride</TextBlock><TextBlock Grid.Row="1">First name</TextBlock><TextBox Grid.Row="1" Grid.Column="1" TabIndex="1"/><TextBox Grid.Row="1" Grid.Column="2" TabIndex="4"/><TextBlock Grid.Row="2">Last name</TextBlock><TextBox Grid.Row="2" Grid.Column="1" TabIndex="2"/><TextBox Grid.Row="2" Grid.Column="2" TabIndex="5"/><TextBlock Grid.Row="3" >Place of birth</TextBlock><TextBox Grid.Row="3" Grid.Column="1" TabIndex="3"/><TextBox Grid.Row="3" Grid.Column="2" TabIndex="6"/></Grid></StackPanel></UserControl>'
        },
        {
            title: 'Ejemplo 3: orden de tabulación, modificado al cambiar las propiedades del control en tiempo de ejecución',
            resume: 'En este ejemplo, una opción de botón de opción en un formulario controla si ciertos otros campos en el formulario son relevantes o no relevantes. La selección del botón de radio actual alterna la IsEnabledpropiedad en dichos campos para habilitarlos o deshabilitarlos en función de cómo el usuario seleccionó el elemento lógico anterior, lo que también afecta si los campos aparecen en la siguiente secuencia de pestañas. La siguiente es la definición de interfaz de usuario en XAML.',
            code: ' <UserControl x:Class="TabSequence.MainPage" xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"><StackPanel x:Name="LayoutRoot" Background="White"><TextBlock>he first column contains the search criteria of the groom, the second column the search criteria of of the bride</TextBlock><Grid><Grid.RowDefinitions><RowDefinition/><RowDefinition/><RowDefinition/><RowDefinition/></Grid.RowDefinitions><Grid.ColumnDefinitions><ColumnDefinition/><ColumnDefinition/><ColumnDefinition/></Grid.ColumnDefinitions><TextBlock>Search criteria</TextBlock><TextBlock Grid.Column="1">Groom</TextBlock><TextBlock Grid.Column="2">Bride</TextBlock><TextBlock Grid.Row="1">First name</TextBlock><TextBox Grid.Row="1" Grid.Column="1" TabIndex="1"/><TextBox Grid.Row="1" Grid.Column="2" TabIndex="4"/><TextBlock Grid.Row="2">Last name</TextBlock><TextBox Grid.Row="2" Grid.Column="1" TabIndex="2"/><TextBox Grid.Row="2" Grid.Column="2" TabIndex="5"/><TextBlock Grid.Row="3" >Place of birth</TextBlock><TextBox Grid.Row="3" Grid.Column="1" TabIndex="3"/><TextBox Grid.Row="3" Grid.Column="2" TabIndex="6"/></Grid></StackPanel></UserControl>'
        }
    ],
    
    relTech: [ 'none'],
    
     
    tests:[
        {
            procedure :[   
                {
                    order: 1,
                    task: 'Con un navegador compatible con Silverlight, abra una página HTML que haga referencia a una aplicación de Silverlight a través de una etiqueta de objeto.'
                },
                {
                    order: 2,
                    task: 'Active el lector de pantalla. Presione la tecla TAB para recorrer la secuencia de elementos dentro del área de contenido de Silverlight.'
                },
                {
                    order: 3,
                    task: 'Verifique que el orden en el que se recorren los elementos en una secuencia de tabulación sea también el orden esperado de los elementos tal como se presentan visualmente, particularmente en aquellos casos en los que el orden de cada elemento es significativo según SC 1.3.2 .'
                }
            ],
            
            results: 'La verificación #3 es verdadera.'
        }
    ]
}