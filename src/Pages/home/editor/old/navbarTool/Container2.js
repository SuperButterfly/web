import React from 'react'

const Container2 = () => {
    const input = {
        width: "100px",
        padding: "0.5rem 1rem",
        border: "1px solid rgba(120, 120, 120, 0.4)"
    }

  return (
    <div className="container-toolBar">
        <div className="container1-toolBar">
            <div className="container2-toolBar">
                <span className="text">X</span>
                <input type="text" style={input} />
            </div>
            <div className="container2-toolBar">
                <select className="select">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Container2