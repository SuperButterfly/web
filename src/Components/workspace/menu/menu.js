/* global localStorage */
import "./menu.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { getUserData } from "@/redux/actions/user.js";
import { createWorkspace, getWorkspace } from "@/redux/actions/workspaces.js";
import {
  setWorkspaceSelected,
  setWorkspaceTabMenu,
} from "@/redux/slices/workspaceSlices.js";
import ModalPortal from "../modal/Modal.js";
import Upgrade from "../upgrade/Upgrade.js";
import Store from "../Store/Store.jsx";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// const urlbase = '/workspace/assets';
const Menu = ({ filteredWorkspaces }) => {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const resources = [];
  const [isOpenResources, setIsOpenResources] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { workspaces } = useSelector((state) => state.workspace);
  const [isOpen, setIsOpen] = useState(false);
  const [showPoints, setShowPoints] = useState(false);
  const [isSelected, setIsSelected] = useState({});
  const [showModal, setShowModal] = useState(false);
  const workspaceTabMenu = useSelector(
    (state) => state.workspace.workspaceTabMenu
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [idVisible, setIdVisible] = useState(null);
  useEffect(() => {
    dispatch(getUserData("theuser@mail.com"));
  }, []);
  useEffect(() => {
    // console.log("workspaces");
    if (workspaces && workspaces !== []) {
      let aux = {};
      workspaces.forEach((workspace, idx) => {
        if (idx === 0) {
          aux[workspace.id] = true;
        } else {
          aux[workspace.id] = false;
        }
      });
      // console.log("aux", aux)
      setIsSelected(aux);
    }
    //dispatch(getUserData())
  }, [workspaces]);
  const handleMenuClick = (ev) => {
    ev.preventDefault();
    dispatch(setWorkspaceTabMenu(ev.target.getAttribute("data-tab")));
    setIsOpen(false);
    navigate("WorkspaceSettings");
  };
  const handleMenu = (ev, id) => {
    ev.preventDefault();
    const keys = Object.keys(isSelected);
    const aux = {};
    for (let key of keys) {
      if (key === id) {
        aux[key] = true;
      } else aux[key] = false;
    }
    localStorage.setItem("workspaceid", id);
    setIsSelected(aux);
    setIdVisible(ev === idVisible ? null : ev)
    dispatch(getWorkspace(id));
    //console.log(setWorkspaceSelected(id))
  };
  const handleMouseOver = (e, selected) => {
    if (selected) {
      setIsOpen(true);
    }
  };
  const handleContextMenu = (event) => {
    event.preventDefault(); // Evitar que aparezca el menú contextual predeterminado
    setIsOpen(!isOpen); // Alternar el estado isOpen
  };
  const handleClose = () => {
    setShowModal(!showModal);
    console.log(showModal, "upgrade");
  };
  const handleWorkspace = () => {
    console.log(user);
    if (user.plan.toLowerCase() == "free" && user.workspaces.length >= 1) {
      setShowModal(true);
      console.log("usurio gratuito");
    } else {
      dispatch(createWorkspace());
      console.log("usurio premiun");
    }
  };
  const handleButtonClick = () => {
    setIsOpenResources(!isOpenResources);
  };
  const cambiarName = () => {
    alert(user.username);
  };
  const navegacion = () => {
    navigate("/workspace/templates");
  };
  const [isHovered, setIsHovered] = useState(false);
  const [idsanti, setIdsanti] = useState("");
  const handleMouseEnter = (id) => {
    if (user.workspaces.map((e) => id === e.id)) {
      setIdsanti(id);
      setIsHovered(true);
    }
  };
  const handleMouseLeave = (id) => {
    if (user.workspaces.map((e) => id === e.id)) {
      setIdsanti(id);
      setIsHovered(false);
    }
  };

  return (
    <>
      <div className={`${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <button
          className="hamburger-button transparent neutral"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`hamburger-icon ${isMobileMenuOpen ? "open" : ""}`}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 4.275C0 3.902.302 3.6.675 3.6h16.65a.675.675 0 110 1.35H.675A.675.675 0 010 4.275zM0 9.225c0-.373.302-.675.675-.675h16.65a.675.675 0 110 1.35H.675A.675.675 0 010 9.225zM0 14.175c0-.373.302-.675.675-.675h16.65a.675.675 0 110 1.35H.675A.675.675 0 010 14.175z"></path>
            </svg>
          </span>
        </button>
        <div className={`menu-container ${isMobileMenuOpen ? "show" : ""}`}>
          {showModal && (
            <ModalPortal onClose={handleClose}>
              <Upgrade />
            </ModalPortal>
          )}
          <div className="menu-brand">
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
              <path
                d="M55.0996 23H51.9551L50.7051 19.748H44.9824L43.8008 23H40.7344L46.3105 8.68359H49.3672L55.0996 23ZM49.7773 17.3359L47.8047 12.0234L45.8711 17.3359H49.7773ZM54.582 12.6289H57.502L59.9824 19.9922L62.4043 12.6289H65.2461L61.584 22.6094L60.9297 24.416C60.6888 25.0215 60.4577 25.4837 60.2363 25.8027C60.0215 26.1217 59.7708 26.3789 59.4844 26.5742C59.2044 26.776 58.8561 26.9323 58.4395 27.043C58.0293 27.1536 57.5638 27.209 57.043 27.209C56.5156 27.209 55.998 27.1536 55.4902 27.043L55.2461 24.8945C55.6758 24.9792 56.0632 25.0215 56.4082 25.0215C57.0462 25.0215 57.5182 24.8327 57.8242 24.4551C58.1302 24.084 58.3646 23.6087 58.5273 23.0293L54.582 12.6289ZM71.7695 12.6289V14.8164H69.8945V18.9961C69.8945 19.8424 69.9108 20.3372 69.9434 20.4805C69.9824 20.6172 70.0638 20.7311 70.1875 20.8223C70.3177 20.9134 70.474 20.959 70.6562 20.959C70.9102 20.959 71.278 20.8711 71.7598 20.6953L71.9941 22.8242C71.3561 23.0977 70.6335 23.2344 69.8262 23.2344C69.3314 23.2344 68.8854 23.153 68.4883 22.9902C68.0911 22.821 67.7982 22.6061 67.6094 22.3457C67.4271 22.0788 67.3001 21.7207 67.2285 21.2715C67.1699 20.9525 67.1406 20.3079 67.1406 19.3379V14.8164H65.8809V12.6289H67.1406V10.5684L69.8945 8.9668V12.6289H71.7695ZM76.4082 8.68359V13.9473C77.2936 12.9121 78.3516 12.3945 79.582 12.3945C80.2135 12.3945 80.7832 12.5117 81.291 12.7461C81.7988 12.9805 82.1797 13.2799 82.4336 13.6445C82.694 14.0091 82.8698 14.4128 82.9609 14.8555C83.0586 15.2982 83.1074 15.985 83.1074 16.916V23H80.3633V17.5215C80.3633 16.4342 80.3112 15.7441 80.207 15.4512C80.1029 15.1582 79.9173 14.9271 79.6504 14.7578C79.39 14.582 79.0612 14.4941 78.6641 14.4941C78.2083 14.4941 77.8014 14.6048 77.4434 14.8262C77.0853 15.0475 76.8216 15.3828 76.6523 15.832C76.4896 16.2747 76.4082 16.9323 76.4082 17.8047V23H73.6641V8.68359H76.4082ZM91.9062 19.6992L94.6406 20.1582C94.2891 21.1608 93.7324 21.9258 92.9707 22.4531C92.2155 22.974 91.2682 23.2344 90.1289 23.2344C88.3255 23.2344 86.9909 22.6452 86.125 21.4668C85.4414 20.5228 85.0996 19.3314 85.0996 17.8926C85.0996 16.1738 85.5488 14.8294 86.4473 13.8594C87.3457 12.8828 88.4818 12.3945 89.8555 12.3945C91.3984 12.3945 92.6159 12.9056 93.5078 13.9277C94.3997 14.9434 94.8262 16.5026 94.7871 18.6055H87.9121C87.9316 19.4193 88.153 20.054 88.5762 20.5098C88.9993 20.959 89.5267 21.1836 90.1582 21.1836C90.5879 21.1836 90.9492 21.0664 91.2422 20.832C91.5352 20.5977 91.7565 20.2201 91.9062 19.6992ZM92.0625 16.9258C92.043 16.1315 91.8379 15.5293 91.4473 15.1191C91.0566 14.7025 90.5814 14.4941 90.0215 14.4941C89.4225 14.4941 88.9277 14.7122 88.5371 15.1484C88.1465 15.5846 87.9544 16.1771 87.9609 16.9258H92.0625ZM106.467 23H103.723V17.707C103.723 16.5872 103.664 15.8646 103.547 15.5391C103.43 15.207 103.238 14.9499 102.971 14.7676C102.71 14.5853 102.395 14.4941 102.023 14.4941C101.548 14.4941 101.122 14.6243 100.744 14.8848C100.367 15.1452 100.106 15.4902 99.9629 15.9199C99.8262 16.3496 99.7578 17.1439 99.7578 18.3027V23H97.0137V12.6289H99.5625V14.1523C100.467 12.9805 101.607 12.3945 102.98 12.3945C103.586 12.3945 104.139 12.5052 104.641 12.7266C105.142 12.9414 105.52 13.2181 105.773 13.5566C106.034 13.8952 106.213 14.2793 106.311 14.709C106.415 15.1387 106.467 15.7539 106.467 16.5547V23ZM116.877 23L113.459 8.68359H116.418L118.576 18.5176L121.193 8.68359H124.631L127.141 18.6836L129.338 8.68359H132.248L128.771 23H125.705L122.854 12.2969L120.012 23H116.877ZM139.348 19.6992L142.082 20.1582C141.73 21.1608 141.174 21.9258 140.412 22.4531C139.657 22.974 138.71 23.2344 137.57 23.2344C135.767 23.2344 134.432 22.6452 133.566 21.4668C132.883 20.5228 132.541 19.3314 132.541 17.8926C132.541 16.1738 132.99 14.8294 133.889 13.8594C134.787 12.8828 135.923 12.3945 137.297 12.3945C138.84 12.3945 140.057 12.9056 140.949 13.9277C141.841 14.9434 142.268 16.5026 142.229 18.6055H135.354C135.373 19.4193 135.594 20.054 136.018 20.5098C136.441 20.959 136.968 21.1836 137.6 21.1836C138.029 21.1836 138.391 21.0664 138.684 20.832C138.977 20.5977 139.198 20.2201 139.348 19.6992ZM139.504 16.9258C139.484 16.1315 139.279 15.5293 138.889 15.1191C138.498 14.7025 138.023 14.4941 137.463 14.4941C136.864 14.4941 136.369 14.7122 135.979 15.1484C135.588 15.5846 135.396 16.1771 135.402 16.9258H139.504ZM144.357 23V8.68359H147.102V13.8398C147.948 12.8763 148.951 12.3945 150.109 12.3945C151.372 12.3945 152.417 12.8535 153.244 13.7715C154.071 14.6829 154.484 15.9948 154.484 17.707C154.484 19.4779 154.061 20.8418 153.215 21.7988C152.375 22.7559 151.353 23.2344 150.148 23.2344C149.556 23.2344 148.97 23.0879 148.391 22.7949C147.818 22.4954 147.323 22.056 146.906 21.4766V23H144.357ZM147.082 17.5898C147.082 18.6641 147.251 19.4583 147.59 19.9727C148.065 20.7018 148.697 21.0664 149.484 21.0664C150.09 21.0664 150.604 20.8092 151.027 20.2949C151.457 19.7741 151.672 18.957 151.672 17.8438C151.672 16.6589 151.457 15.806 151.027 15.2852C150.598 14.7578 150.048 14.4941 149.377 14.4941C148.719 14.4941 148.173 14.7513 147.736 15.2656C147.3 15.7734 147.082 16.5482 147.082 17.5898Z"
                fill="#808080"
              />
            </svg>
          </div>
          <div className="menu-user">
            <div className="menu-letter-container">
              <span>
                {user && user.username
                  ? user.username.slice(0, 1).toUpperCase()
                  : "U"}
              </span>
            </div>
            <span className="menu-username" onClick={cambiarName}>
              {user.username}
            </span>
          </div>
          <div
            className={
              isOpen === false
                ? "menu-workspace-wrapper"
                : "menu-workspace-wrapper-menu"
            }
          >
            <NavLink to="/workspace/templates/store">
              <button className="buttonStore">service shop 🛒</button>
            </NavLink>
            <div className="menu-workspace-list">
              <span className="menu-text02">WORKSPACES</span>
              {user && user.workspaces && user.workspaces.length > 0
                ? (filteredWorkspaces.length > 0
                  ? filteredWorkspaces
                  : user.workspaces
                )?.map((workspace, idx) => (
                  <div
                    className={
                      isSelected[workspace.id]
                        ? "menu-workspace-selected"
                        : "menu-workspace"
                    }
                    onMouseEnter={() => handleMouseEnter(workspace.id)}
                    onMouseLeave={() => handleMouseLeave(workspace.id)}
                    key={idx}
                    id={idx === 0 ? "first" : "user-" + idx}
                    onClick={(e) => handleMenu(e, workspace.id)}
                    onMouseOver={(e) => setShowPoints(true)}
                    /*     onMouseOut={(e) => setShowPoints(false)} */
                    onContextMenu={handleContextMenu}
                  >
                    <div className="menu-work-name" onClick={navegacion}>
                      <div className="menu-container1">
                        <span className="menu-wletter">
                          {workspace.name.slice(0, 1).toUpperCase()}
                        </span>
                      </div>
                      <span
                        className="menu-user-work"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      >
                        {workspace.name}
                      </span>
                    </div>
                    <div className="main-content-workspace123">
                    {workspace.id === idsanti && (

                      
                        <div
                          className="main-content-menu123"
                          onClick={() => setIsOpen(!isOpen)}
                          ref={menuRef}
                        >
                          <span>. . .</span>
                        </div>
                     
                     )}
                     </div>
                    {isSelected[workspace.id] && isOpen && (
                      <div
                        className="menu-workspace-menu-workspace-settings"
                      //onMouseOver={(e)=>handleMouseOver(e, isSelected[workspace.id])}
                      //onMouseOut={()=>setIsOpen(false)}
                      >
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
                          className="menu-workspace-collaborators"
                        >
                          Manage collaborators
                        </span>
                        <span
                          onClick={handleMenuClick}
                          data-tab="2"
                          className="menu-workspace-billing"
                        >
                          Billings details
                        </span>
                        <div className="menu-workspace-hr"></div>
                        <span
                          onClick={handleMenuClick}
                          data-tab="0"
                          className="menu-workspace-rename"
                        >
                          Rename
                        </span>
                      </div>
                    )}
                  </div>
                ))
                : null}

              <div className="menu-workspace-shared-list">
                <span className="menu-text03">SHARED WITH ME</span>
                <div className="menu-shared-title-container">
                  <svg viewBox="0 0 1024 1024" className="menu-share">
                    <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                  </svg>
                  <span className="menu-shared">Shared projects</span>
                </div>
                {user && user.shared && user.shared.workspaces.length > 0
                  ? user.shared.workspaces.map((workspace, idx) => (
                    <div
                      className="menu-workspace"
                      key={idx}
                      id={"shared-" + idx}
                      onClick={handleMenu}
                      onContextMenu={() => setIsOpen(!isOpen)}
                    >
                      <div className="menu-container2">
                        <span className="menu-text06">
                          {workspace.name.slice(0, 1).toUpperCase()}
                        </span>
                      </div>
                      <span className="menu-shared-work">
                        {workspace.name}
                      </span>
                    </div>
                  ))
                  : null}
              </div>
            </div>
          </div>
          <div
            className="menu-new-workspace"
            onClick={user.plan !== "Pro" ? handleClose : handleWorkspace}
          >
            <svg viewBox="0 0 1024 1024" className="menu-plus">
              <path d="M768 426.667h-170.667v-170.667c0-47.104-38.229-85.333-85.333-85.333s-85.333 38.229-85.333 85.333l3.029 170.667h-173.696c-47.104 0-85.333 38.229-85.333 85.333s38.229 85.333 85.333 85.333l173.696-3.029-3.029 173.696c0 47.104 38.229 85.333 85.333 85.333s85.333-38.229 85.333-85.333v-173.696l170.667 3.029c47.104 0 85.333-38.229 85.333-85.333s-38.229-85.333-85.333-85.333z"></path>
            </svg>
            <NavLink to="/Editor">
              <span className="menu-new-space">New Workspace</span>
            </NavLink>
          </div>

          <div className="menu-resourcestitle" onClick={handleButtonClick}>
            <svg viewBox="0 0 1024 1024" className="menu-arrowright">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
            <span className="menu-resources">RESOURCES</span>
          </div>
          <div
            className="menu-resources-list"
          // className={resources.length > 4 ? 'menu-resources-list-wrap' : 'menu-resources-list'}
          // id={resources.length >= 4 ? 4 : resources.length}
          >
            {isOpenResources && (
              <div className="">
                <div className="resource-wrapper-container">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="resource-wrapper"
                  >
                    <div class="resource-wrapper-icon">
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 14 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#figma_svg__clip0_854_10898)">
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
                    <span class="resource-wrapper-text">Figma Plugin</span>
                  </a>
                </div>
                {/Demo Project/}
                <div className="resource-wrapper-container">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="resource-wrapper"
                  >
                    <div class="resource-wrapper-icon">
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
                    <span class="resource-wrapper-text">Demo Project</span>
                  </a>
                </div>
                <div className="resource-wrapper-container">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="resource-wrapper"
                  >
                    <div class="resource-wrapper-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8" clip-path="url(#youtube_svg__clip0)">
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
                    <span class="resource-wrapper-text">Tutorials</span>
                  </a>
                </div>
                <div className="resource-wrapper-container">
                  <NavLink to="/en/category/getting-started">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="resource-wrapper"
                    >
                      <div class="resource-wrapper-icon">
                        <svg
                          width="24"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="#2874DE"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.5 2.5v16.25H3.375a1.875 1.875 0 110-3.75H15.25V0H2.75a2.507 2.507 0 00-2.5 2.5v15c0 1.375 1.125 2.5 2.5 2.5h15V2.5H16.5zM3.5 10a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM4 5.5a.5.5 0 100 1h8a.5.5 0 000-1H4z"
                          ></path>
                        </svg>
                      </div>
                      <span class="resource-wrapper-text">Documentation</span>
                    </a>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;