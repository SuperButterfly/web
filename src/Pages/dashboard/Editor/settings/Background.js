import { useState, useEffect } from 'react'
import './background.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js';
import ContextMenuBackground from './ContextMenuBackground.js'

const Background = () => {
  const [visible,setVisible] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const [typeBG, setTypeBG] = useState({
    type:"",
    value:"",
    icon:{}
  })
  const {componentSelected} = useSelector(state=>state.component)
  const {id} = useSelector(state=>state.component.componentSelected)
  const dispatch = useDispatch();
  
  const handleClick = ev => {
    const x = ev.pageX;
    const y = ev.pageY;
    const left = x-100;
    const top = y-40;
    console.log({x,y})
    setVisible(!visible)
    setPos({top,left})
  }
  
  const handleBG = bg => {
    let newBg={}
    switch (bg) {
      case 'color':
        newBg={type:bg,value:"#D9D9D9",icon:{backgroundColor:"#D9D9D9"}}
        break;
      case 'image':
        newBg={type:bg, value:"https://web.aythen.com/workspace/assets/image.png",icon:{backgroundImage:"url('https://web.aythen.com/workspace/assets/image.png')"}}
        break;
      case 'gradient':
        newBg={type:bg, value:"linear-gradient(to right, #bdc3c7 0%, #2c3e50 100%)", icon:{backgroundImage:"linear-gradient(to right, #bdc3c7 0%, #2c3e50 100%)"}}
        break;
      default:
        newBg={type:"",value:"",icon:{}}
    }
    setTypeBG(newBg)
    addBackground(newBg.icon)
  }
  
  
  useEffect(()=>{
    setTypeBG({type:"",value:"",icon:{}})
    if(componentSelected&&componentSelected.properties&&componentSelected.properties.style){
      const bgComponent = Object.keys(componentSelected.properties.style).find(key=>key.startsWith("background"))
      if(bgComponent){
        const bgValue = componentSelected.properties.style[bgComponent]
        switch (bgComponent.slice(10)) {
          case 'Color':
            setTypeBG({type:'color',value:bgValue,icon:{backgroundColor:bgValue}})
            break;
          case 'Image':
            bgValue.includes('url')?
              setTypeBG({type: 'image',value:bgValue.match(/url\(['"]?([^'"]+)['"]?\)/i)[1],icon:{backgroundImage:bgValue}})
              :
              setTypeBG({type: 'gradient',value:bgValue.match(/linear-gradient\(([^)]+)\)/i)[1],icon:{backgroundImage:bgValue}})
            break;
          default:
            setTypeBG({type:"",value:"",icon:{}})
        }
      }
    }
  },[id])
  
  const handleInputChange = ev => {
    let newBg = handleStateBg(ev.target.value)
    setTypeBG(newBg)
  }
  
  const handleUpdateComponent = newStyle =>{
    
    dispatch(updateComponent(componentSelected.id,{
      ...componentSelected,
      properties:{
        ...componentSelected.properties,
        style:{
          ...newStyle
        }
      }
    }))
  }
  
  const handleStateBg = stateBg =>{
    let newBg = {...typeBG}
    switch(typeBG.type){
      case 'color':
        newBg={...newBg,value:stateBg, icon:{backgroundColor: stateBg}}
        break;
      case 'image':
        newBg={...newBg,value:stateBg, icon:{backgroundImage: `url('${stateBg}')`}}
        break;
      case 'gradient':
        newBg={...newBg,value:stateBg, icon:{backgroundImage: `linear-gradient(${stateBg})`}}
        break;
    }
    return newBg
  }
  
  const handleBur = ev =>{
    const newValue = ev.target.value;
    if(newValue){
      let newBg = handleStateBg(newValue)
      addBackground(newBg.icon)
    }else{
      handleBG(newValue)
    }
    
  }
  const addBackground = stateBg =>{
    if(componentSelected&&componentSelected.properties&&componentSelected.properties.style){
      let stylesComponent = {}
      for (const key in componentSelected.properties.style){
        if(!key.startsWith("background")){
          stylesComponent[key] = componentSelected.properties.style[key]
        }
      }
      handleUpdateComponent({...stylesComponent,...stateBg})
    }
  }
  
  const deleteBackground = () =>{
    if(componentSelected&&componentSelected.properties&&componentSelected.properties.style){
      let stylesComponent = {}
    
      for (const key in componentSelected.properties.style){
        if(!key.startsWith("background")){
          stylesComponent[key] = componentSelected.properties.style[key]
        }
      }
      setTypeBG({type:"",value:"",icon:{}})
      handleUpdateComponent(stylesComponent)
    }
  }
  
  return(
    <div className="background-container">
      <div className="background-component-header" onClick={handleClick}>
        <span className="title-background">Background</span>
        <svg viewBox="0 0 1024 1024" className="title-icon">
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div className="bgContainer" style={{ display: typeBG && typeBG.value && typeBG.value.length?"flex":"none"}}>
        <div className="bgIcon" style={typeBG.icon}/>  
        <input className="background-text02" onChange={handleInputChange} value={typeBG.value} onBlur={handleBur} />
        <svg onClick={deleteBackground} viewBox="0 0 1024 1024" className="radius-icon02"><path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path></svg>
      </div>
      <ContextMenuBackground handleBG={handleBG} posicion={pos} setVisible={setVisible} typeBG={typeBG} visible={visible} /> 
    </div>  
  )
}

export default Background