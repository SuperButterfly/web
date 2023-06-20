import { useSelector } from 'react-redux';
import { useState } from 'react';
import './UserDirectory.css';
import LayersFiles from '../../layersandfiles/LayersFiles'

const UserDirectory = () => {
  const { projectSelected, target } = useSelector(state => state.project);
  const [isFolderOpen, setFolderOpen] = useState(false);
  console.log(projectSelected);
  
  // Rotador del arrow
  const handleOpenFolder = (ev) => {
    ev.preventDefault();
    const { id } = ev.target;
    // let change = !isMainSelected[id];
    // setIsMainSelected((prevIsMainSelected) => ({
    //   ...prevIsMainSelected,
    //   [id]: change,
    // }));
    setFolderOpen(!isFolderOpen);
  };

  return (
    <div className='project-container'>
      <span className='project-title'>{projectSelected && projectSelected.name && projectSelected.name.toUpperCase()}</span>
      <div className='folders-title'>
        <svg
          viewBox="0 0 1024 1024"
          className="editor-arrow"
          style={
            isFolderOpen
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(-90deg)" }
          }
        >
          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
        </svg>
        <span>assets</span>
      </div>
      <div className='folders-title'>
        <svg
          viewBox="0 0 1024 1024"
          className="editor-arrow"
          style={
            isFolderOpen
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(-90deg)" }
          }
        >
          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
        </svg>
        <span>pages</span>
      </div>
      {
        projectSelected.pages ? (
          <ul>
            {projectSelected.pages.map((page, idx) => (
              <li key={idx}>
                <span>{page.name}</span>
                {isFolderOpen && <LayersFiles target={target}/>}
              </li>
            ))}
          </ul>
        ) : (
          'Agrega una página'
        )
      }
    </div>
  );
};

export default UserDirectory;
