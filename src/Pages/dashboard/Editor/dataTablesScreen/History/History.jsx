import React, { useState, useEffect } from 'react'
import { format, isBefore, subWeeks, isToday, isYesterday } from 'date-fns'
import styles from './history.module.css'
import Elipse from '../../../../../assets/Ellipse.svg'
import plus from '../../../../../assets/mas.svg'
import ArrowRight from '../../../../../assets/ArrowRight.svg'
import moreVertical from '../../../../../assets/more-vertical.svg'

const versionesPorDia = (versions) => {
  const grupoVersiones = {}

  versions.forEach((version) => {
    const { date } = version
    const formattedDate = format(new Date(date), 'EEEE') // obtener el día de la semana

    if (isYesterday(new Date(date))) {
      if (grupoVersiones.Ayer) {
        grupoVersiones.Ayer.push(version)
      } else {
        grupoVersiones.Ayer = [version]
      }
    } else if (isToday(new Date(date))) {
      if (grupoVersiones.Hoy) {
        grupoVersiones.Hoy.push(version)
      } else {
        grupoVersiones.Hoy = [version]
      }
    } else if (isBefore(new Date(date), subWeeks(new Date(), 1))) {
      const formattedFullDate = format(
        new Date(date),
        "dd 'de' MMMM 'del' yyyy"
      )
      if (grupoVersiones[formattedFullDate]) {
        grupoVersiones[formattedFullDate].push(version)
      } else {
        grupoVersiones[formattedFullDate] = [version]
      }
    } else {
      if (grupoVersiones[formattedDate]) {
        grupoVersiones[formattedDate].push(version)
      } else {
        grupoVersiones[formattedDate] = [version]
      }
    }
  })

  return grupoVersiones
}

const VersionHistory = ({ versiones, currentVersion, onVersionSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { allVersions, handleAddVersion } = versiones
  const [versions, setVersions] = useState([])
  const [search, setSearch] = useState('')

  const syncedData = [
    {
      id: 1,
      name: 'Versión 1',
      description: 'Descripción de la versión 1',
      date: new Date(2023, 6, 10),
      time: '10:00 AM',
      author: 'Benjamin'
    },
    {
      id: 2,
      name: 'Versión 2',
      description: 'Descripción de la versión 2',
      date: new Date(2023, 5, 20),
      time: '02:30 PM',
      author: 'Aythen Company'
    },
    {
      id: 3,
      name: 'Versión 3',
      description: 'Descripción de la versión 3',
      date: new Date(2023, 5, 20),
      time: '10:56 AM',
      author: 'Pablo'
    },
    {
      id: 4,
      name: 'Versión 6',
      description: 'Descripción de la versión 6',
      date: new Date(2023, 5, 10),
      time: '02:35 AM',
      author: 'Aythen Company'
    }
  ]

  useEffect(() => {
    const data = allVersions || syncedData
    setVersions(data)
  }, [])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filtroVersiones = versions.filter((version) =>
    Object.values(version)
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const grupoVersiones = versionesPorDia(filtroVersiones)

  return (
    <div className={styles.container}>
      <div className={styles.subContainerAndTitles}>
        <p className={styles.title}>HISTORIAL DE VERSIONES</p>
        {/* <span>
            {currentVersion !== null
              ? versions.find((v) => v.id === currentVersion)?.name
              : 'Historial de versiones'}
          </span> */}
        <div className={styles.searchBar}>
          <div className={styles.Prueba1}>
            <input type="checkbox" /> <span>Show changes</span>
          </div>
          <input
            type="search"
            placeholder="Creado por..."
            value={search}
            onChange={handleSearch}
            className={styles.inputSearch}
          />
        </div>
        <div className={styles.containerEachVersions}>
          {Object.entries(grupoVersiones).map(([date, versions]) => (
            <div key={date} className={styles.dropDownVersions}>
              <span className={styles.dateTitle}>
                {date === 'Hoy' ? 'Hoy' : date === 'Ayer' ? 'Ayer' : date}
              </span>
              {versions.map((version) => (
                <div key={version.id} className={styles.contenedorDatosVersion}>
                  <div className={styles.divArrowDatosMenuDots}>
                    <img
                      src={ArrowRight}
                      alt="ArrowRight"
                      className={styles.iconArrowRight}
                    />
                    <div
                      className={styles.dateVersions}
                      onClick={() => onVersionSelect(version.id)}
                    >
                      <span className={styles.datoDeVersionFecha}>
                        {format(version.date, 'dd MMMM yyyy')}, {version.time}
                      </span>
                      <p className={styles.datoDeVersionAutor}>
                        <img src={Elipse} alt="Elipse" />
                        <span className={styles.autorName}>
                          {version.author}
                        </span>
                      </p>
                    </div>
                    <img
                      src={moreVertical}
                      alt="moreVertical"
                      className={styles.iconMenuDots}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.Prueba}>
          <span>MAS ANTIGUO</span>{' '}
          <img className={styles.iconPlus} src={plus} alt="plus" />
        </div>
      </div>
    </div>

    // <div className={styles.versionHistoryContainer}>
    //   <div className={styles.versionHistoryMenu}>
    //     <div
    //       className={`select ${isMenuOpen ? "open" : ""}`}
    //       onClick={handleMenuToggle}
    //     >
    //       <div className={styles.selectedOption}>
    //         <span className={styles.arrow}>
    //           {isMenuOpen
    //             ? "▲ Historial de versiones"
    //             : "▼ Historial de versiones"}
    //         </span>

    //         <span className={styles.versionName}>
    //           {currentVersion !== null
    //             ? versions.find((v) => v.id === currentVersion)?.name
    //             : "Historial de versiones"}
    //         </span>
    //       </div>
    //       <div className="options">
    //         <div className={styles.searchBar}>
    //           <input
    //             type="text"
    //             placeholder="Buscar versión..."
    //             value={search}
    //             onChange={handleSearch}
    //             className="search"
    //           />
    //         </div>
    //         {isMenuOpen && (
    //           <div>
    //             <hr></hr>
    //             {Object.entries(grupoVersiones).map(([date, versions]) => (
    //               <div key={date} className={styles.versionGrupo}>
    //                 <div className={styles.dateHeadin}>
    //                   {date === "Hoy"
    //                     ? "Hoy"
    //                     : date === "Ayer"
    //                     ? "Ayer"
    //                     : date}
    //                 </div>
    //                 {versions.map((version) => (
    //                   <div
    //                     key={version.id}
    //                     className={`option ${
    //                       currentVersion === version.id ? "selected" : ""
    //                     }`}
    //                     onClick={() => onVersionSelect(version.id)}
    //                   >
    //                     <div className={styles.versionInfo}>
    //                       <span className={styles.versionDetails}>
    //                       <span className={styles.versionDate}>{format(version.date, "dd MMMM yyyy")},</span>

    //                         {/* </span> */}
    //                         <span className={styles.versionTime}>{version.time}</span>
    //                         <span className={styles.versionAuthor}>
    //                           por {version.author}
    //                         </span>
    //                       </span>
    //                     </div>
    //                     <div className={styles.versionDescription}>
    //                       ◾{version.description}
    //                     </div>
    //                   </div>
    //                 ))}
    //               </div>
    //             ))}
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default VersionHistory
