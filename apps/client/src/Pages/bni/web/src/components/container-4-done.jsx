import React from 'react'

import PropTypes from 'prop-types'

import './container-4-done.css'

const Container4Done = (props) => {
  return (
    <div className={`container-4-done-container ${props.rootClassName} `}>
      <div className="container-4-done-container01">
        <div className="container-4-done-container02">
          <span className="container-4-done-text">A Great Subtitle Here</span>
          <span className="container-4-done-text01">
            <span className="">
              A Little Bit of
              <span
                dangerouslySetInnerHTML={{
                  __html: ' '
                }}
              />
            </span>
            <br className=""></br>
            <span className="">Company history</span>
          </span>
          <span className="container-4-done-text05">
            <span className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </span>
          </span>
        </div>
        <div className="container-4-done-container03">
          <div className="container-4-done-container04">
            <div className="container-4-done-container05">
              <img
                alt={props.Icon017_alt1}
                src={props.Icon017_src1}
                className="container-4-done-icon017"
              />
            </div>
            <span className="container-4-done-text07">
              <span className="">Simple Text One</span>
            </span>
            <span className="container-4-done-text09">
              <span className="">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </span>
            </span>
          </div>
          <div className="container-4-done-container06">
            <div className="container-4-done-container07">
              <img
                alt={props.Icon017_alt11}
                src={props.Icon017_src11}
                className="container-4-done-icon0171"
              />
            </div>
            <span className="container-4-done-text11">Simple Text Two</span>
            <span className="container-4-done-text12">
              <span className="">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="container-4-done-container08">
        <div className="container-4-done-container09"></div>
      </div>
      <div className="container-4-done-container10"></div>
    </div>
  )
}

Container4Done.defaultProps = {
  rootClassName: '',
  Icon017_src1: '/playground_assets/icon0171207-8kmr.svg',
  Icon017_alt11: 'Icon0171207',
  Icon017_src11: '/playground_assets/icon0171207-8kmr.svg',
  Icon017_alt1: 'Icon0171207'
}

Container4Done.propTypes = {
  rootClassName: PropTypes.string,
  Icon017_src1: PropTypes.string,
  Icon017_alt11: PropTypes.string,
  Icon017_src11: PropTypes.string,
  Icon017_alt1: PropTypes.string
}

export default Container4Done
