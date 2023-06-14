import './socialsettings.css';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '../../../../src/redux/actions/projects.js';

const SocialSettings = () => {

  const inpFile = useRef(null);
  const handleInp = ev => {
    ev.preventDefault()
    inpFile.current.click();
  }

  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { projectSelected } = useSelector(state => state.project);
  
  const handleTitleChange = ev => {
    setData({...data, name: ev.target.value})
  }

  const handleDescriptionChange = ev => {
    setData({...data, description: ev.target.value})
  }
  
  const handleFileChange = ev => {
    setData({...data, file: ev.target.files[0]})
  }
  
  const handleSubmit = ev => {
    ev.preventDefault();
    console.log('id', projectSelected.id)
    console.log('data', data)
    // dispatch(updateProject(
    //   projectSelected.id, data
    // ));
  };

  return (
    <div className="social-settings-container">
            <div className="social-settings-og-title-container">
            <span className="social-settings-first-heading">Open Graph</span>
        <span className="social-settings-og-title">OG Title</span>
        <span className="social-settings-og-text">
          The title of your page, content, object etc. as you would like for it to appear when displayed on social media platforms.
        </span>
        <input type='text' id='og'className="social-settings-og-name" placeholder='Strong Earnest Coyote' onChange={handleTitleChange} />
      </div>
      <div className="social-settings-og-description-container">
        <span className="social-settings-heading-o-gdescription">
          OG Description
        </span>
        <span className="social-settings-metadescription-text">
          1-2 sentence snippet that shows up in the social media post, which describes the content of the website. Maximum 200 characters.
        </span>
        <textarea 
            className="social-settings-og-description" 
            placeholder='Description of your project'
            rows="4" 
            id='ogDescription'
            onChange={handleDescriptionChange}
        >
        </textarea>
      </div>
      <div className="social-settings-og-input-cont">
        <span className="social-settings-heading-o-g">OG Image</span>
        <span className="social-settings-og-text1">
          The image that shows up when you share the page on social media. We accept GIF, JPG, JPEG, PNG and WEBP file types. Recommended formats are 1:1 or 1.9:1.
        </span>
        <div className="social-settings-og-input">
          <input id='fileinput' type='file' style={{display:'none'}} ref={inpFile} onChange={handleFileChange}/>
          <div className="social-settings-container1">
            <div className="social-settings-ico"></div>
            <span className="social-settings-nofile">No file selected</span>
          </div>
          <button 
            className="social-settings-icon-button button"
            onClick={handleInp}
          >
            Browse Files
          </button>
        </div>
      </div>
      <button 
        className="social-settings-save-button button"
        onClick={handleSubmit}  
      >
        Save Changes
      </button>
    </div>
  );
};

export default SocialSettings;
