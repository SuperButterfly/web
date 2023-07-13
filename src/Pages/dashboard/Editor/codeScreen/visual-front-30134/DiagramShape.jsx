import React ,{useState}from 'react';
import styles from './DiagramShape.module.css';
import logoAythen from "./icons/logoAythen.png";
import DiagramOptions from './DiagramOptions';

const DiagramShape = ({
    shape, 
  index,
  expandedRectangulos,
  handleShapeDrag,
  toggleExpand,
  handleCopyShape,
  handleRenameShape,
  handleInputChange,
  handleConfirmRename,
  handleCancelRename,
  handleDeleteShape
}) => {
    const [position, setPosition] = useState({ x: shape.position.x, y: shape.position.y });
  
    const handleDragStart = (event) => {
      event.preventDefault();
    };
  
    const handleDrag = (event) => {
      const newX = position.x + event.clientX;
      const newY = position.y + event.clientY;
      setPosition({ x: newX, y: newY });
      handleShapeDrag(event, index, newX, newY);
    };
  
    return (
    <React.Fragment key={index}>
        <div
            className={styles.diagramShape}
            style={{ left: position.x, top: position.y }}
            draggable={true}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
        >
            {shape.type === 'aythen' && (
                <div className={`${styles.diagramShape} ${expandedRectangulos.rectangulo1 ? styles.expandedRectangulo : ''}`}>
                    <div className={styles.infoRectangle}>
                        <img className={styles.logoAythen} src={logoAythen} alt="Aythen" />
                        <p className={styles.infoText}>Info</p>
                        <svg className={styles.iconDots} alt='dots' onClick={() => toggleExpand('rectangulo1')}></svg>
                        {expandedRectangulos.rectangulo1 && (
                            <DiagramOptions
                              index={index}
                              handleCopyShape={handleCopyShape}
                              handleRenameShape={handleRenameShape}
                              handleInputChange={handleInputChange}
                              handleConfirmRename={handleConfirmRename}
                              handleCancelRename={handleCancelRename}
                              handleDeleteShape={handleDeleteShape}
                              shape={shape}
                            />
                        )}
                    </div>
                </div>
            )}

            {shape.type === 'slack' && (
                <div className={`${styles.diagramShape} ${expandedRectangulos.rectangulo2 ? styles.expandedRectangulo : ''}`}>
                    <div className={styles.infoRectangle}>
                        <svg className={styles.iconSlack} alt="Slack"></svg>
                        <p className={styles.infoText}>Info</p>
                        <svg className={styles.iconDots} alt='dots' onClick={() => toggleExpand('rectangulo2')}></svg>
                        {expandedRectangulos.rectangulo2 && (
                              <DiagramOptions
                              index={index}
                              handleCopyShape={handleCopyShape}
                              handleRenameShape={handleRenameShape}
                              handleInputChange={handleInputChange}
                              handleConfirmRename={handleConfirmRename}
                              handleCancelRename={handleCancelRename}
                              handleDeleteShape={handleDeleteShape}
                              shape={shape}
                            />
                        )}
                    </div>
                </div>
            )}
            {shape.type === 'trello' && (
                <div className={`${styles.diagramShape} ${expandedRectangulos.rectangulo3 ? styles.expandedRectangulo : ''}`}>
                    <div className={styles.infoRectangle}>
                        <svg className={styles.iconTrello} alt="Trello"></svg>
                        <p className={styles.infoText}>Info</p>
                        <svg className={styles.iconDots} alt='dots' onClick={() => toggleExpand('rectangulo3')}></svg>
                        {expandedRectangulos.rectangulo3 && (
                              <DiagramOptions
                              index={index}
                              handleCopyShape={handleCopyShape}
                              handleRenameShape={handleRenameShape}
                              handleInputChange={handleInputChange}
                              handleConfirmRename={handleConfirmRename}
                              handleCancelRename={handleCancelRename}
                              handleDeleteShape={handleDeleteShape}
                              shape={shape}
                            />
                        )}
                    </div>
                </div>
            )}
            {shape.type === 'gmail' && (
                <div className={`${styles.diagramShape} ${expandedRectangulos.rectangulo4 ? styles.expandedRectangulo : ''}`}>
                    <div className={styles.infoRectangle}>
                        <svg className={styles.iconGmail} alt="Gmail"></svg>
                        <p className={styles.infoText}>Info</p>
                        <svg className={styles.iconDots} alt='dots' onClick={() => toggleExpand('rectangulo4')}></svg>
                        {expandedRectangulos.rectangulo4 && (
                              <DiagramOptions
                              index={index}
                              handleCopyShape={handleCopyShape}
                              handleRenameShape={handleRenameShape}
                              handleInputChange={handleInputChange}
                              handleConfirmRename={handleConfirmRename}
                              handleCancelRename={handleCancelRename}
                              handleDeleteShape={handleDeleteShape}
                              shape={shape}
                            />
                        )}
                    </div>
                </div>
            )}
            {shape.type === 'excel' && (
                <div className={`${styles.diagramShape} ${expandedRectangulos.rectangulo5 ? styles.expandedRectangulo : ''}`}>
                    <div className={styles.infoRectangle}>
                        <svg className={styles.iconExcel} alt="Excel"></svg>
                        <p className={styles.infoText}>Info</p>
                        <svg className={styles.iconDots} alt='dots' onClick={() => toggleExpand('rectangulo5')}></svg>
                        {expandedRectangulos.rectangulo5 && (
                              <DiagramOptions
                              index={index}
                              handleCopyShape={handleCopyShape}
                              handleRenameShape={handleRenameShape}
                              handleInputChange={handleInputChange}
                              handleConfirmRename={handleConfirmRename}
                              handleCancelRename={handleCancelRename}
                              handleDeleteShape={handleDeleteShape}
                              shape={shape}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>

        {index < shape.length + 1 && <hr className={styles.dottedLine} />}
    </React.Fragment>
    );
};

export default DiagramShape;