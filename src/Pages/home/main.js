import './main.css'

import ExportComponent from './ExportComponent'
import EditComponent from './EditComponent'
import FilterComponent from './FilterComponent'

const Main = () => {
  return (
    <div  style={{width:"100%"}}>
        <ExportComponent />
        <EditComponent />
        <FilterComponent />
        
        <hr />
        
        
        <div>
            <h3 className="title">
                Publicidad
            </h3>
            <div className="">
                Links a la pagina web
                Solicitar Kit Digital
            </div>
        </div>
        <div>
            <div>
                Proceso
                    Inserta web
                    Estudio gratuito
                    Web gratis
            </div>
            <div>
                Un ejemplo
                    Financiación => Kit Digital
                    
                    Formulario (Accesibilidad)
                    Ejemplos y plantillas listas para usar
                    
                    diff create boe/main.js
            </div>
            <div>
                Visuales
                
                    Visuales
                    Visuales
                    Visuales
                    Texto
                    Video
            </div>
        </div>
    </div>
  )
}

export default Main