import { useState, useEffect } from 'react'
import './background.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateComponent } from '../../../../../src/redux/actions/component.js';
import ContextMenuBackground from './ContextMenuBackground.js'
import BgContent from "./BgContent.js"
//import { type } from 'os';

const Background = () => {
  /*const initialInputBg = {
    type:"",
    value:"",
    icon:{}
  }*/
  const [visible,setVisible] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const [typeBG, setTypeBG] = useState([])
  const {componentSelected} = useSelector(state=>state.component)
  const {id} = useSelector(state=>state.component.componentSelected)
  const dispatch = useDispatch();
  
  const handleClick = ev => {
    const x = ev.pageX;
    const y = ev.pageY;
    const left = x-400;
    const top = y-50;
    console.log({x,y})
    setVisible(!visible)
    setPos({top,left})
  }
  
  const handleBG = (bg,idx) => {
    let newBg={}
    let auxTypeBg = typeBG

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
    }  
    
    setTypeBG(
      auxTypeBg && auxTypeBg[0] && auxTypeBg[0].type === "color" ?
      [newBg] 
      : 
      bg==="color"?[newBg]:[...auxTypeBg,newBg]
    )
    addBackground(newBg.icon)
  }
  
  
  useEffect(()=>{
    //setTypeBG()
    if(componentSelected&&componentSelected.properties&&componentSelected.properties.style){
      const bgComponent = Object.keys(componentSelected.properties.style).find(key=>key.startsWith("background"))
      if(bgComponent){
        const bgValue = componentSelected.properties.style[bgComponent]
        console.log(bgValue)
        switch (bgComponent.slice(10)) {
          case 'Color':
            setTypeBG([{type:'color',value:bgValue,icon:{backgroundColor:bgValue}}])
            break;
          case 'Image':
            const auxMatch = bgValue.match(/(linear-gradient|url)\(([^)]+)\)/g)
            //console.log(auxMatch)
            setTypeBG(auxMatch.map(bg=>
              bg.startsWith("url")?{
                type: 'image',
                value: bg.match(/url\(['"]?([^'"]+)['"]?\)/i)[1],
                icon:{
                  backgroundImage:bg
                }
              }:{
                type: 'gradient',
                value:bg.match(/linear-gradient\(([^)]+)\)/i)[1],
                icon:{backgroundImage:bg}
              })
            )
            // log to setting inuts
            break;
          default:
            setTypeBG([/*{type:"",value:"",icon:{}}*/])
        }
      }
    }
  },[id])
  
  const handleInputChange = (ev,idx) => {
    let newBg = handleStateBg(ev.target.value,idx)
    console.log(typeBG[idx])
    console.log(newBg)
    let auxTypeBg= typeBG;
    auxTypeBg[idx]=newBg
    console.log(auxTypeBg)
    setTypeBG(auxTypeBg)
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
  
  const handleStateBg = (stateBg,idx) =>{
    let newBg = {...typeBG[idx]}
    switch(typeBG[idx].type){
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
  
  const handleBlur = (ev,idx) =>{
    const newValue = ev.target.value;
    if(newValue){
      let newBg = handleStateBg(newValue,idx)
      addBackground(newBg.icon)
    }else{
      handleBG(newValue,idx)
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
  
  const deleteBackground = (idx) =>{
    if(componentSelected&&componentSelected.properties&&componentSelected.properties.style){
      let stylesComponent = {}
    
      for (const key in componentSelected.properties.style){
        if(!key.startsWith("background")){
          stylesComponent[key] = componentSelected.properties.style[key]
        }
      }
      //const auxTypeBg = typeBG;
      //auxTypeBg[idx]={type:"",value:"",icon:{}}
      setTypeBG(typeBG.filter((_,i)=>i!==idx)) 
      console.log(typeBG.splice(idx,1))
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
      {
        typeBG&&typeBG.length>0?typeBG.map((inpBg,idx) => <BgContent 
          deleteBackground={deleteBackground} 
          handleInputChange={handleInputChange}
          value={inpBg.value}
          icon={inpBg.icon}
          setTypeBG={setTypeBG}
          handleBlur={handleBlur}
          idx={idx}
        />):null
      }
      <ContextMenuBackground handleBG={handleBG} posicion={pos} setVisible={setVisible} typeBG={typeBG} visible={visible} /> 
    </div>  
  )
}

export default Background