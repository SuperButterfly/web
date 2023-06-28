import "./contextMenuBackground.css"

const ContextMenuBackground = ({setVisible,visible,posicion,handleBG,typeBG}) =>{
  const handleClick = bg => {
    //if(typeBG.type!==bg){
      handleBG(bg)
    //}
    setVisible(!visible)
  }
  return (
    <div className="context-menu" style={ visible ? {
      top: posicion.top,
      left: posicion.left 
    }:{
      display: "none"
    }}>
      <div className="section-option">
        <div name="color" onClick={()=>handleClick("color")} className="container-option">
          <span>color</span>
        </div>
        <div name="gradient" onClick={()=>handleClick("gradient")} className="container-option">
          <span>gradient</span>
        </div>
        <div name="image" onClick={()=>handleClick("image")} className="container-option">
          <span>image</span>
        </div>
      </div>
    </div>
  )
}

export default ContextMenuBackground