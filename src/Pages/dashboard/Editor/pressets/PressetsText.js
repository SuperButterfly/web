import './pressets-text.css'

const PressetsText = (props) => {
  return (
    <div className="pressets-text-container">
      <span>Text Styles</span>
      <div className="pressets-text-container01">
        <div className="pressets-text-container02">
          <span className="pressets-text-text01">Aa</span>
        </div>
        <div className="pressets-text-container03">
          <div className="pressets-text-container04">
            <span>Content</span>
            <span className="pressets-text-text03">Default</span>
          </div>
          <span className="pressets-text-text04">12px Inter 400</span>
        </div>
      </div>
      <div className="pressets-text-container05">
        <div className="pressets-text-container06">
          <div className="pressets-text-container07">
            <span className="pressets-text-text05">Aa</span>
          </div>
          <div className="pressets-text-container08">
            <div className="pressets-text-container09">
              <span>Heading</span>
            </div>
            <span className="pressets-text-text07">32px Inter 700</span>
          </div>
        </div>
        <svg viewBox="0 0 1024 1024" className="pressets-text-icon">
          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
        </svg>
      </div>
      <div className="pressets-text-container10">
        <div className="pressets-text-container11">
          <div className="pressets-text-container12">
            <span className="pressets-text-text08">Aa</span>
          </div>
          <div className="pressets-text-container13">
            <div className="pressets-text-container14">
              <span>Pharagraph</span>
            </div>
            <span className="pressets-text-text10">14px Arial 500</span>
          </div>
        </div>
        <svg viewBox="0 0 1024 1024" className="pressets-text-icon02">
          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
        </svg>
      </div>
      <div className="pressets-text-container15">
        <svg viewBox="0 0 1024 1024" className="pressets-text-icon04">
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div className="pressets-text-container16">
        <h3>Add Text Style</h3>
        <input
          type="text"
          placeholder="Name"
          className="pressets-text-textinput"
        />
        <div className="pressets-text-container17">
          <span className="pressets-text-text12">this is a example text</span>
        </div>
        <span>Arial</span>
        <div className="pressets-text-container18">
          <span>500 - Medium</span>
          <div className="pressets-text-container19">
            <span>14</span>
            <span className="pressets-text-text16">px</span>
          </div>
        </div>
        <div className="pressets-text-container20">
          <div className="pressets-text-container21">
            <svg viewBox="0 0 1024 1024" className="pressets-text-icon06">
              <path d="M426 554v-84h512v84h-512zM426 810v-84h512v84h-512zM426 214h512v84h-512v-84zM256 298v428h106l-148 148-150-148h106v-428h-106l150-148 148 148h-106z"></path>
            </svg>
            <span className="pressets-text-text17">auto</span>
          </div>
          <div className="pressets-text-container22">
            <div className="pressets-text-container23">
              <span>AV</span>
              <svg viewBox="0 0 1024 1024" className="pressets-text-icon08">
                <path d="M1024 512c0 9.714-4 18.857-10.857 25.714l-146.286 146.286c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-73.143h-585.143v73.143c0 20-16.571 36.571-36.571 36.571-9.714 0-18.857-4-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714s4-18.857 10.857-25.714l146.286-146.286c6.857-6.857 16-10.857 25.714-10.857 20 0 36.571 16.571 36.571 36.571v73.143h585.143v-73.143c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l146.286 146.286c6.857 6.857 10.857 16 10.857 25.714z"></path>
              </svg>
            </div>
            <span className="pressets-text-text19">auto</span>
          </div>
        </div>
        <div className="pressets-text-container24">
          <div className="pressets-text-container25">
            <span>AA</span>
            <span>aa</span>
            <span>Aa</span>
          </div>
          <div className="pressets-text-container26">
            <span className="pressets-text-text23">U</span>
            <span className="pressets-text-text24">S</span>
          </div>
        </div>
        <button className="pressets-text-button">Add</button>
      </div>
    </div>
  )
}

export default PressetsText
