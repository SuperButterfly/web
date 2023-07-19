import { useNavigate } from 'react-router'
import './publish.css'

const props = {
  url: 'http://oblong-blong-bear-sir3v8.aythen.com'
}

const Publish = ({ isPublishOn, closePublish }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/workspace/templates/WorkspaceSettings?tab=domains_and_hosting')
  }
  if (isPublishOn) {
    return (
      <div className="publish-container">
        <span className="publish-text">Publish project</span>
        <div className="publish-container01">
          <button className="publish-button">
            <svg viewBox="0 0 1024 1024" className="publish-icon">
              <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
            </svg>
            <span className="publish-text01">Web</span>
          </button>
          <button className="publish-button1">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256.000000 256.000000"
              preserveAspectRatio="xMidYMid meet"
              fill="#510098"
            >
              <g
                transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
                fill="#510098"
                stroke="none"
              >
                <path
                  d="M561 2544 c-123 -33 -247 -128 -303 -230 -15 -27 -36 -83 -47 -124
-20 -72 -21 -98 -21 -700 0 -667 3 -712 51 -860 45 -136 106 -237 208 -344
117 -122 269 -212 436 -258 77 -21 101 -22 568 -26 538 -4 539 -4 660 60 113
61 210 189 237 314 7 34 10 272 8 735 -4 673 -4 685 -26 764 -91 325 -330 564
-657 656 -77 22 -96 23 -570 25 -408 3 -499 1 -544 -12z m1005 -289 c241 -46
438 -239 489 -481 21 -98 22 -1318 1 -1367 -17 -42 -76 -93 -123 -107 -26 -8
-176 -10 -488 -8 l-450 3 -85 31 c-47 16 -111 47 -142 68 -122 80 -224 222
-265 366 -17 60 -18 115 -18 705 0 352 3 652 8 667 11 40 66 98 112 119 37 17
75 19 462 19 332 0 438 -3 499 -15z"
                />
                <path
                  d="M890 1952 c-19 -11 -48 -36 -65 -56 l-30 -38 -3 -364 -3 -364 39 -41
c33 -36 45 -42 90 -47 41 -3 58 0 87 18 66 41 69 57 75 323 l5 239 33 29 c32
29 33 29 157 29 137 0 173 9 214 54 19 20 26 40 29 85 4 58 3 60 -36 103 l-41
43 -258 3 c-237 2 -261 1 -293 -16z"
                />
                <path
                  d="M1575 1506 c-41 -18 -73 -56 -85 -97 -6 -19 -10 -132 -10 -252 l0
-219 -30 -28 c-29 -27 -33 -28 -168 -32 -107 -3 -144 -7 -170 -21 -96 -52 -96
-202 0 -254 28 -15 64 -18 254 -21 247 -4 285 2 341 51 62 55 63 60 63 439 0
322 -1 345 -20 375 -37 61 -114 87 -175 59z"
                />
              </g>
            </svg>
            {/* <svg viewBox="0 0 1024 1024" className="publish-icon2">
              <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264z"></path>
            </svg> */}
            <span className="publish-text02">Scaleway</span>
          </button>
        </div>
        <div className="publish-container02">
          <div className="publish-container03">
            <input type="checkbox" checked className="publish-textinput" />
            <span className="publish-text03">Aythen domain</span>
            <svg viewBox="0 0 1024 1024" className="publish-icon4">
              <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
            </svg>
          </div>
          <div className="publish-container04">
            <div className="publish-container05">
              <svg
                viewBox="0 0 658.2857142857142 1024"
                className="publish-icon6"
              >
                <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
              </svg>
              <span className="publish-text04">{props.url}</span>
            </div>
            <div className="publish-container06">
              <span className="publish-text05">Unpublished</span>
              <div className="publish-container07"></div>
            </div>
          </div>
        </div>
        <div className="publish-container08">
          <div className="publish-container09">
            <input type="checkbox" className="publish-textinput1" />
            <span className="publish-text06">Custom domain</span>
          </div>
          <div className="publish-container10">
            <span className="publish-text07">
              Publish on one click to your own URL
            </span>
            <button className="publish-button2" onClick={handleClick}>
              Configure
            </button>
          </div>
        </div>
        <div className="publish-container11">
          <div className="publish-container12">
            <input type="checkbox" className="publish-textinput2" />
            <span className="publish-text08">Vercel account</span>
          </div>
          <div className="publish-container13">
            <span className="publish-text09">
              Publish straight to your Vercel.com account
            </span>
            <button className="publish-button3">Set up token</button>
          </div>
        </div>
        <button className="publish-button4" onClick={() => closePublish(false)}>
          Publish
        </button>
      </div>
    )
  } else return null
}

export default Publish
