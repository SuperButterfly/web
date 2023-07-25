import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProject } from '../../../redux/actions/projects'

const Setting = () => {
  const [data, setData] = useState({})
  const [name, setName] = useState(false)
  const dispatch = useDispatch()
  const inpFile = useRef(null)
  const { projectSelected } = useSelector((state) => state.project)

  useEffect(() => {
    if (projectSelected && projectSelected.name) {
      setData({
        name: projectSelected.name,
        url: projectSelected.url ? projectSelected.url : 'your url',
        dns: projectSelected.dns ? projectSelected.dns : 'your dns'
      })
    }
  }, [projectSelected])

  const handleInp = (ev) => {
    ev.preventDefault()
    inpFile.current.click()
  }

  const handleNameChange = (ev) => {
    setData({ ...data, name: ev.target.value })
  }

  const handleUrlChange = (ev) => {
    setData({ ...data, url: ev.target.value })
  }

  const handleDnsChange = (ev) => {
    setData({ ...data, dns: ev.target.value })
  }

  const handleFileChange = (ev) => {
    setName(ev.target.files[0].name)
    setData({ ...data, file: ev.target.files[0] })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    dispatch(updateProject(projectSelected.id, data))
  }
  return (
    <div className="settings-general-container1">
      <div className="settings-general-name-container">
        <h4 className="settings-general-heading-name">Project Name</h4>
        <span className="settings-general-name-text">
          This is the project's name within the Studio
        </span>
        <input
          type="text"
          className="settings-general-name b-input-grey"
          value={data.name}
          onChange={handleNameChange}
        />
      </div>
      <div className="settings-general-site-container">
        <h4 className="settings-general-heading-site">Site address (URL)</h4>
        <div className="paragraph-container">
          <span className="settings-general-name-text">
            The alias used when you publish your project with teleportqh domain.
          </span>
          <br />
          <span className="settings-general-name-text">
            New publish required for the URL to be updated.
          </span>
        </div>
        <input
          type="text"
          className="settings-general-url b-input-grey"
          value={data.url}
          onChange={handleUrlChange}
        />
      </div>
      <div className="settings-dns-site-container">
        <h4 className="settings-dns-heading-site">Domain Name Server</h4>
        <div className="paragraph-container">
          <span className="settings-general-name-text">
            Domains assigned to your Production Deployments.
          </span>
          <span className="settings-general-name-text">Site A (URL)</span>
        </div>
        <input
          type="text"
          className="settings-dns-url b-input-grey"
          value={data.dns}
          onChange={handleDnsChange}
        />
      </div>
      <div className="settings-general-favicon-container">
        <h4 className="settings-general-headingfavicon">FavIcon</h4>
        <span className="settings-general-name-text">
          Upload a 32 x 32 pixel ICO, PNG, GIF, JPG, JPEG, WEBP or SVG to
          display in browser tabs.
        </span>
        <div className="settings-general-favicon-input">
          <input
            id="fileinput"
            type="file"
            style={{ display: 'none' }}
            ref={inpFile}
            onChange={handleFileChange}
            className="b-input-grey"
          />
          <div className="settings-general-container2">
            <div className="settings-general-ico"></div>
            <span className="settings-general-nofile">
              {name || 'No file selected'}
            </span>
          </div>
          <button
            className="settings-general-icon-button button"
            onClick={handleInp}
          >
            Browse Files
          </button>
        </div>
      </div>
      <div className="settings-general-assets-container">
        <h4 className="settings-general-assets-text">Assets</h4>
        <span className="settings-general-files-text">36 / 1600 files</span>
        <span className="settings-general-size-text">8.92 / 1000 MB</span>
      </div>
      <button className="settings-general-save-button" onClick={handleSubmit}>
        Save Changes
      </button>
    </div>
  )
}

export default Setting
