import React from 'react'
import './customcode.css'

const CustomCode = (props) => {
    return (
        <div className="custom-code-container">
      <div className="custom-code-google-container">
        <span className="custom-code-gogle-heading">Google</span>
        <span className="custom-code-title">Analytics</span>
        <div className="custom-code-paragraph-container">
          <span className="custom-code-text1">You can find your Google Tag Manager ID</span>
          <span className="custom-code-text2">
            <a href="#">here</a>
          </span>
        </div>
        <input type='text' className="custom-code-gaid" value={props.GAID} />
      </div>
      <div className="custom-code-manager-container">
        <span className="custom-code-manager-title">Tag Manager</span>
        <div className="custom-code-paragraph-container1">
          <span>You can find your Google Analytics ID</span>
          <span className="custom-code-text21">
            <a href="#">here</a>
          </span>
        </div>
        <input type='text' className="custom-code-og-name" value={props.manager} />
      </div>
      <div className="custom-code-custom-container">
        <span className="custom-code-custom-title">Custom code</span>
        <div className="custom-code-section">
          <span className="custom-code-custom-title">
          Use this section if you want to add a 3rd party tool. You will not be able to interact with the 3rd party code while editing your project in the playground, this will only work on your published websites.
          </span>
      <div className="custom-code-paragraph-container2">
        <span className="custom-code-text22">For custom fonts, use the <a href="#">dedicated section.</a> 
        You can add here: <a  href="#">link,</a> <a  href="#">meta,</a> <a  href="#">style,</a> and <a href="#">script.</a>
        Read more about what kind of html code is valid in the <a href="#">
            head
        </a> and <a href="#">
            body
        </a> tags documentation. If the embeddable code has opening and/or closing tags, make sure to add them too.
        </span>
      </div>
        </div>
        <br/>
        <span className="custom-code-text22" >WARNING: Invalid code added here might break your website.</span>
      </div>
      <div className="custom-code-window">
        <div className="custom-code-button-container">
          <div className="custom-code-container1 button">
            <span>Head</span>
          </div>
          <div className="custom-code-container2 button">
            <span>Body</span>
          </div>
        </div>
        <div className="custom-code-code-container">
          <div className="custom-code-head-container">
            <div className="custom-code-line1container">
              <span className="custom-code-line1">1</span>
              <span className="custom-code-code1">
                &#60;!-- this is the code section --&#62;
              </span>
            </div>
            <div className="custom-code-line2container">
              <span className="custom-code-line2">2</span>
              <span className="custom-code-code2">
                &#60;!-- &#60;style&#62; . . . &#60;/style&#62; --&#62;
              </span>
            </div>
          </div>
          <div className="custom-code-body-container">
            <div className="custom-code-line1container1">
              <span className="custom-code-line11">1</span>
              <span className="custom-code-code11">
                &#60;!-- Your body code here --&#62;
              </span>
            </div>
            <div className="custom-code-line2container1">
              <span className="custom-code-line21">2</span>
              <span className="custom-code-code21">
                &#60;!-- &#60;script&#62; type="text/javascript" . . . &#60;/script&#62; --&#62;
              </span>
            </div>
          </div>
        </div>
      </div>
      <button className="custom-code-save-button button">
        Save Changes
      </button>
    </div>
    )
}

CustomCode.defaultProps = {
    GAID: 'Google Analytics ID',
    text11: 'Use this section if you want to add a 3rd party tool. You will not be able to interact with the 3rd party code while editing your project in the playground, this will only work on your published websites.',

    manager: 'Google Tag Manager ID',
    text: 'WARNING: Invalid code added here might break your website.',
}

export default CustomCode
