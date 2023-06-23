import React, { useRef, useState } from 'react';
import './landing.css';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <img src='https://web.aythen.com/brand_logo.svg' alt='logo' />
      <nav ref={navRef}>
        <a href="/#">Inicio</a>
        <a href="/#">Kit Digital</a>
        <a href="/#">Servicios</a>
        <a href="/#">Equipo</a>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          X
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        - / -
      </button>
    </header>
  );
}

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div clasName="library-search" >
        <div clasName="field"  >
          <div clasName="control has-icon is-invalid"  >
            <input type="text" placeholder="Buscar componente..." aria-label="input" clasName="input" />
          </div>
        </div>
      </div>
      <div className="sidebar-section">
        <h3>AI Modules</h3>
        <ul className="sidebar-links">
          <li className="sidebar-item">
            <a href="#">Mejora y Creación</a>
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
  );
};

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main>
          <h1>Mejora y creación</h1>
          <p className="subtitle">
            Herramientas de mejora y ampliación de imágenes. Aumenta la
            resolución de la imagen sin perder calidad.
          </p>

          <div className="card-container">
            <div className="card">
              <h2>imglarger</h2>
              <h5>Mejora imágenes</h5>
              <p>Herramientas de mejora y ampliación de imágenes. Aumenta la resolución de la imagen sin perder calidad</p>
            </div>
            <div className="card">
              <h2>autodraw</h2>
              <h5>Mejora tu dibujo</h5>
              <p>Dibujo automático, combina el aprendizaje automático con dibujos de artistas talentosos para ayudar a todos a crear algo visual, rápido</p>
            </div>
            <div className="card">
              <h2>up scale media</h2>
              <h5>Mejora de calidad</h5>
              <p>Escala y mejora tus imágenes</p>
            </div>
            {/* Card 4 */}
            <div className="card">
              <h2>ifixit</h2>
              <h5>Reparaciones</h5>
              <p>Guía de reparaciones</p>
            </div>
            {/* Card 5 */}
            <div className="card">
              <h2>palette</h2>
              <h5>Color para imágenes</h5>
              <p>Colorear imágenes ¡Automático, sin registro y gratis!</p>
            </div>
            {/* Card 6 */}
            <div className="card">
              <h2>pictory</h2>
              <h5>Creador de video</h5>
              <p>Cree automáticamente videos de marca cortos y altamente compartibles a partir de su contenido de formato largo</p>
            </div>
            {/* Card 7 */}
            <div className="card">
              <h2>elephas app</h2>
              <h5>Escritor inteligente de Apple</h5>
              <p>Ahorra horas todos los días. El primer escritor de inteligencia artificial del mundo que funciona en su Mac, iPhone y iPad</p>
            </div>
            {/* Card 8 */}
            <div className="card">
              <h2>excel formula bot</h2>
              <h5>Excel</h5>
              <p>Transforme sus instrucciones de texto en fórmulas de Excel en segundos con la ayuda de AI de forma gratuita.</p>
            </div>
            {/* Card 9 */}
            <div className="card">
              <h2>moonbeam</h2>
              <h5>Parachain</h5>
              <p>Ampliar a nuevas cadenas. Desarrollado por Moonbem, una parachain de contrato inteligente compatible con Ethereum y Polkadot</p>
            </div>
          </div>
        </main>
      </div >
    </div >
  );
};

export default Landing;

