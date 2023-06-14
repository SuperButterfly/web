import React, { useState, useEffect } from 'react';
import './projectsettings.css';
import SettingsGeneral from '../../workspace/settingseneral/SettingsGeneral.js';
import SeoSettings from '../../workspace/seosettings/SeoSettings.js';
import IntegrationsSettings from '../../workspace/integrationssettings/IntegrationsSettings.js';
import FontsSettings from '../../workspace/fontssettings/FontsSettings.js';
import SocialSettings from '../../workspace/socialsettings/SocialSettings.js';
import CustomCode from '../../workspace/customcode/CustomCode.js';
import ExperimentalFeatures from '../../workspace/experimentalfeatures/ExperimentalFeatures.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const ProjectSettings = () => {

  const workspaceSelected  = useSelector(state => state.workspace.workspaceSelected);
  const projectSelected = useSelector(state=> state.project.projectSelected);
  const navigate = useNavigate(); 
  
  const [ tab, setTab ] = useState(0);
  const tabs = [
    'General', 
    'SEO', 
    'Integrations', 
    'Fonts', 
    'Social', 
    // 'Custom Code', 
    'Experimental Features'
  ];
  
  const handleClick = ev => {
    ev.preventDefault();
    setTab(ev.target.id);
    // console.log(ev.target.id);
  }
  
  const handleNavigate = () => {
     navigate("/Editor/idproject")
  }
  return (
    <div className="project-settings-container">
      <div className="project-settings-header-container-main">
        <div className="project-settings-header-container">
          <div className="project-settings-text-container">
            <div className='proyect-settings-crumbs-container'>
                 <Link className="workspace-settings-textlink-settings" to="/workspace/templates">
                       <span>{workspaceSelected.name}</span>
                 </Link>
                 <span>/</span><span className="workspace-settings-textname-project">{ projectSelected.name }</span><span>/</span>       
            </div>
            <h3 className="projects-settings-title">Projects Settings</h3>
          </div>
          <button onClick={()=> handleNavigate()} className="project-settings-open-button button">
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
                    {
                      tabs.map((title, idx) => (
                        <li 
                          className={'project-settings-li' + `${tab == idx ? ' selected' : ''}`}
                          onClick={handleClick}
                          id={idx}
                        >
                          <span className="project-settings-text" id={idx}>
                            {title}
                          </span>
                        </li>
                        )
                      )
                    }
                  </ul>
                </div>
                <div className="project-settings-selected-container">
                  { (tabs[tab] === 'General') && <SettingsGeneral /> }
                  { (tabs[tab] === 'SEO') && <SeoSettings /> }
                  { (tabs[tab] === 'Integrations') && <IntegrationsSettings /> }
                  { (tabs[tab] === 'Fonts') && <FontsSettings /> }
                  { (tabs[tab] === 'Social') && <SocialSettings /> }
                  {/* (tabs[tab] === 'Custom Code')  && <CustomCode /> */}
                  { (tabs[tab] === 'Experimental Features')  && <ExperimentalFeatures /> }
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
