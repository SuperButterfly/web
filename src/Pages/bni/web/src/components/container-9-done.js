import React from 'react'

import PropTypes from 'prop-types'

import './container-9-done.css'

const Container9Done = (props) => {
  return (
    <div className={`container-9-done-container ${props.rootClassName} `}>
      <div className="container-9-done-container01">
        <div className="container-9-done-container02">
          <span className="container-9-done-text">
            <span className="">A Great Subtitle Here</span>
          </span>
          <span className="container-9-done-text02">
            <span className="container-9-done-text03">
              Company
              <span
                dangerouslySetInnerHTML={{
                  __html: ' '
                }}
              />
            </span>
            <span className="container-9-done-text04">Report</span>
            <br className=""></br>
          </span>
          <span className="container-9-done-text06">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euis-mod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea com-modo
            consequat.
          </span>
        </div>
        <div className="container-9-done-container03">
          <div className="container-9-done-container04">
            <span className="container-9-done-text07">
              <span className="">100k</span>
            </span>
            <div className="container-9-done-container05">
              <span className="container-9-done-text09">Simple Text One</span>
              <span className="container-9-done-text10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euis-mod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
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
      <div className="container-9-done-container06">
        <div className="container-9-done-container07">
          <div className="container-9-done-chart3">
            <div className="container-9-done-chart2">
              <div className="container-9-done-group">
                <img
                  alt="Vector1249"
                  src="/playground_assets/vector1249-nbx4.svg"
                  className="container-9-done-vector"
                />
                <img
                  alt="Vector1249"
                  src="/playground_assets/vector1249-xuwm.svg"
                  className="container-9-done-vector1"
                />
                <img
                  alt="Vector1249"
                  src="/playground_assets/vector1249-xhvq.svg"
                  className="container-9-done-vector2"
                />
              </div>
            </div>
            <div className="container-9-done-group1">
              <span className="container-9-done-text11">85.5%</span>
            </div>
          </div>
          <div className="container-9-done-container08">
            <span className="container-9-done-text12">
              <span className="">Working Project</span>
            </span>
            <span className="container-9-done-text14">
              <span className="">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="container-9-done-container09">
        <div className="container-9-done-chart31">
          <div className="container-9-done-chart21">
            <div className="container-9-done-group2">
              <img
                alt="Vector1249"
                src="/playground_assets/vector1249-nbx4.svg"
                className="container-9-done-vector3"
              />
              <img
                alt="Vector1249"
                src="/playground_assets/vector1249-xuwm.svg"
                className="container-9-done-vector4"
              />
              <img
                alt="Vector1249"
                src="/playground_assets/vector1249-xhvq.svg"
                className="container-9-done-vector5"
              />
            </div>
          </div>
          <div className="container-9-done-group3">
            <span className="container-9-done-text16">85.5%</span>
          </div>
        </div>
        <div className="container-9-done-container10">
          <span className="container-9-done-text17">
            <span className="">Working Project</span>
          </span>
          <span className="container-9-done-text19">
            <span className="">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

Container9Done.defaultProps = {
  rootClassName: ''
}

Container9Done.propTypes = {
  rootClassName: PropTypes.string
}

export default Container9Done
