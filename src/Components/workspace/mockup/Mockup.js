import { useState } from 'react'
import Cards from './Cards/Cards.js'
import ModalMockup from '../modalMockup/ModalMockup.js'
import './Mockup.css'

export default function Mockup() {
  const [show, setShow] = useState(true)

  const changeShow = () => {
    const value = !show
    setShow(value)
  }

  return (
    <>
      {show ? (
        <div className="templates-wrapper">
          <div className="templates-topbar">
            <p className="templates-title">
              Customizable templates, handpicked just for you - for free!
            </p>
            <button onClick={changeShow} className="pt-btn underline accent">
              <span className="manage-text">View All</span>
            </button>
          </div>
          <div className="template-cards-container-mockup">
            <Cards />
          </div>
        </div>
      ) : <ModalMockup changeShow={ changeShow } /> }
    </>
  )
}
