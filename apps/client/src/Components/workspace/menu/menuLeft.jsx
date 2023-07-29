import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getUserData } from '@/redux/actions/user.js'
import { NavLink } from 'react-router-dom'
import { createWorkspace, getWorkspace } from '@/redux/actions/workspaces.js'
import {
  setWorkspaceSelected,
  setWorkspaceTabMenu
} from '@/redux/slices/workspaceSlices.js'
import styles from './menuLeft.module.css'
import Control from '../../../assets/control.svg'

const MenuLeft = ({ filteredWorkspaces }) => {
  const { user } = useSelector((state) => state.user)
  const { workspaces } = useSelector((state) => state.workspace)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const menuRef = useRef(null)
  const [username, setUsername] = useState(user.username)
  const [showPoints, setShowPoints] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState(true)
  const [openWorkspaces, setOpenWorkspaces] = useState(true)
  const [isSelected, setIsSelected] = useState({})
  const [idVisible, setIdVisible] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isOpenResources, setIsOpenResources] = useState(false)

  useEffect(() => {
    if (workspaces) {
      const aux = {}
      workspaces.forEach((workspace, idx) => {
        if (idx == 0) {
          aux[workspace.id] = true
        } else {
          aux[workspace.id] = false
        }
      })
      setIsSelected(aux)
    }
  }, [workspaces])
  const handleMenu = (ev, id) => {
    ev.preventDefault()
    const keys = Object.keys(isSelected)
    const aux = {}
    for (const key of keys) {
      if (key === id) {
        aux[key] = true
      } else aux[key] = false
    }
    localStorage.setItem('workspaceid', id)
    setIsSelected(aux)
    setIdVisible(ev === idVisible ? null : ev)
    dispatch(getWorkspace(id))
  }
  useEffect(() => {
    dispatch(getUserData('theuser@mail.com'))
  }, [])
  const handleChange = (event) => {
    setUsername(event.target.value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false)
    }
  }
  const handleMenuClick = (ev) => {
    ev.preventDefault()
    dispatch(setWorkspaceTabMenu(ev.target.getAttribute('data-tab')))
    setIsOpen(false)
    navigate('WorkspaceSettings')
  }
  const handleContextMenu = (event) => {
    event.preventDefault() // Evitar que aparezca el menú contextual predeterminado
    setIsOpen(!isOpen) // Alternar el estado isOpen
  }
  const handleDoubleClick = () => {
    setIsEditing(true)
  }
  /** funciones para cambiar el nombre del proyecto */

  const navegacion = () => {
    navigate('/')
  }
  const [isHovered, setIsHovered] = useState(false)
  const [idsanti, setIdsanti] = useState('')
  const handleMouseEnter = (id) => {
    if (user.workspaces.map((e) => id === e.id)) {
      setIdsanti(id)
      setIsHovered(true)
    }
  }
  const handleMouseLeave = (id) => {
    if (user.workspaces.map((e) => id === e.id)) {
      setIdsanti(id)
      setIsHovered(false)
    }
  }
  const handleClose = () => {
    setShowModal(!showModal)
    console.log(showModal, 'upgrade')
  }
  const handleWorkspace = () => {
    console.log(user)
    if (user.plan.toLowerCase() === 'free' && user.workspaces.length >= 1) {
      setShowModal(true)
      console.log('usurio gratuito')
    } else {
      dispatch(createWorkspace())
      console.log('usurio premiun')
    }
  }
  const handleButtonClick = () => {
    setIsOpenResources(!isOpenResources)
  }

  const handleClickSettings = () => {
    
    setOpen(!open)
    setIsOpen(false)
  }
  return (
    <div className={`${open ? styles.container : styles.miniNav}`}>
      <div className={styles.gap}>
        <div
          className={`${
            open ? styles.headerContainer : styles.headerContainerMini
          }`}
        >
          <div className={styles.svgLogoContainer}>
            <svg
              version="1.1"
              width="33"
              height="33"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlnsXlink="http://www.w3.org/1999/xlink"
              // x="0px"
              // y="0px"
              viewBox="0 0 595.28 487.73"
              // style={{ enableBackground: 'new 0 0 595.28 487.73' }}
              // xmlSpace="preserve"
            >
              <path
                d="M95.21,1.29L8.33,94.8h147.42c13.22,0.17,22.31,4.23,27.05,6.84c13.97,7.7,20.85,19.76,27.15,30.83
        c5.54,9.72,8.69,18.49,10.51,24.56c-36.72,80.09-73.45,160.18-110.17,240.27h102.8l58.98-129.12l86.82,186.95
        c2.15,4.58,8.3,16.1,21.79,24.33c14.37,8.76,28.36,8.48,33.33,8.15c37.33,0,74.66,0,111.99,0l60.68-93.54H468.9
        c-9.6,0.12-16.72-2.11-21.03-3.89c-18.52-7.63-27.49-24.29-31.75-32.21c-3.07-5.7-4.97-10.77-6.13-14.37
        C336.18,181.71,280.56,63.42,266.11,33.77c-2.98-6.12-8.27-14.82-17.51-21.87C231.06-1.48,210.53-0.34,189.7,0.4
        C168.35,1.16,137.09,1.85,95.21,1.29z"
                fill="#808080"
              />
            </svg>
          </div>

          {open ? (
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>Aythen</h2>
            </div>
          ) : (
            ''
          )}
          <img
            src={Control}
            className={`${styles.control} ${!open && styles.rotacion}`}
            onClick={handleClickSettings}
          />
        </div>
        <div className={styles.menuUser}>
          <div className={styles.menuLetterContainer}>
            <span>
              {username && user.username
                ? username.slice(0, 1).toUpperCase()
                : 'U'}
            </span>
          </div>
          {isEditing ? (
            <input
              className={styles.inputChangeName}
              type="text"
              value={username}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <span
              className={`${open ? styles.menuUsername : styles.optionHiden}`}
              onDoubleClick={handleDoubleClick}
            >
              {username || user.username}
            </span>
          )}
        </div>
        <NavLink className={styles.btnAction} to="/store">
          <div
            className={`${
              open
                ? styles.btnCarrito + ' ' + styles.btnHoverShine
                : styles.menuContainer1
            }`}
          >
            <div className={styles.svgCarritoContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="#fefefe"
                viewBox="0 0 256 256"
              >
                <path d="M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96v16a40,40,0,0,0,16,32v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V144a40,40,0,0,0,16-32ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-48,0v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm-8-72a24,24,0,0,1-24-24v-8h48v8A24,24,0,0,1,192,136Z" />
              </svg>
            </div>
            {open ? <span className={styles.nowrap}>service shop</span> : ''}
          </div>
        </NavLink>

        <div className={styles.menuWorkspaceList}>
          <div
            className={styles.btnDown}
            onClick={() => setOpenWorkspaces(!openWorkspaces)}
          >
            <div
              className={`${
                openWorkspaces ? styles.openChevron : styles.rotateChevron
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
            <span
              className={`${open ? styles.menuText02 : styles.optionHiden}`}
            >
              WORKSPACES
            </span>
          </div>

          <div
            className={`${
              openWorkspaces
                ? styles.dropdownWorkspaces
                : styles.closedDropdownWorkspaces
            }`}
          >
            {user && user.workspaces && user.workspaces.length > 0
              ? (filteredWorkspaces.length > 0
                  ? filteredWorkspaces
                  : user.workspaces
                )?.map((workspace, idx) => (
                  <div
                    className={`
                        ${
                          isOpen && isSelected[workspace.id]
                            ? styles.menuWorkspaceIsOpenSelected
                            : isSelected[workspace.id]
                            ? styles.menuWorkspaceSelected
                            : styles.menuWorkspace
                        }`}
                    onMouseEnter={() => handleMouseEnter(workspace.id)}
                    onMouseLeave={() => handleMouseLeave(workspace.id)}
                    key={idx}
                    id={idx === 0 ? 'first' : 'user-' + idx}
                    onClick={(e) => handleMenu(e, workspace.id)}
                    onMouseOver={(e) => setShowPoints(true)}
                    onContextMenu={handleContextMenu}
                  >
                    <div className={styles.menuWorkName} onClick={navegacion}>
                      <div>
                        <div className={styles.menuContainer1}>
                          <span className={styles.menuWletter}>
                            {workspace.name.slice(0, 1).toUpperCase()}
                          </span>
                        </div>
                        {open ? (
                          <span
                            className={styles.menuUserWork}
                            onClick={() =>
                              setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                          >
                            {workspace.name}
                          </span>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className={styles.mainContentWorkspace123}>
                        {open
                          ? workspace.id === idsanti && (
                              <div
                                className={styles.mainContentMenu123}
                                onClick={() => setIsOpen(!isOpen)}
                                ref={menuRef}
                              >
                                ...
                              </div>
                            )
                          : ''}
                      </div>
                    </div>
                    {isSelected[workspace.id] && isOpen && (
                      <div
                        className={styles.menuWorkspaceMenuWorkspaceSettings}
                      >
                        <span onClick={handleMenuClick} data-tab="0" id="2">
                          Workspace settings
                        </span>
                        <span
                          onClick={handleMenuClick}
                          data-tab="1"
                          className={styles.menuWorkspaceCollaborators}
                        >
                          Manage collaborators
                        </span>
                        <span onClick={handleMenuClick} data-tab="2">
                          Billings details
                        </span>
                        <div className={styles.menuWorkspaceHr}></div>
                        <span onClick={handleMenuClick} data-tab="0">
                          Rename
                        </span>
                      </div>
                    )}
                  </div>
                ))
              : null}
          </div>

          <div className={styles.menuWorkspaceSharedList}>
            <div className={styles.menuSharedTitleContainer}>
              <div className={styles.svgContainer}>
                <svg
                  viewBox="0 0 1024 1024"
                  className={`${open ? styles.menuShare : styles.menuShare}`}
                >
                  <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                </svg>
              </div>

              {open ? (
                <span className={styles.menuShared}>Shared With Me</span>
              ) : (
                ''
              )}
            </div>
            {user && user.shared && user.shared.workspaces.length > 0
              ? user.shared.workspaces.map((workspace, idx) => (
                  <div
                    className={styles.menuWorkspace}
                    key={idx}
                    id={'shared-' + idx}
                    onClick={handleMenu}
                    onContextMenu={() => setIsOpen(!isOpen)}
                  >
                    <div className={styles.menuContainer2}>
                      <span className={styles.menuText06}>
                        {workspace.name.slice(0, 1).toUpperCase()}
                      </span>
                    </div>
                    <span className={styles.menuSharedWork}>
                      {workspace.name}
                    </span>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <NavLink to="/editor" className={styles.decorationNone}>
          <div
            className={styles.menuResourcestitle}
            onClick={handleButtonClick}
          >
            <div className={styles.resourcesArrowTitle}>
              <div className={styles.svgContainer}>
                <svg
                  viewBox="0 0 1024 1024"
                  className={`${open ? styles.menuPlus : styles.menuPlus}`}
                >
                  <path d="M768 426.667h-170.667v-170.667c0-47.104-38.229-85.333-85.333-85.333s-85.333 38.229-85.333 85.333l3.029 170.667h-173.696c-47.104 0-85.333 38.229-85.333 85.333s38.229 85.333 85.333 85.333l173.696-3.029-3.029 173.696c0 47.104 38.229 85.333 85.333 85.333s85.333-38.229 85.333-85.333v-173.696l170.667 3.029c47.104 0 85.333-38.229 85.333-85.333s-38.229-85.333-85.333-85.333z"></path>
                </svg>
              </div>
              {open ? (
                <span className={styles.menuResources}>NEW WORKSPACE</span>
              ) : (
                ''
              )}
            </div>
          </div>
        </NavLink>

        <div className={styles.menuResourcestitle} onClick={handleButtonClick}>
          <div className={styles.resourcesArrowTitle}>
            <div className={styles.svgContainer}>
              <svg
                viewBox="0 0 1024 1024"
                className={`${
                  open ? styles.menuArrowright : styles.menuArrowright
                }`}
              >
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
            {open ? (
              <span className={styles.menuResources}>RESOURCES</span>
            ) : (
              ''
            )}
          </div>
        </div>

        <div
          className={
            isOpenResources ? styles.resourcesOpened : styles.resourcesClosed
          }
        >
          <div className={`${open? styles.resourceWrapperContainer : styles.resourceWrapperContainerClosed}`}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`${ open ? styles.resourceWrapper : styles.resourceWrapperClosed}`}
            >
              <div className={styles.resourceWrapperIcon}>
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#figma_svg__clip0_854_10898)">
                    <path
                      d="M3.667 20A3.335 3.335 0 007 16.667v-3.334H3.667a3.335 3.335 0 000 6.667z"
                      fill="#0ACF83"
                    ></path>
                    <path
                      d="M.333 10a3.335 3.335 0 013.334-3.333H7v6.666H3.667A3.335 3.335 0 01.333 10z"
                      fill="#A259FF"
                    ></path>
                    <path
                      d="M.333 3.333A3.335 3.335 0 013.667 0H7v6.667H3.667A3.335 3.335 0 01.333 3.333z"
                      fill="#F24E1E"
                    ></path>
                    <path
                      d="M7 0h3.333a3.335 3.335 0 010 6.667H7V0z"
                      fill="#FF7262"
                    ></path>
                    <path
                      d="M13.667 10A3.335 3.335 0 017 10a3.335 3.335 0 016.667 0z"
                      fill="#1ABCFE"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="figma_svg__clip0_854_10898">
                      <path
                        fill="#fff"
                        transform="translate(.332)"
                        d="M0 0h13.336v20H0z"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {open ? (
                <span className={styles.resourceWrapperText}>
                  Demo Projects
                </span>
              ) : (
                ''
              )}
            </a>
          </div>

          <div
            className={`${
              open
                ? styles.resourceWrapperContainer
                : styles.resourceWrapperContainerClosed
            }`}
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`${ open ? styles.resourceWrapper : styles.resourceWrapperClosed}`}
            >
              <div
                className={`${
                  open ? styles.resourceWrapperIcon : styles.resourceWrapperIcon
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.935 4.896H3.032C1.357 4.896 0 6.238 0 7.893v7.813c0 1.655 1.357 2.997 3.032 2.997h7.903c1.674 0 3.032-1.342 3.032-2.997V7.893c0-1.655-1.358-2.997-3.032-2.997z"
                    fill="#B23ADE"
                  ></path>
                  <path
                    d="M13.07 14.35c3.934 0 7.125-3.154 7.125-7.045 0-3.89-3.19-7.044-7.126-7.044-3.935 0-7.125 3.154-7.125 7.044 0 3.89 3.19 7.045 7.125 7.045z"
                    fill="#FF5C5C"
                  ></path>
                  <path
                    d="M20.79 15.02c1.613.92 1.613 2.435 0 3.347l-8.733 4.979c-1.612.92-2.93.168-2.93-1.674V11.71c0-1.84 1.318-2.592 2.93-1.674l8.734 4.984z"
                    fill="#2874DE"
                  ></path>
                </svg>
              </div>
              {open ? (
                <span className={styles.resourceWrapperText}>Figma Plugin</span>
              ) : (
                ''
              )}
            </a>
          </div>
          <div className={`${open? styles.resourceWrapperContainer : styles.resourceWrapperContainerClosed}`}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`${ open ? styles.resourceWrapper : styles.resourceWrapperClosed}`}
            >
              <div className={styles.resourceWrapperIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8" clipPath="url(#youtube_svg__clip0)">
                    <path
                      d="M23.506 6.24a3.007 3.007 0 00-2.116-2.116C19.512 3.61 12 3.61 12 3.61s-7.512 0-9.39.494A3.068 3.068 0 00.493 6.24C0 8.117 0 12.012 0 12.012s0 3.914.494 5.773A3.007 3.007 0 002.61 19.9c1.897.514 9.39.514 9.39.514s7.512 0 9.39-.494a3.007 3.007 0 002.116-2.116C24 15.926 24 12.032 24 12.032s.02-3.915-.494-5.793z"
                      fill="red"
                    ></path>
                    <path
                      d="M9.607 15.61l6.247-3.598-6.247-3.598v7.196z"
                      fill="#fff"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="youtube_svg__clip0">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {open ? (
                <span className={styles.resourceWrapperText}>Tutorials</span>
              ) : (
                ''
              )}
            </a>
          </div>
          <div className={`${open? styles.resourceWrapperContainer : styles.resourceWrapperContainerClosed}`}>
            <NavLink to="/en/category/getting-started">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`${ open ? styles.resourceWrapper : styles.resourceWrapperClosed}`}
                >
                <div className={styles.resourceWrapperIcon}>
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="#2874DE"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.5 2.5v16.25H3.375a1.875 1.875 0 110-3.75H15.25V0H2.75a2.507 2.507 0 00-2.5 2.5v15c0 1.375 1.125 2.5 2.5 2.5h15V2.5H16.5zM3.5 10a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM4 5.5a.5.5 0 100 1h8a.5.5 0 000-1H4z"
                    ></path>
                  </svg>
                </div>
                {open ? (
                  <span className={styles.resourceWrapperText}>
                    Documentation
                  </span>
                ) : (
                  ''
                )}
              </a>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuLeft
