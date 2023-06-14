import React from 'react'


import PropTypes from 'prop-types'

import './container-1-done.css'

const Container1Done = (props) => {
  return (
    <div className={`container-1-done-container ${props.rootClassName} `}>
      <div className="container-1-done-container01">
        <div className="container-1-done-container02">
          <div className="container-1-done-logo">
            <div className="container-1-done-icon7">
              <img
                alt="Vector1276"
                src="./playground_assets/vector1276-v7q.svg"
                className="container-1-done-vector"
              />
              <div className="container-1-done-container03">
                <div className="container-1-done-group">
                  <div className="container-1-done-group1">
                    <img
                      alt="Vector1276"
                      src="./playground_assets/vector1276-tswg.svg"
                      className="container-1-done-vector1"
                    />
                    <img
                      alt="Vector1276"
                      src="./playground_assets/vector1276-kpbi.svg"
                      className="container-1-done-vector2"
                    />
                  </div>
                </div>
                <div className="container-1-done-group2">
                  <div className="container-1-done-group3">
                    <img
                      alt="Vector1276"
                      src="/playground_assets/vector1276-a368.svg"
                      className="container-1-done-vector3"
                    />
                    <img
                      alt="Vector1276"
                      src="./playground_assets/vector1276-evfk.svg"
                      className="container-1-done-vector4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-1-done-text10">
              <span className="container-1-done-text">LOGO TEXT</span>
              <span className="container-1-done-text01">Slogan business</span>
            </div>
          </div>
          <div className="container-1-done-container04"></div>
        </div>
        <div className="container-1-done-container05">
          <div className="container-1-done-container06">
            <span className="container-1-done-text02">
              <span className="">Startup</span>
            </span>
            <span className="container-1-done-text04">
              <span className="">PRESENTATION TEMPLATE</span>
            </span>
          </div>
          <div className="container-1-done-container07">
            <img
              alt={props.Vector_alt}
              src={props.Vector_src}
              className="container-1-done-vector5"
            />
            <span className="container-1-done-text06">
              <span className="">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </span>
            </span>
          </div>
          <div className="container-1-done-container08">
            <div className="container-1-done-container09">
              <span className="container-1-done-text08">
                <span className="">Visit Now</span>
              </span>
            </div>
            <span className="container-1-done-text10">
              <span className="">www.websitename.com</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Container1Done.defaultProps = {
  rootClassName: '',
  text1: 'Text',
  Vector_src: '/playground_assets/vector1250-xm89.svg',
  text: 'Text',
  Vector_alt: 'Vector1250',
}

Container1Done.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  Vector_src: PropTypes.string,
  text: PropTypes.string,
  Vector_alt: PropTypes.string,
}

export default Container1Done
