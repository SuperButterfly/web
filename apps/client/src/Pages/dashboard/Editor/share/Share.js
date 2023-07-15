// import { userInfo } from 'os'
import './share.css'

const props = {
  letter1: 'U',
  role1: 'Owner',
  letter2: 'A',
  user1: 'Aythen Teleporthq',
  user2: 'Aythen Company',
  role2: 'Viewer'
}

const Share = ({ isShareOn, closeShare }) => {
  if (isShareOn) {
    return (
      <div className="modal-overlay">
        <div className="share-container">
          <div className="share-container_header">
            <span>{'Share pablo_navbar'}</span>
            <div>
              <button className="share-button-close">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12.75 15V16.5H11.25V15H12.75ZM10.5 10.4318C10.5 9.66263 11.1497 9 12 9C12.8503 9 13.5 9.66263 13.5 10.4318C13.5 10.739 13.3151 11.1031 12.9076 11.5159C12.5126 11.9161 12.0104 12.2593 11.5928 12.5292L11.25 12.7509V14.25H12.75V13.5623C13.1312 13.303 13.5828 12.9671 13.9752 12.5696C14.4818 12.0564 15 11.3296 15 10.4318C15 8.79103 13.6349 7.5 12 7.5C10.3651 7.5 9 8.79103 9 10.4318H10.5Z"
                      fill="#000000"
                    ></path>{' '}
                  </g>
                </svg>
              </button>
              <button className="share-button-close">
                <svg
                  width="14px"
                  height="14px"
                  viewBox="0 0 30 30"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  // xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <title>settings</title>{' '}
                    <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      // sketch:type="MSPage"
                    >
                      {' '}
                      <g
                        id="Icon-Set"
                        // sketch:type="MSLayerGroup"
                        transform="translate(-101.000000, -360.000000)"
                        fill="#000000"
                      >
                        {' '}
                        <path
                          d="M128.52,381.134 L127.528,382.866 C127.254,383.345 126.648,383.508 126.173,383.232 L123.418,381.628 C122.02,383.219 120.129,384.359 117.983,384.799 L117.983,387 C117.983,387.553 117.54,388 116.992,388 L115.008,388 C114.46,388 114.017,387.553 114.017,387 L114.017,384.799 C111.871,384.359 109.98,383.219 108.582,381.628 L105.827,383.232 C105.352,383.508 104.746,383.345 104.472,382.866 L103.48,381.134 C103.206,380.656 103.369,380.044 103.843,379.769 L106.609,378.157 C106.28,377.163 106.083,376.106 106.083,375 C106.083,373.894 106.28,372.838 106.609,371.843 L103.843,370.232 C103.369,369.956 103.206,369.345 103.48,368.866 L104.472,367.134 C104.746,366.656 105.352,366.492 105.827,366.768 L108.582,368.372 C109.98,366.781 111.871,365.641 114.017,365.201 L114.017,363 C114.017,362.447 114.46,362 115.008,362 L116.992,362 C117.54,362 117.983,362.447 117.983,363 L117.983,365.201 C120.129,365.641 122.02,366.781 123.418,368.372 L126.173,366.768 C126.648,366.492 127.254,366.656 127.528,367.134 L128.52,368.866 C128.794,369.345 128.631,369.956 128.157,370.232 L125.391,371.843 C125.72,372.838 125.917,373.894 125.917,375 C125.917,376.106 125.72,377.163 125.391,378.157 L128.157,379.769 C128.631,380.044 128.794,380.656 128.52,381.134 L128.52,381.134 Z M130.008,378.536 L127.685,377.184 C127.815,376.474 127.901,375.749 127.901,375 C127.901,374.252 127.815,373.526 127.685,372.816 L130.008,371.464 C130.957,370.912 131.281,369.688 130.733,368.732 L128.75,365.268 C128.203,364.312 126.989,363.983 126.041,364.536 L123.694,365.901 C122.598,364.961 121.352,364.192 119.967,363.697 L119.967,362 C119.967,360.896 119.079,360 117.983,360 L114.017,360 C112.921,360 112.033,360.896 112.033,362 L112.033,363.697 C110.648,364.192 109.402,364.961 108.306,365.901 L105.959,364.536 C105.011,363.983 103.797,364.312 103.25,365.268 L101.267,368.732 C100.719,369.688 101.044,370.912 101.992,371.464 L104.315,372.816 C104.185,373.526 104.099,374.252 104.099,375 C104.099,375.749 104.185,376.474 104.315,377.184 L101.992,378.536 C101.044,379.088 100.719,380.312 101.267,381.268 L103.25,384.732 C103.797,385.688 105.011,386.017 105.959,385.464 L108.306,384.099 C109.402,385.039 110.648,385.809 112.033,386.303 L112.033,388 C112.033,389.104 112.921,390 114.017,390 L117.983,390 C119.079,390 119.967,389.104 119.967,388 L119.967,386.303 C121.352,385.809 122.598,385.039 123.694,384.099 L126.041,385.464 C126.989,386.017 128.203,385.688 128.75,384.732 L130.733,381.268 C131.281,380.312 130.957,379.088 130.008,378.536 L130.008,378.536 Z M116,378 C114.357,378 113.025,376.657 113.025,375 C113.025,373.344 114.357,372 116,372 C117.643,372 118.975,373.344 118.975,375 C118.975,376.657 117.643,378 116,378 L116,378 Z M116,370 C113.261,370 111.042,372.238 111.042,375 C111.042,377.762 113.261,380 116,380 C118.739,380 120.959,377.762 120.959,375 C120.959,372.238 118.739,370 116,370 L116,370 Z"
                          id="settings"
                          // sketch:type="MSShapeGroup"
                        >
                          {' '}
                        </path>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <form action="" method="get">
            <input
              type="text"
              name=""
              id=""
              placeholder="Add people and groups"
              className="share-input"
            />
          </form>

          <div className="share-container_body">
            <span className="share-container_body_span">
              People width access
            </span>
            <div className="share-people-container">
              <div className="share-people">
                <div className="share-people-body">
                  <div className="share-people-logo">Logo</div>
                  <div className="share-people-info">
                    <h4>Aythen Company (you)</h4>
                    <span>info@aythen.com</span>
                  </div>
                </div>
                <div className="share-people-role">
                  <span>Owner</span>
                </div>
              </div>
              <div className="share-people">
                <div className="share-people-body">
                  <div className="share-people-logo">Logo</div>
                  <div className="share-people-info">
                    <h4>Aythen Company (you)</h4>
                    <span>info@aythen.com</span>
                  </div>
                </div>
                <div className="share-people-role">
                  <span>Owner</span>
                </div>
              </div>
              <div className="share-people">
                <div className="share-people-body">
                  <div className="share-people-logo">Logo</div>
                  <div className="share-people-info">
                    <h4>Aythen Company (you)</h4>
                    <span>info@aythen.com</span>
                  </div>
                </div>
                <div className="share-people-role">
                  <span>Owner</span>
                </div>
              </div>
              <div className="share-people">
                <div className="share-people-body">
                  <div className="share-people-logo">Logo</div>
                  <div className="share-people-info">
                    <h4>Aythen Company (you)</h4>
                    <span>info@aythen.com</span>
                  </div>
                </div>
                <div className="share-people-role">
                  <span>Owner</span>
                </div>
              </div>
              <div className="share-people">
                <div className="share-people-body">
                  <div className="share-people-logo">Logo</div>
                  <div className="share-people-info">
                    <h4>Aythen Company (you)</h4>
                    <span>info@aythen.com</span>
                  </div>
                </div>
                <div className="share-people-role">
                  <span>Owner</span>
                </div>
              </div>
              <div className="share-people">
                <div className="share-people-body">
                  <div className="share-people-logo">Logo</div>
                  <div className="share-people-info">
                    <h4>Aythen Company (you)</h4>
                    <span>info@aythen.com</span>
                  </div>
                </div>
                <div className="share-people-role">
                  <span>Owner</span>
                </div>
              </div>
            </div>
          </div>
          <div className="share-container_footer">
            <h3>General access</h3>
            <div className="share-container_footer_body">
              <div className="share-people">
                <div className="share-people-body">
                  <div className="share-people-logo">Logo</div>
                  <div className="share-people-info">
                    <h3>Anyone with thelink</h3>
                    <span>Anyone on the internet with the link can edit</span>
                  </div>
                </div>
                <div className="share-people-role">
                  <span>Editor </span>
                </div>
              </div>
              <div className="footer_body_end">
                <button className="share-button-link">
                  <svg
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                        stroke="#0074f0"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                        stroke="#0074f0"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      ></path>
                    </g>
                  </svg>
                  <span>Copy link</span>
                </button>
                <button
                  className="share-button-done"
                  onClick={() => closeShare(false)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else return null
}

export default Share

/* 
      <div className="modal-overlay">
        <div className="share-container">
          <div className="share-container01">
            <div className="share-container02">
              <span>Collaborators</span>
              <button
                className="share-button"
                onClick={() => closeShare(false)}
              >
                X
              </button>
            </div>
            <div className="share-container03">
              <div className="share-container04">
                <input type="email" id="email" className="share-textinput" />
                <button className="share-button1">
                  <span>Edit</span>
                  <svg viewBox="0 0 1024 1024" className="share-icon">
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </button>
                <div className="share-container05">
                  <div className="share-container06">
                    <svg viewBox="0 0 1024 1024" className="share-icon02">
                      <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
                    </svg>
                    <span>Editor</span>
                  </div>
                  <div className="share-container07">
                    <svg viewBox="0 0 1024 1024" className="share-icon04">
                      <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
                    </svg>
                    <span>Viewer</span>
                  </div>
                </div>
              </div>
              <button className="share-button2">send invite</button>
            </div>
            <div className="share-container08">
              <div className="share-container09">
                <span>People width access</span>
              </div>
              <div className="share-container10">
                <div className="share-container11">
                  <div className="share-container12">
                    <span className="share-text05">{props.letter1}</span>
                  </div>
                  <span>{props.user1}</span>
                </div>
                <span>{props.role1}</span>
              </div>
              <div className="share-container13">
                <div className="share-container14">
                  <div className="share-container15">
                    <span className="share-text08">{props.letter2}</span>
                  </div>
                  <span>{props.user2}</span>
                </div>
                <span>{props.role2}</span>
              </div>
            </div>
          </div>

          <div className="share-container16">
            <span>Public access</span>
            <div className="share-container17">
              <svg
                width="47"
                height="46"
                viewBox="0 0 17 16"
                fill="blue"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.333 8a7.167 7.167 0 1114.334 0A7.167 7.167 0 011.333 8zM8.5 1.833a6.167 6.167 0 100 12.334 6.167 6.167 0 000-12.334z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.333 8a.5.5 0 01.5-.5h13.334a.5.5 0 010 1H1.833a.5.5 0 01-.5-.5z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5.833a.5.5 0 01.37.163 10.7 10.7 0 012.796 7.014 10.7 10.7 0 01-2.797 6.994.5.5 0 01-.738 0A10.7 10.7 0 015.333 7.99 10.7 10.7 0 018.131.996.5.5 0 018.5.833zM6.333 8A9.7 9.7 0 008.5 13.9 9.7 9.7 0 0010.666 8 9.7 9.7 0 008.5 2.1 9.7 9.7 0 006.333 8z"
                ></path>
              </svg>
              <div className="share-container19">
                <button className="share-button3 button">
                  <span className="share-text12">Restricted</span>
                  <svg viewBox="0 0 1024 1024" className="share-icon12">
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </button>
                <span className="share-text13">
                  Only collaborators can accsses
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>





*/
