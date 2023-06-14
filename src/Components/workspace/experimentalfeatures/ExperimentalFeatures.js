import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '@/redux/actions/projects.js';

import './experimentalfeatures.css'

const ExperimentalFeatures = () => {

  const { projectSelected } = useSelector(state => state.project);
  const [data, setData] = useState({developerMode:false,tailwindCSS:false,conditionalRendering:false});
  const dispatch = useDispatch();

  useEffect(() => {
    if(projectSelected && projectSelected.experimental) {
      let [ developerMode = false , tailwindCSS = false, conditionalRendering = false ] = projectSelected.experimental
      setData({ developerMode:developerMode.developerMode || false, tailwindCSS:tailwindCSS.tailwindCSS || false, conditionalRendering:conditionalRendering.conditionalRendering || false });
    }
  }, [projectSelected]);

  const handleDeveloperMode = ev => {
      setData(prevData => ({...prevData, developerMode: ev.target.checked }));
  };
  
  const handleTailwindCSS = ev => {
    setData(prevData => ({...prevData, tailwindCSS: ev.target.checked }));
  };

  const handleConditionalRendering = ev =>{
    setData(prevData => ({...prevData, conditionalRendering: ev.target.checked }));
  }

  const handleSubmit= ev=>{
    let {developerMode,tailwindCSS,conditionalRendering} = data
    let dataSave= [{developerMode}, {tailwindCSS},{conditionalRendering} ]
    let copyProject = {...projectSelected,experimental:dataSave}
    
    dispatch(updateProject(projectSelected.id, copyProject));
    console.log('update!')
  }
    
  return (
    <div className="experimental-features-container">
      <div className="experimental-features-header">
        <span className="experimental-features-heading">Experimental Features</span>
        <span className="experimental-features-text1">
          Enable and explore any of our experimental features for the current project.
        </span>
      </div>
      <div className="experimental-features-developer-container">
        <div className="experimental-features-developer-settings">
          <span className="experimental-features-text2">Developer Mode</span>
          <span className="experimental-features-text3">
            It will enable you to create apps that are mixing the benefits of visual editing with the custom code written in JavaScript. Currently, this is only supporting React. ...Read more
          </span>
        </div>
        <label className="switch">
            <input checked={data.developerMode} onChange={handleDeveloperMode} type="checkbox"/>
            <span className="slider round"></span>
        </label>
      </div>
      <div className="experimental-features-taildwind-container">
        <div className="experimental-features-tailwind-settings">
          <span className="experimental-features-text4">Tailwind CSS</span>
          <span className="experimental-features-text31">
            Use Tailwind CSS classes to style your elements in the Editor.
          </span>
        </div>
        <label className="switch">
            <input checked={data.tailwindCSS} type="checkbox" onChange={handleTailwindCSS}/>
            <span className="slider round"></span>
        </label>
      </div>
      <div className="experimental-features-conditional-container">
        <div className="experimental-features-conditional-settings">
          <span className="experimental-features-text5">Conditional Rendering</span>
          <span className="experimental-features-text6">
            Add states and events for the component.
          </span>
        </div>
        <label className="switch">
            <input checked={data.conditionalRendering} type="checkbox" onChange={handleConditionalRendering}/>
            <span className="slider round"></span>
        </label>
      </div>
      <div className="experimental-features-warning-container">
        <div className="experimental-feactures-icon">
          <svg className="experimental-feactures-icon-size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M5.5 0C2.5 0 0 2.5 0 5.5S2.5 11 5.5 11 11 8.5 11 5.5 8.5 0 5.5 0zm0 10C3 10 1 8 1 5.5S3 1 5.5 1 10 3 10 5.5 8 10 5.5 10z"></path><circle cx="5.5" cy="3.5" r="0.5"></circle><path d="M5 5h1v3H5z"></path></svg>
        </div>
        <span className="experimental-features-warning">
          Exporting to HTML/CSS is not available in beta when you create states or events.
        </span>
      </div>
      <button onClick={handleSubmit} className="experimental-features-save-button button">
        Save Changes
      </button>
    </div>
  )
}

export default ExperimentalFeatures
