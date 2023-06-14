import React from 'react'
import circle from '../../assets/circulo.svg'
import square from '../../assets/cuadrado.svg'
import pointer from '../../assets/cursor.svg'
import text from '../../assets/t.svg'
import image from '../../assets/imagen.svg'
import file from '../../assets/editar-alt.svg'

const Sidebar = () => {
  return (
    <div style={{height:"620px"}} className="sidebar-container">
      <div className="sidebar-container1">
        <img src={pointer} alt="pointer icon" className="sidebar-icon"/>
        <img src={text} alt="text icon" className="sidebar-icon"/>
        <img src={square} alt="square icon" className="sidebar-icon"/>
        <img src={circle} alt="circle icon" className="sidebar-icon"/>
        <img src={image} alt="icon" className="sidebar-icon"/>
        <img src={file} alt="file icon" className="sidebar-icon"/>
      </div>
      <div className="sidebar-container2"></div>
    </div>
  )
}

export default Sidebar