import './socialsettings.css'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProject } from '../../../../src/redux/actions/projects'

const SocialSettings = () => {
  const inpFile = useRef(null)
  const handleInp = (ev) => {
    ev.preventDefault()
    inpFile.current.click()
  }

  const [data, setData] = useState({})
  const dispatch = useDispatch()
  const { projectSelected } = useSelector((state) => state.project)

  const handleTitleChange = (ev) => {
    setData({ ...data, name: ev.target.value })
  }

  const handleDescriptionChange = (ev) => {
    setData({ ...data, description: ev.target.value })
  }

  const handleFileChange = (ev) => {
    setData({ ...data, file: ev.target.files[0] })
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
      <div className="settings-general-container1">
        <div className="settings-general-name-container">
          <h4 className="settings-general-heading-name">Open Graph</h4>
          <span className="settings-general-name-text">OG Title</span>
          <span className="settings-general-name-text">
            The title of your page, content, object etc. as you would like for
            it to appear when displayed on social media platforms.
          </span>
          <input
            type="text"
            id="og"
            className="settings-dns-url"
            placeholder="Strong Earnest Coyote"
            onChange={handleTitleChange}
          />
        </div>
        <div className="social-settings-og-description-container">
          <h4 className="settings-general-heading-name">OG Description</h4>
          <span className="settings-general-name-text">
            1-2 sentence snippet that shows up in the social media post, which
            describes the content of the website. Maximum 200 characters.
          </span>
          <textarea
            className="settings-dns-url"
            placeholder="Description of your project"
            rows="10"
            id="ogDescription"
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="social-settings-og-input-cont">
          <span className="settings-general-heading-name">OG Image</span>
          <span className="ssettings-general-name-text">
            The image that shows up when you share the page on social media. We
            accept GIF, JPG, JPEG, PNG and WEBP file types. Recommended formats
            are 1:1 or 1.9:1.
          </span>
          <div className="social-settings-og-input">
            <input
              id="fileinput"
              type="file"
              style={{ display: 'none' }}
              ref={inpFile}
              onChange={handleFileChange}
            />
            <div className="social-settings-container1">
              <div className="social-settings-ico"></div>
              <span className="settings-general-nofile">No file selected</span>
            </div>
            <button
              className="settings-general-icon-button button"
              onClick={handleInp}
            >
              Browse Files
            </button>
          </div>
        </div>
        <button className="settings-general-save-button" onClick={handleSubmit}>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default SocialSettings
