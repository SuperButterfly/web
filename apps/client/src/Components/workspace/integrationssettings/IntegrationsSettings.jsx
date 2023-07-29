import './integrationssettings.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProject } from '../../../../src/redux/actions/projects'
import Setting from './Setting.jsx'

const IntegrationsSettings = () => {
  const props = {
    token: 'Add your token here'
  }

  const [data, setData] = useState(props)
  const dispatch = useDispatch()
  const { projectSelected } = useSelector((state) => state.project)

  const handleTokenChange = (ev) => {
    setData({ ...data, token: ev.target.value })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log('id', projectSelected.id)
    console.log('data', data)
    // dispatch(updateProject(
    //   projectSelected.id, data
    // ));
  }

  return (
    <div className="settings-general-container">
      <div className="settings-general-container">
        <div className="settings-general-name-container">
          <h4 className="settings-general-heading-name">Hosting</h4>
          <span className="settings-general-name-text">Scaleway</span>
        </div>
        <div className="integrations-settings-container1 mb-1">
          {/* <div className="integrations-settings-container2">
            <span className="isettings-general-heading-name">
              Vercel integration
            </span>
            <p className="settings-general-name-text">
              To benefit from Vercel integration, upgrade your <br /> workspace.
            </p>
          </div> */}
        </div>
        <div className="integrations-settings-integration-container mb-1">
          <span className="settings-general-heading-name">
            Integración escalable con Scaleway
          </span>

          <div className="integrations-github-container">
            <div className="integrations-github-svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="github-svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </div>
            <span className="settings-general-heading-name">GitHub</span>
          </div>
          <div className="integrations-settings-text-container">
            <p className="settings-general-name-text">
              You can find your token in your
            </p>

            <a
              href="https://github.com/"
              className="settings-general-name-text"
              rel="noreferrer"
              target="_blank"
            >
              Github account
            </a>
          </div>
          <input
            className="integrations-settings-token b-input-grey"
            value={data.token}
            onChange={handleTokenChange}
          />
        </div>
        <button className="settings-general-save-button" onClick={handleSubmit}>
          Save Changes
        </button>
      </div>
      <Setting />
    </div>
  )
}

export default IntegrationsSettings
