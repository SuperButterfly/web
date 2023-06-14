import './text.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateComponent } from '../../../../../src/redux/actions/component.js';

const Text = ()=>{
  const {componentSelected} = useSelector(state=>state.component)
  const {id} = useSelector(state=>state.component.componentSelected)
  //const {style} = useSelector(state=>state.component.componentSelected.properties)
  const [input,setInput]=useState({color:""})
  const dispatch = useDispatch();
  
  
  const handleInputChange = ev =>{
    setInput({...input,[ev.target.name]:ev.target.value})
  }
  
  const handleBlur = ev =>{
    const newStyle={
      ...componentSelected.properties.style,
      color: ev.target.value
    }
    handleUpdateComponent(newStyle)
    /*dispatch(updateComponent(componentSelected.id,{
      ...componentSelected,
      properties:{
        ...componentSelected.properties,
        style:{
          ...componentSelected.properties.style,
          color: ev.target.value
        }
      }
    }))*/
    
  }
  
  const deleteColor = () =>{
    const styleComponent = componentSelected.properties.style;
    
    handleUpdateComponent({
      ...styleComponent,
      color:"#000000"
    })
    setInput({color:"#000000"})
  }
  
  const handleUpdateComponent = newStyleComponent =>{
    dispatch(updateComponent(componentSelected.id,{
      ...componentSelected,
      properties:{
        ...componentSelected.properties,
        style:{
          ...newStyleComponent
        }
      }
    }))
  }
  
  useEffect(()=>{
    if(componentSelected && componentSelected.properties&&componentSelected.properties.style){
      let colorText = {color:"#000000"}
      const stylesComponent = componentSelected.properties.style;
      if(stylesComponent.color&&stylesComponent.color.length){
        colorText={color: stylesComponent.color}
      }
      setInput(colorText)
    }
  },[id])
  
  return (
    <div className="text-container">
      <div className="text-header">
        <span className="text-title">Text</span>
        <svg onClick={deleteColor} viewBox="0 0 1024 1024" className="-index-icon2">
          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div className="text-color-container">
        <div style={{backgroundColor:input&&input.color?input.color:'#000000'}} className="text-color-icon" />
        <input name="color" value={input.color} onChange={handleInputChange} onBlur={handleBlur} className="text-color-input"></input>
      </div>
    </div>
  )
}

export default Text;