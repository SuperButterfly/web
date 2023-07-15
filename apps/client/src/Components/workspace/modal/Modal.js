import React, { useEffect } from 'react'
import './modal.css'
import { createPortal } from 'react-dom'

function Modal({ children, onClose, hideClose = 'false' }) {
  const handleKeyClose = (e) => {
    if (e.key == 'Escape' && e.keyCode == 27) {
      if (onClose) {
        onClose()
      }
    }
  }

  useEffect(() => {
    const modalContent = document.getElementById('modal-content')
    const modalContainer = document.getElementById('modal-container')

    modalContent.focus()
    modalContainer.focus()

    window.addEventListener('click', (e) => {
      // console.log("target", e.target)
      // console.log("modalContent", modalContainer)
      if (e.target == modalContainer || e.target == modalContent) {
        onClose()
      }
    })
  }, [])

  return (
    <div className="modal" id="modal-container">
      <div
        id="modal-content"
        className="modal-content"
        tabIndex="0"
        onKeyUp={(e) => handleKeyClose(e)}
      >
        <button
          className={
            hideClose ? 'modal-close-button-notActive' : 'modal-close-button'
          }
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal({ children, onClose }) {
  return createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('root-portal')
  )
}
