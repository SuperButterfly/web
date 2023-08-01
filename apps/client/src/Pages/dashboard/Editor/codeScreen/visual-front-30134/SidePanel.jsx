import React from 'react';
import styles from './SidePanel.module.css';

const SidePanel = ({ onClose }) => {
  return (
    <div className={styles.panelContainer}>
        <svg className={styles.iconGmail} alt="Gmail"></svg>
        <h5 className={styles.iconTitle}>Gmail</h5>
        <button className={styles.closeButton} onClick={onClose}>x</button>
    <hr></hr>
    </div>
  );
};

export default SidePanel;
