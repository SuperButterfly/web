import './settingsgeneral.css'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProject } from '../../../../src/redux/actions/projects'
import { Link, NavLink } from 'react-router-dom'
import style from './SettingsGeneral.module.css'

const SettingsGeneral = () => {
  return (
    <div className="settings-general-container">
      <div className={style.container}>
        <h4>
          Configuración / <small style={{ color: '#8e8e8e' }}>General</small>
        </h4>
        <div className={style.container_flex}>
          <small>Esto se refiere a tu información personal o comercial.</small>
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
        <div className={style.container_flex}>
          <small>
            Algunas leyes regionales requieren que los propietarios de páginas
            web informen a los visitantes del seguimiento mediante cookies.
          </small>
          <small>
            <Link>Cómo funciona</Link>
          </small>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <span>Mostrar notificación de cookies</span>
            <label className="switch">
              <input
                // checked={data.tailwindCSS}
                type="checkbox"
                // onChange={handleTailwindCSS}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className={style.container_flex_column}>
            <label htmlFor="title">Título</label>
            <input type="text" name="title" id="title" placeholder="Título" />
          </div>
          <div className={style.container_flex_column}>
            <label htmlFor="message">Mensaje</label>
            <small>
              Nuestro texto predeterminado es solo un ejemplo y debes buscar
              asesoría jurídica para determinar el texto exacto que debes
              mostrar en tu sitio.
            </small>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Usamos cookies para analizar el trafico del sitio web y optimizar tu experiencia en el sitio. Al aceptar nuestro uso de cookies, tus datos se agruparan con los datos de todos los demas usuarios."
              className={style.textarea}
            ></textarea>
          </div>
          <div className={style.container_flex_column}>
            <label htmlFor="accept">Botón Aceptar</label>
            <small>
              Puedes cambiar el texto para el botón de Aceptar. Sin embargo, la
              funcionalidad no cambiará. Cuando los que visiten tu sitio web
              hagan clic en este botón. estarán aceptando el uso de cookies para
              hacer un seguimiento del tráfico del sitio web.
            </small>
            <input
              type="text"
              name="accept"
              id="accept"
              placeholder="Aceptar"
              readOnly
            />
          </div>
          <div className={style.container_flex_column}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <label>Botón Rechazar</label>
              <label className="switch">
                <input
                  // checked={data.tailwindCSS}
                  type="checkbox"
                  // onChange={handleTailwindCSS}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <small>
              Puedes agregar un botón para que tus visitantes rechacen el
              seguimiento con cookies. Como el seguimiento solo se habilita si
              tu visitante hace clic en el botón de Aceptar, el botón de
              Rechazar solo cerrará la ventana emergente de cookies cuando se
              seleccione.
            </small>
            <input type="text" name="" id="" readOnly placeholder="Rechazar" />
          </div>
          <div className={style.container_flex_column}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <label>Seguimiento avanzado</label>
              <label className="switch">
                <input
                  // checked={data.tailwindCSS}
                  type="checkbox"
                  // onChange={handleTailwindCSS}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <small>
              Permítenos colocar cookies en los navegadores de los visitantes de
              tu sitio web. Esto nos permite decirte cuántas personas vienen a
              tu sitio web, optimizar la velocidad con la que se carga tu sitio
              y enviar métricas relacionadas con integraciones de terceros.
              Mantén esta configuración activada para ver perspectivas y
              métricas en tu <NavLink>Panel de control</NavLink>
            </small>
          </div>
          <button
            style={{
              backgroundColor: '#00a8ff',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsGeneral
