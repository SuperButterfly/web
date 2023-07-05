import React, { useState, useRef, useEffect } from "react";
import styles from "./contextMenuData.module.css";

const ContextMenuData = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  const contextMenuRef = useRef(null);

  const handleContextMenu = (event) => {
    event.preventDefault();

    const { clientX, clientY } = event;
    setContextMenuPosition({ x: clientX, y: clientY });
    setContextMenuVisible(true);
  };

  const handleOptionClick = (option) => {
    // Aquí puedes manejar la opción seleccionada
    console.log("Opción seleccionada:", option);

    // Cerrar el menú contextual
    setContextMenuVisible(false);
  };

  const handleClick = (event) => {
    // Verificar si el clic se realizó dentro del menú contextual
    if (contextMenuRef.current && contextMenuRef.current.contains(event.target)) {
      return;
    }

    // Cerrar el menú contextual si se hace clic fuera de él
    setContextMenuVisible(false);
  };

  useEffect(() => {
    // Agregar el evento global de clic cuando el menú contextual está visible
    if (contextMenuVisible) {
      document.addEventListener("click", handleClick);
    }

    // Eliminar el evento global de clic cuando el menú contextual se oculta
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [contextMenuVisible]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1, // Ajusta el valor de zIndex según sea necesario
      }}
      onContextMenu={handleContextMenu}
    >
      {contextMenuVisible && (
        <div
          ref={contextMenuRef}
          className={styles.container}
          style={{ top: contextMenuPosition.y, left: contextMenuPosition.x }}
        >
          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 1")}>
            Cut <span>Ctrl+X</span>
          </div>
          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 1")}>
            Copy <span>Ctrl+C</span>
          </div>
          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 2")}>
            Paste <span>Ctrl+V</span>
          </div>
          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 3")}>
            Paste special <span> {">"} </span>
          </div>
          <hr className={styles.separator} />

          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 3")}>
            Insert 1 row above
          </div>
          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 3")}>
            Insert 1 column left
          </div>
          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 3")}>
            Insert cells <span> {">"} </span>
          </div>
          <hr className={styles.separator} />

          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 3")}>
            Delete row
          </div>
          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 3")}>
            Delete column
          </div>
          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 3")}>
            Delete cells <span> {">"} </span>
          </div>
          <hr className={styles.separator} />

          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 3")}>
            Create a filter
          </div>
          <div className={styles.contextMenu} onClick={() => handleOptionClick("Opción 3")}>
            Filter by cell value
          </div>
        </div>
      )}
    </div>
  );
};

export default ContextMenuData;
