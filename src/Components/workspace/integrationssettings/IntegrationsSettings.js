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
    <div className="integrations-settings-container">
      <div className="integrations-settings-hosting-container">
        <span className="integrations-settings-heading-host">
          Hosting
        </span>
        <span className="integrations-settings-vervel-text">
          Vercel
        </span>
      </div>
        <div className="integrations-settings-container1">
          <div className="integrations-settings-container2">
            <span className="integrations-settings-heading-vercel">
              Vercel integration
            </span>
            <p className="integrations-settings-text">
              To benefit from Vercel integration, upgrade your <br/> workspace.
            </p>
          </div>
        </div>
      <div className="integrations-settings-integration-container">
        <span className="integrations-settings-heading-other">
          Other integrations
        </span>
        <span className="integrations-settings-int-text1">GitHub</span>
        <div className="integrations-settings-text-container">
          <p className="integrations-settings-int-text2">You can find your token in your</p>
          <a href='https://github.com/' className="integrations-settings-int-text21">Github account</a>
        </div>
          <input className="integrations-settings-token" value={data.token} onChange={handleTokenChange}/>
      </div>
      <button 
        className="integrations-settings-save-button button"
        onClick={handleSubmit}  
      >
        Save Changes
      </button>
    </div>
  )
}

export default IntegrationsSettings
