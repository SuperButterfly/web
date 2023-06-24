/* global localStorage */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, removeNotification } from "@/redux/actions/user.js";
import dayjs from "dayjs";
import "./mainContent.css";
import { selectProject } from "@/redux/slices/projectSlices.js";
import { getTarget, createProject } from "@/redux/actions/projects.js";
import { shareWorkspace } from "@/redux/actions/workspaces.js";
import MeetAdd from "../modal/MeetAdd";
import ModalPortal from "../modal/Modal.js";
import AcceptInvitation from "../invitationEmail/AcceptInvitation.js";
import CreateProjectPortal from "./CreateProject.js";
import CardProject from "./CardProject.js";
import ProjectTemplate from "./ProjectTemplate.js";
import { useOutletContext } from "react-router-dom";
import Mockup from "../mockup/Mockup.js";

import Modal from "react-modal";

import axios from "axios";
import { getUserById } from "./getUserById.js";

const urlbase = "/workspace/assets";

const MainContent = () => {
  // const workspace = user.workspaces[0];
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const menuref = useRef(null);
  const [islimited, setlimited] = useState(false);
  const { user } = useSelector((state) => state.user);
  const workspace = useSelector((state) => state.workspace.workspaceSelected);
  const [idVisible, setIdVisible] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  //const user = useSelector(state=> user.user)
  const [showModal, setShowModal] = useState(false);
  const [createProjectWindow, setCreateProjectWindow] = useState(false);
  const [showModalPreview, setShowModalPreview] = useState(false);
  const { handleFilteredWorkspaces } = useOutletContext();

  useEffect(() => {
    if (user.notifications?.length > 0 && user.notifications !== []) {
      setShowModal(true); /*true*/
      console.log("user.notifications", user.notifications);
    }
  }, [user.notifications]);

  useEffect(() => {
    if (workspace && workspace.projects && workspace.projects.length < 3) {
      if (user.plan === "Free") setlimited(true);
    } else setlimited(false);
  }, [workspace]);

  const handleClose = () => {
    setShowModal(!showModal);
  };
  const handleAcceptInvitation = async (userId, message) => {
    const data = await getUserById(userId);

    //console.log("user.notifications", user.notifications)

    const viewerValue = message.toLowerCase().split(" ").includes("viewer");
    const editorValue = message.toLowerCase().split(" ").includes("editor");

    const valueResult = viewerValue
      ? "viewer"
      : editorValue
      ? "editor"
      : "none";

    if (data) {
      console.log("data", data);
      dispatch(shareWorkspace(workspace.id, data.user.email, valueResult));
    }
  };
  const handleDeleteInvitation = async (userId) => {
    try {
      if (userId) {
        dispatch(removeNotification(userId));
      }
    } catch (e) {
      console.log(e.name);
    }
  };

  const handleMenu = (ev) => {
    // ev.preventDefault();
    setIdVisible(ev === idVisible ? null : ev);
  };

  const handleMenuClick = (id) => {
    dispatch(selectProject(id));
    localStorage.setItem("projectid", id);
    navigate(`${id}/ProjectSettings`);
  };

  const handleProject = (id) => {
    dispatch(selectProject(id));
    if (selectProject.pages && selectProject.pages[0]) {
      dispatch(getTarget(selectProject.pages[0].id));
    }
    localStorage.setItem("currentProject", id);
    navigate(`/Editor/${id}`);
  };

  const handleCreateProject = async () => {
    handleCreateClose();
    /*try {
      await dispatch(createProject(workspace.id))
      window.location.reload()
    }
    catch (e) {
      console.log(e.message)
    }*/
  };

  const [busqueda, setBusqueda] = useState("");

  const handleSearchChange = (e) => {
    setBusqueda(e.target.value);
    setSearch(e.target.value);
    //console.log(workspace.projects)
    let filtered = workspace.projects.filter((project) =>
      project.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredSearch(filtered);
    const workspacesFiltrados = user.workspaces.filter((workspace) =>
      workspace.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    handleFilteredWorkspaces(workspacesFiltrados);
  };

  const handleSearch = () => {
    let filtered = workspace.projects.filter((project) =>
      project.name.toLowerCase().includes(busqueda.toLowerCase())
    );
    if (filtered.length <= 0) {
      return alert("no hay coincidencias");
    } else {
      setFilteredSearch(filtered);
      return alert(`exito al encontrar a ${busqueda}`);
    }
  };
  const handleCreateClose = () => {
    setCreateProjectWindow(!createProjectWindow);
  };

  const handlePreview = () => {
    setShowModalPreview(!showModalPreview);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [form, setForm] = useState({
    titulo: "",
    invitados: "",
    ubicacion: "",
    descripcion: "",
    tipo: "",
    fecha_inicio: "",
    fecha_fin: "",
  });

  const cambio = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const [spanColor, setSpanColor] = useState("black");
  const [spanColordos, setSpanColordos] = useState("black");
  const [spanColortres, setSpanColortres] = useState("black");
  const [spanColorcuatro, setSpanColorcuatro] = useState("black");

  const captura = (prop) => {
    form.tipo = prop;
    console.log(form);
    if (prop === "evento") {
      setSpanColor("blue");
      setSpanColordos("black");
      setSpanColortres("black");
      setSpanColorcuatro("black");
    }
    if (prop === "fuera de la oficina") {
      setSpanColor("black");
      setSpanColordos("blue");
      setSpanColortres("black");
      setSpanColorcuatro("black");
    }
    if (prop === "tarea") {
      setSpanColor("black");
      setSpanColordos("black");
      setSpanColortres("blue");
      setSpanColorcuatro("black");
    }
    if (prop === "horarios disponibles") {
      setSpanColor("black");
      setSpanColordos("black");
      setSpanColortres("black");
      setSpanColorcuatro("blue");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Esperando al back");
  };

  const handleDateChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  ////////////////////////////// BACK END ///////////////////////////////////////
  // npm install nodemailer

  //const nodemailer = require("nodemailer");

  // app.post("/send-email", (req, res) => {
  ///////////////QUIEN LO ENVIA ///////////////////////////
  // const {gmail,titulo,etc} = req.body
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
  //     user: `${gmail}`,
  //     pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
  //   },
  // });
  ///////////////////Aquien se mandara//////////////////////////
  // const info = await transporter.sendMail({
  //   from: '"QUIEN LO EVIA 👻" <Aythen.com>', // sender address
  //   to: "aquienesSelesEnviaraCorreo@example.com, baz@example.com", // list of receivers
  //   subject: "Enviado desde El back end ", // Subject line
  //   text: " TEXTO EN EL MENSAJE", // plain text body
  //   html: "<b>RECIBE TAMBIEN HTML(PROBAR CUANDO FUNCIONE BACK)</b>", // html body
  // });
  ///////////En metodo de la libreria que me hace el envio de la info//////////////
  // });

  return (
    <div className="main-content-container">
      {showModal && (
        <ModalPortal onClose={handleClose}>
          {" "}
          <AcceptInvitation
            onClose={handleClose}
            onInvite={handleAcceptInvitation}
            handleDeleteInvitation={handleDeleteInvitation}
          />
        </ModalPortal>
      )}
      {/*createProjectWindow && <CreateProjectPortal onClose={handleCreateClose}><CardProject handlePreview={handlePreview} /></CreateProjectPortal>*/}
      {/*showModalPreview && <ModalPortal onClose={handlePreview}><ProjectTemplate onClose={handlePreview}/></ModalPortal>*/}

      <div className="main-content-container01">
        <div className="main-content-container02">
          <h1 className="main-content-text">
            {user.username} {workspace.name}
          </h1>
          <div className="main-content-container03">
            <span className="main-content-projects">
              <b>{user.plan} plan </b>|{" "}
              {workspace && workspace.projects ? workspace.projects.length : 1}{" "}
              of 3 projects used
            </span>
            <NavLink to="/workspace/templates/WorkspaceSettings">
              <span
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  cursor: "pointer",
                }}
              >
                {" "}
                manage{" "}
              </span>
            </NavLink>
          </div>
        </div>
        <div>
          <button
            className={
              /*(!islimited) ? 'main-content-button-notactive' :*/ "main-content-button"
            }
            onClick={() => handleCreateProject()}
            //disabled={!islimited}
          >
            + Create project
          </button>

          <button className="main-content-button-meet" onClick={openModal}>
            + Meet
          </button>

          <Modal
            className="modalContainer"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <div className="containerInterno">
              <form className="meet-card" onSubmit={handleSubmit}>
                <div className="meet-card-header">
                  <div className="meet-card-flex">
                    <svg
                      className="meet-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                  </div>
                  <svg
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
                <div className="meet-card-table-container">
                  <div className="meet-card-row meet-center">
                    <div className="meet-card-cell">
                      <div>
                        <input
                          className="meet-font-title"
                          type="Text"
                          placeholder="Añade un título y una hora"
                          onChange={cambio}
                          name="titulo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="meet-card-select">
                    <span
                      className="meet-card-select-unit"
                      onClick={() => captura("evento")}
                      style={{ color: spanColor }}
                    >
                      Evento
                    </span>
                    <span
                      className="meet-card-select-unit"
                      onClick={() => captura("fuera de la oficina")}
                      style={{ color: spanColordos }}
                    >
                      Fuera de la oficina
                    </span>
                    <span
                      className="meet-card-select-unit"
                      onClick={() => captura("tarea")}
                      style={{ color: spanColortres }}
                    >
                      Tarea
                    </span>
                    <spandos
                      className="meet-card-select-unit"
                      onClick={() => captura("horarios disponibles")}
                      style={{ color: spanColorcuatro }}
                    >
                      Horas disponibles
                    </spandos>
                  </div>
                  <div className="meet-card-table">
                    <div className="meet-card-row">
                      <svg
                        className="meet-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 27-3 53t-10 51q-14-16-32.5-27T794-418q3-15 4.5-30.5T800-480q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93q51 0 97.5-15t85.5-42q12 17 29.5 30t37.5 20q-51 41-114.5 64T480-80Zm290-160q-21 0-35.5-14.5T720-290q0-21 14.5-35.5T770-340q21 0 35.5 14.5T820-290q0 21-14.5 35.5T770-240Zm-158-52L440-464v-216h80v184l148 148-56 56Z" />
                      </svg>
                      {/*  <span>Sábado, 10 de junio</span>
                      <span>-</span>
                      <span>Sábado, 10 de junio</span> */}
                      <div>
                        <div>
                          inicio:
                          <input
                            name="fecha_inicio"
                            type="date"
                            onChange={handleDateChange}
                            style={{
                              border: "1px solid black",
                              borderRadius: "2px",
                            }}
                          />
                          .________ fin:
                          <input
                            name="fecha_fin"
                            type="date"
                            onChange={handleDateChange}
                            style={{
                              border: "1px solid black",
                              borderRadius: "2px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="meet-card-row">
                      <div></div>
                      <div className="meet-padding">
                        <select className="meet-select-option">
                          <option value="opcion1">No se repite</option>
                          <option value="opcion2">Cada día</option>
                          <option value="opcion3">Cada semana</option>
                          <option value="opcion4">Cada mes</option>
                          <option value="opcion5">Anualmente</option>
                          <option value="opcion6">
                            Todos los días laborables (De lunes a viernes)
                          </option>
                          <option value="opcion7">Personalizar...</option>
                        </select>
                      </div>
                    </div>
                    <div className="meet-card-row">
                      <div></div>
                      <span className="meet-padding">Encontrar un hueco</span>
                    </div>
                    <div className="meet-card-row">
                      <div className="meet-card-cell">
                        <svg
                          className="meet-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
                        </svg>
                        <input type="Text" placeholder="Añade invitados" />
                      </div>
                    </div>
                    <div className="meet-card-row">
                      <img
                        className="meet-icon"
                        alt=""
                        src="https://ssl.gstatic.com/calendar/images/conferenceproviders/logo_meet_2020q4_192px.svg"
                      />
                      <span className="meet-card-btn">
                        Añadir videollamada de Google Meet
                      </span>
                    </div>
                    <div className="meet-card-row">
                      <div className="meet-card-cell">
                        <svg
                          className="meet-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-472Z" />
                        </svg>
                        <input type="Text" placeholder="Añade ubicación" />
                      </div>
                    </div>
                    <div className="meet-card-row">
                      <div className="meet-card-cell">
                        <svg
                          className="meet-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path d="M120-240v-80h480v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                        <input
                          type="Text"
                          placeholder="Añadir descripción o archivos adjuntos"
                        />
                      </div>
                    </div>
                    <div className="meet-card-row">
                      <div className="meet-card-cell">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-480-80q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h40v-80h80v80h240v-80h80v80h40q33 0 56.5 23.5T760-720v244q-20-3-40-3t-40 3v-84H200v320h280q0 20 3 40t11 40H200Zm0-480h480v-80H200v80Zm0 0v-80 80Z" />
                        </svg>
                        <span>Aythen Company</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="meet-card-buttons">
                  <div className="meet-card-buttons-gap">
                    <button className="meet-card-cancel-btn">
                      Más opciones
                    </button>
                    <button className="meet-card-cancel-btn">Guardar</button>
                    <button className="meet-card-btn" type="submit">
                      Make it a Zoom Meeting
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <button onClick={closeModal}>Cerrar modal</button>
          </Modal>

          {/*   <MeetAdd title={'+ Meet'} /> */}
        </div>
      </div>

      {createProjectWindow && <Mockup />}

      <div className="main-content-container04">
        <div className="main-content-container05">
          <input
            type="text"
            name="search"
            onChange={handleSearchChange}
            /*  id="input-search" */
            className="main-content-text1"
            placeholder="Search"
          />
          <button
            onClick={() => handleSearch()}
            className="main-content-button1"
          >
            <svg viewBox="0 0 1024 1024" className="main-content-icon">
              <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
            </svg>
          </button>
        </div>

        <div className="main-content-thq-dropdown">
          <div className="main-content-dropdown-toggle">
            <span className="main-content-text2">Order by</span>
            <div className="main-content-dropdown-arrow">
              <svg viewBox="0 0 1024 1024" className="main-content-drop-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul className="main-content-dropdown-list">
            <li className="main-content-dropdown list-item">
              <div className="main-content-dropdown-toggle1">
                <span className="main-content-created">created</span>
              </div>
            </li>
            <li className="main-content-dropdown1 list-item">
              <div className="main-content-dropdown-toggle2">
                <span className="main-content-date">date</span>
              </div>
            </li>
            <li className="main-content-dropdown2 list-item">
              <div className="main-content-dropdown-toggle3">
                <span className="main-content-a-z">A - Z</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul className="main-content-ul list">
        {workspace.projects && workspace.projects.length > 0
          ? (filteredSearch.length == 0
              ? workspace.projects
              : filteredSearch
            ).map((project, idx) => (
              <li className="list-item" key={idx}>
                <div className="main-content-workspace">
                  <img
                    alt="project"
                    src={`${urlbase}/AythenLogo.png`}
                    className="main-content-icon4"
                  />
                  <div
                    className="main-content-container06"
                    onClick={() => handleProject(project.id)}
                  >
                    <span className="main-content-text3">{project.name}</span>
                    <div className="main-content-timestamps">
                      <span className="main-content-text4">
                        created:{" "}
                        {`${project.createdAt.slice(
                          0,
                          10
                        )} - updated: ${project.updatedAt.slice(0, 10)}`}
                      </span>
                    </div>
                  </div>
                  <div
                    className="main-content-menu"
                    onClick={() => handleMenu(idx)}
                  >
                    <span>. . .</span>
                  </div>

                  <div
                    className="main-content-container07"
                    id={idx}
                    style={{
                      visibility: idx === idVisible ? "visible" : "hidden",
                    }}
                  >
                    <span className="main-content-clone">Clone</span>
                    <div className="main-content-container08">
                      <span className="main-content-delete">Delete</span>
                      <div className="main-content-container09">
                        <span>del</span>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="main-content-icon5"
                        >
                          <path d="M896 213.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-535.296l-261.333-298.667 261.333-298.667zM896 128h-554.667c-12.8 0-24.235 5.632-32.128 14.549l-298.667 341.333c-14.208 16.213-13.909 40.192 0 56.192l298.667 341.333c8.448 9.643 20.224 14.549 32.128 14.592h554.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM481.835 414.165l97.835 97.835-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l97.835-97.835 97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-97.835-97.835 97.835-97.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-97.835 97.835-97.835-97.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="main-content-hr"></div>
                    <span
                      className="main-content-settings"
                      id="1"
                      onClick={() => handleMenuClick(project.id)}
                    >
                      Project settings
                    </span>
                  </div>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default MainContent;
