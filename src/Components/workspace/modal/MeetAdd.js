import React, { useState } from "react";
import "./MeetAdd.css";
import ModalPortal from "./Modal";
import DatePicker from "react-datepicker";

function MeetAddCard({ onClose }) {
  ////////////////////////////// BACK END /////////////////////////////////////////////

  //npm install nodemailer

  /* const nodemailer = require("nodemailer");

  app.use("/cita_correo", async (req, res) => {
    const { email } = req.params;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "correodelaempres@gmail.com",
        pass: "contraseña de google en contraseñas de aplicaciones",
      },
    });

    await transporter.sendMail({
      from: '"Fred Foo 👻" <Aythen.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Recordatorio ✔", // Subject line
      text: "Cita jueves 23 de julio?", // plain text body
      html: "<b>HTML?</b>", // html body
    });

    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        res.status(400).send(error.message);
      } else {
        res.status(200).send("tarea completada");
      }
    });
  });
 */

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("En Espera del Back");
  };

  const [form, setForm] = useState({
    titulo: "",
    invitados: "",
    ubicacion: "",
    descripcion: "",
    tipo: "",
  });

  const captura = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const cap = (event) => {
    form.tipo = event;
    console.log(form);
  };

  return (
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
          onClick={onClose}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 256 256"
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
                onChange={captura}
                name="titulo"
              />
            </div>
          </div>
        </div>
        <div className="meet-card-select">
          <span className="meet-card-select-unit" onClick={() => cap("evento")}>
            Evento
          </span>
          <span
            className="meet-card-select-unit"
            onClick={() => cap("oficina")}
          >
            Fuera de la oficina
          </span>
          <span className="meet-card-select-unit" onClick={() => cap("tarea")}>
            Tarea
          </span>
          <span
            className="meet-card-select-unit"
            onClick={() => cap("disponible")}
          >
            Horas disponibles
          </span>
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

            <span>Sábado, 10 de junio</span>
            <span>-</span>
            <span>Sábado, 10 de junio</span>
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
              <input
                type="Text"
                placeholder="Añade invitados"
                onChange={captura}
                name="invitados"
              />
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
              <input
                type="Text"
                placeholder="Añade ubicación"
                onChange={captura}
                name="ubicacion"
              />
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
                onChange={captura}
                name="descripcion"
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
          <button onClick={onClose} className="meet-card-cancel-btn">
            Más opciones
          </button>
          <button onClick={onClose} className="meet-card-cancel-btn">
            Guardar
          </button>
          <button type="submit" className="meet-card-btn">
            Make it a Zoom Meeting
          </button>
        </div>
      </div>
    </form>
  );
}

function MeetAdd({ title = "title" }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button className="meet-card-btn" onClick={() => setShowModal(true)}>
        {title}
      </button>
      {showModal && (
        <ModalPortal hideClose={true} onClose={handleModalClose}>
          <MeetAddCard onClose={handleModalClose} />
        </ModalPortal>
      )}
    </>
  );
}

export default MeetAdd;
