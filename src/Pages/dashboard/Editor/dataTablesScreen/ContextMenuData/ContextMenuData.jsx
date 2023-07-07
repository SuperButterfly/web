import React, { useState, useRef, useEffect } from "react";
import styles from "./contextMenuData.module.css";
import { useOnClickOutside } from "./HelperContext";

const ContextMenuData = ({ x, y, closeContextMenu }) => {
  // // const [contextMenuVisible, setContextMenuVisible] = useState(false);

  const contextMenuRef = useRef(null);

  // const handleOptionClick = (option) => {
  //   // Aquí puedes manejar la opción seleccionada
  //   console.log("Opción seleccionada:", option);

  //   // Cerrar el menú contextual
  //   setContextMenuVisible(false);
  // };

  // const handleClick = (event) => {
  //   // Verificar si el clic se realizó dentro del menú contextual
  //   if (contextMenuRef.current && contextMenuRef.current.contains(event.target)) {
  //     return;
  //   }

  //   // Cerrar el menú contextual si se hace clic fuera de él
  //   setContextMenuVisible(false);
  // };

  // useEffect(() => {
  //   // Agregar el evento global de clic cuando el menú contextual está visible
  //   if (contextMenuVisible) {
  //     document.addEventListener("click", handleClick);
  //   }

  //   // Eliminar el evento global de clic cuando el menú contextual se oculta
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, [contextMenuVisible]);
  useOnClickOutside(contextMenuRef, closeContextMenu);

  return (
    <div
      style={{ top: `${y}px`, left: `${x}px`, position: "absolute", zIndex: 1 }}
      onClick={() => closeContextMenu()}
      ref={contextMenuRef}
      className={styles.container}
    >
      <div className={styles.contextMenu}>
        Cut <span>Ctrl+X</span>
      </div>
      <div className={styles.contextMenu}>
        Copy <span>Ctrl+C</span>
      </div>
      <div className={styles.contextMenu}>
        Paste <span>Ctrl+V</span>
      </div>
      <div className={styles.contextMenu}>
        Paste special <span> {">"} </span>
      </div>
      <hr className={styles.separator} />

      <div className={styles.contextMenu}>Insert 1 row above</div>
      <div className={styles.contextMenu}>Insert 1 column left</div>
      <div className={styles.contextMenu}>
        Insert cells <span> {">"} </span>
      </div>
      <hr className={styles.separator} />

      <div className={styles.contextMenu}>Delete row</div>
      <div className={styles.contextMenu}>Delete column</div>
      <div className={styles.contextMenu}>
        Delete cells <span> {">"} </span>
      </div>
      <hr className={styles.separator} />

      <div className={styles.contextMenu}>Create a filter</div>
      <div className={styles.contextMenu}>Filter by cell value</div>
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
