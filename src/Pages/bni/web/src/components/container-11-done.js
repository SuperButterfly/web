import React from 'react'

import PropTypes from 'prop-types'

import './container-11-done.css'

const Container11Done = (props) => {
  return (
    <div className={`container-11-done-container ${props.rootClassName} `}>
      <div className="container-11-done-container01">
        <span className="container-11-done-text">
          <span className="">A Great Subtitle Here</span>
        </span>
        <span className="container-11-done-text02">
          <span className="container-11-done-text03">Pricing</span>
          <span className="container-11-done-text04">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="container-11-done-text05">Table</span>
        </span>
        <span className="container-11-done-text06">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euis-mod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </div>
      <div className="container-11-done-container02">
        <div className="container-11-done-container03">
          <div className="container-11-done-container04">
            <span className="container-11-done-text07">Simple Text One</span>
            <span className="container-11-done-text08">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore
            </span>
          </div>
          <div className="container-11-done-container05">
            <span className="container-11-done-text09">Simple Text Two</span>
            <span className="container-11-done-text10">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="container-11-done-container06">
            <span className="container-11-done-text11">Simple Text Three</span>
            <span className="container-11-done-text12">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className="container-11-done-infographic">
          <div className="container-11-done-container07">
            <img
              alt="Vector1243"
              src="/playground_assets/vector1243-s0bx.svg"
              className="container-11-done-vector"
            />
            <img
              alt="Vector1243"
              src="/playground_assets/vector1243-ys9e.svg"
              className="container-11-done-vector1"
            />
            <img
              alt="Vector1243"
              src="/playground_assets/vector1243-pal.svg"
              className="container-11-done-vector2"
            />
            <img
              alt="Vector1243"
              src="/playground_assets/vector1243-b7xb.svg"
              className="container-11-done-vector3"
            />
            <img
              alt="Vector1244"
              src="/playground_assets/vector1244-bqri.svg"
              className="container-11-done-vector4"
            />
            <img
              alt="Vector1244"
              src="/playground_assets/vector1244-tr7q.svg"
              className="container-11-done-vector5"
            />
            <div className="container-11-done-group">
              <img
                alt="Vector1244"
                src="/playground_assets/vector1244-p25e.svg"
                className="container-11-done-vector6"
              />
              <img
                alt="Vector1244"
                src="/playground_assets/vector1244-worr.svg"
                className="container-11-done-vector7"
              />
              <img
                alt="Vector1244"
                src="/playground_assets/vector1244-p4t.svg"
                className="container-11-done-vector8"
              />
            </div>
          </div>
        </div>
        <div className="container-11-done-container08">
          <div className="container-11-done-container09">
            <span className="container-11-done-text13">Simple Text Four</span>
            <span className="container-11-done-text14">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="container-11-done-container10">
            <span className="container-11-done-text15">Simple Text Five</span>
            <span className="container-11-done-text16">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="container-11-done-container11">
            <span className="container-11-done-text17">Simple Text Six</span>
            <span className="container-11-done-text18">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore
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

Container11Done.defaultProps = {
  rootClassName: '',
}

Container11Done.propTypes = {
  rootClassName: PropTypes.string,
}

export default Container11Done
