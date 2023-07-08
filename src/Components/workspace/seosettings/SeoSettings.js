import './seosettings.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProject } from '../../../../src/redux/actions/projects.js'

const SeoSettings = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  const { projectSelected } = useSelector((state) => state.project)

  useEffect(() => {
    if (projectSelected && projectSelected.name) {
      const seo = projectSelected.seo
      setData({
        lang: seo.lang ? seo.lang : 'en',
        meta: seo.meta ? seo.meta : 'Strong Earnest Coyote',
        metaDescription: seo.metaDescription
          ? seo.metaDescription
          : 'Description of your project'
      })
    }
  }, [projectSelected])

  const handleTitleChange = (ev) => {
    setData({ ...data, meta: ev.target.value })
  }

  const handleDescriptionChange = (ev) => {
    setData({ ...data, metaDescription: ev.target.value })
  }

  const handleLangChange = (ev) => {
    setData({ ...data, lang: ev.target.value })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    dispatch(updateProject(projectSelected.id, { seo: data }))
  }

  return (
    <div className="settings-general-containerr">
      <div className="settings-general-container1">
        <div className="settings-general-name-container">
          <h4 className="ssettings-general-heading-name">Meta Title</h4>
          <span className="settings-general-name-text">
            The title element defines a title in the browser toolbar, provides a
            title for the page when it is added {<br />} to favorites and
            displays a title for the page in search-engine results.
          </span>
          <input
            id="meta"
            type="text"
            className="seo-settings-meta"
            value={data.meta}
            onChange={handleTitleChange}
          />
        </div>
        <div className="seo-settings-site-container">
          <h4 className="settings-general-heading-name">Meta Description</h4>
          <span className="settings-general-name-text">
            Description of your website is a snippet of up to 160 characters – a
            tag in HTML – which {<br />} summarizes a page's content, displayed
            on search engine results pages.
          </span>
          <textarea
            id="metaDescription"
            className="seo-settings-metadesc"
            placeholder={data.metaDescription}
            rows="4"
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="seo-settings-favicon-container">
          <h4 className="settings-general-heading-name">Language</h4>
          <span className="settings-general-name-text">
            Set you site's language code to allow browsers, translation apps,
            and other tools to perform language <br /> sensitive tasks. View
            here the list of language codes
          </span>
          <input
            type="text"
            className="seo-settings-lang"
            value={data.lang}
            onChange={handleLangChange}
          />
        </div>
        <button className="seo-settings-save-button" onClick={handleSubmit}>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default SeoSettings
