import Option from '../Options/Option.js'
import './Collaborator.css'

export default function SingleCollaborator({ user, id, avatar }) {
  return (
    <>
      <div
        key={id}
        className="jsx-1569363936 jsx-943001974 collaborator-wrapper"
      >
        <div className="jsx-1569363936 jsx-943001974 content-collaborators">
          <div className="jsx-1569363936 jsx-943001974 avatar">{avatar}</div>
          <div className="jsx-1569363936 jsx-943001974 item_content">
            <p className="jsx-1569363936 jsx-943001974 title-collaborator">
              {user.username}
            </p>
            <div className="jsx-1569363936 jsx-943001974 small-details">
              <small className="jsx-1569363936 jsx-943001974 description">
                {user.email}
              </small>
            </div>
          </div>
        </div>
      </div>
      <span class="jsx-1569363936 jsx-943001974 description permission-label workspace-label">
        workspace
      </span>
      <div className="jsx-1569363936 jsx-943001974">
        <div className="jsx-3017135966 pt-select">
          <div tabindex="-1" className="jsx-3017135966 selection-wrapper">
            <div className="jsx-3017135966 selection-value-wrapper">
              <span className="jsx-3017135966 selection-value">Viewer</span>{' '}
              <div className="jsx-2691281944 pt-icon drop-cue ">
                <svg viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.426 3.643L7.166.85A.5.5 0 006.809 0H1.223a.5.5 0 00-.35.857L3.72 3.65a.5.5 0 00.707-.007z"></path>
                </svg>
              </div>
              <Option />
              <span className="jsx-1569363936 jsx-943001974">
                <div className="jsx-1491175148 ctx-menu-icon-wrapper">
                  <div className="jsx-2868903485 pt-icon more ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M10 5a2 2 0 114 0 2 2 0 01-4 0zm0 7a2 2 0 114 0 2 2 0 01-4 0zm0 7a2 2 0 114 0 2 2 0 01-4 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
