import { useRef, useState } from 'react'
import styles from './contextMenuData.module.css'
import { useOnClickOutside } from './HelperContext'
import borrar from '../../../../../assets/borrar.svg'
import copiar from '../../../../../assets/copiar.svg'
import cortar from '../../../../../assets/cortar.svg'
import edit from '../../../../../assets/edit.svg'
import filtros from '../../../../../assets/filtros.svg'
import lista from '../../../../../assets/lista.svg'
import mas from '../../../../../assets/mas.svg'
import arrowBoldRight from '../../../../../assets/arrowBoldRight.svg'

const ContextMenuData = ({ x, y, closeContextMenu }) => {
  const contextMenuRef = useRef(null)

  useOnClickOutside(contextMenuRef, closeContextMenu)
  return (
    <div
      style={{ top: `${y}px`, left: `${x}px`, position: 'absolute', zIndex: 1 }}
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
            <img className={styles.icons} src={lista} alt="paste" />
            <span>Paste special</span>
          </div>
          <img
            className={styles.arrowRightIcon}
            src={arrowBoldRight}
            alt="arrowBoldRight"
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
        </li>

        <hr className={styles.separator} />

        <li className={styles.contextMenu}>
          <div>
            <img className={styles.icons} src={mas} alt="mas" />
            <span>Insert 1 row above</span>
          </div>
        </li>
        <li className={styles.contextMenu}>
          <div>
            <img className={styles.icons} src={mas} alt="mas" />
            <span>Insert 1 column left</span>
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
          <ul className={styles.pasteSubMenu}>
            <li className={styles.contextMenu}>
              Opcion <span>Ctrl+V</span>
            </li>
            <li className={styles.contextMenu}>
              Opcion<span>Ctrl+Alt+V</span>
            </li>
            <li className={styles.contextMenu}>Opcion</li>
          </ul>
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
          <ul className={styles.pasteSubMenu}>
            <li className={styles.contextMenu}>
              Opcion <span>Ctrl+V</span>
            </li>
            <li className={styles.contextMenu}>
              Opcion<span>Ctrl+Alt+V</span>
            </li>
            <li className={styles.contextMenu}>Opcion</li>
          </ul>
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
          <div>
            <img className={styles.icons} src={edit} alt="edit" />
            <span>Create event/Calendar</span>
          </div>
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
