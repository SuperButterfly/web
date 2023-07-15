import React, { useState } from 'react'
import styles from './NuevoFront.module.css'
import logoAythen from './icons/logoAythen.png'

const NuevoFront = () => {
  const [expandedRectangulos, setExpandedRectangulos] = useState({})

  const toggleExpand = (rectangulo) => {
    setExpandedRectangulos((prevExpandedRectangulos) => ({
      ...prevExpandedRectangulos,
      [rectangulo]: !prevExpandedRectangulos[rectangulo]
    }))
  }

  return (
    <div className={styles.general}>
      <div
        className={`${styles.rectangulo} ${
          expandedRectangulos.rectangulo1 ? styles.expandedRectangulo : ''
        }`}
      >
        <div className={styles.contenedor}>
          <div className={styles.contenedorOpciones}>
            <img className={styles.logoAythen} src={logoAythen}></img>
            <svg className={styles.iconRightArrow}></svg>
            <svg className={styles.iconSlack}></svg>
          </div>
          <h5 className={styles.tituloFront}>
            <span className={styles.instant}>INSTANT</span> Generic Creation
            Workspace
          </h5>
          <div className={`${styles.contenedorOpciones} ${styles.opciones}`}>
            <button>
              <label className={styles.switch}>
                <input type="checkbox"></input>
                <span className={styles.slider}></span>
                <span className={styles.text + ' ' + styles.on}>On</span>
                <span className={styles.text + ' ' + styles.off}>Off</span>
              </label>
            </button>
            <svg
              className={styles.iconDownArrow}
              onClick={() => toggleExpand('rectangulo1')}
            ></svg>
            {expandedRectangulos.rectangulo1 && (
              <div className={styles.opcionesContenedor}>
                <div className={styles.opcion}>
                  <span>Opción 1</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 2</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 3</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${styles.rectangulo} ${
          expandedRectangulos.rectangulo2 ? styles.expandedRectangulo : ''
        }`}
      >
        <div className={styles.contenedor}>
          <div className={styles.contenedorOpciones}>
            <svg className={styles.iconTrello}></svg>
            <svg className={styles.iconRightArrow}></svg>
            <img className={styles.logoAythen} src={logoAythen}></img>
          </div>
          <h5 className={styles.tituloFront}>Trello2nuxeo</h5>
          <div className={`${styles.contenedorOpciones} ${styles.opciones}`}>
            <button>
              <label className={styles.switch}>
                <input type="checkbox"></input>
                <span className={styles.slider}></span>
                <span className={styles.text + ' ' + styles.on}>On</span>
                <span className={styles.text + ' ' + styles.off}>Off</span>
              </label>
            </button>
            <svg
              className={styles.iconDownArrow}
              onClick={() => toggleExpand('rectangulo2')}
            ></svg>
            {expandedRectangulos.rectangulo2 && (
              <div className={styles.opcionesContenedor}>
                <div className={styles.opcion}>
                  <span>Opción 1</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 2</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 3</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${styles.rectangulo} ${
          expandedRectangulos.rectangulo3 ? styles.expandedRectangulo : ''
        }`}
      >
        <div className={styles.contenedor}>
          <div className={styles.contenedorOpciones}>
            <svg className={styles.iconGmail}></svg>
            <svg className={styles.iconRightArrow}></svg>
            <img className={styles.logoAythen} src={logoAythen}></img>
          </div>
          <h5 className={styles.tituloFront}>File Manager</h5>
          <div className={`${styles.contenedorOpciones} ${styles.opciones}`}>
            <button>
              <label className={styles.switch}>
                <input type="checkbox"></input>
                <span className={styles.slider}></span>
                <span className={styles.text + ' ' + styles.on}>On</span>
                <span className={styles.text + ' ' + styles.off}>Off</span>
              </label>
            </button>
            <svg
              className={styles.iconDownArrow}
              onClick={() => toggleExpand('rectangulo3')}
            ></svg>
            {expandedRectangulos.rectangulo3 && (
              <div className={styles.opcionesContenedor}>
                <div className={styles.opcion}>
                  <span>Opción 1</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 2</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 3</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${styles.rectangulo} ${
          expandedRectangulos.rectangulo4 ? styles.expandedRectangulo : ''
        }`}
      >
        <div className={styles.contenedor}>
          <div className={styles.contenedorOpciones}>
            <svg className={styles.iconTrello}></svg>
            <svg className={styles.iconRightArrow}></svg>
            <svg className={styles.iconClose}></svg>
          </div>
          <h5 className={styles.tituloFront}>Generic Automation Document(s)</h5>
          <div className={`${styles.contenedorOpciones} ${styles.opciones}`}>
            <button>
              <label className={styles.switch}>
                <input type="checkbox"></input>
                <span className={styles.slider}></span>
                <span className={styles.text + ' ' + styles.on}>On</span>
                <span className={styles.text + ' ' + styles.off}>Off</span>
              </label>
            </button>
            <svg
              className={styles.iconDownArrow}
              onClick={() => toggleExpand('rectangulo4')}
            ></svg>
            {expandedRectangulos.rectangulo4 && (
              <div className={styles.opcionesContenedor}>
                <div className={styles.opcion}>
                  <span>Opción 1</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 2</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 3</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${styles.rectangulo} ${
          expandedRectangulos.rectangulo5 ? styles.expandedRectangulo : ''
        }`}
      >
        <div className={styles.contenedor}>
          <div className={styles.contenedorOpciones}>
            <img className={styles.logoAythen} src={logoAythen}></img>
            <svg className={styles.iconRightArrow}></svg>
            <svg className={styles.iconSlack}></svg>
          </div>
          <h5 className={styles.tituloFront}>
            <span className={styles.instant}>INSTANT</span> Generic Trigger
          </h5>
          <div className={`${styles.contenedorOpciones} ${styles.opciones}`}>
            <button>
              <label className={styles.switch}>
                <input type="checkbox"></input>
                <span className={styles.slider}></span>
                <span className={styles.text + ' ' + styles.on}>On</span>
                <span className={styles.text + ' ' + styles.off}>Off</span>
              </label>
            </button>
            <svg
              className={styles.iconDownArrow}
              onClick={() => toggleExpand('rectangulo5')}
            ></svg>
            {expandedRectangulos.rectangulo5 && (
              <div className={styles.opcionesContenedor}>
                <div className={styles.opcion}>
                  <span>Opción 1</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 2</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 3</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${styles.rectangulo} ${
          expandedRectangulos.rectangulo6 ? styles.expandedRectangulo : ''
        }`}
      >
        <div className={styles.contenedor}>
          <div className={styles.contenedorOpciones}>
            <svg className={styles.iconSlack}></svg>
            <svg className={styles.iconRightArrow}></svg>
            <img className={styles.logoAythen} src={logoAythen}></img>
            <svg className={styles.iconRightArrow}></svg>
            <svg className={styles.iconClose}></svg>
          </div>
          <h5 className={styles.tituloFront}>
            <span className={styles.instant}>INSTANT</span> Slack2nuxeo
          </h5>
          <div className={`${styles.contenedorOpciones} ${styles.opciones}`}>
            <button>
              <label className={styles.switch}>
                <input type="checkbox"></input>
                <span className={styles.slider}></span>
                <span className={styles.text + ' ' + styles.on}>On</span>
                <span className={styles.text + ' ' + styles.off}>Off</span>
              </label>
            </button>
            <svg
              className={styles.iconDownArrow}
              onClick={() => toggleExpand('rectangulo6')}
            ></svg>
            {expandedRectangulos.rectangulo6 && (
              <div className={styles.opcionesContenedor}>
                <div className={styles.opcion}>
                  <span>Opción 1</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 2</span>
                </div>
                <div className={styles.opcion}>
                  <span>Opción 3</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default NuevoFront
