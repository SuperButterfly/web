import './editclasses.css'

const EditClasses = () => {
  return (
    <div className="edit-classes-container">
      <div className="edit-classes-container01">
        <div className="edit-classes-container02">
          <span className="edit-classes-heading-states">Edit Class</span>
          <svg viewBox="0 0 1024 1024" className="edit-classes-icon">
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </div>
        <input
          type="text"
          value={'classname'}
          className="edit-classes-textinput"
        />
        <div className="edit-classes-container03">
          <span className="edit-classes-heading-states1">States</span>
          <svg viewBox="0 0 1024 1024" className="edit-classes-icon02">
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
      </div>
      <div className="edit-classes-container04">
        <div className="edit-classes-container05">
          <span className="edit-classes-text">Properties</span>
          <svg viewBox="0 0 1024 1024" className="edit-classes-icon04">
            <path d="M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z"></path>
          </svg>
        </div>
        <div className="edit-classes-container06">
          <input
            type="checkbox"
            checked
            className="edit-classes-textinput1 input"
          />
          <input
            type="text"
            value="width"
            className="edit-classes-textinput2"
          />
          <input type="text" value="100%" className="edit-classes-textinput3" />
          <svg viewBox="0 0 1024 1024" className="edit-classes-icon06">
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
          <button className="edit-classes-button">
            <svg viewBox="0 0 1024 1024" className="edit-classes-icon08">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </button>
          <p className="edit-classes-text1">;</p>
        </div>
        <div className="edit-classes-container07">
          <div className="edit-classes-container08">
            <input type="checkbox" className="edit-classes-input input" />
            <input
              type="text"
              value="property"
              className="edit-classes-textinput4"
            />
            <input
              type="text"
              value="value"
              className="edit-classes-textinput5"
            />
          </div>
          <svg viewBox="0 0 1024 1024" className="edit-classes-icon10">
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
      </div>
      <div className="edit-classes-container09">
        <span className="edit-classes-text2">Text Style</span>
      </div>
      <div className="edit-classes-container10">
        <div className="edit-classes-container11">
          <span className="edit-classes-text3">Media Queries Properties</span>
        </div>
        <div className="edit-classes-container12">
          <span className="edit-classes-text4">&#60; = 991px</span>
          <svg viewBox="0 0 1024 1024" className="edit-classes-icon12">
            <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
          </svg>
        </div>
        <div className="edit-classes-container13">
          <input
            type="checkbox"
            checked
            className="edit-classes-textinput6 input"
          />
          <input
            type="text"
            value="width"
            className="edit-classes-textinput7"
          />
          <input type="text" value="100%" className="edit-classes-textinput8" />
          <svg viewBox="0 0 1024 1024" className="edit-classes-icon14">
            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
          <button className="edit-classes-button1">
            <svg viewBox="0 0 1024 1024" className="edit-classes-icon16">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </button>
          <p className="edit-classes-text5">;</p>
        </div>
        <div className="edit-classes-container14">
          <span className="edit-classes-text6">&#60; = 479px</span>
          <svg viewBox="0 0 1024 1024" className="edit-classes-icon18">
            <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default EditClasses
