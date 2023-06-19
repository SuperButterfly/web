import { useState } from 'react'
import './Mockup.css'

export default function Mockup(){
  const [display, setDisplay] = useState({
    plantilla1: false,
    plantilla2: false,
    plantilla3: false,
    plantilla4: false,
  })

  const changeDisplay = (key, value) => {
    setDisplay((prevState) => ({
      ...prevState,
      [key]: value,
    }))
    console.log(display)
  }

  return (
    <div className="templates-wrapper">
      <div className="templates-topbar">
        <p className="templates-title">
          Customizable templates, handpicked just for you - for free!
        </p>
        <button className="pt-btn underline accent">
          <span className="manage-text">View All</span>
        </button>
      </div>
      <div className="template-cards-container">
        <div className="plantilla1 template-card">
          <div
            onMouseEnter={() => changeDisplay('plantilla1', true)}
            onMouseLeave={() => changeDisplay('plantilla1', false)}
            className="blank-project"
          >
            <div className={display.plantilla1 ? 'card-overlay' : 'display'}>
              <button className="btn-overlay start">
                Start Building
              </button>
            </div>
            <span className="blank-text">Blank</span>
          </div>
          <div className=" bottom-section">
            <div className=" left-side">
              <span className=" project-title">
                Start from scratch
              </span>
              <div className="author-section">
                <span className="template-type">
                  Blank project
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="template-card">
          <div
            onMouseEnter={() => changeDisplay('plantilla2', true)}
            onMouseLeave={() => changeDisplay('plantilla2', false)}
            className="plantilla2 img-container"
          >
            <div className={display.plantilla2 ? 'card-overlay' : 'display'}>
              <div className='pt-stack'>
                <div className='btn-wrapper'>
                  <button className='btn-overlay preview'>Quick Preview</button>
                </div>
                <button className="btn-overlay start">Start Building</button>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="left-side">
              <span className="project-title">
                Traveler template
              </span>
              <div className="author-section">
                <span className="template-type">Template </span>
              </div>
            </div>
          </div>
        </div>
        <div className="template-card">
          <div
            onMouseEnter={() => changeDisplay('plantilla3', true)}
            onMouseLeave={() => changeDisplay('plantilla3', false)}
            className="plantilla3 img-container"
          >
            <div className={display.plantilla3 ? 'card-overlay' : 'display'}>
              <div className='pt-stack'>
                <div className='btn-wrapper'>
                  <button className='btn-overlay preview'>Quick Preview</button>
                </div>
                <button className="btn-overlay start">Start Building</button>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="left-side">
              <span className="project-title">
                Character NFT template
              </span>
              <div className="author-section">
                <span className="template-type">Template </span>
              </div>
            </div>
          </div>
        </div>
        <div className="template-card">
        <div
            onMouseEnter={() => changeDisplay('plantilla4', true)}
            onMouseLeave={() => changeDisplay('plantilla4', false)}
            className="plantilla4 img-container"
          >
            <div className={display.plantilla4 ? 'card-overlay' : 'display'}>
              <div className='pt-stack'>
                <div className='btn-wrapper'>
                  <button className='btn-overlay preview'>Quick Preview</button>
                </div>
                <button className="btn-overlay start">Start Building</button>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="left-side">
              <span className="project-title">
                Medica template
              </span>
              <div className="author-section">
                <span className="template-type">Template </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
