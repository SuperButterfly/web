import './cardProject.css'
import { useState } from 'react'
import ModalPortal from '../modal/Modal.js'

function CardProject({ handlePreview }) {
  return (
    <>
      <div className="card-project-container">
        <div className="card-button-list">
          <button onClick={handlePreview} className="card-button-preview">
            Quick Preview
          </button>
          <button className="card-button-Build">Start Building</button>
        </div>

        <div className="card-image-container">
          <img
            className="card-project-image"
            src="https://randomuser.me/api/portraits/men/15.jpg"
            alt="image"
          />
        </div>

        <div className="card-texts-container">
          <span className="card-project-title">Start from scratch</span>
          <span className="card-project-subtitle">Blank project</span>
        </div>
      </div>
    </>
  )
}

export default CardProject
