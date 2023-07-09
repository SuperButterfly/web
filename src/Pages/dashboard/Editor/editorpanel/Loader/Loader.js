import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-content">
      <div
        style={{
          animationName: 'spin',
          animationDuration: '1s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}
        className="circle"
      ></div>

      <div className="loader">
        <img
          src="https://res.cloudinary.com/deqxuoyrc/image/upload/v1685556235/Recurso_1_jikyyy.svg"
          alt="Loader"
          style={{ width: '200px' }}
        />
      </div>
    </div>
  )
}

export default Loader
