import Cards from '../mockup/Cards/Cards.js'
import './ModalMockup.css'

// eslint-disable-next-line react/prop-types
export default function ModalMockup({ changeShow }) {
  return (
    <div className="modal">
      <div
        className="modal-content"
        // style={{ padding: "0px"}}
      >
        <div className="content-wrapper-modal">
          <div className="main-modal">
            <div
              className="pt-stack-modal"
              // style={{ alignItems: "flex-start" }}
            >
              <div className="header-modal">
                <div
                  className="pt-stack-modal"
                  // style={{ alignItems: "flex-start" }}
                >
                  <button
                    onClick={changeShow}
                    className="pt-btn-modal outline-modal accent-modal"
                  >
                    <div
                      className="pt-inline-modal"
                      // style={{ alignItems: "center" }}
                    >
                      <div className=" pt-icon-modal arrow-left ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 7 5"
                        >
                          <path d="M2.62 0L0 2.5 2.62 5l.548-.523-1.682-1.604H7v-.746H1.486L3.168.523z"></path>
                        </svg>
                      </div>
                      <span className="back-text-modal">Go Back</span>
                    </div>
                  </button>
                  <div className="section-title-wrapper-modal">
                    <div className="title-wrapper-modal">
                      <span className="title-wrapper_span">Create Project</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.figma.com/community/plugin/992726161890204477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="figma-card"
                >
                  <div className="icon-wrapper-figma-card">
                    <div className="pt-icon-social-figma social/figma ">
                      <svg
                        width="14"
                        height="20"
                        viewBox="0 0 14 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#figma_svg__clip0_854_10898)">
                          <path
                            d="M3.667 20A3.335 3.335 0 007 16.667v-3.334H3.667a3.335 3.335 0 000 6.667z"
                            fill="#0ACF83"
                          ></path>
                          <path
                            d="M.333 10a3.335 3.335 0 013.334-3.333H7v6.666H3.667A3.335 3.335 0 01.333 10z"
                            fill="#A259FF"
                          ></path>
                          <path
                            d="M.333 3.333A3.335 3.335 0 013.667 0H7v6.667H3.667A3.335 3.335 0 01.333 3.333z"
                            fill="#F24E1E"
                          ></path>
                          <path
                            d="M7 0h3.333a3.335 3.335 0 010 6.667H7V0z"
                            fill="#FF7262"
                          ></path>
                          <path
                            d="M13.667 10A3.335 3.335 0 017 10a3.335 3.335 0 016.667 0z"
                            fill="#1ABCFE"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="figma_svg__clip0_854_10898">
                            <path
                              fill="#fff"
                              transform="translate(.332)"
                              d="M0 0h13.336v20H0z"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="card-text-modal">
                    <div className="jsx-2471899745 card-text-modal-title">
                      <span className="card-text-span">
                        Import from Figma
                      </span>
                      <div className=" pt-icon-figma actions/follow-link ">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M11.428.395c0-.214.163-.388.365-.388L15.998 0 16 4.533c0 .214-.164.388-.366.388-.202 0-.366-.173-.366-.387l-.001-3.145-7.813 8.14a.351.351 0 01-.517-.005.404.404 0 01.004-.548L14.761.83a.37.37 0 01.063-.053l-3.03.005c-.203 0-.366-.173-.367-.387zm3.839.381v.046a.368.368 0 00-.057-.046h.057z"
                          ></path>
                          <path d="M10.433 3.016c.39 0 .758.1 1.078.275l-.552.575a1.493 1.493 0 00-.526-.095H2.255c-.83 0-1.503.677-1.503 1.511v8.452c0 .834.673 1.51 1.503 1.51h8.178c.83 0 1.504-.676 1.504-1.51v-7.88l.742-.775c.006.067.01.135.01.203v8.452A2.26 2.26 0 0110.432 16H2.255A2.26 2.26 0 010 13.734V5.282a2.26 2.26 0 012.255-2.266h8.178z"></path>
                        </svg>
                      </div>
                    </div>
                    <span className="subtitle-modal">
                      Get our Figma Plugin to import your designs
                    </span>
                  </div>
                </a>
              </div>
              <div className="template-cards-container-modal">
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
