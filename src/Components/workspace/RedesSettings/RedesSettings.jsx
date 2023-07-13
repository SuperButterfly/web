import React from 'react'
import { Link } from 'react-router-dom'
import style from './RedesSettings.module.css'
const RedesSettings = () => {
  return (
    <div className={style.container}>
      <h4>
        Configuracion /{' '}
        <small style={{ color: '#8e8e8e' }}>Enlaces de redes sociales</small>{' '}
      </h4>
      <div className={style.container_flex_column}>
        <div className={style.container_flex_row}>
          <label htmlFor="facebook">Facebook</label>
          <Link>Conectar o crear una pagina</Link>
        </div>
        <input
          type="text"
          name="facebook"
          id="facebook"
          placeholder="https//www.facebook.com/xxxx"
        />
      </div>
      <div className={style.container_flex_column}>
        <div className={style.container_flex_row}>
          <label htmlFor="twitter">Twitter</label>
          <Link>Conectar a tu cuenta</Link>
        </div>
        <input
          type="text"
          name="twitter"
          id="twitter"
          placeholder="https//www.twitter.com/xxxx"
        />
      </div>
      <div className={style.container_flex_column}>
        <div className={style.container_flex_row}>
          <label htmlFor="instagram">Instagram</label>
          <Link>Conectarse a una cuenta comercial</Link>
        </div>
        <input
          type="text"
          name="instagram"
          id="instagram"
          placeholder="https//www.instagram.com/xxxx"
        />
      </div>
      <div className={style.container_flex_column}>
        <div className={style.container_flex_row}>
          <label htmlFor="youtube">Youtube</label>
        </div>
        <input
          type="text"
          name="youtube"
          id="youtube"
          placeholder="https//www.youtube.com/xxxx"
        />
      </div>
      <div className={style.container_flex_column}>
        <div className={style.container_flex_row}>
          <label htmlFor="linkedin">Linkedin</label>
        </div>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          placeholder="https//www.linkedin.com/xxxx"
        />
      </div>
    </div>
  )
}

export default RedesSettings
