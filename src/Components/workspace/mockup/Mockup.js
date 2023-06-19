import './Mockup.css'

export default function Mockup() {
  return (
      <div className="templates-wrapper">
      <div className="templates-topbar">
        <p className="templates-title">Customizable templates, handpicked just for you - for free!</p>
        <button className="pt-btn underline"><span className="manage-text">View All</span></button>
      </div>
      <div className="template-cards-container">
        <div className="template-card">
          <div className="blank-proyect">
          <span className="blank-text">Blank</span>
          </div>
          <div className="bottom-section">
            <div className="left-side">
              <span class="project-title">Start from scratch</span>
              <div class="author-section">
                <span class="template-type">Blank project  </span>
              </div>
            </div>
          </div>
        </div>
        <div className="jsx-2423526702 template-card">
      <div className="jsx-2423526702 img-container"></div>
      <div className="jsx-2423526702 bottom-section">
        <div className="jsx-2423526702 left-side">
          <span className="jsx-2423526702 project-title">Traveler template</span>
          <div className="jsx-2423526702 author-section">
            <span className="jsx-2423526702 template-type">Template </span>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
    )
}