import './plugins.css'
import Plugin from './Plugin'

const Plugins = () => {
  return (
    <div className="plugins-container">
      <div className="plugins-container1">
        <h3 className="plugins-text">
          find science and technology communities on Discord
        </h3>
        <div className="plugins-container2">
          <input
            type="text"
            name="search"
            className="plugins-textinput input Content"
            value={'Explore science and technology servers'}
          />
          <svg viewBox="0 0 1024 1024" className="plugins-icon">
            <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
          </svg>
        </div>
      </div>
      <h2>Popular communities</h2>
      <div className="plugins-container3">
        <Plugin />
        <Plugin />
        <Plugin />
        <Plugin />
        <Plugin />
        <Plugin />
      </div>
    </div>
  )
}

export default Plugins
