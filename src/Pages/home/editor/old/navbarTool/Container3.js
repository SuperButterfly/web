import React from 'react'

const Container3 = () => {
  const border = {
    borderBottom: '1px solid rgba(120, 120, 120, 0.4)'
  }

  return (
    <div style={border} className="container-toolBar">
      <div className="container1-toolBar">
        <div className="container2-toolBar">
          <span className="text">T</span>
          <select style={{ width: '300px' }} className="select">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>
      <div className="container1-toolBar">
        <div className="container2-toolBar">
          <select style={{ width: '105px' }} className="select">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <select style={{ width: '210px' }} className="select">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Container3
