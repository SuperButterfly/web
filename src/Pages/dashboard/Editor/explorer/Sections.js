/* global localStorage */
import './sections.css';
import SuperContainer from './SuperContainer'
import { useState } from 'react';
import { MainSections } from './sectionslist.js';

const Sections = ({controls}) => {

  const [expand, setExpand] = controls
  const [ content, setContent ] = useState('')
  const handleClick = ev => {
    setContent(ev.target.id)
    setExpand({
      active: true,
      size:'560px'
    })
  }

  return (
    <div className="sections-container">
    {
        MainSections && MainSections.map((MainSection, idx) => (
            <div className="sections-container1" 
              key={idx}
            >
              <span className="sections-span" >{MainSection.title}</span>
              {
                MainSection.subSections.map((subSection, idx ) => (
                    <div className={subSection===content?"sections-cotainer-selected":"sections-container2"} key={idx} >
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
          <SuperContainer 
            setExpand ={setExpand}
            setContent={setContent}
            content={content} 
            expand={expand}
          />: null
          
      }
    </div>
  );
};


export default Sections;
