import './tele-progress.css'
import { Player } from '@lottiefiles/react-lottie-player'

const TeleProgress = ({ handleModal2, progress }) => {
  return (
    <div className="tele-progress-container">
      <div className="tele-progress-container01">
        <div className="tele-progress-container02">
          {progress.getTeleProject ? (
            <div className="tele-progress-container03">
              <svg viewBox="0 0 1024 1024" className="tele-progress-icon">
                <path
                  d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                  className=""
                ></path>
              </svg>
            </div>
          ) : (
            <Player
              src="https://web.aythen.com/workspace/features/spinner.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="tele-progress-lottie-node"
            ></Player>
          )}
        </div>
        <span className="">Getting project</span>
      </div>
      <div className="tele-progress-container04">
        <div className="tele-progress-container05">
          {progress.formatData ? (
            <div className="tele-progress-container06">
              <svg viewBox="0 0 1024 1024" className="tele-progress-icon2">
                <path
                  d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                  className=""
                ></path>
              </svg>
            </div>
          ) : (
            <Player
              src="https://web.aythen.com/workspace/features/spinner.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="tele-progress-lottie-node1"
            ></Player>
          )}
        </div>
        <span className="">Processing data</span>
      </div>
      <div className="tele-progress-container07">
        <div className="tele-progress-container08">
          {progress.makeProject ? (
            <div className="tele-progress-container09">
              <svg viewBox="0 0 1024 1024" className="tele-progress-icon4">
                <path
                  d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                  className=""
                ></path>
              </svg>
            </div>
          ) : (
            <Player
              src="https://web.aythen.com/workspace/features/spinner.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="tele-progress-lottie-node2"
            ></Player>
          )}
        </div>
        <span className="">Saving</span>
      </div>
      <button
        type="button"
        className="tele-progress-button"
        onClick={() => handleModal2()}
      >
        Cancel
      </button>
    </div>
  )
}

export default TeleProgress
