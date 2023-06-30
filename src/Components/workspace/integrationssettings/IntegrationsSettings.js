import './integrationssettings.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '../../../../src/redux/actions/projects.js';

const IntegrationsSettings = () => {

  const props = {
    token: 'Add your token here'
  }
  
  const [data, setData] = useState(props)
  const dispatch = useDispatch()
  const { projectSelected } = useSelector(state => state.project)
  
  useEffect(() => {
    console.log(projectSelected)
  }, [projectSelected])

  const handleTokenChange = ev => {
    setData({...data, token: ev.target.value})
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log('id', projectSelected.id)
    console.log('data', data)
    // dispatch(updateProject(
    //   projectSelected.id, data
    // ));
  };
  
  return (
    <div className="settings-general-container">
      <div className="ettings-general-container">
        <div className='settings-general-name-container'>

        <h4 className="settings-general-heading-name">
          Hosting
        </h4>
        <span className="settings-general-name-text">
          Vercel
        </span>
      </div>
        <div className="integrations-settings-container1">
          <div className="integrations-settings-container2">
            <span className="isettings-general-heading-name">
              Vercel integration
            </span>
            <p className="settings-general-name-text">
              To benefit from Vercel integration, upgrade your <br/> workspace.
            </p>
          </div>
        </div>
      <div className="integrations-settings-integration-container">
        <span className="settings-general-heading-name">
          Other integrations
        </span>
        <span className="settings-general-heading-name">GitHub</span>
        <div className="integrations-settings-text-container">
          <p className="settings-general-name-text">You can find your token in your</p>
          <a href='https://github.com/' className="settings-general-name-text">Github account</a>
        </div>
          <input className="integrations-settings-token" value={data.token} onChange={handleTokenChange}/>
      </div>
      <button 
        className="settings-general-save-button"
        onClick={handleSubmit}  
      >
        Save Changes
      </button>
        </div>
    </div>
  )
}

export default IntegrationsSettings
