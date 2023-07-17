import './plugin.css'

const Plugin = () => {
  const props = {
    name: 'Plugin Name',
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImage: 'https://play.teleporthq.io/static/svg/default-img.svg',
    iconImage: 'https://play.teleporthq.io/static/svg/default-img.svg',
    members: {
      count: 1,
      online: 1
    }
  }

  return (
    <div className="plugin-card">
      <img alt={props.name} src={props.mainImage} className="plugin-image" />
      <div className="plugin-container01">
        <div className="plugin-container02">
          <div className="plugin-container03">
            <div className="plugin-container04">
              <svg viewBox="0 0 1024 1024" className="plugin-icon">
                <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
              </svg>
            </div>
            <span className="plugin-text">{props.name}</span>
          </div>
          <span className="plugin-text1">{props.description}</span>
        </div>
        <div className="plugin-container05">
          <div className="plugin-container06">
            <div className="plugin-container07"></div>
            <span>{props.members.online} online</span>
          </div>
          <div className="plugin-container08">
            <div className="plugin-container09"></div>
            <span>{props.members.count} member/s</span>
          </div>
        </div>
        <div className="plugin-container10">
          <img
            src={props.iconImage}
            alt={props.name}
            className="plugin-image1"
          />
        </div>
      </div>
    </div>
  )
}

export default Plugin
