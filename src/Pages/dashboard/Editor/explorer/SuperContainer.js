import './superContainer.css'
import { useEffect } from 'react';
import { sectionsImg } from './sectionslist.js';
const urlbase = '/workspace/assets/'

const SuperContainer = ({setExpand,content,expand})=>{
    
    const handleDrag = (id) => {
        localStorage.text=id;
        console.log(id)
    };

    useEffect(()=>{
        const handleClick = ev =>{
            if(!ev.target.classList.contains("sections-text1")&&!ev.target.classList.contains("super-container2")){
                console.log("Click SuperContainer :",ev.target)
                setExpand({...expand, active: false})
            }
        }
        window.addEventListener('click',handleClick)  
        return ()=> window.removeEventListener('click',handleClick)
    },[])
    return(
        <div id="super-panel-container" className="super-container">
            <div className="super-container1">
                <span>{content}</span>
                <svg viewBox="0 0 1024 1024" className="super-icon" onClick={() => setExpand({...expand, active: false})}>
                    <path 
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    onClick={() => setExpand({...expand, active: false})}
                    ></path>
                </svg>
            </div>
            <div className="super-container2">
            { 
                sectionsImg[content]&&sectionsImg[content].map((sectionsImg, idx ) =>(
                    <img
                        draggable="true"
                        onDrag={() => handleDrag(sectionsImg)}
                        src={`${urlbase}${sectionsImg}.jpg`}
                        alt={sectionsImg}
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