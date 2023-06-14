import React from 'react'

import PropTypes from 'prop-types'

import './container-7-done.css'

const Container7Done = (props) => {
  return (
    <div className={`container-7-done-container ${props.rootClassName} `}>
      <div className="container-7-done-container01">
        <div className="container-7-done-container02">
          <span className="container-7-done-text">
            <span className="">A Great Subtitle Here</span>
          </span>
          <span className="container-7-done-text02">
            <span className="container-7-done-text03">Meet our</span>
            <span className="">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="container-7-done-text05">TeamMember</span>
          </span>
          <span className="container-7-done-text06">
            <span className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </span>
          </span>
        </div>
      </div>
      <div className="container-7-done-container03">
        <div className="container-7-done-container04">
          <div className="container-7-done-container05"></div>
          <div className="container-7-done-container06">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="container-7-done-icon"
            >
              <path
                d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                className=""
              ></path>
            </svg>
          </div>
          <div className="container-7-done-container07">
            <span className="container-7-done-text08">Name person</span>
            <span className="container-7-done-text09">Founder</span>
            <span className="container-7-done-text10">
              <span className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </span>
            </span>
          </div>
        </div>
        <div className="container-7-done-container08">
          <div className="container-7-done-container09"></div>
          <div className="container-7-done-container10">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="container-7-done-icon2"
            >
              <path
                d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                className=""
              ></path>
            </svg>
          </div>
          <div className="container-7-done-container11">
            <span className="container-7-done-text12">Name person</span>
            <span className="container-7-done-text13">Manager</span>
            <span className="container-7-done-text14">
              <span className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s
              </span>
            </span>
          </div>
        </div>
        <div className="container-7-done-container12">
          <div className="container-7-done-container13"></div>
          <div className="container-7-done-container14">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="container-7-done-icon4"
            >
              <path
                d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                className=""
              ></path>
            </svg>
          </div>
          <div className="container-7-done-container15">
            <span className="container-7-done-text16">Name person</span>
            <span className="container-7-done-text17">CEO</span>
            <span className="container-7-done-text18">
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

Container7Done.defaultProps = {
  rootClassName: '',
}

Container7Done.propTypes = {
  rootClassName: PropTypes.string,
}

export default Container7Done
