import React from 'react'

import PropTypes from 'prop-types'

import './container-12-done.css'

const Container12Done = (props) => {
  return (
    <div className={`container-12-done-container ${props.rootClassName} `}>
      <div className="container-12-done-container01">
        <div className="container-12-done-container02">
          <span className="container-12-done-text">
            <span className="">A Great Subtitle Here</span>
          </span>
          <span className="container-12-done-text02">
            <span className="container-12-done-text03">Amazing</span>
            <br className=""></br>
            <span className="container-12-done-text05">Mobile Mockup</span>
            <br className=""></br>
          </span>
          <span className="container-12-done-text07">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euis-mod tincidunt ut laoreet dolore magna aliquam erat
            volutpat
          </span>
        </div>
        <div className="container-12-done-container03">
          <div className="container-12-done-container04">
            <div className="container-12-done-chart3">
              <div className="container-12-done-chart2">
                <div className="container-12-done-group">
                  <img
                    alt="Vector1249"
                    src="/playground_assets/vector1249-nbx4.svg"
                    className="container-12-done-vector"
                  />
                  <img
                    alt="Vector1249"
                    src="/playground_assets/vector1249-xuwm.svg"
                    className="container-12-done-vector1"
                  />
                  <img
                    alt="Vector1249"
                    src="/playground_assets/vector1249-xhvq.svg"
                    className="container-12-done-vector2"
                  />
                </div>
              </div>
              <div className="container-12-done-group1">
                <span className="container-12-done-text08">85.5%</span>
              </div>
            </div>
            <div className="container-12-done-container05">
              <span className="container-12-done-text09">500+</span>
              <div className="container-12-done-container06">
                <span className="container-12-done-text10">
                  <span className="">Simple Text One</span>
                </span>
                <span className="container-12-done-text12">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' '
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-12-done-container07">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="container-12-done-image"
        />
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="container-12-done-image1"
        />
      </div>
      <div className="container-12-done-container08">
        <div className="container-12-done-chart31">
          <div className="container-12-done-chart21">
            <div className="container-12-done-group2">
              <img
                alt="Vector1249"
                src="/playground_assets/vector1249-nbx4.svg"
                className="container-12-done-vector3"
              />
              <img
                alt="Vector1249"
                src="/playground_assets/vector1249-xuwm.svg"
                className="container-12-done-vector4"
              />
              <img
                alt="Vector1249"
                src="/playground_assets/vector1249-xhvq.svg"
                className="container-12-done-vector5"
              />
            </div>
          </div>
          <div className="container-12-done-group3">
            <span className="container-12-done-text13">85.5%</span>
          </div>
        </div>
        <div className="container-12-done-container09">
          <span className="container-12-done-text14">500+</span>
          <div className="container-12-done-container10">
            <span className="container-12-done-text15">
              <span className="">Simple Text One</span>
            </span>
            <span className="container-12-done-text17">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' '
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Container12Done.defaultProps = {
  image_src1: '/playground_assets/5a452598546ddca7e1fcbc80-800w.png',
  image_src: '/playground_assets/5a452598546ddca7e1fcbc80-800w.png',
  image_alt: 'image',
  image_alt1: 'image',
  rootClassName: ''
}

Container12Done.propTypes = {
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string
}

export default Container12Done
