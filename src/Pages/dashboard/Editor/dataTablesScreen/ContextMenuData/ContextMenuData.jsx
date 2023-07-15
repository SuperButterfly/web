import { useEffect, useRef, useState } from 'react'
import styles from './contextMenuData.module.css'
import { useOnClickOutside } from './HelperContext'

/** *************************** ICONOS *************************************** */
import borrar from '../../../../../assets/borrar.svg'
import copiar from '../../../../../assets/copiar.svg'
import cortar from '../../../../../assets/cortar.svg'
import edit from '../../../../../assets/edit.svg'
import filtros from '../../../../../assets/filtros.svg'
import lista from '../../../../../assets/lista.svg'
import mas from '../../../../../assets/mas.svg'
import arrowBoldRight from '../../../../../assets/arrowBoldRight.svg'
import recent from '../../../../../assets/recent.svg'
import social from '../../../../../assets/social.svg'
import camera from '../../../../../assets/camera.svg'
import ubication from '../../../../../assets/ubication.svg'
import menuburguer from '../../../../../assets/menuburguer.svg'

const ContextMenuData = ({ x, y, closeContextMenu, exportedFunctions }) => {
  const cleanNewColumn = {
    type: 'text',
    title: undefined,
    order: 'ASC',
    visible: true
  }

  const [position, setPosition] = useState({ left: x, top: y })
  const [newColumn, setNewColumn] = useState({ ...cleanNewColumn })

  const contextMenuRef = useRef(null)
  const subMenuRef = useRef(null)

  /* *********************** FUNCIONES EXPORTADAS ************************************ */
  const alphabet = exportedFunctions.alphabet
  const columns = exportedFunctions.columns
  const renderTableHeader = exportedFunctions.renderTableHeader
  const selectedColumn = exportedFunctions.selectedColumn
  const setSelectedColumn = exportedFunctions.setSelectedColumn
  const addColumn = exportedFunctions.addColumn
  const moveColumn = exportedFunctions.moveColumn
  const numberOfColumns = exportedFunctions.numberOfColumns
  const selectedRow = exportedFunctions.selectedRow
  const addRow = exportedFunctions.addRow
  const moveRow = exportedFunctions.moveRow
  const numberOfRows = exportedFunctions.numberOfRows
  const focusedCell = exportedFunctions.focusedCell
  const handleSearch = exportedFunctions.handleSearch
  const searchTerm = exportedFunctions.searchTerm
  const handleTableAction = exportedFunctions.handleTableAction
  /* *********************** FIN DE FUNCIONES EXPORTADAS ************************************ */

  useOnClickOutside(contextMenuRef, closeContextMenu)

  const handleCreateColumn = () => {
    addColumn(newColumn)
    setNewColumn(cleanNewColumn)
  }

  // = () => {
  //   const subMenuWidth = subMenuRef.current.offsetWidth
  //   const contextMenuWidth = contextMenuRef.current.offsetWidth

  //   if (subMenuWidth > contextMenuWidth) {
  //     setPosition({ left: x - subMenuWidth, top: y })
  //   }
  // }

  useEffect(() => {
    const menuWidth = contextMenuRef.current.offsetWidth
    const menuHeight = contextMenuRef.current.offsetHeight
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight

    if (x + menuWidth > windowWidth && y + menuHeight > windowHeight) {
      setPosition({ right: windowWidth - x, bottom: windowHeight - y })
    } else if (x + menuWidth > windowWidth) {
      setPosition({ right: windowWidth - x, top: y })
    } else if (y + menuHeight > windowHeight) {
      setPosition({ left: x, bottom: windowHeight - y })
    } else {
      setPosition({ left: x, top: y })
    }
  }, [x, y])

  return (
    <div
      style={{ ...position, zIndex: '1' }}
      onClick={() => closeContextMenu()}
      ref={contextMenuRef}
      className={styles.container}
    >
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        <li className={styles.contextMenu}>
          <div>
            <img className={styles.icons} src={cortar} alt="cortar" />
            <span>Cut</span>
          </div>
          <span>Ctrl+X</span>
        </li>
        <li className={styles.contextMenu}>
          <div>
            <img className={styles.icons} src={copiar} alt="copiar" />
            <span>Copy</span>
          </div>
          <span>Ctrl+C</span>
        </li>
        <li className={styles.contextMenu}>
          <div>
            <img className={styles.icons} src={lista} alt="paste" />
            <span>Paste</span>
          </div>
          <span>Ctrl+V</span>
        </li>
        <li className={styles.contextMenu}>
          {/*  */}
          {/* ********************************** Dropdown paste ************************************************* */}
          {/*  */}
          <div>
            <img
              ref={subMenuRef}
              className={styles.icons}
              src={lista}
              alt="paste"
            />
            <span ref={subMenuRef}>Paste special</span>
          </div>
          <img
            className={styles.arrowRightIcon}
            src={arrowBoldRight}
            alt="arrowBoldRight"
            ref={subMenuRef}
          />
          <ul className={styles.pasteSubMenu}>
            <li className={styles.contextMenu}>
              Values only <span>Ctrl+V</span>
            </li>
            <li className={styles.contextMenu}>
              Format only<span>Ctrl+Alt+V</span>
            </li>
            <li className={styles.contextMenu}>Formula only</li>
            <li className={styles.contextMenu} style={{ textAlign: 'start' }}>
              Conditional formatting only
            </li>
            <li className={styles.contextMenu}>Data validation only</li>
            <hr className={styles.separator} />

            <li className={styles.contextMenu}>Transposed</li>
            <hr className={styles.separator} />

            <li className={styles.contextMenu}>Column width only</li>
            <li className={styles.contextMenu}>All except borders</li>
          </ul>
          {/*
           ********************
           */}
        </li>

        <hr className={styles.separator} />

        <li className={styles.contextMenu} onClick={addRow}>
          <div>
            <img className={styles.icons} src={mas} alt="mas" />
            <span>Insert 1 row above</span>
          </div>
        </li>
        <li className={styles.contextMenu} onClick={handleCreateColumn}>
          <div>
            <img className={styles.icons} src={mas} alt="mas" />
            <span>Insert 1 column right</span>
          </div>
        </li>
        <li className={styles.contextMenu}>
          {/*  */}
          {/* ********************************** Dropdown insert cell ************************************************* */}
          {/*  */}
          <div>
            <img className={styles.icons} src={mas} alt="mas" />
            <span>Insert cells </span>
          </div>
          <img
            className={styles.arrowRightIcon}
            src={arrowBoldRight}
            alt="arrowBoldRight"
          />
          <ul className={styles.pasteSubMenu} ref={subMenuRef}>
            <li className={styles.contextMenu}>
              Opcion <span>Ctrl+V</span>
            </li>
            <li className={styles.contextMenu}>
              Opcion<span>Ctrl+Alt+V</span>
            </li>
            <li className={styles.contextMenu}>Opcion</li>
          </ul>
          {/*
           ********************
           */}
        </li>

        <hr className={styles.separator} />

        <li className={styles.contextMenu}>
          <div>
            <img className={styles.icons} src={borrar} alt="borrar" />
            <span>Delete row</span>
          </div>
        </li>
        <li className={styles.contextMenu}>
          <div>
            <img className={styles.icons} src={borrar} alt="borrar" />
            <span>Delete column</span>
          </div>
        </li>
        <li className={styles.contextMenu}>
          {/*  */}
          {/* ********************************** Dropdown delete cell ************************************************* */}
          {/*  */}
          <div>
            <img className={styles.icons} src={borrar} alt="borrar" />
            <span>Delete cells</span>{' '}
          </div>
          <img
            className={styles.arrowRightIcon}
            src={arrowBoldRight}
            alt="arrowBoldRight"
          />
          <ul className={styles.pasteSubMenu} ref={subMenuRef}>
            <li className={styles.contextMenu}>
              Opcion <span>Ctrl+V</span>
            </li>
            <li className={styles.contextMenu}>
              Opcion<span>Ctrl+Alt+V</span>
            </li>
            <li className={styles.contextMenu}>Opcion</li>
          </ul>
          {/*
           ********************
           */}
        </li>

        <hr className={styles.separator} />

        <li className={styles.contextMenu}>
          <div>
            <img className={styles.icons} src={filtros} alt="filtros" />
            <span>Create filter</span>
          </div>
        </li>
        <li className={styles.contextMenu}>
          <div>
            <img className={styles.icons} src={filtros} alt="filtros" />
            <span>Filter by cell value</span>
          </div>
        </li>
        <li className={styles.contextMenu}>
          {/*  */}
          {/* ********************************** Dropdown Calendar ************************************************* */}
          {/*  */}
          <div>
            <img className={styles.iconsCalendar} src={edit} alt="edit" />
            <span>Create event/Calendar</span>
          </div>
          <img
            className={styles.arrowRightIcon}
            src={arrowBoldRight}
            alt="arrowBoldRight"
          />
          <div className={styles.CalendarSubMenu} ref={subMenuRef}>
            <input
              type="text"
              placeholder="Añade un titulo y una hora"
              className={styles.inputTituloYHora}
            />

            <div className={styles.divBotonesEventoOTarea}>
              <button className={styles.buttonEventoOTarea}>Evento</button>
              <button className={styles.buttonEventoOTarea}>Tarea</button>
            </div>
            <div className={styles.divFechaYHora}>
              <img className={styles.iconsCalendar} src={recent} alt="recent" />
              <div>
                <span>Martes, 11 de Julio - Martes, 11 de Julio</span>
                <p className={styles.textoNoSeRepite}>No se repite</p>
              </div>
              <button className={styles.buttonFechaYHora}>Añadir hora</button>
            </div>

            <p className={styles.estilosPEncontrarHueco}>Encontrar un hueco</p>
            <ul className={styles.uls}>
              <li className={styles.listItems}>
                <img
                  className={styles.iconsCalendar}
                  src={social}
                  alt="social"
                />
                <input
                  type="text"
                  placeholder="Añade invitados"
                  className={styles.inputList}
                />
              </li>
              <li>
                <img
                  className={styles.iconsCalendar}
                  src={camera}
                  alt="camera"
                />
                <button className={styles.buttonLlamada}>
                  Añadir llamada de Google Meet
                </button>
              </li>
              <li className={styles.listItems}>
                <img
                  className={styles.iconsCalendar}
                  src={ubication}
                  alt="ubication"
                />
                <span className={styles.spanList}>Añadir ubicacion</span>
              </li>
              <li className={styles.listItems}>
                <img
                  className={styles.iconsCalendar}
                  src={menuburguer}
                  alt="description"
                />
                <span className={styles.spanList}>Añadir descripcion</span>
              </li>
            </ul>
            <div className={styles.divOpcionesYGuardar}>
              <span className={styles.spanOpciones}>Mas opciones</span>
              <button className={styles.buttonGuardar}>Guardar</button>
            </div>
          </div>
          {/*
           ********************
           */}
        </li>
      </ul>
    </div>
  )
}

// onClick={() => handleOptionClick("Opción 1")}
// onClick={() => handleOptionClick("Opción 1")}
// onClick={() => handleOptionClick("Opción 2")}
// onClick={() => handleOptionClick("Opción 3")}
// onClick={() => handleOptionClick("Opción 3")}
// onClick={() => handleOptionClick("Opción 3")}
// onClick={() => handleOptionClick("Opción 3")}
// onClick={() => handleOptionClick("Opción 3")}
// onClick={() => handleOptionClick("Opción 3")}
// onClick={() => handleOptionClick("Opción 3")}
// onClick={() => handleOptionClick("Opción 3")}
// onClick={() => handleOptionClick("Opción 3")}

export default ContextMenuData
