import { useState } from 'react'
import Cards from './Cards/Cards'
import ModalMockup from '../modalMockup/ModalMockup'
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
        <div className="templates-wrapper01">
          <div className="templates-topbar01">
            <p className="templates-title-mockup">
              Customizable templates, handpicked just for you - for free!
            </p>
            <button onClick={changeShow} className="pt-btn underline accent">
              <span className="manage-text-mockup">View All</span>
            </button>
          </div>
          <div className="template-mockup01">
            <Cards />
          </div>
        </div>
      ) : (
        <ModalMockup changeShow={changeShow} />
      )}
    </>
  )
}
