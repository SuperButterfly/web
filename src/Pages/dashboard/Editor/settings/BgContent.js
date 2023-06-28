import './bgContent.css'
import { useState, useEffect } from 'react'

const BgContent = ({deleteBackground,icon,value,handleBlur,idx,type})=>{
    const [input,setInput]=useState(type==="color"?{
        value,
        //color:value
    }:{
        value
    })
    const handleInputChange = ev =>{
        setInput({...input,[ev.target.name]:ev.target.value})
    }
    useEffect(()=>{
        setInput({...input,value})
    },[value])
    return(
        <div className="bgContainer" >
            {

                type === "color"&&<input 
                    name="value"
                    type="color" 
                    className="bgIcon"
                    value={input.value} 
                    onChange={ev=>handleInputChange(ev,idx)} 
                    onBlur={(ev)=>handleBlur(ev,idx)} 
                />
            }{
                type==="gradient"&&<div 
                    className="bgIcon" 
                    style={icon}
                />  
            }{
                type==="image"&&<div 
                className="bgIcon" 
                style={icon}
            />  
            }
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