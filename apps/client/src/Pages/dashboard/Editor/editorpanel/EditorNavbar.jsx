import './editornavbar.css'
import React, { useState, useEffect, useRef } from 'react'
import Breakpoints from '../breakpoints/Breakpoints'
import { useSelector, useDispatch } from 'react-redux'
import { undo, redo } from '../../../../redux/slices/projectSlices'
import { update } from '@/redux/actions/projects'

const EditorNavbar = ({
  scaleValue,
  zoom,
  onMobileClick,
  onLandscapeMobileClick,
  onTabletClick,
  onLaptopClick,
  onDesktopClick,
  onWideClick,
  selectedButton,
  aumentarZoom,
  disminuirZoom
}) => {
  const nameOfComponent = useSelector((state) => state.project.target)
  const [currentSelectedButton, setCurrentSelectedButton] =
    useState(selectedButton)
  const { breakpoints } = useSelector((state) => state.breakpoints)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const id = nameOfComponent?.id
  const [shiftKey, setShiftKey] = useState(false)
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  useEffect(() => {
    setName(nameOfComponent.name)
  }, [nameOfComponent])

  /** listener para cambiar la variable de renderizado del zoom */
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Shift') {
        window.addEventListener('wheel', handleWheel)
      }
    }

    function handleWheel(event) {
      if (event.deltaY !== 0 && event.shiftKey) {
        setShiftKey(true)
        window.removeEventListener('wheel', handleWheel)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const zoomButton = () => {
    setShiftKey(false)
  }
  /** listener para cambiar la variable de renderizado del zoom */

  /** funciones para cambiar el nombre del proyecto */
  const handleDoubleClick = () => {
    setEditing(true)
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleBlur = () => {
    setEditing(false)
    dispatch(update({ name }, id))
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      inputRef.current.blur()
    }
  }
  /** funciones para cambiar el nombre del proyecto */

  /** funciones para seleccionar los breakpoint(tamano de la pantalla de edicion) */
  const handleOnClick = () => {
    closeBreak({ isBreakOn: true })
  }
  const [isBreakOn, closeBreak] = useState(false)
  /** funciones para seleccionar los breakpoint(tamano de la pantalla de edicion) */

  /** setea, guarda y agrega efecto a el boton de breakpoint usado */
  useEffect(() => {
    setCurrentSelectedButton(selectedButton)
  }, [selectedButton])

  const mobileButtonStyle = {
    backgroundColor:
      currentSelectedButton === 'mobile' ? '#36c9c9' : 'transparent'
  }

  const tabletButtonStyle = {
    backgroundColor:
      currentSelectedButton === 'tablet' ? '#ffa726' : 'transparent'
  }
  const landscapeButtonStyle = {
    backgroundColor:
      currentSelectedButton === 'landscape' ? '#9acd32' : 'transparent'
  }

  const laptopButtonStyle = {
    backgroundColor:
      currentSelectedButton === 'laptop' ? '#f0628d' : 'transparent'
  }
  const desktopButtonStyle = {
    backgroundColor:
      currentSelectedButton === 'desktop' ? '#cf53fb' : 'transparent'
  }

  const wideButtonStyle = {
    backgroundColor:
      currentSelectedButton === 'wide' ? '#f0f0f0' : 'transparent'
  }

  /** setea, guarda y agrega efecto a el boton de breakpoint usado */

  /** funciones de redo/undo mas listeners con la misma practica */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'z') {
        event.preventDefault()
        dispatch(undo())
      }
      if (event.ctrlKey && event.key === 'y') {
        event.preventDefault()
        dispatch(redo())
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dispatch])
  /** funciones de redo/undo mas listeners con la misma practica */

  return (
    <div className="editor-navbar-container">
      {/* seccion de seleccion de plantilla */}
      <div className="editor-navbar-container01">
        <div className="editor-navbar-container02">
          <div className="editor-navbar-container03">
            <svg
              className="editor-navbar-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 19H4c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h7c.2 0 .3 0 .5.1h-.4v4.5c0 .6.4 1 1 1H17V18c0 .6-.4 1-1 1zM4 20h12c1.1 0 2-.9 2-2V6.7c0-.5-.2-1.1-.6-1.4l-5-4.7C12.1.2 11.6 0 11 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2z"></path>
            </svg>
            <div className="editor-navbar-container04"></div>
          </div>
          <span
            className="editor-navbar-font"
            onDoubleClick={handleDoubleClick}
          >
            {editing ? (
              <input
                type="text"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                autoFocus
                ref={inputRef}
                className="input-style"
              />
            ) : (
              <span>{name}</span>
            )}
          </span>
        </div>
      </div>

      {/* seccion de botones querys */}

      <div className="editor-navbar-container10">
        <div className="editor-navbar-container11">
          <div className="slimButtons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 10"
              className="editorNavbarIcons"
              onClick={() => dispatch(undo())}
            >
              <path d="M.2 5.3c.3-.1.6-.1.8.2l1.4 2.2C2.8 4.6 4.6 0 10 0c6 0 7.9 5.7 8 8.8 0 .3-.2.6-.5.6s-.5-.2-.5-.5c-.1-2.7-1.7-7.7-7-7.7-4.6 0-6.2 4-6.5 6.7l1.9-1.6c.2-.2.6-.1.7.1.2.2.1.6-.1.8L2.6 10 .1 6.1c-.2-.2-.1-.6.1-.8z"></path>
            </svg>
          </div>

          <div className="slimButtons">
            <svg
              className="editorNavbarIcons"
              onClick={() => dispatch(redo())}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 10"
            >
              <path d="M17.8 5.3c-.2-.2-.6-.1-.7.1l-1.4 2.2C15.2 4.6 13.4 0 8 0 2 0 .1 5.7 0 8.8c0 .3.2.6.5.6s.5-.2.5-.5c.1-2.7 1.7-7.7 7-7.7 4.6 0 6.2 4 6.5 6.7l-1.9-1.6c-.2-.2-.6-.1-.7.1-.2.2-.1.6.1.8l3.4 2.8 2.5-3.9c.2-.2.1-.6-.1-.8z"></path>
            </svg>
          </div>
        </div>

        <div className="editor-navbar-container12">
          {breakpoints && breakpoints[0] && (
            <button
              className={`${currentSelectedButton === 'mobile'? '' : 'buttonQuery'}`}
              style={mobileButtonStyle}
              onClick={onMobileClick}
            >
              <div className="editor-navbar-contain">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="editorNavbarIcons"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 2.5A1.5 1.5 0 014.5 1h5A1.5 1.5 0 0111 2.5v9A1.5 1.5 0 019.5 13h-5A1.5 1.5 0 013 11.5v-9zM4.5 2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-5zm4 9h-3v-1h3v1z"
                  ></path>
                </svg>
              </div>
            </button>
          )}
          {breakpoints[1] && (
            <button
            className={`${currentSelectedButton === 'landscape'? '' : 'buttonQuery'}`}
            style={landscapeButtonStyle}
              onClick={onLandscapeMobileClick}
            >
              <div className="editor-navbar-contain">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="editorNavbarIcons"
                >
                  <path d="M2.5 3A1.5 1.5 0 001 4.5v5A1.5 1.5 0 002.5 11h9A1.5 1.5 0 0013 9.5v-5A1.5 1.5 0 0011.5 3h-9zM2 4.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-5zm8 1v3h1v-3h-1z"></path>{' '}
                </svg>
              </div>
            </button>
          )}
          {breakpoints[2] && (
            <button
            className={`${currentSelectedButton === 'tablet'? '' : 'buttonQuery'}`}
            style={tabletButtonStyle}
              onClick={onTabletClick}
            >
              <div className="editor-navbar-contain">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="editorNavbarIcons"
                >
                  <path d="M3 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-9zM3.5 1A1.5 1.5 0 002 2.5v9A1.5 1.5 0 003.5 13h7a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 1h-7zm2 10h3v-1h-3v1z"></path>
                </svg>
              </div>
            </button>
          )}
          {breakpoints[3] && (
            <button
            className={`${currentSelectedButton === 'laptop'? '' : 'buttonQuery'}`}
            style={laptopButtonStyle}
              onClick={onLaptopClick}
            >
              <div className="editor-navbar-contain">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="editorNavbarIcons"
                >
                  <path d="M1 2.5A1.5 1.5 0 012.5 1h9A1.5 1.5 0 0113 2.5v7a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 9.5v-7zM2.5 2a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-9zM0 12.5a.5.5 0 01.5-.5h13a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z"></path>{' '}
                </svg>
              </div>
            </button>
          )}
          {breakpoints[4] && (
            <button
            className={`${currentSelectedButton === 'desktop'? '' : 'buttonQuery'}`}
            style={desktopButtonStyle}
              onClick={onDesktopClick}
            >
              <div className="editor-navbar-contain">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="editorNavbarIcons"
                >
                  <path d="M0 2.5A1.5 1.5 0 011.5 1h11A1.5 1.5 0 0114 2.5v8a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 010 10.5v-8zM1.5 2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-11zm8 12h-5v-1h5v1z"></path>
                </svg>
              </div>
            </button>
          )}
          {breakpoints[5] && (
            <button
            className={`${currentSelectedButton === 'wide'? '' : 'buttonQuery'}`}
            style={wideButtonStyle}
              onClick={onWideClick}
            >
              <div className="editor-navbar-contain">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  rotate="90deg"
                  xmlns="http://www.w3.org/2000/svg"
                  className="editorNavbarIcons"
                >
                  <path d="M0 2.5A1.5 1.5 0 011.5 1h11A1.5 1.5 0 0114 2.5v9a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 010 11.5v-9zM1.5 2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-11z"></path>{' '}
                </svg>
              </div>
            </button>
          )}
          <div className="editor-navbar-contain">
            <svg
              viewBox="0 0 1024 1024"
              className="editor-navbar-icon18"
              onClick={handleOnClick}
            >
              <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
            </svg>
          </div>
          <Breakpoints isBreakOn={isBreakOn} closeBreak={closeBreak} />
          {/* zoom section */}
          <div className="editor-navbar-container18">
            <div className="ZoomButtons">
              <button onClick={disminuirZoom}>
                <svg
                  onClick={zoomButton}
                  viewBox="0 0 1024 1024"
                  className="editorNavbarIcons"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </button>
            </div>

            <span style={{ fontSize: '12px' }}>
              {shiftKey ? scaleValue + '%' : zoom + '%'}
            </span>
            <div className="ZoomButtons">
              <button onClick={aumentarZoom}>
                <svg
                  onClick={zoomButton}
                  viewBox="0 0 1024 1024"
                  className="editorNavbarIcons"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorNavbar
