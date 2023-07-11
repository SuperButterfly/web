import React from 'react';
import styles from './DiagramShape.module.css';

const Options = ({
  index,
  handleCopyShape,
  handleRenameShape,
  handleInputChange,
  handleConfirmRename,
  handleCancelRename,
  handleDeleteShape,
  shape,
}) => (
  <div className={styles.opcionesContenedor}>
    <div className={styles.opcion}>
      <svg className={styles.iconCopy} alt="Copy"></svg>
      <span onClick={() => handleCopyShape(index)}>Copy</span>
    </div>
    <div className={styles.opcion}>
      <svg className={styles.iconRename} alt="Rename"></svg>
      {shape.isEditing ? (
        <React.Fragment>
          <input
            className={styles.renameInput}
            value={shape.newText}
            onChange={(event) => handleInputChange(event, index)}
          />
          <button className={styles.confirmButton} onClick={() => handleConfirmRename(index)}>Check</button>
          <button className={styles.cancelButton} onClick={() => handleCancelRename(index)}>x</button>
        </React.Fragment>
      ) : (
        <span onClick={() => handleRenameShape(index)}>Rename</span>
      )}
    </div>
    <div className={styles.opcion}>
      <svg className={styles.iconDelete} alt="Delete"></svg>
      <span onClick={() => handleDeleteShape(index)}>Delete</span>
    </div>
  </div>
);

export default Options;