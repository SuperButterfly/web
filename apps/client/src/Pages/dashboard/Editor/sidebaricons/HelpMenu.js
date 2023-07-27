import './helpmenu.css'

//  - - - - DESCOMENTAR PARA TAREA #11 Cambiar posicion shortcut - - - - - - - - - - - - -

import Modal from 'react-modal'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
const HelpMenu = ({ isHelpOn }) => {
  //  - - - - DESCOMENTAR PARA TAREA #11 Cambiar posicion shortcut - - - - - - - - - - - - -

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div
      className="component-container"
      style={isHelpOn ? { display: 'flex' } : { display: 'none' }}
    >
      <svg viewBox="0 0 1024 1024" className="component-icon">
        <path d="M342 214l468 298-468 298v-596z" className=""></path>
      </svg>
      <div className="component-container1">
        <Link
          to="https://web2.aythen.com/en/category/getting-started"
          style={{ width: '100%', textDecoration: 'none' }}
        >
          <div className="component-container2">
            <span className="">Intro</span>
          </div>
        </Link>
        <Link
          to="https://web2.aythen.com/en/category/getting-started"
          style={{ width: '100%', textDecoration: 'none' }}
        >
          <div className="component-container3">
            <span className="">Tutorials</span>
          </div>
        </Link>
        <div className="component-container4">
          <span className="" onClick={handleModal}>
            Shortcuts
          </span>
          <Modal
            className="help-menu-modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <section
              className={`${modalIsOpen ? 'shortcuts-container' : 'none'}`}
            >
              <header className="shortcuts-container-header">
                <span className="shortcuts-title">Keyboard Shortcuts</span>
                <div className="shortcuts-icon-container">
                  <svg
                    className="shortcuts-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 256 256"
                    onClick={closeModal}
                  >
                    <path
                      fill="currentColor"
                      d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
                    />
                  </svg>
                </div>
              </header>
              <article className="shortcuts-container-body">
                <div className="flex-container-column">
                  <div className="flex-container">
                    <span>Mark as Unread</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">Shift</span>
                      <span className="shortcuts-item">U</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Archive Chat</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">Shift</span>
                      <span className="shortcuts-item">E</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Pin Chat</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">Shift</span>
                      <span className="shortcuts-item">P</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Search Chat</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">Shift</span>
                      <span className="shortcuts-item">F</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Next Chat</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">Tab</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>New Group</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">Shift</span>
                      <span className="shortcuts-item"> N</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Increase Speed of Selected Voice Message</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Shift</span>
                      <span className="shortcuts-item">.</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Settings</span>\
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">,</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Gif Panel</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">G</span>
                    </div>
                  </div>
                </div>
                <div className="flex-container-column">
                  <div className="flex-container">
                    <span>Mute</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">Shift</span>
                      <span className="shortcuts-item">M</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Delete Chat</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">Backspace</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Search</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">/</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Next Chat</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">N</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Previous Chat</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">Shift</span>
                      <span className="shortcuts-item">Tab</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Profile and About</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">P</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Decrease Speed of Selected Voice Message</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Shift</span>
                      <span className="shortcuts-item">,</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Emoji Panel</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">E</span>
                    </div>
                  </div>
                  <div className="flex-container">
                    <span>Sticker Panel</span>
                    <div className="flex-container">
                      <span className="shortcuts-item">Ctrl</span>
                      <span className="shortcuts-item">Alt</span>
                      <span className="shortcuts-item">S</span>
                    </div>
                  </div>
                </div>
              </article>
              {/* <footer className="shortcuts-container-footer">
              <button className="shortcuts-button">OK</button>
            </footer> */}
            </section>
          </Modal>
        </div>
        <Link
          to={'https://discord.com/invite/EQFqdJZU'}
          style={{ width: '100%', textDecoration: 'none' }}
        >
          <div className="component-container6">
            <span className="">Github</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HelpMenu
