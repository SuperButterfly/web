import React from 'react'
import './projectTemplate.css'

function ProjectTemplate({ onClose }) {
  return (
    <>
      <div className="template-page-container">
        <div className="template-page-header-container">
          <h3>Template Name</h3>
          <div onClick={onClose} className="template-page-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326a.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042L10.94 12L5.72 6.78a.75.75 0 0 1 0-1.06Z"
              />
            </svg>
          </div>
        </div>
        <div className="template-page-body-container">
          <iframe
            src="https://character-nft-template.teleporthq.app/"
            className="iframe-preview"
          ></iframe>
          {/* <span>Aqui ira la pagina completa</span> */}
        </div>
        <div className="template-page-bottom-container">
          <div className="template-page-container-buttons">
            <button className="template-page-fullScreen">
              View Full Screen &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 19L19 6m0 0v12.48M19 6H6.52"
                />
              </svg>
            </button>
            <button className="template-page-building">Start Building</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectTemplate
