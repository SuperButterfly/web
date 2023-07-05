import React from "react";
import styles from "./Import.module.css";

function Import({ handleFileUpload, toggleModalImport }) {
  return (
    <>
      <div className={styles.closingDiv} onClick={toggleModalImport}></div>
      <div className={styles.modalImport}>
        <div className={styles.modalContentImport}>
          <h4>Upload your file</h4>
          <input type="file" onChange={handleFileUpload} className={styles.inputFile} />
          <button onClick={toggleModalImport}>Cerrar</button>
        </div>
      </div>
    </>
  );
}

export default Import;
