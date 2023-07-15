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
        </div>
        <div className="component-container6">
          <span className="">Github</span>
        </div>
      </div>
    </div>
  )
}

export default HelpMenu
