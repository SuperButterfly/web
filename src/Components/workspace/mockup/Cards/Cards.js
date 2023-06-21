import { useState } from 'react'
import './Cards.css'

export default function Cards() {
  const [display, setDisplay] = useState({
    plantilla1: false,
    plantilla2: false,
    plantilla3: false,
    plantilla4: false,
    plantilla5: false,
    plantilla6: false,
    plantilla7: false,
    plantilla8: false,
    plantilla9: false,
    plantilla10: false,
    plantilla11: false,
    plantilla12: false,
  })

  const changeDisplay = (key, value) => {
    setDisplay((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  return (
    <>
      <div className="plantilla1 template-card">
        <div
          onMouseEnter={() => changeDisplay('plantilla1', true)}
          onMouseLeave={() => changeDisplay('plantilla1', false)}
          className="blank-project"
        >
          <div className={display.plantilla1 ? 'card-overlay' : 'display'}>
            <button className="btn-overlay start">Start Building</button>
          </div>
          <span className="blank-text">Blank</span>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Start from scratch</span>
            <div className="author-section">
              <span className="template-type">Blank project</span>
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
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Traveler template</span>
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
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Character NFT template</span>
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
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Medica template</span>
            <div className="author-section">
              <span className="template-type">Template </span>
            </div>
          </div>
        </div>
      </div>
      <div className="template-card">
        <div
          onMouseEnter={() => changeDisplay('plantilla5', true)}
          onMouseLeave={() => changeDisplay('plantilla5', false)}
          className="plantilla5 img-container"
        >
          <div className={display.plantilla5 ? 'card-overlay' : 'display'}>
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Medica template</span>
            <div className="author-section">
              <span className="template-type">Template </span>
            </div>
          </div>
        </div>
      </div>
      <div className="template-card">
        <div
          onMouseEnter={() => changeDisplay('plantilla6', true)}
          onMouseLeave={() => changeDisplay('plantilla6', false)}
          className="plantilla6 img-container"
        >
          <div className={display.plantilla6 ? 'card-overlay' : 'display'}>
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Medica template</span>
            <div className="author-section">
              <span className="template-type">Template </span>
            </div>
          </div>
        </div>
      </div>
      <div className="template-card">
        <div
          onMouseEnter={() => changeDisplay('plantilla7', true)}
          onMouseLeave={() => changeDisplay('plantilla7', false)}
          className="plantilla7 img-container"
        >
          <div className={display.plantilla7 ? 'card-overlay' : 'display'}>
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Medica template</span>
            <div className="author-section">
              <span className="template-type">Template </span>
            </div>
          </div>
        </div>
      </div>
      <div className="template-card">
        <div
          onMouseEnter={() => changeDisplay('plantilla8', true)}
          onMouseLeave={() => changeDisplay('plantilla8', false)}
          className="plantilla8 img-container"
        >
          <div className={display.plantilla8 ? 'card-overlay' : 'display'}>
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Medica template</span>
            <div className="author-section">
              <span className="template-type">Template </span>
            </div>
          </div>
        </div>
      </div>
      <div className="template-card">
        <div
          onMouseEnter={() => changeDisplay('plantilla9', true)}
          onMouseLeave={() => changeDisplay('plantilla9', false)}
          className="plantilla9 img-container"
        >
          <div className={display.plantilla9 ? 'card-overlay' : 'display'}>
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Medica template</span>
            <div className="author-section">
              <span className="template-type">Template </span>
            </div>
          </div>
        </div>
      </div>
      <div className="template-card">
        <div
          onMouseEnter={() => changeDisplay('plantilla10', true)}
          onMouseLeave={() => changeDisplay('plantilla10', false)}
          className="plantilla10 img-container"
        >
          <div className={display.plantilla10 ? 'card-overlay' : 'display'}>
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Medica template</span>
            <div className="author-section">
              <span className="template-type">Template </span>
            </div>
          </div>
        </div>
      </div>
      <div className="template-card">
        <div
          onMouseEnter={() => changeDisplay('plantilla11', true)}
          onMouseLeave={() => changeDisplay('plantilla11', false)}
          className="plantilla11 img-container"
        >
          <div className={display.plantilla11 ? 'card-overlay' : 'display'}>
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Medica template</span>
            <div className="author-section">
              <span className="template-type">Template </span>
            </div>
          </div>
        </div>
      </div>
      <div className="template-card">
        <div
          onMouseEnter={() => changeDisplay('plantilla12', true)}
          onMouseLeave={() => changeDisplay('plantilla12', false)}
          className="plantilla12 img-container"
        >
          <div className={display.plantilla12 ? 'card-overlay' : 'display'}>
            <div className="pt-stack-card">
              <div className="btn-wrapper">
                <button className="btn-overlay preview">Quick Preview</button>
              </div>
              <button className="btn-overlay start">Start Building</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left-side">
            <span className="project-title">Medica template</span>
            <div className="author-section">
              <span className="template-type">Template </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
