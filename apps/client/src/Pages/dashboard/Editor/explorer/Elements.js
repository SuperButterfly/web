/* global localStorage */
import './elements.css'
import { useState } from 'react'

const Elements = () => {
  const [isDrop, setIsDrop] = useState([true, true, true, true, true, true])

  const handleDropPanel = (ev) => {
    ev.preventDefault()
    const { id } = ev.target
    console.log(id)
    const aux = isDrop
    aux[id] = !isDrop[parseInt(id)]
    setIsDrop([...aux])
  }

  const handleDrag = (tag) => {
    localStorage.setItem('text', tag)
  }

  return (
    <div className="elements-container">
      <div
        className="elements-elements-header"
        onClick={handleDropPanel}
        id="0"
      >
        <span className="elements-title" id="0">
          Layouts
        </span>
        <svg
          viewBox="0 0 1024 1024"
          className="elements-arrow"
          id="0"
          style={isDrop[0] ? { rotate: '0deg' } : { rotate: '90deg' }}
        >
          <path
            id="0"
            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
          ></path>
        </svg>
      </div>
      <div
        className="elements-container01"
        style={isDrop[0] ? { display: 'flex' } : { display: 'none' }}
      >
        <div
          className="elements-container02"
          draggable="true"
          id="row"
          onDrag={() => handleDrag('Row')}
        >
          <div className="elements-container-svg">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 1.5A1.5 1.5 0 001.5 3v27A1.5 1.5 0 003 31.5h27a1.5 1.5 0 001.5-1.5V3A1.5 1.5 0 0030 1.5H3zM.5 3A2.5 2.5 0 013 .5h27A2.5 2.5 0 0132.5 3v27a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 30V3z"
              ></path>
              <path
                d="M13 6H7a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1zM26 6h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1z"
                opacity="0.5"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Row (R)</span>
        </div>

        <div
          className="elements-container06"
          draggable="true"
          id="col"
          onDrag={() => handleDrag('Col')}
        >
          <div className="elements-container-svg">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 1.5A1.5 1.5 0 001.5 3v27A1.5 1.5 0 003 31.5h27a1.5 1.5 0 001.5-1.5V3A1.5 1.5 0 0030 1.5H3zM.5 3A2.5 2.5 0 013 .5h27A2.5 2.5 0 0132.5 3v27a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 30V3z"
              ></path>
              <path
                d="M13 6H7a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1zM13 18H7a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1z"
                opacity="0.5"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Column (C)</span>
        </div>

        <div
          className="elements-container10"
          draggable="true"
          id="slot"
          onDrag={() => handleDrag('Slot')}
        >
          <div className="elements-container-svg">
            <div className="elements-container11">
              <span className="elements-text02">
                {'<'} slot {'>'}
              </span>
            </div>
          </div>
          <span className="elements-texts">Slot (S)</span>
        </div>
      </div>
      <div
        className="elements-typography-header"
        onClick={handleDropPanel}
        id="1"
      >
        <span className="elements-title1" id="1">
          Tipography
        </span>
        <svg
          viewBox="0 0 1024 1024"
          className="elements-arrow1"
          id="1"
          style={isDrop[1] ? { rotate: '0deg' } : { rotate: '90deg' }}
        >
          <path
            id="1"
            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
          ></path>
        </svg>
      </div>
      <div
        className="elements-container12"
        style={isDrop[1] ? { display: 'flex' } : { display: 'none' }}
      >
        <div
          className="elements-container13"
          draggable="true"
          onDrag={() => handleDrag('Text')}
        >
          <div className="elements-container-svg">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.5 3V0h16v3h-1c0-.989-.815-1-.994-1h-4.012c-.178 0-.993.01-.994.997V15c0 1 .833 1 1 1h2v2h-8v-2h2c.167 0 1 0 1-1V3c0-.99-.817-1-.995-1H2.567c-.177 0-.995.01-.995 1H.5z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Text (T)</span>
        </div>
        <div
          className="elements-container15"
          draggable="true"
          onDrag={() => handleDrag('Heading')}
        >
          <div className="elements-container-svg">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 1V0h-4v1c.2 0 1 0 1 1v6H3V2c0-1 .8-1 1-1V0H0v1c.2 0 1 0 1 1v14c0 1-.8 1-1 1v1h4v-1c-.2 0-1 0-1-1v-6h10v6c0 1-.8 1-1 1v1h4v-1c-.2 0-1 0-1-1V2c0-.2 0-1 1-1z"></path>
            </svg>
          </div>
          <span className="elements-texts">Heading (H)</span>
        </div>
        <div
          className="elements-container17"
          draggable="true"
          onDrag={() => handleDrag('Link')}
        >
          <div className="elements-container-svg">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#link_svg__clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.047 5.5l3.207-3.208a1 1 0 011.414 0l2.04 2.039a1 1 0 010 1.414L12.5 8.952l1.414 1.415 3.207-3.208a3 3 0 000-4.243L15.083.878a3 3 0 00-4.243 0L7.633 4.085 9.047 5.5zM6.011 8.535L4.597 7.122.879 10.84a3 3 0 000 4.243l2.038 2.038a3 3 0 004.243 0l3.718-3.718-1.414-1.414-3.718 3.718a1 1 0 01-1.415 0l-2.038-2.039a1 1 0 010-1.414L6.01 8.536z"
                ></path>
              </g>
              <defs>
                <clipPath id="link_svg__clip0">
                  <path d="M0 0h18v18H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <span className="elements-texts">Link (L)</span>
        </div>
      </div>
      <div
        className="elements-elements-header1"
        onClick={handleDropPanel}
        id="2"
      >
        <span className="elements-title2" id="2">
          Media
        </span>
        <svg
          viewBox="0 0 1024 1024"
          className="elements-arrow2"
          id="2"
          style={isDrop[2] ? { rotate: '0deg' } : { rotate: '90deg' }}
        >
          <path
            id="2"
            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
          ></path>
        </svg>
      </div>
      <div
        className="elements-container19"
        style={isDrop[2] ? { display: 'flex' } : { display: 'none' }}
      >
        <div
          className="elements-container20"
          draggable="true"
          onDrag={() => handleDrag('Image')}
        >
          <div className="elements-container-svg">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.554 14.321c-.152.148-.38.314-.551.499-1.122 1.2-2.206 2.419-3.329 3.6-.38.388-.304.684.058 1.016.551.517 1.065 1.053 1.616 1.57.266.258.476.554.152.868-.323.314-.627.074-.875-.166-1.426-1.385-2.871-2.733-4.24-4.155-.495-.499-.761-.407-1.237 0-2.301 2.03-4.64 4.025-6.96 6.038-.324.277-.666.646-1.046.203s.095-.739.38-.979c2.53-2.197 5.059-4.376 7.588-6.574.514-.461.951-.443 1.427.038.418.443.912.83 1.312 1.292.513.572.875.443 1.331-.074 1.217-1.366 2.472-2.714 3.709-4.08.418-.462.913-.536 1.369-.13a449.033 449.033 0 015.401 4.856c.266.24.495.536.21.868-.381.407-.685.074-.952-.184a906.068 906.068 0 00-4.564-4.081c-.247-.185-.418-.425-.799-.425zM10.296 15.17c-1.465 0-2.663-1.163-2.663-2.585S8.83 10 10.296 10c1.464 0 2.662 1.163 2.662 2.585 0 1.44-1.18 2.585-2.662 2.585zm0-4.228c-.951 0-1.712.738-1.712 1.662 0 .923.76 1.662 1.712 1.662.95 0 1.711-.739 1.711-1.662 0-.924-.76-1.662-1.711-1.662z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.5 3A2.5 2.5 0 013 .5h27A2.5 2.5 0 0132.5 3v27a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 30V3zM3 1.5A1.5 1.5 0 001.5 3v27A1.5 1.5 0 003 31.5h27a1.5 1.5 0 001.5-1.5V3A1.5 1.5 0 0030 1.5H3z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Image (I)</span>
        </div>
        <div
          className="elements-container21"
          draggable="true"
          onDrag={() => handleDrag('Video')}
        >
          <div className="elements-container-svg">
            <svg
              width="32"
              height="21"
              viewBox="0 0 32 21"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.094 7.659c0-.392.452-.631.8-.423l4.767 2.843a.487.487 0 010 .847l-4.767 2.838c-.349.208-.8-.031-.8-.423V7.66z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.5 1.432C.5.64 1.15 0 1.953 0h28.094c.802 0 1.453.641 1.453 1.432v18.136c0 .791-.65 1.432-1.453 1.432H1.953A1.443 1.443 0 01.5 19.568V1.432zM1.953.955a.48.48 0 00-.484.477v18.136a.48.48 0 00.484.477h28.094a.48.48 0 00.484-.477V1.432a.48.48 0 00-.484-.477H1.953z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Video (V)</span>
        </div>
        <div
          className="elements-container22"
          draggable="true"
          onDrag={() => handleDrag('Iframe')}
        >
          <div className="elements-container-svg">
            <svg
              width="33"
              height="23"
              viewBox="0 0 33 23"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 5.5a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5H2zM.5 6A1.5 1.5 0 012 4.5h29A1.5 1.5 0 0132.5 6v15a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 21V6z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 1.5a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2zM.5 2A1.5 1.5 0 012 .5h29A1.5 1.5 0 0132.5 2v19a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 21V2z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.336 10l-1.333-1.475L25.67 10H25l1.668-1.846a.442.442 0 01.67 0L29.006 10h-.67z"
              ></path>
              <path d="M28.336 10l-.074.067.03.033h.044V10zm-1.333-1.475l.074-.067-.074-.082-.074.082.074.067zM25.67 10v.1h.045l.03-.033L25.67 10zM25 10l-.074-.067-.151.167H25V10zm1.668-1.846l-.074-.067.074.067zm.67 0l-.074.067.074-.067zM29.006 10v.1h.225l-.15-.167-.075.067zm-.596-.067l-1.333-1.475-.148.134 1.333 1.475.148-.134zm-1.481-1.475l-1.333 1.475.148.134 1.333-1.475-.148-.134zM25 10.1h.67v-.2H25v.2zm1.594-2.013l-1.668 1.846.148.134 1.668-1.846-.148-.134zm.818 0a.542.542 0 00-.818 0l.148.134a.342.342 0 01.522 0l.148-.134zm1.668 1.846l-1.668-1.846-.148.134 1.668 1.846.148-.134zm-.744.167h.67v-.2h-.67v.2z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.67 17l1.333 1.475L28.336 17h.67l-1.668 1.846a.442.442 0 01-.67 0L25 17h.67z"
              ></path>
              <path d="M25.67 17l.075-.067-.03-.033h-.044v.1zm1.333 1.475l-.074.067.074.082.075-.082-.075-.067zM28.336 17v-.1h-.044l-.03.033.074.067zm.67 0l.075.067.15-.167h-.225v.1zm-1.668 1.846l.075.067-.075-.067zm-.67 0l.074-.067-.074.067zM25 17v-.1h-.225l.151.167L25 17zm.596.067l1.333 1.475.149-.134-1.333-1.475-.149.134zm1.482 1.475l1.332-1.475-.148-.134-1.333 1.475.149.134zm1.928-1.642h-.67v.2h.67v-.2zm-1.593 2.013l1.668-1.846-.149-.134-1.668 1.846.149.134zm-.82 0a.542.542 0 00.82 0l-.149-.134a.342.342 0 01-.522 0l-.148.134zm-1.667-1.846l1.668 1.846.148-.134-1.668-1.846-.148.134zm.745-.167H25v.2h.67v-.2z"></path>
            </svg>
          </div>
          <span className="elements-texts">Iframe</span>
        </div>
        {/* <div className="elements-container25" draggable="true" onDrag={() => handleDrag("Embebed")}>
          <div className="elements-container-svg">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="#BFBFBF" xmlns="http://www.w3.org/2000/svg"><path d="M5.689 16.984v-.795l6.403-3.261V14.2L7.18 16.567l.04-.08v.2l-.04-.08 4.912 2.366v1.273L5.69 16.984zM18.179 9.905l-3.281 12.19h-1.074l3.281-12.19h1.074zM26.311 16.984l-6.403 3.262v-1.273l4.912-2.366-.04.08v-.2l.04.08-4.912-2.367v-1.272l6.403 3.26v.796z"></path></svg>
          </div>
          <span className="elements-texts">Code Embebed</span>
        </div> */}
        <div
          className="elements-container27"
          draggable="true"
          onDrag={() => handleDrag('Lottie')}
        >
          <div className="elements-container-svg">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1.5h12a8.5 8.5 0 018.5 8.5v12a8.5 8.5 0 01-8.5 8.5H10A8.5 8.5 0 011.5 22V10A8.5 8.5 0 0110 1.5zM0 10C0 4.477 4.477 0 10 0h12c5.523 0 10 4.477 10 10v12c0 5.523-4.477 10-10 10H10C4.477 32 0 27.523 0 22V10zm15.352 4.712c1.241-2.325 2.783-5.212 6.954-5.212a1.227 1.227 0 01.843.34 1.16 1.16 0 01.351.824 1.135 1.135 0 01-.351.824 1.2 1.2 0 01-.848.34c-2.533 0-3.515 1.499-4.832 3.966l-.812 1.486-.004.008C15.412 19.613 13.87 22.5 9.699 22.5a1.225 1.225 0 01-.848-.34 1.162 1.162 0 01-.351-.824 1.136 1.136 0 01.351-.824 1.2 1.2 0 01.848-.34c2.533 0 3.515-1.499 4.832-3.966l.817-1.486.004-.008z"
                fill="#BFBFBF"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Lottie</span>
        </div>
      </div>
      <div
        className="elements-elements-header2"
        onClick={handleDropPanel}
        id="3"
      >
        <span className="elements-title3" id="3">
          List
        </span>
        <svg
          viewBox="0 0 1024 1024"
          className="elements-arrow3"
          id="3"
          style={isDrop[3] ? { rotate: '0deg' } : { rotate: '90deg' }}
        >
          <path
            id="3"
            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
          ></path>
        </svg>
      </div>
      <div
        className="elements-container29"
        style={isDrop[3] ? { display: 'grid' } : { display: 'none' }}
      >
        <div
          className="elements-container30"
          draggable="true"
          onDrag={() => handleDrag('List')}
        >
          <div className="elements-container-svg">
            <svg
              width="33"
              height="33"
              viewBox="0 0 14 14"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.429 3.467H4.57c-.094 0-.171.09-.171.2v.666c0 .11.077.2.171.2h6.858c.094 0 .171-.09.171-.2v-.666c0-.11-.077-.2-.171-.2zM4.57 3C4.256 3 4 3.298 4 3.667v.666c0 .369.256.667.571.667h6.858c.315 0 .571-.298.571-.667v-.666c0-.369-.256-.667-.571-.667H4.57z"
              ></path>
              <circle
                cx="2.5"
                cy="3.5"
                r="0.5"
                transform="rotate(-180 2.5 3.5)"
              ></circle>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.429 6.467H4.57c-.094 0-.171.09-.171.2v.666c0 .11.077.2.171.2h6.858c.094 0 .171-.09.171-.2v-.666c0-.11-.077-.2-.171-.2zM4.57 6C4.256 6 4 6.298 4 6.667v.666c0 .369.256.667.571.667h6.858c.315 0 .571-.298.571-.667v-.666c0-.369-.256-.667-.571-.667H4.57z"
              ></path>
              <circle
                cx="2.5"
                cy="6.5"
                r="0.5"
                transform="rotate(-180 2.5 6.5)"
              ></circle>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.429 9.467H4.57c-.094 0-.171.09-.171.2v.666c0 .11.077.2.171.2h6.858c.094 0 .171-.09.171-.2v-.666c0-.11-.077-.2-.171-.2zM4.57 9C4.256 9 4 9.298 4 9.667v.666c0 .368.256.667.571.667h6.858c.315 0 .571-.299.571-.667v-.666c0-.369-.256-.667-.571-.667H4.57z"
              ></path>
              <circle cx="2.5" cy="9.5" r="0.5"></circle>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 1.7H1a.3.3 0 00-.3.3v10a.3.3 0 00.3.3h12a.3.3 0 00.3-.3V2a.3.3 0 00-.3-.3zM1 1a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1H1z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">List</span>
        </div>
        <div
          className="elements-container32"
          draggable="true"
          onDrag={() => handleDrag('LItem')}
        >
          <div className="elements-container-svg">
            <svg
              width="33"
              height="33"
              viewBox="0 0 14 14"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1" cy="7" r="1"></circle>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 5.75H4a.25.25 0 00-.25.25v2c0 .138.112.25.25.25h8a.25.25 0 00.25-.25V6a.25.25 0 00-.25-.25zM4 5a1 1 0 00-1 1v2a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H4z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">List-Item</span>
        </div>
      </div>
      <div
        className="elements-elements-header3"
        onClick={handleDropPanel}
        id="4"
      >
        <span className="elements-title4" id="4">
          Forms
        </span>
        <svg
          viewBox="0 0 1024 1024"
          className="elements-arrow4"
          id="4"
          style={isDrop[4] ? { rotate: '0deg' } : { rotate: '90deg' }}
        >
          <path
            id="4"
            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
          ></path>
        </svg>
      </div>
      <div
        className="elements-container36"
        style={isDrop[4] ? { display: 'flex' } : { display: 'none' }}
      >
        <div
          className="elements-container37"
          draggable="true"
          onDrag={() => handleDrag('Form')}
        >
          <div className="elements-container-svg">
            <svg
              width="33"
              height="18"
              viewBox="0 0 33 18"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 1.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5h-29zM.75 2A1.5 1.5 0 012.25.5h29a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 01.75 4V2zM2.25 9.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h29a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-29zm-1.5.5a1.5 1.5 0 011.5-1.5h29a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 01.75 12v-2z"
              ></path>
              <path d="M32.25 16h-9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z"></path>
            </svg>
          </div>
          <span className="elements-texts">Form</span>
        </div>
        <div
          className="elements-container42"
          draggable="true"
          onDrag={() => handleDrag('Button')}
        >
          <div className="elements-container-svg">
            <svg
              width="33"
              height="14"
              viewBox="0 0 33 14"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 .5A1.5 1.5 0 00.5 2v10A1.5 1.5 0 002 13.5h29a1.5 1.5 0 001.5-1.5V2A1.5 1.5 0 0031 .5H2zM1.5 2a.5.5 0 01.5-.5h29a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V2zm18.524 3.927c.672-1.219 2.416-1.24 3.117-.038l.748 1.282a.859.859 0 001.49-.012l1.206-2.147.813.457-1.206 2.147c-.678 1.207-2.411 1.221-3.109.025l-.748-1.282a.859.859 0 00-1.494.018l-.731 1.327a1.791 1.791 0 01-3.066.12l-.95-1.445a.859.859 0 00-1.435 0l-1 1.522a1.791 1.791 0 01-3.032-.06l-.851-1.413a.859.859 0 00-1.478.01L6.806 9 6 8.53 7.493 5.97a1.791 1.791 0 013.082-.022l.851 1.413a.859.859 0 001.454.029l1-1.522a1.791 1.791 0 012.994 0l.949 1.444a.859.859 0 001.47-.057l.731-1.327z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 1.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2zM.5 2A1.5 1.5 0 012 .5h29A1.5 1.5 0 0132.5 2v10a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 12V2z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Button (B)</span>
        </div>
        <div
          className="elements-container45"
          draggable="true"
          onDrag={() => handleDrag('Label')}
        >
          <div className="elements-container-svg">
            <svg
              width="32"
              height="14"
              viewBox="0 0 32 14"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.975 1.093a.496.496 0 00-.492.5v10c0 .276.22.5.492.5h22.724a.488.488 0 00.333-.133l5.326-5a.506.506 0 000-.735l-5.326-5a.487.487 0 00-.333-.132H1.975zm-1.475.5c0-.829.66-1.5 1.475-1.5h22.724c.37 0 .728.142 1 .398l5.326 5c.633.594.633 1.61 0 2.204l-5.326 5c-.272.256-.63.398-1 .398H1.975a1.488 1.488 0 01-1.475-1.5v-10z"
              ></path>
              <path d="M26.558 6.593c0 .828-.66 1.5-1.475 1.5a1.488 1.488 0 01-1.475-1.5c0-.829.66-1.5 1.475-1.5.815 0 1.475.671 1.475 1.5z"></path>
            </svg>
          </div>
          <span className="elements-texts">Label</span>
        </div>
        <div
          className="elements-container46"
          draggable="true"
          onDrag={() => handleDrag('Input')}
        >
          <div className="elements-container-svg">
            <svg
              width="32"
              height="14"
              viewBox="0 0 32 14"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.5 4.857V4h-3v.857h3zM6.5 10v-.857h-3V10h3z"></path>
              <path d="M5.5 10h-1V4h1v6z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 1.5A.5.5 0 001 2v10a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5h-29zM0 2A1.5 1.5 0 011.5.5h29A1.5 1.5 0 0132 2v10a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 010 12V2z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Input</span>
        </div>
        <div
          className="elements-container49"
          draggable="true"
          onDrag={() => handleDrag('Textarea')}
        >
          <div className="elements-container-svg">
            <svg
              width="33"
              height="23"
              viewBox="0 0 33 23"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 4.857V4H4v.857h3zM7 10v-.857H4V10h3z"></path>
              <path d="M6 10H5V4h1v6z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 1.5a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2zM.5 2A1.5 1.5 0 012 .5h29A1.5 1.5 0 0132.5 2v19a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 21V2z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Textarea</span>
        </div>
        <div
          className="elements-container52"
          draggable="true"
          onDrag={() => handleDrag('Checkbox')}
        >
          <div className="elements-container-svg">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 1.588h16v2.166l1-1V1.588a1 1 0 00-1-1H1a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V8.41l-1 1v8.177H1v-16z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.707 5.295l-10.005 10a1 1 0 01-1.405.01L2.302 9.461 3.698 8.03l5.288 5.153 9.307-9.302 1.414 1.414z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Checkbox</span>
        </div>
        <div
          className="elements-container55"
          draggable="true"
          onDrag={() => handleDrag('Radio')}
        >
          <div className="elements-container-svg">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 1.588a8 8 0 100 16 8 8 0 000-16zm-9 8a9 9 0 1118 0 9 9 0 01-18 0z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 5.088a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm-6.5 4.5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Radio Button</span>
        </div>
        <div
          className="elements-container59"
          draggable="true"
          onDrag={() => handleDrag('Select')}
        >
          <div className="elements-container-svg">
            <svg
              width="32"
              height="13"
              viewBox="0 0 32 13"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 13H9V0h1v13zM8 5H2l3 4.5L8 5z" fill="#BFBFBF"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1a1 1 0 011-1h30a1 1 0 011 1v11a1 1 0 01-1 1H1a1 1 0 01-1-1V1zm31 0H1v11h30V1z"
                fill="#BFBFBF"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Select</span>
        </div>
      </div>
      <div
        className="elements-elements-header4"
        onClick={handleDropPanel}
        id="5"
      >
        <span className="elements-title5" id="5">
          Interactive
        </span>
        <svg
          viewBox="0 0 1024 1024"
          className="elements-arrow5"
          id="5"
          style={isDrop[5] ? { rotate: '0deg' } : { rotate: '90deg' }}
        >
          <path
            id="5"
            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
          ></path>
        </svg>
      </div>
      <div
        className="elements-container61"
        style={isDrop[5] ? { display: 'flex' } : { display: 'none' }}
      >
        <div
          className="elements-container62"
          draggable="true"
          onDrag={() => handleDrag('Dropdown')}
        >
          <div className="elements-container-svg">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 2.5A2.5 2.5 0 012.5 0h27A2.5 2.5 0 0132 2.5v9a2.5 2.5 0 01-2.5 2.5h-27A2.5 2.5 0 010 11.5v-9zM2.5 1A1.5 1.5 0 001 2.5v9A1.5 1.5 0 002.5 13h27a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0029.5 1h-27z"
              ></path>
              <path d="M7.202 10H5.23V4.182h2.011c.578 0 1.074.116 1.49.35.416.23.736.563.96.996.223.434.335.953.335 1.557 0 .606-.113 1.127-.338 1.563-.224.435-.547.77-.97 1.003-.42.233-.925.349-1.516.349zm-.918-.912h.867c.405 0 .743-.074 1.014-.222.27-.15.474-.372.61-.667.137-.297.205-.669.205-1.114 0-.445-.068-.814-.204-1.108a1.395 1.395 0 00-.606-.662c-.265-.147-.594-.221-.988-.221h-.898v3.994zM11.027 10V4.182h2.182c.447 0 .822.077 1.125.233.305.155.535.373.69.653.157.279.236.603.236.975 0 .373-.08.697-.239.971-.157.273-.389.484-.696.634-.306.147-.683.221-1.13.221H11.64v-.875h1.412c.26 0 .475-.036.642-.108a.764.764 0 00.369-.32c.081-.143.122-.317.122-.523 0-.207-.04-.383-.122-.529a.777.777 0 00-.372-.335c-.167-.078-.382-.117-.645-.117h-.966V10h-1.054zm3.006-2.636L15.473 10h-1.176l-1.415-2.636h1.15zM21.429 7.09c0 .628-.117 1.165-.352 1.612a2.495 2.495 0 01-.955 1.022 2.64 2.64 0 01-1.366.355c-.51 0-.966-.118-1.37-.355a2.54 2.54 0 01-.954-1.025c-.233-.447-.35-.983-.35-1.608 0-.627.117-1.163.35-1.608.235-.447.553-.789.954-1.026.404-.236.86-.355 1.37-.355.51 0 .965.119 1.366.355.404.237.722.579.955 1.026.235.445.352.981.352 1.608zm-1.06 0c0-.44-.069-.813-.207-1.116a1.536 1.536 0 00-.568-.69 1.506 1.506 0 00-.838-.236c-.317 0-.596.079-.838.236a1.554 1.554 0 00-.571.69c-.137.303-.205.676-.205 1.117 0 .441.068.814.205 1.12.138.302.328.532.57.69.243.155.522.233.839.233.316 0 .595-.078.838-.233.242-.158.432-.388.568-.69.138-.306.207-.679.207-1.12zM22.425 10V4.182h2.182c.447 0 .822.083 1.125.25.305.166.535.396.69.687.158.29.236.62.236.989 0 .373-.078.705-.235.994-.158.29-.39.518-.696.685-.307.165-.685.247-1.134.247h-1.446v-.866h1.304c.261 0 .475-.046.642-.137a.86.86 0 00.37-.375c.08-.159.121-.342.121-.548 0-.206-.04-.388-.122-.545a.83.83 0 00-.372-.367c-.166-.089-.381-.133-.645-.133h-.966V10h-1.054z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18a2 2 0 012-2h18a2 2 0 110 4H12a2 2 0 01-2-2zm2-1a1 1 0 100 2h18a1 1 0 100-2H12zM10 24a2 2 0 012-2h18a2 2 0 110 4H12a2 2 0 01-2-2zm2-1a1 1 0 100 2h18a1 1 0 100-2H12zM10 30a2 2 0 012-2h18a2 2 0 110 4H12a2 2 0 01-2-2zm2-1a1 1 0 100 2h18a1 1 0 100-2H12z"
              ></path>
            </svg>
          </div>
          <span className="elements-texts">Dropdown</span>
        </div>
        <div
          className="elements-container68"
          draggable="true"
          onDrag={() => handleDrag('Navbar')}
        >
          <div className="elements-container-svg">
            <svg
              width="32"
              height="14"
              viewBox="0 0 32 14"
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 2.5A2.5 2.5 0 012.5 0h27A2.5 2.5 0 0132 2.5v9a2.5 2.5 0 01-2.5 2.5h-27A2.5 2.5 0 010 11.5v-9zM2.5 1A1.5 1.5 0 001 2.5v9A1.5 1.5 0 002.5 13h27a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0029.5 1h-27z"
                fill="#BFBFBF"
              ></path>
              <path d="M3 4h6v6H3V4z"></path>
              <path clipRule="evenodd" d="M24 8h-4V6h4v2z"></path>
              <path clipRule="evenodd" d="M24 8h-4V6h4v2z"></path>
              <path clipRule="evenodd" d="M24 8h-4V6h4v2z"></path>
              <path
                clipRule="evenodd"
                d="M24 8h-4V6h4v2zM29 8h-4V6h4v2z"
              ></path>
              <path clipRule="evenodd" d="M29 8h-4V6h4v2z"></path>
              <path clipRule="evenodd" d="M29 8h-4V6h4v2z"></path>
              <path
                clipRule="evenodd"
                d="M29 8h-4V6h4v2zM19 8h-4V6h4v2z"
              ></path>
              <path clipRule="evenodd" d="M19 8h-4V6h4v2z"></path>
              <path clipRule="evenodd" d="M19 8h-4V6h4v2z"></path>
              <path clipRule="evenodd" d="M19 8h-4V6h4v2z"></path>
            </svg>
          </div>
          <span className="elements-texts">Navbar</span>
        </div>
      </div>
    </div>
  )
}

export default Elements
