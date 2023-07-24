import './helpmenu.css'

const HelpMenu = ({ isHelpOn }) => {
  return (
    <div
      className="component-container"
      style={isHelpOn ? { display: 'flex' } : { display: 'none' }}
    >
      <svg viewBox="0 0 1024 1024" className="component-icon">
        <path d="M342 214l468 298-468 298v-596z" className=""></path>
      </svg>
      <div className="component-container1">
        <div className="component-container2">
          <span className="">Intro</span>
        </div>
        <div className="component-container3">
          <span className="">Tutorials</span>
        </div>
        <div className="component-container4">
          <span className="">Shortcuts</span>
          <section className="shortcuts-container">
            <header className="shortcuts-container-header">
              <span className="shortcuts-title">Keyboard Shortcuts</span>
            </header>
            <article className="shortcuts-container-body">
              <div className="flex-container-column">
                <div className="flex-container">
                  <span>Mark as Unread</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">Shift</span>
                    <span className="shortcuts-item">U</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Archive Chat</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">Shift</span>
                    <span className="shortcuts-item">E</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Pin Chat</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">Shift</span>
                    <span className="shortcuts-item">P</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Search Chat</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">Shift</span>
                    <span className="shortcuts-item">F</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Next Chat</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">Tab</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>New Group</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">Shift</span>
                    <span className="shortcuts-item"> N</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Increase Speed of Selected Voice Message</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Shift</span>
                    <span className="shortcuts-item">.</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Settings</span>\
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">,</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Gif Panel</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">G</span>
                  </div>
                </div>
              </div>
              <div className="flex-container-column">
                <div className="flex-container">
                  <span>Mute</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">Shift</span>
                    <span className="shortcuts-item">M</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Delete Chat</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">Backspace</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Search</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">/</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Next Chat</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">N</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Previous Chat</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">Shift</span>
                    <span className="shortcuts-item">Tab</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Profile and About</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">P</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Decrease Speed of Selected Voice Message</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Shift</span>
                    <span className="shortcuts-item">,</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Emoji Panel</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">E</span>
                  </div>
                </div>
                <div className="flex-container">
                  <span>Sticker Panel</span>
                  <div className="flex-container">
                    <span className="shortcuts-item">Ctrl</span>
                    <span className="shortcuts-item">Alt</span>
                    <span className="shortcuts-item">S</span>
                  </div>
                </div>
              </div>
            </article>
            {/* <footer className="shortcuts-container-footer">
              <button className="shortcuts-button">OK</button>
            </footer> */}
          </section>
        </div>
        <div className="component-container6">
          <span className="">Github</span>
        </div>
      </div>
    </div>
  )
}

export default HelpMenu
