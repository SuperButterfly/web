import React, { useState } from 'react'
import './createProject.css'
import { createPortal } from 'react-dom'

function CreateProject({ children, onClose }) {
  return (
    <div className="modal-create" id="modal-create">
      <div className="modal-create-header">
        <div className="modal-create-container-button">
          <button onClick={onClose} className="btn-create-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
              />
            </svg>
            &nbsp; Go Back
          </button>
          <h2>Create Project</h2>
        </div>
      </div>

      <div className="modal-create-content">{children}</div>
    </div>
  )
}

export default function CreateProjectPortal({ children, onClose }) {
  return createPortal(
    <CreateProject onClose={onClose}>{children}</CreateProject>,
    document.getElementById('root-portal')
  )
}
