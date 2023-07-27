import style from './InfoBasic.module.css'

const InfoBasic = () => {
  return (
    <div className={style.container}>
      <h4>
        Configuración /{' '}
        <small style={{ color: '#8e8e8e' }}>Informacion basica</small>
      </h4>
      <div className={style.container_flex}>
        <p>Esto se refiere a tu información personal o comercial.</p>
        <div className={style.container_flex_column}>
          <label htmlFor="name">Nombre del sitio web *</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del sitio"
            required
          />
        </div>
        <div className={style.container_flex_column}>
          <label htmlFor="category">Categoria de negocios</label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Categoria..."
          />
        </div>
        <div className={style.container_flex_column}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico..."
          />
        </div>
        <div className={style.container_flex_column}>
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Dirección..."
          />
        </div>
        <div className={style.container_flex_column}>
          <label htmlFor="phone">Teléfono</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Teléfono..."
          />
        </div>
      </div>
    </div>
  )
}

export default InfoBasic
