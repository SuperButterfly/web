import './textstyle.css'
import { useState, useRef } from 'react'

const TextStyle = () => {
  const showRef = useRef(null)
  const [show, setShow] = useState(false)

  const handleShow = (ev) => {
    ev.preventDefault()
    setShow(!show)
  }

  return (
    <div className="text-style-container">
      <div className="text-style-container1">
        <span className="text-style-text">Text Style</span>
        <button className="text-style-button" onClick={() => setShow(true)}>
          <svg viewBox="0 0 950.8571428571428 1024" className="text-style-icon">
            <path d="M832 694.857c0-14.857-5.714-28.571-16-38.857l-118.857-118.857c-10.286-10.286-24.571-16-38.857-16-16.571 0-29.714 6.286-41.143 18.286 18.857 18.857 41.143 34.857 41.143 64 0 30.286-24.571 54.857-54.857 54.857-29.143 0-45.143-22.286-64-41.143-12 11.429-18.857 24.571-18.857 41.714 0 14.286 5.714 28.571 16 38.857l117.714 118.286c10.286 10.286 24.571 15.429 38.857 15.429s28.571-5.143 38.857-14.857l84-83.429c10.286-10.286 16-24 16-38.286zM430.286 292c0-14.286-5.714-28.571-16-38.857l-117.714-118.286c-10.286-10.286-24.571-16-38.857-16s-28.571 5.714-38.857 15.429l-84 83.429c-10.286 10.286-16 24-16 38.286 0 14.857 5.714 28.571 16 38.857l118.857 118.857c10.286 10.286 24.571 15.429 38.857 15.429 16.571 0 29.714-5.714 41.143-17.714-18.857-18.857-41.143-34.857-41.143-64 0-30.286 24.571-54.857 54.857-54.857 29.143 0 45.143 22.286 64 41.143 12-11.429 18.857-24.571 18.857-41.714zM941.714 694.857c0 43.429-17.714 85.714-48.571 116l-84 83.429c-30.857 30.857-72.571 47.429-116 47.429-44 0-85.714-17.143-116.571-48.571l-117.714-118.286c-30.857-30.857-47.429-72.571-47.429-116 0-45.143 18.286-88 50.286-119.429l-50.286-50.286c-31.429 32-73.714 50.286-118.857 50.286-43.429 0-85.714-17.143-116.571-48l-118.857-118.857c-31.429-31.429-48-72.571-48-116.571 0-43.429 17.714-85.714 48.571-116l84-83.429c30.857-30.857 72.571-47.429 116-47.429 44 0 85.714 17.143 116.571 48.571l117.714 118.286c30.857 30.857 47.429 72.571 47.429 116 0 45.143-18.286 88-50.286 119.429l50.286 50.286c31.429-32 73.714-50.286 118.857-50.286 43.429 0 85.714 17.143 116.571 48l118.857 118.857c31.429 31.429 48 72.571 48 116.571z"></path>
          </svg>
        </button>
      </div>

      <div
        className="text-style-container2"
        ref={showRef}
        style={show ? { display: 'flex' } : { display: 'none' }}
      >
        <div className="text-style-container3">
          <span className="text-style-text1">Text Styles</span>
          <button className="text-style-button" onClick={() => setShow(false)}>
            <svg viewBox="0 0 1024 1024" className="text-style-icon">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </button>
        </div>
        <fieldset className="text-style-container4">
          <legend className="text-style-search">Search</legend>
          <input type="text" className="text-style-textinput" />
        </fieldset>
        <div className="text-style-container5">
          <span className="text-style-text2">Aa</span>
          <span>Content</span>
        </div>
        <div className="text-style-container6">
          <span className="text-style-text4">Aa</span>
          <span>Heading</span>
        </div>
      </div>
    </div>
  )
}

export default TextStyle
