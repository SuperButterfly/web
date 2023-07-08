import style from'./superContainer.css'
import { useEffect, useRef,useState } from 'react';
import { sectionsImg } from './sectionslist.js';
import {getTarget} from '@/redux/actions/projects.js'
const urlbase = '/workspace/assets/'

const SuperContainer = ({setExpand,content,expand,setContent})=>{
    //const [isGrabbing,setIsGrabbing] = useState('')
    const handleDrag = (id) => {
        localStorage.setItem("text",id);
        
    };
    const closeSubMenu = ()=>{
        setExpand({...expand, active: false})
        setContent("")
    }
    useEffect(()=>{
        const handleClick = ev =>{
            if(!ev.target.classList.contains("sections-text1")&&!ev.target.classList.contains("super-container2"))
                closeSubMenu()
            /*{
                setExpand({...expand, active: false})
                setContent("")
            }*/
        }
        window.addEventListener('click',handleClick) 
        return ()=>window.removeEventListener('click',handleClick)
    },[])


    return(
        <div className="super-container">
            <div className="super-container1">
                <span>{content}</span>
                <svg viewBox="0 0 1024 1024" className="super-icon" onClick={closeSubMenu}>
                    <path 
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    onClick={() => setExpand({...expand, active: false})}
                    ></path>
                </svg>
            </div>
            <div className="super-container2">
            { 
                sectionsImg[content]&&sectionsImg[content].map((sectionImg, idx ) =>(
                    <img
                        draggable={true}
                        onDragStart={(ev)=>{
                            ev.stopPropagation();
                            //setIsGrabbing(sectionImg)
                        }}
                        onDrag={() => handleDrag(sectionImg)}
                        //onDragEnd={()=>getTarget()}
                        //style={{cursor: isGrabbing===sectionImg?"grabbing":"grab"}}
                        src={`${urlbase}${sectionImg}.jpg`}
                        alt={sectionImg}
                        className="super-image"
                        id={idx}
                        key={idx}
                    />
                ))
            }
            </div>
      </div>
    )
}

export default SuperContainer