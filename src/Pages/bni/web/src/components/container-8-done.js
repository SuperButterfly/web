import React from 'react'

import PropTypes from 'prop-types'

import './container-8-done.css'

const Container8Done = (props) => {
  return (
    <div className={`container-8-done-container ${props.rootClassName} `}>
      <div className="container-8-done-container01">
        <div className="container-8-done-container02">
          <div className="container-8-done-container03">
            <div className="container-8-done-container04">
              <img
                alt={props.Vector_alt}
                src={props.Vector_src}
                className="container-8-done-vector"
              />
              <span className="container-8-done-text">
                If you candream it,you cando it
              </span>
            </div>
          </div>
        </div>
        <div className="container-8-done-container05">
          <div className="container-8-done-container06">
            <img
              alt={props.Vector_alt1}
              src={props.Vector_src1}
              className="container-8-done-vector1"
            />
            <span className="container-8-done-text01">
              If you candream it,you cando it
            </span>
          </div>
        </div>
      </div>
      <div className="container-8-done-container07">
        <div className="container-8-done-container08">
          <span className="container-8-done-text02">
            <span className="">A Great Subtitle Here</span>
          </span>
          <span className="container-8-done-text04">
            <span className="container-8-done-text05">Why Choose Us</span>
            <br className=""></br>
            <span className="container-8-done-text07">For Your Company</span>
            <br className=""></br>
          </span>
          <span className="container-8-done-text09">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euis-mod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea com-modo
            consequat.
          </span>
        </div>
        <div className="container-8-done-container09">
          <div className="container-8-done-container10">
            <img
              alt="Icon0161183"
              src="/playground_assets/icon0161183-83m.svg"
              className="container-8-done-icon016"
            />
          </div>
          <div className="container-8-done-container11">
            <span className="container-8-done-text10">Simple Text One</span>
            <span className="container-8-done-text11">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className="container-8-done-container12">
          <div className="container-8-done-container13">
            <img
              alt="Icon0261183"
              src="/playground_assets/icon0261183-qwyn.svg"
              className="container-8-done-icon026"
            />
          </div>
          <div className="container-8-done-container14">
            <span className="container-8-done-text12">
              <span className="container-8-done-text13">Simple Text Two</span>
              <br className=""></br>
            </span>
            <span className="container-8-done-text15">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Container8Done.defaultProps = {
  Vector_src1: '/playground_assets/vector1710-h9f6.svg',
  rootClassName: '',
  Vector_src: '/playground_assets/vector1710-h9f6.svg',
  Vector_alt1: 'Vector1710',
  Vector_alt: 'Vector1710',
}

Container8Done.propTypes = {
  Vector_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  Vector_src: PropTypes.string,
  Vector_alt1: PropTypes.string,
  Vector_alt: PropTypes.string,
}

export default Container8Done
