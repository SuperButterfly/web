import style from './SearchSettings.module.css'

const SearchSettings = () => {
  return (
    <div className={style.general_container5}>
      <h4 className="container5-title">
        Configuración /{' '}
        <small style={{ color: '#8e8e8e' }}>Optimizacion para buscadores</small>
      </h4>

      <span className={style.container5_text_span}>SUPERIOR</span>
      <p className={style.container5_text}>
        Tu cuenta incluye visibilidad en buscadores. Optimiza tus páginas con
        herramientas fáciles de usar.
      </p>
      <button>Empezar la optimización</button>
      <hr className="divisor" />
      <div className={style.container5_body}>
        <p className={style.container5_text}>
          Incluye palabras clave que describan de que trata tu página web para
          que la gente pueda encontrarte cuando busca en Google.
        </p>
        <div className="flex">
          <label htmlFor="">Paginas</label>
          <select name="" id="">
            <option value="">Selecciona una opcion</option>
            <option value="">Inicio</option>
            <option value="">Productos</option>
            <option value="">Contacto</option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="">Titular</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Introduzca nombre del titular"
          />
        </div>
        <div className="flex">
          <label htmlFor="">Descripción</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Introduzca una descripcion de la pagina web"
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default SearchSettings
