export const data = {
    name: 'SL19',
    
    type: 'silverlight',
    
    relation: [ '1.1.1' ],
    
    applicability: ['Microsoft Silverlight, versiones 3 y superiores','Modelo de programación administrado de Silverlight y Silverlight XAML'],
    
    resume: 'Esta técnica proporciona una alternativa de texto largo para los elementos de la interfaz de usuario de Silverlight que no son de texto. La propiedad de automatización de la interfaz de usuario relevante es HelpText, que se establece directamente en el árbol de automatización de la interfaz de usuario. La misma información también se puede mostrar en un ToolTip de Silverlight. El enlace de datos y los recursos de Silverlight se pueden combinar para compartir el mismo recurso.',
    
    example: [
        {
            title: 'aplicar una alternativa de texto largo para una imagen con XAML',
            resume: 'Para definir una interfaz de usuario de Silverlight XAML, especifique el atributo AutomationProperties.HelpText en el elemento Image para proporcionar una descripción alternativa más larga del contenido de la imagen. Esto debe aumentar el AutomationProperties.Nameen lugar de duplicarlo.',
            code: '<Imagen Altura = "400" Ancho = "600" Fuente="/oficina.png" AutomationProperties.Name="Diagrama de diseño de oficina estándar" AutomationProperties.HelpText="El diseño de oficina estándar incluye una unidad de escritorio de esquina en la esquina más alejada del puerta y un archivador contra la misma pared que la puerta."/>'
        },
        {
            title: `uso de HelpText como instrucciones de formulario`,
            resume: 'Este ejemplo muestra cómo definir cadenas como recursos y vincularlas a los campos de formulario tanto con Tooltip como con AutomationProperties.HelpText. No se realiza validación del lado del cliente, pero puede haber validación del lado del servidor. La siguiente es la interfaz de usuario XAML:',
            code: '<UserControl xmlns:sdk="http://schemas.microsoft.com/winfx/2006/xaml/presentation/sdk" x:Class="HelpTextAndToolTip.MainPage" xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"><Grid x:Name="LayoutRoot" Background="White" Margin="10"><Grid.RowDefinitions><RowDefinition Height="Auto"/><RowDefinition Height="Auto"/><RowDefinition Height="Auto"/><RowDefinition Height="Auto"/><RowDefinition Height="Auto"/></Grid.RowDefinitions><Grid.ColumnDefinitions><ColumnDefinition Width="Auto"/><ColumnDefinition Width="200"/><ColumnDefinition Width="Auto"/></Grid.ColumnDefinitions><TextBlock Text="Form With Tooltips" FontSize="16" FontWeight="Bold" Grid.Column="1" HorizontalAlignment="Center" /><sdk:Label x:Name="NameLabel" Target="{Binding ElementName=NameTextBox}" Grid.Row="2" Margin="3"/><TextBox x:Name="NameTextBox" AutomationProperties.Name="{Binding Content, ElementName=NameLabel}" Text="{Binding Name, Mode=TwoWay, UpdateSourceTrigger=Explicit}" Grid.Column="1" Grid.Row="2" Margin="3" AutomationProperties.HelpText="{Binding NameTextBoxToolTipString,Source={StaticResource TooltipStrings}}"><ToolTipService.ToolTip><ToolTip Content="{Binding NameTextBoxToolTipString,Source={StaticResource TooltipStrings}}" /></ToolTipService.ToolTip></TextBox><sdk:Label x:Name="AgeLabel" Target="{Binding ElementName=AgeTextBox}" Grid.Row="3" Margin="3" HorizontalAlignment="Right"/><TextBox x:Name="AgeTextBox" AutomationProperties.Name="{Binding Content, ElementName=AgeLabel}" Text="{Binding Age, Mode=TwoWay, UpdateSourceTrigger=Explicit}" Grid.Column="1" Grid.Row="3" Margin="3" AutomationProperties.HelpText="{Binding AgeTextBoxToolTipString,Source={StaticResource TooltipStrings}}"><ToolTipService.ToolTip><ToolTip Content="{Binding AgeTextBoxToolTipString,Source={StaticResource TooltipStrings}}" /></ToolTipService.ToolTip></TextBox><Button x:Name="SubmitButton" Content="Submit" Click="SubmitButton_Click" Grid.Column="1" Grid.Row="4" Width="50" Margin="3" /></Grid></UserControl>'
        }
    ],
    
    relTech: [ 'none'],
    
    tests:['none']
}

