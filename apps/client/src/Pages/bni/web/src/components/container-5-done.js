import React from 'react'

import PropTypes from 'prop-types'

import './container-5-done.css'

const Container5Done = (props) => {
  return (
    <div className={`container-5-done-container ${props.rootClassName} `}>
      <div className="container-5-done-container01">
        <div className="container-5-done-container02">
          <span className="container-5-done-text">
            <span className="">A Great Subtitle Here</span>
          </span>
          <span className="container-5-done-text02">
            <span className="">
              Our Future
              <span
                dangerouslySetInnerHTML={{
                  __html: ' '
                }}
              />
            </span>
            <span className="">Project</span>
          </span>
        </div>
      </div>
      <div className="container-5-done-container03">
        <div className="container-5-done-container04">
          <div className="container-5-done-container05"></div>
          <div className="container-5-done-container06">
            <img
              alt="Icon0331183"
              src="/playground_assets/icon0331183-hle.svg"
              className="container-5-done-icon033"
            />
          </div>
          <div className="container-5-done-container07">
            <span className="container-5-done-text05">
              <span className="">Simple Text One</span>
            </span>
            <span className="container-5-done-text07">
              <span className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </span>
            </span>
          </div>
        </div>
        <div className="container-5-done-container08">
          <div className="container-5-done-container09"></div>
          <div className="container-5-done-container10">
            <img
              alt="Icon0161183"
              src="/playground_assets/icon0161183-83m.svg"
              className="container-5-done-icon016"
            />
          </div>
          <div className="container-5-done-container11">
            <span className="container-5-done-text09">Simple Text Two</span>
            <span className="container-5-done-text10">
              <span className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </span>
            </span>
          </div>
        </div>
        <div className="container-5-done-container12">
          <div className="container-5-done-container13"></div>
          <div className="container-5-done-container14">
            <img
              alt="Icon0261183"
              src="/playground_assets/icon0261183-qwyn.svg"
              className="container-5-done-icon026"
            />
          </div>
          <div className="container-5-done-container15">
            <span className="container-5-done-text12">Simple Text Three</span>
            <span className="container-5-done-text13">
              <span className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Container5Done.defaultProps = {
  rootClassName: ''
}

Container5Done.propTypes = {
  rootClassName: PropTypes.string
}

export default Container5Done
