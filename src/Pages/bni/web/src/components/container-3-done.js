import React from 'react'

import PropTypes from 'prop-types'

import './container-3-done.css'

const Container3Done = (props) => {
  return (
    <div className={`container-3-done-container ${props.rootClassName} `}>
      <div className="container-3-done-container1">
        <div className="container-3-done-container2">
          <span className="container-3-done-text">
            <span className="">A Great Subtitle Here</span>
          </span>
          <span className="container-3-done-text02">
            <span className="container-3-done-text03">Welcome</span>
            <br className="container-3-done-text04"></br>
            <span className="container-3-done-text05">To My</span>
            <br className=""></br>
            <span className="container-3-done-text07">Presentation</span>
          </span>
        </div>
        <div className="container-3-done-container3">
          <span className="container-3-done-text08">
            <span className="">Write A Great Text Here</span>
          </span>
          <span className="container-3-done-text10">
            <span className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              com-modo consequat.
            </span>
          </span>
        </div>
      </div>
      <div className="container-3-done-container4">
        <div className="container-3-done-container5"></div>
      </div>
      <div className="container-3-done-container6"></div>
    </div>
  )
}

Container3Done.defaultProps = {
  rootClassName: '',
}

Container3Done.propTypes = {
  rootClassName: PropTypes.string,
}

export default Container3Done
