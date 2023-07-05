/* global localStorage */
import './sections.css';
import { useState, useEffect } from 'react';
import { MainSections, sectionsImg } from './sectionslist.js';
const urlbase = '/workspace/assets/'

const Sections = ({controls}) => {

  const [expand, setExpand] = controls
  const [ content, setContent ] = useState('')
  
  useEffect(()=>{
    return () => {
      setExpand({...expand, active: false})
    }
  }, [])
  
  const handleClick = ev => {
    setContent(ev.target.id)
    setExpand({
      active: true,
      size:'560px'
    })
  }
  
  const handleDrag = (id) => {
    localStorage.text=id;
    console.log(id)
  };
  
  console.log(content);
  
  return (
    <div className="sections-container">
    {
        MainSections && MainSections.map((MainSection, idx) => (
            <div className="sections-container1" key={idx}>
              <span className="sections-span" >{MainSection.title}</span>
              {
                MainSection.subSections.map((subSection, idx ) => (
                    <div className="sections-container2" key={idx} >
                      <span
                        className="sections-text1"
                        onClick={handleClick}
                        id={subSection}
                      >
                        {subSection}
                      </span>
                    </div>
                  )
                )
              }
            </div>
          )
        )
      }
      {
        expand.active ? 
        <div className="super-container">
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
          { sectionsImg[content].map((sectionsImg, idx ) =>(
            <img
              draggable="true"
              onDrag={() => handleDrag(sectionsImg)}
              src={`${urlbase}${sectionsImg}.jpg`}
              alt={sectionsImg}
              className="super-image"
              id={idx}
              key={idx}
            />
          ))}
          </div>
        </div>
        : null
      }
    </div>
  );
};


export default Sections;
