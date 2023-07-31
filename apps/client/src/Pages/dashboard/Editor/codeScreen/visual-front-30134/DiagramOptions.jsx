import React, {useState} from 'react';
import styles from './DiagramShape.module.css'


const Options = ({index,
  shape})=>{
  const [shapes, setShapes] = useState([]);
  const handleShapeDrag = (event, index) => {
      const newPosition = {
        x: event.clientX,
        y: event.clientY
      }
      const updatedShapes = [...shapes]
        updatedShapes[index].position = newPosition
        setShapes(updatedShapes)
    };
    
    const handleCopyShape = (index) => {
      const shapeToCopy = shapes[index]
      const copiedShape = {
        ...shapeToCopy,
        position: { ...shapeToCopy.position }
      }
      setShapes([...shapes, copiedShape])
    };
  const handleDeleteShape = (index) => {
    const updatedShapes = shapes.filter((_, i) => i !== index)
    setShapes(updatedShapes)
  };
  const handleRenameShape = (index) => {
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes]
        updatedShapes[index] = {
          ...updatedShapes[index],
          newText: updatedShapes[index].infoText,
          isEditing: true
        }
      return updatedShapes
    });
  };
  const handleInputChange = (event, index) => {
    const { value } = event.target
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes]
      updatedShapes[index].newText = value
      return updatedShapes
    })
  };
  const handleConfirmRename = (index) => {
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes]
      updatedShapes[index].infoText = updatedShapes[index].newText
      updatedShapes[index].isEditing = false
      return updatedShapes
    })
  };
  const handleCancelRename = (index) => {
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes]
      updatedShapes[index].isEditing = false
      return updatedShapes
    })
  }
return(
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
  </div>)
      };
      
export default Options;