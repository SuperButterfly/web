import { useState } from 'react'
import './Cards.css'
import Modal from 'react-modal'

export default function Cards() {
  const [display, setDisplay] = useState({})
  const [previewIsOpen, setPreviewIsOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  const templates = [
    { id: 'plantilla1', title: 'Start from scratch', type: 'Blank project' },
    { id: 'plantilla2', title: 'SHOP Template', type: 'Template', img:"https://colorlib.com/wp/wp-content/uploads/sites/2/capitalshop-free-template.jpg.webp"},
    { id: 'plantilla3', title: 'SEO Template', type: 'Template', img: "https://portermetrics.com/wp-content/uploads/2023/01/Porter-Metrics-Google-Analytics-4-GA4-Google-Data-Studio-Report-Template-›-Overview-1927x2048.png" },
    { id: 'plantilla4', title: 'OFFICE Template', type: 'Template', img: "https://media.slidesgo.com/storage/84164/responsive-images/0-office-meeting___media_library_original_1600_900.jpg" },
    { id: 'plantilla5', title: 'RRSS Template', type: 'Template', img: "https://edit.org/photos/img/blog/z8a-plantillas-para-redes-sociales-editor-online-gratis.jpg-840.jpg" },
    { id: 'plantilla6', title: 'CRM template', type: 'Template', img: "https://clickup.com/blog/wp-content/uploads/2022/06/image3-4-1400x623.png" },
    { id: 'plantilla7', title: 'CRM template', type: 'Template', img: "https://play.teleporthq.io/static/img/project-templates/togthr-app.gif" },
    { id: 'plantilla8', title: 'Medica template', type: 'Template', img:"https://play.teleporthq.io/static/img/project-templates/togthr-app.gif" },
    { id: 'plantilla9', title: 'Medica template', type: 'Template', img: "https://play.teleporthq.io/static/img/project-templates/togthr-app.gif" },
    { id: 'plantilla10', title: 'Medica template', type: 'Template', img: "https://play.teleporthq.io/static/img/project-templates/togthr-app.gif" },
    { id: 'plantilla11', title: 'Medica template', type: 'Template', img: "https://play.teleporthq.io/static/img/project-templates/togthr-app.gif" },
    { id: 'plantilla12', title: 'Medica template', type: 'Template', img: "https://play.teleporthq.io/static/img/project-templates/togthr-app.gif" }
  ]

  const changeDisplay = (key, value) => {
    setDisplay((prevState) => ({
      ...prevState,
      [key]: value
    }))
  }

  const handlePreview = (templateId) => {
    setSelectedTemplate(templateId)
    setPreviewIsOpen(true)
  }

  const closePreview = () => {
    setPreviewIsOpen(false)
  }

  return (
    <>
      {templates.map((template) => (
        <div key={template.id} className="template-card">
          <div
            onMouseEnter={() => changeDisplay(template.id, true)}
            onMouseLeave={() => changeDisplay(template.id, false)}
            className={`img-container ${template.id}`}
          >
            <div className={display[template.id] ? 'card-overlay' : 'display'}>
              <div className="pt-stack-card">
                <div className="btn-wrapper">
                  <button
                    className="btn-overlay preview"
                    onClick={() => handlePreview(template.img)}
                  >
                    Quick Preview
                  </button>
                </div>
                <button className="btn-overlay start">Start Building</button>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="left-side">
              <span className="project-title">{template.title}</span>
              <div className="author-section">
                <span className="template-type">{template.type}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Modal
        className="modalContainer"
        isOpen={previewIsOpen}
        onRequestClose={closePreview}
      >
        <div className="containerInterno">
          <div className="preview-card">
            <div className="preview-card-header">
              <div className="meet-card-flex">
                <svg
                  className="meet-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 256 256"
                onClick={closePreview}
              >
                <path
                  fill="currentColor"
                  d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
                />
              </svg>
            </div>
            <div className='img-preview-container'>
              <img src={selectedTemplate} alt="preview" className='img-preview'/>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
