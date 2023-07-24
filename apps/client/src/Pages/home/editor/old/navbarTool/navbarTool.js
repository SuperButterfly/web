import { Buttons } from './Buttons'
import Container1 from './Container1'
import Container2 from './Container2'
import Container3 from './Container3'
import Container4 from './Container4'

const NavbarTool = () => {
  return (
    <div
      className="navbarTool"
      style={{ border: '1px solid rgba(120, 120, 120, 0.4)' }}
    >
      <Buttons />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <div
        style={{ borderTop: '1px solid rgba(120, 120, 120, 0.4)' }}
        className="container-toolBar"
      >
        <div className="container1-toolBar">
          <div className="container2-toolBar">
            <span style={{ width: 'auto' }} className="text">
              Stroke
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ borderTop: '1px solid rgba(120, 120, 120, 0.4)' }}
        className="container-toolBar"
      >
        <div className="container1-toolBar">
          <div className="container2-toolBar">
            <span style={{ width: 'auto' }} className="text">
              Shadow
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarTool
