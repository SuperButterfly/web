import React, { useState } from 'react'
import styles from './Diagram.module.css'
import logoAythen from './icons/logoAythen.png'

const Diagram = () => {
  const [shapes, setShapes] = useState([])

  const handleShapeClick = (shapeType) => {
    const position = { x: 100, y: 100 }
    const newShape = { type: shapeType, position }
    setShapes([...shapes, newShape])
  }

  const handleShapeDrag = (event, index) => {
    const newPosition = {
      x: event.clientX,
      y: event.clientY
    }
    const updatedShapes = [...shapes]
    updatedShapes[index].position = newPosition
    setShapes(updatedShapes)
  }

  return (
    <div className={styles.diagramContainer}>
      <div className={styles.workspace}>
        <div className={styles.containerTitle}>
          <svg className={styles.iconSetting}></svg>
          <h2 className={styles.workspaceTitle}>Setting</h2>
        </div>
        <div className={styles.workspaceIcons}>
          <div
            className={styles.shape}
            onClick={() => handleShapeClick('aythen')}
          >
            <img
              className={styles.logoAythen}
              src={logoAythen}
              alt="Aythen"
            ></img>
          </div>
          <h5 className={styles.iconTitle}>Aythen</h5>
          <div
            className={styles.shape}
            onClick={() => handleShapeClick('slack')}
          >
            <svg className={styles.iconSlack} alt="Slack"></svg>
          </div>
          <h5 className={styles.iconTitle}>Slack</h5>
          <div
            className={styles.shape}
            onClick={() => handleShapeClick('trello')}
          >
            <svg className={styles.iconTrello} alt="Trello"></svg>
          </div>
          <h5 className={styles.iconTitle}>Trello</h5>
          <div
            className={styles.shape}
            onClick={() => handleShapeClick('gmail')}
          >
            <svg className={styles.iconGmail} alt="Gmail"></svg>
          </div>
          <h5 className={styles.iconTitle}>Gmail</h5>
          <div
            className={styles.shape}
            onClick={() => handleShapeClick('excel')}
          >
            <svg className={styles.iconExcel} alt="Excel"></svg>
          </div>
          <h5 className={styles.iconTitle}>Excel</h5>
        </div>
      </div>
      <div className={styles.diagram}>
        <div className={styles.diagramContent}>
          {shapes.map((shape, index) => (
            <React.Fragment key={index}>
              <div
                className={styles.diagramShape}
                style={{ left: shape.position.x, top: shape.position.y }}
                draggable
                onDragStart={(event) => event.preventDefault()}
                onDrag={(event) => handleShapeDrag(event, index)}
              >
                {shape.type === 'aythen' && (
                  <div className={styles.infoRectangle}>
                    <img
                      className={styles.logoAythen}
                      src={logoAythen}
                      alt="Aythen"
                    />
                    <p className={styles.infoText}>Info</p>
                  </div>
                )}
                {shape.type === 'slack' && (
                  <div className={styles.infoRectangle}>
                    <svg className={styles.iconSlack} alt="Slack"></svg>
                    <p className={styles.infoText}>Info</p>
                  </div>
                )}
                {shape.type === 'trello' && (
                  <div className={styles.infoRectangle}>
                    <svg className={styles.iconTrello} alt="Trello"></svg>
                    <p className={styles.infoText}>Info</p>
                  </div>
                )}
                {shape.type === 'gmail' && (
                  <div className={styles.infoRectangle}>
                    <svg className={styles.iconGmail} alt="Gmail"></svg>
                    <p className={styles.infoText}>Info</p>
                  </div>
                )}
                {shape.type === 'excel' && (
                  <div className={styles.infoRectangle}>
                    <svg className={styles.iconExcel} alt="Excel"></svg>
                    <p className={styles.infoText}>Info</p>
                  </div>
                )}
              </div>
              {index < shapes.length + 1 && (
                <hr className={styles.dottedLine} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Diagram
