import React from 'react'

const Container1 = () => {
  const border = {
    borderBottom: '1px solid rgba(120, 120, 120, 0.4)'
  }

  const input = {
    width: '100px',
    padding: '0.5rem 1rem',
    border: '1px solid rgba(120, 120, 120, 0.4)'
  }

  return (
    <div style={border} className="container-toolBar">
      <div className="container-toolBar">
        <div className="container1-toolBar">
          <div className="container2-toolBar">
            <span className="text">X</span>
            <input type="text" style={input} />
          </div>
          <div className="container2-toolBar">
            <span className="text">Y</span>
            <input type="text" style={input} />
          </div>
        </div>
        <div className="container1-toolBar">
          <div className="container2-toolBar">
            <span className="text">W</span>
            <input type="text" style={input} />
          </div>
          <div className="container2-toolBar">
            <span className="text">H</span>
            <input type="text" style={input} />
          </div>
        </div>
        <div className="container1-toolBar">
          <div className="container2-toolBar">
            <span className="text">W</span>
            <input type="text" style={input} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container1
