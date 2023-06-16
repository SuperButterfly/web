import './translater.css';
import * as React from 'react';
import { createFile } from '../../../redux/actions/translation.js';
import { useDispatch } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  
  const [selectedFile, setSelectedFile] = React.useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(selectedFile);
    dispatch(createFile(data));
  };

  return (
    <div  style={{width:"100%"}}>
    <div className="d-flex">
      <div className="search ml-2 mr-2">
        <div  className="d-flex">
          <div className="dropdown">
            <button onClick={handleOpen}>
            Filters<span className="badge">1</span></button>
            {open ? (
              <ul className="menu">
                <li className="menu-item">
                  <button>Menu 1</button>
                </li>
              </ul>
            ) : null}
            
          </div>
          <div className="search-input">
            <input type="search" placeholder="Search (key, source or target)" />
            <svg 
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search search-icon" viewBox="0 0 16 16"
            >
              <path id="1" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </div>
        </div>
        <div className="home-settings home-translate">
        <ul className="ul-items">
        <li className="list-group-item">asfs</li>
         <li className="list-group-item">asfs</li>
         </ul>
        </div>
      </div>
        <div className="result ml-2 mr-2">
          <div className="d-flex">
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
              <button className="ml-2" type="submit">Import</button>
            </form>
          </div>
          <textarea/>
          <textarea/>
        </div>
    </div>
    </div>
  );
};

export default Main;
