import './bgContent.css'
import { useState } from 'react'

const BgContent = ({deleteBackground,icon,value,handleBlur,idx,setTypeBG})=>{
    const [input,setInput]=useState({
        value
    })
    const handleInputChange = ev =>{
        setInput({...input,[ev.target.name]:ev.target.value})
    }
    return(
        <div className="bgContainer" >
            <div 
                className="bgIcon" 
                style={icon}
            />  
            <input 
                className="background-text02" 
                onChange={ev=>handleInputChange(ev,idx)} 
                value={input.value} 
                name="value"
                onBlur={(ev)=>handleBlur(ev,idx)} 
            />
            <svg 
                onClick={()=>deleteBackground(idx)} 
                viewBox="0 0 1024 1024" 
                className="radius-icon02">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
        </div>
    )
}

export default BgContent;