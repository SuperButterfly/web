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

const menuLeft = ({ filteredWorkspaces }) => {
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
  const [isSelected, setIsSelected] = useState({})
  const [idVisible, setIdVisible] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isOpenResources, setIsOpenResources] = useState(false)

  useEffect(() => {
    if (workspaces && workspaces !== []) {
      const aux = {}
      workspaces.forEach((workspace, idx) => {
        if (idx === 0) {
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
    navigate('/workspace/templates')
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
  const handleButtonClick = () => {
    setIsOpenResources(!isOpenResources)
  }
  return (
    <div className={`${open ? styles.container : styles.miniNav}`}>
      <img
        src={Control}
        className={`${styles.control} ${!open && styles.rotacion}`}
        onClick={() => setOpen(!open)}
      />
      <div className={styles.menuBrand}>
        <svg
          width="173"
          height="30"
          viewBox="0 0 173 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.02969 4.23604C4.5375 4.67315 4.0002 5.20929 3.46407 5.85792C2.72754 6.74796 2.19024 7.61104 1.8 8.34698C4.6916 8.28487 6.92403 8.30128 8.07188 8.3505C8.33907 8.36221 8.79258 8.39034 9.26895 8.65343C9.8877 8.99444 10.1918 9.52823 10.4707 10.0181C10.7156 10.4487 10.8557 10.8366 10.9359 11.105C9.31055 14.6499 7.68516 18.1942 6.05977 21.7392H10.6096L13.2199 16.0245L17.0625 24.2985C17.158 24.5013 17.4299 25.011 18.027 25.3755C18.6105 25.7317 19.1982 25.7341 19.5023 25.7358C20.7281 25.7435 22.5897 25.7605 24.9211 25.737C25.442 25.2355 26.0297 24.595 26.6074 23.8005C27.1834 23.0083 27.6111 22.2542 27.9281 21.6056C25.1754 21.612 23.0607 21.5991 21.9322 21.5956C21.76 21.595 21.4066 21.5903 21.0012 21.4233C20.1814 21.0858 19.7842 20.3482 19.5955 19.9978C19.4596 19.7452 19.3758 19.5208 19.3242 19.3614C16.0576 12.1966 13.5961 6.96124 12.9568 5.64874C12.8672 5.46534 12.6492 5.02179 12.1816 4.68077C11.5582 4.22608 10.8492 4.21085 10.4555 4.20792C9.12657 4.19796 7.2791 4.18917 5.02969 4.23604Z"
            fill="#808080"
          />
        </svg>
        {open ? <h2 className={styles.titulito}>Aythen</h2> : ''}
      </div>
      <div className={styles.menuUser}>
        <div className={`${open ? styles.menuLetterContainer : styles.gege}`}>
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
      <NavLink className={styles.btnAction} to="/workspace/templates/store">
        <div className={`${open ? styles.btnCarrito : ''}`}>
          <span className={`${open ? styles.btnService : styles.gege}`}>
            🛒
          </span>
          <span
            className={`${open ? styles.menuUsername : styles.optionHiden}`}
          >
            service shop
          </span>
        </div>
      </NavLink>
      <div className={styles.menuWorkspaceList}>
        <div className={styles.btnDown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
          <span className={`${open ? styles.menuText02 : styles.optionHiden}`}>
            WORKSPACES
          </span>
        </div>
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
                      <span className={`${open ? styles.menuWletter : ''}`}>
                        {workspace.name.slice(0, 1).toUpperCase()}
                      </span>
                    </div>
                    {open ? (
                      <span
                        className={styles.menuUserWork}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                  <div className={styles.menuWorkspaceMenuWorkspaceSettings}>
                    <span
                      onClick={handleMenuClick}
                      data-tab="0"
                      className="menu-workspace-settings"
                      id="2"
                    >
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

        <div className={styles.menuWorkspaceSharedList}>
          <div className={styles.menuSharedTitleContainer}>
            <svg
              viewBox="0 0 1024 1024"
              className={`${open ? styles.menuShare : styles.gege}`}
            >
              <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
            </svg>
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

      <div
        className={styles.menuNewWorkspace}
        onClick={user.plan !== 'Pro' ? handleClose : handleWorkspace}
      >
        <svg
          viewBox="0 0 1024 1024"
          className={`${open ? styles.menuPlus : styles.gege}`}
        >
          <path d="M768 426.667h-170.667v-170.667c0-47.104-38.229-85.333-85.333-85.333s-85.333 38.229-85.333 85.333l3.029 170.667h-173.696c-47.104 0-85.333 38.229-85.333 85.333s38.229 85.333 85.333 85.333l173.696-3.029-3.029 173.696c0 47.104 38.229 85.333 85.333 85.333s85.333-38.229 85.333-85.333v-173.696l170.667 3.029c47.104 0 85.333-38.229 85.333-85.333s-38.229-85.333-85.333-85.333z"></path>
        </svg>
        <NavLink to="/Editor">
          {open ? (
            <span className={styles.menuNewSpace}>New Workspace</span>
          ) : (
            ''
          )}
        </NavLink>
      </div>
      <div className={styles.menuResourcestitle} onClick={handleButtonClick}>
        <div className={styles.resourcesArrowTitle}>
          <svg
            viewBox="0 0 1024 1024"
            className={`${open ? styles.menuArrowright : styles.gege}`}
          >
            <path d="M426 726v-428l214 214z"></path>
          </svg>
          {open ? <span className={styles.menuResources}>RESOURCES</span> : ''}
        </div>
        {isOpenResources && (
          <div className="">
            <div className={styles.resourceWrapperContainer}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceWrapper}
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
                <span className={styles.resourceWrapperText}>Figma Plugin</span>
              </a>
            </div>

            <div className={styles.resourceWrapperContainer}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceWrapper}
              >
                <div className={styles.resourceWrapperIcon}>
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
                <span className={styles.resourceWrapperText}>Demo Project</span>
              </a>
            </div>
            <div className={styles.resourceWrapperContainer}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceWrapper}
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
                <span className={styles.resourceWrapperText}>Tutorials</span>
              </a>
            </div>
            <div className={styles.resourceWrapperContainer}>
              <NavLink to="/en/category/getting-started">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resourceWrapper}
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
                  <span className={styles.resourceWrapperText}>
                    Documentation
                  </span>
                </a>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default menuLeft
