import React, { useRef, useState } from 'react'
import './landing.css'

function Navbar() {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <header>
      <img
        className="header-img"
        src="https://web.aythen.com/brand_logo.svg"
        alt="logo"
      />
      <nav className="header-nav" ref={navRef}>
        <a className="header-nav_a" href="/#">
          Inicio
        </a>
        <a className="header-nav_a" href="/#">
          Kit Digital
        </a>
        <a className="header-nav_a" href="/#">
          Servicios
        </a>
        <a className="header-nav_a" href="/#">
          Equipo
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          X
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        - / -
      </button>
      <div className="header-language">
        <img
          className="header-language_img"
          src="https://flagcdn.com/es.svg"
          data-v-63353582=""
          style={{ height: '12px' }}
          alt="country"
        />
        <a
        href='#'
          role="button"
          className="header-language_reference"
          tabindex="0"
          data-v-63353582=""
        >
          <span className="reference_span" data-v-63353582="">
            Español
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--feather"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            data-icon="feather:chevron-down"
            data-v-63353582=""
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m6 9l6 6l6-6"
            ></path>
          </svg>
        </a>
        <a href="/kit+digital" className="navbar-item" data-v-63353582="">
          <div className="navbar-item_container" data-v-63353582="">
            <small
              className="container-small"
              data-v-9be08252=""
              data-v-63353582=""
              style={{ display: 'flex', alignItems: "center" }}
            >
              <img
                alt="next generation"
                src="http://46.24.179.57:2070/assets/images/eu.jpg"
                data-v-63353582=""
                style={{ width: '36px', marginRight: '4px', borderRadius: "5px" }}
              />{' '}
              <span style={{ marginRight: "5px", fontWeight: "bold" }} >Next Generation{' '}</span>
            </small>
          </div>
        </a>
        <label
          for="theme-toggle"
          className="custom-toggle"
          data-v-fb88aac2=""
          data-v-63353582=""
        >
          <input id="theme-toggle" type="checkbox" data-v-fb88aac2="" />
          <span className="no-margin" data-v-fb88aac2="">
            <span className="track" data-v-fb88aac2="">
              <span className="track-inner" data-v-fb88aac2=""></span>
              <span className="track-knob" data-v-fb88aac2="">
                <svg
                  width="1.2em"
                  height="1.2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="inactive iconify"
                  data-v-fb88aac2=""
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                  </g>
                </svg>
                <svg
                  width="1.2em"
                  height="1.2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="active iconify"
                  data-v-fb88aac2=""
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"
                  ></path>
                </svg>
              </span>
            </span>
          </span>
        </label>
      </div>
    </header>
  )
}

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div clasName="library-search">
        <div clasName="field">
          <div clasName="control has-icon is-invalid">
            <input
              type="text"
              placeholder="Buscar componente..."
              aria-label="input"
              className="input-landing"
            />
          </div>
        </div>
      </div>
      <div className="sidebar-section">
        <h3>AI Modules</h3>
        <ul className="sidebar-links">
          <li className="sidebar-item">
            <a href="#" >Mejora y Creación</a>
          </li>
          <li className="sidebar-item">
            <a href="#">Blog</a>
          </li>
          <li className="sidebar-item">
            <a href="#">Creación de medios</a>
          </li>
          <li className="sidebar-item">
            <a href="#">Creación de contenido</a>
          </li>
          <li className="sidebar-item">
            <a href="#">texto, video, imágenes</a>
          </li>
          <li className="sidebar-item">
            <a href="#">publicidad, marketing, marca</a>
          </li>
          <li className="sidebar-item">
            <a href="#">audio, AI</a>
          </li>
          <li className="sidebar-item">
            <a href="#">Investigación</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Templates</h3>
        <ul className="sidebar-links">
          <li className="sidebar-item">
            <a href="#">Coporativas</a>
          </li>
          <li className="sidebar-item">
            <a href="#">E-commerce</a>
          </li>
          <li className="sidebar-item">
            <a href="#">Business</a>
          </li>
          <li className="sidebar-item">
            <a href="#">Blogs</a>
          </li>
          <li className="sidebar-item">
            <a href="#">Portafolios</a>
          </li>
          <li className="sidebar-item">
            <a href="#">Noticias</a>
          </li>
          <li className="sidebar-item">
            <a href="#">Marketing</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="content-landing">
        <Sidebar />
        <main className="main-content-landing">
          <h1>Mejora y creación</h1>
          <p className="subtitle">
            Herramientas de mejora y ampliación de imágenes. Aumenta la
            resolución de la imagen sin perder calidad.
          </p>

          <div className="card-container">
            <div className="card-landing">
              <h2>imglarger</h2>
              <h5>Mejora imágenes</h5>
              <p>
                Herramientas de mejora y ampliación de imágenes. Aumenta la
                resolución de la imagen sin perder calidad
              </p>
            </div>
            <div className="card-landing">
              <h2>autodraw</h2>
              <h5>Mejora tu dibujo</h5>
              <p>
                Dibujo automático, combina el aprendizaje automático con dibujos
                de artistas talentosos para ayudar a todos a crear algo visual,
                rápido
              </p>
            </div>
            <div className="card-landing">
              <h2>up scale media</h2>
              <h5>Mejora de calidad</h5>
              <p>Escala y mejora tus imágenes</p>
            </div>
            {/* card-landing 4 */}
            <div className="card-landing">
              <h2>ifixit</h2>
              <h5>Reparaciones</h5>
              <p>Guía de reparaciones</p>
            </div>
            {/* card-landing 5 */}
            <div className="card-landing">
              <h2>palette</h2>
              <h5>Color para imágenes</h5>
              <p>Colorear imágenes ¡Automático, sin registro y gratis!</p>
            </div>
            {/* card-landing 6 */}
            <div className="card-landing">
              <h2>pictory</h2>
              <h5>Creador de video</h5>
              <p>
                Cree automáticamente videos de marca cortos y altamente
                compartibles a partir de su contenido de formato largo
              </p>
            </div>
            {/* card-landing 7 */}
            <div className="card-landing">
              <h2>elephas app</h2>
              <h5>Escritor inteligente de Apple</h5>
              <p>
                Ahorra horas todos los días. El primer escritor de inteligencia
                artificial del mundo que funciona en su Mac, iPhone y iPad
              </p>
            </div>
            {/* card-landing 8 */}
            <div className="card-landing">
              <h2>excel formula bot</h2>
              <h5>Excel</h5>
              <p>
                Transforme sus instrucciones de texto en fórmulas de Excel en
                segundos con la ayuda de AI de forma gratuita.
              </p>
            </div>
            {/* card-landing 9 */}
            <div className="card-landing">
              <h2>moonbeam</h2>
              <h5>Parachain</h5>
              <p>
                Ampliar a nuevas cadenas. Desarrollado por Moonbem, una
                parachain de contrato inteligente compatible con Ethereum y
                Polkadot
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Landing
