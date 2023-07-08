import { useRef, useState } from "react";
import styles from "./contextMenuData.module.css";
import { useOnClickOutside } from "./HelperContext";

const ContextMenuData = ({ x, y, closeContextMenu }) => {
  const contextMenuRef = useRef(null);

  useOnClickOutside(contextMenuRef, closeContextMenu);

  return (
    <div
      style={{ top: `${y}px`, left: `${x}px`, position: "absolute", zIndex: 1 }}
      onClick={() => closeContextMenu()}
      ref={contextMenuRef}
      className={styles.container}
    >
      <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
        <li className={styles.contextMenu}>
          <span>Cut</span> <span>Ctrl+X</span>
        </li>
        <li className={styles.contextMenu}>
          <span>Copy</span> <span>Ctrl+C</span>
        </li>
        <li className={styles.contextMenu}>
          <span>Paste</span> <span>Ctrl+V</span>
        </li>
        <li className={styles.contextMenu}>
          {/*  */}
          {/* ********************************** Dropdown paste ************************************************* */}
          {/*  */}
          <span>Paste special</span> <span> {">"} </span>
          <ul className={styles.pasteSubMenu}>
            <li className={styles.contextMenu}>
              Values only <span>Ctrl+V</span>
            </li>
            <li className={styles.contextMenu}>
              Format only<span>Ctrl+Alt+V</span>
            </li>
            <li className={styles.contextMenu}>Formula only</li>
            <li className={styles.contextMenu} style={{ textAlign: "start" }}>
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

        <li className={styles.contextMenu}>Insert 1 row above</li>
        <li className={styles.contextMenu}>Insert 1 column left</li>
        <li className={styles.contextMenu}>
          {/*  */}
          {/* ********************************** Dropdown insert cell ************************************************* */}
          {/*  */}
          Insert cells <span> {">"} </span>
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

        <li className={styles.contextMenu}>Delete row</li>
        <li className={styles.contextMenu}>Delete column</li>
        <li className={styles.contextMenu}>
          {/*  */}
          {/* ********************************** Dropdown delete cell ************************************************* */}
          {/*  */}
          Delete cells <span> {">"} </span>
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

        <li className={styles.contextMenu}>Create a filter</li>
        <li className={styles.contextMenu}>Filter by cell value</li>
      </ul>
    </div>
  );
};

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

export default ContextMenuData;
