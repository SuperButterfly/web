import React, { useState, useEffect } from "react";
import { format, isBefore, subWeeks, isToday, isYesterday } from "date-fns";
import "./history.css";

const versionesPorDia = (versions) => {
  const grupoVersiones = {};

  versions.forEach((version) => {
    const { date } = version;
    const formattedDate = format(new Date(date), "EEEE"); // obtener el día de la semana

    if (isYesterday(new Date(date))) {
      if (grupoVersiones["Ayer"]) {
        grupoVersiones["Ayer"].push(version);
      } else {
        grupoVersiones["Ayer"] = [version];
      }
    } else if (isToday(new Date(date))) {
      if (grupoVersiones["Hoy"]) {
        grupoVersiones["Hoy"].push(version);
      } else {
        grupoVersiones["Hoy"] = [version];
      }
    } else if (isBefore(new Date(date), subWeeks(new Date(), 1))) {
      const formattedFullDate = format(
        new Date(date),
        "dd 'de' MMMM 'del' yyyy"
      );
      if (grupoVersiones[formattedFullDate]) {
        grupoVersiones[formattedFullDate].push(version);
      } else {
        grupoVersiones[formattedFullDate] = [version];
      }
    } else {
      if (grupoVersiones[formattedDate]) {
        grupoVersiones[formattedDate].push(version);
      } else {
        grupoVersiones[formattedDate] = [version];
      }
    }
  });

  return grupoVersiones;
};

const VersionHistory = ({ currentVersion, onVersionSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [versions, setVersions] = useState([]);
  const [search, setSearch] = useState("");


  const syncedData = [
        {
          id: 1,
          name: "Versión 1",
          description: "Descripción de la versión 1",
          date: new Date(2023, 5, 22),
          time: "10:00 AM",
          author: "Fiorella",
        },
        {
          id: 2,
          name: "Versión 2",
          description: "Descripción de la versión 2",
          date: new Date(2023, 5, 20),
          time: "02:30 PM",
          author: "Aythen",
        },
        {
          id: 3,
          name: "Versión 3",
          description: "Descripción de la versión 3",
          date: new Date(2023, 5, 20),
          time: "10:56 AM",
          author: "Pablo",
        },
        {
          id: 4,
          name: "Versión 4",
          description: "Descripción de la versión 4",
          date: new Date(2023, 5, 20),
          time: "08:45 PM",
          author: "Agustin",
        },
        {
          id: 5,
          name: "Versión 5",
          description: "Descripción de la versión 5",
          date: new Date(2023, 5, 19),
          time: "12:00 AM",
          author: "Fiorella",
        },
        {
          id: 6,
          name: "Versión 6",
          description: "Descripción de la versión 6",
          date: new Date(2023, 5, 10),
          time: "02:35 AM",
          author: "Aythen",
        },
      ];


  useEffect(() => {
    setVersions(syncedData);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filtroVersiones = versions.filter((version) =>
    Object.values(version)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const grupoVersiones = versionesPorDia(filtroVersiones);

  return (
    <div className="container">
      <div className="menu">
        <div
          className={`select ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <div className="selected-option">
            <span className="arrow">
              {isMenuOpen
                ? "▲ Historial de versiones"
                : "▼ Historial de versiones"}
            </span>
            <span className="version-name">
              {currentVersion !== null
                ? versions.find((v) => v.id === currentVersion)?.name
                : "Historial de versiones"}
            </span>
          </div>
          <div className="options">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Buscar versión..."
                value={search}
                onChange={handleSearch}
                className="search"
              />
            </div>
            {isMenuOpen && (
              <div>
                <hr></hr>

                {Object.entries(grupoVersiones).map(([date, versions]) => (
                  <div key={date} className="version-grupo">
                    <div className="date-heading">
                      {date === "Hoy"
                        ? "Hoy"
                        : date === "Ayer"
                        ? "Ayer"
                        : date}
                    </div>
                    {versions.map((version) => (
                      <div
                        key={version.id}
                        className={`option ${
                          currentVersion === version.id ? "selected" : ""
                        }`}
                        onClick={() => onVersionSelect(version.id)}
                      >
                        <div className="version-info">
                          <span className="version-details">
                          <span className="version-date">{format(version.date, "dd MMMM yyyy")},</span>

                            
                            {/* </span> */}
                            <span className="version-time">{version.time}</span>
                            <span className="version-author">
                              por {version.author}
                            </span>
                          </span>
                        </div>
                        <div className="version-description">
                          ◾{version.description}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionHistory;