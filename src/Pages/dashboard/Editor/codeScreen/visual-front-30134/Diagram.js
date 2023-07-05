import React, { useState } from 'react';
import styles from './Diagram.module.css';
import logoAythen from "./icons/logoAythen.png";

const Diagram = () => {
  const [shapes, setShapes] = useState([]);

  const handleShapeClick = (shapeType) => {
    // Lógica para agregar una nueva forma al diagrama
    // Puedes implementar esta función según tus necesidades
    // Puede implicar agregar un nuevo objeto a la matriz "shapes" con información sobre la forma (tipo, posición, etc.)
  };

  return (
        <div className={styles.diagramContainer}>
            <div className={styles.workspace}>
                <div className={styles.containerTitle}>
                    <svg className={styles.iconSetting}></svg>
                    <h2 className={styles.workspaceTitle}>Setting</h2>
                </div>
                <div className={styles.workspaceIcons}>
                    <div className={styles.shape} onClick={() => handleShapeClick('aythen')}>
                        <img className={styles.logoAythen} src={logoAythen}></img> 
                    </div>
                    <h5 className={styles.iconTitle}>Aythen</h5>
                    <div className={styles.shape} onClick={() => handleShapeClick('slack')}>
                        <svg className={styles.iconSlack}></svg>  
                    </div>
                    <h5 className={styles.iconTitle}>Slack</h5>
                    <div className={styles.shape} onClick={() => handleShapeClick('trello')}>
                        <svg className={styles.iconTrello}></svg>  
                    </div>
                    <h5 className={styles.iconTitle}>Trello</h5>
                    <div className={styles.shape} onClick={() => handleShapeClick('gmail')}>
                        <svg className={styles.iconGmail}></svg>  
                    </div>
                    <h5 className={styles.iconTitle}>Gmail</h5>
                    <div className={styles.shape} onClick={() => handleShapeClick('exel')}>
                        <svg className={styles.iconExcel}></svg>  
                    </div>
                    <h5 className={styles.iconTitle}>Excel</h5>
                    <div className={styles.shape} onClick={() => handleShapeClick('line')}>
                        <svg className={styles.iconLine}></svg>  
                    </div>
                    <h5 className={styles.iconTitle}>Line</h5>
                </div>
            </div>
            <div className={styles.diagram}>
                {shapes.map((shape, index) => (
                <div key={index} className={styles.diagramShape}>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Diagram;