import React from 'react';
import styles from './DiagramPanel.module.css';

const DiagramPanel = ({ onClose }) => {
  return (
    <div className={styles.panelContainer}>
      <h2>Node Panel</h2>
      <button onClick={onClose}>Cerrar</button>
      {/* Aquí puedes agregar el contenido y la lógica del panel */}
    </div>
  );
};

export default DiagramPanel;