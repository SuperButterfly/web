import './fontssettings.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '../../../../src/redux/actions/projects.js';

const FontsSettings = () => {

  const props = {
    name: 'Custom name',
    url: 'Custom font url',
    font1: 'Georgia',
    font2: 'Impact',
    font3: 'Inter',
    urlfont3: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
  }

  const [data, setData] = useState(props)
  const dispatch = useDispatch()
  const { projectSelected } = useSelector(state => state.project)
  
  useEffect(() => {
    console.log(projectSelected)
  }, [projectSelected])


  const handleNameChange = ev => {
    setData({...data, name: ev.target.value})
  }
  
  const handleFontChange = ev => {
    setData({...data, url: ev.target.value})
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
    <div className="fonts-settings-container">
      <div className="fonts-settings-name-container">
        <span className="fonts-settings-nametitle">Name</span>
        <span className="fonts-settings-name-text">
          Name to be displayed in the Font list
        </span>
        <div className="fonts-settings-name-input">
          <input type='text' id='name' className="fonts-settings-name" value={data.name} onChange={handleNameChange}/>
        </div>
      </div>
      <div className="fonts-settings-url-container">
        <span className="fonts-settings-heading-url">Font URL</span>
        <span className="fonts-settings-url-text1">
          Custom fonts will be available after they are added.
        </span>
        <span className="fonts-settings-url-text2">
          Adding Google Fonts can be done from inside your project.
        </span>
        <input type='text' id='url' className="fonts-settings-url" value={data.url} onChange={handleFontChange}/>
      </div>
      <button 
        className="fonts-settings-add-button button"
        onClick={handleSubmit}  
      >
        Add Font
      </button>
      <div className="fonts-settings-container1">
        <span className="fonts-settings-activefonts">Active fonts</span>
        <span className="fonts-settings-font1">{data.font1}</span>
        <span className="fonts-settings-font2">{data.font2}</span>
        <div className="fonts-settings-container2">
          <span className="fonts-settings-font3">{data.font3}</span>
          <p className="fonts-settings-urlinter">{data.urlfont3}</p>
        </div>
      </div>
    </div>
  )
}

export default FontsSettings
