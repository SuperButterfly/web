import React from 'react'

import PropTypes from 'prop-types'

import './container-6-done.css'

const Container6Done = (props) => {
  return (
    <div className={`container-6-done-container ${props.rootClassName} `}>
      <div className="container-6-done-container01">
        <div className="container-6-done-container02">
          <span className="container-6-done-text">
            <span className="">A Great Subtitle Here</span>
          </span>
          <span className="container-6-done-text02">
            <span className="container-6-done-text03">We provide the best</span>
            <br className=""></br>
            <span className="container-6-done-text05">Business solutions</span>
          </span>
          <span className="container-6-done-text06">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euis-mod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea com-modo
            consequat.
          </span>
        </div>
        <div className="container-6-done-container03">
          <div className="container-6-done-container04">
            <img
              alt="Icon0161183"
              src="/playground_assets/icon0161183-83m.svg"
              className="container-6-done-icon016"
            />
          </div>
          <div className="container-6-done-container05">
            <span className="container-6-done-text07">Simple Text One</span>
            <span className="container-6-done-text08">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' '
                }}
              />
            </span>
          </div>
        </div>
        <div className="container-6-done-container06">
          <div className="container-6-done-container07">
            <img
              alt="Icon0261183"
              src="/playground_assets/icon0261183-qwyn.svg"
              className="container-6-done-icon026"
            />
          </div>
          <div className="container-6-done-container08">
            <span className="container-6-done-text09">
              <span className="container-6-done-text10">Simple Text Two</span>
              <br className=""></br>
            </span>
            <span className="container-6-done-text12">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis-mod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' '
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="container-6-done-container09">
        <div className="container-6-done-container10">
          <div className="container-6-done-container11">
            <span className="container-6-done-text13">
              <span className="">100k</span>
            </span>
            <div className="container-6-done-container12">
              <span className="container-6-done-text15">Simple Text One</span>
              <span className="container-6-done-text16">
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
          <div className="container-6-done-container13"></div>
        </div>
        <div className="container-6-done-container14"></div>
      </div>
    </div>
  )
}

Container6Done.defaultProps = {
  rootClassName: ''
}

Container6Done.propTypes = {
  rootClassName: PropTypes.string
}

export default Container6Done
