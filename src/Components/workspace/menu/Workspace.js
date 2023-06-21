import './workspace.css'

const Workspace = (props) => {

  const { id, letter, workName, isOpen, isSelected, handleMenuClick, handleSelect } = props
  return (
    <div 
      className="workspace-workspace" 
      onClick={() => handleSelect(id)}
    >
      <div className="workspace-container">
        <div 
          className="workspace-container1"
          style={isSelected ? {  backgroundColor: '#0047ff' } : { backgroundColor: '' } }
        >
        </div>
        <div className="workspace-container2">
          <span className="workspace-wletter">{letter}</span>
        </div>
        <span className="workspace-user-work">{workName}</span>
      </div>
      <div className="workspace-container3">
        <svg viewBox="0 0 1024 1024" className="workspace-icon">
          <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
        </svg>
      </div>
      {
        isOpen && 
        <div
          className="menu-workspace-menu-workspace-settings" 
          onClick={handleMenuClick}
        >
          <span
            className="menu-workspace-settings"
            id='2'
          >
            Workspace settings
          </span>
          <span className="menu-workspace-collaborators">Manage Collaborators</span>
          <span className="menu-workspace-billing">Billings details</span>
          <div className="menu-workspace-hr"></div>
          <span className="menu-workspace-rename">rename</span>
        </div>
      }
    </div>
  )
}

export default Workspace
