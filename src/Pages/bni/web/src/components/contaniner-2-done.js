import React from 'react'

import PropTypes from 'prop-types'

import './contaniner-2-done.css'

const Contaniner2Done = (props) => {
  return (
    <div className={`contaniner-2-done-container ${props.rootClassName} `}>
      <div className="contaniner-2-done-container1">
        <div className="contaniner-2-done-container2">
          <div className="contaniner-2-done-container3">
            <span className="contaniner-2-done-text">
              <span className="">A Great Subtitle Here</span>
            </span>
            <span className="contaniner-2-done-text02">
              <span className="">About Our</span>
              <br className=""></br>
              <span className="">Company</span>
            </span>
          </div>
          <div className="contaniner-2-done-container4"></div>
        </div>
        <div className="contaniner-2-done-container5">
          <div className="contaniner-2-done-container6">
            <span className="contaniner-2-done-text06">
              <span className="">Write A Great Text Here</span>
            </span>
            <span className="contaniner-2-done-text08">
              <span className="">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euis-mod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea com-modo consequat.
              </span>
            </span>
          </div>
          <div className="contaniner-2-done-container7">
            <div className="contaniner-2-done-chart3">
              <div className="contaniner-2-done-chart2">
                <div className="contaniner-2-done-group">
                  <img
                    alt="Vector1249"
                    src="/playground_assets/vector1249-nbx4.svg"
                    className="contaniner-2-done-vector"
                  />
                  <img
                    alt="Vector1249"
                    src="/playground_assets/vector1249-xuwm.svg"
                    className="contaniner-2-done-vector1"
                  />
                  <img
                    alt="Vector1249"
                    src="/playground_assets/vector1249-xhvq.svg"
                    className="contaniner-2-done-vector2"
                  />
                </div>
              </div>
              <div className="contaniner-2-done-group1">
                <span className="contaniner-2-done-text10">
                  <span className="">65.8%</span>
                </span>
              </div>
            </div>
            <div className="contaniner-2-done-container8">
              <span className="contaniner-2-done-text12">
                <span className="">Working Project</span>
              </span>
              <span className="contaniner-2-done-text14">
                <span className="">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contaniner2Done.defaultProps = {
  rootClassName: ''
}

Contaniner2Done.propTypes = {
  rootClassName: PropTypes.string
}

export default Contaniner2Done
