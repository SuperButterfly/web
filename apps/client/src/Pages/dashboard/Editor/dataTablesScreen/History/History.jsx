import React, { useState, useEffect } from 'react'
import { format, isBefore, subWeeks, isToday, isYesterday } from 'date-fns'
import styles from './history.module.css'
import Elipse from '../../../../../assets/Ellipse.svg'
import plus from '../../../../../assets/mas.svg'
import moreVertical from '../../../../../assets/more-vertical.svg'
import ArrowRight from '../../../../../assets/angle-right.svg'
import ArrowDown from '../../../../../assets/angle-down.svg'
import { versionHistory } from '../../../../.././store'
import { useDispatch, useSelector } from 'react-redux'
import {
  setRenderTable,
  setVersions
} from '../../../../../redux/slices/datatableSlices'

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

const VersionHistory = () => {
  // const [versions, setVersions] = useState([])
  const [search, setSearch] = useState('')
  const [selectedVersion, setSelectedVersion] = useState(null)
  const [expandedVersions, setExpandedVersions] = useState([])
  const [expandedIcons, setExpandedIcons] = useState([])
  const [showChanges, setShowChanges] = useState(false)

  const dispatch = useDispatch()
  const versions = useSelector((state) => state.datatable.versions)

  const handleAddVersionClick = () => {
    setShowChanges(!showChanges)
  }

  const handleRestoreVersion = (id) => {
    const tmpVersion = versions.find((v) => v.id === id)

    dispatch(setRenderTable(false))
    versionHistory.resv3(tmpVersion.data)
    dispatch(setRenderTable(true))
  }

  const handleExpandVersion = (versionId) => {
    if (expandedVersions.includes(versionId)) {
      setExpandedVersions(expandedVersions.filter((id) => id !== versionId))
    } else {
      setExpandedVersions([...expandedVersions, versionId])
    }
    setExpandedIcons((prevState) => {
      if (prevState.includes(versionId)) {
        return prevState.filter((id) => id !== versionId)
      } else {
        return [...prevState, versionId]
      }
    })
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
        <div className={styles.searchBar}>
          {showChanges ? (
            <span
              className={styles.spanChanges}
              onClick={handleAddVersionClick}
            >
              Hide changes
            </span>
          ) : (
            <span
              className={styles.spanChanges}
              onClick={handleAddVersionClick}
            >
              Show changes
            </span>
          )}

          <input
            type="search"
            placeholder="Creado por..."
            value={search}
            onChange={handleSearch}
            className={styles.inputSearch}
          />
        </div>
        {showChanges && (
          <div className={styles.containerEachVersions}>
            {Object.entries(grupoVersiones).map(([date, versions]) => (
              <div key={date} className={styles.dropDownVersions}>
                <span className={styles.dateTitle}>
                  {date === 'Hoy' ? 'Hoy' : date === 'Ayer' ? 'Ayer' : date}
                </span>
                {versions.map((version) => (
                  <div
                    key={version.id}
                    className={styles.contenedorDatosVersion}
                  >
                    <div className={styles.divArrowDatosMenuDots}>
                      <div
                        className={styles.divArrowDatosMenu}
                        onClick={() => handleExpandVersion(version.id)}
                      >
                        <img
                          src={
                            expandedIcons.includes(version.id)
                              ? ArrowDown
                              : ArrowRight
                          }
                          alt="ArrowRight"
                          className={styles.iconArrows}
                        />
                        <div className={styles.dateVersions}>
                          <span className={styles.datoDeVersionFecha}>
                            {format(version.date, 'dd MMMM yyyy')},{' '}
                            {version.time}
                          </span>
                          <p className={styles.datoDeVersionAutor}>
                            <img src={Elipse} alt="Elipse" />
                            <span className={styles.autorName}>
                              {version.author}
                            </span>
                          </p>
                        </div>
                      </div>
                      <img
                        src={moreVertical}
                        alt="moreVertical"
                        className={styles.iconMenuDots}
                      />
                    </div>
                    {expandedVersions.includes(version.id) && (
                      <div
                        className={styles.divDatosExtended}
                        onClick={() => handleRestoreVersion(version.id)}
                      >
                        <div className={styles.dateVersionsWithHover}>
                          <span className={styles.datoDeVersionFecha}>
                            {format(version.date, 'dd MMMM yyyy')},{' '}
                            {version.time}
                          </span>
                          <p className={styles.datoDeVersionAutor}>
                            <img src={Elipse} alt="Elipse" />
                            <span className={styles.autorName}>
                              {version.author}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
            <div className={styles.Prueba}>
              <span>MAS ANTIGUO</span>{' '}
              <img className={styles.iconPlus} src={plus} alt="plus" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VersionHistory
