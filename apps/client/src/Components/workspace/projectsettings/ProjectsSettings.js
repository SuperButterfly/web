import { useState } from 'react'
import './projectsettings.css'
import SettingsGeneral from '../../workspace/settingseneral/SettingsGeneral.js'
import SeoSettings from '../../workspace/seosettings/SeoSettings.js'
import IntegrationsSettings from '../../workspace/integrationssettings/IntegrationsSettings.js'
import FontsSettings from '../../workspace/fontssettings/FontsSettings.js'
import SocialSettings from '../../workspace/socialsettings/SocialSettings.js'
import ExperimentalFeatures from '../../workspace/experimentalfeatures/ExperimentalFeatures.js'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import GoogleSettings from '../GoogleSettings/GoogleSettings'
import FacebookSettings from '../FacebookSettings/FacebookSettings'
import SearchSettings from '../SearchSettings/SearchSettings'
import FaviconSettings from '../FaviconSettings/FaviconSettings'
import RedesSettings from '../RedesSettings/RedesSettings'
import InfoBasic from '../InfoBasic/InfoBasic'

const ProjectSettings = () => {
  const workspaceSelected = useSelector(
    (state) => state.workspace.workspaceSelected
  )
  const projectSelected = useSelector((state) => state.project.projectSelected)
  const navigate = useNavigate()

  const [tab, setTab] = useState(0)
  const tabs = [
    'General',
    'SEO',
    'Integrations',
    'Fonts',
    'Social',
    'Experimental Features',
    'Google Settings',
    'Metaetiqueta de Facebook',
    'Optimización para buscadores',
    'Favicon',
    'Enlaces de redes sociales'
    // 'Informacion basica'
  ]

  const handleClick = (ev) => {
    ev.preventDefault()
    setTab(ev.target.id)
    // console.log(ev.target.id);
  }

  const handleNavigate = () => {
    navigate(`/Editor/${workspaceSelected.id}`)
  }
  return (
    <div className="project-settings-container">
      <div className="project-settings-header-container-main">
        <div className="project-settings-header-container">
          <div className="project-settings-text-container">
            <div className="proyect-settings-crumbs-container">
              <Link className="workspace-settings-textlink-settings" to="/">
                <span>{workspaceSelected.name}</span>
              </Link>
              <span>/</span>
              <span className="workspace-settings-textname-project">
                {projectSelected.name}
              </span>
              <span>/</span>
            </div>
            <h3 className="projects-settings-title">Projects Settings</h3>
          </div>
          <button
            onClick={() => handleNavigate()}
            className="project-settings-open-button button"
          >
            Open Editor
          </button>
        </div>
      </div>
      <div className="project-settings-main-container1">
        <div className="project-settings-main-container2">
          <div className="project-settings-main-container3">
            <div className="project-settings-main-container4">
              <div className="project-settings-main-container5">
                <div className="project-settings-options-container">
                  <span className="project-settings-title">SETTINGS</span>
                  <ul className="project-settings-ul">
                    {tabs.map((title, idx) => (
                      <li
                        key={idx}
                        className={
                          'project-settings-li' +
                          `${tab == idx ? ' selected' : ''}`
                        }
                        onClick={handleClick}
                        id={idx}
                      >
                        <span className="project-settings-text" id={idx}>
                          {title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="project-settings-selected-container">
                  {tabs[tab] === 'General' && <SettingsGeneral />}
                  {tabs[tab] === 'SEO' && <SeoSettings />}
                  {tabs[tab] === 'Integrations' && <IntegrationsSettings />}
                  {tabs[tab] === 'Fonts' && <FontsSettings />}
                  {tabs[tab] === 'Social' && <SocialSettings />}
                  {/* (tabs[tab] === 'Custom Code')  && <CustomCode /> */}
                  {tabs[tab] === 'Experimental Features' && (
                    <ExperimentalFeatures />
                  )}
                  {tabs[tab] === 'Google Settings' && <GoogleSettings />}
                  {tabs[tab] === 'Metaetiqueta de Facebook' && (
                    <FacebookSettings />
                  )}
                  {tabs[tab] === 'Optimización para buscadores' && (
                    <SearchSettings />
                  )}
                  {tabs[tab] === 'Favicon' && <FaviconSettings />}
                  {tabs[tab] === 'Enlaces de redes sociales' && (
                    <RedesSettings />
                  )}
                  {/* {tabs[tab] === 'Informacion basica' && <InfoBasic />} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSettings
